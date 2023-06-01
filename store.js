const store = createStore({
    state() {
      return {
        productos: [],
        carrito: [],
        usuario: null,
      };
    },
    mutations: {
      agregarProducto(state, producto) {
        state.productos.push(producto);
      },
      agregarAlCarrito(state, producto) {
        state.carrito.push(producto);
      },
      eliminarDelCarrito(state, producto) {
        const index = state.carrito.findIndex((item) => item.id === producto.id);
        if (index !== -1) {
          state.carrito.splice(index, 1);
        }
      },
      setUsuario(state, usuario) {
        state.usuario = usuario;
      },
    },
    actions: {
      cargarProductos(context) {
        // Aquí se realizaría la llamada a la API para obtener los productos
        // y luego se llamaría a la mutación 'agregarProducto' para guardarlos en el estado
        const productos = addProduct() ;
        context.commit('addProduct', productos);
      },
      
      removeFromCart(productoId) {
        context.commit('removeFromCart', productoId);
      },
      login(context, event) {
        // Aquí se realizaría la lógica de autenticación y se llamaría a la mutación 'setUsuario'
        // para establecer la información del usuario en el estado
        const usuario = submitLogin(event);
        context.commit('setUsuario', usuario);
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