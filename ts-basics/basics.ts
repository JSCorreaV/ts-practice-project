console.log('it is updated')

function add(n1: number, n2: number){
    return n1+n2;
} 

function addtoString(n1: number, n2: number): string{
    var sum: string = (n1+n2).toString();
    return sum;
}

var number1: number =5;
var number2: number =12.8;

var result: number = add (number1, number2);
console.log(result);

