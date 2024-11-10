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
              <h4>FKM特殊氟化橡膠</h4>
              <p>
                所謂的的特殊氟橡膠指的是除了Viton A 以外的氟橡膠: 有高氟的成品，其原料含氟量介於67-70%之間，相對於一般含氟量的FKM來說，具有更強的抗化性與物理性質，但相對售價也偏高，耐低溫的產品，過氧架橋的產品。應用於對使用環境要求更高的的領域中。不同廠牌的氟橡膠具備各自的特色，針對較高的耐溫與耐化性，以及耐高溫水氣等的不同需求，氟橡膠皆須透過混練廠調整FKM原膠材質與不同的佐劑而製造適合的商品。因此，如何挑選合適的氟橡膠產品仰賴的不僅是經驗，還有不同混練配方的測試，以求達成使用上的狀況需求。
              </p>

              <p>
                孚瑞科技自有橡膠混練廠房設備並專注投入FKM配方的研究與開發，銷售FKM各式標準及訂製成品，我們有齊全的AS- 568A，JISB2401P，V，G，S模具。我們亦接受客戶指定所需的各型特種規格的FKM產品，不論是各種顏色，形式，硬度或各種環境需求的成品我們皆可配合客戶製作或開發。與鐵件接合的氟橡膠成品也是我們服務的項目，我們同時也能提供PTFE(鐵氟龍)及PFA包覆的密封件, FEP(氟樹脂)噴鍍的密封件。此外，針對特殊環境的氟橡膠使用，我們開發了一系列的特殊氟橡膠系列，用以應付一般氟橡膠無法應付的環境。包含：
              </p>

              <p>
                ・高潔淨度低釋出系列<br/>
                ・特殊耐溫型氟橡膠系列<br/>
                ・高氟系列<br/>
                ・抗化性優異的氟橡膠系列<br/>
                ・抗靜電系列<br/>
                ・低溫系列
              </p>
              <br/>
              <p>
                相類似的產品在市面上多被過度包裝並與全氟橡膠(FFKM)進行比較，這樣的比較事實上是沒有意義的。因為密封件的材質選擇，不單單只看使用環境，很多時候，使用壽命也是一個重要的選擇要點。無論是哪一種氟橡膠產品，都有他擅長表現的環境狀態與相對應的疲態。全氟橡膠在潔淨度，使用壽命，耐溫耐化上，依然有其不可取代性。選擇上，我們多建議客戶與製造方多討論，必要的測試經常比書面文字更有效率。唯有將合適的材質應用在合適的應用範圍，方能在經濟考量上與期待的使用狀態上取得平衡。如果有其他特殊成品項目，歡迎與我們聯繫。
              </p>

              <img src="/assets/img/specfkm_img.png" />

            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
