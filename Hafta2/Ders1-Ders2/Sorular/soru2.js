/*
SORU 2: Asal Sayı Kontrolü Bir pozitif n sayısı tanımlayınız (örneğin n=17). 
Bu sayının asal olup olmadığını kontrol eden bir program yazınız.Örnek: n=17 için → “17 asal sayıdır” 
(çünkü sadece 1 ve 17’ye bölünür)İpucu: 2’den n-1’e kadar bölen arayın
*/

let sayi = 17 ;
let asalMi = 1;

while (asalMi < 50) {
    if (sayi % asalMi == 0 ) { 
        console.log(sayi,"Sayisi asal Değildir!!!")
        break
    }
    else{
        console.log(sayi,"Sayisi Asaldir!!!");
    }
    asalMi++;
}



