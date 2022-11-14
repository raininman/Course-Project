<template>
  <button v-if="type === 'button'" class="btn" :style="{backgroundColor:background}">
    <slot/>
  </button>
  <router-link v-else class="btn" :style="{backgroundColor:background}" :to="to">
    <slot/>
  </router-link>
</template>

<script setup>
  const props = defineProps({
    background:{
      type:String,
      required:false
    },
    type:{
      type:String,
      default:'button'
    },
    to:{
      type:String,
      required:false
    }
  })
</script>

<style lang="scss" scoped>
.btn{
  background: var(--primary);
  font-family: var(--satoshi);
  font-size: 16px;
  color: #fff;
  padding: 18px 32px;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  border: none;
  text-decoration: none;
  &:hover{
    opacity: 0.8;
  }
}
</style>