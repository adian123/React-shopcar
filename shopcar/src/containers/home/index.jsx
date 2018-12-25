import React from "react"
import RouterView from "router/index"


class Home extends React.Component{
  render(){
    const { routes}=this.props
    return <div className="home">
        <RouterView routes={routes}/>
    </div>
  }
}
export default Home;