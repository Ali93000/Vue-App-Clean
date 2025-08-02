<template>
  <div class="hooks">
    <h1>Hooks Component</h1>
    <p>Age:- {{ age }}</p>
    <button @click="age++">Increase Age</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 30,
    };
  },
  beforcreate() {
    alert("Before Created Hook");
  },
  created() {
    alert("Created Hook");
  },
  beforeMount() {
    alert("Before Mount Hook");
  },
  mounted() {
    alert("Mounted Hook");
  },
  beforeUpdate() {
    alert("Before Update Hook");
  },
  updated() {
    alert("Updated Hook");
  },
  beforeUnmount() {
    alert("Before Un Mounted Hook");
  },
  unmounted() {
    alert("Un Mounted Hook");
  },
};
</script>
