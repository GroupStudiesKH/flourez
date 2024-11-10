<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductsMenu from "@/components/ProductsMenu.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    ProductsMenu,
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
  <main id="product">
    <div
      class="banner"
      style="background-image: url('/assets/img/product_banner.png')"
    ></div>

    <div id="product_info">
      <ProductsMenu  />

      <div class="container text-section">
        <h4>FFKM 全氟化橡膠</h4>
      </div>
      <div class="container" id="ffkm_section">
        <div class="row">
          <div class="col-12 badge">
            <div class="outline">
              <img src="/assets/img/ffkm_heading.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4><img src="/assets/img/ffkm_icon.png" />耐化型全氟橡膠</h4>
            <p>
              以頂級耐化級別的全氟橡膠為基礎方向，具備最廣泛的耐化性的彈性體產品，適用於最嚴苛的耐酸鹼及耐溶劑應用環境中。由於其整體配方上充分強調耐化性能，因此在耐溫方面優異性較低一般。然而其耐化性遠勝於其它橡膠產品。
            </p>
            <p>
              <strong
                >Chemical resistant FKM. Equivalent to Kalrez® 6375, Chemraz®
                505.</strong
              >
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th>Typical Physical Properties</th>
                    <th>FCT505</th>
                    <th>FCT506</th>
                    <th>FCT28</th>
                    <th>FCT509</th>
                    <th>FCT600</th>
                    <th>FCT606</th>
                    <th>FCT609</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hardness, Shore A</td>
                    <td>75</td>
                    <td>74</td>
                    <td>76</td>
                    <td>74</td>
                    <td>81</td>
                    <td>90</td>
                    <td>62</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Black</td>
                    <td>White</td>
                    <td>Black</td>
                    <td>Beige</td>
                    <td>Black</td>
                    <td>Black</td>
                    <td>White</td>
                  </tr>
                  <tr>
                    <td>100% Modulus, Mpa</td>
                    <td>10</td>
                    <td>4.5</td>
                    <td>11.6</td>
                    <td>7.1</td>
                    <td>11</td>
                    <td>17</td>
                    <td>4.5</td>
                  </tr>
                  <tr>
                    <td>Tensile Strength at Break, Mpa</td>
                    <td>17.5</td>
                    <td>10</td>
                    <td>15.8</td>
                    <td>18</td>
                    <td>18.5</td>
                    <td>21</td>
                    <td>14.1</td>
                  </tr>
                  <tr>
                    <td>Elongation at Break, %</td>
                    <td>177</td>
                    <td>190</td>
                    <td>129</td>
                    <td>185</td>
                    <td>150</td>
                    <td>125</td>
                    <td>188</td>
                  </tr>
                  <tr>
                    <td>Compression Set (%, 70hr@200 °C )</td>
                    <td>17</td>
                    <td>25</td>
                    <td>20</td>
                    <td>21</td>
                    <td>24</td>
                    <td>30</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Max. Continuous Service Temp.d °C</td>
                    <td>250</td>
                    <td>250</td>
                    <td>275</td>
                    <td>275</td>
                    <td>250</td>
                    <td>250</td>
                    <td>250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4><img src="/assets/img/ffkm_icon.png" />耐溫型全氟橡膠</h4>
            <p>
              以nitrile架橋為基礎的全氟橡膠配方，除具備優異的與廣泛的化學耐受度，耐溫性更提高到330°C，具備高溫需求的製程，無論是石油化學工業，半導體設備端，與各種需要能密封有機溶液等等的應用上都有其需求。
            </p>
            <p>
              針對不同的應用，我們提供了不同的配方，也提供客製化的配方服務。所有的材料皆可提供成品與半成品。
            </p>
            <p>
              <strong
                >Thermal resistant FFKM. Equivalent to Kalrez® 4079</strong
              >
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th>Typical Physical Properties</th>
                    <th>FC750B</th>
                    <th>FC750W</th>
                    <th>FC900B</th>
                    <th>FC600W</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hardness, Shore A</td>
                    <td>74</td>
                    <td>74</td>
                    <td>91</td>
                    <td>62</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Black</td>
                    <td>Cream White</td>
                    <td>Black</td>
                    <td>White</td>
                  </tr>
                  <tr>
                    <td>100% Modulus, Mpa</td>
                    <td>6</td>
                    <td>4.5</td>
                    <td>13.5</td>
                    <td>3.3</td>
                  </tr>
                  <tr>
                    <td>Tensile Strength at Breakb, Mpa</td>
                    <td>14</td>
                    <td>7.5</td>
                    <td>16.5</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Elongation at Breakb, %</td>
                    <td>260</td>
                    <td>262</td>
                    <td>115</td>
                    <td>189</td>
                  </tr>
                  <tr>
                    <td>Compression Set (%, 70hr@200℃)c</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Max. Continuous Service Temp.d ℃</td>
                    <td>330</td>
                    <td>330</td>
                    <td>330</td>
                    <td>330</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4><img src="/assets/img/ffkm_icon.png" />高潔淨度型全氟橡膠</h4>
            <p>
              高潔淨度型全氟橡膠（High Purity
              Perfluoroelastomer，簡稱HPFFKM）具有以下特色：
            </p>
            <ol>
              <li>
                1.
                卓越的化學穩定性：全氟橡膠具有極強的耐化學性，能夠抵抗幾乎所有化學品的腐蝕，包括強酸、強鹼、溶劑等。
              </li>
              <li>
                2.
                極低的析出物：高潔淨度型全氟橡膠在使用過程中析出物極少，這對於要求高度潔淨的應用（如半導體製造、醫療設備、製藥行業）至關重要。
              </li>
              <li>
                3.
                優異的耐高溫性能：這類橡膠能夠在極高溫度環境下（通常可達300°C或更高）長時間穩定運行，不會發生明顯的性能衰退。
              </li>
              <li>
                4.
                低氣體滲透率：高潔淨度型全氟橡膠具有很低的氣體滲透率，這使其成為真空環境和需要氣密性的應用的理想選擇。
              </li>
              <li>
                5.
                出色的機械性能：全氟橡膠具有高強度、高彈性和耐磨性，能夠在苛刻的物理環境中保持優異的性能。
              </li>
              <li>
                6.
                廣泛的溫度適應範圍：除了耐高溫外，這類橡膠在低溫環境下也能保持良好的彈性和密封性能，適應廣泛的工作溫度範圍。
              </li>
              <li>
                7.
                抗等離子體侵蝕：高潔淨度型全氟橡膠在等離子體環境中也能保持穩定，不易被等離子體侵蝕，這對於半導體製造中的等離子體蝕刻工藝尤為重要。
              </li>
              <li>
                8.
                高潔淨度加工：在生產過程中，這類橡膠通常會經過特殊的潔淨處理，確保產品的潔淨度滿足高要求的應用。
              </li>
            </ol>
            <p>
              高潔淨度型全氟橡膠因其優異的化學和物理特性，被廣泛應用於半導體製造、化學加工、製藥、醫療設備等需要高度潔淨和耐化學腐蝕的領域。
            </p>
            <p>
              針對不同半導體製程的需要，我們也開發出不同的高潔淨度型全氟橡膠配方。所有的材料皆可提供成品與半成品。
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th>Typical Physical Properties</th>
                    <th>FU650N</th>
                    <th>FU750N</th>
                    <th>FU650B</th>
                    <th>FU800W</th>
                    <th>FU750B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hardness, Shore A</td>
                    <td>65</td>
                    <td>75</td>
                    <td>65</td>
                    <td>80</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Dark Amber</td>
                    <td>Dark Amber</td>
                    <td>Black</td>
                    <td>CreamWhite</td>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <td>100% Modulus, Mpa</td>
                    <td>3.3</td>
                    <td>6.2</td>
                    <td>6.8</td>
                    <td>8.1</td>
                    <td>8.5</td>
                  </tr>
                  <tr>
                    <td>Tensile Strength at Breakb, Mpa</td>
                    <td>13</td>
                    <td>17</td>
                    <td>12.8</td>
                    <td>3.5</td>
                    <td>12.5</td>
                  </tr>
                  <tr>
                    <td>Elongation at Breakb, %</td>
                    <td>215</td>
                    <td>251</td>
                    <td>232</td>
                    <td>195</td>
                    <td>220</td>
                  </tr>
                  <tr>
                    <td>Compression Set (%, 70hr@200℃)c</td>
                    <td>12.5</td>
                    <td>17.5</td>
                    <td>17</td>
                    <td>22</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Max. Continuous Service Temp.d ℃</td>
                    <td>315</td>
                    <td>315</td>
                    <td>275</td>
                    <td>330</td>
                    <td>280</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4><img src="/assets/img/ffkm_icon.png" />低壓縮變形全氟橡膠</h4>
            <p>
              低壓縮變型全氟橡膠（Low Compression Set
              FFKM）具有多項優點，以下是其中幾個主要優點： 1.
              優良的耐久性：低壓縮變型橡膠在長時間的使用中仍能保持其彈性和形狀，減少了材料疲勞和變形，延長了使用壽命。
              2.
              良好的密封性能：由於其較低的壓縮變型率，這類橡膠材料在密封應用中能夠保持良好的密封效果，防止液體或氣體的滲漏。
              3.
              廣泛的溫度範圍：低壓縮變型橡膠通常能在寬廣的溫度範圍內維持其性能，使其適合用於各種極端溫度環境中。
              4.
              耐化學性：低壓縮變型全氟橡膠材料通常具有極佳的耐化學性，能夠抵抗多種化學物質的侵蝕，適用於化工、石油等行業。
              5.
              高彈性：低壓縮變型橡膠具備優異的彈性和回彈性，能夠在反覆受壓的情況下迅速恢復原狀。
              6.
              適用範圍廣：低壓縮變型橡膠被廣泛應用於汽車、電子、航空、醫療等各行各業，展現出其多用途性。
            </p>
            <p>
              這些優點使得低壓縮變型橡膠在需要高性能密封和耐久性材料的應用中具有不可替代的地位。所有的材料皆可提供成品與半成品。
            </p>
            <p>
              <strong
                >Low compression set, Thermal resistant FFKM. Equivalent to
                Kalrez® 7075</strong
              >
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th>Typical Physical Properties</th>
                    <th>LCS759B</th>
                    <th>LCS759B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hardness, Shore A</td>
                    <td>74</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Black</td>
                    <td>White</td>
                  </tr>
                  <tr>
                    <td>100% Modulus, Mpa</td>
                    <td>8.8</td>
                    <td>6.1</td>
                  </tr>
                  <tr>
                    <td>Tensile Strength at Break, Mpa</td>
                    <td>12.5</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>Elongation at Break, %</td>
                    <td>183</td>
                    <td>175</td>
                  </tr>
                  <tr>
                    <td>Compression Set (%, 70hr@200°C)c</td>
                    <td>12.5</td>
                    <td>12.6</td>
                  </tr>
                  <tr>
                    <td>Max. Continuous Service Temp.d °C</td>
                    <td>330</td>
                    <td>330</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4><img src="/assets/img/ffkm_icon.png" />食品醫療級</h4>
            <p>
              食品醫療級全氟橡膠（Food and Medical Grade
              Perfluoroelastomer，簡稱FFKM）具有以下特色：
              符合食品和醫療標準：這類全氟橡膠材料符合食品和醫療行業的嚴格標準，如FDA（美國食品藥品監督管理局）、USP
              Class
              VI（美國藥典第六類）等，確保其在接觸食品和醫療產品時的安全性和可靠性。
            </p>
            <br />
            <img
              src="/assets/img/fda_usp.png"
              style="width: 327px"
              alt="FDA and USP logos"
            />
            <br />
            <p>
              1.
              極低析出物：食品醫療級全氟橡膠在使用過程中析出物極少，這對於避免污染食品和醫療產品至關重要。<br />
              2.
              耐化學性：這類橡膠材料具有卓越的耐化學性，能夠抵抗多種化學品的侵蝕，包括酸、鹼、溶劑和清潔劑等，適合於需要頻繁清洗和消毒的應用環境。<br />
              3.
              耐高溫性能：食品醫療級全氟橡膠能夠在高溫環境下保持其物理和化學性能，不會發生降解或失效，適合於高溫消毒和滅菌工藝。<br />
              4.
              生物相容性：這類橡膠材料對人體組織無毒、無刺激，具有良好的生物相容性，適合用於醫療設備和器械的密封和接觸部件。<br />
              5.
              優異的機械性能：具備高強度、高彈性和耐磨性，能夠在長期使用中保持穩定的密封性能和機械強度。<br />
              6.
              低氣體滲透率：具有低氣體滲透率，確保在食品和醫療應用中能夠提供有效的氣密性和防護效果。
            </p>

            <p>
              <strong>食品級全氟橡膠(FDA級FFKM):</strong><br />
              FDA
              (美國藥物食品管理局)針對橡膠使用在食品相關的應用規定了一個規範，FDA
              CFR 21.177.2600是美國的一項法規，也是國際標準。FDA CFR 21.177.2600
              第A至D段描述了針對重複使用的"橡膠"製品的相關規定。FDA CFR
              21.177.2600
              第E和F段規定了FDA橡膠密封件與水性或脂肪性食品接觸時可萃取物的限量。該法規規定了水和正己烷中的萃取測試限值。<br /><br />
              FDA並沒有"批准"任何符合CFR
              21.177.2600的產品，僅提供規範讓製造商與使用者能據守與選擇，由FDA橡膠產品的最終製造商通過執行FDA證書來證明其合規性。同時需要注意的是，雖然某個部件可能由通合食品接觸的FDA橡膠材料製成，但這並不意味該部件在技術上適合其預期的應用。<br /><br />
              食品醫療級全氟橡膠因其卓越的化學和物理性能，廣泛應用於食品加工設備安全的領域。我們提供了符合FDA規範的全氟橡膠，所有的材料皆可提供成品與半成品。
            </p>

            <p><strong>FDA compliant FFKM</strong></p>
            <table class="table table-striped">
              <thead class="table-danger">
                <tr>
                  <th>Typical Physical Properties</th>
                  <th>F807B</th>
                  <th>F807W</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hardness, Shore A</td>
                  <td>75</td>
                  <td>76</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Black</td>
                  <td>White</td>
                </tr>
                <tr>
                  <td>100% Modulus, Mpa</td>
                  <td>10</td>
                  <td>5.8</td>
                </tr>
                <tr>
                  <td>Tensile Strength at Break, Mpa</td>
                  <td>17.5</td>
                  <td>12.2</td>
                </tr>
                <tr>
                  <td>Elongation at Break, %</td>
                  <td>180</td>
                  <td>215</td>
                </tr>
                <tr>
                  <td>Compression Set (%, 70hr@200°C)c</td>
                  <td>17</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>Max. Continuous Service Temp.d °C</td>
                  <td>250</td>
                  <td>250</td>
                </tr>
              </tbody>
            </table>

            <p>
              <strong>醫療級全氟橡膠(醫療級FFKM):</strong><br />
              醫療級全氟橡膠 (Medical grade FFKM) 需符合美國藥典第六類的規範
              (USP CI VI)。Fluorez® FFKM
              UFT753、UFT750為穿過材料技經過兩年，符合第三方實驗室測試通過，符合美國87章（或
              ISO 10993-5）和88章（或 ISO 10993-6、-10、-11）的要求，並符合 USP
              Class VI 新合物的測試要求。<br /><br />
              望瑞科技的醫療級全氟橡膠同時也是符合食品級要求全氟橡膠，其卓越的化學和物理性能，廣泛應用於醫療器械，製藥，與生物相容性相關的領域，所有的材料皆可提供成品。
            </p>

            <p><strong>USP CI VI compliant FFKM</strong></p>
            <table class="table table-striped">
              <thead class="table-danger">
                <tr>
                  <th>Typical Physical Properties</th>
                  <th>UFT753</th>
                  <th>UFT750</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hardness, Shore A</td>
                  <td>73</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Black</td>
                  <td>White</td>
                </tr>
                <tr>
                  <td>100% Modulus, Mpa</td>
                  <td>9.8</td>
                  <td>9.7</td>
                </tr>
                <tr>
                  <td>Tensile Strength at Break, Mpa</td>
                  <td>17.2</td>
                  <td>16.5</td>
                </tr>
                <tr>
                  <td>Elongation at Break, %</td>
                  <td>180</td>
                  <td>175</td>
                </tr>
                <tr>
                  <td>Compression Set (%, 70hr@200°C)c</td>
                  <td>17</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Max. Continuous Service Temp.d °C</td>
                  <td>250</td>
                  <td>250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="container text-section" style="line-height: 25px">
        <div class="row">
          <div class="col-12">
            <div class="mb-4">
              <p>成品的部分，我們提供:</p>
              <p>
                • 標準形式的O型環 (JIS B2401, JIS P, JIS V, JIS G, JIS S and
                international metric)<br />
                • 各式客製件<br />
                • 金屬接合件
              </p>
            </div>

            <div>
              <p>如果有其他特殊成品項目，歡迎與我們聯繫</p>

              <p>
                • ASTM D2240 (pellet test specimen)<br />
                • ASTM D412 & D1414 (dumbbell test specimen)<br />
                • ASTM D395B (AS568 K214 O-ring test specimen)<br />
                • ASTM D412 (dumbbell test specimens)<br />
                • ASTM D395B (AS214 O-ring test specimens)<br />
                • Fluorez proprietary test method
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
