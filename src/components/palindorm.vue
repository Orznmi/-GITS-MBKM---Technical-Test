<template>
  <div id="app">
    <div class="back">
      <div class="login">
        <v-container class="login">
          <v-row align="center" justify="center">
            <v-col md="5">
              <v-card style="padding: 30px">
                <v-card-title>
                  <h2 class="text-center">Palindrom</h2>
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
                  <v-btn block rounded class="primary center" @click="palindromeCheck()"
                    >Check</v-btn
                  >
                </v-card-actions>
                <div v-if="cek == 1" align="center" justify="center">
                  <h2>Hasil : {{ palindromeCheck() }}</h2>
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
      cek: 0,
      snackbar: false,
      error_message: "",
      color: "",
      kalimat: "",
      kalimatRules: [(v) => !!v || "Tolong masukan kalimat"],
      kalimatReverse: "",
    };
  },

  methods: {
    palindromeCheck() {
      this.cek = 1;
      this.kalimatReverse = this.kalimat.split("").reverse().join("");
      if (this.kalimat == this.kalimatReverse) return "True";
      else return "False";

      console.log(this.kalimatReverse);
    },
    loadSnackbar(color, bool) {
      this.color = color;
      this.snackbar = bool;
    },
  },
};
</script>
