// Sorting animations
$(document).ready(function() {
  let activeCharacterFilter = null; // Only one character filter at a time
  let activeTypeFilter = null; // Solo, Duo (only one at a time)
  let activeCategoryFilter = null; // Portrait, Snapshot (only one at a time)
  let activeAdditionalFilters = []; // Allows multiple additional filters like Cats, Collage, Backgrounds

  $(".button, .dropdown-item").click(function() {
    let value = $(this).attr("data-filter");

    if (value === "all") {
      // Reset all filters
      activeCharacterFilter = null;
      activeTypeFilter = null;
      activeCategoryFilter = null;
      activeAdditionalFilters = [];
      $(".filter").slideDown("1000");
      $(".button, .dropdown-item").removeClass("active");
      $(this).addClass("active");
    } 
    // Handle character filters (Only one can be active)
    else if (["zayne", "xavier", "rafayel", "sylus", "caleb", "mc"].includes(value)) {
      if (activeCharacterFilter !== value) {
        activeCharacterFilter = value;
        $(".button[data-filter='zayne'], .button[data-filter='xavier'], .button[data-filter='rafayel'], .button[data-filter='sylus'], .button[data-filter='caleb'], .button[data-filter='mc']").removeClass("active");
        $(this).addClass("active");
      } else {
        activeCharacterFilter = null;
        $(this).removeClass("active");
      }
    }
    // Handle type filters (Solo, Duo – Only one can be active)
    else if (["solo", "duo"].includes(value)) {
      if (activeTypeFilter !== value) {
        activeTypeFilter = value;
        $(".button[data-filter='solo'], .button[data-filter='duo']").removeClass("active");
        $(this).addClass("active");
      } else {
        activeTypeFilter = null;
        $(this).removeClass("active");
      }
    } 
    // Handle category filters (Portrait, Snapshot – Only one can be active)
    else if (["portrait", "snapshot", "capture"].includes(value)) {
      if (activeCategoryFilter !== value) {
        activeCategoryFilter = value;
        $(".button[data-filter='portrait'], .button[data-filter='snapshot'], .button[data-filter='capture']").removeClass("active");
        $(this).addClass("active");
      } else {
        activeCategoryFilter = null;
        $(this).removeClass("active");
      }
    }
    // Handle additional filters (Cats, Backgrounds, Collage – Multiple can be active)
    else if (["cat", "bg", "collage"].includes(value)) {
      if (activeAdditionalFilters.includes(value)) {
        activeAdditionalFilters = activeAdditionalFilters.filter(f => f !== value);
        $(this).removeClass("active");
      } else {
        activeAdditionalFilters.push(value);
        $(this).addClass("active");
      }
    }

    // Filtering logic
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
let mArray = [
  { id: "Zayne1", src: "./static/loveanddeepspace/Paper17288440731.png", modal: "modal1", label: "Zayne Collage", data: "zayne collage snapshot" },
  { id: "Rafayel1", src: "./static/loveanddeepspace/Paper17292167252.png", modal: "modal2", label: "Rafayel Strawberry Head", data: "rafayel solo snapshot" },
  { id: "Rafayel2", src: "./static/loveanddeepspace/Paper17292167773.png", modal: "modal3", label: "Rafayel Wand", data: "rafayel solo snapshot" },
  { id: "Rafayel3", src: "./static/loveanddeepspace/Paper17292168134.png", modal: "modal4", label: "Rafayel Glasses", data: "rafayel solo snapshot" },
  { id: "Zayne2", src: "./static/loveanddeepspace/Paper17292181731.png", modal: "modal5", label: "Zayne Thinking", data: "zayne duo snapshot" },
  { id: "MC1", src: "./static/loveanddeepspace/Paper17292181832.png", modal: "modal6", label: "MC Wand", data: "mc solo snapshot" },
  { id: "Zayne3", src: "./static/loveanddeepspace/Paper17292181953.png", modal: "modal7", label: "Zayne Posing", data: "zayne solo snapshot" },
  { id: "Zayne4", src: "./static/loveanddeepspace/Paper17292182044.png", modal: "modal8", label: "Zayne Collage 2", data: "zayne collage snapshot" },
  { id: "Rafayel4", src: "./static/loveanddeepspace/Paper17311247121.png", modal: "modal9", label: "Zayne Collage 2", data: "rafayel solo snapshot" },
  { id: "MC2", src: "./static/loveanddeepspace/Paper17311248072.png", modal: "modal10", label: "MC Glasses with Dog Face Sticker", data: "mc solo snapshot" },
  { id: "Rafayel5", src: "./static/loveanddeepspace/Paper17311249413.png", modal: "modal11", label: "Rafayel Meme", data: "rafayel duo snapshot" },
  { id: "Sylus1", src: "./static/loveanddeepspace/Paper17311251665.png", modal: "modal12", label: "Sylus Collage", data: "sylus collage snapshot" },
  { id: "MC3", src: "./static/loveanddeepspace/Paper17311254646.png", modal: "modal13", label: "MC Wand", data: "mc solo snapshot" },
  { id: "Sylus2", src: "./static/loveanddeepspace/Paper17311256267.png", modal: "modal14", label: "Sylus Pose & Point", data: "sylus duo snapshot" },
  { id: "Sylus3", src: "./static/loveanddeepspace/Paper17311257548.png", modal: "modal15", label: "Sylus Pose & Smirk", data: "sylus duo snapshot" },
  { id: "Zayne5", src: "./static/loveanddeepspace/Paper17312828791.png", modal: "modal16", label: "Zayne Working", data: "zayne solo capture" },
  { id: "Zayne6", src: "./static/loveanddeepspace/Paper17312828943.png", modal: "modal17", label: "Zayne Standing Pose with Snowglobe", data: "zayne solo portrait" },
  { id: "Zayne7", src: "./static/loveanddeepspace/Paper17312828984.png", modal: "modal18", label: "Zayne Standing Pose Glasses", data: "zayne duo portrait" },
  { id: "Sylus4", src: "./static/loveanddeepspace/Paper17312830256.png", modal: "modal19", label: "Sylus Standing Pose", data: "sylus duo portrait" },
  { id: "Zayne8", src: "./static/loveanddeepspace/Paper17312830677.png", modal: "modal20", label: "Zayne Standing Pose Umbrella", data: "zayne solo portrait" },
  { id: "Zayne9", src: "./static/loveanddeepspace/Paper17312830768.png", modal: "modal21", label: "Zayne Closer", data: "zayne solo capture" },
  { id: "Sylus5", src: "./static/loveanddeepspace/Paper17312830869.png", modal: "modal22", label: "Sylus Come Closer", data: "sylus solo capture" },
  { id: "Sylus6", src: "./static/loveanddeepspace/Paper173128310410.png", modal: "modal23", label: "Sylus Wand", data: "sylus solo snapshot" },
  { id: "Zayne10", src: "./static/loveanddeepspace/Paper173128312511.png", modal: "modal24", label: "Zayne Pose with Sunglasses", data: "zayne duo portrait" },
  { id: "Sylus7", src: "./static/loveanddeepspace/Paper173128314612.png", modal: "modal25", label: "Sylus Pose", data: "sylus solo snapshot" },
  { id: "Sylus8", src: "./static/loveanddeepspace/Paper173128365413.png", modal: "modal26", label: "Sylus Collage 2", data: "sylus snapshot" },
  { id: "Sylus9", src: "./static/loveanddeepspace/Paper173128368714.png", modal: "modal27", label: "Sylus Pose Music Album", data: "sylus solo snapshot" },
  { id: "MC4", src: "./static/loveanddeepspace/Paper173128382915.png", modal: "modal28", label: "MC Glasses with Food Stickers", data: "mc solo snapshot" },
  { id: "Sylus10", src: "./static/loveanddeepspace/Paper173128396416.png", modal: "modal29", label: "Sylus Pose with Hands", data: "sylus duo snapshot" },
  { id: "Sylus11", src: "./static/loveanddeepspace/Paper173128404517.png", modal: "modal30", label: "Sylus Pose Side to Side", data: "sylus duo snapshot" },
  { id: "Xavier1", src: "./static/loveanddeepspace/Paper17313856361.png", modal: "modal31", label: "Xavier Bunny 1", data: "xavier solo portrait" },
  { id: "Xavier2", src: "./static/loveanddeepspace/Paper17313857243.png", modal: "modal32", label: "Xavier Bunny 2", data: "xavier solo portrait" },
  { id: "Xavier3", src: "./static/loveanddeepspace/Paper17313857885.png", modal: "modal33", label: "Xavier Bunny 3", data: "xavier solo portrait" },
  { id: "Xavier4", src: "./static/loveanddeepspace/Paper17313860127.png", modal: "modal34", label: "Xavier Standing Pose", data: "xavier duo portrait" },
  { id: "Xavier5", src: "./static/loveanddeepspace/Paper17313860389.png", modal: "modal35", label: "Xavier Hmpf Pose", data: "xavier duo snapshot" },
  { id: "MC5", src: "./static/loveanddeepspace/Paper173138604310.png", modal: "modal36", label: "MC Glasses", data: "mc solo snapshot" },
  { id: "Xavier6", src: "./static/loveanddeepspace/Paper173138604911.png", modal: "modal37", label: "Xavier Rectangle Pose", data: "xavier duo snapshot" },
  { id: "Xavier7", src: "./static/loveanddeepspace/Paper173138605312.png", modal: "modal38", label: "Xavier Collage", data: "xavier collage snapshot" },
  { id: "Zayne11", src: "./static/loveanddeepspace/Paper173138605713.png", modal: "modal39", label: "Zayne Background Photo Pose", data: "zayne duo snapshot" },
  { id: "Zayne12", src: "./static/loveanddeepspace/Paper173138605914.png", modal: "modal40", label: "Zayne megaphone", data: "zayne solo snapshot" },
  { id: "MC6", src: "./static/loveanddeepspace/Paper173138606215.png", modal: "modal41", label: "MC megaphone", data: "mc solo snapshot" },
  { id: "Xavier8", src: "./static/loveanddeepspace/Paper173138606717.png", modal: "modal42", label: "Xavier in Café", data: "xavier solo capture" },
  { id: "Xavier9", src: "./static/loveanddeepspace/Paper173138683718.png", modal: "modal43", label: "Xavier Collage 2", data: "xavier collage snapshot" },
  { id: "MC7", src: "./static/loveanddeepspace/Paper173138705720.png", modal: "modal44", label: "MC megaphone with Bear Ears", data: "mc solo snapshot" },
  { id: "Xavier10", src: "./static/loveanddeepspace/Paper173138690519.png", modal: "modal45", label: "Xavier megaphone", data: "xavier solo snapshot" },
  { id: "Xavier11", src: "./static/loveanddeepspace/Paper173138716121.png", modal: "modal46", label: "Xavier Photo Pose with Dog Ear Stickers", data: "xavier duo snapshot" },
  { id: "Xavier12", src: "./static/loveanddeepspace/Paper173138722222.png", modal: "modal47", label: "Xavier with Close up MC Pose", data: "xavier duo snapshot" },
  { id: "Zayne13", src: "./static/loveanddeepspace/Paper17314694021.png", modal: "modal48", label: "Cat Zayne 1", data: "cat zayne zcat solo capture" },
  { id: "Xavier13", src: "./static/loveanddeepspace/Paper17314694249.png", modal: "modal49", label: "Cat Xavier 1", data: "xavier cat solo capture" },
  { id: "MC8", src: "./static/loveanddeepspace/Paper173154100512.png", modal: "modal50", label: "MC Newspaper", data: "mc solo snapshot" },
  { id: "Xavier14", src: "./static/loveanddeepspace/Paper173146942610.png", modal: "modal51", label: "Cat Xaver 2", data: "xavier cat solo capture" },
  { id: "Rafayel6", src: "./static/loveanddeepspace/Paper17315402294.png", modal: "modal52", label: "Cat Rafayel", data: "rafayel cat solo capture" },
  { id: "CatCafé", src: "./static/loveanddeepspace/Paper17315402465.png", modal: "modal53", label: "Cat Café", data: "bg capture" },
  { id: "Rafayel7", src: "./static/loveanddeepspace/Paper173154092711.png", modal: "modal54", label: "Maid Rafayel", data: "rafayel solo snapshot" },
  { id: "Sylus12", src: "./static/loveanddeepspace/Paper17314716528.png", modal: "modal55", label: "Cat Sylus", data: "sylus cat solo capture" },
  { id: "Rafayel18", src: "./static/loveanddeepspace/Paper173154120614.png", modal: "modal56", label: "Pouty Rafayel", data: "rafayel duo snapshot"},
  { id: "Rafayel19", src: "./static/loveanddeepspace/Paper173154110813.png", modal: "modal57", label: "Silly Stickers Rafayel", data: "rafayel duo snapshot"},
  { id: "Rafayel20", src: "./static/loveanddeepspace/Paper173154092110.png", modal: "modal58", label: "Rafayel Collage", data: "rafayel collage snapshot"},
  { id: "Sylus13", src: "./static/loveanddeepspace/Paper17315402638.png", modal: "modal59", label: "Cat Sylus Annoyed", data: "sylus cat solo capture"},
  { id: "Sylus14", src: "./static/loveanddeepspace/Paper17315402587.png", modal: "modal60", label: "Cat Sylus smirk", data: "sylus cat solo capture"},
  { id: "Sylus15", src: "./static/loveanddeepspace/Paper17315402546.png", modal: "modal61", label: "Cat Sylus lean in", data: "sylus cat solo capture"},
  { id: "Rafayel21", src: "./static/loveanddeepspace/Paper17315402263.png", modal: "modal62", label: "Cat Rafayel Smile", data: "rafayel cat solo capture"},
  { id: "Rafayel22", src: "./static/loveanddeepspace/Paper17315402222.png", modal: "modal63", label: "Cat Rafayel in thought", data: "rafayel cat solo capture"},
  { id: "Rafayel23", src: "./static/loveanddeepspace/Paper17315402171.png", modal: "modal64", label: "Cat Rafayel to the side", data: "rafayel cat solo capture"},
  { id: "Sylus16", src: "./static/loveanddeepspace/Paper17314716549.png", modal: "modal65", label: "Cat Sylus lean in 2", data: "sylus cat solo capture"},
  { id: "Sylus17", src: "./static/loveanddeepspace/Paper17314716497.png", modal: "modal66", label: "Cat Sylus in thought", data: "sylus cat solo capture"},
  { id: "Sylus18", src: "./static/loveanddeepspace/Paper17314716466.png", modal: "modal67", label: "Cat Sylus standing", data: "sylus cat solo capture"},
  { id: "Sylus19", src: "./static/loveanddeepspace/Paper17314716445.png", modal: "modal68", label: "Cat Sylus neutral?", data: "sylus cat solo capture"},
  { id: "Sylus20", src: "./static/loveanddeepspace/Paper17314716414.png", modal: "modal69", label: "Cat Sylus hand up", data: "sylus cat solo capture"},
  { id: "Zayne14", src: "./static/loveanddeepspace/Paper17314694062.png", modal: "modal70", label: "Cat Zayne 2", data: "cat zayne zcat solo capture"},
  { id: "Zayne15", src: "./static/loveanddeepspace/Paper17314694083.png", modal: "modal71", label: "Cat Zayne 3", data: "cat zayne zcat solo capture"},
  { id: "Zayne16", src: "./static/loveanddeepspace/Paper17314694104.png", modal: "modal72", label: "Cat Zayne 4", data: "cat zayne zcat solo capture"},
  { id: "Zayne17", src: "./static/loveanddeepspace/Paper17314694125.png", modal: "modal73", label: "Cat Zayne 5", data: "cat zayne zcat solo capture"},
  { id: "Zayne18", src: "./static/loveanddeepspace/Paper17314694156.png", modal: "modal74", label: "Cat Zayne 6", data: "cat zayne zcat solo capture"},
  { id: "Zayne19", src: "./static/loveanddeepspace/Paper17314694177.png", modal: "modal75", label: "Cat Zayne 7", data: "cat zayne zcat solo capture"},
  { id: "Zayne20", src: "./static/loveanddeepspace/Paper17314694218.png", modal: "modal76", label: "Cat Zayne 8", data: "cat zayne zcat solo capture"},
  { id: "Sylus21", src: "./static/loveanddeepspace/Paper17314716372.png", modal: "modal77", label: "Cat Sylus Upset", data: "sylus cat solo capture"},
  { id: "Sylus22", src: "./static/loveanddeepspace/Paper17314716393.png", modal: "modal78", label: "Cat Sylus hand up 2", data: "sylus cat solo capture"},
  { id: "Xavier15", src: "./static/loveanddeepspace/Paper17317286101.png", modal: "modal79", label: "Cat Xavier 3", data: "xavier cat solo capture"},
  { id: "Xavier16", src: "./static/loveanddeepspace/Paper17317286152.png", modal: "modal80", label: "Cat Xavier 4", data: "xavier cat solo capture"},
  { id: "Xavier17", src: "./static/loveanddeepspace/Paper17323305101.png", modal: "modal81", label: "Cat Xavier 5", data: "xavier cat solo capture"},
  { id: "Xavier18", src: "./static/loveanddeepspace/Paper17323305132.png", modal: "modal82", label: "Cat Xavier 6", data: "xavier cat solo capture"},
  { id: "Rafayel24", src: "./static/loveanddeepspace/Paper17323305153.png", modal: "modal83", label: "Cat Rafayel lean in", data: "rafayel cat solo capture"},
  { id: "Rafayel25", src: "./static/loveanddeepspace/Paper17323305174.png", modal: "modal84", label: "Cat Rafayel talking", data: "rafayel cat solo capture"},
  { id: "Sylus23", src: "./static/loveanddeepspace/Paper17323305205.png", modal: "modal85", label: "Cat Sylus lean in 3", data: "sylus cat solo capture"},
  { id: "Sylus24", src: "./static/loveanddeepspace/Paper17323305226.png", modal: "modal86", label: "Cat Sylus close up 1", data: "sylus cat solo capture"},
  { id: "Sylus25", src: "./static/loveanddeepspace/Paper17323305257.png", modal: "modal87", label: "Cat Sylus close up 2", data: "sylus cat solo capture"},
  { id: "Sylus26", src: "./static/loveanddeepspace/Paper17323305288.png", modal: "modal88", label: "Cat Sylus standing 2", data: "sylus cat solo capture"},
  { id: "Sylus27", src: "./static/loveanddeepspace/Paper17336106851.png", modal: "modal89", label: "Sylus Collage 2", data: "sylus collage snapshot"},
  { id: "Sylus28", src: "./static/loveanddeepspace/Paper17336107312.png", modal: "modal90", label: "Sylus sunglasses & stickers", data: "sylus solo snapshot"},
  { id: "MC9", src: "./static/loveanddeepspace/Paper17336108023.png", modal: "modal91", label: "MC Roar", data: "mc solo snapshot"},
  { id: "Sylus29", src: "./static/loveanddeepspace/Paper17336108754.png", modal: "modal92", label: "Sylus lean down", data: "sylus duo snapshot"},
  { id: "Sylus30", src: "./static/loveanddeepspace/Paper17336109225.png", modal: "modal93", label: "Sylus finger guns", data: "sylus duo snapshot"},
  { id: "Rafayel26", src: "./static/loveanddeepspace/Paper17372529281.png", modal: "modal94", label: "Rafayel Collage 2", data: "rafayel collage snapshot"},
  { id: "Rafayel27", src: "./static/loveanddeepspace/Paper17372530332.png", modal: "modal95", label: "Rafayel Artsy Look + Crown", data: "rafayel solo snapshot"},
  { id: "MC10", src: "./static/loveanddeepspace/Paper17372531613.png", modal: "modal96", label: "MC Wink", data: "mc solo snapshot"},
  { id: "Rafayel28", src: "./static/loveanddeepspace/Paper17372532874.png", modal: "modal97", label: "Rayel chin touch", data: "rafayel duo snapshot"},
  { id: "Rafayel29", src: "./static/loveanddeepspace/Paper17372533445.png", modal: "modal98", label: "Rafayel head rest", data: "rafayel duo snapshot"},
  { id: "Caleb1", src: "./static/loveanddeepspace/Paper17376009001.png", modal: "modal99", label: "Caleb Collage", data: "caleb collage snapshot"},
  { id: "Caleb2", src: "./static/loveanddeepspace/Paper17376010062.png", modal: "modal100", label: "Caleb sunglasses", data: "caleb solo snapshot"},
  { id: "MC11", src: "./static/loveanddeepspace/Paper17376015663.png", modal: "modal101", label: "MC Roar 2", data: "mc solo snapshot"},
  { id: "Caleb3", src: "./static/loveanddeepspace/Paper17376016124.png", modal: "modal102", label: "Caleb over the shoulder", data: "caleb duo snapshot"},
  { id: "Caleb4", src: "./static/loveanddeepspace/Paper17376018436.png", modal: "modal103", label: "Caleb Hand Pose", data: "caleb duo snapshot"},
  { id: "Zayne21", src: "./static/loveanddeepspace/Paper17376022567.png", modal: "modal104", label: "Zayne Peace Sign", data: "zayne solo snapshot"},
  { id: "Zayne22", src: "./static/loveanddeepspace/Paper17376023708.png", modal: "modal105", label: "Zayne Wave", data: "zayne solo snapshot"},
  { id: "Caleb5", src: "./static/loveanddeepspace/Paper17376443371.png", modal: "modal106", label: "Caleb Hands", data: "caleb duo portrait"},
  { id: "Sylus31", src: "./static/loveanddeepspace/Paper173233242410.png", modal: "modal107", label: "Sylus Flowers", data: "sylus solo portrait"},
  { id: "MC12", src: "./static/loveanddeepspace/Paper173233243711.png", modal: "modal108", label: "MC Guns", data: "mc solo portrait"},
  { id: "Caleb6", src: "./static/loveanddeepspace/Paper17377382667.png", modal: "modal09", label: "Caleb lean in", data: "caleb solo capture"},
  { id: "NewYear", src: "./static/loveanddeepspace/Paper17377382205.png", modal: "modal110", label: "Lunar New Year 2025 Deco", data: "bg capture"},
  { id: "Caleb7", src: "./static/loveanddeepspace/Paper17377382164.png", modal: "modal111", label: "Caleb Lunar New Year 2025", data: "caleb duo portrait"},
  { id: "Caleb8", src: "./static/loveanddeepspace/Paper17377382133.png", modal: "modal112", label: "Caleb Café Lunar New Year 2025", data: "caleb solo capture"},
  { id: "Caleb9", src: "./static/loveanddeepspace/Paper17377381891.png", modal: "modal113", label: "Caleb Outside", data: "caleb solo capture"},
  { id: "Rafayel30", src: "./static/loveanddeepspace/Paper17378643811.png", modal: "modal114", label: "Rafayel Lunar New Year 2025", data: "rafayel duo portrait"},
  { id: "Caleb10", src: "./static/loveanddeepspace/Paper173786324516.png", modal: "modal115", label: "Caleb Memory 1", data: "caleb solo capture"},
  { id: "Caleb11", src: "./static/loveanddeepspace/Paper173786324215.png", modal: "modal116", label: "Caleb Memory 2", data: "caleb solo capture"},
  { id: "Linkon", src: "./static/loveanddeepspace/Paper173786324014.png", modal: "modal117", label: "Linkon Back Alley", data: "bg capture"},
  { id: "Linkon2", src: "./static/loveanddeepspace/Paper173786323813.png", modal: "modal118", label: "Linkon City District", data: "bg capture"},
  { id: "Caleb12", src: "./static/loveanddeepspace/Paper173786323512.png", modal: "modal119", label: "Caleb at his home", data: "caleb solo capture"},
  { id: "Caleb13", src: "./static/loveanddeepspace/Paper173786323311.png", modal: "modal120", label: "Caleb at his home 2", data: "caleb solo capture"},
  { id: "Caleb14", src: "./static/loveanddeepspace/Paper173786323010.png", modal: "modal121", label: "Caleb at his home 3", data: "caleb solo capture"},
  { id: "Apartment", src: "./static/loveanddeepspace/Paper17378632229.png", modal: "modal122", label: "Caleb's Livingroom", data: "bg capture"},
  { id: "Caleb15", src: "./static/loveanddeepspace/Paper17378632188.png", modal: "modal123", label: "Caleb in Uniform 1", data: "caleb solo capture"},
  { id: "Caleb16", src: "./static/loveanddeepspace/Paper17378632157.png", modal: "modal124", label: "Caleb in Uniform 2", data: "caleb solo capture"},
  { id: "Caleb17", src: "./static/loveanddeepspace/Paper17378632126.png", modal: "modal125", label: "Caleb in Uniform 3", data: "caleb solo capture"},
  { id: "Caleb18", src: "./static/loveanddeepspace/Paper17378632095.png", modal: "modal126", label: "Caleb in Uniform 4", data: "caleb solo capture"},
  { id: "Caleb19", src: "./static/loveanddeepspace/Paper17378631833.png", modal: "modal127", label: "Caleb in Uniform lean in", data: "caleb solo capture"},
  { id: "Caleb20", src: "./static/loveanddeepspace/Paper17378631742.png", modal: "modal128", label: "Caleb in Uniform 5", data: "caleb solo capture"},
  { id: "Caleb21", src: "./static/loveanddeepspace/Paper17378631441.png", modal: "modal129", label: "Caleb in Uniform 6", data: "caleb solo capture"},
  { id: "Caleb22", src: "./static/loveanddeepspace/Paper17378468699.png", modal: "modal130", label: "Caleb Lunar New Year 2025 2", data: "caleb duo snapshot"},
  { id: "Caleb23", src: "./static/loveanddeepspace/Paper17378467978.png", modal: "modal131", label: "Caleb Fireworks", data: "caleb duo snapshot"},
  { id: "MC13", src: "./static/loveanddeepspace/Paper17378466447.png", modal: "modal132", label: "MC framing", data: "mc solo snapshot"},
  { id: "Caleb24", src: "./static/loveanddeepspace/Paper17378465596.png", modal: "modal133", label: "Caleb Lunar New Year 2025 pose", data: "caleb solo snapshot"},
  { id: "Caleb25", src: "./static/loveanddeepspace/Paper17378464155.png", modal: "modal134", label: "Caleb Collage 2", data: "caleb collage snapshot"},
  { id: "Caleb26", src: "./static/loveanddeepspace/Paper17378457654.png", modal: "modal135", label: "Caleb lean in 2", data: "caleb solo capture"},
  { id: "Caleb27", src: "./static/loveanddeepspace/Paper17378457603.png", modal: "modal136", label: "Caleb lean in 3", data: "caleb solo capture"},
  { id: "NewYear2", src: "./static/loveanddeepspace/Paper17378457512.png", modal: "modal137", label: "Lantern Making Workshop", data: "bg capture"},
  { id: "Caleb28", src: "./static/loveanddeepspace/Paper17378457471.png", modal: "modal138", label: "Caleb Lunar New Year 2025 3", data: "caleb solo capture"}
  // Add all other items here...
];
//template: { id: "", src: "./static/loveanddeepspace/.png", modal: "modal80", label: "", data: ""},

/*
$.get( "./data.json", function( data){ 
  mArray = data; 
  console.log(mArray); 
});
*/

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
      <div id="project-grid-item" class="box filter ${item.data} name col-lg-3 col-md-4 col-sm-12 mb-12 mb-md-0">
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