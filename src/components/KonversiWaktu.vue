<template>
  <div id="app">
    <div class="back">
      <div class="login">
        <v-container class="login">
          <v-row align="center" justify="center">
            <v-col md="5">
              <v-card style="padding: 30px">
                <v-card-title justify="center">
                  <h2 class="text-center">Konversi Waktu 12H menjadi 24H</h2>
                </v-card-title>
                <v-form v-model="valid" ref="form">
                  <v-row>
                    <v-col class="col-xs-2">
                      <!-- <v-time-picker
                        v-model="time"
                        :allowed-hours="allowedHours"
                        :allowed-minutes="allowedMinutes"
                        class="mt-4"
                        format="24hr"
                        scrollable
                      ></v-time-picker> -->
                      <v-text-field
                        required
                        solo
                        type="number"
                        v-model="jam"
                        max="12"
                        min="0"
                        :rules="rulesInputJam"
                        label="Jam"
                      ></v-text-field>
                    </v-col>
                    <v-col class="col-xs-2">
                      <v-text-field
                        required
                        solo
                        type="number"
                        v-model="menit"
                        max="59"
                        min="0"
                        :rules="rulesInputMenitDetik"
                        label="Menit"
                      ></v-text-field>
                    </v-col>
                    <v-col class="col-xs-2">
                      <v-text-field
                        required
                        solo
                        type="number"
                        v-model="detik"
                        max="59"
                        min="0"
                        :rules="rulesInputMenitDetik"
                        label="Detik"
                      ></v-text-field>
                    </v-col>
                    <v-col class="col-xs-2">
                      <v-select
                        v-model="tipe"
                        required
                        solo
                        :items="['AM', 'PM']"
                        :rules="rulesInput"
                        label="Items"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <br />
                </v-form>
                <v-card-actions>
                  <v-btn block rounded class="primary center" @click="konversi()"
                    >Konversi</v-btn
                  >
                </v-card-actions>
                <div v-if="cek == 1" align="center" justify="center">
                  <h2>
                    Hasil Konversi : {{ timeKonversi }} : {{ this.menit }} :{{
                      this.detik
                    }}
                  </h2>
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
      error_message: "",
      color: "",
      valid: false,
      cek: 0,
      tipe: "",
      jam: "",
      detik: "",
      menit: "",
      rulesInputJam: [
        (v) => !!v || "Harap Diisi",
        (v) => v < 13 || "Jam Maksimal 12",
        (v) => v > 0 || "Minimal 1",
      ],
      rulesInputMenitDetik: [
        (v) => !!v || "Harap Diisi",
        (v) => v < 60 || "Maksimal 59",
        (v) => v > 0 || "Minimal 1",
      ],
      rulesInput: [(v) => !!v || "Harap Diisi"],
      timeKonversi: "",
    };
  },

  methods: {
    konversi() {
      if (this.$refs.form.validate()) {
        console.log(this.jam);
        this.cek = 1;
        if (this.tipe == "AM") {
          this.timeKonversi = this.jam;
          if (this.jam == "12") {
            this.timeKonversi = "00";
          }
        } else if (this.tipe == "PM") {
          var jam = parseInt(this.jam);

          if (jam == 12) {
            this.timeKonversi = 0 + jam;
          } else {
            this.timeKonversi = 12 + jam;
          }
        }
        console.log(this.timeKonversi);
      }
    },
    loadSnackbar(color, bool) {
      this.color = color;
      this.snackbar = bool;
    },
  },
};
</script>
