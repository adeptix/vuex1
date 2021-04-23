import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLayout from "@/views/UserLayout";
import UserProfile from "@/views/UserProfile";
import UserPosts from "@/views/UserPosts";
import UserFavorite from "@/views/UserFavorite";
import PostPage from "@/views/PostPage";
import MainLayout from "@/views/MainLayout";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainLayout',
    component: MainLayout
  },
  {
    path: '/posts/:id',
    name: 'postPage',
    component: PostPage
  },
  {
    path: 'user/:id',
    name: 'userLayout',
    component: UserLayout,
    children: [
      {
        path: '',
        name: 'user',
        component: UserProfile,
      },
      {
        path: 'posts',
        name: 'posts',
        component: UserPosts,
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: UserFavorite,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
