import bus from '../utils/bus.js';

// mixin
export default {
    mounted() {
        bus.$emit('end:spinner');
    },
    // // 재사용할 컴포넌트 옵션
    // created(){
    //     bus.$emit('start:spinner');
    //     // #1
    //         this.$store.dispatch('FETCH_LIST', this.$route.name)
    //             .then(() => {
    //                 console.log(5);
    //                 console.log('fetched');
    //                 // #5
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
     
    // }
}

