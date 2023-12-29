let APIKEY = "e74429c7";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("SearchBtn");

const Data = async (moviename) => {
  let fetchData = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=${APIKEY}&t=${moviename}`
  );
  document.querySelector(".card").innerHTML = "";
  let jsonData = await fetchData.json();
  let div = document.createElement("div");
  div.classList.add("details");
  div.innerHTML = `
  <div class="movie-img">
          <img src="${jsonData.Poster}" alt="" />
        </div>
        <div class="movie-details">
          <h1>Movie Title :${jsonData.Title}</h1>
          <span id="span">Ratings:${jsonData.Ratings[0].Value}</span>
          <button>${jsonData.Genre}</button>
        </div>
        <div class="movie-caption">
          <h2>Language:${jsonData.Language}</h2>
          <h3>Release Date:${jsonData.Released}</h3>
          <h3>Duration:${jsonData.Runtime}</h3>
          <p>
           ${jsonData.Plot}
          </p>
        </div>
  `;

  document.querySelector(".card").appendChild(div);
  // console.log(APIKEY);
  console.log(jsonData);
  // console.log(jsonData.Actors);
  // console.log(jsonData.Title);
  // console.log(jsonData.Genre);
  // console.log(jsonData.Language);
  // console.log(jsonData.Plot);
  // console.log(jsonData.Poster);
  // console.log(jsonData.Released);
  // console.log(jsonData.Runtime);
  // console.log(jsonData.Ratings[0]);
  // console.log(jsonData.Ratings[0].Value);
};
searchBtn.addEventListener("click", function () {
  let moviename = searchInput.value;
  if (moviename != "") {
    Data(moviename);
  } else {
    alert("PLease Enter Movie Name First");
  }
});
