<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import LocaleChanger from "../components/LocaleChanger.vue";

const { t } = useI18n();

const clicks = ref(0);

const increaseClicks = () => {
  clicks.value++;
};
</script>

<template>
  <div class="flex flex-col flex-1 justify-center items-center gap-5">
    <img src="/vueLogo.png" />
    <p class="text-xl">Vue-Tailwind Template</p>
    <p class="text-xl">{{ t("welcome") }}</p>
    <button
      class="bg-emerald-500 hover:bg-emerald-600 active:translate-y-[0.1rem] transition text-white font-medium px-5 py-1 rounded"
      @click="increaseClicks"
    >
      {{ clicks }}
    </button>
    <LocaleChanger />
  </div>
</template>
