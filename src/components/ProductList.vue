<template>
  <div>
    <v-row dense>
      <v-card
        v-for="product in products"
        :key="product.id"
        class="mx-auto"
        max-width="344"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1">{{ product.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ product.price | currency }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn :disabled="!product.inventory" @click="addProductToCart(product)" color="primary">
            <v-icon></v-icon>Add to Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions("cart", ["addProductToCart"]),
  created() {
    this.$store.dispatch("products/getAllProducts");
  }
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
