const loudnessPromise = require(".");

async function main() {
  console.log(await loudnessPromise.getVolume());
}

main().catch(console.error);
