const yargs = require("yargs");
const { startNode } = require("./grid-controller.config");

yargs
  .command({
    command: "with [browserName] [browserVersion] [platformName]",
    description: "Start node with a full command like: 'npm run node with chrome 96 mac'",
    builder: {
      browserName: {
        describe: "chrome/firefox",
        demandOption: true,
        type: "string",
      },
      browserVersion: {
        describe: "Browser version is required, node will not start otherwise, will accept only natural numbers",
        demandOption: true,
        type: "number",
      },
      platformName: {
        describe: "windows/mac/linux",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      startNode(argv.browserName, argv.browserVersion);
    },
  })
  .help()
  .parse();