<script setup>
import { onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

onBeforeMount(() => {
  const lang = localStorage.getItem("locale");
  if (lang) locale.value = lang;
  else locale.value = navigator.language.slice(0, 2);
});
</script>

<template>
  <router-view></router-view>
</template>
