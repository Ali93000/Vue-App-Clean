<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="@/assets/face-logo.png" alt="logo" />
    </div>
    <div class="links">
      <ul>
        <li v-for="item in myRoutes" :key="item.name">
          <router-link
            v-if="item.meta.requiresParams"
            :to="{
              name: item.name,
              params: { userId: 100, userName: 'Ali' },
              query: { grade: 'Grade 5', age: 32 },
            }"
            >{{ item.meta.title }}
          </router-link>

          <router-link v-else :to="{ name: item.name }">{{
            item.meta.title
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="btns">
      <button style="margin-right: 10px">Login</button>
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myRoutes: [],
    };
  },
  mounted() {
    this.myRoutes = this.$router.options.routes.filter((c) => c.meta.isActive);
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #d4d4d4;
  box-shadow: 0px 0px 9px -3px black;
}

ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
}
img {
  width: 100px;
  height: 60px;
}
button {
  background-color: rgb(17, 131, 104);
  color: white;
  padding: 5px 10px;
}
</style>
