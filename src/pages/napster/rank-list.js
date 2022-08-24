async function getData() {
  let obj = {};
  let url = "https://api.napster.com/v2.2/tracks/top?limit=50&apikey=MzdhZDE3OTMtZDI0ZC00YmQ4LWI1ODEtOGNiOTdiYTQwMWM0";
  obj = await fetch(url).then((response) => response.json());
  return obj;
}
export async function GetMusic() {
  let data = await getData();
  const artist = [];
  data.tracks.forEach((element, index) => {
    const { artistName, albumName, name, previewURL, ...rest } = element;
    let artistObj = { artistName:`${artistName}`,albumName:`${albumName}`, name:`${name}`, previewURL:`${previewURL}` };
    artist.push(artistObj)
  });
  return artist;
}
