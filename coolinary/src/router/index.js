import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RecipesList from '../views/RecipesList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/share-recipe',
    name: 'ShareRecipe',
    component: () => import('../views/ShareRecipe.vue')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import('../views/Recipes.vue'),
  },
  {
    path: '/recipes/snacks',
    name: 'RecipesList1',
    component: RecipesList,
  },
  {
    path: '/recipes/main-dishes',
    name: 'RecipesList2',
    component: RecipesList,
  },
  {
    path: '/recipes/desserts',
    name: 'RecipesList3',
    component: RecipesList,
  },
  {
    path: '/recipes/appetizers',
    name: 'RecipesList4',
    component: RecipesList,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
