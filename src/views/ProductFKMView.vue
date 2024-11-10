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
              <h4>FKM 全氟化橡膠</h4>
              <p>
                FKM的成品一般指的是氟橡膠原料含氟量66%的雙分架橋氟化橡膠，也就是一般俗稱的Viton®
                。事實上氟橡膠也有高氟的成品，其原料含氟量介於67-70%之間，相對於一般含氟量的FKM來說，具有更強的抗化性與物理性質，但相對售價也偏高，應用於對使用環境要求更高的的領域中。不同廠牌的氟橡膠具備各自的特色，針對較高的耐溫與耐化性，以及耐高溫水氣等的不同需求，氟橡膠皆須透過混練廠調整FKM原膠材質與不同的佐劑而製造適合的商品。因此，如何挑選合適的氟橡膠產品仰賴的不僅是經驗，還有不同混練配方的測試，以求達成使用上的狀況需求。
              </p>

              <p>
                氟橡膠FKM，是由偏二氟乙烯（VDF），六氟丙烯（HFP），四氟乙烯（TFE）全氟甲基乙烯基醚（PMVE）和乙烯（Ethylene）這些不同的單元體聚合而成。不同的單元體組合而成的FKM具備有不同的含氟量與應用性能，以美商科慕(Chemours)的FKM產品Viton®而言，選用參考如下，享瑞科技提供客戶各式不同Viton®製品與相對應規格品供客戶使用。如果有其他特殊成品項目，歡迎與我們聯繫。
              </p>
            </div>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th>Viton Products</th>
                    <th>A</th>
                    <th>B</th>
                    <th>F</th>
                    <th>GBL-S</th>
                    <th>GF-S</th>
                    <th>GLT-S</th>
                    <th>GLT-S</th>
                    <th>GFLT-S</th>
                    <th>TBR-S</th>
                    <th>ETP-S</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>氟含量(Fluorine content, wt%)</td>
                    <td>66%</td>
                    <td>68%</td>
                    <td>70%</td>
                    <td>68%</td>
                    <td>70%</td>
                    <td>64%</td>
                    <td>66%</td>
                    <td>67%</td>
                    <td>60%</td>
                    <td>67%</td>
                  </tr>
                  <tr>
                    <td>耐化學性(Chemical resistance)</td>
                    <td>°</td>
                    <td>★</td>
                    <td>★★</td>
                    <td>★</td>
                    <td>★★</td>
                    <td>°</td>
                    <td>★</td>
                    <td>★★</td>
                    <td>°</td>
                    <td>★★★</td>
                  </tr>
                  <tr>
                    <td>耐鹼性(Base resistance)</td>
                    <td>×</td>
                    <td>×</td>
                    <td>×</td>
                    <td>°</td>
                    <td>°</td>
                    <td>★</td>
                    <td>★</td>
                    <td>★</td>
                    <td>★★★</td>
                    <td>★★★</td>
                  </tr>
                  <tr>
                    <td>耐低溫性(Low temperature properties)</td>
                    <td>★</td>
                    <td>★</td>
                    <td>°</td>
                    <td>★</td>
                    <td>°</td>
                    <td>★★★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>×</td>
                    <td>°</td>
                  </tr>
                  <tr>
                    <td>耐壓縮變形(Compression set resistance)</td>
                    <td>★★★</td>
                    <td>★★</td>
                    <td>★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>★</td>
                    <td>★</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="fkm_table_hint">
              <p>
                <span>★★★ Excellent</span> <span>★★ Very Good</span
                ><span>★ Good</span><span>° Fair</span><span>× Poor</span>
              </p>
            </div>

            <div class="container" id="fkm_section">
                <h5>Viton Types Monomer Composition</h5>

              <div class="row">
                <div class="col-12 badge">
                  <div class="outline">
                    <img src="/assets/img/fkm-img.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
