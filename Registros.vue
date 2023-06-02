<template>
  <div>
    <button @click="goToLogin">Registrarse</button>
    <form @submit="submitLogin">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" required />
      <label for="correo">Correo:</label>
      <input type="email" id="correo" v-model="correo" required />
      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required />
      <label for="confirmarPassword">Confirmar Contraseña:</label>
      <input
        type="password"
        id="confirmarPassword"
        v-model="confirmarPassword"
        required
      />
      <button type="submit" @click="submitForm">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Registros', // Mantén el nombre del componente como "RegistrosUsuarios"

  data() {
    return {
      nombre: '',
      correo: '',
      password: '',
      confirmarPassword: '',
    };
  },
  methods: {
    
    async submitForm() {
      try{
        const response = await axios.post('api/registros', {
          nombre: this.nombre,
          correo: this.correo,
          password: this.password,
        });
        // Obtener el usuarioId devuelto por la API
        const usuarioId = response.data._id;
        this.usuarioId = usuarioId;
      }catch(error){
        alert(error);
      }
    },
  },  
  
};
</script>
