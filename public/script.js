/**
 * Traceability: STK-FRONTEND-003 (ES6+), STK-FRONTEND-011 (IntersectionObserver, not scroll polling)
 * Candidate B — continuous scroll: cards fade/rise into view as they cross the viewport,
 * and the fixed background cross-fades its glow to match the active section.
 * Core content is visible in the HTML/CSS without this script (progressive enhancement).
 */
document.addEventListener('DOMContentLoaded', () => {
    const beats = document.querySelectorAll('.beat');
    const dots = document.querySelectorAll('.panel-dots .dot');
    const blobs = document.querySelectorAll('.blob');

    const blobFor = (panelId) => document.querySelector('.blob-' + panelId.replace('panel-', ''));

    const setActiveDot = (panelId) => {
        dots.forEach((dot) => {
            dot.classList.toggle('active', dot.dataset.panel === panelId);
        });
    };

    const setActiveBlob = (panelId) => {
        const target = blobFor(panelId);
        blobs.forEach((blob) => blob.classList.toggle('active', blob === target));
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    setActiveDot(entry.target.id);
                    setActiveBlob(entry.target.id);
                }
            });
        }, { threshold: 0.45 });

        beats.forEach((beat) => observer.observe(beat));
    } else {
        // No IntersectionObserver support: reveal everything immediately
        beats.forEach((beat) => beat.classList.add('is-visible'));
    }

    // Smooth-scroll dot navigation to the target section
    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            const targetId = dot.dataset.panel;
            const targetBeat = document.getElementById(targetId);
            if (targetBeat) {
                e.preventDefault();
                targetBeat.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Subtle parallax drift on the background blobs, throttled to animation frames
    const bgScene = document.querySelector('.bg-scene');
    if (bgScene && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    bgScene.style.transform = 'translate3d(0, ' + (window.scrollY * -0.04) + 'px, 0)';
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
});
