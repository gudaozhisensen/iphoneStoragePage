
// import HelloWorld from '@/components/HelloWorld'
import App from '../App'

// xs64GB
const hongKong_xs64 = r => require.ensure([], () => r(require('../page/XS/64GB/hongKong')),'hongKong_xs64')
const kowLoon_xs64 = r => require.ensure([], () => r(require('../page/XS/64GB/kowLoon')),'kowLoon_xs64')
const newTerritories_xs64 = r => require.ensure([], () => r(require('../page/XS/64GB/newTerritories')),'newTerritories_xs64')

//xs256GB
const hongKong_xs256 = r => require.ensure([], () => r(require('../page/XS/256GB/hongKong')),'hongKong_xs256')
const kowLoon_xs256 = r => require.ensure([], () => r(require('../page/XS/256GB/kowLoon')),'kowLoon_xs256')
const newTerritories_xs256 = r => require.ensure([], () => r(require('../page/XS/256GB/newTerritories')),'newTerritories_xs256')

//xs512GB
const hongKong_xs512 = r => require.ensure([], () => r(require('../page/XS/512GB/hongKong')),'hongKong_xs512')
const kowLoon_xs512 = r => require.ensure([], () => r(require('../page/XS/512GB/kowLoon')),'kowLoon_xs512')
const newTerritories_xs512 = r => require.ensure([], () => r(require('../page/XS/512GB/newTerritories')),'newTerritories_xs512')

//max64GB
const hongKong_max64 = r => require.ensure([], () => r(require('../page/XSMAX/64GB/hongKong')),'hongKong_max64')
const kowLoon_max64 = r => require.ensure([], () => r(require('../page/XSMAX/64GB/kowLoon')),'kowLoon_max64')
const newTerritories_max64 = r => require.ensure([], () => r(require('../page/XSMAX/64GB/newTerritories')),'newTerritories_max64')

// max256GB
const hongKong_max256 = r => require.ensure([], () => r(require('../page/XSMAX/256GB/hongKong')),'hongKong_max256')
const kowLoon_max256 = r => require.ensure([], () => r(require('../page/XSMAX/256GB/kowLoon')),'kowLoon_max256')
const newTerritories_max256 = r => require.ensure([], () => r(require('../page/XSMAX/256GB/newTerritories')),'newTerritories_max256')

//max512GB
const hongKong_max512 = r => require.ensure([], () => r(require('../page/XSMAX/64GB/hongKong')),'hongKong_max512')
const kowLoon_max512 = r => require.ensure([], () => r(require('../page/XSMAX/512GB/kowLoon')),'kowLoon_max512')
const newTerritories_max512 = r => require.ensure([], () => r(require('../page/XSMAX/512GB/newTerritories')),'newTerritories_max512')


export default [{
  path: '/XS/64GB',
  component: App,
  children: [{
      path: '/XS/64GB',
      component: r => require.ensure([], () => r(require('../page/XS/64GB/detailPage')), '64GB'),
      children: [{
        path: 'hongKong',
        component: hongKong_xs64
      },{
        path: 'kowLoon',
        component: kowLoon_xs64,
      },{
        path: 'newTerritories',
        component: newTerritories_xs64
      }]
  }, {
      path: '/XS/256GB',
      component: r => require.ensure([], () => r(require('../page/XS/256GB/detailPage')), '256GB'),
      children: [{
        path: 'hongKong',
        component: hongKong_xs256
      },{
        path: 'kowLoon',
        component: kowLoon_xs256,
      },{
        path: 'newTerritories',
        component: newTerritories_xs256
      }]
  }, {
      path: '/XS/512GB',
      component: r => require.ensure([], () => r(require('../page/XS/512GB/detailPage')), '512GB'),
      children: [{
        path: 'hongKong',
        component: hongKong_xs512
      },{
        path: 'kowLoon',
        component: kowLoon_xs512,
      },{
        path: 'newTerritories',
        component: newTerritories_xs512
      }]
  }]
},
{
  path: '/XSMAX/64GB',
  component: App,
  children: [{
      path: '/XSMAX/64GB',
      component: r => require.ensure([], () => r(require('../page/XSMAX/64GB/detailPage')), '64GB'),
      children: [{
        path: 'hongKong',
        component: hongKong_max64
      },{
        path: 'kowLoon',
        component: kowLoon_max64
        
      },{
        path: 'newTerritories',
        component: newTerritories_max64
      }]
  }, {
      path: '/XSMAX/256GB',
      component: r => require.ensure([], () => r(require('../page/XSMAX/256GB/detailPage')), '256GB'),
      children: [{
        path: 'hongKong',
        component: hongKong_max256
      },{
        path: 'kowLoon',
        component: kowLoon_max256,
      },{
        path: 'newTerritories',
        component: newTerritories_max256
      }]
  }, {
      path: '/XSMAX/512GB',
      component: r => require.ensure([], () => r(require('../page/XSMAX/512GB/detailPage')), '512GB'),
      children: [{
        path: 'hongKong',
        component: hongKong_max512
      },{
        path: 'kowLoon',
        component: kowLoon_max512,
      },{
        path: 'newTerritories',
        component: newTerritories_max512
      }]
  }]
},
{
  path: '',//其余的地址全部redirect去主页
  redirect: function(to){//to是个路由信息对象，可查看路径信息
    console.log(to.fullPath,to.query)
    // console.log(to)
    return '/XS/64GB'
  }
}
]