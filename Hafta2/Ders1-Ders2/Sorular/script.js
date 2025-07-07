//Bir dizinin (örneğin: let sayilar = [2, 4, 6, 8, 10]) tüm elemanlarını ekrana yazdıran bir while döngüsü nasıl yazılır? Kısa bir örnek kod ile göster.

let sayilar = [2, 4, 6, 8, 10];
let sayac = 0;

while (sayilar.length > sayac) {
    console.log(sayilar[sayac]);
    sayac++;
}