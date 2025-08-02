<template>
  <div class="slot-page">
    <h1>Slots Page</h1>
    <slot-component>
      <template #slotHeaders>
        <p>this is slot headers</p>
      </template>
      <template #slotInputs>
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
      </template>
      <template #slotActions>
        <input type="submit" value="Submit" />
      </template>
    </slot-component>
  </div>
</template>

<script>
import SlotComponent from "@/components/Slots/SlotsComponents.vue";

export default {
  components: {
    SlotComponent,
  },
};
</script>
