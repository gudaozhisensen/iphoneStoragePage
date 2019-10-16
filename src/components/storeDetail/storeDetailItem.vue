<template>
  <div class="store-phone-availability_location_content_wrapper">
            <div class="store_area_table_content">
                <table id="store_area_table">
                      <tr v-for="item in store" :key="item.storecode">
                        <td>                       
                          <div class="store_area_table_item">
                            <div>
                              <b style="font-size:16px;">{{item.storename}}</b>
                                <p class="storeaddDetail">{{item.storeadd}}</p>
                               
                                <p class="view_map_button" @click="viewLocation(item.storex,item.storey)"><i class="material-icons">room</i>View Map</p>
                            </div>
                          </div>

                          <div class="store_area_table_item">
                            <div class="store_area_table_icon_item" v-for="(type,index) in item.skulist" :key="index">
                                <i class="material-icons" :style="{color :type.avail}">{{stockType(type.avail)}}</i>
                              </div>
                          </div>
                        </td>
                      </tr>
                </table>
            </div>
          </div>
</template>

<script>
export default {
  name: 'storeItem',

  props: {
    store: {
        // type: Object
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
     stockType: type => {
       switch(type){
	  			case 'RED': return 'close';
	  			case 'YELLOW': return 'fiber_manual_record';
	  			case 'GREEN': return 'fiber_manual_record';
	  		}
     },
     viewLocation(x,y){
       window.open("https://map.baidu.com/@"+x+","+y+",13z");
     }
  },
}
</script>

<style lang="">
  #store_area_table>tr>td {
    padding: 30px;
  }
  #store_area_table>tr:nth-child(even) {
    background: #f3f3f3;
  }
  
  .view_map_button,.storeaddDetail {
    color: #9c9c9c;
    font-size: 13px;
    cursor: pointer;
  }
  .view_map_button .material-icons {
    color: rgb(255,0,0);
    font-size: 15px;
    padding-right: 5px;
    vertical-align: top;
  }
</style>