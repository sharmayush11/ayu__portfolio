
// ---------- Tab navigation and scroll spy ----------

const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section[id]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.getElementById(tab.dataset.target);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const spyObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                tabs.forEach((tab) => {
                    tab.classList.toggle(
                        'active',
                        tab.dataset.target === entry.target.id
                    );
                });
            }
        });
    },
    {
        rootMargin: '-40% 0px -50% 0px'
    }
);

sections.forEach((section) => {
    spyObserver.observe(section);
});


// ---------- Scroll reveal ----------

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll('.reveal').forEach((element) => {
    revealObserver.observe(element);
});


// ---------- Hero typing effect ----------

const heroLines = [
    {
        n: 1,
        html: '<span class="kw">const</span> developer = {'
    },
    {
        n: 2,
        html: '&nbsp;&nbsp;name: <span class="str">"Ayush Sharma"</span>,'
    },
    {
        n: 3,
        html: '&nbsp;&nbsp;role: <span class="str">"Full Stack Developer"</span>,'
    },
    {
        n: 4,
        html: '&nbsp;&nbsp;stack: [<span class="str">"React"</span>, <span class="str">"Node.js"</span>, <span class="str">"Express.js"</span>, <span class="str">"MongoDB"</span>],'
    },
    {
        n: 5,
        html: '&nbsp;&nbsp;status: <span class="str">"Open to Opportunities"</span>'
    },
    {
        n: 6,
        html: '};'
    }
];

const codeEl = document.getElementById('heroCode');
const gutterEl = document.getElementById('heroGutter');

let lineIndex = 0;

function typeNextLine() {
    // Stop if the hero code elements are missing
    if (!codeEl || !gutterEl) return;

    // Stop when every line has been displayed
    if (lineIndex >= heroLines.length) return;

    const line = heroLines[lineIndex];

    const row = document.createElement('div');
    row.innerHTML = line.html;
    row.style.minHeight = '1.9em';

    codeEl.appendChild(row);
    gutterEl.innerHTML += `${line.n}<br>`;

    lineIndex++;

    setTimeout(typeNextLine, 260);
}

if (codeEl && gutterEl) {
    typeNextLine();
}

