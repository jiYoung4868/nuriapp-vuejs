<template>
  <div id="app">
    <!--url이 만약 news라면 아래에 NewsView로 태그 생성-->
 <ToolBar></ToolBar>
<router-view></router-view>
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
</style>
