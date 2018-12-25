import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import RouterView from "router/index"

import Header from "comp/header";
import Layout from "comp/layout";


import "common/css/bootstrap.min.css";
import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";
import "common/fonts/iconfont.css"

class App extends React.Component {
    render() {
        return <div className="wraper">
            <Header></Header>
            <Router>
                <div>
                    <Layout>
                        <RouterView/>
                    </Layout>
                </div>
            </Router>
        </div>
    }
}
export default App;
