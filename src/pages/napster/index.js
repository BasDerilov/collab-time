import { GetMusic } from "./rank-list"

const container = document.getElementById('songList')

DisplaySongs()

async function DisplaySongs() {
    const songs = await GetMusic()
    console.log(songs)

    songs.forEach(song => {
        container.appendChild(CreateElement(song))
        
    });
}

function CreateElement(songData) {

    const data = `<div class="bg-secondary rounded p-3">
    <h3>${songData.name}</h3>
    <p class="m-0">Autho: <span>${songData.artistName}</span></p>
    <p class="mt-0">Album: <span>${songData.albumName}</span></p>
    <audio controls>
      <source
      src="${songData.previewURL}" />
    </audio>
  </div>`

  const element = document.createElement('div')
  element.innerHTML = data

  return element
}