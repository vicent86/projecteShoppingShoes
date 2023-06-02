<template>
    <div>
      <h1>Iniciar sesión</h1>
      <form @submit="submitLogin">
        <label for="correo">Correo:</label>
        <input type="email" id="correo" v-model="correo" required />
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
<script>
    import axios from 'axios';

    export default {
    name: 'Login',
        data() {
            return {
            correo: '',
            password: '',
            
            };
        },
        methods: {
            async submitLogin(event) {
            event.preventDefault();

            try {
                const response = await axios.post('/api/login', {
                correo: this.correo,
                password: this.password,
                });

                if (response.status === 200) {
                // Sesión iniciada correctamente
                // Aquí puedes redirigir al usuario a la página correspondiente
                // y realizar cualquier otra acción necesaria, como guardar el token de sesión, etc.
                alert('Sesión iniciada correctamente');
                } else {
                // Error al iniciar sesión
                alert('Error al iniciar sesión');
                }
            } catch (error) {
                // Error en la solicitud o en el servidor
                alert('Error al realizar la solicitud');
                console.error(error);
            }
            },
        },
    };
</script>

