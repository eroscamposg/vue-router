<template>
  <!-- CARDS AND BUTTONS -->
  <div class="mt-5">
    <b-button variant="success">Texto</b-button>
    <b-button variant="info">Texto</b-button>
    <b-button variant="danger">Texto</b-button>
    <b-button variant="primary">Texto</b-button>
    <b-button variant="warning">Texto</b-button>
    <b-button variant="dark">Texto</b-button>

    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <b-button variant="dark" href="#">Texto</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <b-button variant="dark" href="#">Texto</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <b-button variant="dark" href="#">Texto</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Cards"
};
</script>