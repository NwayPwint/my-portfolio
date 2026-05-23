<template>
  <div :class="['app-wrapper', isDark ? 'dark-mode' : 'light-mode']">
    <div class="noise-overlay"></div>

    <nav class="nav-wrapper">
      <div class="container d-flex justify-content-between align-items-center">
        <a href="#" class="brand">NWAY PWINT PHYU<span class="dot">.</span></a>

        <div class="nav-right">
          <div class="nav-links d-none d-lg-flex">
            <a href="#expertise" class="nav-item">Expertise</a>
            <a href="#experience" class="nav-item">Experience</a>
          </div>

          <button
            @click="toggleTheme"
            class="theme-toggle"
            :title="isDark ? 'Light Mode' : 'Dark Mode'"
          >
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <a href="#contact" class="cta-nav">Let's Talk</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="hero-section">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
              <span class="greeting">HELLO, I'M</span>
              <h1 class="full-name">Nway Pwint Phyu</h1>
              <h2 class="main-headline">
                Full-Stack Developer building
                <span class="serif-italic">efficient</span> digital solutions.
              </h2>
              <p class="hero-bio">
                Computer Science graduate with 1.5 years of experience in a
                Japanese-based IT environment. Specialized in Rails, Laravel,
                and Vue.js.
              </p>
              <div
                class="hero-actions d-flex gap-3 justify-content-center justify-content-lg-start mt-4"
              >
                <a href="#experience" class="btn-primary">View Projects</a>
                <a href="/resume.pdf" class="btn-secondary">Resume</a>
              </div>
            </div>
            <div
              class="col-lg-5 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end"
            >
              <div class="photo-fantastic-frame">
                <img
                  src="/nway.jpg"
                  alt="Nway Pwint Phyu"
                  class="profile-img-square"
                />
                <div class="frame-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" class="section-padding section-bg-alt">
        <div class="container">
          <h2 class="section-label">Capabilities</h2>
          <div class="row g-4">
            <div
              class="col-md-4"
              v-for="skill in skillGroups"
              :key="skill.title"
            >
              <div class="skill-card">
                <div class="skill-icon">{{ skill.icon }}</div>
                <h3>{{ skill.title }}</h3>
                <p>{{ skill.desc }}</p>
                <div class="skill-tags">
                  <span v-for="tag in skill.tags" :key="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" class="section-padding">
        <div class="container">
          <h2 class="section-label">Professional Experience</h2>
          <div class="experience-card">
            <div
              class="exp-header d-flex justify-content-between align-items-start flex-wrap"
            >
              <div>
                <h3 class="role-title">Full-Stack Engineer</h3>
                <p class="company-info">Japanese-based IT Consultancy</p>
              </div>
              <span class="exp-date">2024 — PRESENT</span>
            </div>
            <ul class="exp-list">
              <li>
                Architected backends using <strong>Ruby on Rails</strong> and
                <strong>Laravel</strong>.
              </li>
              <li>
                Developed reactive frontends with <strong>Vue.js</strong>.
              </li>
              <li>
                Adhered to strict Japanese
                <strong>Quality Assurance (QA)</strong> standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" class="section-padding">
        <div class="container">
          <div class="contact-box">
            <div class="row g-0">
              <div class="col-lg-5 contact-sidebar">
                <h2 class="contact-title">Connect.</h2>
                <p>Based in Yangon, available for global opportunities.</p>
                <div class="social-links-minimal mt-4">
                  <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                  <a
                    href="https://github.com/NwayPwint"
                    target="_blank"
                    class="ms-3"
                    >GitHub</a
                  >
                </div>
              </div>
              <div class="col-lg-7 form-container">
                <form
                  class="clean-form"
                  action="https://formspree.io/f/xqedbnyp"
                  method="POST"
                >
                  <div class="row g-4">
                    <div class="col-md-6 form-group">
                      <label>NAME</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        class="form-input"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <label>EMAIL</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        class="form-input"
                        required
                      />
                    </div>
                    <div class="col-12 form-group">
                      <label>MESSAGE</label>
                      <textarea
                        name="message"
                        placeholder="How can I help you?"
                        rows="4"
                        class="form-input"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" class="submit-btn">SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer-section">
      <div class="container">
        <div
          class="footer-content d-flex justify-content-between align-items-center flex-wrap"
        >
          <div class="footer-logo">
            <a href="#" class="brand"
              >NWAY PWINT PHYU<span class="dot">.</span></a
            >
          </div>
          <div class="footer-links-group d-flex gap-4">
            <a href="https://linkedin.com" target="_blank" class="footer-social"
              >LinkedIn</a
            >
            <a
              href="https://github.com/NwayPwint"
              target="_blank"
              class="footer-social"
              >GitHub</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isDark = ref(true);
const toggleTheme = () => {
  isDark.value = !isDark.value;
};

const skillGroups = [
  {
    icon: "▩",
    title: "Backend",
    desc: "Robust server-side architecture.",
    tags: ["Rails", "Laravel", "Spring Boot"],
  },
  {
    icon: "▨",
    title: "Database",
    desc: "Scalable data management.",
    tags: ["MySQL", "PostgreSQL"],
  },
  {
    icon: "▦",
    title: "Frontend",
    desc: "Reactive, high-performance UI.",
    tags: ["Vue 3", "JS", "Bootstrap"],
  },
];
</script>

<style scoped>
/* CSS Variables */
.dark-mode {
  --bg-color: #0f110f;
  --bg-alt: #0a0c0a;
  --card-bg: #141714;
  --text-main: #e0e2db;
  --text-muted: #8a8c82;
  --heading-color: #ffffff;
  --primary-green: #8eb057;
  --accent-gold: #d4af37;
  --nav-bg: rgba(15, 17, 15, 0.95);
  --input-border: rgba(255, 255, 255, 0.1);
}

.light-mode {
  --bg-color: #fdfcf8;
  --bg-alt: #f4f2eb;
  --card-bg: #ffffff;
  --text-main: #2a2c24;
  --text-muted: #6a6e5e;
  --heading-color: #1a1d1a;
  --primary-green: #5d7a35;
  --accent-gold: #b38f00;
  --nav-bg: rgba(253, 252, 248, 0.95);
  --input-border: #e0e2db;
}

.app-wrapper {
  background-color: var(--bg-color);
  color: var(--text-main);
  min-height: 100vh;
  transition: all 0.4s ease;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.noise-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1000;
  background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
  opacity: 0.05;
}

/* Navigation */
.nav-wrapper {
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1100;
  border-bottom: 1px solid var(--input-border);
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.brand {
  font-weight: 800;
  text-decoration: none;
  color: var(--heading-color);
  letter-spacing: 1px;
}
.dot {
  color: var(--primary-green);
}
.nav-item {
  text-decoration: none;
  color: var(--text-muted);
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 20px;
}

/* Theme Toggle */
.theme-toggle {
  background: var(--card-bg);
  border: 1px solid var(--input-border);
  color: var(--text-main);
  width: 42px;
  height: 42px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-nav {
  background: var(--primary-green);
  color: #fff !important;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.75rem;
  text-transform: uppercase;
}

/* Hero */
.hero-section {
  padding: 120px 0;
}
.greeting {
  color: var(--primary-green);
  font-weight: 800;
  letter-spacing: 4px;
  font-size: 0.8rem;
}
.full-name {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  color: var(--heading-color);
  margin: 15px 0;
  letter-spacing: -2px;
}
.main-headline {
  color: var(--text-muted);
  font-size: 1.6rem;
  line-height: 1.3;
  max-width: 650px;
}
.serif-italic {
  font-family: "Newsreader", serif;
  font-style: italic;
  color: var(--accent-gold);
}
.hero-bio {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 550px;
  margin-top: 1rem;
}

/* Photo Frame */
.photo-fantastic-frame {
  position: relative;
  width: clamp(300px, 40vw, 420px);
  aspect-ratio: 1/1;
}
.profile-img-square {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 12px solid #fff;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
}
.frame-accent {
  position: absolute;
  inset: -20px 20px 20px -20px;
  border: 2px solid var(--accent-gold);
  z-index: 1;
}

/* Sections */
.social-links-minimal {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.social-links-minimal a {
  position: relative;
  color: var(--primary-green);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

/* Animated Underline Effect */
.social-links-minimal a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -4px;
  left: 0;
  background-color: var(--primary-green);
  transform: scaleX(0.3);
  transform-origin: bottom left;
  transition: transform 0.3s ease;
}

/* Hover State */
.social-links-minimal a:hover {
  color: var(--accent-gold);
  transform: translateY(-2px);
}

.social-links-minimal a:hover::after {
  transform: scaleX(1);
  background-color: var(--accent-gold);
}
.section-padding {
  padding: 120px 0;
}
.section-bg-alt {
  background-color: var(--bg-alt);
}
.section-label {
  color: var(--accent-gold);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.7rem;
  margin-bottom: 4rem;
  border-left: 3px solid var(--primary-green);
  padding-left: 15px;
}

/* Cards */
.skill-card,
.experience-card {
  background: var(--card-bg);
  padding: 3.5rem;
  border: 1px solid var(--input-border);
  transition: 0.4s ease;
}
.skill-icon {
  color: var(--primary-green);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}
.skill-tags span {
  background: rgba(142, 176, 87, 0.1);
  color: var(--primary-green);
  padding: 5px 12px;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 4px;
  margin-right: 8px;
  border: 1px solid rgba(142, 176, 87, 0.2);
}

/* Experience */
.role-title {
  color: var(--heading-color);
  font-size: 2rem;
  font-weight: 800;
}
.company-info {
  color: var(--accent-gold);
  font-weight: 700;
}
.exp-date {
  color: var(--primary-green);
  font-weight: 800;
  font-size: 0.9rem;
}
.exp-list {
  list-style: none;
  padding: 0;
  margin-top: 2.5rem;
}
.exp-list li {
  color: var(--text-muted);
  margin-bottom: 15px;
  position: relative;
  padding-left: 25px;
}
.exp-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--accent-gold);
  font-weight: bold;
}

/* Contact Form */

/* Contact Section Minimalist Refinement */
.contact-box {
  background: var(--card-bg);
  border: 1.5px solid var(--input-border);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.04);
  margin-top: 2rem;
}
.contact-sidebar {
  background: var(--bg-alt);
  padding: 3.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
}
.contact-title {
  color: var(--heading-color);
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  letter-spacing: 0.5px;
}
.form-container {
  padding: 3.5rem 2.5rem;
  background: var(--card-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-group label {
  color: var(--primary-green);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 6px;
  display: block;
  letter-spacing: 1px;
}
.form-input {
  width: 100%;
  border: 1.5px solid var(--input-border);
  border-radius: 7px;
  padding: 0.85rem 1.1rem;
  outline: none;
  background: var(--bg-alt);
  color: var(--text-main);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  transition:
    border 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.02);
}
.form-input:focus {
  border-color: var(--primary-green);
  box-shadow: 0 2px 8px 0 rgba(142, 176, 87, 0.08);
}
.submit-btn {
  background: var(--primary-green);
  color: #fff;
  width: 100%;
  padding: 1.1rem;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  margin-top: 1.5rem;
  border-radius: 7px;
  font-size: 1rem;
  box-shadow: 0 2px 8px 0 rgba(142, 176, 87, 0.08);
  transition:
    background 0.2s,
    box-shadow 0.2s;
}
.submit-btn:hover {
  background: #222;
  color: var(--primary-green);
  box-shadow: 0 4px 16px 0 rgba(142, 176, 87, 0.12);
}
@media (max-width: 991px) {
  .contact-sidebar,
  .form-container {
    padding: 2rem 1.2rem;
  }
  .contact-title {
    font-size: 1.5rem;
  }
}

/* Buttons */
.btn-primary {
  background: var(--primary-green);
  color: #fff;
  padding: 1rem 2.2rem;
  text-decoration: none;
  font-weight: 800;
  border-radius: 4px;
}
.btn-secondary {
  border: 2px solid var(--accent-gold);
  color: var(--accent-gold);
  padding: 1rem 2.2rem;
  text-decoration: none;
  font-weight: 800;
  border-radius: 4px;
}

/* Footer */
.footer-section {
  padding: 60px 0;
  border-top: 1px solid var(--input-border);
  background: var(--bg-alt);
}
.copyright {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 10px;
}
.footer-social {
  text-decoration: none;
  color: var(--primary-green);
  font-weight: 700;
  font-size: 0.85rem;
}

/* Mobile Specific Fixes */
@media (max-width: 991px) {
  .hero-section {
    padding: 60px 0;
  }
  .photo-fantastic-frame {
    width: 240px; /* Scaling down the profile image for mobile */
    margin: 0 auto 40px;
  }
  .profile-img-square {
    border-width: 6px;
  }
  .frame-accent {
    inset: -10px 10px 10px -10px;
  }
  .contact-sidebar,
  .form-container {
    padding: 3rem;
  }
}
</style>
