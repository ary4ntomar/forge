import { select, isCancel } from "@clack/prompts";
import chalk from "chalk";
import figlet from "figlet";

const FACE = chalk.hex("#205e82");

export const runWakeup = async () => {
  let ascii: string;
  try {
    ascii = FACE(figlet.textSync("forge", { font: "ANSI Shadow" }));
  } catch (error) {
    ascii = FACE(figlet.textSync("forge", { font: "Standard" }));
  }

  console.log(`${ascii}`);

  const mode = await select({
    message: "Which mode you want to proceed with?",
    options: [
      { value: "cli", label: "CLI" },
      { value: "telegram", label: "Telegram" },
      { value: "exit" , label:"Exit"}
    ],
  });

  if (isCancel(mode) || mode ==="exit") {
     console.log(chalk.dim("\n  GoodBye !!"));
     return;
  }

  if (mode === "cli") {
    console.log(chalk.dim("starting cli mode ...."));
  } else if (mode === "telegram") {
    console.log(chalk.dim("starting telegram mode ..."));
  }
};
