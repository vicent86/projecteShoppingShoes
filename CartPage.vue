<template>
    <div id="page-wrap">
        <h1>Carrito de la compra</h1>
        <ListaProductos :productos="cartItems" />
        <h3 id="total-price">Total a pagar: {{ totalPrice }} € </h3>
        <button id="checkout-button">Procede a realizar la Compra</button>
    </div>
</template>

<script>
import axios from 'axios';
import ListaProductos from '../components/ListaProductos.vue';

export default ({
    name: "CarritoCompra",
    components: {
        ListaProductos,
    },
    data (){
        return {
            cartItems: [],
           
        };
    },
    computed: {
        totalPrice (){
            return this.cartItems.reduce((sum, item) => sum + parseFloat(item.precio), 0);

        },
    },
    async created (){
        const resultado = await axios.get('/api/usuarios/123589/carrito');
        const cartItems = resultado.data;
        this.cartItems = cartItems;
    },
    methods: {
        addProduct (productoId){
            const producto = this.products.find((p) => p.id === productoId);
            if ( producto) {
                this.cartItems.push(producto);
                alert('Producto añadido al carrito');
            }
        },
        removeFromCart(productoId) {
            this.cartItems = this.cartItems.filter((p) => p.id !== productoId);
        },

    },
});
</script>

<style scoped>
h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
}
#total-price {
    padding: 16px;
    text-align: right;
}
#checkout-button {
    width: 100%;
}
</style>