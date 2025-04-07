<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    const isIntroScolled = ref(false);
    const { t, locale } = useI18n();

    const products = [
      {
        image: '/assets/img/p_FFKM.webp',
        title: 'product.ffkm.title',
        route: '/product/ffkm'
      },
      {
        image: '/assets/img/p_FKM.webp',
        title: 'product.fkm.title',
        route: '/product/fkm'
      },
      {
        image: '/assets/img/p_special.webp',
        title: 'product.specFkm.title',
        route: '/product/spec-fkm'
      },
      {
        image: '/assets/img/p_pfls.webp',
        title: 'product.pfls.title',
        route: '/product/pfls'
      },
    ];

    return {
      isIntroScolled,
      t,
      locale,
      products
    };
  },
};
</script>
<style scoped>
@media (min-width: 1280px) {
  #chemicalResistantTable th:first-child {
    line-height: 47px;
  }
}
</style>
<template>
  <Header />
  <main id="product" :class="locale">
    <div
      class="banner"
      style="background-image: url('/assets/img/product_banner.png')"
    ></div>

    <div id="product_info">
    <div class="container">
      <div class="row g-4 py-5">
        <div class="col-6" v-for="(item, index) in products" :key="index">
          <router-link :to="item.route" class="text-decoration-none text-dark">
            <div class="text-center">
              <img 
                :src="item.image" 
                :alt="t(item.title)"
                class="img-fluid mb-3"
              />
              <h4 class="m-0">{{ t(item.title) }}</h4>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    </div>
  </main>
  <Footer />
</template>
