import Home from '../pages/home'
const Login=()=>import('../pages/login')

export default [
  {
    path:'/',
    name:'Home',
    meta:{
      title:'首页'
    },
    component:Home
  },
  {
    path:'/login',
    name:'Login',
    meta:{
      title:'首页'
    },
    component:Login
  }
]