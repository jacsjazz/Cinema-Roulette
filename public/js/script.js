const movie = document.querySelector('#movies')




const apiRequest = async (event) => {
    event.preventDefault();
    let genres = []
    movie.innerHTML = ''
    const inputs = document.querySelectorAll('#checkboxForm >div>input')
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
        genres.push(inputs[i].value)
        console.log(genres)
        }
    }

    const response = await fetch(`/api/request/?genres=${genres}`, {
        method: 'GET',

    });
    const movies = await response.json()
    console.log(movies)
    for (let i = 0; i < 10; i++) {
        console.log(movies)
        console.log(movies.results[i])
        const card = document.createElement('div')
        const movieName = document.createElement('h2')
        const movieImage = document.createElement('img')
        movieName.textContent = movies.results[i].title
        movieImage.src = `https://image.tmdb.org/t/p/w200/${movies.results[i].poster_path}`
        card.appendChild(movieName)
        card.appendChild(movieImage)
        movie.appendChild(card)
      }
    }



document
    .querySelector('#submit')
    .addEventListener('click', apiRequest);



