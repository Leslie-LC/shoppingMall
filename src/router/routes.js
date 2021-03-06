// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
// 路由配置信息
export default [
    {
        path: '/home',
        component: Home,
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: {
            show: true
        },
        name: "search",
        // 路由组件能不能传递props数据
        // 1.布尔值写法
        // props: true,
        // 2.对象写法,额外给路由组件传递一些props
        // props: { a: 1, b: 2 }
        // 3.函数写法：可以将params参数、query参数，通过props传递给路由组件(重点常用)
        props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k })
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: false
        }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            show: true
        }
    },
    // 重定向，在项目跑起来的时候，访问/，立马让它定位到首页
    {
        path: '*',
        redirect: "/home"
    }
]