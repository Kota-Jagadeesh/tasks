import React from 'react';
import styles from '../styles/dashboard.module.css';

const movies = [
  '/movie1.png',
  '/movie2.png',
  '/movie3.png',
  '/movie4.png',
  '/movie5.png',
  '/movie6.png',
  '/movie7.png',
  '/movie8.png',
  '/movie9.png',
  '/movie10.png',
];

export default function dashboard() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>🔥 Trending Movies</h1>
      <button className={styles.watchButton}>Click Here To Watch A Movie !!</button>
      <div className={styles.grid}>
        {movies.map((src, index) => (
          <img key={index} src={src} className={styles.poster} alt={`movie-${index}`} />
        ))}
      </div>
    </div>
  );
}
