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
  <main id="material">
    <div
      class="banner"
      style="background-image: url('/assets/img/material_banner.png')"
    ></div>

    <div id="material_info">
      <div class="container" id="badge_area">
        <div class="row">
          <div class="col-6 col-md-4 badge">
            <div class="outline" style="margin-right: 20px">
              <img src="/assets/img/ffkm.png" alt="" />
              <h4>FFKM全氟化橡膠</h4>
            </div>
          </div>
          <div class="col-6 col-md-4 badge">
            <div class="outline" style="margin: 0 20px">
              <img src="/assets/img/fkm.png" alt="" />

              <h4>FKM氟化橡膠</h4>
            </div>
          </div>
          <div class="col-6 col-md-4 badge">
            <div class="outline" style="margin-left: 20px">
              <img src="/assets/img/pfls.png" alt="" />

              <h4>PFLs氟化液</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-section">
        <h4>FFKM全氟化橡膠</h4>
        <div class="row application">
          <div class="col-6 p-4">
            <img src="/assets/img/hpi-cpi-applications.webp" />
            <p>HPI/CPI applications</p>
          </div>
          <div class="col-6 p-4">
            <img src="/assets/img/material-semicon.webp" />
            <p>Semicon applications</p>
          </div>
        </div>
        <p>
          化學組成：FFKM 由完全氟化的主鏈組成，類似於聚四氟乙烯
          (PTFE)，賦予其出色的化學抗性和高溫抗性。其獨特的分子結構包含全氟烷基醚基團，增強了其柔韌性和高溫性能。從分子結構上，與氟化橡膠FKM不同的是，全氟化橡膠FFKM其組成分子主鏈或側鏈的碳原子全與氟原子鍵結。這種先進的組成確保了
          FFKM
          在極端環境下的完整性和性能。從彈性體的架橋結構上，也可以區分為過氧架橋
          (Peroxide-cure)與 氰基架橋
          (Nitrile-cure)。從簡易功能上可區分為耐化學性，耐高溫性，與高潔淨型。透過混煉膠的配方，更可以衍伸出通過NOSORK
          M-710/ISO23936-2認證，或是符合USP Cl
          VI與FDA規範等等對應不同應用端的產品。
        </p>

        <p>
          <strong>主要特點：</strong>
        </p>

        <ul>
          <li>
            卓越的化學抗性：由於其完全氟化的結構，FFKM
            能夠抵抗廣泛的化學品，包括酸、鹼、酮類、酯類，酚類溶劑和碳氫化合物以及醚類、油、蒸汽類，使其成為化學加工和工業應用的理想選擇。
          </li>
          <li>
            高溫耐受性：能夠承受高達 330°C (626°F) 的溫度，FFKM
            在極端高溫下仍能保持其性能，確保應用的穩定性。
          </li>
          <li>
            優異的耐用性：FFKM
            提供出色的機械性能和壓縮永久變形性，能在動態應用中提供耐用的密封效果。
          </li>
          <li>氣密性佳：耐真空度可達 1.33X10-7~1.33X10-8 pa。</li>
          <li>
            多樣化的應用：適用於半導體製造、製藥、石油和天然氣及航空航天等各種行業，FFKM
            在最苛刻的環境中表現出卓越的性能。
          </li>
        </ul>
        <p>
          <strong
            >我們的全氟化彈性體產品設計符合嚴格的行業標準，信賴孚瑞科技，為您提供可靠的高品質
            FFKM 解決方案，滿足您的特定需求。</strong
          >
        </p>

        <img src="/assets/img/material_center.png" />
      </div>

      <div class="container text-section" id="fkm_section">
        <h4>FKM氟化橡膠</h4>
        <p>
          氟橡膠FKM，於不同的廠牌有不同的商品名。美商杜邦TM的FKM商品名為Viton®，美商3M®公司的FKM商品名則為Dyneon®;
          日商Daikin®的商品名則為DAI-EL®，而同為日商的旭硝子®則以Aflas®為商品名在市場上販售。過去，使用者經常誤以為Viton®即是FKM，實為長久以來的習慣所造成的誤解。FKM為一種全合成之高分子彈性體材質，其主鏈或側鏈的碳原子與氟原子鍵結。FKM（氟橡膠）的特性和應用：
        </p>
        <p><strong>1. 優秀的耐溫性能：</strong></p>
        <ul>
          <li>
            FKM通常能夠在-20°C至230°C的溫度範圍內保持良好的彈性和尺寸穩定性。高級別的FKM甚至能夠在更高的溫度下工作，達到250°C，抑或是在允許在更低的東做溫度使用(-50°C)。
          </li>
          <li>
            這種特性使得FKM在高溫密封應用中特別突出，例如汽車引擎的汽缸墊片、閥蓋密封、渦輪增壓器的O型圈等。
          </li>
        </ul>

        <p><strong>2. 耐化學品性能：</strong></p>
        <ul>
          <li>
            FKM對多種化學品和溶劑有較好的耐受性，包括石油產品、鹼性溶液、氧化劑等。這使得它在石油化工、化學加工和食品加工等領域中廣泛用於密封和管道系統。
          </li>
          <li>
            特別是在高濃度的石油產品、氧化劑存在的環境中，FKM能夠保持長期的穩定性和性能。
          </li>
        </ul>

        <p><strong>3. 耐油性能：</strong></p>
        <ul>
          <li>
            FKM具有優異的耐油性，能夠長期在石油、潤滑油和其他石化產品中工作。這使得它在汽車、航空、機械設備等行業中作為密封件和耐油部件廣泛應用。
          </li>
        </ul>

        <p><strong>4. 物理性能：</strong></p>
        <ul>
          <li>
            FKM具有優異的抗拉強度、耐磨性和撕裂強度，保證了在各種機械應力下的長期使用能力。
          </li>
          <li>
            其彈性模量和硬度可以根據具體應用的要求進行調整，從而適應不同的工作環境和操作條件。
          </li>
        </ul>

        <p><strong>應用領域：</strong></p>
        <ul>
          <li>汽車工業：用於引擎密封、汽車空調系統、燃料系統等。</li>
          <li>航空航天：用於飛機引擎密封、液壓系統、燃料系統等。</li>
          <li>石油化工：用於管道密封、閥門密封、化學品輸送系統等。</li>
          <li>
            食品加工：用於食品級密封件，要求符合FDA或歐盟食品接觸認證的要求。
          </li>
          <li>
            藥物製程與醫療器械：用於醫療級密封件，要求符合美國藥典第六章USP Cl
            VI的要求。
          </li>
        </ul>

        <p>
          總結來說，FKM以其出色的性能特性，成為了許多工業領域中不可或缺的材料之一，尤其是在要求高溫、化學品耐受性和耐油性的應用場合中，FKM能夠提供可靠的解決方案。
        </p>
      </div>

      <div class="container text-section">
        <h4>PFLs氟化液</h4>
        <p>
          電子氟化液PFLs為一種無色透明、無味、無毒性且具熱穩定與化學惰性之全氟化液體，由於其分子結構上之碳原子與氟原子形成緊密鍵結，氟化液具有極佳的安定性、不會與活性材料如金屬、塑膠和彈性體起反應而及其穩定，不論在高溫或低溫下更具有極佳之不導電與絕緣性質。市場上較為人知悉的電子氟化液應該是蘇威®
          (Solvey®) 的Galden® 以及美商3M®
          的Fluorinert®。但因為其寡佔性強，價格相對較不親民。氟化液極適合於半導體與電子零件製造工業中許多單相熱傳導應用，用以取代會導電的傳統冷媒與水。氟化液工作溫度範圍是-60
          °C~165 °C，適用於蝕刻機、離子注入機、測漏設備 (gross leaking
          test)的高低溫槽，衝擊測試等諸設備上。電子氟化液PFLs易揮發不殘留，不導電的特性同時也能用於電子零件的清洗。氟化液具有零臭氧消耗。不受美國環境保護局(EPA)使用限制,
          也不受揮發有機物管理條例約束，亦不增加地表的臭氧形成造成環境損害。
          <br /><br />
          電子氟化液PFLs特點 :
        </p>
        <ul>
          <li>使在高氯強氧化物存在環境中亦不具可燃性</li>
          <li>不與金屬、塑膠、橡膠或大部分以之材質起反應</li>
          <li>廣泛的工作溫度範圍可供選擇-60 °C~165 °C</li>
          <li>不論高低溫使用皆具有極佳之絕緣特性</li>
          <li>熱傳導性能優異</li>
        </ul>
      </div>
      <div class="container">
        <div class="row application">
          <div class="col-6 p-4">
            <img src="/assets/img/fpd_img.webp" />
            <p>FPD applications</p>
          </div>
          <div class="col-6 p-4">
            <img src="/assets/img/sanitary.webp" />
            <p>Sanitary applications</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
