
const reasons = [  "Amo tu narizzz, mi preciosaaa. 💗",
  "Amo tu boquita, tan tú y tan bonita.",
  "Amo tus pasitosss.",
  "Amo tu estatura y cada detallito que te hace ser tú.",
  "Amo tu cabello hermoso.",
  "Amo tus ojitos preciosossss.",
  "Amo tus cachetitosss.",
  "Amo tus manitoosss.",
  "Amo tu ternura.",
  "Amo nuestras llamadas.",
  "Amo tus travesuras, aunque a veces me hagas renegar JAJAJA.",
  "Amo tus dramas, mi dramática preciosa. 😭💗",
  "Amo tus enojos, hasta cuando te pones odiosita JAJAJA.",
  "Amo tus piecitos.",
  "Amo tu vozzzz; me encantas cuando hablas.",
  "Amo tus chistes malos, aunque me den risa de lo malos que son.",
  "Amo tus abrazos.",
  "Amo todoooo de ti, amorcitooo. 💞",
  "Amo tu sonrisa, porque ilumina mis días.",
  "Amo cómo se escucha tu risa.",
  "Amo tu forma de hablar conmigo.",
  "Amo cuando me dices «te amo».",
  "Amo cuando me cuentas tus cosas.",
  "Amo que podamos hablar de todooo.",
  "Amo quedarme dormido en llamada contigo.",
  "Amo compartir esos ratitos tranquilos contigo.",
  "Amo jugar contigo, aunque a veces seas una tramposilla JAJAJA.",
  "Amo cuando cocinamos juntos.",
  "Amo nuestras salidas y cada aventurita.",
  "Amo cada momento que paso a tu lado.",
  "Amo que me hagas reír con tus ocurrencias.",
  "Amo tu inteligencia y cómo piensas.",
  "Amo tu corazón tan bonito.",
  "Amo el amor que tienes por las personas.",
  "Amo tu forma tan única de ser.",
  "Amo que seas tú misma conmigo.",
  "Amo tus ocurrencias de brujita.",
  "Amo cuando te pones mimosa conmigo.",
  "Amo cuando me prestas atención.",
  "Amo cuando compartes tu día conmigo.",
  "Amo que hasta una llamada normal se sienta especial.",
  "Amo imaginar todas las cosas bonitas que podemos vivir juntos.",
  "Amo que seas mi Stephany y que nadie pueda ser como tú.",
  "Amo cuando me haces sentir parte de tu día.",
  "Amo la confianza que vamos construyendo.",
  "Amo poder aprender cosas contigo.",
  "Amo que podamos reírnos por cualquier tontería.",
  "Amo cuando me sorprendes con algo que dices.",
  "Amo tus expresiones cuando algo te emociona.",
  "Amo cuando te emocionas contando algo que te gusta.",
  "Amo la manera en que te preocupas por las personas.",
  "Amo que tengas tus propias ideas.",
  "Amo nuestras conversaciones larguísimas.",
  "Amo esos silencios que no se sienten incómodos.",
  "Amo poder compartir mis pensamientos contigo.",
  "Amo que podamos hacer planes juntos.",
  "Amo cuando me cuentas cómo te fue en el día.",
  "Amo cuando me deseas buenas noches.",
  "Amo cuando me das los buenos días.",
  "Amo escuchar tu voz antes de dormir.",
  "Amo nuestras bromas que solo nosotros entendemos.",
  "Amo los apodos tan nuestros: mi brujita y mi tiburoncita.",
  "Amo cuando me sigues el juego.",
  "Amo cuando te pones juguetona.",
  "Amo cuando intentas hacerme reír.",
  "Amo que podamos ser un poquito locos juntos.",
  "Amo cómo un ratito contigo puede mejorar mi día.",
  "Amo cada recuerdo bonito que vamos creando.",
  "Amo que todavía nos queden tantas cosas por vivir.",
  "Amo cuando compartimos algo por primera vez.",
  "Amo que me inspires a ser mejor persona.",
  "Amo lo mucho que admiro tu manera de pensar.",
  "Amo que tengas sueños y metas propias.",
  "Amo cuando hablas de algo que te apasiona.",
  "Amo que no tengas que fingir para gustarme.",
  "Amo tus pequeños detalles.",
  "Amo cuando eres cariñosa conmigo.",
  "Amo cuando me escuchas con atención.",
  "Amo poder escucharte y conocerte más.",
  "Amo que podamos decirnos las cosas con sinceridad.",
  "Amo que podamos aprender a resolver las diferencias con respeto.",
  "Amo la confianza que quiero seguir cuidando contigo.",
  "Amo que podamos animarnos mutuamente.",
  "Amo celebrar tus logros y verte avanzar.",
  "Amo desearte cosas bonitas y pedirle a Dios que te cuide.",
  "Amo orar por tu bienestar y por nuestro camino.",
  "Amo que podamos hablar de Dios y de nuestra fe.",
  "Amo imaginar una relación que crezca con respeto, paciencia y amor.",
  "Amo que me recuerdes que el amor también se demuestra con acciones.",
  "Amo que podamos aprender a pedir perdón y mejorar.",
  "Amo que seas alguien a quien quiero tratar con cariño y consideración.",
  "Amo que seas importante para mí sin dejar de ser tú misma.",
  "Amo cómo me nace celebrar tu vida, especialmente hoy.",
  "Amo que cumplas 16 y poder desearte un año lleno de bendiciones.",
  "Amo poder decirte feliz cumpleaños, mi niña preciosa.",
  "Amo que tu existencia haga más bonito este mundo.",
  "Amo la oportunidad de conocerte cada día un poquito más.",
  "Amo todo lo que ya vivimos y todo lo bonito que aún podemos construir.",
  "Amo a la personita que eres hoy y a la persona en la que sigues creciendo.",
  "Amo a mi Stephany: mi preciosa, mi brujita y mi tiburoncita. Te amo 3 millones. 💗"];

function surprise(button) {
  document.querySelectorAll('.surprise').forEach(x => x.style.borderColor = '#f0cadb');
  button.style.borderColor = '#d35d91';
  document.getElementById('message').textContent = button.dataset.msg;
  document.getElementById('message').scrollIntoView({behavior:'smooth', block:'center'});
}

function revealReason(index, button) {
  document.querySelectorAll('.reason-card').forEach(card => card.classList.remove('selected'));
  button.classList.add('selected');
  const box = document.getElementById('reason-message');
  box.innerHTML = `<span class="reason-heart">💗</span><small>RAZÓN N.º ${String(index + 1).padStart(2, '0')}</small><p>${reasons[index]}</p>`;
  box.classList.remove('pop');
  void box.offsetWidth;
  box.classList.add('pop');
}

function buildReasons() {
  const grid = document.getElementById('reasons-grid');
  if (!grid) return;
  reasons.forEach((reason, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'reason-card';
    button.setAttribute('aria-label', `Abrir razón número ${index + 1}`);
    button.innerHTML = `<span class="card-heart">♡</span><span class="card-number">${String(index + 1).padStart(2, '0')}</span>`;
    button.addEventListener('click', () => revealReason(index, button));
    grid.appendChild(button);
  });
}

(() => {
  buildReasons();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(() => {
    let h = document.createElement('span');
    h.className = 'floating';
    h.textContent = ['♡','♥','✿'][Math.floor(Math.random()*3)];
    h.style.left = Math.random()*100+'vw';
    h.style.fontSize = (14+Math.random()*18)+'px';
    h.style.animationDuration = (5+Math.random()*4)+'s';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 9500);
  }, 1100);
})();
