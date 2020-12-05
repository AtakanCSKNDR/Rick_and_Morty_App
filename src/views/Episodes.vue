<template>
  <div class="Episodes" style="background:#24282f; height:100%">
    <v-container fluid>
      <v-card class="mx-auto wrapper-card" color="#385F73" dark>
        <v-card-text>
          <div>{{ data.episode }}</div>
          <p class="display-3 text--primary text-wrapper">
            {{ data.name }}
          </p>
          <p>{{ data.air_date }}</p>
          <br />
          <p class="display-1 text--primary text-wrapper">
            Characters
          </p>
        </v-card-text>

        <v-list style="background:#385F73; max-height: 300px;overflow: auto;">
          <v-list-item-group>
            <v-list-item
              v-for="(item, i) in data.characters"
              :key="i"
              @click="goCharacter(item)"
            >
              <v-list-item-icon style="margin-bottom:0px">
                <v-avatar color="#24282f" size="25">
                  <span class="white--text">{{ i + 1 }}</span>
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Character - {{ i + 1 }}</v-list-item-title>
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
  props: ["episodeDetail"],
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getItems() {
      axios.get(`${this.episodeDetail}`).then((response) => {
        this.data = response.data;
      });
    },
    goCharacter(row) {
      this.$router.push({
        name: "Characters",
        params: { characterDetail: row },
      });
    },
  },
  created() {
    if (!this.episodeDetail) {
      this.$router.push("/")
    }
    this.getItems();
  },
};
</script>
<style lang="scss" scoped>
.character-card {
  max-height: 250px;
  overflow: auto;
}
</style>
