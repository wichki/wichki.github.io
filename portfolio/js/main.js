    // On document ready:
  $(document).ready(function() {
    $(".button1").click(function() {
    $(".mobile_nav").toggleClass("active");
    $(".button1").toggleClass("btn");
      });

    var containerEl = document.querySelector('.project-wrapper');

    var mixer = mixitup(containerEl);

  });
