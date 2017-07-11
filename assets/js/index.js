import React from "react";
import ReactDOM from "react-dom";


class Element extends React.Component{
  constructor(){
    super();
    this.state = {menu: []};
  }

  requestMenu(){
    let request = new XMLHttpRequest();
    let url = url = "http://127.0.0.1:8000/api";
    request.open("GET", url);
    request.send();
    request.onload = () => {
      let menuText = request.response;
      let menu = JSON.parse(menuText);
      this.setState({menu});
    };
  }


  componentDidMount(){
    this.timer = setInterval(
      () => this.requestMenu(), 
      5000
      )
  
}

componentWillUnmount(){
  clearInterval(this.timer);
}
  
	render(){


    let menuList = this.state.menu.map((data) =>{
            return <li>{data.name} : {data.description} cost GNF: {data.price}</li>
          }
        );
    
    return(
          <div>
           <ul>
               {menuList}
           </ul>
          </div>  
			);
  }
	}

const element = document.getElementById("main");

ReactDOM.render(<Element />, element);

