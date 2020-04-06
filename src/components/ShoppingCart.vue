<template>
  <div>
    <v-alert v-show="checkoutStatus" type="success">
      Checkout {{ checkoutStatus }}.
    </v-alert>
    <h2>
      My work in progress Cart

      <v-badge bordered color="error" content="6" overlap> </v-badge>
    </h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x
        {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p>
      <v-btn
        :disabled="!products.length"
        @click="checkout(products)"
        color="primary"
      >
        <v-icon></v-icon>Checkout
      </v-btn>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.cart.checkoutStatus,
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice",
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    },
  },
};
</script>
<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}
li {
  display: flex;
  align-items: center;
}
</style>
