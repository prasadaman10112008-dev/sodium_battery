function load_market(mainContainer) {
  mainContainer.innerHTML = `
    <section id="market-section">
      <h2>Customer Segments & Market Size</h2>
      <p class="market-intro">
        The platform targets customers who <strong>value safety, supply‑chain security, and energy density</strong> 
        over pure commodity cost. All market figures are long‑term projections (2035 horizon) based on IEA, BNEF, 
        IESA, and McKinsey data. The obtainable market assumes successful technology validation and phased entry 
        starting from niche, high‑margin applications.
      </p>

      <!-- TAM / SAM / SOM Pyramid – responsive flex container -->
      <div class="pyramid-row">
        <!-- Global Pyramid -->
        <div class="pyramid-container">
          <h3 class="pyramid-title">Global Market (2035)</h3>
          <div class="pyramid">
            <div class="layer layer-som">
              <span class="layer-label">SOM</span>
              <span class="layer-value">$1–3B</span>
            </div>
            <div class="layer layer-sam">
              <span class="layer-label">SAM</span>
              <span class="layer-value">$50–60B</span>
            </div>
            <div class="layer layer-tam">
              <span class="layer-label">TAM</span>
              <span class="layer-value">$450–500B</span>
            </div>
          </div>
        </div>
        <!-- India Pyramid -->
        <div class="pyramid-container">
          <h3 class="pyramid-title">India Market (2035)</h3>
          <div class="pyramid">
            <div class="layer layer-som">
              <span class="layer-label">SOM</span>
              <span class="layer-value">$200–500M</span>
            </div>
            <div class="layer layer-sam">
              <span class="layer-label">SAM</span>
              <span class="layer-value">$8–10B</span>
            </div>
            <div class="layer layer-tam">
              <span class="layer-label">TAM</span>
              <span class="layer-value">800–900 GWh/yr</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Customer Segments Table – scrollable on mobile -->
      <h3 style="margin-top: 40px;">Target Customer Segments</h3>
      <div class="market-table-scroll">
        <table class="market-table">
          <thead>
            <tr><th>Segment</th><th>Global Customers</th><th>India Customers</th><th>Core Need</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Safety‑First Mobility</strong></td>
              <td>EV OEMs, eVTOL, bus fleets</td>
              <td>Tata, Mahindra, Ola Electric, STUs</td>
              <td>Zero fire risk, passenger safety, regulatory compliance</td>
            </tr>
            <tr>
              <td><strong>Supply‑Chain‑Secure</strong></td>
              <td>Defence, government agencies</td>
              <td>DRDO, Indian Army, ISRO</td>
              <td>No lithium/cobalt dependency, sovereign capability</td>
            </tr>
            <tr>
              <td><strong>Performance Seekers</strong></td>
              <td>Premium EV, drones, aerospace</td>
              <td>Defence UAVs, space‑tech startups</td>
              <td>High energy density, lightweight, high power</td>
            </tr>
            <tr>
              <td><strong>Risk‑Averse Stationary</strong></td>
              <td>Data centers, urban BESS, backup</td>
              <td>Data centers, SECI, NTPC</td>
              <td>Fireproof, compact, long calendar life</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:12px;">
        <em>All market figures are projected (2035). Platform is TRL‑2 with no commercial revenue. SOM assumes niche, high‑margin entry after technical validation.</em>
      </p>
    </section>
  `;

  // Inject responsive styles (once)
  if (!document.getElementById('market-style')) {
    const style = document.createElement('style');
    style.id = 'market-style';
    style.textContent = `
      .market-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 32px;
        max-width: 900px;
        line-height: 1.6;
      }

      /* Pyramid layout */
      .pyramid-row {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        margin-bottom: 20px;
      }
      .pyramid-container {
        flex: 1 1 280px;
        max-width: 400px;
        min-width: 250px;
      }
      .pyramid-title {
        text-align: center;
        margin-bottom: 16px;
        font-size: 1rem;
        font-weight: 600;
        color: #1a1a1a;
      }
      .pyramid {
        position: relative;
        width: 100%;
        margin: 0 auto;
      }
      .layer {
        position: relative;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 0.85rem;
        margin-bottom: 2px;
        transition: height 0.3s;
      }
      .layer-label {
        position: absolute;
        left: 12px;
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        opacity: 0.9;
      }
      .layer-value {
        font-size: 1rem;
        text-align: center;
        padding: 0 8px;
        line-height: 1.2;
      }
      .layer-tam {
        background: #0d1117;
        clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%);
      }
      .layer-sam {
        background: #b8860b;
        clip-path: polygon(5% 0%, 95% 0%, 90% 100%, 10% 100%);
      }
      .layer-som {
        background: #e6c87c;
        color: #1a1a1a;
        clip-path: polygon(10% 0%, 90% 0%, 85% 100%, 15% 100%);
      }

      /* Mobile pyramid adjustments */
      @media (max-width: 600px) {
        .pyramid-row {
          gap: 20px;
        }
        .layer {
          height: 60px;
          font-size: 0.8rem;
        }
        .layer-label {
          left: 8px;
          font-size: 0.6rem;
        }
        .layer-value {
          font-size: 0.9rem;
        }
        .pyramid-title {
          font-size: 0.95rem;
        }
      }

      /* Scrollable table */
      .market-table-scroll {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .market-table {
        min-width: 650px;
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        font-size: 0.82rem;
      }
      .market-table th {
        background: #0d1117;
        color: #e0e0e0;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }
      .market-table td {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border, #dee2e6);
        vertical-align: top;
      }
      .market-table tr:last-child td {
        border-bottom: none;
      }

      #market-section h3 {
        margin-bottom: 16px;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_market = load_market;