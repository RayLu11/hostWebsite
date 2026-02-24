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
});
