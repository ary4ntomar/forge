import { select, isCancel } from "@clack/prompts";
import chalk from "chalk";
import figlet from "figlet";

const SHADOW = chalk.hex("#118e75");
const FACE = chalk.hex("#b1dbe6").bold;

export const runWakeup = async () => {
  let ascii: string;
  try {
    ascii = SHADOW(figlet.textSync("forge", { font: "ANSI Shadow" }));
  } catch (error) {
    ascii = SHADOW(figlet.textSync("forge", { font: "Standard" }));
  }

  console.log(`${ascii}`);
};
