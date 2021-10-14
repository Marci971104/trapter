const side_a = document.querySelector("side_a") as HTMLInputElement;
const side_b = document.querySelector("side_b") as HTMLInputElement;
const side_c = document.querySelector("side_c") as HTMLInputElement;
const side_d = document.querySelector("side_d") as HTMLInputElement;
const SumBtn = document.querySelector("SumBtn") as HTMLInputElement;

function szamol(side_a : number,side_b: number,side_c:number, side_d:number ):number{
    return side_a+side_c;
}
console.log(szamol(30,32,3232,32));