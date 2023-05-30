<template>
    <div>
      <h2>Reseñas</h2>
      <div v-for="reseña in reseñas" :key="reseña._id">
        <q-card>
          <q-card-section>
            <q-rating :value="reseña.calificacion" readonly></q-rating>
            <p>{{ reseña.nombre }}</p>
            <p>{{ reseña.comentario }}</p>
          </q-card-section>
        </q-card>
      </div>
      <h2>Deja tu reseña</h2>
      <q-form @submit="submitReseña">
        <q-input filled v-model="nombre" label="Nombre" />
        <q-input filled v-model="comentario" label="Comentario" />
        <q-rating v-model="calificacion"></q-rating>
        <q-btn type="submit" color="primary" label="Enviar"></q-btn>
      </q-form>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        reseñas: [],
        nombre: '',
        comentario: '',
        calificacion: 0,
      };
    },
    mounted() {
      this.getReseñas();
    },
    methods: {
      getReseñas() {
        axios
          .get('/api/reseñas')
          .then((response) => {
            this.reseñas = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      submitReseña() {
        const reseña = {
          nombre: this.nombre,
          comentario: this.comentario,
          calificacion: this.calificacion,
        };
  
        axios
          .post('/api/reseñas', reseña)
          .then((response) => {
            console.log(response.data);
            this.getReseñas();
            this.nombre = '';
            this.comentario = '';
            this.calificacion = 0;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
</script>
  