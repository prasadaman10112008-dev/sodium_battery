function load_team(mainContainer) {
  mainContainer.innerHTML = `
    <section id="team-section">
      <h2>Founding Team</h2>

      <!-- AMAN PRASAD -->
      <div class="team-profile">
        <div class="profile-header">
          <h3>Aman Prasad</h3>
          <span class="role-badge">Founder & Lead Researcher</span>
        </div>
        <div class="profile-body">
          <p class="intro-text">Independent researcher and sole inventor of the solid‑state sodium‑sulfur‑air battery platform.</p>

          <h4>Academic Background</h4>
          <ul class="bullet-list">
            <li><strong>10th (SSC):</strong> 87%</li>
            <li><strong>12th (Commerce):</strong> 64%</li>
            <li><strong>B.Sc. IT (1st Year):</strong> Open Distance Learning (ongoing)</li>
          </ul>

          <h4>Technical Journey & Self‑Learned Skills</h4>
          <ul class="bullet-list">
            <li>Started learning <strong>2D animation</strong> during 11th standard (Commerce). Built basic animated content and explored visual storytelling. <a href="https://drive.google.com/file/d/14KDhlZ9lyI-LHrJRNZMe9C1y9ZV6DQt8/view?usp=drivesdk" target="_blank" style="font-size:0.8rem;color:var(--accent-dark);">▶animation sample</a></li>
            <li>Towards the end of 12th, conducted short research explorations on multiple hardware concepts: <strong>Railway QR/Bluetooth ticketing device, battery chemistries, semiconductor chips, and RRE purification</strong> — though these were limited in depth at the time.</li>
            <li>Successfully developed a <strong>complete Railway Device concept</strong> (QR/Bluetooth/Print/Screen system) but placed it on hold due to lack of access to advanced fabrication and low‑technology readiness at the time.</li>
            <li>Shifted focus entirely to <strong>solid‑state sodium‑sulfur‑air breathing battery</strong> — a fireproof, lithium‑free, high‑energy platform designed to solve India's critical mineral dependency.</li>
            <li>Built <strong>Angelix AI</strong> — a SaaS platform that automates data entry from invoices and bank statements, with a chatbot, a real spreadsheet interface (like Excel), and cloud storage. Through Angelix, I learned SaaS business operations, gained real‑world business knowledge, and generate income to self‑fund my sodium‑battery research.</li>
            <li>Self‑taught electrochemistry, cell architecture, and first‑principles energy density modeling through independent study of public research and industry data.</li>
          </ul>

          <h4>Current Activities</h4>
          <ul class="bullet-list">
            <li><strong>Angelix AI</strong> (<a href="https://angelix.onrender.com" target="_blank">angelix.onrender.com</a>) — Founder & Developer of an AI‑powered SaaS platform that automatically converts business documents (invoices, GST bills, bank statements, receipts) into structured Excel sheets in seconds. Built entirely solo, from frontend to backend to deployment.</li>
            <li>Continuing deep‑tech research on the sodium solid‑state battery platform and preparing for institutional lab validation (TRL‑2 → TRL‑3).</li>
            <li>Pursuing <strong>B.Sc. IT (1st Year)</strong> via open distance learning to formally strengthen computing and technology fundamentals.</li>
          </ul>

          <p style="margin-top:14px;"><strong>Commitment:</strong> Full‑Time (80+ hours/week on R&D and Angelix development)</p>
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