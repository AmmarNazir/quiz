import inquirer from "inquirer";
export async function question1() {
    const ans1 = await inquirer.prompt([
        {
            name: "q1",
            type: "list",
            message: "How to compile whole typescript project? ",
            choices: ["tsc --watch", "tsc", "both a&b"]
        }
    ]);
    return (ans1.q1 == "both a&b");
}
;
export async function question2() {
    const ans2 = await inquirer.prompt([
        {
            name: "q2",
            type: "list",
            message: "How to install node dependencies? ",
            choices: ["npm i @types/node -D", "npm i @types/inquirer -D", "npm install node -D"]
        }
    ]);
    return (ans2.q2 == "npm i @types/node -D");
}
;
export async function question3() {
    const ans3 = await inquirer.prompt([
        {
            name: "q3",
            type: "list",
            message: "What is the alternative command to compile whole project? ",
            choices: ["tsc i ", "npm i ", "none"]
        }
    ]);
    return (ans3.q3 == "none");
}
;
