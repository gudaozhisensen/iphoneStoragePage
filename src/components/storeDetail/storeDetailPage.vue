<template>
<div>
    <div id="detailPage">
      <div class="content-topSide">
          <div class="content-topSide_phone-name">
            <h3>iPhone {{type}} {{memory}} availability at store </h3>
          </div>

          <div class="content-topSide_store-phone-availability_icon">
            <div class="store-phone-availability_icon_item">
                <i class="material-icons" style="color: green;">fiber_manual_record</i><span>In stock</span>
            </div>
            <div class="store-phone-availability_icon_item">
                <i class="material-icons" style="color: yellow;">fiber_manual_record</i><span>Limited stock available</span>
            </div>
            <div class="store-phone-availability_icon_item">
                <i class="material-icons" style=" color: red;">close</i><span>Out of stock</span>
            </div>
          </div>
      </div>
        
        <div class="content-topSide_store-phone-availability_wrapper">
              <div class="content-topSide_store-phone-availability_content">
                  <div class="content-topSide_store-phone-availability_location">
                    <router-link :to="'/'+type+'/'+memory+'/hongKong'" class="target_link">hongKong</router-link>
                    <router-link :to="'/'+type+'/'+memory+'/kowLoon'" class="target_link">kowLoon</router-link>
                    <router-link :to="'/'+type+'/'+memory+'/newTerritories'" class="target_link">newTerritories</router-link>
                    
                  </div>
                  <div class="content-topSide_store-phone-availability_color">
                    <ul>
                      <li class="color_item">Space<br/>Gray</li>
                      <li class="color_item">Silver</li>
                      <li class="color_item">Gold</li>
                    </ul>
                  </div>
              </div>

            <div class="split_line">
                <div class="content-topSide_store-phone-availability_color split_line_position">
                  <span class="split_line_short gray"></span> 
                  <span class="split_line_short silver"></span> 
                  <span class="split_line_short gold"></span>
                </div>
            </div>  
          </div>           
        <router-view></router-view>
       
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
  name:'storeDetail',
  props: {
    memory: {
      type: String
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      memoryStay: ''
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
    __memoryStay() {
      memoryStay = this.$route.query.memory;
    }
  },
  
}
</script>

<style lang="">
  #detailPage{
    max-width: 920px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 3px 3px 5px #cccccc;
    /* margin-top: 40px; */
    border-top: 2px solid red;

  }
  .storeDetail {
   
    box-shadow: 2px 2px 20px #cccccc;;
    max-width: 1080px;
    margin: 40px auto;
    margin-top: 25px;
  }
  .content-topSide {
      padding: 30px 30px 0 30px;
  }
  
  .content-topSide_store-phone-availability_icon {
    max-width: 500px;
    display: flex;
    margin: 0 auto;
    padding-bottom: 10px;
    font-size: 14px;
}
  .store-phone-availability_icon_item {
    flex: 1 0 0;
  }
  .material-icons {
    vertical-align: middle;
    font-weight: bold;
    font-size: 20px;
  }
  .content-topSide_store-phone-availability_icon span {
    font-size: 12px;
    padding:  0 15px 0 5px; 
  }
  .content-topSide_store-phone-availability_wrapper {
    padding: 0 30px;
  }
 .content-topSide_store-phone-availability_content {
    margin: 0 auto;
    display: flex;
    max-width: 920px;
    align-items: center;
  }
  .content-topSide_store-phone-availability_location {
    flex: 1;
    text-align: left;
    margin: 20px 0;
  }
  .content-topSide_store-phone-availability_content ul{
    padding-left: 0px;
    margin-bottom: 0;
  }
  .content-topSide_store-phone-availability_location .location_item {
    display: inline-block;
    list-style: none;
    padding: 10px 15px 10px 0px;
    cursor: pointer;
  }
  .target_link {
    position: relative;
    text-decoration: none;
    margin-right: 15px;
    font-size: 14px;
  }

  a.router-link-exact-active.active {
    color: red;
    padding-bottom: 10px;
    border-bottom: 3px solid red;
    z-index: 10;
    font-weight: bold;
}

  .content-topSide_store-phone-availability_color {
    flex: 1;
    text-align: right;
    padding-left: 36px;
  }
  .content-topSide_store-phone-availability_color .color_item {
     display: inline-block;
    list-style: none;
    padding: 7px 16px;
    font-size: 12px;
    text-align: center;
  }
  .split_line {
    position: relative;
    border:1px solid #ccc;
   
  }
  .split_line_position {
    position: absolute;
    display: inline-flex;
    right: 0;
    top: -2px;
  }
  .split_line_short {
    flex: 1;
    border: 1px solid rgb(119, 119, 119);
    height: 4px;
    width: 3.5rem;
    margin-right: 5px;
    display: inline-table;
    margin-right: 6px;
  }
  .gold {
    right: 0;
    background: rgb(255, 216, 189);
  }
  .silver {
    right: 6%;
    background: #D8D8D8;
  }
  .gray {
    right: 13%;
    background: #000000;
  }

  .store_area_table_content {
    max-width: 920px;
    margin: 0 auto;
  }
  .store_area_table_content table {
    text-align: left;
    width: 100%;
  }
  .store_area_table_content table td {
    display: flex;
  }
  .store_area_table_item {
    flex: 1 0 0;
    margin: 0 auto;
  }
  .store_area_table_item:last-child {
   text-align: right; 
  }
  .store_area_table_icon_item {
    display: inline-block;
    padding: 22px;
  }
  .store_area_table_icon_item .material-icons {
    font-size: 18px;
  }


  @media (max-width: 640px) {
    
    .content-topSide_store-phone-availability_content {
    margin: 0 auto;
    display: block;
    max-width: 920px;
    align-items: center;
    }
    .content-topSide_store-phone-availability_wrapper {
      padding: 0;
    }
    .content-topSide_store-phone-availability_location {
      display: block;
      text-align: center;
    }
    .target_link {
      margin: 0 8px;
      font-size: 16px;
    }
    a.router-link-exact-active.active {
      padding-bottom: 5px;
    }
    .content-topSide_store-phone-availability_color {
      display: flex;
      text-align: center;
      padding-left: 0px;
      
    }
    .content-topSide_store-phone-availability_color ul{
      margin: 0 auto;
    }
  
    .split_line_position {
      right: 20%;
      left: 25%;
    }
    .content-topSide {
      padding: 30px 8px 0 8px;
    }
    .store-phone-availability_icon_item {
      flex: auto;
      margin: 0 auto;
    }
    .content-topSide_store-phone-availability_icon span {
      padding: 0;
    }
    .store_area_table_item {
      position: relative;
    }

    .view_map_button {
      position: absolute;
      right: 0;
      top: 0;
      margin: 0;
    }

    .store_area_table_content table td {
      display: block;
    }
    .store_area_table_item:last-child {
      text-align: center;
    }
}
</style>