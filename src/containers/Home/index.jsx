import React from 'react'
import Movies from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json'
import { FeaturedMovie } from '@/components/Featured-movie';
import Categories from '@/components/Categories';
import MoviesSection from '@/components/movies-section';
export default function HomeContainer({selectedCategory}) {
  return (
    <div>
        <FeaturedMovie movie={Movies.results[0]}/>
       <Categories categories={Genres.genres.slice(0,5)}/>
       {
          selectedCategory.movies?.length > 0 &&
          <MoviesSection title={Genres.genres.find(genre=>`${genre.id}`===selectedCategory.id).name} movies={selectedCategory.movies}/>
       }
      
       <MoviesSection title="Popular films" movies={Movies.results.slice(1,7)}/>
       <MoviesSection title="Your Favorites" movies={Movies.results.slice(7,13)}/>
    </div>
  )
}
