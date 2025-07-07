// yaş gruplandırması
// bir yaş bilgisinin hangi yaş grubuna ait olduğunu 
// if else blokları içerisinde ifade ediniz.
// 0-12 -> çocuk
// 13-17 -> ergen
// 18-64 -> yetişkin
// 65+ -> Yaşlı
// negatif bir sayı ise -> geçersiz yaş bilgisi

let yas = "aslkhdşkjg";

if (yas < 0) {
    console.log("Geçersiz yaş")
} else if (yas <= 12){
    console.log("Çocuk")
} else if(yas <= 17) {
    console.log("Ergen")
} else if(yas <= 64) {
    console.log("Yetişkin")
} else if (yas > 64){
    console.log("Yaşlı")
} else {
    console.log("hatalı bir yaş bilgisi") // NaN
}