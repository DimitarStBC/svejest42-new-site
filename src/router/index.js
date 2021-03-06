import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render(c) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '/',
        name: 'Landing',
        component: Landing
      },
      {
        path: 'about',
        name: "About",
        component: About
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: 'blog',
        name: 'Blog',
        component: Blog
      }
    ]
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
