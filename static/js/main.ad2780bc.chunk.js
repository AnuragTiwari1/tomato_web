(this["webpackJsonpwebcomp-poc-js"]=this["webpackJsonpwebcomp-poc-js"]||[]).push([[0],{39:function(e,t,n){e.exports=n(68)},44:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),i=n.n(r),c=(n(44),n(9)),l=n(10),u=n(34),s=n(12),d={location:{latitude:null,longitude:null,name:""},restaurantList:[],cuisines:[]},p=function(e){return{type:"SET_LOADER",payload:{isLoading:e.isLoading,loadingMessage:e.loadingMessage}}},g={isLoading:!1,loadingMessage:""},m=Object(l.c)({restaurantsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION":return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}},appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADER":return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}}),f=[u.a],h=l.d.apply(void 0,[l.a.apply(void 0,f)].concat([])),E=Object(l.e)(m,{},h),v=n(36),b=n(2),y=n(16),O=n(17),_=n(18),j=n(8),A=n(38),L=n(37),w=n(35),R=n.n(w),T=Object({NODE_ENV:"production",PUBLIC_URL:"/tomato_web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_ZOMATO_API_KEY:"3a7bfe94c481177f55e8d7de5fbcf78d",REACT_APP_BASE_URL:"https://developers.zomato.com/api/v2.1"}),C=T.REACT_APP_ZOMATO_API_KEY,P=T.REACT_APP_BASE_URL,S=function(e){Object(A.a)(n,e);var t=Object(L.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"searchRestaurants",value:function(e){var t=e.id,a=e.start,o=void 0===a?0:a,r=e.lat,i=e.lon;return Object(_.a)(Object(j.a)(n.prototype),"get",this).call(this,"/search",{params:{entity_type:"city",entity_id:t,start:o,lat:r,lon:i}})}},{key:"getRestaurantByLatLong",value:function(e){var t=e.lat,a=e.lon;return Object(_.a)(Object(j.a)(n.prototype),"get",this).call(this,"/geocode",{params:{lat:t,lon:a}})}},{key:"getRestaurantDetailsById",value:function(e){return Object(_.a)(Object(j.a)(n.prototype),"get",this).call(this,"/restaurant",{params:{res_id:e}})}}]),n}(function(){function e(){Object(y.a)(this,e),this.axiosInstance=R.a.create({baseURL:P,headers:{"user-key":C}})}return Object(O.a)(e,[{key:"get",value:function(e,t){return this.axiosInstance.get(e,t)}},{key:"post",value:function(e,t){return this.axiosInstance.post(e,t)}}]),e}()),k=function(e){var t=Object(c.c)(),n=new S;return o.a.useEffect((function(){"geolocation"in navigator?(t(p({isLoading:!0,loadingMessage:"Fetching Restaurants near you"})),navigator.geolocation.getCurrentPosition((function(e){var a=e.coords;return n.getRestaurantByLatLong({lat:a.latitude,lon:a.longitude}).then((function(e){var n,o,r,i=e.data;t((n={latitude:a.latitude,longitude:a.longitude,name:i.location.title},o=i.nearby_restaurants,r=i.popularity.top_cuisines,{type:"SET_LOCATION",payload:{location:n,restaurantList:o.map((function(e){return e.restaurant})),cuisines:r}})),t(p({isLoading:!1}))}))}),(function(){return alert("Please allow location access")}))):console.log("Not Available")}),[]),o.a.createElement("div",{style:{background:"url(https://b.zmtcdn.com/images/developers/apihome_bg.jpg?output-format=webp)center top",backgroundSize:"cover",minHeight:"250px",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},o.a.createElement("h1",null,"Tomato"),o.a.createElement("p",null,"A cheap clone of zomato"),o.a.createElement("input",{placeholder:"enter location here"}))},I=(n(66),function(e){return o.a.createElement("div",null,o.a.createElement("p",null,"Popular Cuisines near you"),e.cuisines.map((function(e){return o.a.createElement(x,{name:e})})))}),x=function(e){var t=e.name;return o.a.createElement("div",{className:"cuisineCard"},o.a.createElement("p",null,t))};var D=Object(c.b)((function(e){return{cuisines:e.restaurantsReducer.cuisines}}))((function(e){return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(I,{cuisines:e.cuisines}))})),M=function(e){return o.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.5)"}},o.a.createElement("p",{style:{color:"white",fontSize:25,fontWeight:"bold"}},"Loading..."),e.msg&&o.a.createElement("p",{style:{color:"white"}},e.msg))};var B=Object(c.b)((function(e){return{loading:e.appReducer.isLoading,loadingMessage:e.appReducer.loadingMessage}}))((function(e){return o.a.createElement(v.a,null,e.loading&&o.a.createElement(M,{msg:e.loadingMessage}),o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/about"},o.a.createElement(N,null)),o.a.createElement(b.a,{path:"/"},o.a.createElement(D,null))))}));function N(){return o.a.createElement("h2",null,"About")}var W=function(){return o.a.createElement(c.a,{store:E},o.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.ad2780bc.chunk.js.map