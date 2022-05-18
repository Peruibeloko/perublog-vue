import { createRouter, createWebHistory } from 'vue-router';

import { urlEncodeObjectValues } from './util/misc.js';

import Home from './pages/Home.vue';
import Blog from './pages/Blog.vue';
import Portfolio from './pages/Portfolio.vue';
import Login from './pages/Login.vue';

import Post from './components/blog/Post.vue';
import PostList from './components/blog/PostList.vue';
import Composer from './components/admin/Composer.vue';

import { isLoggedIn } from './util/auth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: '',
          name: 'blog',
          component: PostList
        },
        {
          path: ':postId',
          name: 'post',
          component: Post,
          props: true
        }
      ]
    },
    {
      path: '/admin/compose/:id?',
      name: 'composer',
      component: Composer,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    }
  ]
});

router.beforeEach(async (to, from) => {
  if (to.name !== 'login' && to.meta.requiresAuth && !(await isLoggedIn())) {
    return {
      name: 'login',
      query: urlEncodeObjectValues({
        name: to.name,
        params: to.params,
        query: to.query
      })
    };
  }
});

export default router;
