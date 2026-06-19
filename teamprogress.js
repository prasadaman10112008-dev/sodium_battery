function load_teamprogress(container) {
  container.innerHTML = `
    <style>
      .tu-container { font-family: 'Inter', sans-serif; color: var(--text); }
      .tu-header { margin-bottom: 28px; }
      .tu-title { font-size: 1.3rem; font-weight: 700; color: #1a1a1a; }
      .tu-subtitle { font-size: 0.95rem; color: var(--text-muted); margin-top: 4px; }

      /* Reusing solution-feature card style */
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

      /* Scrollable tables */
      .tu-table {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-top: 10px;
      }
      table {
        width: 100%;
        min-width: 550px;
        border-collapse: collapse;
        background: var(--surface);
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
        font-size: 0.82rem;
      }
      th {
        background: #0d1117;
        color: #e0e0e0;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }
      td {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border);
      }
      tr:last-child td { border-bottom: none; }

      .highlight-box {
        background: #fdf8f0;
        border-left: 4px solid var(--accent);
        padding: 16px 20px;
        border-radius: 0 12px 12px 0;
        margin: 16px 0 0;
        font-size: 0.9rem;
        color: #5a4620;
      }

      .empty-table-msg {
        text-align: center;
        color: var(--text-muted);
        font-style: italic;
        padding: 20px 0;
      }
    </style>
    <div class="tu-container">
      <div class="tu-header">
        <div class="tu-title">Team Updates</div>
        <div class="tu-subtitle">Current core team — lean, focused, and at TRL‑2 stage</div>
      </div>

      <!-- Founder Team -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">01</span>
          <h3>Founder Team</h3>
        </div>
        <div class="tu-table">
          <table>
            <thead>
              <tr><th>Name</th><th>Role</th><th>Background</th><th>Commitment</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Aman Prasad</strong></td>
                <td>Lead Researcher & Technical Founder</td>
                <td>Self‑taught battery chemist, 2D animator, railway device developer; currently 17 years old</td>
                <td>Full‑Time (80+ hrs/week)</td>
                <td>Active</td>
              </tr>
              <tr>
                <td><strong>Priyanka Kumari</strong></td>
                <td>Director (Legal & Operations)</td>
                <td>Nursing graduate (age 26); registered company director; manages all legal and compliance paperwork</td>
                <td>Part‑Time</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="highlight-box">
          <strong>Age Transition Plan:</strong> Aman will assume full directorship upon turning 18. Priyanka will continue as legal consultant. All IP is currently held by the founding team and will be assigned to the company post‑incorporation.
        </div>
      </div>

      <!-- Incubator Affiliation -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">02</span>
          <h3>Incubator Affiliation</h3>
        </div>
        <p style="margin-bottom:14px; color:var(--text-muted);">Formal incubator relationship not yet established. Applications submitted to SINE‑IIT Bombay, FITT‑IIT Delhi, Venture Center, and iCreate. Table will be updated upon acceptance.</p>
        <div class="tu-table">
          <table>
            <thead>
              <tr><th>Incubator Name</th><th>Location / Institute</th><th>Date of Joining</th><th>Support Type</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="5" class="empty-table-msg">Awaiting incubator acceptance — applications under review.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
window.load_teamprogress = load_teamprogress;