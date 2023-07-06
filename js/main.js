//test1


// let result = sumNum();
//     console.log("Insert certain amount of number:");
    
//     function sumNum() {
//     let userNumber = prompt("how many number you wanna insert");
//         let N = [];
        
//         for(let i=0; < userNumber; i++){
//             let selNum = parseInt(prompt("Insert a number"));
//             N.push(selNum);
//         }
        
//         let sum = 0;
//         for(let i=0;i<N;i++){
//             sum+=N[i];
//         } return sum;
//     }


//recode

let N = parseInt(prompt("insert how many number u want"));
let sumNum = resNum (N);
    console.log("Sum number choosen is:" + (sumNum));

//function
function resNum(arrayTest){
    let array1 = []
    let result = 0;
    for (let i=0; i < arrayTest;i++){
        let num = parseInt(prompt("insert additional number"));
        array1.push(num);
        result += num;
    } return result;
}


function average(array){
    let average= sumNum(array)/array.length;
    if(array.legnth !=0){
        return average
    } else{
    return "divided by 0";
    }
}








//Milestone 1:
//Crea una funzione chiamata sommaNumeri che prenda un array di N numeri
//e calcoli la somma di tutti questi numeri contenuti nell'array, restituendolo come risultato.
//Utilizzare la funzione sommaNumeri per stampare il risultato.
//L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N),
//e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().



//Milestone 2:
//Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri 
//e restituisca la media aritmetica dei numeri contenuti nell'array.
//Utilizzare la funzione sommaNumeri precedentemente creata per calcolare 
//la media dei numeri che vanno chiesti all'utente attraverso dei prompt.
//Potete ad esempio provare ad usare questo programma per 
//inserire N voti di scuola e farvi restituire qual è la media di tutti i voti inseriti!

