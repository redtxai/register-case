<template>
  <article class="reliability">
    <h3>Termo de Confiabilidade</h3>
    <section class="pdf">
      <pdf v-for="i in numPages" :key="i" :src="src" :page="i"></pdf>
    </section>
    <section class="signature">
      <VueSignaturePad
        id="signature"
        width="100%"
        height="100%"
        ref="signaturePad"
      />
    </section>
    <button @click="next">NEXT</button>
  </article>
</template>

<script>
import pdf from "vue-pdf";
import VueSignaturePad from 'vue-signature-pad';

const loadingTask = pdf.createLoadingTask(
  require("@/assets/files/reliability-terms.pdf")
);

export default {
  name: "Reliability",
  components: {
    pdf,
    VueSignaturePad
  },
  data() {
    return {
      src: loadingTask,
      numPages: undefined
    };
  },
  mounted() {
    this.src.then(pdf => {
      this.numPages = pdf.numPages;
    });
  },
  methods: {
    next() {
      this.$router.push("/thank-you");
    }
  }
};
</script>

<style lang="scss" scoped>
.reliability {
  width: 100%;
  height: 100%;
  padding: 15% 10%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h3 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 25px;
  }

  .pdf {
    width: 100%;
    height: 35%;
    overflow: auto;
  }

  .signature {
    width: 100%;
    height: 20%;
    border: 1px solid $border-signature;
  }
}
</style>
