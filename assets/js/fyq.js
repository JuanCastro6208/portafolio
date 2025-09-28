document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const btn = item.querySelector(".trigger");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Cierra todos
      items.forEach(i => {
        i.classList.remove("is-open");
        i.querySelector(".trigger").setAttribute("aria-expanded", "false");
      });

      // Abre el actual si estaba cerrado
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
});
