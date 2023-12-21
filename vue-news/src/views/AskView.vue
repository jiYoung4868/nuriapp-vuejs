<template>
  <div>
   <div v-for="item in fetchedAsk">{{  item.title  }}</div>
  </div>
  <!--item은 한번 접근할때 받아오는 값-->
</template>

<script>

import {mapState, mapGetters} from 'vuex';

export default {

  computed:{
    
    // 3번 방법
    //... ==> 배열 풀어주는 문법
    ...mapGetters([
      'fetchedAsk'
  ]),

    //   ...mapGetters({
    //   'fetchedAsk' : 'fetchedAsk'
    // }),

    // 2번 방법
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })

    // 1번 방법
    // ask(){
    //   return this.$store.state;
    // }
  },
  
//befoureMount나 create에서 data요청 많이함
//mounted는 화면이 다시그려지게 됨
  created(){
   this.$store.dispatch('FETCH_ASK');
},
}
</script>

<style>

</style>