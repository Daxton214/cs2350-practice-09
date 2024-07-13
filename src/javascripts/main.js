//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


import{movies} from './movies'// here we are saying to import the JS movie file. the dot is saying that this file movie is in the same folder

for (let m of movies){
    let m_thumb = document.getElementById('m' + m.id)// The 'm' is so we can access the id for our m1 etc. So m will go through the movie array. So we do m.id to get the ids from the movie array. The documnet object gives access to the broswer. The  m_thumb access that m element and add html to it 
    m_thumb.innerHTML = `
    <img src="${m.poster}" alt="${m.title}" class="img-thumbnail" />
    `
    m_thumb.onclick = function(){
        displayMovie(m)
    }
}// the ticks '' are used for a mult line string. ${} is called enter interpolation then we put the m.poster to get the img for poster which is the property to get the value which is the img
// for the class we need something that works with bootstrap. the class that works with that is above.
// m_thumb this is our element. onclick is an action which is a function. so we create a function. from here we can just call a function to displayMovie and we pass it the movie we want to display. Becuase we are still inside the function that uses m we can simply pass the letter m

let featured_movie = document.querySelector(".featured") // here we do documnet to get access to the broswer. We are then trying to get access to that featred element by its class. So we do query selector. we use dot before featred because its a class
function displayMovie(movie){
    featured_movie.innerHTML = `
     <div class="card">
            <div class="card-header">${movie.title} </div>
          <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title"><small>${movie.year},${movie.genre}</small></h5>
            <p class="card-text">${movie.plot}</p>
          </div>
          <div class="card-footer text-body-secondary">
           <div class="row row-cols-3">
            <div class="col"><strong>Rating:</strong>${movie.rating}</div>
            <div class="col"><strong>Rated:</strong>${movie.rated}</div>
            <div class="col"><strong>Votes:</strong>${movie.votes}</div>
           </div>
          </div>
        </div>
    `
}

function searchMovies(event){
    event.preventDefault()

    let input = document.querySelector('[type="search"]').value || ""
    let count = 0
    for (let m of movies){
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.querySelector(`#m${m.id}`).classList.add('d-none')
        }else{
            document.querySelector(`#m${m.id}`).classList.remove('d-none')
            count++
        }
    }
    featured_movie.innerHTML = count == 0 ? 'Nothing was found' : ''
}
document.querySelector("button").onclick = searchMovies
document.querySelector('[type="search"]').onsearch = searchMovies
document.querySelector("form").onsubmit = searchMovies



// I have a question why do we not say m.id? how does it know to get the proper img. as well as displaying the img how does it know to grab the id from the movies.js
//for our featrued where is this at for it to be a function? Also what and how does card-img-top.