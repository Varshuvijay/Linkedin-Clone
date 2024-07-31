document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.loader-container').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 2000);
  });



let popup = document.getElementsByClassName("popup-card")[0];
let closeBtn = document.getElementById("close-btn");

function showPopup() {
  setTimeout(() => {
    popup.style.transform = "translateY(0)";
  }, 3000);
}
window.onload = showPopup();






document.getElementById("openOverlay").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("overlay").style.display = "flex";
});

document.getElementById("closeOverlay").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
});




