<template>
    <div class="container" id="badge_area">
        <div class="row">
            <div class="col-6 col-md-3 badge">
            <a href="ffkm">
                <div class="outline">
                    <img src="/assets/img/ffkm.png" alt="" />
                    <h4>{{ t('product.ffkm.title') }}</h4>
                </div>
            </a>
            </div>
            <div class="col-6 col-md-3 badge">
            <a href="fkm">
                <div class="outline" style="margin: 0 10px 0 0">
                    <img src="/assets/img/fkm.png" alt="" />
                    <h4>{{ t('product.fkm.title') }}</h4>
                </div>
            </a>
            </div>
            <div class="col-6 col-md-3 badge">
            <a href="specfkm">
                <div class="outline" style="margin: 0 10px 0 0">
                    <img src="/assets/img/spec_fkm.png" alt="" />
                    <h4>{{ t('product.specFkm.title') }}</h4>
                </div>
            </a>
            </div>
            <div class="col-6 col-md-3 badge">
            <a href="pfls">
                <div class="outline" style="margin: 0 0 0 5px">
                    <img src="/assets/img/pfls.png" alt="" />
                    <h4>{{ t('product.pfls.title') }}</h4>
                </div>
            </a>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: "ProductsMenu",
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale
    };
  },
};
</script>
