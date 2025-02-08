
// Sorting animations
$(document).ready(function() {
  let activeCharacterFilter = null;
  let activeTypeFilter = null;
  let activeCategoryFilter = null;
  let activeAdditionalFilters = [];

  function applyFilters() {
    $(".filter").each(function() {
      let item = $(this);
      let itemClasses = item.attr("class").split(" ");

      let characterMatch = !activeCharacterFilter || itemClasses.includes(activeCharacterFilter);
      let typeMatch = !activeTypeFilter || itemClasses.includes(activeTypeFilter);
      let categoryMatch = !activeCategoryFilter || itemClasses.includes(activeCategoryFilter);
      let additionalMatch = activeAdditionalFilters.length === 0 || activeAdditionalFilters.some(f => itemClasses.includes(f));

      if (characterMatch && typeMatch && categoryMatch && additionalMatch) {
        item.slideDown("1000");
      } else {
        item.slideUp("1000");
      }
    });
  }

  $(".button, .dropdown-item").click(function() {
    let value = $(this).attr("data-filter");

    if (value === "all") {
      activeCharacterFilter = null;
      activeTypeFilter = null;
      activeCategoryFilter = null;
      activeAdditionalFilters = [];
      $(".filter").slideDown("1000");
      $(".button, .dropdown-item").removeClass("active");
      $(this).addClass("active");
    } else if (["zayne", "xavier", "rafayel", "sylus", "caleb", "mc"].includes(value)) {
      activeCharacterFilter = activeCharacterFilter === value ? null : value;
      $(".button[data-filter='zayne'], .button[data-filter='xavier'], .button[data-filter='rafayel'], .button[data-filter='sylus'], .button[data-filter='caleb'], .button[data-filter='mc']").removeClass("active");
      if (activeCharacterFilter) $(this).addClass("active");
    } else if (["solo", "duo"].includes(value)) {
      activeTypeFilter = activeTypeFilter === value ? null : value;
      $(".button[data-filter='solo'], .button[data-filter='duo']").removeClass("active");
      if (activeTypeFilter) $(this).addClass("active");
    } else if (["portrait", "snapshot", "capture"].includes(value)) {
      activeCategoryFilter = activeCategoryFilter === value ? null : value;
      $(".button[data-filter='portrait'], .button[data-filter='snapshot'], .button[data-filter='capture']").removeClass("active");
      if (activeCategoryFilter) $(this).addClass("active");
    } else if (["cat", "bg", "collage"].includes(value)) {
      if (activeAdditionalFilters.includes(value)) {
        activeAdditionalFilters = activeAdditionalFilters.filter(f => f !== value);
        $(this).removeClass("active");
      } else {
        activeAdditionalFilters.push(value);
        $(this).addClass("active");
      }
    }

    applyFilters();
  });
  // Handle dropdown items the same way
  $(".dropdown-item").click(function() {
    let value = $(this).attr("data-filter");

    if (activeFilters.includes(value)) {
      activeFilters = activeFilters.filter(f => f !== value);
      $(this).removeClass("active");
    } else {
      activeFilters.push(value);
      $(this).addClass("active");
    }

    if (activeFilters.length === 0) {
      $(".filter").slideDown("1000");
    } else {
      $(".filter").each(function() {
        let item = $(this);
        let itemClasses = item.attr("class").split(" ");

        let isMatch = activeFilters.every(filter => itemClasses.includes(filter));

        if (isMatch) {
          item.slideDown("1000");
        } else {
          item.slideUp("1000");
        }
      });
    }
  });
});


// Modal data
let mArray = [];
//template: { id: "", src: "./static/loveanddeepspace/.png", modal: "modal80", label: "", data: ""},
function loadingLoader() {
  Loader = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("photos").style.display = "block";
}

$.get( "./data.json", function( data){ 
  mArray = data; 
  console.log(mArray); 
  // Inject images into the project grid
  let grid = $("#project-grid-items");
  mArray.forEach(item => {
    grid.append(`
      <div id="project-grid-item" class="box filter ${item.data} name col-lg-3 col-md-4 mb-12 mb-md-0">
        <a href="#">
          <img class="project-grid-item-img" src="${item.src}" alt="" id="${item.id}"/>
        </a>
        <div class="overlay">
          <div class="overlay-text">
            <button class="modal-btn btn btn-primary" data-target="#${item.modal}">${item.label}</button>
          </div>
        </div>
      </div>
    `);
    
  });

  // Show the photos section once loaded
  $("#photos").fadeIn("1000");

  generateModals();
});

let modalT = '';
let modalL = '';

  function generateModals() {
    console.log("Generating modals..."); // Debugging
    mArray.forEach(item => {
      const modal = document.createElement('div');
      modal.classList.add('modal', 'fade');
      modal.id = item.modal;
      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('role', 'dialog');
  
      modal.innerHTML = `
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${item.label}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src="${item.src}" class="img-fluid"/>
            </div>
          </div>
        </div>
      `;
  
      document.body.appendChild(modal);
    });
  }
  

loadingLoader();
//generateGridItems();


// Modal functions
var modals = document.querySelectorAll(".modal");
//var modalbtn = document.querySelectorAll("button.modal-btn");
var spans = document.getElementsByClassName("close");

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    for (var index = 0; index < modals.length; index++) {
      modals[index].style.display = "none";
    }
  }
}

$(document).on("click", ".modal-btn", function (e) {
  e.preventDefault();
  var targetModal = $(this).data("target");
  console.log("Opening modal:", targetModal); // Debugging
  console.log("Modal button clicked, target:", targetModal);
  console.log("Checking if modal exists:", $(targetModal));
  $(targetModal).modal("handleUpdate");
  $(targetModal).modal("show");
});

window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined") {
        modals[index].style.display = "none";
      }
    }
  }
}