<template>
    <div class="form-login">
      <q-card>
        <q-card-section>
          <q-form @submit="submitForm" @reset="resetForm" ref="loginForm">
            <q-input
              filled
              outlined
              v-model="nombre"
              label="Nombre"
              :rules="[val => !!val || 'Ingrese su nombre']"
            />
            <q-input
              filled
              outlined
              v-model="correo"
              label="Correo electrónico"
              :rules="[val => !!val || 'Ingrese su correo electrónico', val => validateEmail(val) || 'Ingrese un correo electrónico válido']"
            />
            <q-input
              filled
              outlined
              v-model="contrasena"
              label="Contraseña"
              :rules="[val => !!val || 'Ingrese su contraseña']"
              type="password"
            />
            <q-card-actions>
              <q-btn
                type="submit"
                color="primary"
                label="Iniciar sesión"
              />
              <q-btn
                type="reset"
                color="secondary"
                label="Limpiar"
              />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        nombre: '',
        correo: '',
        contrasena: '',
      };
    },
    methods: {
      submitForm() {
        if (this.$refs.loginForm.validate()) {
          // Aquí puedes realizar la lógica para registrar los datos en MongoDB
          // Puedes utilizar una librería como axios para hacer una solicitud HTTP a tu backend
  
          // Ejemplo de solicitud POST a una API ficticia
          const formData = {
            nombre: this.nombre,
            correo: this.correo,
            contrasena: this.contrasena,
          };
          
          // Ejemplo con axios
          axios.post('/api/registro', formData)
            .then(response => {
              // Procesar la respuesta de la API
              console.log(response.data);
            })
            .catch(error => {
              // Manejar el error de la API
              console.error(error);
            });
        }
      },
      resetForm() {
        this.$refs.loginForm.resetValidation();
        this.nombre = '';
        this.correo = '';
        this.contrasena = '';
      },
      validateEmail(email) {
        // Validación simple de correo electrónico
        // Puedes utilizar una expresión regular más compleja para una validación más precisa
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      },
    },
  };
  </script>
  
  <style scoped>
  .form-login {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  