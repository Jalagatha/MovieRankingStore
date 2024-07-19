
    fetch('https://freetestapi.com/api/v1/movies').then((data)=>{
    return data.json();})
    .then((completed)=>{
    let data1 ="";
    completed.map((values)=>{
    
        data1 +=` <div class="card">
    <h1 class="title">${values.title}</h1>
<video controls muted height="200" width="320">
  <source src="${values.trailer.mp4}" type="video/mp4">
</video>
     
    <p>${values.plot}</p>
    <p class="genre">${values.genre}</p>
    <p class="year">${values.year}</p>
    <p class="director">Directed By: ${values.director}</p>
    <p class="rating">Rating: ${values.rating}</p>
     <button>View Movie</button>
    </div> `;
    });
    document.getElementById("cards").innerHTML=data1
    }).catch((error)=>{
    console.log("Error", error);
    })