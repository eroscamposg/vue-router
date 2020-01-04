<template>
  <!-- FORMS AND OTHER INPUTS -->
  <div class="mt-5">
    <h1>Formularios</h1>
    <form>
      <b-row>
        <b-col md="3">
          <b-form-input type="text" v-model="text" :state="checkForm"></b-form-input>
          <small>Minimo 3 caracteres</small>
          <p>Texto: {{text}}</p>
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="animals"></b-form-select>
          <p>Seleccion: {{select}}</p>
        </b-col>
        <b-col md="3">
          <b-form-radio-group v-model="radio" :options="radioAnimals"></b-form-radio-group>
          <p>Radio: {{radio}}</p>
        </b-col>
        <b-col md="3">
          <b-form-checkbox-group v-model="check" :options="checkAnimals"></b-form-checkbox-group>
          <p>Check: {{check}}</p>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      text: "",
      select: null,
      animals: [
        { value: null, text: "Seleccione un animal" },
        { value: "perro", text: "Guau guau" },
        { value: "gato", text: "Miau miau" },
        { value: "pato", text: "Quack quack" }
      ],
      radio: null,
      radioAnimals: [
        { value: "perro", text: "Guau guau" },
        { value: "gato", text: "Miau miau" },
        { value: "pato", text: "Quack quack" }
      ],
      check: [],
      checkAnimals: [
        { value: "perro", text: "Guau guau" },
        { value: "gato", text: "Miau miau" },
        { value: "pato", text: "Quack quack" }
      ]
    };
  },
  //se devuelve true o false dinamicamente
  computed: {
    checkForm() {
      return this.text.length > 2 ? true : false;
    }
  }
};
</script>