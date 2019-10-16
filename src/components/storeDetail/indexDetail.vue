<template>
    <div class="storckTab_wrapper">
        <!-- <indexDetail :count= "count+1" v-if="count < 3"></indexDetail> -->
          <div class="stockTabCombo_wrapper">
            <img src="https://www.smartone.com/service-site/iPhone-Availability/images/common/iphonex.png" alt="" width="180px" @click="show_tag">
            <h5><b>{{XS.name_en}}</b></h5>
            
              <div class="stockTabCombo_item">
                <router-link  @click="show_tag" v-for="(item,index) in this.XS.group" :key="item.groupid" :to="'/XS/'+item.memory+'/hongKong'" class="selectButtons_span" :memory="item.memory">
                  <span>{{item.memory}}</span>
                  <span class="zzjs" v-if="show==!show"></span>
                </router-link>   
              </div>
          </div>


          <div class="stockTabCombo_wrapper">
            <img src="https://www.smartone.com/service-site/iPhone-Availability/images/common/iphonex.png" alt="" width="180px">
            <h5><b>{{XSMAX.name_en}}</b></h5>

              <div class="stockTabCombo_item">
                <router-link v-for="(item, index) in this.XSMAX.group"  :to="'/XSMAX/'+item.memory" :key="item.groupid" class="selectButtons_span"><span>{{item.memory}}</span><span class="zzjs"></span></router-link>   
              </div>
              <!--  -->
          </div>
      </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'indexDetail',
    data() {
   return {
     data: [],
     XS: [],
     XSMAX: [],
     memory: '', //所选的容量
     choosedType_xs: null,
     choosedType_max: null,
     show: false
     
   }
 },
 created() {
    axios.get('../static/data/models.json').then((res) => {
        // console.log(res.Headers.status);
         this.data = res.data;
         this.XS = this.data.XS;
         console.log(this.data);
         this.XSMAX = this.data.XSMAX;
        },res =>{
        console.log("error");
      }); 
  },
  computed: {
    
  },
  methods: {
    memoryItem(id) {
      this.$router.push({
        path: `/XS/${id}`,
      })
      console.log(id)
    },
    choosed_xs(type){
      this.choosedType_xs = type;
    },
    choosed_max(type){
      this.choosedType_max = type;
    },
    show_tag() {
      // show = !show;
      // console.log(show);
      alert("aa");
      // return show;
    }
    
  },
}
</script>

<style>
.storckTab_wrapper {
  display: flex;
  max-width: 920px;
  line-height: 40px;
  margin: 0 auto;
  overflow: auto;
}

.stockTabCombo_wrapper {
  flex: 1;
  text-align: center;
  padding-bottom: 40px;
}

.stockTabCombo_wrapper .stockTabCombo_item> a {
  font-size: 14px;
  text-decoration: none;
  color: rgb(77, 85, 93);
  flex: 1;
  position: relative;
}
.zzjs {
    display: block;
    width: 1px;
    height: 1px;
    border: solid 16px;
    border-color: transparent transparent #ff0000 transparent;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    left: 35%;
    top: 125%;
    }

.stockTabCombo_wrapper .stockTabCombo_item> .active {
  color: rgb(240, 20, 20);
  border: 1px solid rgb(255, 0, 0);
}


.selectButtons_span{
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}


</style>