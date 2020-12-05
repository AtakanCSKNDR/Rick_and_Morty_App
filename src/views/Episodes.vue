<template>
  <div class="Episodes" style="background:#24282f; height:100%">
    <v-container fluid>
      <v-card class="mx-auto wrapper-card">
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

        <v-card class="character-card" >
          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in data.characters"
                :key="i"
                @click="goCharacter(item)"
              >
                <v-list-item-icon style="margin-bottom:0px">
                  <v-avatar color="indigo" size="36">
                    <span class="white--text headline">{{ i + 1 }}</span>
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Character - {{ i + 1 }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
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
