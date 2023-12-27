<script>
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
      .then(response => {
        this.response = response.data; //response에 값 담음
        this.loading = false; //로딩이 다 되면 true
      })
      .catch(error => {
        alert('[ERROR] fetching the data', error);
        console.log(error);
      });
  },
  render() { //중요
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading, //App.vue의 등록하는 곳에 값을 노출시키는 역할을 함(respose & loading)
    });
  },
}
</script>