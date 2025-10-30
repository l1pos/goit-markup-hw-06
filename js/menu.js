// menu.js
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    toggleBtn: document.querySelector("[data-menu-open]"),
  };

  function toggleModal() {
    const isOpen = refs.modal.classList.toggle("is-open");
    if (refs.toggleBtn) {
      refs.toggleBtn.setAttribute("aria-expanded", String(isOpen));
    }
    // Блокування прокрутки сторінки при відкритому меню
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
})();
