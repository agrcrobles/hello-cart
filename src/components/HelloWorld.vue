<template>
  <v-container>
    <h1 class="display-2 font-weight-bold mb-3">
      Welcome to your Shopping Cart
    </h1>

    <v-img :src="require('../assets/logo.svg')" contain height="100" />

    <v-col class="mb-5" cols="12">
      <h3 class="headline font-weight-bold mb-3">What's next?</h3>

      <a
        v-for="(next, i) in whatsNext"
        :key="i"
        :href="next.href"
        class="subheading mx-3"
        target="_blank"
        >{{ next.text }}</a
      >
    </v-col>

    <v-col class="mb-5" cols="12">
      <h3 class="headline font-weight-bold mb-3">Important Links</h3>

      <a
        v-for="(link, i) in importantLinks"
        :key="i"
        :href="link.href"
        class="subheading mx-3"
        target="_blank"
        >{{ link.text }}</a
      >
    </v-col>

    <v-col class="mb-5" cols="12">
      <h3 class="headline font-weight-bold mb-3">Ecosystem</h3>
      <a
        v-for="(eco, i) in ecosystem"
        :key="i"
        :href="eco.href"
        class="subheading mx-3"
        target="_blank"
        >{{ eco.text }}</a
      >
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
    ],
  }),
};
</script>
