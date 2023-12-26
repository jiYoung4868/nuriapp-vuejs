<template>
 <div>
  <list-item></list-item>
    <!-- <div>
    <div>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">{{ job.time_ago }} 
            by <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li></ul></div>
    </div> -->

</div>
</template>
<script>

import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
// import {fetchJobsList} from '../api/index.js';
import ListMixin from '../mixins/ListMixin.js';
// import bus from '../utils/bus.js';

export default {

components: {
ListItem,
},
mixins: [ListMixin],

// created(){
//   bus.$emit('start:spinner');
//   setTimeout(()=>{

//   this.$store.dispatch('FETCH_JOBS')
//   .then(()=>{
//     console.log('fetched');
//     bus.$emit('end:spinner');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   }, 3000);
  
// }

}

// data(){
//   return {
//     jobs: []
//   }
// },
// created(){

//   this.$store.dispatch('FETCH_JOBS');
//   // var vm = this;

//   // fetchJobsList()
//   // .then(response => this.jobs = response.data)
//   // .catch(error=> console.log(error));


// },


</script>


<style scoped>
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