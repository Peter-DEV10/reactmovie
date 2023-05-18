import Ltab from "./Ltab.jsx";
import Search from "./Search.jsx";
import Movie from "./Movie.jsx";
import Movie2 from "./Movie2.jsx";
import "./App.css";
import Image1 from "./assets/imgs/icon1.jpg";
// import Image2 from './assets/imgs/icon2.jpg'
// import Image3 from './assets/imgs/icon3.jpg'
// import Image4 from './assets/imgs/icon4.jpg'
// import Image5 from './assets/imgs/icon5.jpg'
// import Image6 from './assets/imgs/icon6.jpg'

function App() {
  return (
    <>
      <div className="all">
        <Search />
        <Ltab />

        <div id="header1">
          <h2>Trending movies </h2>
        </div>
        <div id="trend">
          <Movie
            bg="back5"
            year="2023"
            cat="Movie"
            quality="PG"
            name="THIRTEEN"
          />

          <Movie
            bg="back2"
            year="2022"
            cat="Series"
            quality="PG"
            name="The Friends"
          />

          <Movie
            bg="back3"
            year="2022"
            cat="Movie"
            quality="PG"
            name="The Dark Knight"
          />
        </div>

        <div id="header2">
          <h2>Recommended for you</h2>
        </div>
        <div id="recomend">
          <Movie2
            img="back6"
            year="2022"
            cat="TV series"
            quality="GE"
            name="technology"
          />
          <Movie2
            img="back2"
            year="2022"
            cat="TV series"
            quality="GE"
            name="movies show"
          />
          <Movie2
            img="back3"
            year="2022"
            cat="TV series"
            quality="GE"
            name="movies show"
          />

          <Movie2
            img="back5"
            year="2022"
            cat="TV series"
            quality="GE"
            name="mpvies show"
          />

          <Movie2
            img="back"
            year="2022"
            cat="TV series"
            quality="GE"
            name="movies show"
          />

          <Movie2
            img="back6"
            year="2022"
            cat="TV series"
            quality="GE"
            name="movie show"
          />

          <Movie2
            img="back"
            year="2022"
            cat="TV series"
            quality="GE"
            name="movie show"
          />

          <Movie2
            img="back2"
            year="2022"
            cat="TV series"
            quality="GE"
            name="movie show"
          />

          
        </div>
      </div>
    </>
  );
}

export default App;