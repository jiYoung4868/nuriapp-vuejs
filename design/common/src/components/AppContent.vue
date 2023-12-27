<template>
  <div>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array, // array로 안들어오면 오류띄움
      required: true,
    },
  },
}
</script>