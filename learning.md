## setup

- commander.ts is a library used to make CLI tools in node/bun environment.
- @clack/prompts is used to create prompt interface on CLI
- @chalk is used to add colouring to the commad

#!/usr/bin/env bun 
- This is called shebang.
It tells your computer : "hey , run this file using Bun"
without shebang OS doesn't know which file  is this , so it can'nt directly execute it.

- what is "bin" in package.json ?
"bin": {
    "forge":"./index.ts"
}

this means >  create a terminal command named : forge, and when someone run it ,  execte ./index.ts

- what does bun link do ?
bun link : this tells register my project globally as a CLI tool , before link it will only work inside the project.