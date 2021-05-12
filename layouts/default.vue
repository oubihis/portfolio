<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Footer,
    NavBar
  },
  head: {
    title: 'Oubihi Said - UI/Front-end Developer',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }
};
</script>
