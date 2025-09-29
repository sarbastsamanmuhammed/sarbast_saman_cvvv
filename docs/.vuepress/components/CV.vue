<template>
  <div class="cv-wrapper">
    <!-- Top Bar -->
    <div class="top-bar no-print">
      <div class="top-bar-content">
        <div>
          <span class="cv-title-text">Sarbast Saman Muhammed</span>
          <span class="cv-subtitle-text">Professional CV</span>
        </div>
        <button class="download-btn" @click="printCV">
          <span>📄</span>
          Download PDF
        </button>
      </div>
    </div>

    <!-- Main Container -->
    <div class="cv-container">
      <!-- Header Section -->
      <div class="header">
        <div class="header-content">
          <div class="profile-section">
            <div class="profile-picture">SSM</div>
            <div class="name-title">
              <h1>Sarbast Saman Muhammed</h1>
              <div class="title">Software Engineer</div>
              <div class="status-badge">🟢 Available for Opportunities</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Bar -->
      <div class="contact-bar">
        <div class="contact-items">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div>
              <div class="contact-label">Email</div>
              <a href="mailto:sarbastsaman999q@gmail.com">sarbastsaman999q@gmail.com</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div>
              <div class="contact-label">Phone</div>
              <a href="tel:+9647504763521">+964 750 476 3521</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
              <div class="contact-label">Location</div>
              <span>Erbil, Iraq</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">🔗</div>
            <div>
              <div class="contact-label">Portfolio</div>
              <a href="https://github.com/YOUR-USERNAME" target="_blank">GitHub Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="main-grid">
        <!-- Left Column -->
        <div class="main-content">
          <!-- Professional Summary -->
          <div class="section">
            <div class="section-header">
              <div class="section-icon">👤</div>
              <h2>Professional Summary</h2>
            </div>
            <p class="summary-text">
              Versatile engineer with a unique combination of civil and software engineering expertise. 
              Passionate about solving complex problems through innovative technical solutions. 
              Experienced in full-stack development with a focus on mobile and web applications. 
              Strong foundation in structural design principles combined with modern software development practices. 
              Self-motivated learner constantly expanding skill set, currently learning Turkish and exploring new technologies. 
              Seeking opportunities to leverage my diverse engineering background to create impactful solutions.
            </p>
          </div>

          <!-- Work Experience -->
          <div class="section">
            <div class="section-header">
              <div class="section-icon">💼</div>
              <h2>Work Experience</h2>
            </div>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-header">
                  <div>
                    <div class="position-title">Freelance Developer</div>
                    <div class="company-name">Self-Employed</div>
                  </div>
                  <div class="date-badge">2022 - Present</div>
                </div>
                <div class="timeline-content">
                  <ul>
                    <li>Developed custom web and mobile applications for various clients</li>
                    <li>Specialized in Flutter mobile apps and Laravel web applications</li>
                    <li>Managed complete project lifecycle from requirements to deployment</li>
                    <li>Provided UI/UX design services using Figma</li>
                  </ul>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-header">
                  <div>
                    <div class="position-title">Driver</div>
                    <div class="company-name">Transportation Services</div>
                  </div>
                  <div class="date-badge">2020 - 2022</div>
                </div>
                <div class="timeline-content">
                  <ul>
                    <li>Provided reliable transportation services</li>
                    <li>Maintained excellent safety record and customer satisfaction</li>
                    <li>Developed strong time management and logistics skills</li>
                  </ul>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-header">
                  <div>
                    <div class="position-title">Agricultural Worker</div>
                    <div class="company-name">Family Farm</div>
                  </div>
                  <div class="date-badge">2018 - 2020</div>
                </div>
                <div class="timeline-content">
                  <ul>
                    <li>Managed daily farm operations and maintenance</li>
                    <li>Developed problem-solving skills in resource management</li>
                    <li>Gained hands-on experience with practical engineering solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Projects -->
          <div class="section">
            <div class="section-header">
              <div class="section-icon">🚀</div>
              <h2>Featured Projects</h2>
            </div>
            <div class="projects-grid">
              <div class="project-card">
                <div class="project-header">
                  <h3 class="project-title">Food Management System</h3>
                  <span class="project-status status-completed">Completed</span>
                </div>
                <p class="project-description">
                  Comprehensive system for restaurants and food services to manage inventory, track orders, and optimize food waste. 
                  Features real-time inventory tracking, automated reordering, and analytics dashboard.
                </p>
                <div class="tech-stack">
                  <span class="tech-badge">Laravel</span>
                  <span class="tech-badge">MySQL</span>
                  <span class="tech-badge">JavaScript</span>
                  <span class="tech-badge">REST API</span>
                </div>
              </div>
              <div class="project-card">
                <div class="project-header">
                  <h3 class="project-title">Café Management System</h3>
                  <span class="project-status status-completed">Completed</span>
                </div>
                <p class="project-description">
                  Full-featured POS and management system for cafés. Includes order management, customer loyalty programs, 
                  staff scheduling, and financial reporting capabilities.
                </p>
                <div class="tech-stack">
                  <span class="tech-badge">PHP</span>
                  <span class="tech-badge">Laravel</span>
                  <span class="tech-badge">jQuery</span>
                  <span class="tech-badge">Bootstrap</span>
                </div>
              </div>
              <div class="project-card">
                <div class="project-header">
                  <h3 class="project-title">MG Mobile Application</h3>
                  <span class="project-status status-development">In Development</span>
                </div>
                <p class="project-description">
                  Cross-platform mobile application with focus on performance and user experience. 
                  Features include real-time updates, offline functionality, and seamless synchronization.
                </p>
                <div class="tech-stack">
                  <span class="tech-badge">Flutter</span>
                  <span class="tech-badge">Dart</span>
                  <span class="tech-badge">Firebase</span>
                  <span class="tech-badge">Java</span>
                </div>
              </div>
              <div class="project-card">
                <div class="project-header">
                  <h3 class="project-title">Food Delivery App UI/UX</h3>
                  <span class="project-status status-completed">Completed</span>
                </div>
                <p class="project-description">
                  Complete UI/UX design for a modern food delivery application. Created user-friendly interfaces 
                  with intuitive navigation, beautiful animations, and accessibility considerations.
                </p>
                <div class="tech-stack">
                  <span class="tech-badge">Figma</span>
                  <span class="tech-badge">Prototyping</span>
                  <span class="tech-badge">User Research</span>
                  <span class="tech-badge">Design Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Sidebar -->
        <div class="sidebar">
          <!-- Skills -->
          <div class="section">
            <div class="section-header">
              <div class="section-icon">⚡</div>
              <h2>Technical Skills</h2>
            </div>
            <div class="skills-category">
              <div class="category-title">Mobile Development</div>
              <div class="skill-item">
                <span class="skill-name">Flutter</span>
                <div class="skill-level">
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot"></span>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Dart</span>
                <div class="skill-level">
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot"></span>
                </div>
              </div>
            </div>
            <div class="skills-category">
              <div class="category-title">Web Development</div>
              <div class="skill-item">
                <span class="skill-name">Laravel</span>
                <div class="skill-level">
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot"></span>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">PHP</span>
                <div class="skill-level">
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot"></span>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">HTML/CSS</span>
                <div class="skill-level">
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                </div>
              </div>
              <div class="skill-item">
                <span class="skill-name">jQuery</span>
                <div class="skill-level">
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot active"></span>
                  <span class="skill-dot"></span>
                  <span class="skill-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CV',
  methods: {
    printCV() {
      window.print();
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cv-wrapper {
  --primary: #2563eb;
  --primary-dark: #1e40af;
  --secondary: #7c3aed;
  --accent: #10b981;
  --dark: #0f172a;
  --gray: #64748b;
  --light-gray: #f1f5f9;
  --white: #ffffff;
  --border: #e2e8f0;
  --success: #22c55e;
  --warning: #f59e0b;
  
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--dark);
  background: #f8fafc;
  min-height: 100vh;
}

/* Print Styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .cv-wrapper {
    background: white;
  }
  
  .cv-container {
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
}

/* Top Bar */
.top-bar {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.top-bar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cv-title-text {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--dark);
}

.cv-subtitle-text {
  color: var(--gray);
  margin-left: 1rem;
}

.download-btn {
  background: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

/* Main Container */
.cv-container {
  max-width: 1200px;
  margin: 5rem auto 2rem;
  padding: 2rem;
}

/* Header Section */
.header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 3rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(100px, -100px);
}

.header-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.name-title h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.name-title .title {
  font-size: 1.3rem;
  opacity: 0.95;
  font-weight: 400;
}

.status-badge {
  display: inline-block;
  background: var(--success);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-top: 1rem;
}

/* Contact Bar */
.contact-bar {
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.contact-items {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: var(--light-gray);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.2rem;
}

.contact-label {
  font-size: 0.85rem;
  color: var(--gray);
}

.contact-item a {
  color: var(--dark);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: var(--primary);
}

/* Main Content Grid */
.main-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2rem;
}

/* Content Sections */
.section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border);
}

.section-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
}

.section h2 {
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

/* Professional Summary */
.summary-text {
  color: var(--gray);
  line-height: 1.8;
  font-size: 1.05rem;
}

/* Experience Timeline */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.4rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
  border: 3px solid white;
  box-shadow: 0 0 0 2px var(--border);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.position-title {
  font-weight: 600;
  color: var(--dark);
  font-size: 1.1rem;
}

.company-name {
  color: var(--primary);
  margin-top: 0.25rem;
  font-weight: 500;
}

.date-badge {
  background: var(--light-gray);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--gray);
  white-space: nowrap;
}

.timeline-content {
  color: var(--gray);
  margin-top: 0.75rem;
}

.timeline-content ul {
  margin-top: 0.5rem;
  padding-left: 1.5rem;
}

.timeline-content li {
  margin-bottom: 0.5rem;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  gap: 1.5rem;
}

.project-card {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  background: var(--white);
}

.project-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  border-color: var(--primary);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
}

.project-title {
  font-weight: 600;
  color: var(--dark);
  font-size: 1.1rem;
  margin: 0;
}

.project-status {
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-completed {
  background: #dcfce7;
  color: #166534;
}

.status-development {
  background: #fef3c7;
  color: #92400e;
}

.project-description {
  color: var(--gray);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: var(--light-gray);
  color: var(--dark);
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Skills Section */
.skills-category {
  margin-bottom: 1.5rem;
}

.skills-category:last-child {
  margin-bottom: 0;
}

.category-title {
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.skill-name {
  color: var(--gray);
  font-size: 0.95rem;
}

.skill-level {
  display: flex;
  gap: 0.25rem;
}

.skill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border);
}

.skill-dot.active {
  background: var(--primary);
}

/* Mobile Responsive */
@media (max-width: 968px) {
  .main-grid {
    grid-template-columns: 1fr;
  }

  .header-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .profile-section {
    flex-direction: column;
  }

  .contact-items {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 640px) {
  .cv-container {
    padding: 1rem;
  }

  .header {
    padding: 2rem 1.5rem;
  }

  .name-title h1 {
    font-size: 1.8rem;
  }

  .section {
    padding: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

