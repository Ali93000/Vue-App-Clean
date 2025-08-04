<template>
  <div class="products-page">
    <h1>Products Page</h1>
    <hr />
    <http-component></http-component>
  </div>
</template>

<script>
import HttpComponent from "@/components/HTTPRequested/HttpComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    HttpComponent,
  },
};
</script>
