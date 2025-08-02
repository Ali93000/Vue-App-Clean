<template>
  <div class="emit-best">
    <h1>Emit Best Practics</h1>
    <button @click="$emit('EmitDataToParent', emitPractisObject)">
      Emit To Parent Best Practics
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emitPractisObject: {
        id: "Emit Id",
        msg: "Emit MSG",
      },
    };
  },
  emits: ["EmitDataToParent"],
};
</script>
