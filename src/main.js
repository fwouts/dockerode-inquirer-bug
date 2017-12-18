let inquirer = require("inquirer");
let Docker = require("dockerode");

async function main() {
  let docker = new Docker({
    socketPath: "/var/run/docker.sock"
  });
  await inquirer.prompt([
    {
      type: "list",
      name: "name",
      message: "Message",
      choices: ["a", "b", "c"]
    }
  ]);
}

main().catch(console.error);
