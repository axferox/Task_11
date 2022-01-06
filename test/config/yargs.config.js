const { exec } = require("child_process");
const yargs = require("yargs");
const fs = require("fs");
const { startNode, startHub } = require("./grid-controller.config");

yargs
  .command({
    command: "hub",
    description: "Start Selenium grid 4 gub with a full command like: 'npm start hub'",
    handler() {
      startHub();
    }
  })
  .help()
  .parse()

  yargs
    .command({
      command: "node [browserName] [browserVersion] [platformName]",
      description: "Start node with a full command like: 'npm start node chrome 96 mac'",
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

yargs
  .command({
  
    command: "test [testType] [browserName] [browserVersion] [platformName] [environment]",
    description: "Start test with a full command like: 'npm start test smoke chrome 96 mac localhost'",
    builder: {
      testType: {
        describe: "smoke/regression/sanity",
        demandOption: true,
        type: "string",
      },
      browserName: {
        describe: "chrome/firefox",
        demandOption: true,
        type: "string",
      },
      browserVersion: {
        describe: "Browser version is required, session will not start otherwise, will accept only natural numbers",
        demandOption: true,
        type: "number",
      },
      platformName: {
        describe: "windows/mac/linux",
        demandOption: true,
        type: "string",
      },
      environment: {
        describe: "tst/stg/prd",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      fs.writeFile("./test/config/browser.config.json", `${JSON.stringify(argv)}`, "utf8", (err) => {
        if (err) throw err;
      });
      exec(`npm run ${argv.testType}`, (stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
    },
  })
  .help()
  .parse();