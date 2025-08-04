<template>
  <div class="custom-directive">
    <h1>Custom Directive Component</h1>
    <hr />
    <p>Example 1</p>
    <p v-changeSize="fontSize">This is custom-directive change size</p>
    <input type="number" v-model="fontSize" placeholder="Enter Font Size" />
    <hr />
    <p>Example 2</p>
    <p v-changeColor="color">This is custome directive to chane color</p>
    <input type="text" placeholder="enter color name" v-model="color" />
    <hr />
    <p>Example 3</p>
    <div v-changeBackground="background">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis
      neque blanditiis, corporis assumenda nemo eius, perferendis cupiditate
      corrupti in cum ad animi dignissimos accusantium voluptas aut
      exercitationem nisi vel?
    </div>
    <input
      type="text"
      v-model="background"
      placeholder="Enter Background Color"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "",
      fontSize: 20,
      background: "",
    };
  },
  directives: {
    changeBackground(el, binding) {
      el.style.backgroundColor = binding.value;
    },
  },
};
</script>
