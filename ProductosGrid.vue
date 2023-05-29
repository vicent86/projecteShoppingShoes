<template>
    <div class="grid-wrap">
        <ProductosGridItem
            v-for="producto in productos"
            :key="producto.id"
            :producto="producto"/>

    </div>
</template>

<script>
import ProductosGridItem from './ProductoGridItem.vue'
export default {
    name: "ProductosGrid",
    props: ['productos'],
    components: {
        ProductosGridItem,
    },

}
</script>

<style scoped>

.grid-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top:16px;

}

</style>