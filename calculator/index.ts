import {question} from  'readline-sync';

function main() : void{
    const firstStr : string  = question('Enter first number:\n');
    // console.log(firstStr);
    const operator : string = question('Enter Operator : \n');
    const secondStr : string  = question('Enter Second Number:\n');
    console.log(firstStr,operator,secondStr);


    // const firstNum = isNumber(firstStr);
    // console.log(firstNum);

    // const op = isOperator(operator);
    // console.log(op);

    const validInput : boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if(validInput){

        const firstNum : number = parseInt(firstStr);
        const secondNum : number = parseInt(secondStr);
        const result = calculate(firstNum,operator,secondNum);
        console.log(result);
        
        // console.log('is valid');
        
    } 
    else{
        console.log('Not valid');
        main();
        
    }
    
}
function calculate(firstNum:number,operator:string,secondNum:number){
    switch (operator){
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        default:
            return -1;
                                    
                
    }
}
function isOperator(operator:string):boolean{
    switch (operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}  
function isNumber(str:string) :boolean {
    const maybeNum = parseInt(str);
    const isNum : boolean = !isNaN(maybeNum);
    return isNum;
}
main();
