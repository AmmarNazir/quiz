import chalk from "chalk";


let pointsEarned:number = 0;


async function result(a:boolean) {
    
    if (a==true) {
        console.log(chalk.green.bold("\n Correct Answer"));
        pointsEarned = pointsEarned + 10;
    }else{
        console.log(chalk.red.bold("\n Wrong Answer"));

    }
    
    return (console.log("Total points", pointsEarned ));
}

export default result;