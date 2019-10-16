import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'


Vue.use(Vuex)

const store =  [ 
        {
        "itemNum": 1,
        "storex": "114.183033",
        "storename": "Causeway Bay",
        "storeadd": "G/F, 58 Percival Street",
        "storey": "22.279586",
        "skulist": [{
          "avail": "G",
          "code": "MT942ZA/A",
          "name": "Space Gray"
        }, {
          "avail": "R",
          "code": "MT952ZA/A",
          "name": "Silver"
        }, {
          "avail": "Y",
          "code": "MT962ZA/A",
          "name": "Gold"
        }],
        "storecode": "CBS"
      },
       {
        "storex": "114.174728",
        "storename": "Wanchai",
        "storeadd": "No. 172 Johnston Road, Mei Wah Building",
        "storey": "22.276727",
        "skulist": [{
          "avail": "R",
          "code": "MT942ZA/A",
          "name": "Space Gray"
        }, {
          "avail": "R",
          "code": "MT952ZA/A",
          "name": "Silver"
        }, {
          "avail": "R",
          "code": "MT962ZA/A",
          "name": "Gold"
        }],
        "storecode": "WCS"
      }, {
        "storex": "114.1579161",
        "storename": "Central",
        "storeadd": "Shop 1021, Podium Level 1, ifc mall, 1 Harbour View Street",
        "storey": "22.2850053",
        "skulist": [{
          "avail": "Y",
          "code": "MT942ZA/A",
          "name": "Space Gray"
        }, {
          "avail": "R",
          "code": "MT952ZA/A",
          "name": "Silver"
        }, {
          "avail": "R",
          "code": "MT962ZA/A",
          "name": "Gold"
        }],
        "storecode": "IFC"
      }, {
        "storex": "114.221699",
        "storename": "Sai Wan Ho",
        "storeadd": "Shop 12A, G/F, Tai On building, 57-58 Shau Kei Wan Road",
        "storey": "22.282524",
        "skulist": [{
          "avail": "R",
          "code": "MT942ZA/A",
          "name": "Space Gray"
        }, {
          "avail": "R",
          "code": "MT952ZA/A",
          "name": "Silver"
        }, {
          "avail": "R",
          "code": "MT962ZA/A",
          "name": "Gold"
        }],
        "storecode": "SWH"
      }, {
        "storex": "114.23687",
        "storename": "Chai Wan",
        "storeadd": "Shop 325, Level 3, New Jade Building Arcade, 233 Chai Wan Road",
        "storey": "22.264475",
        "skulist": [{
          "avail": "R",
          "code": "MT942ZA/A",
          "name": "Space Gray"
        }, {
          "avail": "R",
          "code": "MT952ZA/A",
          "name": "Silver"
        }, {
          "avail": "R",
          "code": "MT962ZA/A",
          "name": "Gold"
        }],
        "storecode": "CWS"
      }, {
        "storex": "114.185854",
        "storename": "Causeway Bay",
        "storeadd": "Shop G2, G/F, McDonald's Bldg, 46-54 Yee Wo Street",
        "storey": "22.279604",
        "skulist": [{
          "avail": "R",
          "code": "MT942ZA/A",
          "name": "Space Gray"
        }, {
          "avail": "R",
          "code": "MT952ZA/A",
          "name": "Silver"
        }, {
          "avail": "R",
          "code": "MT962ZA/A",
          "name": "Gold"
        }],
        "storecode": "CWB"
      }, {
        "storex": "114.1548805",
        "storename": "Aberdeen",
        "storeadd": "Shop G26-27, G/F, Port Centre, 38 Chengtu Road",
        "storey": "22.248884",
        "skulist": [{
          "avail": "R",
          "code": "MT942ZA/A",
          "name": "Space Gray"
        }, {
          "avail": "R",
          "code": "MT952ZA/A",
          "name": "Silver"
        }, {
          "avail": "R",
          "code": "MT962ZA/A",
          "name": "Gold"
        }],
        "storecode": "ABD"
      }, {
        "storex": "114.155245",
        "storename": "Central",
        "storeadd": "Shop No.2, G/F, Unicorn Trade Centre, No. 127-131 Des Voeux Road (next to Hang Seng Bank Bldg)",
        "storey": "22.285043",
        "skulist": [{
          "avail": "R",
          "code": "MT942ZA/A",
          "name": "Space Gray"
        }, {
          "avail": "R",
          "code": "MT952ZA/A",
          "name": "Silver"
        }, {
          "avail": "R",
          "code": "MT962ZA/A",
          "name": "Gold"
        }],
        "storecode": "CTL"
      }
    ],


export default  new Vuex.Store({
  store,
  actions,
  mutations
})