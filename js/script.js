document.addEventListener("DOMContentLoaded", () => {
 
  // Footer Year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Navbar Toggle + Scroll Behavior
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const header = document.querySelector("header");

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    mainNav.classList.toggle("open");
  });

  // Auto-close nav when clicking a link
  document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Navbar background change on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

 
  // Scroll-to-Top Button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.display = "none";
  scrollBtn.style.padding = "12px 16px";
  scrollBtn.style.borderRadius = "50%";
  scrollBtn.style.border = "none";
  scrollBtn.style.background = "#0066ff";
  scrollBtn.style.color = "white";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.fontSize = "18px";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 250 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  
  // Projects Section

  const projects = [
    {
      title: "Client A",
      description: "Custom web application built for enterprise scaling.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Client B",
      description: "AI-powered analytics dashboard for decision making.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Client C",
      description: "Cross-platform mobile app with offline support.",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  const projectGrid = document.getElementById("projectGrid");
  const projectModal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");
  const viewMoreBtn = document.getElementById("viewMore");

  function renderProjects(list) {
    projectGrid.innerHTML = "";
    list.forEach((p) => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="project-content">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <span class="project-view">View Case Study →</span>
        </div>
      `;
      div.addEventListener("click", () => openModal(p));
      projectGrid.appendChild(div);
    });
  }

  renderProjects(projects);

  function openModal(project) {
    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <img src="${project.image}" alt="${project.title}" style="max-width:100%;border-radius:12px;margin-bottom:16px;">
      <p>${project.description}</p>
    `;
    projectModal.setAttribute("aria-hidden", "false");
    projectModal.style.display = "block";
  }

  modalClose.addEventListener("click", () => {
    projectModal.setAttribute("aria-hidden", "true");
    projectModal.style.display = "none";
  });

  viewMoreBtn.addEventListener("click", () => {
    renderProjects([...projects, ...projects]);
    viewMoreBtn.style.display = "none";
  });


  // Contact Form
 
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "⚠️ Please fill out all fields.";
      formStatus.style.color = "red";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formStatus.textContent = "⚠️ Please enter a valid email address.";
      formStatus.style.color = "red";
      return;
    }

    formStatus.textContent = "✅ Your message has been sent successfully!";
    formStatus.style.color = "green";
    contactForm.reset();
  });

  // Newsletter Button
 
  const newsletterBtn = document.getElementById("newsletterBtn");
  newsletterBtn.addEventListener("click", () => {
    formStatus.textContent = "📩 Subscribed to updates!";
    formStatus.style.color = "blue";
  });
});
