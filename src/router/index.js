import { createRouter, createWebHistory } from 'vue-router'

// 不使用路由懒加载
import indexPage from '../views/main/indexPage'
// import FRANXXindex from "@/views/FRANXX/FRANXXindex";
// import FRANXXpicture from "@/components/FRANXXpicture";
// import FRANXXhole from "@/components/FRANXXhole";
// import About from "@/views/about/About";

// 使用路由懒加载
// const indexPage = () => import('../views/main/indexPage')
const FRANXXindex = () => import('@/views/FRANXX/FRANXXindex')
const FRANXXpicture = () => import('@/components/FRANXXpicture')
const FRANXXhole = () => import('@/components/FRANXXhole')
const About = () => import('@/views/about/About')

const routes = [
  {
    path: '/',
    name: 'indexpage',
    components: {
      indexPage
    }
  },
  {
    path: '/FRANXX',
    component: FRANXXindex,
    children: [
      {
        path: 'picture',
        name: 'FRANXXpicture',
        components: {
          FRANXXpicture: FRANXXpicture
        }
      },
      {
        path: 'hole',
        name: 'FRANXXhole',
        components: {
          FRANXXhole
        }
      },
      {
        path: 'about',
        name: 'About',
        components: {
          About: About
        }
      }
    ]
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
