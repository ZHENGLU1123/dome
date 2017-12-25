import Vue from 'vue'
import Router from 'vue-router'
import Apage from '@/components/Apage'
import Bpage from '@/components/Bpage'
import Cpage from '@/components/Cpage'
import Dpage from '@/components/Dpage'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'apage',
            component: Apage
        },
        {
            path: '/b/:price',
            name: 'bpage',
            component: Bpage
        },
        {
            path: '/c',
            name: 'cpage',
            component: Cpage
        },
        {
            path: '/d',
            name: 'dpage',
            component: Dpage
        }
    ]
})