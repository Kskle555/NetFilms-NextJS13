import React from 'react'
import MovieContainer from '@/containers/Movie'
import Movies from '@/mocks/movies.json'
import { notFound } from 'next/navigation'
export default function MoviePage({params,searchParams}) {
    const movieDetail = Movies.results.find(movie=>movie.id.toString()===params.id);

    if(!movieDetail){
        notFound()
    };

    if (searchParams.error==="true") {
        throw new Error("Error happened");
    }
  return (
   <MovieContainer movie={movieDetail}/>
  )
}
