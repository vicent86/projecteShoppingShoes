<template>
    <div id="page-wrap" v-if="producto">
        <div id="img-wrap">
            <img v-bind:src="producto.imagen" />
        </div>
        <div id="products-details">
            <h1>{{ producto.nombre }}</h1>
            <h3 id="price">{{ producto.precio }}</h3>
            <p>Puntuación Media: {{ producto.PuntacionMedia }}</p>
            <button class="add-to-cart" 
              v-on:click="addProduct"
              
            >Añadir al carro</button>
            <h4>Descripción</h4>
            <p>{{ producto.descripcion }}</p>
        </div>
    </div>
    <NoseEncuentra v-else />
</template>
  
<script>
  import axios from 'axios';
  import NoseEncuentra from '../views/NoSeEncuentra.vue';
  import { productos } from '../data'; // Importa la variable productos
  
  export default {
    name: "DetallesProductos",
    components: {
      NoseEncuentra,
    },
    async created() {
      const resultado = await axios.get(`/api/productos/${this.$route.params.id}`);
      const producto = resultado.data;
      this.producto = producto;
    },
    computed: {
      producto() {
        const id = this.$route.params.id;
        if (id) {
          const producto = productos.find(producto => producto.id === id);
          return producto || {};
        } else {
          return {};
        }
      },
    },
    methods: {
      async addProduct() {
        const usuarioId = this.$route.params.usuarioId;
        const productoId = this.$route.params.productoId;
        try {
          const response = await axios.post( `/api/usuarios/${usuarioId}/carrito`, {
            productoId: productoId,
          });
          console.log(response);
          if (response.status === 200) {
            this.$router.push('/carrito');
            this.$router.push(`/productos/${productoId}`);
            alert('Producto añadido al carrito');
          } else {
            alert('Producto no encontrado');
            
          }
        } catch (error) {
          console.error(error.response);
          if (error.response && error.response.data && error.response.data.error) {
            alert('Error al agregar el producto: ' + error.response.data.error);
          } else {
            alert('Error al agregar el producto');
          }
          
        }
      }

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
  