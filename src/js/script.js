function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTop").style.display = "block";
  } else {
      document.getElementById("backToTop").style.display = "none";
  }
};

document.getElementById("backToTop").onclick = function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
};