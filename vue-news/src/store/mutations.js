export default{
    SET_NEWS(state, news) {
        state.news = news; // 전달받은 news가 state.news에 담김
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_USER(state, user){
        state.user = user;
    },
    SET_ITEM(state, item){
        state.item = item;
    },
    SET_LIST(state, list){
        state.list = list;
    },

}