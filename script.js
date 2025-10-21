// Contador regressivo (min:sec) a partir de 29:59
(function(){
  const countdownEl = document.getElementById('countdown');
  if(!countdownEl) return;
  let total = 29*60 + 59; // segundos
  function tick(){
    const m = Math.floor(total/60).toString().padStart(2,'0');
    const s = (total%60).toString().padStart(2,'0');
    countdownEl.textContent = `${m}:${s}`;
    total = total>0 ? total-1 : 29*60+59; // reinicia ao chegar a zero
  }
  tick();
  setInterval(tick, 1000);
})();

// Carrossel simples
(function(){
  const track = document.getElementById('carouselTrack');
  if(!track) return;
  const prev = document.querySelector('.carousel .prev');
  const next = document.querySelector('.carousel .next');
  const slideWidth = () => track.querySelector('.slide').clientWidth;
  function move(dir){
    track.scrollBy({left: dir * slideWidth(), behavior:'smooth'});
  }
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
})();



