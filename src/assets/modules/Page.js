import { createStore } from 'vuex';

// global
const page = createStore({
    namespaced: true,
    state: {
        logeado: localStorage.getItem('logeado') == null ? false : localStorage.getItem('logeado'),
        backUrl: 'http://localhost:3001',//https://api-page-tmd.onrender.com
    },
    mutations: {
        setLogeado(state, logeado) {
            state.logeado = logeado;
        }
    },
});

export default page;