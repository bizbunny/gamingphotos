// games-config.js
const gamesConfig = {
    nogame: {
      filters: ['all'],
      dataFile: null,
    },
    genshin: {
      filters: ['all', 'sqe', 'giscreenshot'],
      dataFile: './data-gi.json',
    },
    hsr: {
      filters: ['all', 'cs', 'hsrscreenshot'],
      dataFile: './data-hsr.json',
    },
    loveanddeepspace: {
      filters: {
        characters: ['zayne', 'xavier', 'rafayel', 'sylus', 'caleb', 'mc'],
        photoMode: ['snapshot', 'portrait', 'capture', 'solo', 'duo'],
        miscellaneous: ['collage', 'cat', 'bg'],
      },
      dataFile: './data-lads.json',
    },
    // Add new games here
  };