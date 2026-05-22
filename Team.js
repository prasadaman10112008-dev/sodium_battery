function load_team(mainContainer) {
  mainContainer.innerHTML = `
    <section id="team-section">
      <h2>Founding Team</h2>

      <!-- AMAN PRASAD -->
      <div class="team-profile">
        <div class="profile-header">
          <h3>Aman Prasad</h3>
          <span class="role-badge">Technical Founder & Lead Researcher</span>
          <span class="age-note">Age: 17</span>
        </div>
        <div class="profile-body">
          <p class="intro-text">Independent researcher and sole inventor of the solid‑state sodium‑sulfur‑air battery platform.</p>

          <h4>Academic Background</h4>
          <ul class="bullet-list">
            <li><strong>10th (SSC):</strong> 87%</li>
            <li><strong>12th (Commerce):</strong> 64%</li>
          </ul>

          <h4>Technical Journey & Self‑Learned Skills</h4>
          <ul class="bullet-list">
            <li>Started learning <strong>2D animation</strong> during 11th standard (Commerce). Built basic animated content and explored visual storytelling.</li>
            <li>Towards the end of 12th, conducted short research explorations on multiple hardware concepts: <strong>Railway QR/Bluetooth ticketing device, battery chemistries, semiconductor chips, and RRE purification</strong> — though these were limited in depth at the time.</li>
            <li>Successfully developed a <strong>complete Railway Device concept</strong> (QR/Bluetooth/Print/Screen system) but placed it on hold due to lack of access to advanced fabrication and low‑technology readiness at the time.</li>
            <li>Shifted focus entirely to <strong>solid‑state sodium‑sulfur‑air breathing battery</strong> — a fireproof, lithium‑free, high‑energy platform designed to solve India's critical mineral dependency.</li>
            <li>Self‑taught electrochemistry, cell architecture, and first‑principles energy density modeling through independent study of public research and industry data.</li>
          </ul>

          <h4>Current Activities</h4>
          <ul class="bullet-list">
            <li>Building a <strong>side‑income app</strong> for local supermarkets: online listing, delivery management, customer browsing within a 10 km radius. (Not yet launched — used to support living expenses during R&D.)</li>
            <li>Continuing deep‑tech research on the sodium solid‑state battery platform and preparing for institutional lab validation (TRL‑2 → TRL‑3).</li>
          </ul>

          <div class="legal-note">
            <strong>The Age Barrier</strong>
            <p>
              Aman is 17. Indian law requires a company director to be at least 18. The venture is therefore 
              temporarily registered under his elder sister <strong>Priyanka Kumari</strong> (age 26), who acts 
              as the registered Director for legal and compliance purposes. Full ownership and directorship 
              will transfer to Aman upon turning 18. This arrangement is transparent and structured to protect 
              the venture's interests.
            </p>
          </div>

          <p style="margin-top:14px;"><strong>Commitment:</strong> Full‑Time (80+ hours/week on R&D and app development)</p>
        </div>
      </div>

      <!-- PRIYANKA KUMARI -->
      <div class="team-profile" style="margin-top:40px;">
        <div class="profile-header">
          <h3>Priyanka Kumari</h3>
          <span class="role-badge">Co‑Founder & Director (Legal & Operations)</span>
          <span class="age-note">Age: 26</span>
        </div>
        <div class="profile-body">
          <p class="intro-text">Registered Director handling all legal, documentation, and compliance work.</p>

          <h4>Academic Background</h4>
          <ul class="bullet-list">
            <li><strong>10th (SSC):</strong> 84%</li>
            <li><strong>12th (Arts):</strong> 72%</li>
          </ul>

          <h4>Professional Path</h4>
          <ul class="bullet-list">
            <li>Completed nursing training and recently appeared for the <strong>nursing examination</strong>.</li>
            <li>Manages company incorporation, regulatory filings, and all operational paperwork.</li>
            <li>Provides the legal bridge that allows the venture to function while Aman is still a minor.</li>
          </ul>

          <p style="margin-top:12px;"><strong>Commitment:</strong> Part‑Time (legal & administrative support as required)</p>
        </div>
      </div>

      <!-- MENTORSHIP -->
      <div class="mentor-box">
        <h4>Seeking Mentorship</h4>
        <p>
          Actively looking for academic and industry mentors experienced in solid‑state electrolytes, 
          battery manufacturing, and deep‑tech startup commercialization. If you or someone in your 
          network can guide us through the TRL‑2 to TRL‑5 journey, we would be honored to connect.
        </p>
      </div>
    </section>
  `;

  // Inject styles once
  if (!document.getElementById('team-detailed-style')) {
    const style = document.createElement('style');
    style.id = 'team-detailed-style';
    style.textContent = `
      .team-profile {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 32px;
        margin-bottom: 24px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      }
      .profile-header {
        margin-bottom: 20px;
      }
      .profile-header h3 {
        margin: 0 0 6px;
        font-size: 1.6rem;
        font-weight: 700;
        color: #1a1a1a;
      }
      .role-badge {
        display: inline-block;
        background: var(--accent);
        color: white;
        padding: 5px 14px;
        border-radius: 20px;
        font-size: 0.78rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-right: 8px;
      }
      .age-note {
        font-size: 0.85rem;
        color: var(--text-muted);
        font-weight: 500;
      }
      .profile-body {
        font-size: 0.93rem;
        line-height: 1.7;
        color: #333;
      }
      .intro-text {
        font-size: 1rem;
        color: #1a1a1a;
        font-weight: 500;
        margin-bottom: 16px;
      }
      .profile-body h4 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--accent-dark);
        margin: 18px 0 6px;
      }
      .bullet-list {
        list-style: none;
        padding: 0;
      }
      .bullet-list li {
        padding: 5px 0 5px 18px;
        position: relative;
      }
      .bullet-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
      }
      .legal-note {
        background: #fdf7ee;
        border-left: 4px solid var(--accent);
        padding: 16px 20px;
        border-radius: 0 12px 12px 0;
        margin: 20px 0;
        font-size: 0.9rem;
        color: #5a4620;
      }
      .mentor-box {
        background: #f0f7ff;
        border: 1px solid #c8dbef;
        border-radius: 14px;
        padding: 24px;
        margin-top: 20px;
      }
      .mentor-box h4 {
        margin: 0 0 8px;
        font-size: 1rem;
        color: #1a3a5c;
      }
      .mentor-box p {
        color: #333;
        font-size: 0.9rem;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_team = load_team;