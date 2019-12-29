<template>
  <div class="photos">
    <!-- se utiliza nombre de la ruta y el id que se utiliza en el v-for-->
    <h1>Galeria de fotos</h1>
    <router-link
      :to="{ name: 'photos', params: { id: photo } }"
      v-for="(photo, index) of photosArray"
      :key="index"
    >
      <button>Foto {{ photo }}</button>
    </router-link>
    <photo></photo>

    <button @click="home">Go to home</button>
    <button @click="before">Anterior</button>
    <button @click="after">Siguiente</button>
  </div>
</template>

<script>
import Photo from "../components/Photo.vue";

export default {
  components: {
    Photo
  },
  data() {
    return {
      photosArray: [1, 2, 3]
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    //accede al historial del router
    before() {
      this.$router.go(-1);
    },
    after() {
      this.$router.go(1);
    }
  }
};
</script>
