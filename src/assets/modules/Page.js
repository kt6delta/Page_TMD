import { createStore } from 'vuex';
//import maquinas from './Maquinas';

// global
const page = createStore({
    namespaced: true,
    state: {
        logeado: localStorage.getItem('logeado') == null ? false : localStorage.getItem('logeado'),

    },
    mutations: {
        setLogeado(state, logeado) {
            state.logeado = logeado;
          }
    },
    modules: {
        // maquinas,
    }
});

export default page;