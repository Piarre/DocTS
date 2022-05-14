import { Prompt, prompt } from "enquirer";

import { Utils } from "./utils";
const utils = new Utils();

(async () => {
  try {
    const project = await prompt<{ command: string }> ([
      {
        type: "select",
        name: "command",
        message: "Pick a Docker project",
        initial: 0,
        choices: [
          {
            message: "DiscordJS v12 Dockerize",
            name: "Dockerize DiscordJS",
            hint: "test",
          },
          {
            message: "Redis Increment on visit",
            name: "Redis Container",
            hint: "Increment a counter in a Redis database.",
          },
        ],
      }
    ]);
    const projectName = await prompt<{ name: string }>([
      {
        type: "input",
        name: "name",
        message: "Enter the project name",
        required: false
      }
    ]);

    if (project.command === "Dockerize DiscordJS") utils.createProject(projectName.name, "Discord");
    if (project.command === "Redis Container") utils.createProject(projectName.name, "redis-increment");

  } catch (e) {
    console.warn(e);
  }
})();
