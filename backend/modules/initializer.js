function initialize() {
  window.addEventListener("DOMContentLoaded", () => {
    console.log("Initializing");
    window.modal = new window.Modal();
    window.offcanvas = new window.OffCanvas();
    window.user = new window.User();
  });
}

initialize();
