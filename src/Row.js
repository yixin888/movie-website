import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from './axios';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow  }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
     //  点击每一行row的视频，它都有反应，可以进去看电影，也就是点击链接
     //  空的[] , 代表 run once when the row loads, and don't run it again
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
    
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(error => console.log(error));
        }
    };

    return (
        <div className="row">
             <h2>{title}</h2>

             <div className="row__posters">
                 {/* row__posters */}

                 {movies.map(movie => (
                     <img 
                     key={movie.id}
                     onClick={() => handleClick(movie)}
                      className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                      src={`${base_url}${
                          isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                          alt={movie.name} 
                     />
                 ))}
             </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            
        </div>
    );
}

export default Row;
