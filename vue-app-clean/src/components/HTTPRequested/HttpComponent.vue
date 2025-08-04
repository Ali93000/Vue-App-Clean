<template>
  <div class="http">
    <h1>Http Request Component</h1>
    <br />
    <h4>Products List</h4>
    <div class="products-list">
      <ul class="products-list">
        <li v-for="item in products" :key="item.id">
          <p>Id: {{ item.id }}</p>
          <p>Title: {{ item.title }}</p>
          <p>Description: {{ item.description }}</p>
          <p>Price: {{ item.price }}</p>
          <p>Brand: {{ item.brand }}</p>
          <img style="width: 150px" :src="item.images?.[0]" alt="image" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
          console.log(data);
        });
    },
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>

<style scoped>
.products-pages {
  padding: 20px;
}
.products-list {
  display: flex;
  flex-wrap: wrap;
}
.products-list ul {
  list-style-type: none;
  display: content;
  padding: 0;
}
.products-list li {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: calc(33.333% - 20px);
}
.products-list img {
  max-width: 100%;
  height: auto;
}
.products-list p {
  margin: 5px 0;
}
.products-list li p {
  font-size: 14px;
}
.products-list li img {
  display: block;
  margin: 0 auto;
}
.products-list li:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.products-list li h2 {
  font-size: 18px;
  margin-bottom: 10px;
}
.products-list li h3 {
  font-size: 16px;
  margin-bottom: 5px;
}
.products-list li p {
  font-size: 14px;
  color: #555;
}
.products-list li button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}
.products-list li button:hover {
  background-color: #0056b3;
}
.products-list li button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.products-list li button:disabled:hover {
  background-color: #ccc;
}
.products-list li .price {
  font-weight: bold;
  color: #333;
}
.products-list li .description {
  font-size: 12px;
  color: #777;
}
.products-list li .category {
  font-style: italic;
  color: #999;
}
.products-list li .brand {
  font-weight: bold;
  color: #333;
}
.products-list li .image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 10px auto;
}
.products-list li .image img {
  width: 100%;
  height: auto;
}
.products-list li .image img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
.products-list li .image img:active {
  transform: scale(0.95);
}
.products-list li .image img:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}
.products-list li .image img:focus:hover {
  transform: scale(1.05);
}
.products-list li .image img:focus:active {
  transform: scale(0.95);
}
.products-list li .image img:focus:disabled {
  outline: none;
}
.products-list li .image img:focus:disabled:hover {
  transform: none;
}
.products-list li .image img:focus:disabled:active {
  transform: none;
}
.products-list li .image img:focus:disabled:focus {
  outline: none;
}
.products-list li .image img:focus:disabled:focus:hover {
  transform: none;
}
.products-list li .image img:focus:disabled:focus:active {
  transform: none;
}
.products-list li .image img:focus:disabled:focus:disabled {
  outline: none;
}
</style>
