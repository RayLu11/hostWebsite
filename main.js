document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            // Very simple toggle logic for mobile (could be enhanced later)
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = '#EAE6DF';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                navLinks.style.zIndex = '100';
            }
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Language Toggle Handling
    const langBtnEn = document.getElementById('lang-en');
    const langBtnZh = document.getElementById('lang-zh');

    function setLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);

        // CSS Active class management
        if (lang === 'zh') {
            langBtnZh.classList.add('active');
            langBtnEn.classList.remove('active');
            document.documentElement.lang = 'zh';
        } else {
            langBtnEn.classList.add('active');
            langBtnZh.classList.remove('active');
            document.documentElement.lang = 'en';
        }

        // Apply HTML content translations
        const translatableElements = document.querySelectorAll('[data-en][data-zh]');
        translatableElements.forEach(el => {
            el.innerHTML = lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
        });

        // Apply Placeholder translations (for the contact text area)
        const placeholderElements = document.querySelectorAll('[data-en-placeholder][data-zh-placeholder]');
        placeholderElements.forEach(el => {
            el.setAttribute('placeholder', lang === 'zh' ? el.getAttribute('data-zh-placeholder') : el.getAttribute('data-en-placeholder'));
        });
    }

    if (langBtnEn && langBtnZh) {
        langBtnEn.addEventListener('click', () => setLanguage('en'));
        langBtnZh.addEventListener('click', () => setLanguage('zh'));

        // Apply on load
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        setLanguage(savedLang);
    }

    // Contact Form AJAX Submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            const currentLang = localStorage.getItem('preferredLanguage') || 'en';

            submitBtn.innerHTML = currentLang === 'zh' ? '发送中...' : 'Sending...';
            submitBtn.disabled = true;
            formStatus.className = 'form-status'; // Reset status

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = currentLang === 'zh'
                        ? '感谢您的留言！我会尽快与您联系。'
                        : 'Thank you for your message! I will get back to you soon.';
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        formStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formStatus.innerHTML = currentLang === 'zh'
                            ? '抱歉，发送留言时出错。请稍后再试或直接发送邮件。'
                            : 'Oops! There was a problem submitting your form. Please try again or email directly.';
                    }
                    formStatus.className = 'form-status error';
                }
            } catch (error) {
                formStatus.className = 'form-status error';
                formStatus.innerHTML = currentLang === 'zh'
                    ? '抱歉，发送留言时出错。请稍后再试或直接发送邮件。'
                    : 'Oops! There was a problem submitting your form. Please try again or email directly.';
            } finally {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    // Dynamic Location Detection and Map SEO Feature
    async function initLocationSEO() {
        const defaultLocation = {
            state: 'CA',
            city: 'Eastvale',
            zip: '91752',
            addressEn: 'Eastvale, CA 91752',
            addressZh: '加州东谷市 (Eastvale, CA 91752)',
            lat: 33.9636,
            lng: -117.5642
        };

        const waLocation = {
            state: 'WA',
            city: 'Bellevue',
            zip: '98006',
            addressEn: 'Bellevue, WA 98006',
            addressZh: '华盛顿州贝尔维尤 (Bellevue, WA 98006)',
            lat: 47.5750,
            lng: -122.1667
        };

        let detectedLocation = { ...defaultLocation };

        try {
            // Asynchronous helper to fetch with a timeout so it never hangs page load
            const fetchWithTimeout = (url, timeout = 3000) => {
                return Promise.race([
                    fetch(url),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
                ]);
            };

            let response = null;
            let data = null;

            try {
                // Attempt 1: db-ip.com (highly reliable, free, supports HTTPS & localhost)
                response = await fetchWithTimeout('https://api.db-ip.com/v2/free/self');
                if (response && response.ok) {
                    data = await response.json();
                } else {
                    throw new Error('db-ip.com failed');
                }
            } catch (err) {
                try {
                    // Fallback Attempt 2: freeipapi.com (reliable, free, supports HTTPS)
                    response = await fetchWithTimeout('https://freeipapi.com/api/json');
                    if (response && response.ok) {
                        data = await response.json();
                    } else {
                        throw new Error('freeipapi.com failed');
                    }
                } catch (err2) {
                    try {
                        // Fallback Attempt 3: ipapi.co (HTTPS fallback, rate-limited)
                        response = await fetchWithTimeout('https://ipapi.co/json/');
                        if (response && response.ok) {
                            data = await response.json();
                        } else {
                            throw new Error('ipapi.co failed');
                        }
                    } catch (err3) {
                        console.warn('All geolocation services failed. Using default CA location.');
                    }
                }
            }

            if (data) {
                // Normalize state code across various API payloads
                const stateCode = (
                    data.region_code || 
                    data.region || 
                    data.stateProvCode || 
                    data.regionName || 
                    ''
                ).toUpperCase();

                if (stateCode === 'WA' || stateCode === 'WASHINGTON') {
                    detectedLocation = { ...waLocation };
                }
            }
        } catch (e) {
            console.warn('IP geolocation lookup failed. Defaulting to CA.', e);
        }

        // Apply to Footer Address UI with translation attributes
        const footerAddressText = document.getElementById('footer-address-text');
        if (footerAddressText) {
            footerAddressText.setAttribute('data-en', detectedLocation.addressEn);
            footerAddressText.setAttribute('data-zh', detectedLocation.addressZh);
            
            // Set initial state matching current language
            const currentLang = localStorage.getItem('preferredLanguage') || 'en';
            footerAddressText.innerHTML = currentLang === 'zh' ? detectedLocation.addressZh : detectedLocation.addressEn;
        }

        // Update Google Maps Iframe Source ONLY if it's different from the default (CA)
        // This prevents the browser from canceling the initial loading iframe request mid-flight
        if (detectedLocation.state === 'WA') {
            const footerMapIframe = document.getElementById('footer-map-iframe');
            if (footerMapIframe) {
                const query = `${detectedLocation.lat},${detectedLocation.lng}`;
                footerMapIframe.src = `https://maps.google.com/maps?q=${query}&z=14&output=embed`;
            }
        }

        // Update JSON-LD SEO Structured Data in Head
        updateLocalBusinessSchema(detectedLocation);
    }

    function updateLocalBusinessSchema(loc) {
        // Remove existing element if present
        const existingSchema = document.getElementById('seo-local-business-schema');
        if (existingSchema) {
            existingSchema.remove();
        }

        const schema = {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Wenrui Li - Licensed Psychotherapist",
            "image": "https://peaceflowcounseling.com/aboutPhoto.png",
            "telephone": "253-518-3288",
            "email": "info@peaceflowcounseling.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": loc.city,
                "addressRegion": loc.state,
                "postalCode": loc.zip,
                "addressCountry": "US"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": loc.lat,
                "longitude": loc.lng
            },
            "url": "https://peaceflowcounseling.com",
            "areaServed": ["CA", "TX", "WA"],
            "description": "Licensed Psychotherapist specializing in trauma healing, IFS, and EMDR therapy online in TX, WA, and CA."
        };

        const script = document.createElement('script');
        script.id = 'seo-local-business-schema';
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema, null, 2);
        document.head.appendChild(script);
    }

    // Initialize dynamic location mapping
    initLocationSEO();
});
