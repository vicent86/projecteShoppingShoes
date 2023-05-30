<template>
    <div class="barra-busqueda">
      <q-input
        outlined
        dense
        v-model="busqueda"
        placeholder="Buscar..."
        clearable
        @clear="limpiarBusqueda"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
</template>
  
<script>
  export default {
    name: 'MiComponente',
    data() {
      return {
        busqueda: ''
      }
    },
    methods: {
      limpiarBusqueda() {
        this.busqueda = '';
      }
    }
  }
</script>
  
<style scoped>
  .barra-busqueda {
    width: 300px; /* Ajusta el ancho según tus necesidades */
  }
</style>
  