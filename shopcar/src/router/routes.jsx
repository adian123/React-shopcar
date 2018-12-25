import Home from 'view/home/index'
import Index from 'view/index/index'
import Shop from "view/shopcar"
import Hot from "view/home/hot/index"
import Advance from "view/home/advance/index"
const routes=[{
  path:"/index",
  name:"首页",
  component:Index
},{
  path:"/home",
  name:"主页",
  component:Home,
  children:[{
    path:"/home/hot",
    name:"热门",
    component:Hot
  },{
    path:"/home/advance",
    name:"预售",
    component:Advance
  }]
},{
  path:"/shop",
  component:Shop
}]
export default routes;