<template>
    
    <div class="product-item">
        <img v-bind:src="producto.imagen"/>
        <h3 class="product-name">{{ producto.nombre }}</h3>
        <p class="product-price">{{ producto.precio }}</p>
        <router-link v-bind:to="'/productos/' + producto.id">
            <button>Ver Detalles</button>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'ProductosGridItem',
    props: ['producto'],
}
</script>

<style scoped>

.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888 ;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 20px;
    position: relative;
    width: 32%;
}

.product-name {
    margin-bottom: 0;
}

img {
    height: 200px;
    width: 200px;
}

a {
    width: 100%;
}

button {
    width: 100%;
    background: black;
    color: white;
}

</style>
