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

// ---------- Hero typing effect ----------
const heroLines = [
    { n: 1, html: '<span class="kw">const</span> developer = {' },
    { n: 2, html: '&nbsp;&nbsp;name: <span class="str">"Ayush sharma"</span>,' },
    { n: 3, html: '&nbsp;&nbsp;role: <span class="str">"Frontend Developer"</span>,' },
    { n: 4, html: '&nbsp;&nbsp;location: <span class="str">"Aligarh, India"</span>,' },
    { n: 5, html: '&nbsp;&nbsp;stack: [<span class="str">"React"</span>, <span class="str">"JavaScript"</span>, <span class="str">"DSA"</span>, <span class="str">"SQL"</span>],' },
    { n: 6, html: '&nbsp;&nbsp;status: <span class="str">"open to fresher opportunities"</span> <span class="com"></span>' },
    { n: 7, html: '};' },
];
