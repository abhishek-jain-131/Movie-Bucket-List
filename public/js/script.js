document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".movie-checkbox").forEach(checkbox => {
    checkbox.addEventListener("change", (event) => {
      const movieNameElement = event.target.nextElementSibling;
      if (event.target.checked) {
        movieNameElement.style.textDecoration = "line-through";
        movieNameElement.style.opacity = "0.6";
      } else {
        movieNameElement.style.textDecoration = "none";
        movieNameElement.style.opacity = "1";
      }
    });
  });
});
