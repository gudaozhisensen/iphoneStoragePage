<template>
    <div>
    <pageDetail memory="64GB" type="XS">
        
    </pageDetail>
    
    </div>
</template>

<script>
import pageDetail from '../../../components/storeDetail/storeDetailPage'
import {mapState} from 'vuex'
   export default {
     props:{
         memory: {
             type: String
         }
     },
       data() {
           return {
              
           }
       },
       components: {
           pageDetail
       }
   }
</script> 