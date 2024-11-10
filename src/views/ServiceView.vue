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
  <main id="service">
    <div
      class="banner"
      style="background-image: url('/assets/img/service_banner.webp')"
    ></div>

    <div class="container text-section">
      <p class="page_intro">
        在孚瑞科技，我們致力於通過先進的生產工藝和以客戶為中心的服務，提供當性能的彈性體解決方案。我們專注於提供客製化化合物、客製化成品零件和庫存計劃，以滿足客戶的具體需求。
      </p>

      <h4>客製化的混煉膠</h4>
      <div>
        <img
          src="/assets/img/service_picintext.webp"
          alt="實驗室工作人員"
          class="worker"
        />
        <p>
          我們深知每一個應用場景都各具特色，因此對材料的需求也不盡相同。Fluorez
          提供量身定制的 FFKM 和 FKM
          彈性體化合服務，確保材料具備理想的化學耐性、熱穩定性和機械耐久性。
        </p>
        <p>
          我們的實驗室團隊與客戶緊密合作，研發針對苛刻環境（例如高溫操作或接觸強酸強鹼）進行優化的專業化合物。
        </p>
      </div>

      <h4 class="mt-5">客製化成品零件</h4>
      <p>
        除了提供原材料，Fluorez 還根據客戶規格提供客製化成品零件。從
        簡單的O型環，金屬複合件，各種異形件或是超大尺寸的O型環，或是客製化的複雜密封解決方案，我們的生產工藝皆在交付符合嚴格行業標準的精密橡製零件。我們會活用廣泛的客戶需求，並提供使用
        FFKM 和 FKM 化合物製成的零件，適用於航空、半導體、化學加工等行業。
      </p>

      <img
        src="/assets/img/service_center.webp"
        alt="波浪紋理"
        style="width: 100%; margin: 20px 0"
      />

      <div class="mt-5 row">
        <div class="col-12 col-md-6 mb-4">
          <h4>庫存計劃</h4>
          <p>
            孚瑞科技提供庫存計劃服務，幫助客戶更有效地管理供應鏈。請讓保有關鍵化合物和成品零件的現貨庫存水平，我們確保您能及時收到所需的材料，減少停機時間並提升運營效率。我們的庫存解決方案皆在想您的生產計劃保持一致，確保在您需要時隨時可用。
          </p>
        </div>
        <div class="col-12 col-md-6">
          <h4>技術支持與諮詢</h4>
          <p>
            我們不僅提供材料，還提供完整的技術支持，幫助您選擇適合需求的產品。我們擁有自有的先進實驗室，因此能夠協助客戶進行故障分析，快速診斷並解決材料性能問題。
          </p>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
