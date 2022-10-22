<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const updateLocale = (e) => {
  if (e.target.value == "system") {
    locale.value = navigator.language.slice(0, 2);
    localStorage.removeItem("locale");
  } else {
    locale.value = e.target.value;
    localStorage.setItem("locale", e.target.value);
  }
};

const countryToFlag = (country) =>
  country
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
</script>

<template>
  <div>
    <select @change="updateLocale" name="locale" class="py-1 px-1">
      <option value="system">⚙️</option>
      <option value="it">
        {{ countryToFlag("it") }}
      </option>
      <option value="en">
        {{ countryToFlag("us") }}
      </option>
    </select>
  </div>
</template>
