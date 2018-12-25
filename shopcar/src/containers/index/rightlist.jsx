import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
const mapStateToProps=(state)=>{
     return state.ShopcarReducer
}
const mapDispatchToProps=(dispatch)=>{
    return{
      addlist(product,shopcarlist){
        let temp=shopcarlist.filter((item,index)=>{
               return product.id==item.id;

        })
        if(temp.length){
           shopcarlist.forEach((item,index)=>{
             if(item.id==product.id){
               item.count++;
               item.ischecked=true
             }
           })        
        }else{
          shopcarlist.push({...product,count:1,ischecked:true})
        }
        dispatch({type:"UPDATE",payload:shopcarlist})
      }
    }
}
@connect(mapStateToProps,mapDispatchToProps)

class List extends React.Component{
  constructor(props){
    super(props)
    this.state={
      productlist:[],
      typeId:0
    }
    this.getProdcutlist=this.getProdcutlist.bind(this)
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({
      typeId:nextProps.id
    },()=>{
      this.getProdcutlist()
    })
  }
  componentDidMount(){
    this.getProdcutlist()
  }
  getProdcutlist(){
    const {typeId}=this.state
    //console.log(typeId)
    axios.get('/productlist',{
      params:{
        id:typeId
      }
    }).then((res)=>{
       this.setState({
        productlist:res.data.data.list
       })
    })
  }
  render(){
    const {total,addlist,shopcarlist}=this.props
    const {productlist}=this.state
    return <div className='right-list'>
        {
           productlist.map((item,index)=>{
              return <dl key={index}>
                <dt>
                    <img src={item.img} alt=''/>
                </dt>
                <dd>
                    <p>{item.content}</p>
                    <p>{item.txt}</p>
                    <p className="money"> ￥ {item.price}</p>
                    <div className="join">
                       <button onClick={()=>{
                         addlist(item,shopcarlist)
                       }}>加入购物车</button>
                    </div>
                </dd>
              </dl>
            })
        }
        <div className='look'>
          <Link to={{
            pathname:'/shop'
          }}>查看购物车 :{ total}</Link>
        </div>
    </div>
  }
}
export default List;