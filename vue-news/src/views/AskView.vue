<template>
  <div>
    <list-item></list-item>
    <!-- <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="'item/' + item.id">{{ item.title }}</router-link>
          </p>
          <small class="link-text">{{ item.time_ago }} 
            by <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li></ul></div> -->
    </div>
</template>

<script>

import ListItem from '../components/ListItem.vue';

// import {mapGetters} from 'vuex';

export default {

  components: {
    ListItem
  },

//   computed:{

//     // 3번 방법
//     //... ==> 배열 풀어주는 문법
//     ...mapGetters([
//       'fetchedAsk'
//   ]),

//     //   ...mapGetters({
//     //   'fetchedAsk' : 'fetchedAsk'
//     // }),

//     // 2번 방법
//     // ...mapState({
//     //   fetchedAsk: state => state.ask
//     // })

//     // 1번 방법
//     // ask(){
//     //   return this.$store.state;
//     // }
//   },
  
// //befoureMount나 create에서 data요청 많이함
// //mounted는 화면이 다시그려지게 됨
//   created(){
//    this.$store.dispatch('FETCH_ASK');
// },
}
</script>

<style>
/* .news-list{
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
} */

</style>