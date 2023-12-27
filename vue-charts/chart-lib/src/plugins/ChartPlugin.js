import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
    install(Vue) {
      Vue.prototype.$_Chart = Chart; //모든 컴포넌트에서 this.$_Chart 로 한방에 chart 로드
    }
}