import { GetMusic } from "./rank-list"

const container = document.getElementById('songList')
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('previous')

let curIndex = 0

const pages = []

GetMusic().then((data) => {
    GenerateLists(data)
    RenderSongs(pages[curIndex])
})

nextButton.addEventListener('click', () => {
    curIndex++
    RenderSongs(curIndex)
}) 

prevButton,addEventListener('click', () => {
    if (curIndex > 0) {
        curIndex--
        RenderSongs(curIndex)
    }
})

function RenderSongs(index) {
    container.innerHTML = ''
    container.appendChild(pages[curIndex])
}

function GeneratePage(songs) {

    const slide = document.createElement('div')

    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        slide.innerHTML += CreateElement(song)
        
    }

    return slide
}


function CreateElement(songData) {

    const data = `<div style="z-index: 2000" class="mt-1 align-self-center ml-2 mr-2 bg-secondary rounded p-3">
    <h3>${songData.name}</h3>
    <p class="m-0">Autho: <span>${songData.artistName}</span></p>
    <p class="mt-0">Album: <span>${songData.albumName}</span></p>
    <audio controls>
      <source
      src="${songData.previewURL}" />
    </audio>
  </div>`



  return data
}

function GenerateLists(songs) {
    for (let i = 0; i < songs.length; i+=4) {

        pages.push(GeneratePage(songs.slice(i, i+4)))

    }
}