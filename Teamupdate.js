function load_teamprogress(container) {
  container.innerHTML = `
    <style>
      .tu-container { font-family: 'Inter', sans-serif; color: var(--text); }
      .tu-header { margin-bottom: 30px; }
      .tu-title { font-size: 1.3rem; font-weight: 700; color: #1a1a1a; }
      .tu-subtitle { font-size: 0.95rem; color: var(--text-muted); margin-top: 4px; }
      .tu-block { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 28px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
      .tu-block h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 16px; color: #1a1a1a; }

      /* NEW – scrollable table wrapper */
      .tu-table {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;  /* smooth swipe on iOS */
        border-radius: var(--radius);
      }

      table {
        width: 100%;
        min-width: 550px;   /* ensures table doesn't squeeze too small; adjust if needed */
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
        margin: 20px 0;
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
        <div class="tu-subtitle">Current core team and planned affiliations — lean, focused, TRL‑2 stage</div>
      </div>

      <!-- Founder Team Table (now scrollable) -->
      <div class="tu-block">
        <h3>Founder Team</h3>
        <div class="tu-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Background</th>
                <th>Commitment</th>
                <th>Status</th>
              </tr>
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
        <div class="highlight-box" style="margin-top:16px;">
          <strong>Age Transition Plan:</strong> Aman will assume full directorship upon turning 18. Priyanka will continue as legal consultant.
          All IP is currently held by the founding team and will be assigned to the company post‑incorporation.
        </div>
      </div>

      <!-- Incubator Affiliation Table (now scrollable) -->
      <div class="tu-block">
        <h3>Incubator Affiliation</h3>
        <p style="margin-bottom:14px; color:var(--text-muted);">Formal incubator relationship not yet established. The table will be populated upon acceptance.</p>
        <div class="tu-table">
          <table>
            <thead>
              <tr>
                <th>Incubator Name</th>
                <th>Location / Institute</th>
                <th>Date of Joining</th>
                <th>Support Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="5" class="empty-table-msg">Awaiting incubator acceptance — SINE / IIT Bombay application under review.</td>
              </tr>
            </tbody'>'
          </table>
        </div>
      </div>
    </div>
  `;
}

window.load_teamprogress = load_teamprogress;