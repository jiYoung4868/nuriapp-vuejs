<template>
  <div>
    <p v-for="item in this.$store.state.news" :key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
  <small>
    {{ item.time_ago }} by 
         <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
    <!-- <router-link v-bind:to="'/user' + item.user">{{ item.user }}</router-link> -->
    </small>
    </p>
    </div>
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

<style>
</style>