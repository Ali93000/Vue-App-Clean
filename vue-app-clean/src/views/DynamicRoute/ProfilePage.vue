<template>
  <div class="profile">
    <h1>Profile Page</h1>
    <hr />
    <h4>Student Data from Params & Query</h4>
    <p>Id: {{ $route.params.userId }}</p>
    <p>Name: {{ $route.params.userName }}</p>
    <p>Age: {{ $route.query.age }}</p>
    <p>Grade: {{ $route.query.grade }}</p>
  </div>
</template>
