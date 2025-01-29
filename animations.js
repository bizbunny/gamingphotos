// Sorting animations
$(document).ready(function() {
  $(".button").click(function() {
    var value = $(this).attr("data-filter"); // Get the selected filtervar value = $(this).attr("data-filter");
    console.log("Filtering by:", value); // Debugging: Log the filter value

  // Apply filtering logic
  if (value === "all") {
    $(".filter").slideDown("1000"); // Show all elements
  } else {
    $(".filter").not("." + value).slideUp("1000"); // Hide unmatched elements
    $(".filter").filter("." + value).slideDown("1000"); // Show matched elements
  }

  // Update active class
  $(".dropdown-item").removeClass("active"); // Remove 'active' class from all dropdown items
  $(this).addClass("active"); // Add 'active' class to the selected item

});

  // Handle dropdown item clicks
  $(".dropdown-item").click(function() {
    var value = $(this).attr("data-filter");
    console.log("Dropdown item clicked. Filtering by:", value); // Debugging

    if (value === "all") {
      $(".filter").slideDown("1000"); // Show all elements
    } else {
      $(".filter").not("." + value).slideUp("1000"); // Hide unmatched elements
      $(".filter").filter("." + value).slideDown("1000"); // Show matched elements
    }
  
    // Update active class
    $(".button").removeClass("active"); // Remove 'active' class from all buttons
    $(".dropdown-item").removeClass("active"); // Remove 'active' class from dropdown items
    $(this).addClass("active"); // Add 'active' class to the clicked dropdown item
  });
  
});

// Modal data
let mArray = [];
//template: { id: "", src: "./static/loveanddeepspace/.png", modal: "modal80", label: "", data: ""},


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
          <div class="overlay-text"><button class="modal-btn" href="#${item.modal}">${item.label}</button></div>
        </div>
      </div>
      `);
  });

  // Show the photos section once loaded
  $("#photos").fadeIn("1000");
});


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
/* function generateGridItems() {
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
} */

  function generateModals() {
    mArray.forEach(item => {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.id = item.modal;
  
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
  
      const modalBody = document.createElement('div');
      modalBody.classList.add('modal-body');
  
      const closeButton = document.createElement('span');
      closeButton.classList.add('close');
      closeButton.innerHTML = '&times;';
      closeButton.onclick = () => {
        modal.style.display = 'none';
      };
  
      const figure = document.createElement('figure');
      figure.classList.add('mbc_container');
  
      const image = document.createElement('img');
      image.src = item.src;
  
      figure.appendChild(image);
      modalBody.appendChild(closeButton);
      modalBody.appendChild(figure);
      modalContent.appendChild(modalBody);
      modal.appendChild(modalContent);
  
      document.body.appendChild(modal); 
    });
  }

loadingLoader();
//generateGridItems();
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