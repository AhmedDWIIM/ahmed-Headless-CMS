import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUpView from '../views/SignUpView.vue';
import SigningView from '../views/SignInView.vue';
import { user } from '@/store/modules/user.module';
import { supabase } from './../supabase'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUpView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SigningView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requireAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let has_user = supabase.auth.user();
  if (has_user) {
    user.state.user_data = has_user;
  }
  if(to.matched.some((record) => {return record.meta.requireAuth})){
    if(has_user){
      user.state.user_data = has_user;
      next();
    } else{
      next({
        name: "signIn",
      })
    }
  }
  else {
    next();
  }
});
export default router;
