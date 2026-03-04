document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // 1. Smooth Scrolling for Navigation
    // ============================================
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // 2. Enhanced Header Scroll Effect
    // ============================================
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.padding = '0.5rem 5%';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1rem 5%';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // 3. Enhanced Scroll Reveal Animation for Sections
    // ============================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ============================================
    // 4. Service Cards Animation (Staggered)
    // ============================================
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); // Stagger effect
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // ============================================
    // 5. Portfolio Gallery Items Animation (Staggered)
    // ============================================
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                galleryObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        galleryObserver.observe(item);
    });

    // ============================================
    // 6. Parallax Effect for Hero Section
    // ============================================
    const hero = document.querySelector('#hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.backgroundPositionY = `${parallax}px`;
        });
    }

    // ============================================
    // 7. Enhanced Contact Form Handling with Validation
    // ============================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');

        // Add focus animations to form inputs
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'scale(1.02)';
            });

            input.addEventListener('blur', function() {
                this.style.transform = 'scale(1)';
            });
        });

        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerText = '전송 중...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            // Form will submit normally to FormSubmit.co
        });
    }

    // ============================================
    // 8. Add Floating Animation to CTA Buttons
    // ============================================
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach((btn, index) => {
        setTimeout(() => {
            btn.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
        }, 1000);
    });

    // ============================================
    // 9. Smooth Number Counter (for future stats section)
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // ============================================
    // 10. Add Cursor Effect for Gallery Items
    // ============================================
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            createLightbox(imgSrc);
        });
    });

    function createLightbox(imgSrc) {
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
            animation: fadeIn 0.3s ease;
        `;

        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            animation: scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        `;

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.style.animation = 'fadeIn 0.3s ease reverse';
            setTimeout(() => {
                document.body.removeChild(lightbox);
            }, 300);
        });
    }

    // ============================================
    // 11. Add Page Load Animation
    // ============================================
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ============================================
    // 12. Active Navigation Link on Scroll
    // ============================================
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = '#1B3022';
                link.style.fontWeight = '700';
            } else {
                link.style.fontWeight = '500';
            }
        });
    });

    console.log('🌿 Garden Art Website Loaded Successfully!');
});
