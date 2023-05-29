<template>
    <div id="page-wrap">
        <ProductosGrid :productos="productos" />
   </div>
</template>

<script>
import axios from 'axios';
import ProductosGrid from '../components/ProductosGrid.vue';
export default ({
    name: "ProductosPage",
    components: {
        ProductosGrid,
    },
    data() {
        return {
            productos: [],
        };
    },
    async created() {
        const resultado = await axios.get('/api/productos');
        const productos = resultado.data;
        this.productos = productos;
    }
    
});
</script>

<style scoped>

.grid-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top:16px;

}
</style>
