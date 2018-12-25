import React from "react"
import axios from "axios"
import Rightlist from "view/index/rightlist.jsx"

class List extends React.Component{
  constructor(props){
    super(props)
    this.state={
      typelist:[],
      Id:0
    }
  }
  componentDidMount(){
    axios.get('/typelist').then((res)=>{
       this.setState({
        typelist:res.data
       })
    })
  }
  changeTab(index){
    this.setState({
      Id:index
    })
  }
  render(){
    const {typelist,Id}=this.state
    return <div className='list'>
        <div className="left-list">
          <ul>
              {
                typelist.map((item,index)=>{
                   return <li onClick={()=>{
                      this.changeTab(index)
                   }}>
                     {item.title}
                   </li>
                })
              }
          </ul>
        </div>
        {<Rightlist id={Id}/>}
    </div>
  }
}
export default List;