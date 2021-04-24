import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import posts from '@/mocks/posts'
import users, {authUserID} from "@/mocks/users";

const FAV_KEY = "fav"

export default new Vuex.Store({
    state: {
        posts: [],
        users: [],
        favoritesIDs: [],
        authID: null,
    },

    getters: {
        getAuthID(state) {
            return state.authID
        },

        getAuthUser(state) {
            return state.users.find(u => u.id === state.authID)
        },

        getPosts(state) {
            return state.posts
        },

        getPostByID: (state) => (id) => {
            return state.posts.find(p => p.id == id)
        },

        getUserByID: (state) => (id) => {
            return state.users.find(u => u.id == id)
        },

        getUserPostsCount: (state) => (userID) => {
            return state.posts.filter(p => p.authorID == userID).length
        },

        getUserPosts: (state) => (userID) => {
            return state.posts.filter(p => p.authorID == userID)
        }
    },

    actions: {
        fetchData({commit}) {
            commit('setPosts', posts)
            commit('setAuthID', authUserID)
            commit('setUsers', users)

            const favs = JSON.parse(localStorage.getItem(FAV_KEY))
            if (!favs) {
                return
            }

            favs.forEach(f => commit('addFavorite', f))
        }
    },

    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },

        setUsers(state, users) {
            state.users = users
        },

        setAuthID(state, authID) {
            state.authID = authID
        },

        addFavorite(state, postID) {
            if (state.favoritesIDs.indexOf(postID) !== -1) {
                return
            }

            state.favoritesIDs.push(postID)
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favoritesIDs))
        },

        removeFavorite(state, postID) {
            const index = state.favoritesIDs.indexOf(postID)
            if (index === -1) {
                return
            }

            state.favoritesIDs.splice(index, 1)
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favoritesIDs))
        }
    },
})
