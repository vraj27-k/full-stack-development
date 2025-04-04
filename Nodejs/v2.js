import chalk from "chalk";
import validator from "validator";
var test =chalk.red.underline.bgYellow("hello")+chalk.bold.bgRed.italic.yellow("\nyahoo");
console.log(validator.isLowercase(test),validator.isEmail(test));