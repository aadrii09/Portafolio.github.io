document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const hiddenRows = document.querySelectorAll(".hidden-row");
    let isExpanded = false;

    toggleButton.addEventListener("click", () => {
      isExpanded = !isExpanded;
      hiddenRows.forEach(row => {
        if (isExpanded) {
          row.classList.add("show");
        } else {
          row.classList.remove("show");
        }
      });
      toggleButton.innerHTML = isExpanded
        ? 'Ver menos <i class="fas fa-chevron-up ms-2"></i>'
        : 'Ver más <i class="fas fa-chevron-down ms-2"></i>';
    });
  });