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
            <img src="/assets/img/company_intro.png" />
          </div>
        </div>
      </div>

      <div class="container" id="badge_area">
        <div class="row">
          <div class="col-12 col-md-4 badge" >
            <div class="outline"  style="margin-right: 20px;">
              <img src="/assets/img/company-professional.png" alt="" />
              <h4>PROFESSIONAL</h4>
            </div>
          </div>
          <div class="col-12 col-md-4 badge" >
            <div class="outline" style="margin: 0 20px;">
              <img src="/assets/img/company-bestquality.png" alt="" />

              <h4>BEST QUALITY</h4>
            </div>
          </div>
          <div class="col-12 col-md-4 badge" >
            <div class="outline" style="margin-left: 20px;">
              <img src="/assets/img/company-customer-service.png" alt="" />

              <h4>CUSTOMER SERVICE</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
