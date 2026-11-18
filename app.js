const menu = document.querySelector('.menu');
const nav = document.querySelector('#links');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-label', 'Abrir menu');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menu'); menu.focus();
  }
});
const reviews = [...document.querySelectorAll('[data-review]')];
let reviewIndex = 0;
function showReview(index) {
  reviewIndex = (index + reviews.length) % reviews.length;
  reviews.forEach((review, i) => { review.hidden = i !== reviewIndex; });
  document.querySelector('#review-count').textContent = `${String(reviewIndex + 1).padStart(2, '0')} / ${String(reviews.length).padStart(2, '0')}`;
}
document.querySelector('#review-prev')?.addEventListener('click', () => showReview(reviewIndex - 1));
document.querySelector('#review-next')?.addEventListener('click', () => showReview(reviewIndex + 1));
document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#result').textContent = 'Simulação concluída. Nenhuma informação foi enviada ou armazenada.';
  event.currentTarget.reset();
});
