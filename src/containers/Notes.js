
import React from 'react';
import { withRouteData, Link } from 'react-static';
import Markdown from 'react-markdown';
import { post } from '../notes/post-1.js';
import ImageComponent from './ImageComponent';
//

export default withRouteData(({ posts }) => (
  <div className="notes-wrapper">
    <ImageComponent />
    <div className="content">
      <h1 style={{fontWeight: '100'}}>Some thoughts.</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/notes/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
));
