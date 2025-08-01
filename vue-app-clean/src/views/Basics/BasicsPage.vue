<template>
  <div class="basics">
    <h1>Basics Page</h1>
    <hr />
    <h3>Call Methods</h3>
    <button @click="SayHi()">Call Method</button>
    <hr />
    <h3>Data Binding Using v-bind :</h3>
    <a :href="googleUrl" target="_blank">Google</a>
    <hr />
    <h3>Events Using v-on:Event OR @</h3>
    <button @click="number++">Icrease Number</button>
    <p>Number is: {{ number }}</p>
    <a :href="googleUrl" @click.prevent>Event Modifiers</a>
    <p>Keyboard Events</p>
    <input type="text" @keyup="PrintMyName()" />
    <hr />
    <h3>Two Way Data Binding Using v-model</h3>
    <label>{{ toWayBinding }}</label>
    <input type="text" v-model="toWayBinding" />
    <p>Example 2</p>
    <form action="" @submit.prevent="sendData">
      <label for="userName">Enter User Name</label>
      <input type="text" v-model="toWayBindingObject.userName" />
      <label for="password">Enter Password</label>
      <input type="password" v-model="toWayBindingObject.password" />
      <input type="submit" />
    </form>
    <hr />
    <h3>Computed it should return a value</h3>
    <p>number one is: {{ computedObject.numberOne }}</p>
    <p>number one * 2 -- {{ numberOneChanged }}</p>
    <button @click="computedObject.numberOne++">Increase Number ONE</button>
    <p>number two is: {{ computedObject.numberTwo }}</p>
    <p>number two + 10 -- {{ numberTwoChanged }}</p>
    <button @click="computedObject.numberTwo++">Increase Number TWO</button>
    <hr />
    <h3
      :style="`color: ${dynamicSstyle.color}; font-size: ${dynamicSstyle.fontSize}px`"
    >
      This Is Dynamic Style
    </h3>
    <input type="number" v-model="dynamicSstyle.fontSize" />
    <hr />
    <h3>IF Conditions</h3>
    <h5>His Name is {{ ifObject.name }}, Age {{ ifObject.age }}</h5>
    <p v-if="ifObject.age > 30">his age is > 30 years</p>
    <p v-else-if="ifObject.age == 30">his age = 30</p>
    <p v-else>his age less than 30</p>
    <button @click="ifObject.age++">Increase Age</button>
    <hr />
    <h3>V-For</h3>
    <div class="for" v-for="item in forObject" :key="item.id">
      <p>Id:- {{ item.id }}</p>
      <p>Name: {{ item.name }}</p>
    </div>
    <hr />
    <h3>Refs</h3>
    <p>Age: {{ refObject.age }}</p>
    <input type="text" ref="myInput" />
    <button @click="ChangeAgeByRef">ChangeAgeByRef</button>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      googleUrl: "https://www.google.com/",
      number: 0,
      toWayBinding: "",
      toWayBindingObject: {
        userName: "",
        password: "",
      },
      computedObject: {
        numberOne: 0,
        numberTwo: 0,
      },
      dynamicSstyle: {
        color: "blue",
        fontSize: 15,
      },
      ifObject: {
        name: "Ali",
        age: 28,
      },
      forObject: [
        {
          id: 1,
          name: "Ali",
        },
        {
          id: 2,
          name: "Mahmoud",
        },
        {
          id: 3,
          name: "Moustafa",
        },
      ],
      refObject: {
        age: 29,
      },
    };
  },
  methods: {
    SayHi() {
      console.log("Hi From Method");
    },
    PrintMyName() {
      console.log("Ali");
    },
    sendData() {
      const user = {
        name: this.toWayBindingObject.userName,
        password: this.toWayBindingObject.password,
      };
      console.log(user);
    },
    ChangeAgeByRef() {
      this.refObject.age = this.$refs.myInput.value;
      console.log(this.$refs);
    },
  },
  computed: {
    numberOneChanged() {
      console.log("Number one changed");
      return this.computedObject.numberOne * 2;
    },
    numberTwoChanged() {
      console.log("Number two changed");
      return this.computedObject.numberTwo + 10;
    },
  },
};
</script>
