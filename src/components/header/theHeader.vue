<template>
  <div class="theHeader">
    <div class="pageHeader-wrapper">
      <div class="pageHeader  clearfix">
        <div class="pageHeader__logo-wrapper">
          <a href="/tc/" class="pageHeader__logo-link"><img src="https://www.smartone.com/IMG_V4/icon/menu-icon/logo_r.svg" class="pageHeader__logo-img"></a>
        </div>
        
        <div class="pageHeader__lang-wrapper">
          <div class="pageHeader__btn-lang" onclick="ChangeLang();">
            <img class="pageHeader__btn-lang-img" src="https://www.smartone.com/Register_ServicePlan/images/common/btn_en.png" border="0">
          </div>
        </div>
      </div>
	</div>
  </div>
</template>
<script>
export default {
  name: 'theHeader',
  data() {
    return {
      
    }
  },
}
</script>

<style lang="">
  
    .pageHeader-wrapper {
      border-bottom: 2px solid red;
      margin-bottom: 50px;
    }
    .pageHeader {
      display: table;
      max-width: 920px;
      margin: 0 auto;
      height: 70px;
    }
    .pageHeader__logo-wrapper {
      display: table-cell;
      vertical-align: middle;
      padding-left: 20px;
      width: 90%;
    }
    
    .pageHeader__logo-img {
      display: block;
      max-width: 120px;
      height: auto;
    }
    .pageHeader__lang-wrapper {
      display: table-cell;
      vertical-align: middle;
      padding-left: 30px;
      padding-right: 20px;
      width: auto;
    }
    .pageHeader__btn-lang {
      float: none;
      display: block;
      cursor: pointer;
      width: 30px;
      height: 30px;
      margin-left: auto;
      margin-right: 0;
      margin-top: 0;
    }
    .pageHeader__btn-lang-img {
      display: block;
      width: 100%;
      height: 100%;
    }

</style>