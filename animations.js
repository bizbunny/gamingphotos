$(document).ready(function() {
  console.log(gamesConfig); // Access the global gamesConfig object

  let activeFilters = {
    character: null,
    type: null,
    category: null,
    additional: [],
  };

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

      if (typeof filters === 'object' && !Array.isArray(filters)) {
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
    // Clear the grid items
    $("#project-grid-items").empty();

    // Hide the photos section
    $("#photos").hide();

    // Show all items by default (if any)
    $(".filter").slideDown("1000");

    // Only show the "All" filter
    updateFiltersForGame('nogame');
  }

  // Call the default load function when the page loads
  loadDefaultData();

  // Handle dropdown selection
  $(document).on("click", "#gameDropdown .dropdown-item", function (e) {
    e.preventDefault();
    let game = $(this).attr("href").replace("#", "");
    currentGame = game;
    loadGameData(game);
  });

  // Function to load game data and update filters
  function loadGameData(game) {
    let dataFile = gamesConfig[game]?.dataFile;

    console.log(`Loading data from: ${dataFile}`); // Debugging: Log the data file being loaded

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

        // Show the photos section
        $("#photos").show();

        console.log("Data received:", data); // Debugging: Log the received data
      }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error loading data:", textStatus, errorThrown); // Debugging: Log any errors
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

      // Check if the item matches the active filters
      let matches = true;

      if (activeFilters.character && !itemClasses.includes(activeFilters.character)) {
        matches = false;
      }
      if (activeFilters.type && !itemClasses.includes(activeFilters.type)) {
        matches = false;
      }
      if (activeFilters.category && !itemClasses.includes(activeFilters.category)) {
        matches = false;
      }
      if (activeFilters.additional.length > 0 && !activeFilters.additional.some(f => itemClasses.includes(f))) {
        matches = false;
      }

      // Show or hide the item based on the match
      if (matches) {
        item.slideDown("1000");
      } else {
        item.slideUp("1000");
      }
    });
  }

  $(".button").click(function() {
    let value = $(this).attr("data-filter");

    if (value === "all") {
      // Reset all filters
      activeFilters = {
        character: null,
        type: null,
        category: null,
        additional: [],
      };
      $(".filter").slideDown("1000");
      $(".button").removeClass("active");
      $(this).addClass("active");
    } else {
      // Update active filters based on the button clicked
      const filterType = getFilterType(value);
      if (filterType === 'additional') {
        if (activeFilters.additional.includes(value)) {
          activeFilters.additional = activeFilters.additional.filter(f => f !== value);
          $(this).removeClass("active");
        } else {
          activeFilters.additional.push(value);
          $(this).addClass("active");
        }
      } else {
        activeFilters[filterType] = activeFilters[filterType] === value ? null : value;
        $(`.button[data-filter='${value}']`).removeClass("active");
        if (activeFilters[filterType]) $(this).addClass("active");
      }
    }

    applyFilters();
  });

  // Helper function to determine the filter type
  function getFilterType(filter) {
    if (["zayne", "xavier", "rafayel", "sylus", "caleb", "mc"].includes(filter)) {
      return 'character';
    } else if (["solo", "duo"].includes(filter)) {
      return 'type';
    } else if (["portrait", "snapshot", "capture"].includes(filter)) {
      return 'category';
    } else if (["cat", "bg", "collage"].includes(filter)) {
      return 'additional';
    } else {
      return 'character'; // Default to character for other games
    }
  }
});

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