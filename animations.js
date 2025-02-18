$(document).ready(function() {
  console.log(gamesConfig); // Access the global gamesConfig object

  let activeCharacterFilter = null;
  let activeTypeFilter = null;
  let activeCategoryFilter = null;
  let activeAdditionalFilters = [];

  let currentGame = 'nogame'; // Default game is now 'nogame'

  // Function to update filter visibility based on the selected game
  function updateFiltersForGame(game) {
    // Hide all filters and labels first
    $(".button, .filter-category").hide();
  
    // Show the "All" filter (common for all games)
    $(".button[data-filter='all']").show();
  
    // Show filters specific to the selected game
    if (gamesConfig[game]) {
      const filters = gamesConfig[game].filters;
  
      if (game === 'loveanddeepspace') { //Love & Deepspace has filter types to consider * * *
        // Handle labeled filters for Love & Deepspace
        Object.keys(filters).forEach(category => {
          // Show the category label
          $(`.filter-category[data-category='${category}']`).show();
  
          // Show the filter buttons under the category
          filters[category].forEach(filter => {
            $(`.button[data-filter='${filter}']`).show();
          });
        });
      } else {
        // Handle unlabeled filters for other games
        filters.forEach(filter => {
          $(`.button[data-filter='${filter}']`).show();
        });
      }
    }
  }

  // Load the default game data (no game data)
  function loadDefaultData() {
    $(".filter").slideDown("1000"); // Show all items by default
    updateFiltersForGame('nogame'); // Only show the "All" filter
  }

  // Call the default load function when the page loads
  loadDefaultData();

  // Handle dropdown selection
  $(".dropdown-content a").click(function() {
    let game = $(this).attr("href").replace("#", "");
    currentGame = game;
    if (game === 'nogame') {
      loadDefaultData();
    } else {
      loadGameData(game);
    }
  });

  // Function to load game data and update filters
  function loadGameData(game) {
    let dataFile = gamesConfig[game]?.dataFile;

    if (dataFile) {
      $.get(dataFile, function(data) {
        mArray = data;
        let grid = $("#project-grid-items");
        grid.empty(); // Clear previous items

        // Clear previous modals before generating new ones
        $(".modal").remove();

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

        generateModals(); // Regenerate modals with new data
        applyFilters(); // Apply filters to updated items
      });
    }

    updateFiltersForGame(game);
  }

  // Call loadGameData for the default game when the page loads
  loadGameData(currentGame);

  function applyFilters() {
    $(".filter").each(function() {
      let item = $(this);
      let itemClasses = item.attr("class").split(" ");
      //Love & Deepspace has filter types to consider * * *
      // Love & Deepspace
      let characterMatch = !activeCharacterFilter || itemClasses.includes(activeCharacterFilter);
      let typeMatch = !activeTypeFilter || itemClasses.includes(activeTypeFilter);
      let categoryMatch = !activeCategoryFilter || itemClasses.includes(activeCategoryFilter);
      let additionalMatch = activeAdditionalFilters.length === 0 || activeAdditionalFilters.some(f => itemClasses.includes(f));

      // Genshin Impact filters
      let genshinMatch = true; // Default to true if no Genshin filters are active
      if (currentGame === 'genshin') {
        if (activeCharacterFilter === 'sqe' && !itemClasses.includes('sqe')) {
          genshinMatch = false;
        }
        if (activeCharacterFilter === 'giscreenshot' && !itemClasses.includes('giscreenshot')) {
          genshinMatch = false;
        }
      }

      // Honkai Star Rail filters
      let hsrMatch = true;
      if (currentGame === 'hsr') {
        if (activeCharacterFilter === 'cs' && !itemClasses.includes('cs')) {
          hsrMatch = false;
        }
        if (activeCharacterFilter === 'hsrscreenshot' && !itemClasses.includes('hsrscreenshot')) {
          hsrMatch = false;
        }
      }

      // Combine all conditions
      if (characterMatch && typeMatch && categoryMatch && additionalMatch && genshinMatch) {
        item.slideDown("1000");
      } else {
        item.slideUp("1000");
      }
    });
  }

  $(".button").click(function() {//Love & Deepspace has filter types to consider * * *
    let value = $(this).attr("data-filter");

    if (value === "all") {
      activeCharacterFilter = null;
      activeTypeFilter = null;
      activeCategoryFilter = null;
      activeAdditionalFilters = [];
      $(".filter").slideDown("1000");
      $(".button").removeClass("active");
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
    } else if (["sqe", "giscreenshot"].includes(value)) {
      // Handle Genshin Impact filters
      activeCharacterFilter = activeCharacterFilter === value ? null : value;
      $(".button[data-filter='sqe'], .button[data-filter='giscreenshot']").removeClass("active");
      if (activeCharacterFilter) $(this).addClass("active");
    } else if (["cs", "hsrscreenshot"].includes(value)) {
      activeCharacterFilter = activeCharacterFilter === value ? null : value;
      $(".button[data-filter='cs'], button[data-filter='hsrscreenshot']").removeClass("active");
      if (activeCharacterFilter) $(this).addClass("active");
    }

    applyFilters();
  });

  // Handle dropdown selection
  $(".dropdown-content a").click(function() {
    let game = $(this).attr("href").replace("#", "");
    currentGame = game;
    loadGameData(game);
  });
});

function gameSort() {
  document.getElementById("gameDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let mArray = [];

function loadingLoader() {
  Loader = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("photos").style.display = "block";
}

function generateModals() {
  $(".modal").remove(); // Remove existing modals before creating new ones

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
            <img src="${item.src}" class="img-fluid" alt="${item.label}"/>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  });
}

loadingLoader();

// Modal functions
var modals = document.querySelectorAll(".modal");
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

loadGameData(currentGame);