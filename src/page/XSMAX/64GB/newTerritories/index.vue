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
    axios.get('../static/data/XSMax64GB.json').then((res) => {
        
         this.data = res.data;
        
         this.stock = this.data.store;
      
        this.store = this.stock[2].new_territories;
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