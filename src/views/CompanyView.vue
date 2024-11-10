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

      <div class="container text-section">
        <h4>專業</h4>
        <p>孚瑞科技有限公司的專業來自於多年來在市場上累積的經驗與口碑。我們相信良好的溝通才是選擇正確材料的不二法則，孚瑞科技不僅提供多元化之產品線，包含全氟化彈性體的混練膠，我們也同時提供氟化彈性體(fluoro-elastomer, FKM)與全氟化橡膠(perfluoro-elastomers, FFKM)製造之標準部元件；同時亦接受針對消費者需求來量身訂製的客製化FKM/FFKM產品。我們不僅不斷開發符合應用端的新配方，也開發了符合FDA與USP Class VI的產品以滿足食品與醫療產業的需求。</p>
      </div>

      <div class="container text-section">
        <h4>品質</h4>
        <p>孚瑞科技有限公司符合ISO品管認證，產品皆經過第三方實驗室檢驗，符合歐盟最新化學品管制與有害化學品等一系列標準。無塵室內生產的產品規範也遵循國際標準ASTM與ISO的規範。最高標準的產品抽樣檢測也成為支持我們提供高標準產品的後盾。</p>
      </div>

      <div class="container text-section">
        <h4>服務</h4>
        <p>多年來我們與不同客戶合作各式OEM與ODM的生產模式，不只步於生產銷售，而是提供一個全整的解決方案給客戶。我們也提供銷售前與售後的實驗室分析，支援客戶的問題解決方案。客製化的庫存管理方案更能滿足客戶在效率與成本上的追求。</p>
      </div>


      <div id="company_center_image">
      </div>

    </div>
  </main>
  <Footer />
</template>
