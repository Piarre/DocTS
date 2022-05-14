const fs = require("fs-extra");
const path = require("path");

export class Utils {
  /**
   * @public
   * @param {string} projectName
   * @param {string} templateName
   */
  public createProject(projectName: string, templateName: string): any {
    fs.mkdir(`./${projectName}`, (error: Error) => {
      if (error) {
        console.log("%s Could not create project !", "\x1b[31mERROR");
        console.log(error);
        process.exit(0);
      } else {
        const srcDir = `${path.resolve(__dirname)}/templates/${templateName}`;
        const destDir = `./${projectName}`;

        fs.copySync(srcDir, destDir);
        console.log(`\x1b[42m\x1b[30mDONE\x1b[0m Project created`);
        process.exit(0);
      }
    });
  }
}
