<template>
  <div class="provide-injec">
    <h1>Provide Inject Component</h1>
    <p>Name From Parent: {{ name }}</p>
    <p>Age From Parent: {{ age }}</p>
    <button @click="myFunc">Call Injected Func</button>
  </div>
</template>

<script>
export default {
  inject: ["name", "age", "myFunc"],
};
</script>
