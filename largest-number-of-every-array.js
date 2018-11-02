function largestOfFour(arr) {
  //erstelle ein leeres array
  let large = [];
  //geh jetzt durch das "main"-array sprich 
  //löse die erste []-Klammer auf
  arr.map((data)=>{
      //holle mir vom jeden sub-array die 
      //max number
      var o = Math.max(...data);
      console.log(Math.max(...data))
      
      //füge sie hinzu zu large array
      large.push(o)
  })
  //alle max nummern von jeden einzelnen array
  console.log(large) //[ 5, 27, 39, 1001 ]
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
