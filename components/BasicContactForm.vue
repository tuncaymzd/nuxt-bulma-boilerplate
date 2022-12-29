<template>
    <div class="container">
        <div class="form" id="basic-form">
          <div class="field">
            <label class="label">Nom / Prénom</label>
            <div class="control">
              <input class="input" type="text" maxlength="150" v-model="name" required />
            </div>
          </div>
          <div class="field">
            <label class="label" maxlength="80">Email</label>
            <div class="control">
              <input class="input" type="email" v-model="email" required />
            </div>
          </div>
          <div class="field">
            <label class="label">Sujet</label>
            <div class="select">
              <select id="subject" v-on:input="inputSubject">
                <option value="">Selectionner un sujet</option>
                <option value="APP">Création d'application web</option>
                <option value="AUTRE">Autre</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" maxlength="2000" v-model="message" required></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button" v-on:click="submit">
                ENVOYER
              </button>
            </div>
          </div>
        </div>
        <div id="success-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            Votre message à été envoyé avec succès.
          </p>
        </header>
        <section class="modal-card-body">
          Nous traiterons votre demande dans les meilleurs délais.
        </section>
        <footer class="modal-card-foot">
          <button class="button" v-on:click="closeModal">Fermer</button>
        </footer>
      </div>
    </div>
    <div id="error-modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Votre message n'a pas été envoyé !</p>
        </header>
        <section class="modal-card-body">Veuillez réessayer.</section>
        <footer class="modal-card-foot">
          <button class="button" v-on:click="closeErrorModal">
            Fermer
          </button>
        </footer>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BasicContactForm",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    submit: async function () {
      try {
        const { name, email, subject, message } = this;
        console.log("params : ", name, email, subject, message);
        this.openErrorModal();
      } catch (e) {
        console.log("Submission error : ", e);
      }
    },
    inputSubject() {
      const subjectValue = (<HTMLInputElement>(
        document.querySelector("#subject")
      )).value;

      switch (subjectValue) {
        case "APP":
          this.subject = "Création d'application web";
          break;
        default:
          this.subject = "Autre";
          break;
      }
    },
    openModal: function () {
      document.getElementById("success-modal")?.classList.add("is-active");
    },
    openErrorModal: function () {
      document.getElementById("error-modal")?.classList.add("is-active");
    },
    closeModal: function () {
      document.getElementById("success-modal")?.classList.remove("is-active");
      this.cleanForm();
    },
    closeErrorModal: function () {
      document.getElementById("error-modal")?.classList.remove("is-active");
    },
    cleanForm: function () {
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
});
</script>

<style lang="scss" scoped>
</style>