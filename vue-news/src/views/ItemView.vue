<template>
    <div>
    <section>
        <!--질문 상세 정보-->
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                <router-link :to="`user/${fetchedItem.user}`">
                {{ fetchedItem.user }}
                </router-link>
               
            <div class="time">
                {{ fetchedItem.time_ago }}
            </div>
            </div>


        </div>
            <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
        <div v-html="fetchedItem.content" class="content">
        </div>
    </section>
    </div>
  <!-- <div>
    <p>{{ fetchedItem.title }}</p>
  </div>
  <div>
    {{ fetchedItem.content }}
  </div> -->
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedItem']),
    },
    created(){
        console.log(this.$route.params.id);
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style scoped>
.user-container{
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size: 0.7rem;
}
</style>

<!--

1. ItemView생성
2. 라우터에 ItemView로 갈 수 있는 라우터 정보 등록
{
    path:'',
    component: 
}
3. 해당 컴포넌트로 이동했을 때 받아온 params(id)를 이용해서 페이지에 데이터를 표시
created(){
this.$store.dispatch('');
}

-->