window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    $(".simple-navbar").addClass("scrolled-navbar");
  } else {
    $(".simple-navbar").removeClass("scrolled-navbar");
  }
}
