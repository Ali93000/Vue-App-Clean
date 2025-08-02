<template>
  <div class="props">
    <h1>Props Component</h1>
  </div>
  <div class="props-students">
    <table class="students-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Degree</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in studentsProps" :key="item.id">
          <td>{{ item.Id }}</td>
          <td>{{ item.Name }}</td>
          <td>{{ item.Age }}</td>
          <td>{{ item.Degree }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    studentsProps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.students-table {
  width: 60%;
  margin: 24px auto;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}
.students-table th,
.students-table td {
  border: 1px solid #ddd;
  padding: 12px 16px;
  text-align: left;
}
.students-table th {
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;
}
.students-table tr:nth-child(even) {
  background-color: #fafafa;
}
.students-table tr:hover {
  background-color: #f0f8ff;
}
</style>
