import Vue from 'vue'
import Router from 'vue-router'

const HotPlay = () =>
    import ( /* webpackChunkName: "HotPlay" */ '../pages/HotPlay.vue')
const FindMovie = () =>
    import ( /* webpackChunkName: "FindMovie" */ '../pages/FindMovie.vue')
const Mine = () =>
    import ( /* webpackChunkName: "Mine" */ '../pages/Mine.vue')
const Nowing = () =>
    import ( /* webpackChunkName: "HotPlay" */ '../pages/nowing.vue')
const goupiao = () =>
        import ( /* webpackChunkName: "goupiao" */ '../pages/goupiao.vue')
const Loading = () =>
    import ( /* webpackChunkName: "HotPlay" */ '../pages/loading.vue')
const movxiangqing = () =>
    import ( /* webpackChunkName: "movxiangqing" */ '../components/movxiangqing.vue')
const xiang = () =>
    import ( /* webpackChunkName: "movxiangqing" */ '../components/xiang.vue')
const xiang1 = () =>
    import ( /* webpackChunkName: "movxiangqing" */ '../components/xiang1.vue')
const ping = () =>
    import ( /* webpackChunkName: "movxiangqing" */ '../components/ping.vue')
const lun = () =>
    import ( /* webpackChunkName: "movxiangqing" */ '../components/lun.vue')
const ying = () =>
    import ( /* webpackChunkName: "ying" */ '../components/ying.vue')
const pingpage = () =>
    import ( /* webpackChunkName: "pingpage" */ '../components/pingpage.vue')
const per = () =>
    import ( /* webpackChunkName: "Citys" */ '../components/per.vue')
const wantSee = () =>
    import ( /* webpackChunkName: "Mine" */ '../pages/wantSee.vue')
const nowSee = () =>
    import ( /* webpackChunkName: "Mine" */ '../pages/nowSee.vue')
const sew = () =>
    import ( /* webpackChunkName: "Mine" */ '../pages/sew.vue')
const seeSpeak = () =>
    import ( /* webpackChunkName: "Mine" */ '../pages/seeSpeak.vue')
const movieMen = () =>
    import ( /* webpackChunkName: "Mine" */ '../pages/movieMen.vue')
const shezhi = () =>
    import ( /* webpackChunkName: "shezhi" */ '../pages/shezhi.vue')
const login = () =>
    import ( /* webpackChunkName: "login" */ '../pages/login.vue')
const zhuantiremen = () =>
    import ( /* webpackChunkName: "zhuantiremen" */ '../pages/zhuantiremen.vue')
const suggest = () =>
    import ( /* webpackChunkName: "suggest" */ '../pages/suggest.vue')
const howSee = () =>
    import ( /* webpackChunkName: "howSee" */ '../pages/howSee.vue')
const why = () =>
    import ( /* webpackChunkName: "why" */ '../pages/why.vue')
const howWatch = () =>
    import ( /* webpackChunkName: "howWatch" */ '../pages/howWatch.vue')
const feedBack = () =>
    import ( /* webpackChunkName: "feedBack" */ '../pages/feedBack.vue')
const aboutdb = () =>
    import ( /* webpackChunkName: "aboutdb" */ '../pages/aboutdb.vue')
const whyOpendb = () =>
    import ( /* webpackChunkName: "whyOpendb" */ '../pages/whyOpendb.vue')
const Search = () =>
    import ( /* webpackChunkName: "Search" */ '../pages/Search.vue')
const LocalCity = () =>
    import ( /* webpackChunkName: "LocalCity" */ '../pages/LocalCity.vue')
const Citys = () =>
    import ( /* webpackChunkName: "Citys" */ '../components/Citys.vue')
const zhuanti250 = () =>
    import ( /* webpackChunkName: "Citys" */ '../components/zhuanti250.vue')
const register = () =>
    import ( /* webpackChunkName: "login" */ '../pages/register.vue')
const losePassword = () =>
    import ( /* webpackChunkName: "login" */ '../pages/losePassword.vue')
const myfil = () =>
    import ( /* webpackChunkName: "shezhi" */ '../pages/myfil.vue')
const NotFoundComponent = () =>
    import ( /* webpackChunkName: "HotPlay" */ '../components/NotFoundComponent.vue')
Vue.use(Router)
const routes = [{
        path: '/',
        component: HotPlay,
        children: [
            { path: '/', component: Nowing, meta: { showBar: true, showTop: true } },
            { path: '/HotPlay', component: Nowing, meta: { showBar: true, showTop: true } },
            { path: '/HotPlay/nowing', component: Nowing, meta: { showBar: true, showTop: true } },
            { path: '/HotPlay/loading', component: Loading, meta: { showBar: true, showTop: true } }
        ]
    },
    { path: '/Search', component: Search },
    { path: '/FindMovie', component: FindMovie, meta: { showBar: true, showTop: true } },
    {
        path: '/movxiangqing/:id',
        component: movxiangqing,
        children: [
            { path: '/movxiangqing/:id', component: ping },
            { path: '/movxiangqing/ping/:id', component: ping },
            { path: '/movxiangqing/lun/:id', component: lun }
        ]
    },
    { path: '/xiang', component: xiang },
    { path: '/xiang1', component: xiang1 },
    { path: '/goupiao', component: goupiao },
    { path: '/per/:id', component: per },
    { path: '/pingpage/:id', component: pingpage },
    { path: '/ying/:id', component: ying },
    {
        path: '/Mine',
        component: Mine,
        children: [
            { path: '/', component: wantSee, meta: { showBar: true } },
            { path: '/Mine/wantSee', component: wantSee, meta: { showBar: true } },
            { path: '/Mine/nowSee', component: nowSee, meta: { showBar: true } },
            { path: '/Mine/sew', component: sew, meta: { showBar: true } },
            { path: '/Mine/seeSpeak', component: seeSpeak, meta: { showBar: true } },
            { path: '/Mine/movieMen', component: movieMen, meta: { showBar: true } }
        ],
        meta: { showBar: true }

    },
    { path: '/Local', component: LocalCity },
    {
        path: '/Citys/:id',
        component: Citys,
        children: [
            { path: '/Citys/index', redirect: '/HotPlay' }
        ]
    },
    { path: '/shezhi', component: shezhi },
    { path: '/login', component: login },
    { path: '/zhuantiremen', component: zhuantiremen },
    { path: '/suggest', component: suggest },
    { path: '/howSee', component: howSee },
    { path: '/register', component: register },
    { path: '/losePassword', component: losePassword },
    { path: '/myfil', component: myfil },
    { path: '/why', component: why },
    { path: '/howWatch', component: howWatch },
    { path: '/feedBack', component: feedBack },
    { path: '/aboutdb', component: aboutdb },
    { path: '/whyOpendb', component: whyOpendb },
    { path: '/zhuanti250/:id', component: zhuanti250 },
    { path: '*', component: NotFoundComponent },


]

const router = new Router({
    routes
})

export default router
