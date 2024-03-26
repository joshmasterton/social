/* eslint-disable import/prefer-default-export */
import React from 'react';
import { GiPerson } from 'react-icons/gi';
import './style/Post.scss';

// Post component
export function Post() {
  // Render Post
  return (
    <div className="post">
      <h1>
        <GiPerson />
      </h1>
    </div>
  );
}
