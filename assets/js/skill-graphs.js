import { Chart, registerables } from 'https://unpkg.com/chart.js@4.4.1/dist/chart.umd.js';
Chart.register(...registerables);

export function initSkillGraphs() {
  const ctx = document.getElementById('skillRadar');
  if (!ctx) return;

  const data = {
    labels: ['Kotlin', 'Jetpack Compose', 'Clean Arch', 'Coroutines', 'DI (Hilt/Koin)', 'CI/CD'],
    datasets: [{
      label: 'Proficiency',
      data: [95, 90, 88, 92, 85, 80],
      backgroundColor: 'rgba(0, 243, 255, 0.2)',
      borderColor: '#00f3ff',
      borderWidth: 2,
      pointBackgroundColor: '#ff2a9f',
    }]
  };

  new Chart(ctx, {
    type: 'radar',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(255,255,255,0.08)' },
          grid: { color: 'rgba(255,255,255,0.06)' },
          pointLabels: { color: '#e9e9f1', font: { size: 13 } },
          ticks: { display: false }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}
