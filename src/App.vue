<template>
  <div>
    <p>Frontend security demo</p>

    <!-- xss attack -->
    <button class="btn" @click="submitCounter1 += 1">Submit(XSS Attack)</button>
    <div v-if="Boolean(submitCounter1)" :key="submitCounter1" v-html="innerHtml1" class="content" />

    <!-- prevent xss attack -->
    <button class="btn" @click="submitCounter2 += 1">Submit</button>
    <div v-if="submitCounter2" :key="submitCounter2" v-html="$xss(innerHtml2)" class="content" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const accessToken = '12kfau9xfdzlvlg129a=f38fskuxvhqwr';
const submitCounter1 = ref(0);
const innerHtml1 = `<img src='../ww.png' onerror="alert('ACCESS_TOKEN: ${accessToken}')" />`;

const submitCounter2 = ref(0);
const innerHtml2 = `<img src='../ww.png' onerror="alert('ACCESS_TOKEN: ${accessToken}')" />`;
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.btn {
  margin: 0 10px;
  background: #666666;
}

.content,
:deep(img) {
  display: none;
}
</style>
