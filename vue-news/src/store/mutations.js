export default{
    SET_NEWS(state, news) {
        state.news = news; // 전달받은 news가 state.news에 담김
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    }

}