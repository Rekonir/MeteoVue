<script setup>
import WeatherSummary from "/src/components/WeatherSummary.vue";
import Highlight from "/src/components/Highlight.vue";
import Coords from "/src/components/Coords.vue";
import Humidity from "/src/components/Humidity.vue";

import { API_KEY, BASE_URL } from "../src/constants/index.js";
import { ref, onMounted, computed } from "vue";
import { capitalizeFirstLetter } from "./utils";

const city = ref("Bryansk");
const weatherInfo = ref(null);
const isError = computed(() => weatherInfo.value?.cod !== 200);

const getWeather = () => {
  fetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`)
    .then((data) => data.json())
    .then((data) => (weatherInfo.value = data));
};

onMounted(getWeather);
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section
              :class="['section', 'section-left', { 'section-error': isError }]"
            >
              <div class="info">
                <div class="city-inner">
                  <input
                    v-model="city"
                    type="text"
                    class="search"
                    @keyup.enter="getWeather"
                    v-on:blur="getWeather"
                  />
                </div>
                <WeatherSummary v-if="!isError" :weatherInfo="weatherInfo" />
                <div v-else class="error">
                  <div class="error-title">Oooops! Something went wrong</div>
                  <div v-if="weatherInfo?.message" class="error-message">
                    {{ capitalizeFirstLetter(weatherInfo?.message) }}
                  </div>
                </div>
              </div>
            </section>
            <section v-if="!isError" class="section section-right">
              <Highlight :weatherInfo="weatherInfo" />
            </section>
          </div>
          <div v-if="!isError" class="sections">
            <Coords :coord="weatherInfo.coord" />
            <Humidity :humidity="weatherInfo.main.humidity" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/styles/main.scss";
</style>
