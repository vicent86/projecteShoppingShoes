<template>
    <div id="page-wrap">
        <div class="product-container">
            <img class="product-image" :src="producto.imagen" />
            <div class="details-wrap">
                <h3>{{ producto.nombre }}</h3>
                <p>{{ producto.precio }}</p>
            </div>
            <q-btn class="remove-button" @click="removeFromCart(producto.id)" color="black" label="Eliminar Compra"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListaItemProductos",
    props: ['producto'],
    methods: {
        removeFromCart(productoId) {
            this.$emit('remove-from-cart', productoId);
        },
    },

}
</script>

<style scoped>
.product-container {
    align-content: center;
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
}
.product-image{
    flex: 1;
    height: 100px;
    max-width: 100px;

}
.details-wrap{
    padding: 0 16px;
    flex: 3;
}

.remove-button{
    flex: 1;
    margin: auto;
}

</style>