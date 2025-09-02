// Nexus AI Application JavaScript
class NexusAI {
    constructor() {
        this.data = {
            features: [
                {
                    icon: "🚀",
                    title: "Lightning Fast",
                    description: "Execute complex operations in milliseconds with our optimized infrastructure"
                },
                {
                    icon: "🔗",
                    title: "Seamless Integration",
                    description: "Connect with 200+ APIs and services through our universal connector"
                },
                {
                    icon: "🛡️",
                    title: "Enterprise Security",
                    description: "Bank-level encryption and compliance with SOC2, GDPR, and HIPAA"
                },
                {
                    icon: "📊",
                    title: "Real-time Analytics",
                    description: "Monitor performance and insights with live dashboards and reporting"
                },
                {
                    icon: "⚡",
                    title: "AI-Powered",
                    description: "Machine learning algorithms optimize your workflows automatically"
                },
                {
                    icon: "🔧",
                    title: "Custom Solutions",
                    description: "Tailored implementations for your specific business requirements"
                }
            ],
            integrations: [
                "OpenAI GPT-4",
                "Google Cloud AI",
                "AWS Lambda",
                "Microsoft Azure",
                "Salesforce",
                "HubSpot",
                "Stripe",
                "Shopify"
            ],
            stats: [
                {
                    number: "99.9%",
                    label: "Uptime"
                },
                {
                    number: "50ms",
                    label: "Response Time"
                },
                {
                    number: "10M+",
                    label: "API Calls/Day"
                },
                {
                    number: "500+",
                    label: "Enterprise Clients"
                }
            ],
            faq: [
                {
                    question: "How quickly can I get started?",
                    answer: "You can be up and running in under 5 minutes with our guided setup process and pre-built templates."
                },
                {
                    question: "What integrations are supported?",
                    answer: "We support over 200 popular APIs and services, with new integrations added weekly based on user requests."
                },
                {
                    question: "Is my data secure?",
                    answer: "Yes, we use enterprise-grade encryption and are compliant with SOC2, GDPR, HIPAA, and other security standards."
                },
                {
                    question: "Can I customize the workflows?",
                    answer: "Absolutely! Our platform provides full customization capabilities with visual workflow builders and code editors."
                },
                {
                    question: "What support is available?",
                    answer: "We offer 24/7 support, comprehensive documentation, video tutorials, and a dedicated customer success team."
                }
            ],
            testimonials: [
                {
                    name: "Sarah Chen",
                    role: "CTO, TechCorp",
                    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&h=100&fit=crop&crop=face",
                    quote: "This platform transformed our development workflow. We're shipping features 3x faster."
                },
                {
                    name: "Marcus Rodriguez",
                    role: "Lead Engineer, DataFlow",
                    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                    quote: "The AI-powered optimization saved us thousands of hours of manual configuration."
                }
            ]
        };

        this.chart = null;
        this.init();
    }

    init() {
        this.renderContent();
        this.initScrollAnimations();
        this.initCounters();
        this.initTypewriter();
        this.initSmoothScroll();
        this.initMobileNav();
        this.initFAQ();
        this.initDemo();
        this.initTypingAnimation();
    }

    renderContent() {
        this.renderFeatures();
        this.renderIntegrations();
        this.renderFAQ();
        this.renderTestimonials();
    }

    renderFeatures() {
        const featuresGrid = document.querySelector('.features-grid');
        if (!featuresGrid) return;

        featuresGrid.innerHTML = this.data.features.map((feature, index) => `
            <div class="feature-card scroll-reveal" style="animation-delay: ${index * 0.1}s;">
                <span class="feature-icon">${feature.icon}</span>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-description">${feature.description}</p>
            </div>
        `).join('');
    }

    renderIntegrations() {
        const integrationList = document.querySelector('.integration-list');
        if (!integrationList) return;

        integrationList.innerHTML = this.data.integrations.map(integration => `
            <span class="integration-tag">${integration}</span>
        `).join('');
    }

    renderFAQ() {
        const faqList = document.querySelector('.faq-list');
        if (!faqList) return;

        faqList.innerHTML = this.data.faq.map((item, index) => `
            <div class="faq-item scroll-reveal" style="animation-delay: ${index * 0.1}s;">
                <button class="faq-question" data-faq="${index}">
                    <span>${item.question}</span>
                    <span class="faq-icon">▼</span>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        ${item.answer}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderTestimonials() {
        const testimonialsContainer = document.querySelector('.cta-testimonials');
        if (!testimonialsContainer) return;

        testimonialsContainer.innerHTML = this.data.testimonials.map(testimonial => `
            <div class="testimonial scroll-reveal">
                <p class="testimonial-quote">"${testimonial.quote}"</p>
                <div class="testimonial-author">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // Observe all scroll-reveal elements
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // Add stagger animation for feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    initCounters() {
        const counterElements = document.querySelectorAll('.counter');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseFloat(counter.dataset.target);
                    this.animateCounter(counter, target);
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 10) {
                element.textContent = Math.floor(current);
            } else {
                element.textContent = current.toFixed(1);
            }
        }, 20);
    }

    initTypewriter() {
        const typewriterElement = document.querySelector('.typewriter-text');
        if (!typewriterElement) return;

        const text = typewriterElement.dataset.text;
        typewriterElement.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                typewriterElement.textContent = text.slice(0, i + 1);
                i++;
                if (i >= text.length) {
                    clearInterval(typeInterval);
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        typewriterElement.style.borderRight = 'none';
                    }, 2000);
                }
            }, 80);
        }, 1000);
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initMobileNav() {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }
    }

    initFAQ() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.faq-question') || e.target.closest('.faq-question')) {
                const button = e.target.matches('.faq-question') ? e.target : e.target.closest('.faq-question');
                const faqItem = button.closest('.faq-item');
                const isActive = faqItem.classList.contains('active');

                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Open clicked item if it wasn't active
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            }
        });
    }

    initDemo() {
        const powerSlider = document.getElementById('powerSlider');
        const dataToggle = document.getElementById('dataToggle');
        const modelSelect = document.querySelector('.demo-select');

        // Initialize Chart
        this.initChart();

        // Slider event
        if (powerSlider) {
            powerSlider.addEventListener('input', (e) => {
                const value = e.target.value;
                document.querySelector('.slider-value').textContent = `${value}%`;
                this.updateChart(value);
            });
        }

        // Toggle event
        if (dataToggle) {
            dataToggle.addEventListener('change', (e) => {
                this.toggleDataFlow(e.target.checked);
            });
        }

        // Select event
        if (modelSelect) {
            modelSelect.addEventListener('change', (e) => {
                this.updateModel(e.target.value);
            });
        }
    }

    initChart() {
        const ctx = document.getElementById('demoChart');
        if (!ctx) return;

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Performance',
                    data: [65, 59, 80, 81, 56, 75],
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Efficiency',
                    data: [45, 65, 70, 75, 80, 85],
                    borderColor: '#7209b7',
                    backgroundColor: 'rgba(114, 9, 183, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#e5e7eb'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#e5e7eb'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    updateChart(value) {
        if (!this.chart) return;
        
        const multiplier = value / 100;
        const baseData1 = [65, 59, 80, 81, 56, 75];
        const baseData2 = [45, 65, 70, 75, 80, 85];
        
        this.chart.data.datasets[0].data = baseData1.map(val => Math.floor(val * multiplier * 1.5));
        this.chart.data.datasets[1].data = baseData2.map(val => Math.floor(val * multiplier));
        
        this.chart.update('active');
    }

    toggleDataFlow(enabled) {
        if (!this.chart) return;
        
        if (enabled) {
            this.chart.data.datasets[0].borderColor = '#00d4ff';
            this.chart.data.datasets[1].borderColor = '#7209b7';
        } else {
            this.chart.data.datasets[0].borderColor = '#666';
            this.chart.data.datasets[1].borderColor = '#666';
        }
        
        this.chart.update();
    }

    updateModel(modelName) {
        // Add visual feedback for model selection
        const notification = document.createElement('div');
        notification.className = 'model-notification';
        notification.textContent = `Switched to ${modelName}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--nexus-gradient-primary);
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    initTypingAnimation() {
        const typingLine = document.querySelector('.typing-animation .code-text');
        if (!typingLine) return;

        const codeText = `
            <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="variable">client</span>.<span class="function">process</span>({
        `;
        
        let i = 0;
        const typeSpeed = 100;
        
        const startTyping = () => {
            if (i < codeText.length) {
                typingLine.innerHTML = codeText.slice(0, i + 1) + '<span class="typing-cursor">|</span>';
                i++;
                setTimeout(startTyping, typeSpeed);
            } else {
                // Start over after a pause
                setTimeout(() => {
                    i = 0;
                    typingLine.innerHTML = '<span class="typing-cursor">|</span>';
                    setTimeout(startTyping, 1000);
                }, 3000);
            }
        };

        setTimeout(startTyping, 2000);
    }

    // Add some interactive cursor effects
    initCursorEffects() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--nexus-accent-blue);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Scale cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll('button, a, .feature-card, .faq-question');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .custom-cursor {
        transition: all 0.1s ease !important;
    }
    
    @media (max-width: 768px) {
        .custom-cursor {
            display: none;
        }
        
        .nav-links.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(26, 11, 46, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            border-top: 1px solid var(--nexus-glass-border);
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new NexusAI();
    
    // Add some extra polish with scroll-based navbar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(26, 11, 46, 0.95)';
            nav.style.borderBottom = '1px solid rgba(166, 99, 204, 0.3)';
        } else {
            nav.style.background = 'rgba(26, 11, 46, 0.9)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });
    
    // Add loading screen fade out
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some button click effects
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        const button = e.target;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Add ripple effect animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);