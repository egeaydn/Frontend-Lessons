// SORU 3: Sayının Basamaklarını ToplamaBir pozitif sayi tanımlayınız
//  (örneğin sayi=1234). Bu sayının basamaklarını toplayan bir program 
// yazınız.Örnek: sayi=1234 için → 1+2+3+4 = 10İpucu: Sayıyı 10’a bölerek basamakları ayırın

let sayi = "1234589";
let sayac = 0;
let toplam = 0;

while (sayac < sayi.length)  {

    toplam = toplam + parseInt(sayi[sayac++])

    console.log(parseInt(toplam));

}