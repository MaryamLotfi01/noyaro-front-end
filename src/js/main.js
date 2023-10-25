window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    $(".simple-navbar").addClass("scrolled-navbar");
  } else {
    $(".simple-navbar").removeClass("scrolled-navbar");
  }
}
