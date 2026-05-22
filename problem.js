function load_problem(mainContainer) {
  mainContainer.innerHTML = `
    <section id="problem-section">
      <h2>Problem / Opportunity</h2>

      <div class="grid-2">
        <!-- KEY PROBLEMS -->
        <div class="problem-block">
          <h3>Key Problems in Current Battery Systems</h3>
          <ul class="bullet-list">
            <li><strong>Thermal Safety & Fire Risk:</strong> Flammable liquid electrolytes cause thermal runaway in EVs, grid storage, and defense applications. High‑profile fire incidents erode consumer and regulatory confidence.</li>
            <li><strong>Energy Density Ceiling:</strong> Safe chemistries (LFP) are limited to 150‑180 Wh/kg. This restricts long‑range electric vehicles, eVTOL aircraft, and high‑endurance drones.</li>
            <li><strong>Fast‑Charge Degradation:</strong> High‑power charging accelerates electrode wear and thermal stress, reducing cycle life and requiring expensive thermal management.</li>
            <li><strong>Critical Mineral Dependency:</strong> Lithium, cobalt, and nickel supply chains are geographically concentrated (>70% lithium processing in China, cobalt from DRC). Price volatility (lithium carbonate swung from $6,000 to >$80,000/ton in two years) and geopolitical exposure create systemic risk.</li>
            <li><strong>India’s Import Vulnerability:</strong> India imports >90% of its lithium‑ion cells. The annual import bill could reach $10–15 billion by 2030, undermining the country’s EV and grid‑storage ambitions.</li>
            <li><strong>Recycling Complexity:</strong> Multi‑metal NMC cathodes make economic recycling difficult. End‑of‑life batteries are piling up without scalable recovery.</li>
          </ul>
        </div>

        <!-- EXISTING ALTERNATIVES -->
        <div class="problem-block">
          <h3>Existing Alternatives & Their Limitations</h3>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Technology</th><th>Key Limitation</th></tr></thead>
              <tbody>
                <tr><td>Li‑ion NMC</td><td>Safety concerns & high critical mineral dependency</td></tr>
                <tr><td>Li‑ion LFP</td><td>Lower energy density (150‑180 Wh/kg), still lithium‑dependent</td></tr>
                <tr><td>Sodium‑ion (aqueous)</td><td>Low energy density (100‑160 Wh/kg), not suitable for high‑performance mobility</td></tr>
                <tr><td>Lithium Solid‑State</td><td>Still relies on lithium; complex manufacturing & unproven scalability</td></tr>
                <tr><td>Sodium‑Sulfur (High‑Temp)</td><td>Operates at ~300°C; only for stationary use, safety incidents historically</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- OPPORTUNITY BOX -->
      <div class="opportunity-box">
        <h3>The White Space Opportunity</h3>
        <p>
          No commercial battery simultaneously delivers <strong>high energy density, solid‑state safety, and complete freedom from lithium/cobalt/nickel</strong>.
          A sodium‑based solid‑state platform can fill this gap — offering fireproof, long‑range energy storage with globally abundant materials.
          With a global battery market exceeding $450 billion by 2035 and India’s demand crossing 800 GWh annually, even a small technology penetration represents a multi‑billion‑dollar opportunity.
        </p>
      </div>
    </section>
  `;

  // Inject styles once
  if (!document.getElementById('problem-style')) {
    const style = document.createElement('style');
    style.id = 'problem-style';
    style.textContent = `
      .problem-block {
        margin-bottom: 24px;
      }
      .problem-block h3 {
        font-size: 1.05rem;
        font-weight: 600;
        color: var(--accent-dark);
        margin-bottom: 12px;
        border-bottom: 1px solid var(--border);
        padding-bottom: 8px;
      }
      .problem-block .bullet-list {
        list-style: none;
        padding: 0;
      }
      .problem-block .bullet-list li {
        padding: 6px 0 6px 20px;
        position: relative;
        font-size: 0.9rem;
        color: #333;
        line-height: 1.5;
      }
      .problem-block .bullet-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 7px;
        height: 7px;
        background: var(--accent);
        border-radius: 50%;
      }
      .opportunity-box {
        background: #f9f5eb;
        border: 1px solid #e6d7b8;
        border-radius: 14px;
        padding: 24px;
        margin-top: 28px;
      }
      .opportunity-box h3 {
        font-size: 1.1rem;
        font-weight: 700;
        color: #1a1a1a;
        margin: 0 0 10px;
      }
      .opportunity-box p {
        font-size: 0.95rem;
        line-height: 1.6;
        color: #333;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_problem = load_problem;