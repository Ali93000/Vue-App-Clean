<template>
  <div class="provide-inj">
    <h1>Provide Inject Page</h1>
    <h3>Here we will provide from parent properties & functions</h3>
    <hr />
    <provide-inject-page-component></provide-inject-page-component>
  </div>
</template>

<script>
import ProvideInjectPageComponent from "@/components/ProvideInject/ProvideInjectPageComponent.vue";

export default {
  data() {
    return {
      name: "Ali From Parent",
      age: 32,
    };
  },
  methods: {
    sayHi() {
      console.log("Hi From Parent");
    },
  },
  components: {
    ProvideInjectPageComponent,
  },
  provide() {
    return {
      name: this.name,
      age: this.age,
      myFunc: this.sayHi,
    };
  },
};
</script>
