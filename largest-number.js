function largestOfFour(arr) {
  //erstelle ein leeres Array 
  let alo = []
  //mit der for-loop löse ich das "main" array auf und 
  //hab jetzt alle sub-arrays in einzelne array
 for(let i =0;i <arr.length;i++){
   //löse die arrays auf und speichere alle nummern in einem array
   arr[i].map((data)=>{
     
      alo.push(data)
   })
 }
 //danke math.max und ES6(spread-operator) für die einfachere version :)
 console.log(Math.max(...alo))
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [4000, 1001, 857, 1]]);
