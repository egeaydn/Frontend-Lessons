const gorevInput = document.getElementById("gorevInput");
const ekleBtn = document.getElementById("ekleBtn");
const gorevListesi = document.getElementById("gorevListesi");

ekleBtn.addEventListener("click", function () {
  const girilenGorev = gorevInput.value;

  if (girilenGorev.trim().length > 0) {
    const yeniGorev = document.createElement("li");
    yeniGorev.textContent = girilenGorev;
    gorevListesi.appendChild(yeniGorev);
  } else {
    alert("hiçbir metin girmediniz");
  }

  gorevInput.value = "";
});
