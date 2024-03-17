import React from "react";
import "./Frontpage.scss";
import { RiHomeFill } from "react-icons/ri";
import { RiCommunityLine } from "react-icons/ri";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { CiVirus } from "react-icons/ci";
import { MdLocalMovies } from "react-icons/md";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
const Frontpage = () => {
  return (
    <div className="container">
      <section className="sidebar">
        <div className="sidebar-heading">
          <CiVirus className="icon" />
          <h1 className="heading">Exxom</h1>
        </div>

        <div className="sidebar-menu">
          <ul className="sidebar-list">
            <h2 className="list-heading">You</h2>
            <li className="list-items item">
              <RiHomeFill className="list-items__icon active" />
              Home
            </li>
            <li className="list-items">
              <RiCommunityLine className="list-items__icon" />
              Discovery
            </li>
            <li className="list-items">
              <RiCompassDiscoverLine className="list-items__icon" />
              Coming
            </li>
            <li className="list-items">
              <FaRegCompass className="list-items__icon" />
              Community
            </li>
          </ul>

          <ul className="sidebar-list">
            <h2 className="list-heading">Explore</h2>

            <li className="list-items">
              <MdLocalMovies className="list-items__icon" />
              New Movies
            </li>
            <li className="list-items">
              <RiCompassDiscoverLine className="list-items__icon" />
              trending
            </li>
          </ul>
        </div>
      </section>

      <main className="main-section">
        <header className="header">
          <nav className="nav-items">
            <ul className="nav-items__list">
              <li className="nav-items__header-list">Tv Series</li>
              <li className="nav-items__header-list  secondlist">Movies</li>
              <li className="nav-items__header-list">Animes</li>
            </ul>
          </nav>
        </header>
        <div className="main-cover__photo">
          <div className="reviews">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.qNf5AwoaRZu527i9i9DCzAHaEh&pid=Api&P=0&h=180"
              alt=""
              className="review-img"
            />
            <img
              src="https://hdqwalls.com/wallpapers/kevin-hart-jumanji-the-next-level-88.jpg"
              alt=""
              className="review-img"
            />
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.mktJbTzOGv1aq7DRA2XytwHaEK&pid=Api&P=0&h=180"
              alt=""
              className="review-img"
            />
            <div className="reviews-para">Lorem ipsum dolor sit .</div>
          </div>

          <div className="right-icon">
            <FaCircleChevronRight />
          </div>
          <div className="moviename">
            <h1 className="moviename-heading">Jumaan ji</h1>
            <p className="moviename-detail">
              Lorem ipsum, dolor adipisicing elit.{" "}
            </p>
            <div className="moviename-buttons">
              <button className="movie-watch">Watch</button>
              <button className="moviename-add">+</button>
            </div>
          </div>
        </div>

        {/* Best artist movies header*/}

        <div className="artist-header">
          <h3 className="artist-heading">Best Artists</h3>
          <div className="artist-icons">
            <FaCircleChevronLeft className="artist-left" />
            <FaCircleChevronRight className="artist-right" />
          </div>
        </div>

        {/*Best artist movies  */}

        <div className="best-movies">
          <div className="best-movies__movie">
            <img
              src="https://yt3.ggpht.com/ytc/AAUvwnjatDDOE2dJe5p63rNmwgGQNUMLNbV1oJ3zsK8A=s800-c-k-c0x00ffffff-no-rj"
              alt=""
              className="best-movies__movieimg"
            />

            <div className="best-movie__btn">
              <button className="btn">+</button>
            </div>
            <div className="best-movies__details">
              <h1 className="best-movies__name">charle Thoron</h1>
              <p className="best-movies-plus">+12 Movies</p>
              <div className="best-movie__stars-icon">
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
              </div>
            </div>
          </div>

          <div className="best-movies__movie">
            <img
              src="https://www.boredart.com/wp-content/uploads/2015/01/famous-movie-posters-of-All-time-Hollywood-28.jpg"
              alt=""
              className="best-movies__movieimg"
            />
            <div className="best-movie__btn ">
              <button className="btn activebtn">+</button>
            </div>
            <div className="best-movies__details">
              <h1 className="best-movies__name">Pirati Caraibi</h1>
              <p className="best-movies-plus">+12 Movies</p>
              <div className="best-movie__stars-icon">
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
              </div>
            </div>
          </div>

          <div className="best-movies__movie">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.4f-EpnjKaiNaCjrQ2x4qIQHaEo&pid=Api&P=0&h=180"
              alt=""
              className="best-movies__movieimg"
            />
            <div className="best-movie__btn">
              <button className="btn">+</button>
            </div>
            <div className="best-movies__details">
              <h1 className="best-movies__name">charle Thoron</h1>
              <p className="best-movies-plus">+16 Movies</p>
              <div className="best-movie__stars-icon">
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="artist-header">
          <h3 className="artist-heading">Best Artists</h3>
          <div className="artist-icons">
            <FaCircleChevronLeft className="artist-left" />
            <FaCircleChevronRight className="artist-right" />
          </div>
        </div>

        {/*Best artist movies  */}

        <div className="best-movies">
          <div className="best-movies__movie">
            <img
              src="https://yt3.ggpht.com/ytc/AAUvwnjatDDOE2dJe5p63rNmwgGQNUMLNbV1oJ3zsK8A=s800-c-k-c0x00ffffff-no-rj"
              alt=""
              className="best-movies__movieimg"
            />

            <div className="best-movie__btn">
              <button className="btn">+</button>
            </div>
            <div className="best-movies__details">
              <h1 className="best-movies__name">charle Thoron</h1>
              <p className="best-movies-plus">+12 Movies</p>
              <div className="best-movie__stars-icon">
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
              </div>
            </div>
          </div>

          <div className="best-movies__movie">
            <img
              src="https://www.boredart.com/wp-content/uploads/2015/01/famous-movie-posters-of-All-time-Hollywood-28.jpg"
              alt=""
              className="best-movies__movieimg"
            />
            <div className="best-movie__btn ">
              <button className="btn activebtn">+</button>
            </div>
            <div className="best-movies__details">
              <h1 className="best-movies__name">Pirati Caraibi</h1>
              <p className="best-movies-plus">+12 Movies</p>
              <div className="best-movie__stars-icon">
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
              </div>
            </div>
          </div>

          <div className="best-movies__movie">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.4f-EpnjKaiNaCjrQ2x4qIQHaEo&pid=Api&P=0&h=180"
              alt=""
              className="best-movies__movieimg"
            />
            <div className="best-movie__btn">
              <button className="btn">+</button>
            </div>
            <div className="best-movies__details">
              <h1 className="best-movies__name">charle Thoron</h1>
              <p className="best-movies-plus">+16 Movies</p>
              <div className="best-movie__stars-icon">
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
                <IoStarSharp className="stars-icon" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="right-part">
        <div className="search">
          <IoSearchSharp className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        <h1 className="popular-heading">Popular movies</h1>

        {/* first */}

        <div className="movie-section">
          <div className="popularmovie-section">
            <img
              src="https://i.ytimg.com/vi/z6ikcmqGcGg/maxresdefault.jpg"
              alt=""
              className="popularmovie-section__img"
            />
            <div className="populrmovie-details">
              <h1 className="populrmovie-details__heading">John work</h1>
              <p className="populrmovie-details__para">para para</p>
              <div className="rate">
                <p className="experience">887</p>
                <p className="average">7.6</p>
              </div>
            </div>
          </div>

          {/* second */}

          <div className="popularmovie-section">
            <img
              src="https://i.pinimg.com/originals/29/4c/40/294c40e587c9bccb1627c5227d90b3bf.jpg"
              alt=""
              className="popularmovie-section__img"
            />
            <div className="populrmovie-details">
              <h1 className="populrmovie-details__heading">John work</h1>
              <p className="populrmovie-details__para">para para</p>
              <div className="rate">
                <p className="experience">887</p>
                <p className="average">7.6</p>
              </div>
            </div>
          </div>

          {/* third */}

          <div className="popularmovie-section">
            <img
              src="https://i.pinimg.com/originals/b4/69/4b/b4694b4a1df2a468ed94a3114d9c0b64.jpg"
              alt=""
              className="popularmovie-section__img"
            />
            <div className="populrmovie-details">
              <h1 className="populrmovie-details__heading">John work</h1>
              <p className="populrmovie-details__para">para para</p>
              <div className="rate">
                <p className="experience">887</p>
                <p className="average">7.6</p>
              </div>
            </div>
          </div>

          <div className="show-btn">
            <button className="show">Show more</button>
          </div>
        </div>

        {/* secont movie section of right part */}
        <h1 className="popular-heading">Favorities movies</h1>

        {/* first */}

        <div className="movie-section">
          <div className="popularmovie-section">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.9RQq34KOh_CypCe4_yk8LwHaEo&pid=Api&P=0&h=180"
              alt=""
              className="popularmovie-section__img"
            />
            <div className="populrmovie-details">
              <h1 className="populrmovie-details__heading">John work</h1>
              <p className="populrmovie-details__para">para para</p>
              <div className="rate">
                <p className="experience">887</p>
                <p className="average">7.6</p>
              </div>
            </div>
          </div>

          {/* second */}

          <div className="popularmovie-section">
            <img
              src="https://trendpickle.com/wp-content/uploads/2019/01/maxresdefault-3.jpg"
              alt=""
              className="popularmovie-section__img"
            />
            <div className="populrmovie-details">
              <h1 className="populrmovie-details__heading">John work</h1>
              <p className="populrmovie-details__para">para para</p>
              <div className="rate">
                <p className="experience">887</p>
                <p className="average">7.6</p>
              </div>
            </div>
          </div>

          {/* third */}

          <div className="popularmovie-section">
            <img
              src="https://pbs.twimg.com/media/C9nFQsIVoAEit4O.jpg"
              alt=""
              className="popularmovie-section__img"
            />
            <div className="populrmovie-details">
              <h1 className="populrmovie-details__heading">John work</h1>
              <p className="populrmovie-details__para">para para</p>
              <div className="rate">
                <p className="experience">887</p>
                <p className="average">7.6</p>
              </div>
            </div>
          </div>

          <div className="show-btn">
            <button className="show">Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
