<template>
  <div id="app">
    <!--url이 만약 news라면 아래에 NewsView로 태그 생성-->
 <ToolBar></ToolBar>
 <transition name="page">
<router-view></router-view>
  </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';


export default {
    components: { ToolBar }
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
