<template>
  <ProducerBlock :producer="currentProducer" v-if="currentProducer" />
  <ProducerFilm />
</template>

<script setup>
import ProducerBlock from '@/components/ProducerBlock.vue'
import ProducerFilm from '@/components/ProducerFilm.vue'
import { ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api.js'

const route = useRoute()
const router = useRouter()
const producerId = ref('')
const currentProducer = ref({})

onMounted(async () => {
  producerId.value = route.params.id
  currentProducer.value = await api.getProducer(producerId.value)
  document.documentElement.scrollTop = 0
})
</script>
