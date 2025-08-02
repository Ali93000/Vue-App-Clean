<template>
  <div class="props2">
    <h1>Props Example 2 Component</h1>
    <div class="props-data">
      <ul>
        <li v-for="(item, index) in propsStudentData" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <p>is active: {{ myActive }}</p>
    <button @click="DeleteStudent()">Change Reference Type</button>
    <button @click="myActive = !myActive">Change Premitive Type</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myStudents: this.propsStudentData,
      myActive: this.isActive,
    };
  },
  props: {
    propsStudentData: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    DeleteStudent() {
      this.myStudents.shift();
    },
  },
};
</script>
