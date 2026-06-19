function load_ip(container) {
  container.innerHTML = `
    <style>
      .ip-container { font-family: 'Inter', sans-serif; color: var(--text); }
      .ip-header { margin-bottom: 28px; }
      .ip-title { font-size: 1.3rem; font-weight: 700; color: #1a1a1a; }
      .ip-subtitle { font-size: 0.95rem; color: var(--text-muted); margin-top: 4px; }

      /* Reusing the solution‑feature card style for consistency */
      .solution-feature {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 28px;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      }
      .feature-head {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 14px;
      }
      .feature-number {
        background: var(--accent);
        color: white;
        font-weight: 700;
        font-size: 0.8rem;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .feature-head h3 {
        margin: 0;
        font-size: 1.05rem;
        font-weight: 600;
        color: #1a1a1a;
      }
      .feature-body p {
        font-size: 0.9rem;
        color: #444;
        line-height: 1.6;
        margin-bottom: 10px;
      }
      .feature-points {
        list-style: none;
        padding: 0;
        margin-top: 10px;
      }
      .feature-points li {
        padding: 5px 0 5px 20px;
        position: relative;
        font-size: 0.9rem;
        color: #555;
        line-height: 1.5;
      }
      .feature-points li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
        opacity: 0.7;
      }
      .highlight-box {
        background: #fdf8f0;
        border-left: 4px solid var(--accent);
        padding: 16px 20px;
        border-radius: 0 12px 12px 0;
        margin: 20px 0 0;
        font-size: 0.9rem;
        color: #5a4620;
      }
    </style>
    <div class="ip-container">
      <div class="ip-header">
        <div class="ip-title">IP Registration</div>
        <div class="ip-subtitle">Protecting innovation — strategy aligned with technical maturity</div>
      </div>

      <!-- Current Status Card -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">01</span>
          <h3>Current Status</h3>
        </div>
        <div class="feature-body">
          <p>No patents filed yet. All design documents, process flows, and material masking groups are maintained as <strong>trade secrets</strong>. Public disclosure before a lab prototype (TRL‑4) could weaken patentability, so protection is currently enforced through encryption, access controls, and NDAs for any future collaborators.</p>
          <div class="highlight-box">
            <strong>Active measure:</strong> All proprietary information (35+ pages) is stored encrypted, time‑stamped, and masked with industrial codes (A‑Series, B‑Series, C‑Series). No public disclosure of material identities or process parameters has occurred.
          </div>
        </div>
      </div>

      <!-- Filing Timeline Card -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">02</span>
          <h3>Filing Timeline (Planned)</h3>
        </div>
        <div class="feature-body">
          <ul class="feature-points">
            <li><strong>After TRL‑3 (Proof‑of‑Concept):</strong> File provisional patents based on experimental data to secure priority dates.</li>
            <li><strong>After TRL‑4 (Lab Prototype):</strong> Convert provisionals to complete applications with validated examples and performance data.</li>
            <li><strong>Post‑Incorporation:</strong> Register trademarks and any design patents for the cell form factor and branding.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}
window.load_ip = load_ip;