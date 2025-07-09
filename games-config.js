// games-config.js
const gamesConfig = {
  nogame: {
    displayName: "Home",
    filters: ['all'],
    dataFile: null,
  },
  genshin: {
    displayName: "Genshin Impact",
    filters: ['all', 'sqe', 'giscreenshot'],
    dataFile: './data/data-gi.json',
  },
  hsr: {
    displayName: "Honkai Star Rail",
    filters: ['all', 'cs', 'hsrscreenshot'],
    dataFile: './data/data-hsr.json',
  },
  wuwa: {
    displayName: "Wuthering Waves",
    filters: ['all', 'wwcs', 'other'],
    dataFile: './data/data-ww.json',
  },
  in: {
    displayName: "Infinity Nikki",
    filters: ['all', 'camerashot', 'inscreenshot'],
    dataFile: './data/data-in.json',
  },
  loveanddeepspace: {
    displayName: "Love & Deepspace",
    filters: {
      characters: ['zayne', 'xavier', 'rafayel', 'sylus', 'caleb', 'mc'],
      photoMode: ['snapshot', 'portrait', 'capture', 'solo', 'duo'],
      miscellaneous: ['collage', 'cat', 'bg','screenshot'],
    },
    dataFile: './data/data-lads.json',
  },
  acpc: {
    displayName: "Animal Crossing Pocket Camp",
    filters: ['all', 'accamera', 'acpcscreenshot'],
    dataFile: './data/data-acpc.json',
  },
  am: {
    displayName: "Anno Mutationem",
    filters: ['all'],
    dataFile: './data/data-am.json',
  },
  hv: {
    displayName: "Harvestella",
    filters: ['all', 'hvbg', 'hvdialogue'],
    dataFile: './data/data-hv.json',
  },
  pm: {
    displayName: "Paradise Marsh",
    filters: ['all', 'pmbg', 'pmwtxt'],
    dataFile: './data/data-pm.json',
  },
  psv: {
    displayName: "Pokemon Scarlet & Violet",
    filters: ['all', 'food', 'psvPhoto', 'psvScreenshot'],
    dataFile: './data/data-psv.json',
  }
};