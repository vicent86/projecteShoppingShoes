import { createRouter, createWebHistory } from 'vue-router';
import Cart from '../views/CartPage.vue';
import ProductosDetallados from '../views/ProductosDetallados.vue';
import Productos from '../views/ProductosPage.vue';
import NoSeEncuentra from '../views/NoSeEncuentra.vue';

const routes = [
  {
    path: '/productos/',
    name: 'Productos',
    component: Productos
   
  },
  {
    path: '/usuarios/:usuarioId/carrito/:productoId',
    name: 'ProductoDetallado',
    component: ProductosDetallados,
    
  },
  {
    path: '/productos/:productoId',
    name: 'ProductoDetallado',
    component: ProductosDetallados,
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Cart,

  },
  {
    path: '/',
    redirect:'/productos', 
  },
  {
    path: '/(.*)',
    name: 'NoSeEncuentra',
    component: NoSeEncuentra,
    
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
