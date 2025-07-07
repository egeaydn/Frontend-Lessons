let sayi = 5.564; 


console.log(sayi.toFixed(2));

console.log(sayi.toPrecision(2));

console.log(sayi.toString()); // 5.564 -> "5.564"

console.log(sayi.toExponential());

let metin = "123.6" // NaN = not a number (bir sayı değil)

console.log(parseInt(metin)); // "45677" -> 45677

// int -> tam sayı demektir. O yüzden virgüllü sayı içeren stringi 
// integer'a çevirirken virgülü atar

console.log(parseFloat(metin));

