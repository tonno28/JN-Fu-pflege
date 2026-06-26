/* ============================================================
   Jana Neufeld · Fachfußpflege — Interactions
   ============================================================ */

// Business contact constants
const PHONE_WHATSAPP = '491772586443';          // international, no "+" for wa.me
const EMAIL = 'neufeld.jana@gmx.de';

/* ---------- Current year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Nav: scrolled state + mobile menu ---------- */
const nav = document.getElementById('nav');
const burger = nav.querySelector('.nav__burger');

window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

burger.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
});

// Close mobile menu when a link is tapped
nav.querySelectorAll('.nav__links a, .nav__cta').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll(
  '.section__head, .about__media, .about__content, .service, .review, .gallery__item, .offer, .booking__intro, .booking__form'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // light stagger within a group
      entry.target.style.transitionDelay = `${(i % 3) * 90}ms`;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => io.observe(el));

/* ---------- Booking form → WhatsApp / E-Mail ---------- */
const form = document.getElementById('bookingForm');
let activeChannel = 'whatsapp';

form.querySelectorAll('button[data-channel]').forEach(btn =>
  btn.addEventListener('click', () => { activeChannel = btn.dataset.channel; })
);

function buildMessage(data) {
  const lines = [
    'Hallo Jana, ich möchte gerne einen Termin anfragen:',
    '',
    `• Name: ${data.name}`,
    `• Telefon: ${data.phone}`,
    `• Leistung: ${data.service}`,
    data.date ? `• Wunschdatum: ${formatDate(data.date)}` : null,
    `• Tageszeit: ${data.time}`,
    data.message ? `• Nachricht: ${data.message}` : null,
    '',
    'Vielen Dank!'
  ].filter(Boolean);
  return lines.join('\n');
}

function formatDate(iso) {
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // basic validation
  if (!form.name.value.trim() || !form.phone.value.trim()) {
    form.reportValidity();
    return;
  }

  const data = {
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    service: form.service.value,
    date: form.date.value,
    time: form.time.value,
    message: form.message.value.trim(),
  };

  const text = buildMessage(data);

  if (activeChannel === 'email') {
    const subject = `Terminanfrage – ${data.name}`;
    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  } else {
    window.open(
      `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(text)}`,
      '_blank', 'noopener'
    );
  }
});
