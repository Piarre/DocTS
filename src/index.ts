import { Prompt, prompt } from "enquirer";

import { Utils } from "./utils";
const utils = new Utils();

(async () => {
  try {
    const project = await prompt<{ command: string }>([
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
          {
            message: "Spring Boot Backend with MySQL 8",
            name: "Spring Boot MySQL",
            hint: "Start a open-jdk container with Spring Boot and MySQL 8.",
          },
        ],
      },
    ]);
    const projectName = await prompt<{ name: string }>([
      {
        type: "input",
        name: "name",
        message: "Enter the project name",
        required: false,
      },
    ]);

    if (project.command === "Dockerize DiscordJS")
      utils.createProject(projectName.name, "Discord");
    if (project.command === "Redis Container")
      utils.createProject(projectName.name, "redis-increment");
    if (project.command === "Spring Boot MySQL")
      utils.createProject(projectName.name, "SpringBoot");
  } catch (e) {
    console.warn(e);
  }
})();
