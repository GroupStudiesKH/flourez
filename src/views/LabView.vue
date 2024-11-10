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
  <main id="lab">
    <div
      class="banner"
      style="background-image: url('/assets/img/lab_banner.webp')"
    ></div>

    <div id="lab_intro">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p>
              在Fluorez Technology
              Ltd.，我們堅持為客戶提供高品質的FKM（氟橡膠）和FFKM（全氟橡膠）產品。我們對產品品質的信心源於我們在內部先進實驗室中進行的嚴格品質管控和全面測試。
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row top_badge">
          <div class="col-12 col-md-6">
            <img class="top_image" src="/assets/img/clean_room.png" alt="" />
          </div>
          <div class="col-12 col-md-6">
            <img class="top_image" src="/assets/img/clean_room2.png" alt="" />
          </div>
          <div class="col-12 mt-3">
            <h4 class="text-decoration">FFKM全氟化橡膠</h4>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_1.png" alt="" />
              <h4 class="text-decoration">硫變測試儀</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_2.png" alt="" />
              <h4 class="text-decoration">肖氏硬度計</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_3.png" alt="" />
              <h4 class="text-decoration">門尼黏度測試儀</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_4.png" alt="" />
              <h4 class="text-decoration">氣壓式切試片機</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_5.png" alt="" />
              <h4 class="text-decoration">拉伸度測試儀</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_6.png" alt="" />
              <h4 class="text-decoration">二次元影像量測儀</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_7.png" alt="" />
              <h4 class="text-decoration">比重計</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_8.png" alt="" />
              <h4 class="text-decoration">油壓式裁切機</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_9.png" alt="" />
              <h4 class="text-decoration">混練機</h4>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="container text-section mb-5">
        <h4>質量保證承諾</h4>
        <p>
          我們的全面測試制度使我們能夠嚴密監控生產過程中的每個環節，從原材料到最終產品的性能控制，確保每批產品都符合嚴格的質量標準。這種對細節的重視降低了變異性，提升了產品的可靠性，為客戶提供值得信賴的材料。
        </p>

        <h4>無塵室製造環境</h4>
        <p>
          我們深知產品純度和污染控制的重要性，因此在工廠內設有一個無塵室。這個受控環境可將空氣中的顆粒和其他污染物降至最低，這對於半導體製造、製藥和航天等高敏感應用中的產品尤為重要。無塵室確保我們的密封件和零部件在最嚴苛的條件下仍能保持完整性和卓越性能。
        </p>

        <h4>客戶支持與技術專業知識</h4>
        <p>
          除了我們的生產能力之外，我們還以豐富的知識基礎和橡膠技術專業知識為傲。我們的團隊致力於為客戶提供：
        </p>
        <ul>
          <li>提供詳細的技術數據和指導，幫助選擇適合特定應用的材料。</li>
          <li>提供材料在不同操作條件下的性能見解。</li>
          <li>協助解決問題並優化產品性能。</li>
        </ul>
        <p>
          我們相信，合作與知識分享是雙贏的關鍵。通過與客戶合作，我們致力於開發符合並超越行業挑戰的創新解決方案。
        </p>

        <h4>質量管理體系的對齊</h4>
        <p>
          我們的品質管控流程與ISO
          9001:2015等國際標準對齊，確保我們的運作高效、一致且不斷改進。這種對齊體現了我們對維護能提高客戶滿意度並符合法規要求的品質管理體系的承諾。
        </p>
        <p>
          在Fluorez Technology
          Ltd.，品質不僅僅是目標——它是我們文化和運作的核心組成部分。從我們先進的實驗室測試到無塵室製造和專業的客戶支持，我們業務的每個層面都專注於提供卓越品質。我們邀請您親身體驗我們對品質的承諾，並期待有機會以我們的高性能FKM和FFKM產品來滿足您的需求。
        </p>
      </div>
  </main>
  <Footer />
</template>
