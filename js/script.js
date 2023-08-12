document.addEventListener("DOMContentLoaded", function (event) {
    let popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  });

  function myFunction() {
    alert("Thank you for your comment <3");
  }

  window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav-op").style.opacity = "0.7";
    } else {
        document.getElementById("nav-op").style.opacity = "1";
    }
}