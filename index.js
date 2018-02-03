const loudness = require("loudness");

module.exports = {
  setVolume: volume => {
    return new Promise((resolve, reject) => {
      loudness.setVolume(volume, err => (err ? reject(err) : resolve()));
    });
  },
  getVolume: () => {
    return new Promise((resolve, reject) => {
      loudness.getVolume(
        (err, volume) => (err ? reject(err) : resolve(volume))
      );
    });
  },
  setMuted: muted => {
    return new Promise((resolve, reject) => {
      loudness.setMuted(muted, err => (err ? reject(err) : resolve()));
    });
  },
  getMuted: () => {
    return new Promise((resolve, reject) => {
      loudness.getMuted((err, muted) => (err ? reject(err) : resolve(muted)));
    });
  }
};
