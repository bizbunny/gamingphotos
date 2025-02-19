document.addEventListener("DOMContentLoaded", function() {
    const dropdownContent = document.getElementById("gameDropdown");
    const filterButtons = document.getElementById("filter-buttons");

    // Mapping for display names (dropdown menu)
    const displayNames = {
      nogame: "Home",
      acpc: "Animal Crossing Pocket Camp",
      genshin: "Genshin Impact",
      hsr: "Honkai Star Rail",
      in: "Infinity Nikki",
      loveanddeepspace: "Love & Deepspace",
      wuwa: "Wuthering Waves",
    };

    // Generate dropdown items
    for (const game in gamesConfig) {
      const link = document.createElement("a");
      link.href = `#${game}`;
      link.textContent = displayNames[game] || game; // Use display name if available, otherwise fallback to the game key
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