function updateLATime() {
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles) {
    let losAngelesDate = losAngeles.querySelector(".date");
    let losAngelesTime = losAngeles.querySelector(".time");

    losAngelesDate.innerHTML = moment().format(" MMMM Do YYYY");
    losAngelesTime.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

updateLATime();
setInterval(updateLATime, 1000);

function updateSydneyTime() {
  let sydney = document.querySelector("#sydney");
  if (sydney) {
    let sydneyDate = sydney.querySelector(".date");
    let sydneyTime = sydney.querySelector(".time");

    sydneyDate.innerHTML = moment().format(" MMMM Do YYYY");
    sydneyTime.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

updateSydneyTime();
setInterval(updateSydneyTime, 1000);

function updateTokyoTime() {
  let tokyo = document.querySelector("#tokyo");
  if (tokyo) {
    let tokyoDate = tokyo.querySelector(".date");
    let tokyoTime = tokyo.querySelector(".time");

    tokyoDate.innerHTML = moment().format(" MMMM Do YYYY");
    tokyoTime.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

updateTokyoTime();
setInterval(updateTokyoTime, 1000);

function updateParisTime() {
  let paris = document.querySelector("#paris");
  if (paris) {
    let parisDate = paris.querySelector(".date");
    let parisTime = paris.querySelector(".time");

    parisDate.innerHTML = moment().format(" MMMM Do YYYY");
    parisTime.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

updateParisTime();
setInterval(updateParisTime, 1000);

function updateSearchedCityData(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone);
  let citiesReplacedBySearch = document.querySelector("#cities");
  citiesReplacedBySearch.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate.format(" MMMM Do YYYY")}</div>
          </div>
    <div class="time">${cityDate.format("h:mm:ss [<small>]A[</small>]")}</div>
        </div>
        <a href="/">Return to all cities</a>`;
}

let selectCity = document.querySelector("#select");
selectCity.addEventListener("change", updateSearchedCityData);
