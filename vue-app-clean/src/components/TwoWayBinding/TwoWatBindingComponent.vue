<template>
  <div class="binding">
    <h1>Two Way Binding Component</h1>
    <form action="" @submit.prevent="SaveData()">
      <div>
        <label for="firstName">FirstName</label>
        <input type="text" v-model="student.firstName" />
      </div>
      <div>
        <label for="lastName">LastName</label>
        <input type="text" v-model="student.lasttName" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="student.email" />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" v-model="student.age" />
      </div>
      <div>
        <label for="bio">Bio</label>
        <textarea v-model="student.bio"></textarea>
      </div>
      <div>
        <h5>Gender</h5>
        <label for="male">Male</label>
        <input
          type="radio"
          v-model="student.gender"
          name="male"
          id="male"
          value="male"
        />
        <label for="feMale">Female</label>
        <input
          type="radio"
          v-model="student.gender"
          name="female"
          id="femal"
          value="female"
        />
      </div>
      <div>
        <h5>Favourite Sports:-</h5>
        <label for="football">Football</label>
        <input
          type="checkbox"
          v-model="student.sports.football"
          name="football"
        />
        <label for="tennis">Tennis</label>
        <input type="checkbox" v-model="student.sports.tennis" name="tennis" />
        <label for="basketball">Basketball</label>
        <input
          type="checkbox"
          v-model="student.sports.basketball"
          name="basketball"
        />
      </div>
      <div>
        <h5>Grade</h5>
        <select v-model="student.grade">
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="foure">Foure</option>
        </select>
      </div>
      <div style="width: 100%">
        <input style="width: 50%" type="submit" value="Save" />
      </div>
    </form>
    <hr />
    <div>
      <ul>
        <li v-for="(item, index) in students" :key="index">
          <p>Name: {{ item.firstName }} {{ item.lasttName }}</p>
          <p>Email: {{ item.email }}</p>
          <p>Age: {{ item.age }}</p>
          <p>Bio: {{ item.bio }}</p>
          <p>Gender: {{ item.gender }}</p>
          <p>Grade: {{ item.grade }}</p>
          <p>
            Sports:
            <strong v-for="(sp, key, i) in item.sports" :key="i">
              <br />
              <span v-if="sp"> {{ key }}</span>
            </strong>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
      student: {
        firstName: "",
        lasttName: "",
        email: "",
        age: 0,
        gender: "",
        grade: "",
        sports: {
          tennis: false,
          football: false,
          basketball: false,
        },
      },
    };
  },
  methods: {
    SaveData() {
      this.students.push(this.student);
      this.student = {
        firstName: "",
        lasttName: "",
        email: "",
        age: 0,
        gender: "",
        grade: "",
        sports: {
          tennis: false,
          football: false,
          basketball: false,
        },
      };
    },
  },
};
</script>

<style scoped></style>
