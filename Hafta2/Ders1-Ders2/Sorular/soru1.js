/*
SORU 1: Sayıları ToplamaBir pozitif n sayısı tanımlayınız (örneğin n=5). 
0’dan n’ye kadar olan sayıları toplayan bir program yazınız.
Örnek: n=5 için → 0+1+2+3+4+5 = 15İpucu: while döngüsü kullanın
*/

let sayi = 45;
let toplam = 0;

while (sayi > 0) {
    
    toplam = toplam + sayi;
    console.log("toplam:", toplam);
    sayi--;
}