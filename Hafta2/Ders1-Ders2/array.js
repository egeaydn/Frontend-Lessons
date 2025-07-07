let meyvelerListesi = ["elma", "armut", "üzüm"];
let meyvelerListesi2 = ["çilek", "ananas", "mango"];
let sayilar = [1,2,3,4,5,6];
let karisik = ["ahmet", 1, true, "asdasd"]

console.log(sayilar)


let bu = "123456789"

console.log(bu[0])

console.log(meyvelerListesi.length)


// meyvelerListesi.length -> dizinn uzunluğunu verir

meyvelerListesi.push("karpuz");

console.log(meyvelerListesi)

meyvelerListesi.pop(); 

console.log(meyvelerListesi)

// CONCAT

let yeniMeyveDizisi = meyvelerListesi.concat(meyvelerListesi2);
console.log(yeniMeyveDizisi)

yeniMeyveDizisi.splice(1,2)

console.log(yeniMeyveDizisi.indexOf("elma"))