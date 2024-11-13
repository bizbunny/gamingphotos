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
  m1: ["modal1", "./static/loveanddeepspace/Paper17288440731.png", ""],
  m2: ["modal2", "./static/loveanddeepspace/Paper17292167252.png", ""],
  m3: ["modal3", "./static/loveanddeepspace/Paper17292167773.png", ""],
  m4: ["modal4", "./static/loveanddeepspace/Paper17292168134.png", ""],
  m5: ["modal5", "./static/loveanddeepspace/Paper17292181731.png", ""],
  m6: ["modal6", "./static/loveanddeepspace/Paper17292181832.png", ""],
  m7: ["modal7", "./static/loveanddeepspace/Paper17292181953.png", ""],
  m8: ["modal8", "./static/loveanddeepspace/Paper17292182044.png", ""],
  m9: ["modal9", "./static/loveanddeepspace/Paper17311247121.png", ""],
  m10: ["modal10", "./static/loveanddeepspace/Paper17311248072.png", ""],
  m11: ["modal11", "./static/loveanddeepspace/Paper17311249413.png", ""],
  m12: ["modal12", "./static/loveanddeepspace/Paper17311251665.png", ""],
  m13: ["modal13", "./static/loveanddeepspace/Paper17311254646.png", ""],
  m14: ["modal14", "./static/loveanddeepspace/Paper17311256267.png", ""],
  m15: ["modal15", "./static/loveanddeepspace/Paper17311257548.png", ""],
  m16: ["modal16", "./static/loveanddeepspace/Paper17312828791.png", ""],
  m17: ["modal17", "./static/loveanddeepspace/Paper17312828943.png", ""],
  m18: ["modal18", "./static/loveanddeepspace/Paper17312828984.png", ""],
  m19: ["modal19", "./static/loveanddeepspace/Paper17312830256.png", ""],
  m20: ["modal20", "./static/loveanddeepspace/Paper17312830677.png", ""],
  m21: ["modal21", "./static/loveanddeepspace/Paper17312830768.png", ""],
  m22: ["modal22", "./static/loveanddeepspace/Paper17312830869.png", ""],
  m23: ["modal23", "./static/loveanddeepspace/Paper173128310410.png", ""],
  m24: ["modal24", "./static/loveanddeepspace/Paper173128312511.png", ""],
  m25: ["modal25", "./static/loveanddeepspace/Paper173128314612.png", ""],
  m26: ["modal26", "./static/loveanddeepspace/Paper173128365413.png", ""],
  m27: ["modal27", "./static/loveanddeepspace/Paper173128368714.png", ""],
  m28: ["modal28", "./static/loveanddeepspace/Paper173128382915.png", ""],
  m29: ["modal29", "./static/loveanddeepspace/Paper173128396416.png", ""],
  m30: ["modal30", "./static/loveanddeepspace/Paper173128404517.png", "Sylus Pose Side to Side"],
  m31: ["modal31", "./static/loveanddeepspace/Paper17313856361.png", "Xavier Bunny 1"],
  m32: ["modal32", "./static/loveanddeepspace/Paper17313857243.png", "Xavier Bunny 2"],
  m33: ["modal33", "./static/loveanddeepspace/Paper17313857885.png", "Xavier Bunny 3"],
  m34: ["modal34", "./static/loveanddeepspace/Paper17313860127.png", "Xavier Standing Pose"],
  m35: ["modal35", "./static/loveanddeepspace/Paper17313860389.png", "Xavier Hmpf Pose"],
  m36: ["modal36", "./static/loveanddeepspace/Paper173138604310.png", "MC Glasses"],
  m37: ["modal37", "./static/loveanddeepspace/Paper173138604911.png", "Xavier Rectangle Pose"],
  m38: ["modal38", "./static/loveanddeepspace/Paper173138605312.png", "Xavier Collage"],
  m39: ["modal39", "./static/loveanddeepspace/Paper173138605713.png", "Zayne Background Photo Pose"],
  m40: ["modal40", "./static/loveanddeepspace/Paper173138605914.png", "Zayne Megaphone"],
  m41: ["modal41", "./static/loveanddeepspace/Paper173138606215.png", "MC Megaphone"],
  m42: ["modal42", "./static/loveanddeepspace/Paper173138606717.png", "Xavier in Café"],
  m43: ["modal43", "./static/loveanddeepspace/Paper173138683718.png", "Xavier Collage 2"],
  m44: ["modal44", "./static/loveanddeepspace/Paper173138705720.png", "MC megaphone with Bear Ears"], 
  m45: ["modal45", "./static/loveanddeepspace/Paper173138690519.png", "Xavier megaphone"], 
  m46: ["modal46", "./static/loveanddeepspace/Paper173138716121.png", "Xavier Photo Pose with Dog Ear Stickers"], 
  m47: ["modal47", "./static/loveanddeepspace/Paper173138722222.png","Xavier with Close up MC Pose"]};
let modalL= '';
function loadingLoader() {
  Loader = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("photos").style.display = "block";
}
for ( let key in mArray){//creates all the modals
  modalL+='<div class="modal" id="'+mArray[key][0]+'"><div class="modal-content"><div class="modal-body"><figure class="mbc_container"><img src="'+mArray[key][1]+'" /></figure></div></div></div>';
}
document.getElementById("modalL").innerHTML=modalL;//displays the modals
//--------------------------------------------------------------- MODAL FUNCTIONS --------------------------------------------------------------------------------------------//
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