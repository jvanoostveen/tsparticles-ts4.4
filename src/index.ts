import { confetti } from 'tsparticles-preset-confetti';

confetti(`confettiWrapper`, {
  angle: 90,
  count: 5,
  position: { x: 100, y: 100 },
  spread: 100,
  startVelocity: 75,
  decay: 0.8,
  gravity: 2,
  drift: 0,
  ticks: 75,
  colors: ['#ff0000', '#ff8400', '#ffea00', '#00ff00', '#00bbff', '#0000ff', '#ff00ff'],
  shapes: ['circle'],
  scalar: 1.25,
  zIndex: 2000,
  disableForReducedMotion: true
});
