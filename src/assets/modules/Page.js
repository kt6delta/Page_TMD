import { createStore } from 'vuex';
// global
const page = createStore({
    namespaced: true,
    state: {
        token: localStorage.getItem('token') == null ? false : localStorage.getItem('token'),
        backUrl: 'http://localhost:3001',//https://api-page-tmd.onrender.com
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        clearToken(state) {
            state.token = false;
            localStorage.removeItem('token');
        }
    },
});

export default page;