import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '../api/index.js';

export default{
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log("[jy]response.data: " + response.data)
                // state.news = response.data; //state에 바로 담을 수 없어서 context 이용하여 mutation 호출
                context.commit('SET_NEWS', response.data); //mutations 호출
            })
            .catch(error => {
                console.log("[jy]error: " + error);
            });
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                console.log("[jy] response.data: " + data)
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log('[jy]error: ' + error);
            });
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                console.log("[jy] response.data: " + data)
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log('[jy]error: ' + error);
            });
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log('[jy]error: ' + error);
        });

    }
}
