<template>
  <div class="router">
    <h1>Router Page</h1>
    <hr />
    <h5>Use router.Push</h5>
    <button @click="$router.push({ name: PagesNamesEnum.HomePage })">
      Push To Home Page
    </button>
    <hr />
    <h5>Loop On $router.options.routes in Navbar to Add Pages Dynamic</h5>
    <hr />
    <h5>Check Go and replace functions</h5>
    <hr />
    <h5>afterEach & beforeEach >> check it in router index</h5>
  </div>
</template>

<script>
import PagesNamesEnum from "@/components/Helpers/PagesNames";

export default {
  data() {
    return {
      PagesNamesEnum,
    };
  },
  components: {},
  mounted() {
    console.log(this.$router);
    console.log("Routes Options");
    console.log(this.$router.options);
  },
};
</script>
