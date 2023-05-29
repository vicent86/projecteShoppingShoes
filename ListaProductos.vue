<template>
    <div v-if="productos.length > 0">
        <ListaItemProductos
            v-for="producto in productos"
            :key="producto.id"
            :producto="producto" />
    </div>
    <p v-else>No has añadido ningun producto todavia</p>
</template>

<script>
import ListaItemProductos from './ListaItemProductos.vue';
export default {
    name: 'ListaProductos',
    props: ['productos'],
    components: {
        ListaItemProductos,
    },
    methods: {
        removeFromCart(productoId) {
            this.$emit('remove-from-cart', productoId);
        },
    },
    
}
</script>