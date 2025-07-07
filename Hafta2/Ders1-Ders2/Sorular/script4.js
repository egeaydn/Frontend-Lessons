// switch-case yapısını kullanarak, bir gün ismine göre ("Pazartesi", "Salı", ...) 
// ekrana o günün haftanın kaçıncı günü olduğunu yazdıran bir kod örneği yaz.

let gun = "Pazar";

switch (gun) {
    case "Pazartesi":
        console.log("1. gün");
        break;
    case "Salı":
        console.log("2. gün");
        break;
    case "Çarşamba":
        console.log("3. gün");
        break;
    case "Perşembe":
        console.log("4. gün");
        break;
    case "Cuma":
        console.log("5. gün");
        break;
    case "Cumartesi":
        console.log("6. gün");
        break;
    case "Pazar":
        console.log("7. gün");
        break;

    default:
        console.log("Geçersiz gün");
        break;
}