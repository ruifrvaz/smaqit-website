/**
 * Traceability: STK-FRONTEND-003 (ES6+)
 * Candidate C — no-scroll panel swap: toggles the active panel and nav tab in place.
 */
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.app-panel');
    const jumpButtons = document.querySelectorAll('[data-panel].overview-card');

    const activatePanel = (panelId) => {
        panels.forEach((panel) => {
            panel.classList.toggle('active', panel.id === panelId);
        });
        tabs.forEach((tab) => {
            tab.classList.toggle('active', tab.dataset.panel === panelId);
        });
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => activatePanel(tab.dataset.panel));
    });

    jumpButtons.forEach((btn) => {
        btn.addEventListener('click', () => activatePanel(btn.dataset.panel));
    });
});
