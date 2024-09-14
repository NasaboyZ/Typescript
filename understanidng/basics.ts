function add(n1:number,n2:number, showResult:boolean, Phrase: string){
   
   const result = n1 + n2;
    if(showResult){
        console.log(Phrase + result);
    } else {
        return n1 + n2;
    }

    
}


const nummber = 3;
const nummber2 = 3;
const printResult = true;
const resultPhase = 'Result is: ';

const result = add(nummber, nummber2, printResult, resultPhase);