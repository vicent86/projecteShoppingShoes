<template>
    <div id="page-wrap">
        <h1>Carrito de la compra</h1>
        <ListaProductos :productos="cartItems" />
        <h3 id="total-price">Total a pagar: {{ totalPrice }} € </h3>
        <button id="checkout-button" label="Procede a realizar la Compra" color="black"></button>
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
        try {
            const usuarioId = this.$route.params.usuarioId;

            if (usuarioId) {
                const response = await axios.post(`/api/usuarios/${usuarioId}/carrito`);
                const cartItem = response.data;
                const result = await db.collection('usuarios').updateOne(
                    { _id: usuarioId },
                    { $push: { cartItems: cartItem }}, // Aquí toca incorporar este ítem al array cartItems de la base de datos de este usuario
                );
                this.result = result;
                
            }
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        // addProduct (productoId){
        //     const producto = this.products.find((p) => p.id === productoId);
        //     if ( producto) {
        //         this.cartItems.push(producto);
        //         alert('Producto añadido al carrito');
        //     }
        // },
        async removeFromCart(productoId,usuarioId)  {
            const result = await db.collection('usuarios').findOneAndUpdate(
                { _id: usuarioId },
                { $pull: { carrito: { _id: productoId } } },
                { returnOriginal: false }
            );
            if (result && result.value) {
            // El producto ha sido eliminado del carrito del usuario
            const usuarioActualizado = result.value;
            console.log('Producto eliminado del carrito:', usuarioActualizado);
            } else {
            // No se encontró el usuario o el producto en el carrito
            console.log('Usuario o producto no encontrado');
            }
            // this.cartItems = this.cartItems.filter((p) => p.id !== productoId);
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