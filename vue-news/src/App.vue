<template>
  <div id="app">
    <!--url이 만약 news라면 아래에 NewsView로 태그 생성-->
 <ToolBar></ToolBar>
 <transition name="page">
<router-view></router-view>
  </transition>
  <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
    components: { ToolBar, Spinner },
    data(){
      return{
        loadingStatus: false,
      };
    },
    methods: {
      startSpinner(){
        this.loadingStatus = true;
      },
      endSpinner(){
        this.loadingStatus = false;
      }
    },
    created(){
      bus.$on('start:spinner', this.startSpinner);
      bus.$on('end:spinner', this.endSpinner);
    },
    beforeDestroy(){
      bus.$off('start:spinner', this.startSpinner);
      bus.$off('end:spinner', this.endSpinner);
    }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}

/* router transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to{
opacity: 0;
}
a{
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}
</style>
