import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "posts" */ '../components/posts/ListaProvincia.vue')
  },
  
 
  {
    path: '/detalle/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../components/posts/DetalleProvincia.vue')
  },
  {
    path: '/editar/:id',
    name: 'post-edit',
    component: () => import(/* webpackChunkName: "post" */ '../components/posts/EditarProvincia.vue')
  },
  {
    path: '/eliminar/:id',
    name: 'post-delete',
    component: () => import(/* webpackChunkName: "post" */ '../components/posts/EliminarProvincia.vue')
  },
  {
    path: '/crear',
    name: 'post-create',
    component: () => import(/* webpackChunkName: "post" */ '../components/posts/CrearProvincia.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
