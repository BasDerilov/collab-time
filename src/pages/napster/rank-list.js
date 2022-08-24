// async function getData(){
// const data = await fetch("https://api.napster.com/v2.2/artists/Art.28463069/albums?apikey=MzdhZDE3OTMtZDI0ZC00YmQ4LWI1ODEtOGNiOTdiYTQwMWM0")
//   .then(res=>console.log(res))
//   console.log(data)
// }

async function getData() {
  let obj = {};
  let url = "https://api.napster.com/v2.2/tracks/top?limit=5&apikey=MzdhZDE3OTMtZDI0ZC00YmQ4LWI1ODEtOGNiOTdiYTQwMWM0";
  obj =await fetch(url).then(response => response.json())

    return obj;
}

 async function f1() {
  let data = await getData();
  console.log(data);
}

f1();
