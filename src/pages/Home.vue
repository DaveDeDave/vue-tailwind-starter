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
  <div class="flex flex-1 flex-col items-center justify-center gap-5">
    <img src="/vueLogo.png" />
    <p class="text-xl">Vue-Tailwind Template</p>
    <p class="text-xl">{{ t("welcome") }}</p>
    <button
      class="rounded bg-emerald-500 px-5 py-1 font-medium text-white transition hover:bg-emerald-600 active:translate-y-[0.1rem]"
      @click="increaseClicks"
    >
      {{ clicks }}
    </button>
    <LocaleChanger />
  </div>
</template>
