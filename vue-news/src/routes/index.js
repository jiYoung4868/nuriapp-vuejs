import VueRouter from 'vue-router';
import Vue from 'vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus.js';
import {store} from '../store/index.js'

// import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', //#값 제거
    routes: [
        {
            //path: url 주소
            path: '/news',
            name: 'news',
            //component: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
            
                bus.$emit('start:spinner');
                // #1
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log(5);
                        console.log('fetched');
                        next();
                        // #5
                        bus.$emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                // console.log("to", to);
                // console.log("from", from);
                // console.log("next", next);
                // if(to.matched === ''){
                //     next();
                // } else {
                //     router.push('/login');
                // }
                // next();
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,

            beforeEnter: (to, from, next) => {

                bus.$emit('start:spinner');
                // #1
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('fetched');
                        next();
                        // #5
                        // bus.$emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                // console.log("to", to);
                // console.log("from", from);
                // console.log("next", next);
                // if(to.matched === ''){
                //     next();
                // } else {
                //     router.push('/login');
                // }
                // next();
            }
            // component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {

                bus.$emit('start:spinner');
                // #1
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => next())
                        // #5
                        // bus.$emit('end:spinner');
                    
                    .catch((error) => {
                        console.log(error);
                    });

                // console.log("to", to);
                // console.log("from", from);
                // console.log("next", next);
                // if(to.matched === ''){
                //     next();
                // } else {
                //     router.push('/login');
                // }
                // next();
            }
            // component: createListView('JobsView'),
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
});