import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
const state = {
    color: '#01bf8e'
}

const mutations = {
    change(state, val) {
        state.color = val;
        console.log(state.color);
    }
}

export default new vuex.Store({
    state,
    mutations
})