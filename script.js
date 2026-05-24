/* ════════════════════════════════
   SCROLL SUAVE — botões com data-scroll
════════════════════════════════ */
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    const alvo = document.getElementById(btn.dataset.scroll);
    if (alvo) alvo.scrollIntoView({ behavior: 'smooth' });
  });
});


/* ════════════════════════════════
   ANIMAÇÕES — Intersection Observer
════════════════════════════════ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.rv').forEach(el => observer.observe(el));


/* ════════════════════════════════
   FORMULÁRIO — envio via WhatsApp
════════════════════════════════ */
const form = document.getElementById('form-orcamento');

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = document.getElementById('f-nome').value.trim();
  const tel  = document.getElementById('f-tel').value.trim();
  const srv  = document.getElementById('f-srv').value;
  const desc = document.getElementById('f-desc').value.trim();

  if (!nome) { alert('Por favor, informe seu nome.'); return; }
  if (!srv)  { alert('Por favor, selecione o serviço.'); return; }

  const msg =
    `🔧 *Solicitação de Orçamento — Reabra Serviços*\n\n` +
    `👤 *Nome:* ${nome}\n` +
    (tel  ? `📞 *Telefone:* ${tel}\n` : '') +
    `🛠️ *Serviço:* ${srv}\n` +
    (desc ? `📝 *Descrição:* ${desc}\n` : '') +
    `\n_Mensagem enviada pelo site Reabra Serviços_`;

  window.open(
    'https://wa.me/5544984221603?text=' + encodeURIComponent(msg),
    '_blank'
  );
});