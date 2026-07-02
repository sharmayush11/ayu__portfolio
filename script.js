// ---------- Tab navigation and scroll spy ----------
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section[id]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.getElementById(tab.dataset.target).scrollIntoView({ behavior: 'smooth' });
    });
});

const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tabs.forEach(t => t.classList.toggle('active', t.dataset.target === entry.target.id));
        }
    });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => spyObserver.observe(s));

// ---------- Scroll reveal ----------
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in');
    });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));