<script setup>
import { capitalizeFirstLetter } from "../utils/index.js";

const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true,
  },
});
const today = new Date().toLocaleString("en-EN", {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
});
</script>

<template>
  <div class="summary">
    <div
      :style="`
        background-image: url('./src/assets/img/weather-main/${weatherInfo?.weather[0].description}.png');
      `"
      class="pic-main"
    ></div>
    <div class="weather">
      <div class="temp">{{ Math.round(weatherInfo?.main?.temp) }} °C</div>
      <div class="weather-desc text-block">
        {{ capitalizeFirstLetter(weatherInfo?.weather[0].description) }}
      </div>
    </div>
    <div class="city text-block">
      {{ capitalizeFirstLetter(weatherInfo?.name) }},
      {{ capitalizeFirstLetter(weatherInfo?.sys?.country) }}
    </div>
    <div class="date text-block">{{ today }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
</style>
