<template>
  <div class="slots">
    <h1>Slots Componet</h1>
    <form>
      <slot name="slotHeaders"></slot>
      <slot name="slotInputs"></slot>
      <slot name="slotActions"></slot>
    </form>
  </div>
</template>
