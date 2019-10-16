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
    axios.get('../static/data/XSMax512GB.json').then((res) => {
        
         this.data = res.data;
        
         this.stock = this.data.store;
      
        this.store = this.stock[1].kowloon;
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