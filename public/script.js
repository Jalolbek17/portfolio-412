// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
})

// Add active nav link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let currentSection = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (pageYOffset >= sectionTop - 100) {
      currentSection = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.style.color = "var(--accent-light)"
    } else {
      link.style.color = ""
    }
  })
})

// Add hover effects to cards
document.querySelectorAll(".card, .project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-4px)"
  })
  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})
