document.addEventListener("DOMContentLoaded", function() {
  const dropdownContent = document.getElementById("gameDropdown");
  const filterButtons = document.getElementById("filter-buttons");

  // Generate dropdown items
  for (const game in gamesConfig) {
    const link = document.createElement("a");
    link.href = `#${game}`;
    link.textContent = gamesConfig[game].displayName; // Use displayName from gamesConfig
    link.className = "dropdown-item"; // Add Bootstrap's dropdown-item class
    dropdownContent.appendChild(link);
  }

  // Generate filter buttons and labels
  for (const game in gamesConfig) {
    const filters = gamesConfig[game].filters;

    if (typeof filters === 'object' && !Array.isArray(filters)) {
      // Handle labeled filters for Love & Deepspace
      Object.keys(filters).forEach(category => {
        // Add a category label
        const categoryLabel = document.createElement("li");
        categoryLabel.className = "button nav-item filter-category";
        categoryLabel.setAttribute("data-category", category);
        categoryLabel.innerHTML = `<div type="button">${category.charAt(0).toUpperCase() + category.slice(1)}:</div>`;
        filterButtons.appendChild(categoryLabel);

        // Add filter buttons under the category
        filters[category].forEach(filter => {
          const li = document.createElement("li");
          li.className = `button nav-item data-game='${game}'`;
          li.setAttribute("data-filter", filter);
          li.innerHTML = `
            <div type="button" class="Btn" name="${filter}" title="${filter}">
              <a class="nav-link" aria-current="page" href="#">${filter.charAt(0).toUpperCase() + filter.slice(1)}</a>
            </div>
          `;
          filterButtons.appendChild(li);
        });
      });
    } else {
      // Handle unlabeled filters for other games
      filters.forEach(filter => {
        if (filter !== 'all') {
          const li = document.createElement("li");
          li.className = `button nav-item data-game='${game}'`;
          li.setAttribute("data-filter", filter);
          li.innerHTML = `
            <div type="button" class="Btn" name="${filter}" title="${filter}">
              <a class="nav-link" aria-current="page" href="#">${filter.charAt(0).toUpperCase() + filter.slice(1)}</a>
            </div>
          `;
          filterButtons.appendChild(li);
        }
      });
    }
  }
});