<script setup>
import WeatherSummary from "/src/components/WeatherSummary.vue";
import Highlight from "/src/components/Highlight.vue";
import Coords from "/src/components/Coords.vue";
import Humidity from "/src/components/Humidity.vue";

import { API_KEY, BASE_URL } from "../src/constants/index.js";
import { ref, onMounted } from "vue";

const city = ref("Bryansk");
const weatherInfo = ref(null);

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
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input
                    v-model="city"
                    type="text"
                    class="search"
                    @keyup.enter="getWeather"
                  />
                </div>
                <WeatherSummary :weatherInfo="weatherInfo" />
              </div>
            </section>
            <section class="section section-right">
              <Highlight :weatherInfo="weatherInfo"/>
            </section>
          </div>
          <div v-if="weatherInfo?.weather" class="sections">
            <Coords :coord="weatherInfo.coord"/>
            <Humidity :humidity="weatherInfo.main.humidity"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/styles/main.scss";
</style>
