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
    ],
  });

  if (isCancel(mode)) {
    process.exit(0);
  }

  if (mode === "cli") {
    console.log(chalk.dim("starting cli mode ...."));
  } else {
    console.log(chalk.dim("starting telegram mode ..."));
  }
};
