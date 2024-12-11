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


    const scrollToMaterialSection = (elementID) => {
      const element = document.getElementById(elementID);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }


    return {
      isIntroScolled,
      t,
      locale,
      scrollToMaterialSection
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
          <div class="col-4 badge">
            <div class="outline" style="margin-right: 20px" @click="scrollToMaterialSection('ffkm_section')" role="button">
              <img src="/assets/img/ffkm.png" alt="" />
              <h4 class="d-none d-md-block">{{ t('product.ffkm.title') }}</h4>
              <h4 class="d-md-none">{{ t('product.ffkm.title_mobile') }}</h4>
            </div>
          </div>
          <div class="col-4 badge">
            <div class="outline" style="margin: 0 20px" @click="scrollToMaterialSection('fkm_section')" role="button">
              <img src="/assets/img/fkm.png" alt="" />
              <h4 class="d-none d-md-block">{{ t('product.fkm.title') }}</h4>
              <h4 class="d-md-none">{{ t('product.fkm.title_mobile') }}</h4>
            </div>
          </div>
          <div class="col-4 badge">
            <div class="outline" style="margin-left: 20px" @click="scrollToMaterialSection('pfls_section')" role="button">
              <img src="/assets/img/pfls.png" alt="" />
              <h4 class="d-none d-md-block">{{ t('product.pfls.title') }}</h4>
              <h4 class="d-md-none">{{ t('product.pfls.title_mobile') }}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-section" id="ffkm_section">
        <h4>{{ t('product.ffkm.title') }}</h4>
        <div class="row application">
          <div class="col-6 p-4">
            <img src="/assets/img/hpi-cpi-applications.webp" />
            <p>{{ t('material.hpiCpiApplications') }}</p>
          </div>
          <div class="col-6 p-4">
            <img src="/assets/img/material-semicon.webp" />
            <p>{{ t('material.semiconApplications') }}</p>
          </div>
        </div>
        <p>{{ t('material.ffkmIntro') }}</p>

        <p>
          <h3>{{ t('material.mainFeatures') }}：</h3>
        </p>

        <ul>
          <li>{{ t('material.ffkmFeature1') }}</li>
          <li>{{ t('material.ffkmFeature2') }}</li>
          <li>{{ t('material.ffkmFeature3') }}</li>
          <li>{{ t('material.ffkmFeature4') }}</li>
          <li>{{ t('material.ffkmFeature5') }}</li>
        </ul>
        <p>
          <h3>{{ t('material.ffkmConclusion') }}</h3>
        </p>

        <img src="/assets/img/material_center.png" />
      </div>

      <div class="container text-section" id="fkm_section">
        <h4>{{ t('product.fkm.title') }}</h4>
        <p>{{ t('material.fkmIntro') }}</p>
        <p><h3>{{ t('material.fkmFeatureTitle1') }}：</h3></p>
        <ul>
          <li>{{ t('material.fkmFeature1_1') }}</li>
          <li>{{ t('material.fkmFeature1_2') }}</li>
        </ul>

        <p><h3>{{ t('material.fkmFeatureTitle2') }}：</h3></p>
        <ul>
          <li>{{ t('material.fkmFeature2_1') }}</li>
          <li>{{ t('material.fkmFeature2_2') }}</li>
        </ul>

        <p><h3>{{ t('material.fkmFeatureTitle3') }}：</h3></p>
        <ul>
          <li>{{ t('material.fkmFeature3_1') }}</li>
        </ul>

        <p><h3>{{ t('material.fkmFeatureTitle4') }}：</h3></p>
        <ul>
          <li>{{ t('material.fkmFeature4_1') }}</li>
          <li>{{ t('material.fkmFeature4_2') }}</li>
        </ul>

        <p><h3>{{ t('material.applicationAreas') }}：</h3></p>
        <ul>
          <li>{{ t('material.fkmApplication1') }}</li>
          <li>{{ t('material.fkmApplication2') }}</li>
          <li>{{ t('material.fkmApplication3') }}</li>
          <li>{{ t('material.fkmApplication4') }}</li>
          <li>{{ t('material.fkmApplication5') }}</li>
        </ul>
<br>
        <h3>{{ t('material.fkmConclusion') }}</h3>
      </div>
<br>
      <div class="container text-section" id="pfls_section">
        <h4>{{ t('product.pfls.title') }}</h4>
        <p>{{ t('material.pflsIntro') }}</p>
        <ul>
          <li>{{ t('material.pflsFeature1') }}</li>
          <li>{{ t('material.pflsFeature2') }}</li>
          <li>{{ t('material.pflsFeature3') }}</li>
          <li>{{ t('material.pflsFeature4') }}</li>
          <li>{{ t('material.pflsFeature5') }}</li>
        </ul>
      </div>
      <div class="container">
        <div class="row application">
          <div class="col-6 p-4">
            <img src="/assets/img/fpd_img.webp" />
            <p>{{ t('material.fpdApplications') }}</p>
          </div>
          <div class="col-6 p-4">
            <img src="/assets/img/sanitary.webp" />
            <p>{{ t('material.sanitaryApplications') }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
