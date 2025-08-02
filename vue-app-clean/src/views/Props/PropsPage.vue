<template>
  <div class="props-page">
    <h1>Props Page</h1>
    <hr />
    <props-component :studentsProps="studnets"></props-component>
    <hr />
    <h1>Props Example 2 Reference & Premitive Data Types</h1>
    <props-example-2
      :propsStudentData="studentsData"
      :isActive="isActive"
    ></props-example-2>
    <hr />
    <props-example-2
      :propsStudentData="studentsData"
      :isActive="isActive"
    ></props-example-2>
  </div>
</template>

<script>
import PropsComponent from "@/components/Props/PropsComponent.vue";
import PropsExample2 from "@/components/Props/PropsExample2.vue";

export default {
  data() {
    return {
      studnets: [
        { Id: 1, Name: "Ali", Age: 22, Degree: "Computer Science" },
        { Id: 2, Name: "Sara", Age: 21, Degree: "Mathematics" },
        { Id: 3, Name: "John", Age: 23, Degree: "Engineering" },
      ],
      studentsData: ["Ali", "Mostafa", "Mahmoud", "Mohamed"],
      isActive: true,
    };
  },
  components: {
    PropsComponent,
    PropsExample2,
  },
};
</script>
