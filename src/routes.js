import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Blog from './pages/Blog.vue';
import Portfolio from './pages/Portfolio.vue';

import Post from './components/blog/Post.vue';
import PostList from './components/blog/PostList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    component: Blog,
    children: [
      { path: '', name: 'blog', component: PostList },
      { path: ':postId', name: 'post', component: Post, props: true }
    ]
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
