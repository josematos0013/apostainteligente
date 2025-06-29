// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.benefit-card, .objection-card, .highlight-box');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Button click tracking (for analytics)
document.getElementById('checkout-button').addEventListener('click', function() {
    // Here you can add analytics tracking
    console.log('Checkout button clicked');
    
    // Example: Google Analytics event tracking
    // gtag('event', 'click', {
    //     'event_category': 'CTA',
    //     'event_label': 'Checkout Button'
    // });
});

// Add floating effect to ebook mockup
document.addEventListener('DOMContentLoaded', () => {
    const ebookCover = document.querySelector('.ebook-cover');
    if (ebookCover) {
        let floatDirection = 1;
        let currentTransform = 0;
        
        setInterval(() => {
            currentTransform += floatDirection * 0.5;
            if (currentTransform > 5 || currentTransform < -5) {
                floatDirection *= -1;
            }
            ebookCover.style.transform = `rotateY(-15deg) rotateX(5deg) translateY(${currentTransform}px)`;
        }, 100);
    }
});

// Add pulse effect to CTA buttons
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        setInterval(() => {
            button.style.transform = 'scale(1.02)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    });
});

// Mobile menu toggle (if needed for future enhancements)
function toggleMobileMenu() {
    // Implementation for mobile menu if added later
    console.log('Mobile menu toggled');
}

// Form validation (if contact form is added later)
function validateForm(formData) {
    // Implementation for form validation
    return true;
}

// Countdown timer (can be activated if urgency is needed)
function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (display) {
            display.textContent = minutes + ":" + seconds;
        }

        if (--timer < 0) {
            clearInterval(interval);
            if (display) {
                display.textContent = "EXPIRED";
            }
        }
    }, 1000);
}

// Add loading state to buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'PROCESSANDO...';
    button.disabled = true;
    
    // Simulate loading (remove this in production)
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sales page loaded successfully');
    
    // Add any initialization code here
    
    // Example: Add click handlers to all CTA buttons
    const allCtaButtons = document.querySelectorAll('.cta-button');
    allCtaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add loading state
            // addLoadingState(this);
        });
    });
});

