import React from 'react';
import { withRouteData, Link } from 'react-static';
import Markdown from 'react-markdown';
//

export default withRouteData(({ post }) => (
  <div className="content">
    <Link to="/notes/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <Markdown
        escapeHtml={false}
        source={post.body}/>
  </div>
))
