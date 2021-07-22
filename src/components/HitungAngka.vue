<template>
  <div id="app">
    <div class="back">
      <div>
        <v-container>
          <v-row align="center" justify="center">
            <v-col md="5">
              <v-card style="padding: 30px">
                <v-card-title justify="center">
                  <h2 class="text-center">Huruf Apa yang Kamu Dapat?</h2>
                </v-card-title>

                <v-form v-model="inputAngka">
                  <v-row>
                    <v-col class="col-xs-2">
                      <v-text-field
                        required
                        solo
                        type="number"
                        v-model="inputAngka"
                        label="Masukkan Angka"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <div class="div" v-if="path == 'hasil'">
                        <center>
                          <h3>{{ hasil }}</h3>
                        </center>
                      </div>
                    </v-col>
                  </v-row>

                  <v-card-actions>
                    <v-btn block rounded class="primary center" @click="checkInput()"
                      >Check</v-btn
                    >
                  </v-card-actions>
                  <br />
                </v-form>
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
      path: ".",
      inputAngka: " ",
      hasil: "",
    };
  },

  methods: {
    checkInput() {
      if (this.inputAngka % 3 && this.inputAngka % 5) {
        this.hasil = "Coba Lagi";
      } else if (this.inputAngka % 5) {
        this.hasil = "World";
      } else if (this.inputAngka % 3) {
        this.hasil = "Hello";
      } else {
        this.hasil = "Hello World";
      }
      this.path = "hasil";
      console.log(this.hasil);
    },
    reload() {
      this.path = ".";
    },
    again() {
      this.path = ".";
    },
  },
};
</script>
