<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 company_info d-none d-lg-block">
          <img class="logo" src="/assets/img/footer-logo.png" />
          <h3>{{ t('footer.company') }}</h3>
          <p>{{ t('footer.address') }}</p>
        </div>
        <div class="col-12 col-lg-3 contact d-none d-lg-flex">
          <p>
            Tel : {{ t('footer.phone') }}<br />
            Fax : {{ t('footer.fax') }}<br />
            service@fluorez.com.tw
          </p>
        </div>
        <div class="col-12 col-lg-4 slogan d-none d-lg-block">
          <h4>
            The<span> solution provider </span>of<br />
            perfluoroelastome.
          </h4>
          <span class="copyright"> {{ t('footer.intro') }}© 2024</span>
        </div>

        <div class="col-6 company_info d-block d-lg-none">
          <img class="logo" src="/assets/img/footer-logo.png" />
          <h3>{{ t('footer.company') }}</h3>
        </div>

        <div class="col-6 slogan d-block d-lg-none">
          <h4>
            The<span> solution provider </span>of<br />
            perfluoroelastome.
          </h4>
        </div>
      </div>
    </div>
    <div id="footer-point">
      <div class="row">
        <div class="col-2">
          <img class="left-point" src="/assets/img/footer_point.png">
        </div>
        <div class="col-8">
        </div>
        <div class="col-2">
          <img class="right-point" src="/assets/img/footer_point.png">
        </div>         
      </div>
    </div>

    <!-- Cookie 同意提示框 -->
    <div v-if="!cookieAccepted" class="cookie-consent">
      <div class="cookie-content">
        <p>{{ t('cookie.consent') }}</p>
        <button @click="acceptCookies" class="accept-btn">{{ t('cookie.accept') }}</button>
      </div>
    </div>
  </footer>
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
    }
  },
  mounted() {
    // 檢查是否已經同意過 cookies
    this.cookieAccepted = localStorage.getItem('cookieAccepted') === 'true'
  },
  methods: {
    acceptCookies() {
      this.cookieAccepted = true
      localStorage.setItem('cookieAccepted', 'true')
    }
  }
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
  background: #BE1E2D;
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
