<template>
    <div>
    <pageDetail memory="64GB" type="XSMAX">
        
    </pageDetail>
    </div>
</template>

<script>
import pageDetail from '../../../components/storeDetail/storeDetailPage'
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