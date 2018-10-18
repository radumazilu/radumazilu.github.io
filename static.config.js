import axios from 'axios';
import { postBody } from './src/notes/post-1.js';

export default {
  getSiteData: () => ({
    title: 'rm',
  }),
  getRoutes: () => {
    const posts = [{
      'id': 1,
      'body': postBody,
      'title': 'Post Example'
    }];
    return [
      {
        path: '/',
        component: 'src/containers/Base',
      },
      {
        path: '/notes',
        component: 'src/containers/Notes',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
