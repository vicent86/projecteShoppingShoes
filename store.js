import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      productos: [],
      carrito: [],
      usuario: null,
    };
  },
  mutations: {
    addProduct(state, producto) {
      state.productos.push(producto);
    },
    removeFromCart(state, producto) {
      const index = state.carrito.findIndex((item) => item.id === producto.id);
      if (index !== -1) {
        state.carrito.splice(index, 1);
      }
    },
    submitLogin(state, usuario) {
      state.usuario = usuario;
    },
  },
  actions: {
    addProduct(context) {
      // Aquí se realizaría la llamada a la API para obtener los productos
      // y luego se llamaría a la mutación 'agregarProducto' para guardarlos en el estado
      const productos = addProduct();
      context.commit('addProduct', productos);
    },
    removeFromCart(context, productoId) {
      // Aquí se podría realizar alguna lógica adicional antes de eliminar el producto del carrito
      context.commit('removeFromCart', productoId);
    },
    submitLogin(context, credenciales) {
      // Aquí se realizaría la lógica de autenticación y se llamaría a la mutación 'setUsuario'
      // para establecer la información del usuario en el estado
      const usuario = submitLogin(credenciales);
      context.commit('setsubmitLogin', usuario);
    },
  },
  getters: {
    getProductos(state) {
      return state.productos;
    },
    getCarrito(state) {
      return state.carrito;
    },
    getUsuario(state) {
      return state.usuario;
    },
  },
});

export default store;
