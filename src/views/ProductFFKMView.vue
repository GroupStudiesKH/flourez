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
        <h4>{{ t('product.ffkm.title') }}</h4>
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
            <h4><img src="/assets/img/ffkm_icon.png" />{{ t('product.ffkm.chemicalResistant.title') }}</h4>
            <p>{{ t('product.ffkm.chemicalResistant.description') }}</p>
            <p>
              <strong>{{ t('product.ffkm.chemicalResistant.equivalent') }}</strong>
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
                    <th>Hardness<sup>a</sup>, Shore A</th>
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
                    <td>{{ t('product.color.black') }}</td>
                    <td>{{ t('product.color.white') }}</td>
                    <td>{{ t('product.color.black') }}</td>
                    <td>{{ t('product.color.beige') }}</td>
                    <td>{{ t('product.color.black') }}</td>
                    <td>{{ t('product.color.black') }}</td>
                    <td>{{ t('product.color.white') }}</td>
                  </tr>
                  <tr>
                    <td>100% Modulus<sup>b</sup>, Mpa</td>
                    <td>10</td>
                    <td>4.5</td>
                    <td>11.6</td>
                    <td>7.1</td>
                    <td>11</td>
                    <td>17</td>
                    <td>4.5</td>
                  </tr>
                  <tr>
                    <td>Tensile Strength<sup>b</sup> at Break, Mpa</td>
                    <td>17.5</td>
                    <td>10</td>
                    <td>15.8</td>
                    <td>18</td>
                    <td>18.5</td>
                    <td>21</td>
                    <td>14.1</td>
                  </tr>
                  <tr>
                    <td>Elongation at Break<sup>b</sup>, %</td>
                    <td>177</td>
                    <td>190</td>
                    <td>129</td>
                    <td>185</td>
                    <td>150</td>
                    <td>125</td>
                    <td>188</td>
                  </tr>
                  <tr>
                    <td>Compression Set<sup>c</sup> (%, 70hr@200 °C )</td>
                    <td>17</td>
                    <td>25</td>
                    <td>20</td>
                    <td>21</td>
                    <td>24</td>
                    <td>30</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>Max. Continuous Service Temp °C<sup>d</sup></td>
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
            <h4><img src="/assets/img/ffkm_icon.png" />{{ t('product.ffkm.thermalResistant.title') }}</h4>
            <p>{{ t('product.ffkm.thermalResistant.description1') }}</p>
            
            <p><strong>{{ t('product.ffkm.thermalResistant.equivalent') }}</strong></p>
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
                    <td>Hardness<sup>a</sup>,<br/> Shore A</td>
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
                    <td>100% <br/>Modulus<sup>b</sup>, Mpa</td>
                    <td>6</td>
                    <td>4.5</td>
                    <td>13.5</td>
                    <td>3.3</td>
                  </tr>
                  <tr>
                    <td>Tensile Strength<sup>b</sup> <br/>at Break, Mpa</td>
                    <td>14</td>
                    <td>7.5</td>
                    <td>16.5</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Elongation<sup>b</sup> <br/>at Break, %</td>
                    <td>260</td>
                    <td>262</td>
                    <td>115</td>
                    <td>189</td>
                  </tr>
                  <tr>
                    <td>Compression Set<sup>c</sup> <br/>(%, 70hr@200℃)</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Max. <br/>Continuous Service<sup>d</sup> <br/>Temp ℃</td>
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
            <h4><img src="/assets/img/ffkm_icon.png" />{{ t('product.ffkm.highPurity.title') }}</h4>
            <p>{{ t('product.ffkm.highPurity.intro') }}</p>
            <ol>
              <li>{{ t('product.ffkm.highPurity.feature1') }}</li>
              <li>{{ t('product.ffkm.highPurity.feature2') }}</li>
              <li>{{ t('product.ffkm.highPurity.feature3') }}</li>
              <li>{{ t('product.ffkm.highPurity.feature4') }}</li>
              <li>{{ t('product.ffkm.highPurity.feature5') }}</li>
              <li>{{ t('product.ffkm.highPurity.feature6') }}</li>
              <li>{{ t('product.ffkm.highPurity.feature7') }}</li>
              <li>{{ t('product.ffkm.highPurity.feature8') }}</li>
            </ol>
            <p>{{ t('product.ffkm.highPurity.applications') }}</p>
            <p><strong>{{ t('product.ffkm.highPurity.customization') }}</strong></p>
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
                    <td>Hardness<sup>a</sup>, Shore A</td>
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
                    <td>100% Modulus<sup>b</sup>, Mpa</td>
                    <td>3.3</td>
                    <td>6.2</td>
                    <td>6.8</td>
                    <td>8.1</td>
                    <td>8.5</td>
                  </tr>
                  <tr>
                    <td>Tensile Strength at Break<sup>b</sup>, Mpa</td>
                    <td>13</td>
                    <td>17</td>
                    <td>12.8</td>
                    <td>3.5</td>
                    <td>12.5</td>
                  </tr>
                  <tr>
                    <td>Elongation at Break<sup>b</sup>, %</td>
                    <td>215</td>
                    <td>251</td>
                    <td>232</td>
                    <td>195</td>
                    <td>220</td>
                  </tr>
                  <tr>
                    <td>Compression Set<sup>c</sup> (%, 70hr@200℃)</td>
                    <td>12.5</td>
                    <td>17.5</td>
                    <td>17</td>
                    <td>22</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Max. Continuous Service Temp<sup>d</sup> ℃</td>
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
            <h4><img src="/assets/img/ffkm_icon.png" />{{ t('product.ffkm.lowCompression.title') }}</h4>
            <p>{{ t('product.ffkm.lowCompression.description') }}</p>
            <p>{{ t('product.ffkm.lowCompression.applications') }}</p>
            <p>
              <strong>{{ t('product.ffkm.lowCompression.equivalent') }}</strong>
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
                    <td>Hardness<sup>a</sup>, Shore A</td>
                    <td>74</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Black</td>
                    <td>White</td>
                  </tr>
                  <tr>
                    <td>100% Modulus<sup>b</sup>, Mpa</td>
                    <td>8.8</td>
                    <td>6.1</td>
                  </tr>
                  <tr>
                    <td>Tensile Strength<sup>b</sup> at Break, Mpa</td>
                    <td>12.5</td>
                    <td>12.2</td>
                  </tr>
                  <tr>
                    <td>Elongation at Break<sup>b</sup>, %</td>
                    <td>180</td>
                    <td>215</td>
                  </tr>
                  <tr>
                    <td>Compression Set<sup>c</sup> (%, 70hr@200°C)</td>
                    <td>12.5</td>
                    <td>12.6</td>
                  </tr>
                  <tr>
                    <td>Max. Continuous Service Temp<sup>d</sup> °C</td>
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
            <h4><img src="/assets/img/ffkm_icon.png" />{{ t('product.ffkm.foodMedical.title') }}</h4>
            <p>{{ t('product.ffkm.foodMedical.intro') }}</p>
            <br />
            <img
              src="/assets/img/fda_usp.png"
              style="width: 327px"
              alt="FDA and USP logos"
            />
            <br />
            <p>
              {{ t('product.ffkm.foodMedical.feature1') }}<br />
              {{ t('product.ffkm.foodMedical.feature2') }}<br />
              {{ t('product.ffkm.foodMedical.feature3') }}<br />
              {{ t('product.ffkm.foodMedical.feature4') }}<br />
              {{ t('product.ffkm.foodMedical.feature5') }}<br />
              {{ t('product.ffkm.foodMedical.feature6') }}
            </p>

            <p>
              <strong>{{ t('product.ffkm.foodMedical.fdaTitle') }}</strong><br />
              {{ t('product.ffkm.foodMedical.fdaDescription1') }}<br /><br />
              {{ t('product.ffkm.foodMedical.fdaDescription2') }}<br /><br />
              {{ t('product.ffkm.foodMedical.fdaDescription3') }}
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
                  <td>Hardness<sup>a</sup>, Shore A</td>
                  <td>75</td>
                  <td>76</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Black</td>
                  <td>White</td>
                </tr>
                <tr>
                  <td>100% Modulus<sup>b</sup>, Mpa</td>
                  <td>10</td>
                  <td>5.8</td>
                </tr>
                <tr>
                  <td>Tensile Strength<sup>b</sup> at Break, Mpa</td>
                  <td>17.5</td>
                  <td>12.2</td>
                </tr>
                <tr>
                  <td>Elongation at Break<sup>b</sup>, %</td>
                  <td>180</td>
                  <td>215</td>
                </tr>
                <tr>
                  <td>Compression Set<sup>c</sup> (%, 70hr@200°C)</td>
                  <td>17</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>Max. Continuous Service Temp<sup>d</sup> °C</td>
                  <td>250</td>
                  <td>250</td>
                </tr>
              </tbody>
            </table>

            <p>
              <strong>{{ t('product.ffkm.foodMedical.medicalTitle') }}</strong><br />
              {{ t('product.ffkm.foodMedical.medicalDescription1') }}<br /><br />
              {{ t('product.ffkm.foodMedical.medicalDescription2') }}
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
                  <td>Hardness<sup>a</sup>, Shore A</td>
                  <td>73</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Black</td>
                  <td>White</td>
                </tr>
                <tr>
                  <td>100% Modulus<sup>b</sup>, Mpa</td>
                  <td>9.8</td>
                  <td>9.7</td>
                </tr>
                <tr>
                  <td>Tensile Strength<sup>b</sup> at Break, Mpa</td>
                  <td>17.2</td>
                  <td>16.5</td>
                </tr>
                <tr>
                  <td>Elongation at Break<sup>b</sup>, %</td>
                  <td>180</td>
                  <td>175</td>
                </tr>
                <tr>
                  <td>Compression Set<sup>c</sup> (%, 70hr@200°C)</td>
                  <td>17</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Max. Continuous Service Temp<sup>d</sup> °C</td>
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
              <p><strong>{{ t('product.ffkm.products.intro') }}</strong></p>
              <p>
                {{ t('product.ffkm.products.item1') }}<br />
                {{ t('product.ffkm.products.item2') }}<br />
                {{ t('product.ffkm.products.item3') }}
              </p>
            </div>

            <div>
              <p><strong>{{ t('product.ffkm.contact') }}</strong></p>
              <p>
                <sup>a</sup> ASTM D2240 (pellet test specimen)<br />
                <sup>b</sup> ASTM D412 & D1414 (dumbbell test specimen)<br />
                <sup>c</sup> ASTM D395B (AS568 K214 O-ring test specimen)<br />
                <sup>d</sup> Fluorez proprietary test method
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
