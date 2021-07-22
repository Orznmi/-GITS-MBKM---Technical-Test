<template>
  <div id="app">
    <div class="back">
      <div class="login">
        <v-container class="login">
          <v-row align="center" justify="center">
            <v-col md="5">
              <v-card style="padding: 30px">
                <v-card-title justify="center">
                  <h2 class="text-center">Reverse Kalimat Yu</h2>
                </v-card-title>
                <v-form>
                  <v-row>
                    <v-col class="col-xs-2">
                      <v-text-field
                        required
                        solo
                        v-model="kalimat"
                        type="kalimat"
                        :rules="kalimatRules"
                        label="Masukan Kalimat"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <br />
                </v-form>
                <v-card-actions>
                  <v-btn block rounded class="primary center" @click="reverse()"
                    >Reverse</v-btn
                  >
                </v-card-actions>
                <div align="center" justify="center">
                  <h2>Hasil Reverse : {{ kalimatReverse }}</h2>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <v-snackbar v-model="snackbar" :color="color" timeout="5000" bottom>{{
      error_message
    }}</v-snackbar>
  </div>
</template>

<script></script>

<script>
export default {
  data() {
    return {
      snackbar: false,
      error_message: "",
      color: "",
      kalimat: "",
      kalimatRules: [(v) => !!v || "Tolong masukan kalimat"],
      kalimatReverse: "",
    };
  },

  methods: {
    reverse() {
      this.kalimatReverse = this.kalimat.split("").reverse().join("");
      console.log(this.kalimatReverse);
    },
    loadSnackbar(color, bool) {
      this.color = color;
      this.snackbar = bool;
    },
  },
};
</script>
