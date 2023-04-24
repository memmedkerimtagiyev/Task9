const foto1 = document.querySelector(".foto1")
const foto2 = document.querySelector(".foto2")
const foto3 = document.querySelector(".foto3")
let esasFoto = document.getElementById("esasFoto")

foto1.onclick = function () {
    esasFoto.setAttribute("src", "https://imgs.search.brave.com/LJDZyFRnM9NF0GeKW9UNVgvFLXt8DWOOA5_Xq4VvT4k/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pZG93bmxvYWRi/bG9nLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wMy9W/aWV3LUhUTUwuanBn")
}

foto2.onclick = function () {
    esasFoto.setAttribute("src", "https://imgs.search.brave.com/pLN_UFrcHnbrn9aZ6wXDUJIBqj5cgdTWeETUHkWv4lQ/rs:fit:960:550:1/g:ce/aHR0cHM6Ly93d3cu/Y29kZXNwb3Qub3Jn/L2Fzc2V0cy9jc3Mu/anBn")
}

foto3.onclick = function () {
    esasFoto.setAttribute("src", "https://imgs.search.brave.com/4O6hNzTC2OaG5k5YTJLJEoESxA1H30akuvgz4cpJG-I/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/anNfbG9nby5wbmc")
}