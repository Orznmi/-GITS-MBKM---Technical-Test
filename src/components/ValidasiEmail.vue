<template>
  <div id="app">
    <div class="back">
      <div class="login">
        <v-container class="login">
          <v-row align="center" justify="center">
            <v-col md="5">
              <v-card style="padding: 30px;">

                <v-form v-model="validSignIn" ref="formSignIn">
                  <v-row>
                    <v-col class="col-xs-2">
                      <v-text-field
                        required
                        solo
                        type="email"
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                      ></v-text-field>
                    </v-col>
                  </v-row>
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
      snackbar: false,
      error_message: "",
      color: "",
      validSignIn: false,
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+/.test(v) || "Format email wajib menggunakan ‘@’",
        (v) => /.+@.+\.id+\../.test(v) || "Domain yang diperbolehkan hanya “.co.id” dan “.id”",
        (v) => /.+@.+\..+/.test(v) || "Format email wajib menggunakan tanda  titik ‘.’ setelah ‘@’’",
        (v) => v.length <= 20 || "Panjang email maksimum 20 karakter sebelum ‘@’",
      ],
      password: "",
    };
  },

  methods: {
    cancel() {
      this.$refs.formSignIn.reset();
    },
    submit() {
      
    },
    loadSnackbar(color, bool) {
      this.color = color;
      this.snackbar = bool;
    },
  },
};
</script>
