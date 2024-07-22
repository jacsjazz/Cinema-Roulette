// document
// .querySelector('.login-form')
// .addEventListener('submit', loginFormHandler);

// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in');
//     }
//   }
// };

const movie = document.querySelector('#movies')
const submit = document.querySelector('#submit')



function getRecipeUsa() {
  movie.innerHTML = ''
  let genres = "with_genres="
  const inputs = document.querySelectorAll('#checkboxForm >div>input')
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      genres += `${inputs[i].value}%2C` 
      console.log(genres)
    }
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU0YWY3MjYyM2ZkOTMyNzQyZmI2MDZjNTM5YzdhNiIsIm5iZiI6MTcyMTU4MTIxNi45MzQ4NDEsInN1YiI6IjY2OTVkNDI1Y2Y5Y2E2NDExZDQ4ZDU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RfSj7N4FCt30JrJd0FK7L6R5_Nci_vaPWsBSXcJqgQM'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${genres}`, options)
    .then(response => response.json())
    .then(function (movies) {
      for (let i = 0; i < 10; i++) {
        console.log(movies)
        console.log(movies.results[i])
           const card = document.createElement('a')
           const movieName = document.createElement('h2')
           const movieImage = document.createElement('img')
           movieName.textContent = movies.results[i].title
           movieImage.src = `https://image.tmdb.org/t/p/w200/${movies.results[i].poster_path}`
           card.appendChild(movieName)
           card.appendChild(movieImage)
           movie.appendChild(card)
           
      }
    })

  // .catch(err => console.error(err));
}



submit.addEventListener('click', function(event){
event.preventDefault()
getRecipeUsa()

})