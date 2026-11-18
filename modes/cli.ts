import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";

export default async function runCliMode() {
  while (true) {
    const mode = await select({
      message: "Choose CLI sub-mode",
      options: [
        { value: "agent", label: "Agent" },
        { value: "plan", label: "Plan" },
        { value: "ask", label: "Ask" },
        { value: "back", label: "Back" },
      ],
    });

    if (isCancel(mode) || mode === "back") {
      return;
    } else if (mode === "agent") {
      console.log(chalk.dim("Agent Most Activated"));
    } else if (mode === "ask") {
      console.log(
        chalk.dim("Ask Mode Activated, now you can ask your queries"),
      );
    } else if (mode === "plan") {
      console.log(chalk.dim("Plan Mode Activated"));
    }
  }
}
