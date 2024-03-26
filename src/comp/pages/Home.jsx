/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Nav } from '../main/Nav';
import { Post } from '../utility/Post';
import './style/Home.scss';

// Home component
export function Home() {
  // Posts
  const posts = [...new Array(25)];

  // Render Home
  return (
    <div id="home">
      <Nav />
      {posts.map((pbj, index) => (
        <Post key={`${index.toString()}`} />
      ))}
    </div>
  );
}
