function load_ip(container) {
  container.innerHTML = `
    <style>
      .ip-container { font-family: 'Inter', sans-serif; color: var(--text); }
      .ip-header { margin-bottom: 24px; }
      .ip-title { font-size: 1.3rem; font-weight: 700; color: #1a1a1a; }
      .ip-subtitle { font-size: 0.95rem; color: var(--text-muted); margin-top: 4px; }
      .ip-block { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
      .ip-block h3 { font-size: 1rem; font-weight: 600; margin-bottom: 10px; color: #1a1a1a; }
      .bullet-list { list-style: none; padding: 0; }
      .bullet-list li { padding: 5px 0 5px 22px; position: relative; font-size: 0.9rem; color: #333; }
      .bullet-list li::before { content: ''; position: absolute; left: 0; top: 9px; width: 5px; height: 5px; background: var(--accent); border-radius: 50%; }
    </style>
    <div class="ip-container">
      <div class="ip-header">
        <div class="ip-title">IP Registration</div>
        <div class="ip-subtitle">Protecting innovation – strategy aligned with technical maturity</div>
      </div>

      <div class="ip-block">
        <h3>Current Status</h3>
        <p style="margin-bottom:8px;">No patents filed yet. All design documents, process flows, and material masking groups are maintained as trade secrets. Public disclosure before TRL‑4 (lab prototype) could weaken patentability.</p>
        <ul class="bullet-list">
          <li>Provisional patents will be filed after TRL‑3 (proof‑of‑concept) and complete applications after TRL‑4.</li>
          <li>Trademarks and design registrations after incorporation.</li>
          <li>Currently protected by encryption, access controls, and NDAs for future collaborators.</li>
        </ul>
      </div>
    </div>
  `;
}
window.load_ip = load_ip;