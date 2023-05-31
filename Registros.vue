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
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>


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
    
    goToLogin() {
      // Redirigir a la página de registro
      this.$router.push('/registro');
    },
    submitLogin(event) {
      event.preventDefault();

      // Validar campos
      if (this.nombre.trim() === '') {
        alert('Por favor, ingrese su nombre.');
        return;
      }

      if (this.password !== this.confirmarPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
      // Enviar datos
      this.$store.dispatch('login', {
        nombre: this.nombre,
        correo: this.correo,
        password: this.password,
      });
      
    }, 
  },  
  
};
</script>
