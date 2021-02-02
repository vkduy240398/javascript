import React, { Component } from 'react';
class search extends Component{
    constructor(props){
        super(props);
        this.state ={
          keyword:''
        };
    }
    onChange =(event)=>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name]:value
      });
      this.props.onSearch(this.state.keyword);
    }
  render(){
    var {keyword} = this.state;
      return (
                    <div className="col-1-12|auto">
                          <div className="input-group">
                              <input type="search" className="form-control" value={keyword} name="keyword" placeholder="Nhập tên cần tìm..."onChange ={this.onChange} />
                          </div>
                    </div>

        );
      }
  }


export default search;
