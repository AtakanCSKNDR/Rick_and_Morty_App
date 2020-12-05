<template>
  <div class="Characters" style="background:#24282f; height:100%">
    <v-container fluid>
      <v-card class="mx-auto" color="#385F73" dark>
        <v-row justify="space-around">
          <v-avatar size="200" style="margin-top:15px">
            <img :src="data.image" alt="John" />
          </v-avatar>
        </v-row>
        <v-row>
          <v-card-text>
            <p
              style="text-align:center"
              class="display-2 text--primary text-wrapper"
            >
              {{ data.name }}
            </p>
          </v-card-text>
        </v-row>
        <v-row>
          <v-card-subtitle>
            <v-card-text>
              <p>Gender : {{ data.gender }}</p>
              <p>Origin : {{ data.origin.name }}</p>
              <p>{{ data.status }} - {{ data.species }}</p>
            </v-card-text>
          </v-card-subtitle>
        </v-row>
        <v-row>
          <v-card-text>
            <p class="display-1 text--primary text-wrapper">
              Oynadığı Bölümler
            </p>
          </v-card-text>
        </v-row>

        <v-list style="background:#385F73; max-height: 300px; overflow: auto;">
          <v-list-item-group>
            <v-list-item
              v-for="(item, i) in data.episode"
              :key="i"
              @click="goEpisode(item)"
            >
              <v-list-item-icon style="margin-bottom:0px">
                <v-avatar color="#24282f" size="25">
                  <span>{{ i + 1 }}</span>
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Bölüm - {{ i + 1 }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Episodes",
  props: ["characterDetail"],
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getItems() {
      axios.get(`${this.characterDetail}`).then((response) => {
        this.data = response.data;
      });
    },
    goEpisode(row) {
      this.$router.push({
        name: "Episodes",
        params: { episodeDetail: row },
      });
    },
  },
  created() {
    if (!this.characterDetail) {
      this.$router.push("/");
    }
    this.getItems();
  },
};
</script>

<style scoped>
.character-card {
  max-height: 300px;
  overflow: auto;
}
</style>
