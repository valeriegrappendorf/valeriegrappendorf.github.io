//Navbar for mobile view
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



//Landing Page iPad & Handy Animation --> Rest in jquery
var images = ["bosch.png", "smart.png", "post.png", "lucie.png"];



// Image Modal
function modal(){
  var diesesbild = document.getElementById(this.id);
 // Get the modal
  var modal = document.getElementById("myModal");
  style = diesesbild.currentStyle || window.getComputedStyle(diesesbild, false),
  bi = style.backgroundImage.slice(4, -1).replace(/["']/g, "");
  var modalImg = document.getElementById("img01");

  modal.style.display = "block";
  modalImg.src = bi;
  // // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
  modal.style.display = "none";
  }
}
