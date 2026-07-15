/**
 * Traceability: STK-FRONTEND-003 (ES6+ JavaScript)
 * Traceability: STK-FRONTEND-007 (Progressive enhancement - optional JS)
 * Traceability: FUN-LAYOUT-004 (Smooth scroll enhancement)
 * 
 * This script provides optional progressive enhancements.
 * Core functionality works without JavaScript (FUN-LAYOUT-008).
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll is already handled by CSS (scroll-behavior: smooth)
    // This JavaScript provides enhanced smooth scroll for browsers that don't support CSS smooth scroll
    
    // Feature detection: Check if browser supports smooth scroll
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    
    if (!supportsNativeSmoothScroll) {
        // Fallback smooth scroll for older browsers
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                
                // Skip if it's just "#"
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Smooth scroll polyfill
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Optional: Add animation on scroll for feature cards
    // This is a progressive enhancement and doesn't affect core functionality
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
    
    // Animate feature cards on scroll (if supported)
    if ('IntersectionObserver' in window) {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach((card, index) => {
            // Set initial state
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            
            // Observe for intersection
            observer.observe(card);
        });
    }
    
    // Log successful initialization (development only)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('✅ smaQ\'it website loaded successfully');
        console.log('📊 Smooth scroll:', supportsNativeSmoothScroll ? 'Native CSS' : 'JS Polyfill');
        console.log('🎨 IntersectionObserver:', 'IntersectionObserver' in window ? 'Supported' : 'Not supported');
    }
});

// Traceability: FUN-LAYOUT-009 (Graceful degradation)
// All functionality above degrades gracefully - page works without this script
