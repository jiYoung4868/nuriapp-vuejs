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
                return this.$store.state.user;
            }
        },
    created(){
        
        console.log(this.$route.params.id);    
        const userName = this.$route.params.id;
        // axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`);
        this.$store.dispatch('FETCH_USER', userName);
        }
}
</script>

<style>

</style>