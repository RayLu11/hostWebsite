// Language management
let currentLanguage = 'en';

// Language data
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'About': 'About',
        'Services': 'Services',
        'FAQ': 'FAQ',
        'Contact': 'Contact',
        
        // Header
        'Wenrui Li': 'Wenrui Li',
        'Licensed Psychotherapist': 'Licensed Psychotherapist',
        
        // Hero
        'Welcome to a Safe Space for Healing': 'Welcome to a Safe Space for Healing',
        'I provide compassionate, evidence-based therapy to help you navigate life\'s challenges and find inner peace. Together, we\'ll work towards healing and personal growth in a supportive, non-judgmental environment.': 'I provide compassionate, evidence-based therapy to help you navigate life\'s challenges and find inner peace. Together, we\'ll work towards healing and personal growth in a supportive, non-judgmental environment.',
        'Years Experience': 'Years Experience',
        'Clients Helped': 'Clients Helped',
        'Specialties': 'Specialties',
        'Therapist Photo': 'Therapist Photo',
        
        // About
        'About Me': 'About Me',
        'I am Wenrui Li, a licensed psychotherapist with over 5 years of experience helping individuals navigate their mental health journey. My approach is rooted in compassion, evidence-based practices, and a deep understanding of the human psyche.': 'I am Wenrui Li, a licensed psychotherapist with over 5 years of experience helping individuals navigate their mental health journey. My approach is rooted in compassion, evidence-based practices, and a deep understanding of the human psyche.',
        'I specialize in trauma-informed care, anxiety, depression, and relationship issues. My therapeutic approach combines Internal Family Systems (IFS), EMDR, and Somatic Therapy to provide comprehensive healing that addresses both mind and body.': 'I specialize in trauma-informed care, anxiety, depression, and relationship issues. My therapeutic approach combines Internal Family Systems (IFS), EMDR, and Somatic Therapy to provide comprehensive healing that addresses both mind and body.',
        'I believe in creating a safe, non-judgmental space where you can explore your thoughts, feelings, and experiences. My goal is to empower you with the tools and insights needed to create lasting positive change in your life.': 'I believe in creating a safe, non-judgmental space where you can explore your thoughts, feelings, and experiences. My goal is to empower you with the tools and insights needed to create lasting positive change in your life.',
        'Credentials & Training': 'Credentials & Training',
        'Licensed Psychotherapist': 'Licensed Psychotherapist',
        'Master\'s in Social Work': 'Master\'s in Social Work',
        'Certified IFS Therapist': 'Certified IFS Therapist',
        'EMDR Certified Practitioner': 'EMDR Certified Practitioner',
        'Somatic Therapy Specialist': 'Somatic Therapy Specialist',
        
        // Services
        'Services': 'Services',
        'Evidence-based therapeutic approaches tailored to your unique needs': 'Evidence-based therapeutic approaches tailored to your unique needs',
        'Internal Family Systems (IFS)': 'Internal Family Systems (IFS)',
        'IFS therapy helps you understand and heal the different parts of yourself. This approach recognizes that we all have various internal parts that influence our thoughts, feelings, and behaviors.': 'IFS therapy helps you understand and heal the different parts of yourself. This approach recognizes that we all have various internal parts that influence our thoughts, feelings, and behaviors.',
        'Identify and understand internal conflicts': 'Identify and understand internal conflicts',
        'Develop self-compassion and inner harmony': 'Develop self-compassion and inner harmony',
        'Heal from past trauma and wounds': 'Heal from past trauma and wounds',
        'EMDR Therapy': 'EMDR Therapy',
        'Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based therapy that helps process and heal from traumatic memories and experiences.': 'Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based therapy that helps process and heal from traumatic memories and experiences.',
        'Process traumatic memories safely': 'Process traumatic memories safely',
        'Reduce symptoms of PTSD and anxiety': 'Reduce symptoms of PTSD and anxiety',
        'Develop healthier coping mechanisms': 'Develop healthier coping mechanisms',
        'Somatic Therapy': 'Somatic Therapy',
        'Somatic therapy focuses on the mind-body connection, helping you become aware of how emotions and trauma are stored in your body and how to release them.': 'Somatic therapy focuses on the mind-body connection, helping you become aware of how emotions and trauma are stored in your body and how to release them.',
        'Release stored trauma and tension': 'Release stored trauma and tension',
        'Improve mind-body awareness': 'Improve mind-body awareness',
        'Develop grounding and regulation skills': 'Develop grounding and regulation skills',
        
        // FAQ
        'Frequently Asked Questions': 'Frequently Asked Questions',
        'What can I expect in the first session?': 'What can I expect in the first session?',
        'The first session is an opportunity for us to get to know each other. I\'ll ask about your background, current challenges, and goals for therapy. We\'ll discuss your needs and create a personalized treatment plan.': 'The first session is an opportunity for us to get to know each other. I\'ll ask about your background, current challenges, and goals for therapy. We\'ll discuss your needs and create a personalized treatment plan.',
        'How long does therapy typically take?': 'How long does therapy typically take?',
        'The duration varies depending on your goals and needs. Some clients see significant improvement in 8-12 sessions, while others benefit from longer-term therapy. We\'ll regularly assess progress and adjust accordingly.': 'The duration varies depending on your goals and needs. Some clients see significant improvement in 8-12 sessions, while others benefit from longer-term therapy. We\'ll regularly assess progress and adjust accordingly.',
        'Do you accept insurance?': 'Do you accept insurance?',
        'I am an out-of-network provider. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. Please check with your insurance provider about out-of-network benefits.': 'I am an out-of-network provider. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. Please check with your insurance provider about out-of-network benefits.',
        'What are your fees?': 'What are your fees?',
        'Individual therapy sessions are $200 for 50 minutes. I offer a limited number of sliding scale spots for those with financial need. Please contact me to discuss payment options and availability.': 'Individual therapy sessions are $200 for 50 minutes. I offer a limited number of sliding scale spots for those with financial need. Please contact me to discuss payment options and availability.',
        'Is therapy confidential?': 'Is therapy confidential?',
        'Yes, therapy is confidential. There are a few exceptions, such as if you are at risk of harming yourself or others, or if there is suspected abuse of a minor. I\'ll discuss confidentiality in detail during our first session.': 'Yes, therapy is confidential. There are a few exceptions, such as if you are at risk of harming yourself or others, or if there is suspected abuse of a minor. I\'ll discuss confidentiality in detail during our first session.',
        'Do you offer online therapy?': 'Do you offer online therapy?',
        'Yes, I offer both in-person and online therapy sessions. Online sessions are conducted through a secure, HIPAA-compliant platform. Many clients find online therapy just as effective as in-person sessions.': 'Yes, I offer both in-person and online therapy sessions. Online sessions are conducted through a secure, HIPAA-compliant platform. Many clients find online therapy just as effective as in-person sessions.',
        
        // Contact
        'Contact Me': 'Contact Me',
        'Ready to begin your healing journey? I\'m here to help.': 'Ready to begin your healing journey? I\'m here to help.',
        'Get in Touch': 'Get in Touch',
        'I offer a free 15-minute consultation to discuss your needs and answer any questions you may have about therapy.': 'I offer a free 15-minute consultation to discuss your needs and answer any questions you may have about therapy.',
        'Email': 'Email',
        'Phone': 'Phone',
        'Office': 'Office',
        '123 Healing Street, Suite 100<br>San Francisco, CA 94102': '123 Healing Street, Suite 100<br>San Francisco, CA 94102',
        'Send a Message': 'Send a Message',
        'Name': 'Name',
        'Phone (Optional)': 'Phone (Optional)',
        'Message': 'Message',
        'Please tell me about what brings you to therapy and any questions you may have...': 'Please tell me about what brings you to therapy and any questions you may have...',
        'Send Message': 'Send Message',
        'Please tell me about what brings you to therapy and any questions you may have...': 'Please tell me about what brings you to therapy and any questions you may have...',
        
        // Footer
        '© 2024 Wenrui Li. All rights reserved.': '© 2024 Wenrui Li. All rights reserved.'
    },
    zh: {
        // Navigation
        'Home': '首页',
        'About': '关于',
        'Services': '服务',
        'FAQ': '常见问题',
        'Contact': '联系',
        
        // Header
        'Wenrui Li': '李文瑞',
        'Licensed Psychotherapist': '持证心理治疗师',
        
        // Hero
        'Welcome to a Safe Space for Healing': '欢迎来到安全的疗愈空间',
        'I provide compassionate, evidence-based therapy to help you navigate life\'s challenges and find inner peace. Together, we\'ll work towards healing and personal growth in a supportive, non-judgmental environment.': '我提供富有同理心、基于证据的治疗，帮助您应对生活中的挑战并找到内心的平静。我们将在一个支持性、无评判的环境中共同努力，实现疗愈和个人成长。',
        'Years Experience': '年经验',
        'Clients Helped': '帮助的客户',
        'Specialties': '专业领域',
        'Therapist Photo': '治疗师照片',
        
        // About
        'About Me': '关于我',
        'I am Wenrui Li, a licensed psychotherapist with over 5 years of experience helping individuals navigate their mental health journey. My approach is rooted in compassion, evidence-based practices, and a deep understanding of the human psyche.': '我是李文瑞，一名持证心理治疗师，拥有超过5年帮助个人应对心理健康之旅的经验。我的方法植根于同理心、循证实践和对人类心理的深刻理解。',
        'I specialize in trauma-informed care, anxiety, depression, and relationship issues. My therapeutic approach combines Internal Family Systems (IFS), EMDR, and Somatic Therapy to provide comprehensive healing that addresses both mind and body.': '我专门从事创伤知情护理、焦虑、抑郁和关系问题。我的治疗方法结合了内部家庭系统（IFS）、眼动脱敏再处理（EMDR）和躯体疗法，提供全面的疗愈，同时解决身心问题。',
        'I believe in creating a safe, non-judgmental space where you can explore your thoughts, feelings, and experiences. My goal is to empower you with the tools and insights needed to create lasting positive change in your life.': '我相信创造一个安全、无评判的空间，让您可以探索自己的想法、感受和经历。我的目标是让您掌握所需的工具和洞察力，在您的生活中创造持久的积极变化。',
        'Credentials & Training': '资质与培训',
        'Licensed Psychotherapist': '持证心理治疗师',
        'Master\'s in Social Work': '社会工作硕士',
        'Certified IFS Therapist': '认证IFS治疗师',
        'EMDR Certified Practitioner': 'EMDR认证从业者',
        'Somatic Therapy Specialist': '躯体疗法专家',
        
        // Services
        'Services': '服务',
        'Evidence-based therapeutic approaches tailored to your unique needs': '基于证据的治疗方法，根据您的独特需求定制',
        'Internal Family Systems (IFS)': '内部家庭系统（IFS）',
        'IFS therapy helps you understand and heal the different parts of yourself. This approach recognizes that we all have various internal parts that influence our thoughts, feelings, and behaviors.': 'IFS疗法帮助您理解并疗愈自己的不同部分。这种方法认识到我们都有各种影响我们思想、感受和行为的内在部分。',
        'Identify and understand internal conflicts': '识别和理解内部冲突',
        'Develop self-compassion and inner harmony': '培养自我同情和内心和谐',
        'Heal from past trauma and wounds': '疗愈过去的创伤和伤害',
        'EMDR Therapy': 'EMDR疗法',
        'Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based therapy that helps process and heal from traumatic memories and experiences.': '眼动脱敏再处理（EMDR）是一种循证疗法，帮助处理和疗愈创伤性记忆和经历。',
        'Process traumatic memories safely': '安全地处理创伤性记忆',
        'Reduce symptoms of PTSD and anxiety': '减轻PTSD和焦虑症状',
        'Develop healthier coping mechanisms': '培养更健康的应对机制',
        'Somatic Therapy': '躯体疗法',
        'Somatic therapy focuses on the mind-body connection, helping you become aware of how emotions and trauma are stored in your body and how to release them.': '躯体疗法专注于身心连接，帮助您意识到情绪和创伤如何储存在您的身体中以及如何释放它们。',
        'Release stored trauma and tension': '释放储存的创伤和紧张',
        'Improve mind-body awareness': '改善身心意识',
        'Develop grounding and regulation skills': '培养接地和调节技能',
        
        // FAQ
        'Frequently Asked Questions': '常见问题',
        'What can I expect in the first session?': '第一次咨询我可以期待什么？',
        'The first session is an opportunity for us to get to know each other. I\'ll ask about your background, current challenges, and goals for therapy. We\'ll discuss your needs and create a personalized treatment plan.': '第一次咨询是我们相互了解的机会。我会询问您的背景、当前挑战和治疗目标。我们将讨论您的需求并制定个性化的治疗计划。',
        'How long does therapy typically take?': '治疗通常需要多长时间？',
        'The duration varies depending on your goals and needs. Some clients see significant improvement in 8-12 sessions, while others benefit from longer-term therapy. We\'ll regularly assess progress and adjust accordingly.': '持续时间因您的目标和需求而异。一些客户在8-12次咨询中看到显著改善，而其他人则从长期治疗中受益。我们将定期评估进展并相应调整。',
        'Do you accept insurance?': '您接受保险吗？',
        'I am an out-of-network provider. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. Please check with your insurance provider about out-of-network benefits.': '我是网络外提供者。我可以为您提供超级账单，您可以提交给保险公司以获得潜在报销。请向您的保险公司查询网络外福利。',
        'What are your fees?': '您的费用是多少？',
        'Individual therapy sessions are $200 for 50 minutes. I offer a limited number of sliding scale spots for those with financial need. Please contact me to discuss payment options and availability.': '个人治疗咨询50分钟200美元。我为有经济需求的人提供有限数量的滑动比例名额。请联系我讨论付款选项和可用性。',
        'Is therapy confidential?': '治疗是保密的吗？',
        'Yes, therapy is confidential. There are a few exceptions, such as if you are at risk of harming yourself or others, or if there is suspected abuse of a minor. I\'ll discuss confidentiality in detail during our first session.': '是的，治疗是保密的。有一些例外情况，比如如果您有伤害自己或他人的风险，或者怀疑虐待未成年人。我将在第一次咨询中详细讨论保密性。',
        'Do you offer online therapy?': '您提供在线治疗吗？',
        'Yes, I offer both in-person and online therapy sessions. Online sessions are conducted through a secure, HIPAA-compliant platform. Many clients find online therapy just as effective as in-person sessions.': '是的，我提供面对面和在线治疗咨询。在线咨询通过安全、符合HIPAA的平台进行。许多客户发现在线治疗与面对面咨询同样有效。',
        
        // Contact
        'Contact Me': '联系我',
        'Ready to begin your healing journey? I\'m here to help.': '准备好开始您的疗愈之旅了吗？我在这里帮助您。',
        'Get in Touch': '联系我',
        'I offer a free 15-minute consultation to discuss your needs and answer any questions you may have about therapy.': '我提供免费的15分钟咨询，讨论您的需求并回答您可能对治疗有的任何问题。',
        'Email': '邮箱',
        'Phone': '电话',
        'Office': '办公室',
        '123 Healing Street, Suite 100<br>San Francisco, CA 94102': '123 Healing Street, Suite 100<br>旧金山, CA 94102',
        'Send a Message': '发送消息',
        'Name': '姓名',
        'Phone (Optional)': '电话（可选）',
        'Message': '消息',
        'Please tell me about what brings you to therapy and any questions you may have...': '请告诉我是什么让您寻求治疗以及您可能有的任何问题...',
        'Send Message': '发送消息',
        'Please tell me about what brings you to therapy and any questions you may have...': '请告诉我是什么让您寻求治疗以及您可能有的任何问题...',
        
        // Footer
        '© 2024 Wenrui Li. All rights reserved.': '© 2024 李文瑞。保留所有权利。'
    }
};

// DOM elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const langButtons = document.querySelectorAll('.lang-btn');
const contactForm = document.getElementById('contactForm');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation
    setupNavigation();
    
    // Set up footer navigation
    setupFooterNavigation();
    
    // Set up language switching
    setupLanguageSwitching();
    
    // Set up contact form
    setupContactForm();
    
    // Show home section by default
    showSection('home');
});

// Navigation functionality
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Footer navigation functionality
function setupFooterNavigation() {
    const footerLinks = document.querySelectorAll('.footer-nav-link');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
        });
    });
}

// Language switching functionality
function setupLanguageSwitching() {
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-en], [data-zh]');
    
    elements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const zhText = element.getAttribute('data-zh');
        
        if (lang === 'zh' && zhText) {
            element.textContent = zhText;
        } else if (lang === 'en' && enText) {
            element.textContent = enText;
        }
    });
    
    // Update HTML content for elements with innerHTML
    const htmlElements = document.querySelectorAll('[data-en], [data-zh]');
    htmlElements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const zhText = element.getAttribute('data-zh');
        
        if (lang === 'zh' && zhText && element.innerHTML !== zhText) {
            element.innerHTML = zhText;
        } else if (lang === 'en' && enText && element.innerHTML !== enText) {
            element.innerHTML = enText;
        }
    });
    
    // Update placeholder text for textarea
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        if (lang === 'zh') {
            messageTextarea.placeholder = '请告诉我是什么让您寻求治疗以及您可能有的任何问题...';
        } else {
            messageTextarea.placeholder = 'Please tell me about what brings you to therapy and any questions you may have...';
        }
    }
}

// Contact form functionality
function setupContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert(currentLanguage === 'zh' ? '请填写所有必填字段。' : 'Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert(currentLanguage === 'zh' ? '请输入有效的邮箱地址。' : 'Please enter a valid email address.');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = currentLanguage === 'zh' ? '发送中...' : 'Sending...';
            submitBtn.disabled = true;
            
            // Submit form to Formspree
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert(currentLanguage === 'zh' ? 
                        '感谢您的消息！我会在24小时内回复您。' : 
                        'Thank you for your message! I will get back to you within 24 hours.');
                    
                    // Reset form
                    this.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                alert(currentLanguage === 'zh' ? 
                    '发送失败，请稍后重试。' : 
                    'Failed to send message. Please try again later.');
                console.error('Form submission error:', error);
            })
            .finally(() => {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const targetId = href.substring(1);
        
        // If it's a section link, use the showSection function
        if (targetId && document.getElementById(targetId)) {
            showSection(targetId);
        } else {
            // Otherwise, use smooth scroll
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .faq-card, .contact-form, .credentials');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}); 