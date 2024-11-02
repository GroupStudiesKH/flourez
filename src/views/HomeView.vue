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
  <main id="index">
    <div class="banner"></div>
    <div id="bannerCarousel" class="carousel slide">
      <div class="carousel-inner banner">
        <div class="carousel-item active">
          <div
            style="background-image: url('/assets/img/home_banner.png')"
            class="banner-content"
          >
            <div class="container">
              <h1>Discover Fluorez Technology</h1>
              <p>
                A global leader in FFKM sealing solutions trusted by
                international industrial organizations. Our mission is simple:
                deliver cost-effective, durable solutions tailored to your
                specific needs. Experience excellence with Fluorez Technology
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            style="background-image: url('/assets/img/home_banner.png')"
            class="banner-content"
          >
            <div class="container">
              <h1>Discover Fluorez Technology</h1>
              <p>
                A global leader in FFKM sealing solutions trusted by
                international industrial organizations. Our mission is simple:
                deliver cost-effective, durable solutions tailored to your
                specific needs. Experience excellence with Fluorez Technology
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div id="company_info">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-12" id="company_pic">
            <img src="/assets/img/index_intro.png" alt="" />
          </div>
          <div class="col-md-6 col-lg-6 col-12" id="company_intro">
            <p v-html="$t('index.intro')"></p>
          </div>
        </div>
      </div>

      <div id="company_info_right_shape"></div>
    </div>

    <div class="container" :class="isIntroScolled ? `scrolled` : ``" id="intro">
      <div class="row">
        <div class="col-6 col-md-3 badge">
          <div class="heading">
            <h3>氟化橡膠</h3>
            <span>Fluoroelastomers, FKM</span>
          </div>
          <img src="/assets/img/home_section1.webp" alt="" />
          <p v-html="t('index.feature1_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <div class="heading">
            <h3>全氟橡膠</h3>
            <span>Fluoroelastomers, FKM</span>
          </div>
          <img src="/assets/img/home_section2.webp" alt="" />
          <p v-html="t('index.feature2_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <div class="heading">
            <h3>全氟化液</h3>
            <span>Perfluorinated liquids</span>
          </div>
          <img src="/assets/img/home_section3.webp" alt="" />
          <p v-html="t('index.feature3_subtitle')"></p>
        </div>
        <div class="col-6 col-md-3 badge">
          <div class="heading">
            <h3>特殊氟橡膠</h3>
            <span>PTFE micropowders</span>
          </div>
          <img src="/assets/img/home_section4.webp" alt="" />
          <p v-html="t('index.feature4_subtitle')"></p>
        </div>
      </div>
    </div>

    <div id="csr_green">
      <div class="container">
        <div class="row">
          <div class="col-12 col-xl-6 pt-lg-5">
            <img src="/assets/img/euro_logo.webp" />
            <h3>{{ t("index.feature5.title") }}</h3>
            <ul class="mt-lg-4">
              <li>
                <img src="/assets/img/check.webp" />
                {{ t("index.feature5.content_1") }}
              </li>
              <li>
                <img src="/assets/img/check.webp" />
                {{ t("index.feature5.content_2") }}
              </li>
              <li>
                <img src="/assets/img/check.webp" />
                {{ t("index.feature5.content_3") }}
              </li>
              <li>
                <img src="/assets/img/check.webp" />
                {{ t("index.feature5.content_4") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="iso_quality">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>{{ t("index.feature6.title") }}</h3>
            <p>{{ t("index.feature6.content_1") }}</p>
            <a :href="`/${locale}/quality`" class="pill_button mt-5">
              {{ t("index.feature6.btn") }}
            </a>
          </div>
        </div>
      </div>
      <div id="index_left_shape"></div>
    </div>
  </main>
  <Footer />
</template>
