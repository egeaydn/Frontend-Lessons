// Bir dizideki (örneğin: let karisik = ["elma", 5, true, "armut"]) sadece string olan elemanları 
// ekrana yazdıran bir döngü ve koşul yapısı yaz.

let karisik = ["elma", 5, true, "armut"];
let sayac = 0;

while (karisik.length > sayac) {
    if (typeof karisik[sayac] === "string" ) {
        console.log(karisik[sayac]);
    }
    sayac++;
}
//typeof, bir değişkenin veri tipini öğrenmek için kullanılır.
console.log(typeof 42);            // "number"
console.log(typeof "merhaba");     // "string"
console.log(typeof true);          // "boolean"
console.log(typeof [1, 2, 3]);     // "object" ← Dizi bile olsa object der
console.log(typeof null);          // "object" ← JavaScript'in tarihi bir bug'ı :D
console.log(typeof undefined);     // "undefined"
