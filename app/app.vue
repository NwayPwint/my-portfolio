<template>
  <div class="app-container">
    <div class="noise-overlay"></div>

    <div
      v-if="showModal"
      class="custom-modal-overlay"
      @click.self="showModal = false"
    >
      <div class="custom-modal">
        <div class="modal-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
        </div>
        <h3>Sent!</h3>
        <p>I'll get back to you shortly.</p>
        <button @click="showModal = false" class="modal-close-btn">
          Close
        </button>
      </div>
    </div>

    <nav class="nav-wrapper">
      <div class="container d-flex justify-content-between align-items-center">
        <a href="#" class="brand">NWAY PWINT PHYU<span class="dot">.</span></a>
        <div class="nav-links d-none d-md-flex">
          <a href="#experience" class="nav-item">Experience</a>
          <a href="#expertise" class="nav-item">Skills</a>
          <a href="/resume.pdf" download class="nav-item resume-link">CV</a>
          <a href="#contact" class="nav-item cta">Get in Touch</a>
        </div>
        <div class="d-md-none">
          <a href="#contact" class="nav-item cta m-0">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="hero-section">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-10">
              <div class="sub-heading">Full-Stack Web Developer</div>
              <h1 class="main-title">
                Building <span class="serif-italic">efficient</span> digital
                solutions through robust engineering.
              </h1>
              <p class="hero-bio">
                Computer Science graduate with 1.5 years of experience in a
                Japanese-based IT environment. I bridge technical gaps with
                Rails, Laravel, and Vue.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="resume-cta-section">
        <div class="container">
          <div
            class="resume-card d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start"
          >
            <div class="resume-text mb-4 mb-md-0">
              <h3 class="resume-title">View full credentials</h3>
              <p class="resume-subtitle mb-0">
                Download my comprehensive CV for detailed project history and
                technical skills.
              </p>
            </div>
            <a href="/resume.pdf" download class="download-btn w-100-mobile">
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="ms-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section class="credibility-bar">
        <div class="container">
          <div class="cred-grid">
            <div class="cred-item">
              <span class="cred-label">Education</span>
              <span class="cred-value">B.C.Sc Computer Science</span>
            </div>
            <div class="cred-item border-left-custom">
              <span class="cred-label">Experience</span>
              <span class="cred-value">1.5 Years Professional</span>
            </div>
            <div class="cred-item border-left-custom">
              <span class="cred-label">Workflow</span>
              <span class="cred-value">Japanese IT Standards</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" class="section-padding">
        <div class="container">
          <h2 class="section-label">Professional Journey</h2>
          <div class="row g-4">
            <div class="col-12 mb-2 mb-md-4">
              <div class="project-card highlight-card">
                <div
                  class="project-header d-flex flex-column flex-md-row justify-content-between"
                >
                  <div class="title-group">
                    <h3 class="project-title">Full-Stack Developer</h3>
                    <div class="company-tag">Japanese-based IT Consultancy</div>
                  </div>
                  <span class="project-year mt-2 mt-md-0">2024 — Present</span>
                </div>
                <p class="project-desc">
                  Delivering enterprise-grade applications with a focus on
                  high-quality code, Japanese QA standards, and clean
                  architecture.
                </p>
                <div class="project-tags">
                  <span>Rails</span><span>Laravel</span><span>Vue.js</span
                  ><span>PostgreSQL</span>
                </div>
              </div>
            </div>

            <div v-for="(project, i) in projects" :key="i" class="col-md-6">
              <div class="project-card">
                <div class="project-header d-flex justify-content-between">
                  <h3 class="project-title">{{ project.title }}</h3>
                  <span class="project-year">{{ project.year }}</span>
                </div>
                <p class="project-desc">{{ project.description }}</p>
                <div class="project-tags">
                  <span v-for="tag in project.tech" :key="tag">{{ tag }}</span>
                </div>
                <div class="project-footer mt-4">
                  <span class="nda-protected">NDA Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" class="section-padding bg-nude-dark">
        <div class="container">
          <h2 class="section-label">Technical Skills</h2>
          <div class="row g-4 g-lg-5">
            <div class="col-md-4">
              <div class="expertise-item">
                <h4 class="h5 fw-bold">Full-Stack Development</h4>
                <p class="small text-secondary-nude">
                  Backend (Rails, Laravel) paired with interactive frontends
                  using Vue 3.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="expertise-item">
                <h4 class="h5 fw-bold">Engineering Foundation</h4>
                <p class="small text-secondary-nude">
                  Strong command of OOP, system design, and database management.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="expertise-item">
                <h4 class="h5 fw-bold">Japanese Standards</h4>
                <p class="small text-secondary-nude">
                  Rigorous testing, clear documentation, and collaborative
                  precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section-padding">
        <div class="container">
          <div class="contact-card">
            <div class="row">
              <div class="col-lg-5 mb-5 mb-lg-0">
                <h2 class="display-5 fw-bold mb-3">Let's connect.</h2>
                <p class="text-secondary-nude opacity-75">
                  I'm open to discussing technical challenges or professional
                  opportunities.
                </p>
              </div>
              <div class="col-lg-7">
                <form
                  @submit.prevent="handleContactSubmit"
                  class="minimal-form"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="text"
                        v-model="formData.name"
                        placeholder="Name"
                        class="m-input"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="email"
                        v-model="formData.email"
                        placeholder="Email"
                        class="m-input"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    v-model="formData.message"
                    placeholder="Your Message"
                    rows="3"
                    class="m-input"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    class="m-submit"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? "Sending..." : "Send Message" }}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div
        class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-4"
      >
        <p class="mb-0 text-center text-md-start">
          © 2026 Nway Pwint Phyu — Yangon, Myanmar
        </p>
        <div class="social-links d-flex">
          <a
            href="https://mm.linkedin.com/in/nway-pwint-phyu-713444317"
            target="_blank"
            rel="noopener"
            class="social-item"
            >LinkedIn</a
          >
          <a
            href="https://github.com/NwayPwint"
            target="_blank"
            rel="noopener"
            class="social-item ms-4"
            >GitHub</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const FORMSPREE_ID = "xqedbnyp";
const isSubmitting = ref(false);
const showModal = ref(false);
const formData = reactive({ name: "", email: "", message: "" });

const projects = [
  {
    title: "Workflow Automation",
    year: "2025",
    tech: ["Laravel", "Vue"],
    description:
      "Built a customized system to automate internal business logic and reporting.",
  },
  {
    title: "Enterprise Dashboard",
    year: "2024",
    tech: ["Rails", "Vue 3"],
    description:
      "Developed a reactive data visualization platform for monitoring system health.",
  },
];

const handleContactSubmit = async () => {
  isSubmitting.value = true;
  try {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      showModal.value = true;
      formData.name = "";
      formData.email = "";
      formData.message = "";
    } else {
      alert("Failed to send.");
    }
  } catch (error) {
    alert("Connection error.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@1,6..72,400&display=swap");

/* Global fix for sticky */
:global(body) {
  overflow-x: hidden;
  margin: 0;
}

.app-container {
  font-family: "Plus Jakarta Sans", sans-serif;
  background-color: #f8f5f2;
  color: #2d2a26;
}

.noise-overlay {
  position: fixed;
  inset: 0;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
  opacity: 0.04;
  pointer-events: none;
  z-index: 1000;
}

/* Modal */
.custom-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(45, 42, 38, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(8px);
}
.custom-modal {
  background: #f8f5f2;
  padding: 3rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}
.modal-close-btn {
  background: #2d2a26;
  color: #f8f5f2;
  border: none;
  padding: 0.8rem 2.5rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 1rem;
}

/* Refined Sticky Navigation */
.nav-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: rgba(248, 245, 242, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(226, 221, 217, 0.5);
}

.brand {
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-decoration: none;
  color: #2d2a26;
}
.dot {
  color: #a79277;
}
.nav-item {
  text-decoration: none;
  color: #7d7771;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 2rem;
  letter-spacing: 1px;
}
.resume-link {
  color: #a79277 !important;
}
.cta {
  color: #2d2a26;
  border-bottom: 2px solid #a79277;
  padding-bottom: 2px;
}

/* Hero */
.hero-section {
  padding: 60px 0 40px;
}
.sub-heading {
  font-size: 0.65rem;
  font-weight: 800;
  color: #a79277;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}
.main-title {
  font-size: clamp(2.2rem, 8vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}
.serif-italic {
  font-family: "Newsreader", serif;
  font-style: italic;
  font-weight: 400;
  color: #7d7771;
}
.hero-bio {
  font-size: 1.1rem;
  color: #7d7771;
  max-width: 550px;
}

/* Resume CTA */
.resume-cta-section {
  padding: 10px 0 30px;
}
.resume-card {
  background: #fff;
  border: 1px solid #e2ddd9;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}
.resume-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}
.resume-subtitle {
  font-size: 0.9rem;
  color: #7d7771;
}
.download-btn {
  display: flex;
  align-items: center;
  background: #a79277;
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.8rem;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: 0.3s;
}
.download-btn:hover {
  background: #2d2a26;
  color: #fff;
  transform: translateY(-2px);
}

/* Credibility Bar */
.credibility-bar {
  border-top: 1px solid #e2ddd9;
  border-bottom: 1px solid #e2ddd9;
  padding: 2rem 0;
}
.cred-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.cred-label {
  display: block;
  font-size: 0.6rem;
  text-transform: uppercase;
  color: #a79277;
  font-weight: 700;
  margin-bottom: 2px;
}
.cred-value {
  font-weight: 600;
  font-size: 0.85rem;
}
.border-left-custom {
  border-left: 1px solid #e2ddd9;
  padding-left: 1.5rem;
}

/* Experience & Skills */
.section-padding {
  padding: 80px 0;
}
.section-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #a79277;
  font-weight: 800;
  margin-bottom: 2.5rem;
  letter-spacing: 2px;
}
.bg-nude-dark {
  background-color: #f1ede9;
}
.project-card {
  background: #f1ede9;
  padding: 2rem;
  border-radius: 4px;
  height: 100%;
}
.highlight-card {
  border-left: 4px solid #a79277;
  background: #fff;
}
.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}
.company-tag {
  font-size: 0.8rem;
  color: #a79277;
  font-weight: 600;
}
.project-year {
  font-size: 0.75rem;
  color: #7d7771;
  font-weight: 700;
}
.project-desc {
  color: #7d7771;
  margin: 1.5rem 0;
  font-size: 0.9rem;
}
.project-tags span {
  font-size: 0.6rem;
  font-weight: 800;
  background: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #e2ddd9;
  margin-right: 6px;
  display: inline-block;
  margin-bottom: 5px;
}
.nda-protected {
  font-size: 0.65rem;
  color: #a79277;
  font-weight: 700;
  text-transform: uppercase;
}

/* Contact Form */
.contact-card {
  background: #2d2a26;
  color: #f8f5f2;
  padding: 3rem 2rem;
  border-radius: 12px;
}
.text-secondary-nude {
  color: #a79277;
}
.m-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #4d4842;
  padding: 1rem 0;
  color: #f8f5f2;
  outline: none;
  margin-bottom: 1rem;
  transition: 0.3s;
}
.m-input:focus {
  border-color: #a79277;
}
.m-submit {
  background: #f8f5f2;
  color: #2d2a26;
  border: none;
  padding: 1rem;
  font-weight: 700;
  margin-top: 1rem;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
}
.m-submit:hover:not(:disabled) {
  background: #a79277;
  color: #fff;
}

/* Footer & Social */
.footer {
  padding: 3rem 0;
  border-top: 1px solid #e2ddd9;
  font-size: 0.7rem;
  font-weight: 600;
  color: #7d7771;
}
.social-item {
  color: #2d2a26;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: 0.3s;
}
.social-item::after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #a79277;
  transition: 0.3s;
}
.social-item:hover {
  color: #a79277;
}
.social-item:hover::after {
  width: 100%;
}

@media (max-width: 991px) {
  .contact-card {
    padding: 3rem;
  }
}

@media (max-width: 767px) {
  .nav-wrapper {
    padding: 1rem 0;
  }
  .hero-section {
    padding: 40px 0;
  }
  .cred-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .border-left-custom {
    border-left: none;
    padding-left: 0;
    border-bottom: 1px solid #e2ddd9;
    padding-bottom: 1rem;
  }
  .section-padding {
    padding: 50px 0;
  }
  .contact-card {
    padding: 2.5rem 1.5rem;
  }
  .resume-card {
    padding: 1.5rem;
  }
  .w-100-mobile {
    width: 100%;
    justify-content: center;
  }
}
</style>
