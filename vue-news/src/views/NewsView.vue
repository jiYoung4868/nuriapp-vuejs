<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            by <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li></ul></div>

</template>

<script>

// import {fetchNewsList } from '../api/index.js';

export default {
//   data(){
//     return {
//     users: []
//   }
// }, 
  created() {

    this.$store.dispatch('FETCH_NEWS');

    // // var vm = this; //전역
    // console.log('호출 전: ', this);
    // // 1
    // fetchNewsList()
    // .then(response => {
    //   console.log('호출 후: ', this);
    //   //2
    //   this.users = response.data;
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
  },
}

// export default {

//   data(){
//     return {
//       users: []
//     }
//   },
//   created() {
//     // var vm = this; //전역
//     console.log('호출 전: ', this);
//     fetchNewsList()
//     .then(function(response) {
//       console.log('호출 후: ', this);
//       // console.log(response);
//       // vm.users = response.data;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
//   },
// }




</script>

<style scoped>
.news-list{
  margin: 0;
  padding: 0;
}
.post{
list-style:none;
display: flex;
align-items: center;
border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
margin: 0;
}
.link-text{
  color: #828282;
}

</style>