import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);
//vuex 는 상태 관리 도구를 의미함


export const store = new Vuex.Store({
    // strict: process.env.NODE_ENV !== 'production',
state: {
    news: [],
    jobs: [], //빈배열만들기
    ask: [],
    user: {},
    item: {},
    list: [],
},
mutations,
getters: {
    fetchedAsk(state){
        return state.ask;
    },
    fetchedItem(state){
        return state.item;
    }
},
actions
});
