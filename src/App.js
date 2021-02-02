import React, { Component } from 'react';
import './App.css';
import Search from './page/search';
import _ from 'lodash';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            products:[

            ],
            keyword:''
        };
    }
    componentWillMount(){
        if (localStorage && localStorage.getItem('products')) {
            var products = JSON.parse(localStorage.getItem('products'));
            this.setState({
                products:products
            });
        }
    }
    CreateProdct=()=>{
                var products =[
                     {
                          "handle": "ega-botconn",
                          "id": 1,
                          "title": "egaBotConn",
                          "vendor": "EGANY",
                          "tags": "platform__cross-platform, type__apps, doc__ega-botconn, demo__https://egany.com",
                          "image": {
                            "id": 11,
                            "src": "https://picsum.photos/id/14/600"
                          },
                          "variants": [
                            {
                              "id": 111,
                              "sku": "egabotconn",
                              "price": "0",
                              "compare_at_price": "0",
                              "inventory_management": null,
                              "inventory_policy": "deny",
                              "inventory_quantity": 1
                            }
                          ]
                        },
                        {
                          "handle": "ega-shop",
                          "id": 2,
                          "title": "egaShop",
                          "vendor": "EGANY",
                          "tags": "platform__haravan_sapo_cross-platform, type__apps, doc__ega-shop, demo__https://egany.com",
                          "image": {
                            "id": 22,
                            "src": "https://picsum.photos/id/15/600"
                          },
                          "variants": [
                            {
                              "id": 222,
                              "sku": "egashop",
                              "price": "149000",
                              "compare_at_price": "199000",
                              "inventory_management": null,
                              "inventory_policy": "deny",
                              "inventory_quantity": 1
                            }
                          ]
                        },
                        {
                          "handle": "ega-countdown",
                          "id": 3,
                          "title": "egaCountdown",
                          "vendor": "EGANY",
                          "tags": "platform__haravan_cross-platform, type__apps, doc__ega-countdown, demo__https://egany.com",
                          "image": {
                            "id": 33,
                            "src": "https://picsum.photos/id/16/600"
                          },
                          "variants": [
                            {
                              "id": 333,
                              "sku": "egabotconn",
                              "price": "99000",
                              "compare_at_price": "149000",
                              "inventory_management": "manual",
                              "inventory_policy": "allow",
                              "inventory_quantity": 0
                            }
                          ]
                        },
                        {
                          "handle": "ega-salebox",
                          "id": 4,
                          "title": "egaSaleBox",
                          "vendor": "EGANY",
                          "tags": "platform__haravan_cross-platform, type__apps, doc__ega-salebox, demo__https://egany.com",
                          "image": {
                            "id": 44,
                            "src": "https://picsum.photos/id/14/600"
                          },
                          "variants": [
                            {
                              "id": 444,
                              "sku": "egasalebox",
                              "price": "99000",
                              "compare_at_price": "149000",
                              "inventory_management": "manual",
                              "inventory_policy": "allow",
                              "inventory_quantity": -1
                            }
                          ]
                        },
                        {
                          "handle": "ega-cro",
                          "id": 5,
                          "title": "egaCRO",
                          "vendor": "EGANY",
                          "tags": "platform__haravan_cross-platform_sapo, type__apps, doc__ega-salebox, demo__https://egany.com",
                          "image": {
                            "id": 55,
                            "src": "https://picsum.photos/id/14/600"
                          },
                          "variants": [
                            {
                              "id": 555,
                              "sku": "egasalebox",
                              "price": "99000",
                              "compare_at_price": "149000",
                              "inventory_management": null,
                              "inventory_policy": "deny",
                              "inventory_quantity": 10
                            }
                          ]
                        }
                ];
                this.setState({
                    products:products
                });
                localStorage.setItem('products',JSON.stringify(products));
    }
    onSearch = (keyword)=>{
        this.setState({
            keyword:keyword.toLowerCase()
        });
    }
    render(){
       var {products,keyword} = this.state;
       var Elements = products.map((product,index)=>{
            return      <div className="col-4" key={index}>
                                <img src={product.image.src} className="img-responsive" alt="Image"/>
                                <h3>{product.title}</h3>
                                <p>{product.vendor}</p> 
                        </div>
       });

        if (keyword) {
            products = _.filter(products,(product)=>{
                return product.title.toLowerCase().indexOf(keyword) !== -1;
            });
        }
   

          return (
            <div className="container">
                <div className="row">
                <div className="col-1-12|auto">
                      <button type="button" className="btn btn-outline-primary btn-lg|sm" onClick ={this.CreateProdct}>Tạo dữ liệu mẫu</button>
                </div>
                    <Search onSearch={this.onSearch} />
                    <div className="col-1-12|auto">
                          <div className="row">
                                {Elements}
                          </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
