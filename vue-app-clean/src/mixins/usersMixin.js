const userMixin = {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      await fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => {
          this.users = data.users;
          console.log(data);
        });
    },
  },
  async mounted() {
    await this.getUsers();
  },
};

export default userMixin;
