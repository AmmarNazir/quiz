import showBanner from "node-banner";
import result from "./result.js";
import { question1, question2, question3 } from "./quiz_questions.js";
async function banner() {
    await new Promise((res) => {
        showBanner('\n ASSIGNMENT-QUIZ');
        setTimeout(res, 2000);
    });
}
await banner();
let answer1 = await question1();
let score = await result(answer1);
let answer2 = await question2();
score = await result(answer2);
let answer3 = await question3();
score = await result(answer3);
console.log(score);
