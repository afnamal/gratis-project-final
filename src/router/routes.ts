import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'comp1', component: () => import('components/CarouselComp1.vue') },
      { path: 'comp2', component: () => import('components/LoginPage.vue') },
      { path: 'comp3', component: () => import('components/ProductPage.vue') },
      { path: 'comp4', component: () => import('components/TheBrands.vue') },
      { path: 'comp5', component: () => import('components/TheProduct.vue') },
      { path: 'comp6', component: () => import('components/NavbarMenu.vue') },
      { path: 'comp7', component: () => import('components/TheFooter.vue') },
      { path: 'comp8', component: () => import('components/TheBottom.vue') }]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
