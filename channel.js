function load_channels(mainContainer) {
  mainContainer.innerHTML = `
    <section id="channels-section">
      <h2>Channels</h2>
      <p class="channels-intro">
        Go‑to‑market follows a phased, capital‑efficient B2B/B2G approach. No retail or consumer marketing until 
        Phase 3. The entry chain mirrors how deep‑tech hardware actually reaches customers in India: 
        <strong>pilot → certification → approved vendor → commercial contracts → scale</strong>.
      </p>

      <h3 style="margin-top: 24px;">Phase‑wise Channel Strategy</h3>
      <div class="channels-table-scroll">
        <table class="channels-table">
          <thead>
            <tr>
              <th>Phase</th>
              <th>Channel</th>
              <th>Target Customer</th>
              <th>Realistic Approach</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2"><strong>Phase 1<br>Market Entry</strong><br><span class="phase-note">(TRL‑5 onward)</span></td>
              <td>Government Pilots & PSU Trials</td>
              <td>DRDO labs, ISRO, Indian Army, Indian Railways, SECI, NTPC</td>
              <td>Small 1–5 MWh pilot deployments via research partnerships, approved vendor panels, and tender‑based field trials</td>
            </tr>
            <tr>
              <td>Institutional / Incubator Network</td>
              <td>IIT/SINE, DST, BIRAC, iDEX</td>
              <td>Warm introductions, innovation grants, and proof‑of‑concept demonstrations via the incubator ecosystem</td>
            </tr>
            <tr>
              <td rowspan="2"><strong>Phase 2<br>Validation &amp; Scale</strong><br><span class="phase-note">(TRL‑6‑7)</span></td>
              <td>Strategic Co‑Development Partnerships</td>
              <td>Tata Motors, Mahindra, Ola Electric, Global EV OEMs</td>
              <td>Supply agreements / co‑development pacts post pilot validation; licensing only after field‑proven performance</td>
            </tr>
            <tr>
              <td>B2G &amp; Large Tenders</td>
              <td>Data Center Operators, SECI, NTPC, State Utilities</td>
              <td>Participation in safety‑first BESS tenders after certification and pilot validation</td>
            </tr>
            <tr>
              <td><strong>Phase 3<br>Mass Market</strong><br><span class="phase-note">(TRL‑8+)</span></td>
              <td>Direct Sales + Distribution Partners</td>
              <td>Fleet Operators, EV Aftermarket, Export Markets</td>
              <td>In‑house sales team + regional distributors for stationary storage and EV packs after achieving cost parity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:12px;">
        <em>No retail or consumer marketing until Phase 3. Pure B2B/B2G — capital‑efficient for deep‑tech.</em>
      </p>
    </section>
  `;

  if (!document.getElementById('channels-style')) {
    const style = document.createElement('style');
    style.id = 'channels-style';
    style.textContent = `
      .channels-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 24px;
        max-width: 900px;
        line-height: 1.6;
      }
      /* Scrollable wrapper for mobile */
      .channels-table-scroll {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .channels-table {
        min-width: 800px;
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        font-size: 0.82rem;
      }
      .channels-table th {
        background: #0d1117;
        color: #e0e0e0;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        white-space: nowrap;
      }
      .channels-table td {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border, #dee2e6);
        vertical-align: top;
      }
      .channels-table tr:last-child td {
        border-bottom: none;
      }
      .channels-table td[rowspan] {
        background: #f9f9f6;
      }
      .phase-note {
        font-size: 0.75rem;
        color: var(--text-muted);
      }
      #channels-section h3 {
        margin-bottom: 16px;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_channels = load_channels;