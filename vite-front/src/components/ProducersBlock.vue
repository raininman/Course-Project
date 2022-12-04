<template>
  <div class="category_producer">
    <Producer
      v-for="producer of filterProducers"
      :key="producer._id"
      :img="producer.photoURL"
      :title="producer.name"
      :id="producer._id"
    />
  </div>
</template>

<script setup>
import Producer from "@/components/Producer.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api.js";

const route = useRoute();
const router = useRouter();

const filterProducers = ref([]);
const producers = ref([]);

onMounted(async () => {
  producers.value = await api.getProducers();
  producers.value.forEach((producer) => {
    if (producer.category == route.params.id) {
      filterProducers.value.push(producer);
      console.log(filterProducers.value);
    }
  });
});
</script>

<style lang="scss" scoped>
.category_producer {
  padding: 0 80px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  font-family: var(--exo2);
}
</style>
