import axios from 'axios';

// 1. HTTP Request & Response 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList(){
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`); //.json 추가$$$$
}
function fetchCommentItem(id){
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

// 3. 꺼내주기
export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchCommentItem
}

// const api = {
//     news: 'https://api.hnpwa.com/v0/news/1.json',
//     ask: 'https://api.hnpwa.com/v0/ask/1.json',
//     jobs: 'https://api.hnpwa.com/v0/jobs/1.json',
//     user: 'https://api.hnpwa.com/v0/user/',
//     item: 'https://api.hnpwa.com/v0/item/'
// };

// function fetchNews() {
//     return axios.get(api.news);
// }

// function fetchAsk() {
//     return axios.get(api.ask);
// }

// function fetchJobs() {
//     return axios.get(api.jobs);
// }

// function fetchUser(id) {
//     const url = `${api.user}${id}.json`;
//     return axios.get(url);
// }

// function fetchItem(id) {
//     const url = `${api.item}${id}.json`;
//     return axios.get(url);
// }

// export {
//     fetchNews,
//     fetchAsk,
//     fetchJobs,
//     fetchUser,
//     fetchItem
// }