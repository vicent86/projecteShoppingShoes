<template>
  <div id="page-wrap" v-if="producto">
    <div id="img-wrap">
      <img v-bind:src="producto.imagen" />
    </div>
    <div id="products-details">
      <h1>{{ producto.nombre }}</h1>
      <h3 id="price">{{ producto.precio }}</h3>
      <p>Puntuación Media: {{ producto.PuntacionMedia }}</p>
      <button class="add-to-cart" v-on:click="addProduct">
        Añadir al carrito
      </button>
      <h4>Descripción</h4>
      <p>{{ producto.descripcion }}</p>
    </div>
  </div>
  <NoseEncuentra v-else />
</template>

<script>
import axios from 'axios';
import NoseEncuentra from '../views/NoSeEncuentra.vue';

export default {
  name: 'DetallesProductos',
  components: {
    NoseEncuentra,
  },
  data() {
    return {
      producto: null,
      productoId: null,
      usuarioId: null,
    };
  },
  async created() {
    this.productoId = this.$route.params.productoId;
    this.usuarioId = this.$route.params.usuarioId;
    try {
      const response = await axios.get(`/api/productos/${productoId}`);
      productoData = response.data;
    } catch (error) {
      console.error(error);
    }
    
  },
  methods: {
    async addProduct() {

      try {
        const result = await axios.post(`/api/usuarios/${this.usuarioId}/carrito`, {
          productoId: this.productoId,
          usuarioId: this.usuarioId,
         
        });

        if (result.status === 200) {
          this.$router.push('/carrito');
          alert('Producto añadido al carrito');
        } else {
          alert('Producto no encontrado');
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          alert('Error al agregar el producto: ' + error.response.data.error);
        } else {
          alert('Error al agregar el producto');
        }
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 74px;
  right: 16px;
}

button {
  width: 100%;
  background: black;
  color: white;
}
</style>
