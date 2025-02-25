// games-config.js
const gamesConfig = {
    nogame: {
      filters: ['all'],
      dataFile: null,
    },
    genshin: {
      filters: ['all', 'sqe', 'giscreenshot'],
      dataFile: './data/data-gi.json',
    },
    hsr: {
      filters: ['all', 'cs', 'hsrscreenshot'],
      dataFile: './data/data-hsr.json',
    },
    wuwa: {
      filters: ['all', 'wwcs', 'other'],
      dataFile: './data/data-ww.json',
    },
    in: {
      filters: ['all', 'camerashot', 'inscreenshot'],
      dataFile: './data/data-in.json',
    },
    loveanddeepspace: {
      filters: {
        characters: ['zayne', 'xavier', 'rafayel', 'sylus', 'caleb', 'mc'],
        photoMode: ['snapshot', 'portrait', 'capture', 'solo', 'duo'],
        miscellaneous: ['collage', 'cat', 'bg'],
      },
      dataFile: './data/data-lads.json',
    },
    acpc: {
      filters: ['all', 'accamera', 'acpcscreenshot'],
      dataFile: './data/data-acpc.json',
    },
    am: {
      filters: ['all'],
      dataFile: './data/data-am.json',
    },
    hv: {
      filters: ['all', 'hvbg', 'hvdialogue'],
      dataFile: './data/data-hv.json',
    },
  };