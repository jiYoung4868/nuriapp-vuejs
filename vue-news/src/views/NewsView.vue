<template>
  <div>
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
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
//     // 호출 전:  VueComponent {_uid: 6, _isVue: true, __v_skip: true, _scope: EffectScope, $options: {…}, …}
//     fetchNewsList()
//     .then(function(response) {
//       console.log('호출 후: ', this);
//       // 호출 후:  undefined
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