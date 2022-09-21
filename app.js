//!hesapla butonuna tıklandığında öncelikle preventDefault() komutu şart, onu yazmazsak  girilen bilgilerle ekrana çıkarmak istediğim veriler çıkmaz, çünkü index.html deki form, aldığı bilgileri backend e yollamaya programlı, önce benim işimi gör diyoruz preventDefault diyerek.

const table = ` <h1 class=" mt-5 text-warning">Kredi Bilgileri</h1>
<table class="table table-bordered border-warning mt-4">
<tr>
<tbody>
  <th>${"Kredi Miktari"}</th>
  <td>${"krediTutari.value"}</td>
  <th>${"Kredi Tipi"}</th>
  <td>${"KREDI TIPINDE SECILEN"}</td>
</tr>
<tr>
  <th>${"Vade"}</th>
  <td>${"Vadeye Girilen Deger"}</td>
  <th>${"Faiz Orani"}</th>
  <td>${"Atadigimiz faiz orani kac ise"}</td>
</tr>
<tr>
  <th>${"Toplam Tutar"}</th>
  <td>${"Hesaplanip cikarilacak"}</td>
  <th>${"Taksit Tutari"}</th>
  <td>${"Hesapladigimiz taksit tutari sonucu"}</td>
</tr>
</tbody>
</table>`;

const hesaplaButon = document.querySelector(".btn");
let oran;
let faiz;
let taksitTutari;
let krediTutari;
let taksitSayisi;
let toplamOdenecekTutar;

hesaplaButon.onclick = (e) => {
  //*form işlemlerinde formun submit inin default kendi hareketlerini yapmaması, benim istediklerimi yapması için e.preventDefault() komutunu kullanırız

  e.preventDefault();

  if (document.querySelector("#select").value === "Konut Kredisi") {
    oran = 1.29;
  } else if (document.querySelector("#select").value === "Ihtiyac Kredisi") {
    oran = 1.99;
  } else if (document.querySelector("#select").value == "Arac Kredisi") {
    oran = 1.79;
  } else if (
    document.querySelector("#tutar").value == "" ||
    document.querySelector("#vade").value == "" ||
    document.querySelector("#select").value == ""
  ) {
    alert("Lütfen kredi türü giriniz");
  }
  faiz = oran / 100;

  krediTutari = document.querySelector("#tutar").value;
  taksitSayisi = document.querySelector("#vade").value;
  taksitTutari =
    (krediTutari * faiz * (faiz + 1) ** taksitSayisi) /
    ((1 + faiz) ** taksitSayisi - 1);
  toplamOdenecekTutar = taksitTutari * taksitSayisi;
  const table = `
   <h1 class=" mt-5 text-warning">Kredi Bilgileri</h1>
<table class="table table-bordered border-warning mt-4">
<tr>
<tbody>
  <th>${"Kredi Miktari"}</th>
  <td>${krediTutari}   €</td>
  <th>${"Kredi Tipi"}</th>
  <td>${document.querySelector("#select").value}</td>
</tr>
<tr>
  <th>${"Vade"}</th>
  <td>${taksitSayisi}</td>
  <th>${"Faiz Orani"}</th>
  <td>${oran}</td>
</tr>
<tr>
  <th>${"Toplam Tutar"}</th>
  <td>${toplamOdenecekTutar.toFixed(2)}   €</td>
  <th>${"Taksit Tutari"}</th>
  <td>${taksitTutari.toFixed(2)}   €</td>
</tr>
</tbody>
</table>`;

  document.querySelector(".sonuclar").innerHTML = `${table}`;
};
