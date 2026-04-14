let countriesInComeDataArray = [];
/*gelen data ları koymak içib boş bir array oluşturuyoruz*/
fetch("https://restcountries.com/v3.1/all?fields=name,flags,population")
.then(response => response.json())
/*gelen sonucu json formatına çeviriyor*/

.then(data => {
    console.log(data)
    countriesInComeDataArray.push(data);
})
/*sonrasında json a dönüşen datayı consola yazdırıyor*/

.catch(error => {
    console.log("Hata var:", error);
})
/*hata yakalarsa konsola yazdırıyor*/

console.log(countriesInComeDataArray);

let style = document.createElement("link");
style.rel = "styleSheet";
style.href = "./style.css";
document.querySelector("head").appendChild(style);
/*style.css imizi index.html e bağlıyoruz*/

let oneCountryBox = document.createElement("div");
oneCountryBox.className="countryBox";
oneCountryBox.innerHTML="DENEME";
document.querySelector("body").appendChild(oneCountryBox);