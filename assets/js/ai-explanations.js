export function initAIExplanations() {
  const projectCards = document.querySelectorAll('[data-project-id]');
  projectCards.forEach(card => {
    card.addEventListener('click', async () => {
      const id = card.dataset.projectId;
      const summary = await fetchAIExplanation(id);
      showExplanationModal(summary);
    });
  });
}

async function fetchAIExplanation(projectId) {
  return `AI-generated summary for project ${projectId}: architecture, key decisions, performance wins.`;
}

function showExplanationModal(text) {
  const modal = document.createElement('div');
  modal.className = 'glass-panel';
  modal.style.cssText = 'position:fixed;inset:0;margin:auto;width:min(600px,92vw);padding:32px;z-index:200;cursor:pointer;';
  modal.innerHTML = `<p style="line-height:1.6;">${text}</p><p style="margin-top:16px;font-size:12px;color:var(--text-secondary);">Click to close</p>`;
  modal.addEventListener('click', () => modal.remove());
  document.body.appendChild(modal);
}
