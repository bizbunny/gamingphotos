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
//Loader & modal images----------------------------------------------------------------------------
var Loader;
let mArray = {//modal data
  m39: ["modal39", "./static/loveanddeepspace/Paper173138605713.png"],
  m40: ["modal40", "./static/loveanddeepspace/Paper173138605914.png"],
  m41: ["modal41", "./static/loveanddeepspace/Paper173138606215.png"],
  m42: ["modal42", "./static/loveanddeepspace/Paper173138606717.png"],
  m43: ["modal43", "./static/loveanddeepspace/Paper173138683718.png"],
  m44: ["modal44", "./static/loveanddeepspace/Paper173138705720.png"], 
  m45: ["modal45", "./static/loveanddeepspace/Paper173138690519.png"], 
  m46: ["modal46", "./static/loveanddeepspace/Paper173138716121.png"], 
  m47: ["modal47", "./static/loveanddeepspace/Paper173138722222.png"]};

function loadingLoader() {
  Loader = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("photos").style.display = "block";
}

for ( let key in mArray){//displays the modals
  document.getElementById(key).innerHTML='<div class="modal" id="'+mArray[key][0]+'"><div class="modal-content"><div class="modal-body"><figure class="mbc_container"><img src="'+mArray[key][1]+'" /></figure></div></div></div>';
}

//--- MODAL FUNCTIONS ---//
var modals = document.querySelectorAll(".modal");
var modalbtn = document.querySelectorAll("button.modal-btn");
var spans = document.getElementsByClassName("close");

//user clicks project card, open modal
for(var i = 0;i <modalbtn.length ;i++){
  modalbtn[i].onclick = function(e){
    e.preventDefault();
    var modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}

//user clicks close to close modal
for(vari=0;i<spans.length;i++){
  spans[i].onclick = function(){
    for(var index in modals){
      if(typeof modals[index].style !== "undefined"){
        modals[index].style.display = "none";
      }
    }//end of for loop
  }//end of anon func
}//end of outer loop

//user clicks outside modal, close too
window.onclick = function(event){
  if(event.target.classList.contains("modal")){
    for(var index in modals){
      if(typeof modals[index].style !== "undefined"){
        modals[index].style.display = "none";
      }
    }
  }
}