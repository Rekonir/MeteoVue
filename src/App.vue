<script setup>
import WeatherSummary from "/src/components/WeatherSummary.vue";
import Highlight from "/src/components/Highlight.vue";
import { API_KEY, BASE_URL } from "../src/constants/index.js";
import { ref, onMounted} from "vue";

const city = ref("Bryansk");
const weatherInfo = ref(null);

const getWeather = () => {
  fetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`)
    .then((data) => data.json())
    .then((data) => (weatherInfo.value = data));
};

onMounted(getWeather)
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
                  <input v-model="city"
                   type="text" class="search" 
                   @keyup.enter="getWeather"/>
                </div>
                <WeatherSummary :weatherInfo="weatherInfo"/>
              </div>
            </section>
            <section class="section section-right">
              <Highlight />
            </section>
          </div>
          <div class="sections">
            <section class="section-bottom">
              <div class="block-bottom">
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-coords"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Longitude: 2.3488
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Longitude measures distance east or west of the prime
                        meridian.
                      </div>
                    </div>
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Latitude: 48.8534
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Latitude lines start at the equator (0 degrees latitude)
                        and run east and west, parallel to the equator.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="section-bottom">
              <div class="block-bottom">
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-humidity"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Humidity: 60 %
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Humidity is the concentration of water vapor present in
                        the air. Water vapor, the gaseous state of water, is
                        generally invisible to the human eye.
                        <br /><br />
                        The same amount of water vapor results in higher
                        relative humidity in cool air than warm air.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/styles/main.scss";
</style>
