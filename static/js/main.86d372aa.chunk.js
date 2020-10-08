(this["webpackJsonpwebcomp-poc-js"]=this["webpackJsonpwebcomp-poc-js"]||[]).push([[0],{34:function(e,t,a){},41:function(e,t,a){e.exports=a(69)},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),c=(a(46),a(8)),l=a(10),s=a(36),u=a(12),d={location:{latitude:null,longitude:null,name:""},restaurantList:[],cuisines:[]},p=function(e){return{type:"SET_LOADER",payload:{isLoading:e.isLoading,loadingMessage:e.loadingMessage}}},g={isLoading:!1,loadingMessage:""},m=Object(l.c)({restaurantsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}},appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADER":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}}}),f=[s.a],E=l.d.apply(void 0,[l.a.apply(void 0,f)].concat([])),h=Object(l.e)(m,{},E),v=a(20),y=a(2),b=a(16),O=a(17),_=a(18),j=a(9),w=a(40),L=a(39),R=a(37),A=a.n(R),x=Object({NODE_ENV:"production",PUBLIC_URL:"/tomato_web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ZOMATO_API_KEY:"3a7bfe94c481177f55e8d7de5fbcf78d",REACT_APP_BASE_URL:"https://developers.zomato.com/api/v2.1"}),T=x.REACT_APP_ZOMATO_API_KEY,C=x.REACT_APP_BASE_URL,I=function(e){Object(w.a)(a,e);var t=Object(L.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"searchRestaurants",value:function(e){var t=e.id,n=e.start,r=void 0===n?0:n,o=e.lat,i=e.lon;return Object(_.a)(Object(j.a)(a.prototype),"get",this).call(this,"/search",{params:{entity_type:"city",entity_id:t,start:r,lat:o,lon:i}})}},{key:"getRestaurantByLatLong",value:function(e){var t=e.lat,n=e.lon;return Object(_.a)(Object(j.a)(a.prototype),"get",this).call(this,"/geocode",{params:{lat:t,lon:n}})}},{key:"getRestaurantDetailsById",value:function(e){return Object(_.a)(Object(j.a)(a.prototype),"get",this).call(this,"/restaurant",{params:{res_id:e}})}}]),a}(function(){function e(){Object(b.a)(this,e),this.axiosInstance=A.a.create({baseURL:C,headers:{"user-key":T}})}return Object(O.a)(e,[{key:"get",value:function(e,t){return this.axiosInstance.get(e,t)}},{key:"post",value:function(e,t){return this.axiosInstance.post(e,t)}}]),e}()),P=function(e){var t=Object(c.c)(),a=new I;return r.a.useEffect((function(){"geolocation"in navigator?(t(p({isLoading:!0,loadingMessage:"Fetching Restaurants near you"})),navigator.geolocation.getCurrentPosition((function(e){var n=e.coords;return a.getRestaurantByLatLong({lat:n.latitude,lon:n.longitude}).then((function(e){var a,r,o,i=e.data;t((a={latitude:n.latitude,longitude:n.longitude,name:i.location.title},r=i.nearby_restaurants,o=i.popularity.top_cuisines,{type:"SET_LOCATION",payload:{location:a,restaurantList:r.map((function(e){return e.restaurant})),cuisines:o}})),t(p({isLoading:!1}))}))}),(function(){return alert("Please allow location access")}))):console.log("Not Available")}),[]),r.a.createElement("div",{style:{background:"url(https://b.zmtcdn.com/images/developers/apihome_bg.jpg?output-format=webp)center top",backgroundSize:"cover",minHeight:"250px",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement("h1",null,"Tomato"),r.a.createElement("p",null,"A cheap clone of zomato"),r.a.createElement("input",{placeholder:"enter location here"}))},S=(a(34),function(e){return r.a.createElement("div",null,r.a.createElement("p",{style:{padding:"5px"}},"Popular Cuisines in your area"),r.a.createElement("div",{style:{padding:"5px",display:"flex",flexWrap:"wrap"}},e.cuisines.map((function(e){return r.a.createElement(k,{name:e})}))))}),k=function(e){var t=e.name;return r.a.createElement("div",{className:"fancyCard"},r.a.createElement("p",null,t))},D=function(e){return r.a.createElement("div",null,r.a.createElement("p",{style:{padding:"5px"}},"Popular Restaurants in your area"),r.a.createElement("div",{style:{padding:"5px",display:"flex",flexWrap:"wrap"}},e.restaurants.map((function(e){return r.a.createElement(M,e)}))))},M=function(e){var t=e.name,a=e.user_rating,n=e.cuisines,o=e.average_cost_for_two,i=e.currency,c=e.id,l=Object(y.f)();return r.a.createElement("div",{className:"fancyCard pointer",onClick:function(){return l.push("/about/".concat(c))}},r.a.createElement("p",null,t),r.a.createElement("p",null,n),r.a.createElement("p",null,"average cost for 2 : ",i," ",o," ",r.a.createElement("span",{style:{float:"right"}},"\u2b50",a.aggregate_rating)))};var B=Object(c.b)((function(e){return{cuisines:e.restaurantsReducer.cuisines,restaurants:e.restaurantsReducer.restaurantList}}))((function(e){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(S,{cuisines:e.cuisines}),r.a.createElement(D,{restaurants:e.restaurants}))})),N=function(e){return r.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.5)",position:"absolute",zIndex:100,top:"0px"}},r.a.createElement("p",{style:{color:"white",fontSize:25,fontWeight:"bold"}},"Loading..."),e.msg&&r.a.createElement("p",{style:{color:"white"}},e.msg))},W=a(38);function z(e){var t=e.match.params,a=Object(c.c)(),n=r.a.useState({}),o=Object(W.a)(n,2),i=o[0],l=o[1],s=new I;return r.a.useEffect((function(){a(p({isLoading:!0,loadingMessage:"Fetching Restaurant details for you"})),s.getRestaurantDetailsById(t.resId).then((function(e){var t=e.data;l(t),a(p({isLoading:!1}))}))}),[t.resId]),r.a.createElement("div",null,r.a.createElement("h2",null,"About"),r.a.createElement("code",null,JSON.stringify(i,null,2)))}var K=Object(c.b)((function(e){return{loading:e.appReducer.isLoading,loadingMessage:e.appReducer.loadingMessage}}))((function(e){return r.a.createElement(v.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/about/:resId",component:z}),r.a.createElement(y.a,{path:"/"},r.a.createElement(B,null))),e.loading&&r.a.createElement(N,{msg:e.loadingMessage}))}));var U=function(){return r.a.createElement(c.a,{store:h},r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.86d372aa.chunk.js.map