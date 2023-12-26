import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default{
    FETCH_NEWS(context) {
        return fetchNewsList()
            .then(response => {
                console.log("[jy]response.data: " + response.data)
                // state.news = response.data; //state에 바로 담을 수 없어서 context 이용하여 mutation 호출
                context.commit('SET_NEWS', response.data); //mutations 호출
                return response;
            })
            .catch(error => {
                console.log("[jy]error: " + error);
            });
    },
    FETCH_JOBS({ commit }) {
        return fetchJobsList()
            .then(({ data }) => {
                console.log("[jy] response.data: " + data)
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log('[jy]error: ' + error);
            });
    },
    FETCH_ASK({ commit }) {
        return fetchAskList()
            .then(({ data }) => {
                console.log("[jy] response.data: " + data)
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log('[jy]error: ' + error);
            });
    },
    FETCH_USER({ commit }, name){
        return fetchUserInfo(name)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log('[jy]error: ' + error);
        });


    },
    FETCH_ITEM({ commit }, id){
        return fetchCommentItem(id)
        .then(({ data }) => {
            console.log("[jy] data: "+data)
            console.log("hello")
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log("[jy] error: " + error);
        });
    
    },
    //#2
    FETCH_LIST({commit}, pageName){
        return fetchList(pageName)
        .then(response => {
            console.log(4);
            commit('SET_LIST', response.data);
            return response;
        })
        .catch(error => console.log(error));
        
        // //#3
        // return fetchList(pageName)
        // //#4
        // .then(({data}) => commit('SET_LIST', data))
        // .catch(error => console.log(error));
    },
}
