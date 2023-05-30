<template>
    <div id="nav-bar">
        <router-link to="/productos" id="productos-link">
            <h1>CALZADO FANTASTICO</h1>
        </router-link>
        <router-link to="/carrito" id="carrito-link">
            <q-btn 
                icon="shopping_cart"
                label="Carrito de la Compra"
                class="boton"
            /> 
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}


</script>

<style>
    #nav-bar{
        border-bottom: 1px solid #ddd;
        height: 75px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5%;
    }

</style>

