let a = 12; // number
let b = 16;
let c = "12" // string

// ctrl + k + c -> hızlı yorum satırı
// ctrl + k + u -> hızlı yorum satırı kaldırma


let sonuc = a == b;
// console.log(sonuc) // false


sonuc = a == c; // sadece değerlerin eşitliğine bakılır
// console.log(sonuc)

sonuc = a === c; // değerlerin ve türlerin eşitliğine bakılır
// console.log(sonuc)



// MANTIK

// && ve   -> iki koşuldan birisi yanlışsa sonuç false
// || veya -> iki koşuldan birisi doğruysa sonuç true
// !  değil



sonuc = a == b || c == a;
sonuc = a === c || a == b;
console.log(sonuc)

console.log(!(a==b)) // item: true