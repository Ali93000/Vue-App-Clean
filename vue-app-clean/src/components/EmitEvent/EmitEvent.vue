<template>
  <div class="emit">
    <h1>Emit Component (Child)</h1>
    <button @click="EmitToParent()">Emit To Parent</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emitObject: {
        value: "Emit Value",
        message: "Emit Message",
        source: "Child (Emit Event Component)",
      },
    };
  },
  methods: {
    EmitToParent() {
      this.$emit("EmitObjectToParent", this.emitObject);
    },
  },
};
</script>
