<template>
  <div class="theFooter">

      <div class="page_bottom_remark">
					<div class="content-block">
							<p><small>Remarks:</small></p>
							<ul>
								<li>Stock availability status shown at this page is for reference only. Actual stock availability is subject to system record at individual store when you visit at that moment.</li>
								<li>Stock is limited and on a first come, first served basis.</li>
							</ul>
					</div>
			</div>

      <div class="pageCopyright"> 
        Copyright 2019. All rights reserved. SmarTone Mobile Communications Limited. 
      </div>

  </div>
</template>


<script>
export default {
  name: 'theFooter',
  data() {
    return {
      
    }
  },
}
</script>



<style lang="">
.theFooter{
   max-width: 920px;
   margin: 0 auto;
}
.page_bottom_remark {
  text-align: left;
  }

.page_bottom_remark .content-block {
  text-align: left;
  padding: 26px 0px;
  font-size: 12px;
  margin-bottom: 0;
  }

.pageCopyright {
  margin: 0;
  padding: 20px 18px;
  font-size: 12px;
  color: #333333;
  letter-spacing: -0.21px;
}

</style>