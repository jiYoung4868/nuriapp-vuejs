<template>
  <div>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items">{{  item  }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {handleException} from './utils/handler.js';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
        if(response.data.id === 1){
          console.log("사용자가 인증되었습니다.")
          axios.get('http://jsonplaceholder.typicode.com/todos')
          .then(response => {
            this.items = response.data;
          })
          .catch();
        }
        })
        .catch(error => console.log(error));
    },

    async loginUser1(){
      try{
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
          if (response.data.id === 1){
           console.log("사용자가 인증되었습니다.")
           var list = await axios.get('http://jsonplaceholder.typicode.com/todos');
           this.items = list.data;
      }
      
      } catch (error){
        handleException(error);
        console.log(error);
      }
    }
  },
}
//async function 선언하면 안에 await 있어야함
// async function sum (){
//   await
// }

</script>