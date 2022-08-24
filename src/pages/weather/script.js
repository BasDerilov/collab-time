import * as element from "./elements";

const baseUrl = "https://api.openweathermap.org";
const endpoint = "/data/2.5/weather";

const lat = 42.13534000695442;
const lon = 24.745143487313022;
const apiKey = "d77e443cb3bef5bb8c7d4dccea0ee875";

const args = `?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const req = new Request(`${baseUrl}${endpoint}${args}`);

async function DisplayWeather() {
  const resp = await fetch(req);
  const data = await resp.json();

  element.spinners.forEach((spinner) => {
    spinner.classList.add("visually-hidden");
  });

  element.temp.textContent = Math.round(data.main.temp / 10);
  element.tempMin.textContent = Math.round(data.main.temp_min / 10);
  element.tempMax.textContent = Math.round(data.main.temp_max / 10);
  element.humidity.textContent = data.main.humidity;
  element.desc.textContent = data.weather[0].description;
  
  element.status = document.createElement('i')
  element.status.classList.add('fa-solid')

  const groupId = data.weather[0].id;
  if (groupId === 800) {
    element.status.classList.add('fa-sun')
  } else if (groupId > 800) {
    element.status.classList.add('fa-cloud-sun')
  } else if (groupId > 700) {
    element.status.src = `${imageSource}7.png`;
  } else if (groupId > 600) {
    element.status.src = `${imageSource}6.png`;
  } else if (groupId > 500) {
    element.status.src = `${imageSource}800.png`;
  }
}

DisplayWeather();
