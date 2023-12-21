<template>
  <div>
  <p>name: {{ userInfo.id }}</p>
  <p>karma: {{ this.$store.state.user.karma }}</p>
  <p>created: {{ this.$store.state.user.created }}</p>
  </div>
</template>

<script>

export default {
    computed: {
            userInfo(){
                return this.$store.state.user; //줄이기
            }
        },
    created(){
        
        console.log(this.$route.params.id);    
        const userName = this.$route.params.id; //path에서 :id로 넘겨받은 것을 userName에 등록
        // axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`);
        this.$store.dispatch('FETCH_USER', userName);
        }
}
</script>

<style>

</style>