<template>
  <div>
    <ul>
      <item>
        아이템1
      </item>
      <item>
        아이템2 <button>click me</button>
      </item>
      <item>
        <div>
          아이템3
          </div>
          <div>
          <img src="./assets/endgame.png" alt="어벤져스 엔드게임" width="200" height="200">
        </div>
      </item>
      <item>
        <div style="color: blue; font-size: 20px;">아이템4</div>
      </item>
      <!-- <item v-for="item in items">{{ item }}</item> -->
      <!-- <item v-for="item in items" :item="item"></item> 슬롯화 -->
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  data(){
    return{
    items: ['아이템01', '아이템02', '아이템03', '아이템04', '아이템05'],
  }
} 
}
</script>