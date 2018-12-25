import React from "react";
import {connect} from "react-redux"
import {update,plus,minus,total,sum,checked} from "store/actions/index"

class Shopcar extends React.Component {
    componentDidMount(){
      this.getShopcarlist()
    }
    getShopcarlist(){
        const {update,shopcarlist,computed}=this.props
        computed(shopcarlist)
        update(shopcarlist)
    }
    render() {
        const {shopcarlist,plus,minus,total,sum,checked,del}=this.props
        return <div>
                <div className="shop-list">
                {
                    shopcarlist.length&&shopcarlist.map((item,index)=>{
                        return <dl key={index}>
                            <dt>
                                <input type='checkbox' checked={item.ischecked} onChange={()=>{
                                    checked(index,shopcarlist)
                                }}/>
                                <img src={item.img} alt=''/>
                            </dt>
                            <dd>
                                <p>{item.title}</p>
                                <p>{item.txt}</p>
                                <p className="money"> ￥ {item.price}</p>
                                <div className="cat">
                                    <button onClick={()=>{
                                        minus(index,shopcarlist)
                                    }}>-</button>
                                    <span>{item.count}</span>
                                    <button onClick={()=>{
                                        plus(index,shopcarlist)
                                    }}>+</button>
                                </div>
                                <span className="del" onClick={()=>{
                                  del(index,shopcarlist)
                                }}>X</span>
                            </dd>
                        </dl>
                    })
                }
            </div>
            <div className='shop-price'>
                <p>共计:{total}</p>
                <p>总价:{sum}</p>
            </div>
        </div>
    }
}
const mapStateToProps=(state)=>{
    return state.ShopcarReducer
}
const mapDispatchToProps=(dispatch)=>{
     return{
        computed(shopcarlist){
            let tot=0;
            let sums=0;
            shopcarlist.forEach((item,index)=>{
                if(item.ischecked){
                tot+=item.count;
                sums+=item.count*item.price
                }
            })
            dispatch(total(tot))
            dispatch(sum(sums))
        },
        update(payload){
            dispatch(update(payload))
        },
        plus(index,shopcarlist){
            shopcarlist[index].count++;
            let tot=0;
            let sums=0;
            shopcarlist.forEach((item,index)=>{
                if(item.ischecked){
                tot+=item.count;
                sums+=item.count*item.price
                }
            })
            dispatch(total(tot))
            dispatch(sum(sums))
            dispatch(plus(shopcarlist))
        },
        minus(index,shopcarlist){
            if(shopcarlist[index].count<1) return;    
             shopcarlist[index].count--;
             let tot=0;
             let sums=0;
             shopcarlist.forEach((item,index)=>{
                if(item.ischecked){
                    tot+=item.count;
                    sums+=item.count*item.price            
                }     
             })
             dispatch(total(tot))
             dispatch(sum(sums))
             dispatch(minus(shopcarlist))
        },
        checked(index,shopcarlist){
            shopcarlist[index].ischecked=!shopcarlist[index].ischecked
            dispatch(checked(shopcarlist))
        },
        del(index,shopcarlist){
            shopcarlist.splice(index,1)
            console.log(shopcarlist)
            dispatch({
                type:"DEL",
                payload:shopcarlist
            })
        }
     }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shopcar)
