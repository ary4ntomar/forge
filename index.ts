#!/usr/bin/env bun

import {Command } from "commander";
import { runWakeup } from "./terminalUI/wakeup";
const program = new Command();

program
   .name("forge")
   .description("Your Autonomous CLI Coding Agent")
   .version("0.0.1")

program
.command("wakeup")
.description("show the banner and pick cli or telegram mode")
.action(async () =>{
   await runWakeup();
});

await program.parseAsync(process.argv);