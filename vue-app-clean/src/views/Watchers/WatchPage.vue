<template>
  <div class="watch">
    <h1>Watchers Page</h1>
    <hr />
    <h4>Watch Property Example</h4>
    <input type="text" v-model="userName" />
    <p>new Value: {{ newVal }}</p>
    <p>old Value: {{ oldVal }}</p>
    <hr />
    <h4>Watch Property In Object</h4>
    <input type="text" v-model="userData.name" />
    <p>new Value: {{ userData.newVal }}</p>
    <p>old Value: {{ userData.oldVal }}</p>
    <hr />
    <h4>Watch Array Data</h4>
    <input
      type="text"
      v-model="arrData"
      placeholder="enter data to push to Array"
    />
    <button @click="myArr.push(arrData)">Pust Data To Array</button>
    <hr />
    <h4>Watch Object</h4>
    <input type="text" v-model="student.name" />
    <input type="number" v-model="student.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      newVal: "",
      oldVal: "",
      userData: {
        name: "",
        newVal: "",
        oldVal: "",
      },
      myArr: [],
      arrData: "",
      student: {
        name: "",
        age: 32,
      },
    };
  },
  watch: {
    userName(newValue, oldValue) {
      this.newVal = newValue;
      this.oldVal = oldValue;
      console.log("new value", newValue);
      console.log("old value", oldValue);
    },
    "userData.name"(newValue, oldValue) {
      this.userData.oldVal = oldValue;
      this.userData.newVal = newValue;
      console.log("new value", newValue);
      console.log("old value", oldValue);
    },
    myArr: {
      handler(newValue, oldValue) {
        console.log("Array changed");
        console.log("new value", newValue);
        console.log("old value", oldValue);
      },
      deep: true,
    },
    student: {
      handler(newValue, oldValue) {
        console.log("new value", newValue);
        console.log("old value", oldValue);
      },
      deep: true,
    },
  },
};
</script>
