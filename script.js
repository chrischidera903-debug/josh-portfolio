const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const projectImages = document.querySelectorAll(
  ".project-image1 img, .project-image2 img, .project-image3 img, .project-image4 img",
);
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

function goToProjects() {
  document
    .getElementById("projects-section")
    .scrollIntoView({ behavior: "smooth" });
}
projectImages.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
  });
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
modalImage.addEventListener("click", () => {
  modalImage.classList.toggle("zoomed");
});

function downloadCV() {
  window.open(
    "https://api.whatsapp.com/send?phone=2348135188583&text=Hello%20I%20want%20your%20CV",
  );
}
