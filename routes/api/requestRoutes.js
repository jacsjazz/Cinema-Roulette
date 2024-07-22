const router = require('express').Router();

router.get('/', async (req, res) => {

   try {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.BEARER
    }
  };

  movie.innerHTML = ''
  let genres = "with_genres="
  const inputs = document.querySelectorAll('#checkboxForm >div>input')
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      genres += `${inputs[i].value}%2C` 
      console.log(genres)
    }
  }
  
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres28`, options)
    const data = await response.json()
    console.log(data)
    res.json(data)

   }
   catch(err) {
    res.json(err)
    console.log(err)

   }

})

module.exports = router;