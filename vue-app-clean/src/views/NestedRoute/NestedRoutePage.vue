<template>
  <div class="nested-route">
    <h1>Nested Route Page</h1>
    <hr />
    <router-link
      :style="{ gap: '50px', padding: '10px' }"
      :to="{ name: PagesNamesEnum.MyLearningPage }"
      >My Learning
    </router-link>
    <router-link
      :style="{ gap: '50px' }"
      :to="{ name: PagesNamesEnum.MyWishlistPage }"
    >
      My WishList
    </router-link>
  </div>
  <div class="container">
    <router-view />
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
