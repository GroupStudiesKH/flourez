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
          <div class="col-6 col-md-4 badge">
            <div class="outline" style="margin-right: 20px">
              <img src="/assets/img/company-professional.png" alt="" />
              <h4>PROFESSIONAL</h4>
            </div>
          </div>
          <div class="col-6 col-md-4 badge">
            <div class="outline" style="margin: 0 20px">
              <img src="/assets/img/company-bestquality.png" alt="" />

              <h4>BEST QUALITY</h4>
            </div>
          </div>
          <div class="col-6 col-md-4 badge">
            <div class="outline" style="margin-left: 20px">
              <img src="/assets/img/company-customer-service.png" alt="" />

              <h4>CUSTOMER SERVICE</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-section">
        <h4>專業</h4>
        <p>
          孚瑞科技有限公司的專業來自於多年來在市場上累積的經驗與口碑。我們相信良好的溝通才是選擇正確材料的不二法則，孚瑞科技不僅提供多元化之產品線，包含全氟化彈性體的混練膠，我們也同時提供氟化彈性體(fluoro-elastomer,
          FKM)與全氟化橡膠(perfluoro-elastomers,
          FFKM)製造之標準部元件；同時亦接受針對消費者需求來量身訂製的客製化FKM/FFKM產品。我們不僅不斷開發符合應用端的新配方，也開發了符合FDA與USP
          Class VI的產品以滿足食品與醫療產業的需求。
        </p>
      </div>

      <div class="container text-section">
        <h4>品質</h4>
        <p>
          孚瑞科技有限公司符合ISO品管認證，產品皆經過第三方實驗室檢驗，符合歐盟最新化學品管制與有害化學品等一系列標準。無塵室內生產的產品規範也遵循國際標準ASTM與ISO的規範。最高標準的產品抽樣檢測也成為支持我們提供高標準產品的後盾。
        </p>
      </div>

      <div class="container text-section">
        <h4>服務</h4>
        <p>
          多年來我們與不同客戶合作各式OEM與ODM的生產模式，不只步於生產銷售，而是提供一個全整的解決方案給客戶。我們也提供銷售前與售後的實驗室分析，支援客戶的問題解決方案。客製化的庫存管理方案更能滿足客戶在效率與成本上的追求。
        </p>
      </div>

      <div id="company_center_image"></div>

      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4>
              <img src="/assets/img/check-icon.png" />我們的產品是否含有PFAS？
            </h4>
            <p>
              在<strong>孚瑞科技有限公司</strong>，我們非常重視產品的安全性及其與國際環保法規的合規性。我們充分了解圍繞PFAS（全氟/多氟烷基物質）這類化學物質的關注，這些物質以其持久性和潛在的健康風險而聞名。
            </p>

            <h4><img src="/assets/img/check-icon.png" />什麼是PFAS？</h4>
            <p>
              PFAS
              是一大類合成化學物質，因其獨特的特性被廣泛應用於許多行業，例如抗水、抗油、低摩擦和穩定性。然而，某些PFAS，例如
              PFOA（全氟辛酸）和
              PFOS（全氟辛烷磺酸），特別引人關注，因為它們具有長期持久性，並且可能在環境和生物體中積累。
            </p>

            <h4><img src="/assets/img/check-icon.png" />遵守全球法規</h4>
            <p>
              我們嚴格遵守全球的法規標準，確保我們的產品不含受管控的PFAS化合物，例如PFOA和PFOS。這些法規包括
              歐盟REACH、美國環保署EPA 及其他國際機構的規範。我們的原材料，包括
              FKM 和 FFKM
              ，都經過徹底審查，以確保它們不含被禁用的PFAS化合物。我們定期審核供應鏈，並根據不斷變化的法規標準及時更新材料。
            </p>

            <h4><img src="/assets/img/check-icon.png" />提供安全可靠的產品</h4>
            <p>
              我們對安全性和環保責任的承諾，確保我們的所有產品都符合最高標準。無論是汽車行業的密封件還是半導體製造的組件，我們確保產品符合歐洲、北美、亞洲及其他地區的法規。<br />
              通過與可信賴的供應商如 Solvay，ACG和 Chemours
              的不斷合作，我們保持在法規變更的前沿，確保我們的產品在各種應用中仍然符合規範且安全。<br />
              <strong>我們是您值得信賴的環保密封解決方案合作夥伴。</strong>
            </p>

            <h4><img src="/assets/img/check-icon.png" />全球PFAS法規</h4>
            <table class="table table-striped">
              <thead class="table-danger">
                <tr>
                  <th scope="col" width="22%">國家/地區</th>
                  <th scope="col">法規</th>
                  <th scope="col">受管制的PFAS</th>
                  <th scope="col">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>歐盟</td>
                  <td>EU POPs</td>
                  <td>PFOS及其鹽類與相關化合物、PFOA及其鹽類與相關化合物</td>
                  <td>禁用</td>
                </tr>
                <tr>
                  <td>歐盟</td>
                  <td>REACH Annex 17</td>
                  <td>PFCA及其鹽類與相關化合物</td>
                  <td>超過限制濃度禁用</td>
                </tr>
                <tr>
                  <td>歐盟</td>
                  <td>REACH SVHC</td>
                  <td>APFO、PFOA、PFDA、PFHxS、PFBS</td>
                  <td>要求通報</td>
                </tr>
                <tr>
                  <td>美國</td>
                  <td>TSCA</td>
                  <td>LC-PFAC (20項)</td>
                  <td>要求通報</td>
                </tr>
                <tr>
                  <td>美國</td>
                  <td>CP65</td>
                  <td>PFOA、PFOS及其鹽類與相關化合物、PFNA</td>
                  <td>要求提供警語標示</td>
                </tr>
                <tr>
                  <td>日本</td>
                  <td>化審法</td>
                  <td>PFOS及其鹽類與相關化合物、PFOA及其鹽類與相關化合物</td>
                  <td>特定產品含有即禁止進口</td>
                </tr>
                <tr>
                  <td>加拿大</td>
                  <td>SOR 2016-252</td>
                  <td>
                    PFCA及其鹽類與先驅物、LC-PFCA及其鹽類與先驅物、PFOS及其鹽類與先驅物
                  </td>
                  <td>禁用</td>
                </tr>
                <tr>
                  <td>英國</td>
                  <td>REACH Annex 17</td>
                  <td>PFOA及其鹽類與相關化合物</td>
                  <td>超過限制濃度禁用</td>
                </tr>
                <tr>
                  <td>英國</td>
                  <td>REACH SVHC</td>
                  <td>APFO、PFOA、PFDA、PFHxS、PFBS</td>
                  <td>要求通報</td>
                </tr>
                <tr>
                  <td>中國</td>
                  <td>重點管控污染物清單 (2023)</td>
                  <td>
                    PFOS及其鹽類與相關化合物、PFOA及其鹽類與相關化合物、PFHxS及其鹽類與相關化合物
                  </td>
                  <td>禁止物質在境內使用</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
