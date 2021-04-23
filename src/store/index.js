import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import posts from '@/mocks/posts'
import users, {authUserID} from "@/mocks/users";


export default new Vuex.Store({
    state: {
        posts: posts,
        users: users,
        favoritesIDs: [],
        authID: authUserID,
    },

    getters: {
        getAuthUser(state) {
            return state.users.find(u => u.id === state.authID)
        },

        getPosts(state){
            return state.posts
        }
    },

    mutations: {},

    actions: {},


    modules: {}
})
