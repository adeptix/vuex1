import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLayout from "@/views/UserLayout";
import UserProfile from "@/views/UserProfile";
import UserPosts from "@/views/UserPosts";
import UserFavorite from "@/views/UserFavorite";
import PostPage from "@/views/PostPage";
import MainLayout from "@/views/MainLayout";
import AllPostsPage from "@/views/AllPostsPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
              path: '',
              name: 'allPostsPage',
              component:  AllPostsPage
            },

            {
                path: 'post/:id',
                name: 'postPage',
                component: PostPage
            },
            {
                path: 'user/:id',
                component: UserLayout,
                children: [
                    {
                        path: '',
                        name: 'userProfile',
                        component: UserProfile,
                    },
                    {
                        path: 'posts',
                        name: 'userPosts',
                        component: UserPosts,
                    },
                    {
                        path: 'favorite',
                        name: 'userFavorite',
                        component: UserFavorite,
                    }
                ]
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
