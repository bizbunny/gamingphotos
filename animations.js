// Sorting animations
$(document).ready(function() {
  $(".button").click(function() {
    var value = $(this).attr("data-filter");
    
    if (value == "all") {
      $(".filter").slideDown("1000"); // Shows all elements
    } else {
      $(".filter").not("." + value).slideUp("1000"); // Hides unmatched elements
      $(".filter").filter("." + value).slideDown("1000"); // Shows matched elements
    }

    // Update active class
    $(".button").removeClass("active"); // Remove 'active' class from all buttons
    $(this).addClass("active"); // Add 'active' class to the clicked button
  });
});

// Modal data
let mArray = [
  { id: "Zayne1", src: "./static/loveanddeepspace/Paper17288440731.png", modal: "modal1", label: "Zayne Collage", data: "zayne collage" },
  { id: "Rafayel1", src: "./static/loveanddeepspace/Paper17292167252.png", modal: "modal2", label: "Rafayel Strawberry Head", data: "rafayel" },
  { id: "Rafayel2", src: "./static/loveanddeepspace/Paper17292167773.png", modal: "modal3", label: "Rafayel Wand", data: "rafayel" },
  { id: "Rafayel3", src: "./static/loveanddeepspace/Paper17292168134.png", modal: "modal4", label: "Rafayel Glasses", data: "rafayel" },
  { id: "Zayne2", src: "./static/loveanddeepspace/Paper17292181731.png", modal: "modal5", label: "Zayne Thinking", data: "zayne" },
  { id: "MC1", src: "./static/loveanddeepspace/Paper17292181832.png", modal: "modal6", label: "MC Wand", data: "mc" },
  { id: "Zayne3", src: "./static/loveanddeepspace/Paper17292181953.png", modal: "modal7", label: "Zayne Posing", data: "zayne" },
  { id: "Zayne4", src: "./static/loveanddeepspace/Paper17292182044.png", modal: "modal8", label: "Zayne Collage 2", data: "zayne collage" },
  { id: "Rafayel4", src: "./static/loveanddeepspace/Paper17311247121.png", modal: "modal9", label: "Zayne Collage 2", data: "rafayel" },
  { id: "MC2", src: "./static/loveanddeepspace/Paper17311248072.png", modal: "modal10", label: "MC Glasses with Dog Face Sticker", data: "mc" },
  { id: "Rafayel5", src: "./static/loveanddeepspace/Paper17311249413.png", modal: "modal11", label: "Rafayel Meme", data: "rafayel" },
  { id: "Sylus1", src: "./static/loveanddeepspace/Paper17311251665.png", modal: "modal12", label: "Sylus Collage", data: "sylus collage" },
  { id: "MC3", src: "./static/loveanddeepspace/Paper17311254646.png", modal: "modal13", label: "MC Wand", data: "mc" },
  { id: "Sylus2", src: "./static/loveanddeepspace/Paper17311256267.png", modal: "modal14", label: "Sylus Pose & Point", data: "sylus" },
  { id: "Sylus3", src: "./static/loveanddeepspace/Paper17311257548.png", modal: "modal15", label: "Sylus Pose & Smirk", data: "sylus" },
  { id: "Zayne5", src: "./static/loveanddeepspace/Paper17312828791.png", modal: "modal16", label: "Zayne Working", data: "zayne" },
  { id: "Zayne6", src: "./static/loveanddeepspace/Paper17312828943.png", modal: "modal17", label: "Zayne Standing Pose with Snowglobe", data: "zayne" },
  { id: "Zayne7", src: "./static/loveanddeepspace/Paper17312828984.png", modal: "modal18", label: "Zayne Standing Pose Glasses", data: "zayne" },
  { id: "Sylus4", src: "./static/loveanddeepspace/Paper17312830256.png", modal: "modal19", label: "Sylus Standing Pose", data: "sylus" },
  { id: "Zayne8", src: "./static/loveanddeepspace/Paper17312830677.png", modal: "modal20", label: "Zayne Standing Pose Umbrella", data: "zayne" },
  { id: "Zayne9", src: "./static/loveanddeepspace/Paper17312830768.png", modal: "modal21", label: "Zayne Closer", data: "zayne" },
  { id: "Sylus5", src: "./static/loveanddeepspace/Paper17312830869.png", modal: "modal22", label: "Sylus Come Closer", data: "sylus" },
  { id: "Sylus6", src: "./static/loveanddeepspace/Paper173128310410.png", modal: "modal23", label: "Sylus Wand", data: "sylus" },
  { id: "Zayne10", src: "./static/loveanddeepspace/Paper173128312511.png", modal: "modal24", label: "Sylus Poses", data: "zayne" },
  { id: "Sylus7", src: "./static/loveanddeepspace/Paper173128314612.png", modal: "modal25", label: "Sylus Pose", data: "sylus" },
  { id: "Sylus8", src: "./static/loveanddeepspace/Paper173128365413.png", modal: "modal26", label: "Sylus Collage 2", data: "sylus" },
  { id: "Sylus9", src: "./static/loveanddeepspace/Paper173128368714.png", modal: "modal27", label: "Sylus Pose Music Album", data: "sylus" },
  { id: "MC4", src: "./static/loveanddeepspace/Paper173128382915.png", modal: "modal28", label: "MC Glasses with Food Stickers", data: "mc" },
  { id: "Sylus10", src: "./static/loveanddeepspace/Paper173128396416.png", modal: "modal29", label: "Sylus Pose with Hands", data: "sylus" },
  { id: "Sylus11", src: "./static/loveanddeepspace/Paper173128404517.png", modal: "modal30", label: "Sylus Pose Side to Side", data: "sylus" },
  { id: "Xavier1", src: "./static/loveanddeepspace/Paper17313856361.png", modal: "modal31", label: "Xavier Bunny 1", data: "xavier" },
  { id: "Xavier2", src: "./static/loveanddeepspace/Paper17313857243.png", modal: "modal32", label: "Xavier Bunny 2", data: "xavier" },
  { id: "Xavier3", src: "./static/loveanddeepspace/Paper17313857885.png", modal: "modal33", label: "Xavier Bunny 3", data: "xavier" },
  { id: "Xavier4", src: "./static/loveanddeepspace/Paper17313860127.png", modal: "modal34", label: "Xavier Standing Pose", data: "xavier" },
  { id: "Xavier5", src: "./static/loveanddeepspace/Paper17313860389.png", modal: "modal35", label: "Xavier Hmpf Pose", data: "xavier" },
  { id: "MC5", src: "./static/loveanddeepspace/Paper173138604310.png", modal: "modal36", label: "MC Glasses", data: "mc" },
  { id: "Xavier6", src: "./static/loveanddeepspace/Paper173138604911.png", modal: "modal37", label: "Xavier Rectangle Pose", data: "xavier" },
  { id: "Xavier7", src: "./static/loveanddeepspace/Paper173138605312.png", modal: "modal38", label: "Xavier Collage", data: "xavier collage" },
  { id: "Zayne11", src: "./static/loveanddeepspace/Paper173138605713.png", modal: "modal39", label: "Zayne Background Photo Pose", data: "zayne" },
  { id: "Zayne12", src: "./static/loveanddeepspace/Paper173138605914.png", modal: "modal40", label: "Zayne megaphone", data: "zayne" },
  { id: "MC6", src: "./static/loveanddeepspace/Paper173138606215.png", modal: "modal41", label: "MC megaphone", data: "mc" },
  { id: "Xavier8", src: "./static/loveanddeepspace/Paper173138606717.png", modal: "modal42", label: "Xavier in Café", data: "xavier" },
  { id: "Xavier9", src: "./static/loveanddeepspace/Paper173138683718.png", modal: "modal43", label: "Xavier Collage 2", data: "xavier collage" },
  { id: "MC7", src: "./static/loveanddeepspace/Paper173138705720.png", modal: "modal44", label: "MC megaphone with Bear Ears", data: "mc" },
  { id: "Xavier10", src: "./static/loveanddeepspace/Paper173138690519.png", modal: "modal45", label: "Xavier megaphone", data: "xavier" },
  { id: "Xavier11", src: "./static/loveanddeepspace/Paper173138716121.png", modal: "modal46", label: "Xavier Photo Pose with Dog Ear Stickers", data: "xavier" },
  { id: "Xavier12", src: "./static/loveanddeepspace/Paper173138722222.png", modal: "modal47", label: "Xavier with Close up MC Pose", data: "xavier" },
  { id: "Zayne13", src: "./static/loveanddeepspace/Paper17314694021.png", modal: "modal48", label: "Cat Zayne 1", data: "zayne cat" },
  { id: "Xavier13", src: "./static/loveanddeepspace/Paper17314694249.png", modal: "modal49", label: "Cat Xavier 1", data: "xavier cat" },
  { id: "MC8", src: "./static/loveanddeepspace/Paper173154100512.png", modal: "modal50", label: "MC Newspaper", data: "mc" },
  { id: "Xavier14", src: "./static/loveanddeepspace/Paper173146942610.png", modal: "modal51", label: "Cat Xaver 2", data: "xavier cat" },
  { id: "Rafayel6", src: "./static/loveanddeepspace/Paper17315402294.png", modal: "modal52", label: "Cat Rafayel", data: "rafayel cat" },
  { id: "Cat Café", src: "./static/loveanddeepspace/Paper17315402465.png", modal: "modal53", label: "Cat Café", data: "bg" },
  { id: "Rafayel7", src: "./static/loveanddeepspace/Paper173154092711.png", modal: "modal54", label: "Maid Rafayel", data: "rafayel" },
  { id: "Sylus12", src: "./static/loveanddeepspace/Paper17314716528.png", modal: "modal55", label: "Cat Sylus", data: "sylus cat" },
  { id: "Rafayel18", src: "./static/loveanddeepspace/Paper173154120614.png", modal: "modal56", label: "Pouty Rafayel", data: "rafayel"},
  { id: "Rafayel19", src: "./static/loveanddeepspace/Paper173154110813.png", modal: "modal57", label: "Silly Stickers Rafayel", data: "rafayel"},
  { id: "Rafayel20", src: "./static/loveanddeepspace/Paper173154092110.png", modal: "modal58", label: "Rafayel Collage", data: "rafayel collage"},
  { id: "Sylus13", src: "./static/loveanddeepspace/Paper17315402638.png", modal: "modal59", label: "Cat Sylus Annoyed", data: "sylus cat"},
  { id: "Sylus14", src: "./static/loveanddeepspace/Paper17315402587.png", modal: "modal60", label: "Cat Sylus smirk", data: "sylus cat"},
  { id: "Sylus15", src: "./static/loveanddeepspace/Paper17315402546.png", modal: "modal61", label: "Cat Sylus lean in", data: "sylus cat"},
  { id: "Rafayel21", src: "./static/loveanddeepspace/Paper17315402263.png", modal: "modal62", label: "Cat Rafayel Smile", data: "rafayel cat"},
  { id: "Rafayel22", src: "./static/loveanddeepspace/Paper17315402222.png", modal: "modal63", label: "Cat Rafayel in thought", data: "rafayel cat"},
  { id: "Rafayel23", src: "./static/loveanddeepspace/Paper17315402171.png", modal: "modal64", label: "Cat Rafayel to the side", data: "rafayel cat"},
  { id: "Sylus16", src: "./static/loveanddeepspace/Paper17314716549.png", modal: "modal65", label: "Cat Sylus lean in 2", data: "sylus cat"},
  { id: "Sylus17", src: "./static/loveanddeepspace/Paper17314716497.png", modal: "modal66", label: "Cat Sylus in thought", data: "sylus cat"},
  { id: "Sylus18", src: "./static/loveanddeepspace/Paper17314716466.png", modal: "modal67", label: "Cat Sylus standing", data: "sylus cat"},
  { id: "Sylus19", src: "./static/loveanddeepspace/Paper17314716445.png", modal: "modal68", label: "Cat Sylus neutral?", data: "sylus cat"},
  { id: "Sylus20", src: "./static/loveanddeepspace/Paper17314716414.png", modal: "modal69", label: "Cat Sylus hand up", data: "sylus cat"},
  { id: "Zayne14", src: "./static/loveanddeepspace/Paper17314694062.png", modal: "modal70", label: "Cat Zayne 2", data: "zayne cat"},
  { id: "Zayne15", src: "./static/loveanddeepspace/Paper17314694083.png", modal: "modal71", label: "Cat Zayne 3", data: "zayne cat"},
  { id: "Zayne16", src: "./static/loveanddeepspace/Paper17314694104.png", modal: "modal72", label: "Cat Zayne 4", data: "zayne cat"},
  { id: "Zayne17", src: "./static/loveanddeepspace/Paper17314694125.png", modal: "modal73", label: "Cat Zayne 5", data: "zayne cat"},
  { id: "Zayne18", src: "./static/loveanddeepspace/Paper17314694156.png", modal: "modal74", label: "Cat Zayne 6", data: "zayne cat"},
  { id: "Zayne19", src: "./static/loveanddeepspace/Paper17314694177.png", modal: "modal75", label: "Cat Zayne 7", data: "zayne cat"},
  { id: "Zayne20", src: "./static/loveanddeepspace/Paper17314694218.png", modal: "modal76", label: "Cat Zayne 8", data: "zayne cat"},
  { id: "Sylus21", src: "./static/loveanddeepspace/Paper17314716372.png", modal: "modal77", label: "Cat Sylus Upset", data: "sylus cat"},
  { id: "Sylus22", src: "./static/loveanddeepspace/Paper17314716393.png", modal: "modal78", label: "Cat Sylus hand up 2", data: "sylus cat"}
  // Add all other items here...
];
//template: { id: "", src: "./static/loveanddeepspace/.png", modal: "modal80", label: "", data: ""},
let modalT = '';
let modalL = '';

function loadingLoader() {
  Loader = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("photos").style.display = "block";
}

// Generate grid items and modals
function generateGridItems() {
  let gridItems = '';
  mArray.forEach(item => {
    gridItems += `
      <div id="project-grid-item" class="box filter ${item.data} name col-lg-3 col-md-4 mb-12 mb-md-0">
        <a href="#">
          <img class="project-grid-item-img" src="${item.src}" alt="" id="${item.id}"/>
        </a>
        <div class="overlay">
          <div class="overlay-text"><button class="modal-btn" href="#${item.modal}">${item.label}</button></div>
        </div>
      </div>
    `;
  });
  document.getElementById("project-grid-items").innerHTML = gridItems;
}

function generateModals() {
  mArray.forEach(item => {
    modalL += `
      <div class="modal" id="${item.modal}">
        <button class="modal-btn" href="${item.modal}">Open Modal</button>  
        <div class="modal-content">
          <div class="modal-body">
            <span class="close">&times;</span>
            <figure class="mbc_container">
              <img src="${item.src}" />
            </figure>
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById("modalL").innerHTML = modalL;
}

loadingLoader();
generateGridItems();
generateModals();

// Modal functions
var modals = document.querySelectorAll(".modal");
var modalbtn = document.querySelectorAll("button.modal-btn");
var spans = document.getElementsByClassName("close");

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    for (var index = 0; index < modals.length; index++) {
      modals[index].style.display = "none";
    }
  }
}

for (var i = 0; i < modalbtn.length; i++) {
  modalbtn[i].onclick = function (e) {
    e.preventDefault();
    var modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  };
}

window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined") {
        modals[index].style.display = "none";
      }
    }
  }
}