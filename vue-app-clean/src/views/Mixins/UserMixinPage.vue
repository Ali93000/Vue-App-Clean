<template>
  <div class="mixin">
    <h1>Mixin Page</h1>
    <hr />
    <div class="users">
      <ul>
        <li v-for="item in users" :key="item.id">
          <p class="bold">Id: {{ item.id }}</p>
          <p class="bold">
            Name: {{ item.firstName }} {{ item.maidenName }} {{ item.lastName }}
          </p>
          <p class="bold">Email: {{ item.email }}</p>
          <p class="bold">Phone: {{ item.phone }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UsersMixin from "@/mixins/usersMixin";

export default {
  data() {
    return {};
  },
  mixins: [UsersMixin],
};
</script>

<style scoped>
.bold {
  font-size: large;
}
</style>
