async function getData() {
  let obj = {};
  let url = "https://api.napster.com/v2.2/tracks/top?limit=5&apikey=MzdhZDE3OTMtZDI0ZC00YmQ4LWI1ODEtOGNiOTdiYTQwMWM0";
  obj = await fetch(url).then((response) => response.json());
  return obj;
}
async function f1() {
  let data = await getData();
  const artist = [];
  // let trackName  ===name in object
  // let playMusic ===previewURL in Object
  // selectedProperty = data.tracks.map(arr=>{

  // })
  data.tracks.forEach((element, index) => {
    const { artistName, albumName, name, previewURL, ...rest } = element;
    let artistObj = { artistName:`${artistName}`,albumName:`${albumName}`, name:`${name}`, previewURL:`${previewURL}` };
    artist.push(artistObj)
  });
  console.log(artist)
}
f1();
