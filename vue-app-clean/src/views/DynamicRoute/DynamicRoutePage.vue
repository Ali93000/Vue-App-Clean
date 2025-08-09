<template>
  <div class="dynamic">
    <h1>Dynamic Route</h1>
    <hr />
    <h3>Print Params</h3>
    <p>UserId:- {{ $route.params.userId }}</p>
    <p>UserName:- {{ $route.params.userName }}</p>
    <hr />
    <h3>Print Query</h3>
    <p>Grade:- {{ $route.query.grade }}</p>
    <p>age:- {{ $route.query.age }}</p>
    <hr />
    <h3>Example Using $router.Push with Params & Query</h3>
    <div class="students">
      <ul>
        <li v-for="item in students" :key="item.id">
          <p>Id: {{ item.id }}</p>
          <p>Name: {{ item.name }}</p>
          <p>Age: {{ item.age }}</p>
          <p>Grade: {{ item.grade }}</p>
          <button
            @click="viewProfile(item.id, item.name, item.age, item.grade)"
          >
            View Profile
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PagesNamesEnum from "@/components/Helpers/PagesNames";
export default {
  data() {
    return {
      students: [
        { id: 1, name: "Ali", age: 20, grade: "A" },
        { id: 2, name: "Sara", age: 22, grade: "B+" },
        { id: 3, name: "Omar", age: 19, grade: "A-" },
        { id: 4, name: "Lina", age: 21, grade: "B" },
      ],
      PagesNamesEnum,
    };
  },
  methods: {
    viewProfile(id, name, age, grade) {
      this.$router.push({
        name: PagesNamesEnum.ProfilePage,
        params: { userId: id, userName: name },
        query: { age: age, grade: grade },
      });
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>
