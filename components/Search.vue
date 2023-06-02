<template>
  <div class="barra-busqueda">
    <input
      type="text"
      v-model="busqueda"
      placeholder="Buscar..."
      @input="filtrarProductos"
    >
    <ul v-if="productosFiltrados.length > 0">
      <li v-for="producto in productosFiltrados" :key="producto.id">
        {{ producto.nombre }}
      </li>
    </ul>
    <div v-else>
      No se encontraron productos.
    </div>
  </div>
</template>

<script>
import { productos } from './data.js';

export default {
  name: 'Search',
  data() {
    return {
      busqueda: '',
      todosLosProductos: productos
    };
  },
  computed: {
    productosFiltrados() {
      if (this.busqueda.trim() === '') {
        return this.todosLosProductos;
      } else {
        const textoBusqueda = this.busqueda.toLowerCase();
        return this.todosLosProductos.filter(producto =>
          producto.nombre.toLowerCase().includes(textoBusqueda)
        );
      }
    }
  },
  methods: {
    filtrarProductos() {
      if (this.busqueda.trim() === '') {
        this.todosLosProductos = productos;
      } else {
        const textoBusqueda = this.busqueda.toLowerCase();
        this.todosLosProductos = productos.filter(producto =>
          producto.nombre.toLowerCase().includes(textoBusqueda)
        );
      }
    }
  }
};
</script>

<style scoped>
.barra-busqueda {
  width: 300px;
}
</style>
