import ListView from '../views/ListView.vue';
import bus from '../utils/bus.js';
//쟤는 js로 해놨던데?;;


//data를 요청할 것
export default function createListView(name){
    return {
        // 재사용할 컴포넌트 옵션들이 들어갈 자리
        name,
        created(){
            bus.$emit('start:spinner');
            // setTimeout(() => {

                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            // }, 3000);

        },
        render(createElement){
            return createElement(ListView);
        }
    }
}