function findLongestWordLength(str) {
  var str = str;
  //patt1 /\w=ein zeichen += ein oder mehrere von dem zeichen \s = whitespace tabs etc.. /g = global i = ignorecase...... 
  //bei diesem patt1 haben wir ein problem das er das letzte wort nicht mitnimmt deswegen erstellten wir patt2
  var patt1 = /\w+\s/gi;
//------------------------------------------------------------------
  //patt2 gibt mir das letzte wort vom satz zurück
  var patt2 = /\w+$/g;
//------------------------------------------------------------------
  //result gibt mir denn Satz (aber nicht das letzte wort) in einem Array zurück
  var result = str.match(patt1);
//------------------------------------------------------------------
 
  //result2 gibt mir das letzte wort vom satz zurück
 var result2 = str.match(patt2);
//------------------------------------------------------------------
var numeroUno = [];
//speichere alle länge des result jedes einzelne wort in einem array zum filtern
//------------------------------------------------------------------
var numeroDue = [];
//speicher die länge des letzten wort in einem array
//------------------------------------------------------------------
for(let i = 0; i <result.length; i++){
  numeroUno.push(result[i].length-1)
 
}
//------------------------------------------------------------------
 for(let j = 0; j <result2.length;j++){
     numeroDue.push(result2[j].length)
  }
//das ich nur 1 Gesamtes array hab und kein sub-Array pushe ich mit dem Spreadoperator
numeroUno.push(...numeroDue);
console.log()

  var nummer = Math.max(...numeroUno)

  return nummer;
}

findLongestWordLength("The bsadasdasdasdrown fox jumped over the lazyasdasd")
