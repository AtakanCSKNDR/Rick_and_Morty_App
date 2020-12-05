<template>
  <v-footer color="#385F73" padless>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      style="width:100%"
    >
      <v-card-text>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px" @click="goWebsite(icon.url)">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Atakan</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { icon: "mdi-twitter", url: "http://www.twitter.com" },
        { icon: "mdi-linkedin", url: "https://www.linkedin.com/in/atakan-coskundere-287b06178/" },
        { icon: "mdi-instagram", url: "http://www.instagram.com" },
        { icon: "mdi-github", url: "https://github.com/AtakanCSKNDR" },
      ],
    };
  },
  methods: {
    goWebsite(row) {
      window.open(row, "_blank");
    },
  },
};
</script>
