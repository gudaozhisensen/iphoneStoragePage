<template>
    <div>
        <detailItem :store="store"></detailItem>
    </div>
</template>

<script>
import detailItem from '../../../../components/storeDetail/storeDetailItem'
import axios from 'axios'
export default {
    data() {
        return {
            data: [],
            stock: [],
            store: {}
           
        }
    },
    created() {
    axios.get('../static/data/XS64GB.json').then((res) => {
        // console.log(res.Headers.status);
         this.data = res.data;
        //  console.log(this.data);
         this.stock = this.data.store;
        //  console.log(this.store);
        this.store = this.stock[0].hong_kong;
         console.log(this.store);
        },res =>{
        console.log("error");
      }); 
  },
    components: {
        detailItem
    }
}
</script>