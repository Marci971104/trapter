/* Author: Rohrbacher Marcell, Szűcs Norbert
* Copyright: 2021, Rohrbacher Marcell, Szűcs Norbert 
* Group: Szoft II/N
* Date: 2021-10-14
* Github: https://github.com/Marci971104/, https://github.com/Szucs-Norbert?fbclid=IwAR3iEh8T1fDZ1Bsde7G8iLZjEthrYv5pQbwfimAjkdco74zWPAqi-PMrTrM
*/

const side_a = document.querySelector("#side_a") as HTMLInputElement;
const side_b = document.querySelector("#side_b") as HTMLInputElement;
const side_c = document.querySelector("#side_c") as HTMLInputElement;
const side_d = document.querySelector("#side_d") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;

const SumBtn = document.querySelector("#SumBtn");


function add(side_a : number,side_b: number,side_c:number, side_d:number ):number{
    return ((side_a+side_c)/(4*(side_a-side_c))
      *Math.sqrt((side_a+side_b-side_c+side_d)
        *(side_a-side_b-side_c+side_d)
        *(side_a+side_b-side_c-side_d)
        *(-side_a+side_b+side_c+side_d)));
}

SumBtn.addEventListener('click', event =>{  
    let res= add(+side_a.value, +side_b.value, +side_c.value, +side_d.value);
    result.value=String(res.toFixed(2)+" cm²");
    //console.log(13, 4, 7, 4);
});
