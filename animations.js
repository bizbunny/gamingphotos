//sorting animations----------------------------------------------------------------------------
$(document).ready(function(){
  $(".button").click(function(){
      var value = $(this).attr("data-filter");
      if (value == "all")
      {
          $(".filter").slideDown("1000");//).show("1000") other option
      }
      else
      {
          $(".filter").not("."+value).slideUp("1000");//).hide("1000") other option
          $(".filter").filter("."+value).slideDown("1000");//).show("1000") other option
      }
      $("ul .button").click(function(){
          $(this).addClass('active')
      })
  })
})
//Loader----------------------------------------------------------------------------
var Loader;

function loadingLoader() {
  Loader = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("photos").style.display = "block";
}
