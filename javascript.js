window.addEventListener("scroll", function () {
  const footer = document.querySelector(".footer");
  if (window.scrollY > 0) {
    footer.classList.add("show");
  } else {
    footer.classList.remove("show");
  }
});
