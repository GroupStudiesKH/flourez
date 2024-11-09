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

    const handleScroll = () => {
      const targetDiv = document.getElementById("intro");
      const rect = targetDiv.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        isIntroScolled.value = true;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      isIntroScolled,
      t,
      locale,
    };
  },
};
</script>

<template>
  <Header />
  <main id="company">
    <div
      class="banner"
      style="background-image: url('/assets/img/company_banner.webp')"
    ></div>

    <div id="company_info">
      <div class="container">
        <div class="row">
          <div class="col-12" id="company_intro">
            <p>
              孚瑞科技有限公司成立於西元2005年，自創始之初即致力於為全球市場提供最優質之全氟化彈性體(FFKM)相關產品。有鑒於市場的快速變化與追求經濟化的需求，配合台灣經濟部工業局之半導體耗材在地化生產政策，我們進一步打造了台灣製造的全氟橡膠自有品牌，Fluorez®。
            </p>
            
          </div>
        </div>
      </div>

      <div id="company_info_right_shape"></div>
    </div>

    <div class="container" :class="isIntroScolled ? `scrolled` : ``" id="intro">
      <div class="row">
        <div class="col-6 col-md-3 badge">
          <div class="heading">
            <h3>氟化橡膠</h3>
            <span>Fluoroelastomers, FKM</span>
          </div>
          <img src="/assets/img/home_section1.webp" alt="" />
          <p v-html="t('index.feature1_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <div class="heading">
            <h3>全氟橡膠</h3>
            <span>Fluoroelastomers, FKM</span>
          </div>
          <img src="/assets/img/home_section2.webp" alt="" />
          <p v-html="t('index.feature2_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <div class="heading">
            <h3>全氟化液</h3>
            <span>Perfluorinated liquids</span>
          </div>
          <img src="/assets/img/home_section3.webp" alt="" />
          <p v-html="t('index.feature3_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <div class="heading">
            <h3>特殊氟橡膠</h3>
            <span>PTFE micropowders</span>
          </div>
          <img src="/assets/img/home_section4.webp" alt="" />
          <p v-html="t('index.feature4_subtitle')"></p>
        </div>
      </div>
    </div>

    <div id="csr_red">
      <div class="container">
        <div class="row">
          <div class="col-7"><img src="/assets/img/home_bottom.webp" /></div>
          <div class="col-5">
            <h3 v-html="t('index.feature5.title')"></h3>
            <p>{{ t("index.feature5.content") }}</p>
            <a href="#">{{ t("index.feature5.readmore") }}</a>
          </div>
        </div>
      </div>
    </div>

    <div id="iso_quality">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img src="/assets/img/home_iso.png" />
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
