// Stranger Things Birthday Website Animations & Interactivity

// TV Letters Animation
window.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('stranger-header');
  if (header) {
    const txt = 'Stranger Things';
    header.innerHTML = '';
    txt.split('').forEach((letter, i) => {
      setTimeout(() => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '0';
        header.appendChild(span);
        setTimeout(() => {span.style.opacity = '1';span.style.transition='opacity .19s';}, 110 + i*71);
      }, i*80);
    });
  }
  // Rumble sound effect
  const rumble = document.getElementById('rumble-audio');
  const muteBtn = document.getElementById('mute-btn');
  if (rumble && muteBtn) {
    muteBtn.onclick = () => {
      if (rumble.paused) { rumble.play(); muteBtn.classList.remove('muted'); }
      else { rumble.pause(); muteBtn.classList.add('muted'); }
    };
    muteBtn.classList.add('muted');
  }
});

// Section Transitions
let currentSection = 0;
const sections = [];
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach((sec, idx) => sections.push(sec));
  function showSection(i) {
    sections.forEach((sec, idx) => {
      sec.classList.toggle('active', idx === i);
      sec.classList.toggle('hidden', idx !== i);
    });
    currentSection = i;
  }
  // Button navigation
  document.querySelectorAll('.enter-btn,.next-btn').forEach(btn => {
    btn.onclick = () => {
      showSection(Math.min(currentSection+1, sections.length-1));
    };
  });
});

// Memory Wall Modal
window.addEventListener('DOMContentLoaded', () => {
  const memItems = document.querySelectorAll('.memory-item');
  const modal = document.getElementById('photo-modal');
  if (!(modal && memItems.length)) return;
  const modalImg = document.getElementById('modal-photo');
  const modalCaption = document.getElementById('modal-caption');
  const modalDate = document.getElementById('modal-date');
  const modalMsg = document.getElementById('modal-msg');
  const closeModal = document.querySelector('.close-modal');
  const photoSound = document.getElementById('photo-open-sound');
  memItems.forEach(item => {
    item.onclick = () => {
      modal.classList.remove('hidden');
      modalImg.src = item.querySelector('img').src;
      modalCaption.textContent = item.dataset.caption;
      modalDate.textContent = item.dataset.date;
      modalMsg.textContent = item.dataset.msg;
      if (photoSound) photoSound.play();
    };
  });
  closeModal.onclick = () => { modal.classList.add('hidden'); if (photoSound) photoSound.pause(); };
  modal.onclick = (e) => { if (e.target === modal) { modal.classList.add('hidden'); if (photoSound) photoSound.pause(); } };
});

// Powers Cards Flip
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.power-card').forEach(card => {
    card.onclick = () => { card.classList.toggle('active'); };
  });
});

// Final Surprise Portal
window.addEventListener('DOMContentLoaded', () => {
  const portalBtn = document.getElementById('portal-btn');
  const portalEffect = document.querySelector('.portal-effect');
  const finalMsg = document.querySelector('.final-message');
  if (portalBtn && portalEffect && finalMsg) {
    portalBtn.onclick = () => {
      portalEffect.classList.remove('hidden');
      setTimeout(() => {
        portalEffect.classList.add('hidden');
        finalMsg.classList.remove('hidden');
      }, 1400);
    };
  }
});
