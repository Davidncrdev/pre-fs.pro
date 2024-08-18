function generateElements(n, color) {
  let value = `${getRandom(2560)}px ${getRandom(2560)}px ${color}`;
  for (let i = 2; i <= n; i++) {
    value += `, ${getRandom(2560)}px ${getRandom(2560)}px ${color}`;
  }
  return value;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function applyStyle(element, size, boxShadow, animation) {
  if (element) {
    element.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      box-shadow: ${boxShadow};
      ${animation ? `animation: ${animation};` : ''}
    `;
  }
}

function initBG() {
  const particlesSmall = generateElements(100, '#ff0000');
  const particlesMedium = generateElements(500, '#ff0000');
  const particlesLarge = generateElements(250, '#ff0000');

  applyStyle(document.getElementById('particles1'), 1, particlesSmall, 'animStar 50s linear infinite');
  applyStyle(document.getElementById('particles2'), 1.5, particlesMedium, 'animateParticle 100s linear infinite');
  applyStyle(document.getElementById('particles3'), 2, particlesLarge, 'animateParticle 150s linear infinite');

  const starsSmall = generateElements(1000, '#ff0000');
  const starsMedium = generateElements(500, '#ff0000');
  const starsLarge = generateElements(2500, '#ff0000');

  applyStyle(document.getElementById('stars1'), 1, starsSmall, null);
  applyStyle(document.getElementById('stars2'), 1.5, starsMedium, null);
  applyStyle(document.getElementById('stars3'), 2, starsLarge, null);
}

document.addEventListener('astro:after-swap', initBG);
initBG();
