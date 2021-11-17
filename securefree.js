window.addEventListener("DOMContentLoaded", function () {
  if (!isSecureContext) {
    document.querySelector('.secure-warning').style.display = "none" 
  }
})
