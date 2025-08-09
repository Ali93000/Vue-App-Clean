<template>
  <div class="not-found">
    <h1>Not Found Page</h1>
    <hr />
    <h3>Page Not Found</h3>
    <button @click="$router.push({ name: PagesNamesEnum.HomePage })">
      Back To Home Page
    </button>

    <button>
      <router-link :to="{ name: PagesNamesEnum.HomePage }">
        Back To Home Page Router Link
      </router-link>
    </button>
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
};
</script>
