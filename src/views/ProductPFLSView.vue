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
      <ProductsMenu />

      <div class="container text-section">
        <div class="row">
          <div class="col-12">
            <div class="mb-4">
              <h4>PFLs 電子氟化液 ( 冷凍氟化液 )</h4>
              <p>
                電子氟化液為一種無色透明、無味、無毒性且具熱穩定的全氟化液體，可滿足各種熱傳導、製造和測試應用的需求。電子氟化液具有極佳的熱和化學的穩定性、可以與活性材料如金屬、塑膠和彈性體相相容。電子氟化液依其沸點不同適合於半導體製造工業中許多單相熱傳導應用與電子業封裝洩漏測試。工作溫度範圍廣，適用於蝕刻機、離子注入機、測試設備等諸設備上的熱傳導應用。
              </p>

              <!-- 第一個表格：測試項目 -->
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead class="table-danger">
                    <tr>
                      <th>電子氟化液(PFLs)</th>
                      <th>FL-50</th>
                      <th>FL-98</th>
                      <th>FL-125</th>
                      <th>FL-165</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MIL STD. 測試</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>溶劑測試</td>
                      <td>×</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Detector Fluids (Bombing)</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bubble Tank or NID</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>測試液 (Bubble Tank)</td>
                      <td></td>
                      <td></td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <td>溫度電擊試驗</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>低溫側</td>
                      <td></td>
                      <td>×</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>高溫側</td>
                      <td></td>
                      <td></td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <td>濕度阻燃/度力測試</td>
                      <td></td>
                      <td></td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <td>低溫/高溫傳導等</td>
                      <td></td>
                      <td>×</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>高電壓/介電質測試</td>
                      <td>×</td>
                      <td>×</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <td>便道液浴</td>
                      <td>×</td>
                      <td>×</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- 第二個表格：產品規格 -->
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead class="table-danger">
                    <tr>
                      <th>產品規格</th>
                      <th>FL-50</th>
                      <th>FL-98</th>
                      <th>FL-125</th>
                      <th>FL-165</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>外觀</td>
                      <td>無色透明、無味</td>
                      <td>無色透明、無味</td>
                      <td>無色透明、無味</td>
                      <td>無色透明、無味</td>
                    </tr>
                    <tr>
                      <td>平均分子量</td>
                      <td>320</td>
                      <td>430</td>
                      <td>550</td>
                      <td>650</td>
                    </tr>
                    <tr>
                      <td>沸點 ℃</td>
                      <td>50</td>
                      <td>98</td>
                      <td>125</td>
                      <td>165</td>
                    </tr>
                    <tr>
                      <td>冰點 ℃</td>
                      <td>＜-80</td>
                      <td>＜-60</td>
                      <td>-55</td>
                      <td>-57</td>
                    </tr>
                    <tr>
                      <td>預估臨界溫度 ℃</td>
                      <td>160</td>
                      <td>240</td>
                      <td>230</td>
                      <td>269</td>
                    </tr>
                    <tr>
                      <td>預估臨界壓力 Mpa</td>
                      <td>1.52</td>
                      <td>1.18</td>
                      <td>1.2</td>
                      <td>1.18</td>
                    </tr>
                    <tr>
                      <td>密度 g/cm3</td>
                      <td>1.61</td>
                      <td>1.78</td>
                      <td>1.8</td>
                      <td>1.86</td>
                    </tr>
                    <tr>
                      <td>在沸點下的標熱 J/g</td>
                      <td>80</td>
                      <td>84</td>
                      <td>136</td>
                      <td>69</td>
                    </tr>
                    <tr>
                      <td>動力粘度 cSt</td>
                      <td>0.5</td>
                      <td>0.8</td>
                      <td>0.68</td>
                      <td>2.2</td>
                    </tr>
                    <tr>
                      <td>絕對粘度 cP</td>
                      <td>6</td>
                      <td>3.4</td>
                      <td>1.68</td>
                      <td>4.1</td>
                    </tr>
                    <tr>
                      <td>蒸氣壓 kPa</td>
                      <td>30</td>
                      <td>0.56</td>
                      <td>1.22</td>
                      <td>0.3</td>
                    </tr>
                    <tr>
                      <td>比熱 J·kg-1·℃-1</td>
                      <td>1030</td>
                      <td>1050</td>
                      <td>1440</td>
                      <td>1100</td>
                    </tr>
                    <tr>
                      <td>熱傳係數 K-1</td>
                      <td>0.0013</td>
                      <td>0.0014</td>
                      <td>0.0034</td>
                      <td>0.0012</td>
                    </tr>
                    <tr>
                      <td>表面張力 mN/m</td>
                      <td>10</td>
                      <td>15</td>
                      <td>12.7</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>絕緣強度 KV (2.54 mm)</td>
                      <td>30</td>
                      <td>45</td>
                      <td>50</td>
                      <td>45</td>
                    </tr>
                    <tr>
                      <td>絕緣常數 (1KHz)</td>
                      <td>1.8</td>
                      <td>1.86</td>
                      <td>1.96</td>
                      <td>1.9</td>
                    </tr>
                    <tr>
                      <td>耗散因數 (1KHz)</td>
                      <td>＜0.0003</td>
                      <td>＜0.0003</td>
                      <td>N/A</td>
                      <td>＜0.0003</td>
                    </tr>
                    <tr>
                      <td>電阻率 ohm-cm</td>
                      <td>2.0x1015</td>
                      <td>2.0x1015</td>
                      <td>N/A</td>
                      <td>4.0x1015</td>
                    </tr>
                    <tr>
                      <td>對水的溶解度 ppm</td>
                      <td>＜155</td>
                      <td>＜13</td>
                      <td>＜7</td>
                      <td>＜7</td>
                    </tr>
                    <tr>
                      <td>在水中的溶解度 ppmw</td>
                      <td>＜41</td>
                      <td>＜41</td>
                      <td>＜5</td>
                      <td>＜5</td>
                    </tr>
                    <tr>
                      <td>臭氧消耗值</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
