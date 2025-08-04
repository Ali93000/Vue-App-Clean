<template>
  <div class="computed">
    <h1>Computed Page</h1>
    <div>
      <input type="text" name="seach" id="search" v-model="search" />
    </div>
    <div class="users">
      <ul>
        <li v-for="item in filterUsers" :key="item.id">
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
    return {
      search: "",
      usersList: [],
    };
  },
  mounted() {
    console.log("*****", this.users);

    //this.usersList = this.users;
  },
  mixins: [UsersMixin],
  computed: {
    filterUsers() {
      return this.users.filter((us) => us.firstName.match(this.search));
    },
  },
};
</script>
