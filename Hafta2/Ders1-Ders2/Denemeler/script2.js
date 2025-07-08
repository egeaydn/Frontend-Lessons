// //Aşağıdaki yaş değişkeni için doğru çıktıyı verecek if-else bloğunu tamamla:
// let yas = 15;
// 0-12: "Çocuk", 13-17: "Ergen", 18-64: "Yetişkin", 65+: "Yaşlı", negatif: "Geçersiz yaş" olacak şekilde kodu yaz.

let yas = 15;

if (yas <= 12) {
    console.log("Çocuk");
}
else if(yas >=13 && yas <= 17) {
    console.log("Ergen");
}
else if(yas>=18 && yas <= 64) {
    console.log("Yetişkin");
}
else if(yas >= 65) {
    console.log("Yaşlı");
}
else {
    console.log("Geçersiz yaş");
}