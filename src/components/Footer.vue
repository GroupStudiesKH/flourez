<template>
  <footer class="footer d-none d-lg-block">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 company_info d-none d-lg-block">
          <img class="logo" src="/assets/img/footer-logo.png" />
          <h3>{{ t("footer.company") }}</h3>
          <p>{{ t("footer.address") }}</p>
        </div>
        <div class="col-12 col-lg-3 contact d-none d-lg-flex">
          <p>
            <a :href="'tel:' + t('footer.phone')">Tel : {{ t("footer.phone") }}</a><br />
            Fax : {{ t("footer.fax") }}<br />
            <a :href="`mailto:` + t('footer.email')">{{ t('footer.email') }}</a>
          </p>
        </div>
        <div class="col-12 col-lg-4 slogan d-none d-lg-block">
          <h4>
            The<span> solution provider </span>of<br />
            perfluoroelastome.
          </h4>
          <span class="copyright"> ©Fluorez<sup>®</sup> Technology, Ltd. </span>
        </div>
      </div>
    </div>
    <div id="footer-point">
      <div class="row">
        <div class="col-2">
          <img class="left-point" src="/assets/img/footer_point.png" />
        </div>
        <div class="col-8"></div>
        <div class="col-2">
          <img class="right-point" src="/assets/img/footer_point.png" />
        </div>
      </div>
    </div>
  </footer>

  <footer class="footer-mobile d-lg-none" :class="locale">
    <div class="container">
      <div class="row">
        <div class="col-12 company_info">
          <p>{{ t("footer.address") }}</p>
        </div>
        <div class="col-12 contact">
          <p>
            <a :href="'tel:' + t('footer.phone')">Tel : {{ t("footer.phone") }}</a><br />
            Fax : {{ t("footer.fax") }}<br />
            <a :href="`mailto:` + t('footer.email')">{{ t('footer.email') }}</a>
            </p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Cookie 同意提示框 -->
  <div v-if="!cookieAccepted" class="cookie-consent">
    <div class="cookie-content">
      <p>{{ t("cookie.consent") }}</p>
      <button @click="acceptCookies" class="accept-btn">
        {{ t("cookie.accept") }}
      </button>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "Footer",
  data() {
    const { t, locale } = useI18n();

    return {
      cookieAccepted: false,
      t,
      locale,
    };
  },
  mounted() {
    // 檢查是否已經同意過 cookies
    this.cookieAccepted = localStorage.getItem("cookieAccepted") === "true";

    // if (this.cookieAccepted) {
    //   gtag("consent", "update", {
    //     ad_storage: "granted",
    //     analytics_storage: "granted",
    //   });
    //   console.log("cookieAccepted", this.cookieAccepted);
    // } else {
    //   gtag("consent", "update", {
    //     ad_storage: "denied",
    //     analytics_storage: "denied",
    //   });
    //   console.log("cookieAccepted", this.cookieAccepted);
    // }
  },
  methods: {
    acceptCookies() {
      this.cookieAccepted = true;
      localStorage.setItem("cookieAccepted", "true");
      // gtag("consent", "update", {
      //   ad_storage: "granted",
      //   analytics_storage: "granted",
      // });
    },
  },
};
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 1rem;
  z-index: 9999;
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accept-btn {
  background: #be1e2d;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;
}

.accept-btn:hover {
  background: #9a1825;
}

@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    text-align: center;
  }

  .accept-btn {
    margin-top: 1rem;
    margin-left: 0;
  }
}
</style>
