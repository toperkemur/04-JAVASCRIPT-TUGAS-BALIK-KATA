
function balikKata(kata) {
 // tulis jawabanmu di sini
 let arr = [];
 let arrString;
 for(i=0;i<kata.length;i++){
   arr.unshift(kata[i]);
 }
 arrString = arr.toString();
 return arrString.replace(/,/g,"");
}


// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat")) 
