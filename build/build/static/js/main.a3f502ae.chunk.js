(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{140:function(e,r,a){e.exports=a(248)},151:function(e,r,a){},157:function(e,r){},162:function(e,r){},164:function(e,r){},195:function(e,r){},197:function(e,r){},198:function(e,r){},203:function(e,r){},205:function(e,r){},225:function(e,r){},241:function(e,r){},244:function(e,r){},248:function(e,r,a){"use strict";a.r(r);var t=a(0),s=a.n(t),o=a(132),d=a.n(o),n=a(45),l=a(28),c=a(83),u=a(3),i=a(258);a(151);const g=Object(t.lazy)(()=>Promise.all([a.e(2),a.e(1),a.e(5),a.e(21)]).then(a.bind(null,439))),m=Object(t.lazy)(()=>Promise.all([a.e(2),a.e(1),a.e(5),a.e(19)]).then(a.bind(null,418))),p=Object(t.lazy)(()=>Promise.all([a.e(0),a.e(2),a.e(3),a.e(6),a.e(12)]).then(a.bind(null,426))),C=Object(t.lazy)(()=>a.e(22).then(a.bind(null,420))),y=Object(t.lazy)(()=>Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(17)]).then(a.bind(null,427))),f=Object(t.lazy)(()=>Promise.all([a.e(0),a.e(2),a.e(1),a.e(4),a.e(13)]).then(a.bind(null,429))),h=Object(t.lazy)(()=>Promise.all([a.e(0),a.e(1),a.e(3),a.e(11),a.e(26)]).then(a.bind(null,433))),b=Object(t.lazy)(()=>Promise.all([a.e(0),a.e(2),a.e(6),a.e(15),a.e(27)]).then(a.bind(null,434))),O=Object(t.lazy)(()=>Promise.all([a.e(0),a.e(1),a.e(18),a.e(24)]).then(a.bind(null,424))),j=Object(t.lazy)(()=>Promise.all([a.e(0),a.e(4),a.e(14),a.e(25)]).then(a.bind(null,435))),U=Object(t.lazy)(()=>Promise.all([a.e(16),a.e(23)]).then(a.bind(null,440))),v=Object(t.lazy)(()=>Promise.all([a.e(10),a.e(20)]).then(a.bind(null,425)));var F=()=>{const{user:e}=Object(n.c)(e=>e.auth),r=Boolean(localStorage.getItem("isAuthenticated"));Boolean(localStorage.getItem("colorScheme"))||localStorage.setItem("colorScheme","light");const[a,o]=Object(t.useState)("light"!==localStorage.getItem("colorScheme")),d={globalStyles:e=>({body:{background:"dark"===e.colorScheme?"#0e1012":"#e9e9ec"}}),colorScheme:a?"dark":"light",fontFamily:"Golos Text, sans-serif",colors:{orange:["#FF6347","#DC143C","#B22222","#8B0000","#FF0000","#FFA500","#FF8C00","#FF7F50","#FF4500","#FF4500"],dark:["#d5d7e0","#acaebf","#8c8fa3","#666980","#1f2124","#1f2124","#292c2f","#16181a","#0e1012","#16181a"]},primaryColor:"orange"};return s.a.createElement(l.a,{theme:d,withGlobalStyles:!0,withNormalizeCSS:!0},s.a.createElement(i.a,null,s.a.createElement(c.a,null,s.a.createElement(t.Suspense,{fallback:s.a.createElement("div",null)},s.a.createElement(p,{onToggleColorScheme:()=>{"light"===localStorage.getItem("colorScheme")?(localStorage.setItem("colorScheme","dark"),o(!0)):(localStorage.setItem("colorScheme","light"),o(!1))}}),s.a.createElement(u.e,null,s.a.createElement(u.c,{index:!0,element:s.a.createElement(y,null)}),s.a.createElement(u.c,{path:"/cart",element:s.a.createElement(f,null)}),s.a.createElement(u.c,{path:"/profile/:id",element:r?s.a.createElement(b,null):s.a.createElement(u.a,{replace:!0,to:"/auth/login"})},s.a.createElement(u.c,{path:"info",element:s.a.createElement(O,null)}),s.a.createElement(u.c,{path:"orders",element:s.a.createElement(j,null)}),s.a.createElement(u.c,{path:"addresses",element:s.a.createElement(U,null)})),s.a.createElement(u.c,{path:"/checkout",element:r?s.a.createElement(h,null):s.a.createElement(u.a,{replace:!0,to:"/auth/login"})}),s.a.createElement(u.c,{path:"/auth/login",element:r?s.a.createElement(u.a,{replace:!0,to:"/"}):s.a.createElement(m,null)}),s.a.createElement(u.c,{path:"/auth/register",element:r?s.a.createElement(u.a,{replace:!0,to:"/"}):s.a.createElement(g,null)}),s.a.createElement(u.c,{path:"/order-placed",element:s.a.createElement(v,null)}),s.a.createElement(u.c,{path:"*",element:s.a.createElement(u.a,{replace:!0,to:"/"})})),s.a.createElement(C,null)))))},E=a(7),S=a(85),T=a(88),A=a(84),I=a(89);var z=Object(E.a)({reducer:{auth:S.f,pizza:T.b,cart:A.h,order:I.c}});d.a.createRoot(document.getElementById("root")).render(s.a.createElement(n.a,{store:z},s.a.createElement(F,null)))},84:function(e,r,a){"use strict";a.d(r,"i",(function(){return o})),a.d(r,"j",(function(){return d})),a.d(r,"a",(function(){return n})),a.d(r,"l",(function(){return l})),a.d(r,"k",(function(){return c})),a.d(r,"b",(function(){return u})),a.d(r,"c",(function(){return g})),a.d(r,"g",(function(){return m})),a.d(r,"f",(function(){return p})),a.d(r,"d",(function(){return C})),a.d(r,"e",(function(){return y}));var t=a(7),s=a(9);const o=Object(t.b)("cart/getCartItems",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:e}=await s.a.get("/cart/getCartItems");return e}catch(t){return a(t.response.data)}}),d=Object(t.b)("cart/getCartItemsNumber",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:e}=await s.a.get("/cart/getCartItemsNumber");return e}catch(t){return a(t.response.data)}}),n=Object(t.b)("cart/addToCart",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.post("/cart/addToCart",e);return r}catch(t){return a(t.response.data)}}),l=Object(t.b)("cart/updateCart",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.patch("/cart/updateCart",e);return r}catch(t){return a(t.response.data)}}),c=Object(t.b)("cart/removeFromCart",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.post("/cart/removeFromCart",e);return r}catch(t){return a(t.response.data)}}),u=Object(t.b)("cart/applyCoupon",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.post("/cart/applyCoupon",e);return r}catch(t){return a(t.response.data)}}),i=Object(t.c)({name:"cart",initialState:{cart:{},numberOfCartItems:0,isGettingCart:!1,isGettingCartItemsNumber:!1,updateCart:{loading:!1,error:!1,success:!1,message:null},addToCart:{loading:!1,error:!1,success:!1,message:null},removeFromCart:{loading:!1,error:!1,success:!1,message:null},applyCoupon:{loading:!1,error:!1,success:!1,message:null}},reducers:{clearAddToCart:e=>{e.addToCart.loading=!1,e.addToCart.error=!1,e.addToCart.success=!1,e.addToCart.message=null},clearUpdateCart:e=>{e.updateCart.loading=!1,e.updateCart.error=!1,e.updateCart.success=!1,e.updateCart.message=null},clearRemoveFromCart:e=>{e.removeFromCart.loading=!1,e.removeFromCart.error=!1,e.removeFromCart.success=!1,e.removeFromCart.message=null},clearApplyCoupon:e=>{e.applyCoupon.loading=!1,e.applyCoupon.error=!1,e.applyCoupon.success=!1,e.applyCoupon.message=null},clearCart:e=>{e.cart={}}},extraReducers:e=>{e.addCase(o.pending,e=>{e.isGettingCart=!0}),e.addCase(o.fulfilled,(e,r)=>{e.isGettingCart=!1,e.cart=r.payload}),e.addCase(o.rejected,e=>{e.isGettingCart=!1}),e.addCase(n.pending,e=>{e.addToCart.loading=!0,e.addToCart.error=!1,e.addToCart.success=!1,e.addToCart.message=null}),e.addCase(n.fulfilled,(e,r)=>{var a;e.addToCart.loading=!1,e.addToCart.error=!1,e.addToCart.success=!0,e.addToCart.message=r.payload.message,e.numberOfCartItems=null===r||void 0===r||null===(a=r.payload)||void 0===a?void 0:a.numberOfCartItems}),e.addCase(n.rejected,(e,r)=>{e.addToCart.loading=!1,e.addToCart.error=!0,e.addToCart.success=!1,e.addToCart.message=r.payload.message,e.numberOfCartItems=0}),e.addCase(l.pending,e=>{e.removeFromCart.error=!1,e.removeFromCart.success=!1,e.removeFromCart.message=null,e.applyCoupon.error=!1,e.applyCoupon.success=!1,e.applyCoupon.message=null,e.updateCart.loading=!0,e.updateCart.error=!1,e.updateCart.success=!1,e.updateCart.message=null}),e.addCase(l.fulfilled,(e,r)=>{e.updateCart.loading=!1,e.updateCart.error=!1,e.updateCart.success=!0,e.updateCart.message=r.payload.message,e.cart=r.payload.cart}),e.addCase(l.rejected,(e,r)=>{e.updateCart.loading=!1,e.updateCart.error=!0,e.updateCart.success=!1,e.updateCart.message=r.payload.message}),e.addCase(c.pending,e=>{e.updateCart.error=!1,e.updateCart.success=!1,e.updateCart.message=null,e.applyCoupon.error=!1,e.applyCoupon.success=!1,e.applyCoupon.message=null,e.removeFromCart.loading=!0,e.removeFromCart.error=!1,e.removeFromCart.success=!1,e.removeFromCart.message=null}),e.addCase(c.fulfilled,(e,r)=>{var a,t,s;e.removeFromCart.loading=!1,e.removeFromCart.error=!1,e.removeFromCart.success=!0,e.removeFromCart.message=r.payload.message,e.cart=r.payload.cart,e.numberOfCartItems=(null===r||void 0===r||null===(a=r.payload)||void 0===a||null===(t=a.cart)||void 0===t||null===(s=t.cartItems)||void 0===s?void 0:s.length)||0}),e.addCase(c.rejected,(e,r)=>{e.removeFromCart.loading=!1,e.removeFromCart.error=!0,e.removeFromCart.success=!1,e.removeFromCart.message=r.payload.message}),e.addCase(u.pending,e=>{e.updateCart.error=!1,e.updateCart.success=!1,e.updateCart.message=null,e.removeFromCart.error=!1,e.removeFromCart.success=!1,e.removeFromCart.message=null,e.applyCoupon.loading=!0,e.applyCoupon.error=!1,e.applyCoupon.success=!1,e.applyCoupon.message=null}),e.addCase(u.fulfilled,(e,r)=>{e.applyCoupon.loading=!1,e.applyCoupon.error=!1,e.applyCoupon.success=!0,e.applyCoupon.message=r.payload.message,e.cart=r.payload.cart}),e.addCase(u.rejected,(e,r)=>{e.applyCoupon.loading=!1,e.applyCoupon.error=!0,e.applyCoupon.success=!1,e.applyCoupon.message=r.payload.message}),e.addCase(d.pending,e=>{e.isGettingCartItemsNumber=!0}),e.addCase(d.fulfilled,(e,r)=>{e.isGettingCartItemsNumber=!1,e.numberOfCartItems=r.payload.numberOfCartItems}),e.addCase(d.rejected,(e,r)=>{e.isGettingCartItemsNumber=!1,e.numberOfCartItems=0})}}),{clearAddToCart:g,clearUpdateCart:m,clearRemoveFromCart:p,clearApplyCoupon:C,clearCart:y}=i.actions;r.h=i.reducer},85:function(e,r,a){"use strict";a.d(r,"l",(function(){return o})),a.d(r,"i",(function(){return d})),a.d(r,"k",(function(){return n})),a.d(r,"j",(function(){return l})),a.d(r,"m",(function(){return c})),a.d(r,"h",(function(){return u})),a.d(r,"g",(function(){return i})),a.d(r,"d",(function(){return m})),a.d(r,"b",(function(){return p})),a.d(r,"a",(function(){return C})),a.d(r,"e",(function(){return y})),a.d(r,"c",(function(){return f}));var t=a(7),s=a(9);const o=Object(t.b)("auth/register",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.post("/auth/register",e);return console.log(r),r}catch(t){return a(t.response.data)}}),d=Object(t.b)("auth/login",async(e,r)=>{let{rejectWithValue:a}=r;try{console.time();const{data:r}=await s.a.post("/auth/login",e);return console.log(r),console.timeEnd(),r}catch(t){return a(t.response.data)}}),n=Object(t.b)("auth/refreshToken",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:e}=await s.a.post("/auth/refreshToken");return e}catch(t){return a(t.response.data)}}),l=Object(t.b)("auth/logout",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:e}=await s.a.post("/auth/logout");return e}catch(t){return a(t.response.data)}}),c=Object(t.b)("auth/updateUser",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.post("/user/".concat(e.id,"/update"),e,{headers:{"Content-Type":"multipart/form-data"}});return r}catch(t){return a(t.response.data)}}),u=Object(t.b)("auth/getUserOrders",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.get("/user/".concat(e,"/orders"));return r}catch(t){return a(t.response.data)}}),i=Object(t.b)("auth/getUserAddresses",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.get("/user/".concat(e,"/addresses"));return r}catch(t){return a(t.response.data)}}),g=Object(t.c)({name:"auth",initialState:{token:null,user:{},loggedIn:!1,userOrders:[],userAddresses:[],register:{loading:!1,error:!1,success:!1,message:null},login:{loading:!1,error:!1,success:!1,message:null},logout:{loading:!1,error:!1,success:!1,message:null},updateUser:{loading:!1,error:!1,success:!1,message:null},getUserOrders:{loading:!1,error:!1,success:!1,message:null},getUserAddresses:{loading:!1,error:!1,success:!1,message:null},isRefreshingToken:!1},reducers:{clearRegister:e=>{e.register.loading=!1,e.register.error=!1,e.register.success=!1,e.register.message=null},clearLogin:e=>{e.login.loading=!1,e.login.error=!1,e.login.success=!1,e.login.message=null},clearUserOrders:e=>{e.userOrders=[]},clearUserAddresses:e=>{e.userAddresses=[]},clearUpdateUser:e=>{e.updateUser.loading=!1,e.updateUser.error=!1,e.updateUser.success=!1,e.updateUser.message=null}},extraReducers:e=>{e.addCase(o.pending,e=>{e.register.loading=!0,e.register.error=!1,e.register.success=!1,e.register.message="Signing up..."}).addCase(o.fulfilled,(e,r)=>{e.register.loading=!1,e.register.error=!1,e.register.success=!0,e.user=r.payload.user,e.register.message=r.payload.message}).addCase(o.rejected,(e,r)=>{e.register.loading=!1,e.register.error=!0,e.register.success=!1,e.register.message=r.payload.message}).addCase(d.pending,e=>{e.login.loading=!0,e.login.error=!1,e.login.success=!1,e.login.message="Signing in..."}).addCase(d.fulfilled,(e,r)=>{e.login.loading=!1,e.login.error=!1,e.login.success=!0,e.user=r.payload.user,e.loggedIn=!0,e.login.message=r.payload.message}).addCase(d.rejected,(e,r)=>{e.login.loading=!1,e.login.error=!0,e.login.success=!1,e.login.message=r.payload.message}).addCase(n.pending,e=>{e.isRefreshingToken=!0,e.token=null}).addCase(n.fulfilled,(e,r)=>{var a;e.isRefreshingToken=!1,e.loggedIn=!0,e.token=r.payload.token,e.user=r.payload.user,localStorage.setItem("isAuthenticated",!0),localStorage.setItem("user",JSON.stringify(null===r||void 0===r||null===(a=r.payload)||void 0===a?void 0:a.user))}).addCase(n.rejected,e=>{e.isRefreshingToken=!1,e.token=null,e.user={}}).addCase(c.pending,e=>{e.updateUser.loading=!0,e.updateUser.error=!1,e.updateUser.success=!1,e.updateUser.message="Updating..."}).addCase(c.fulfilled,(e,r)=>{e.updateUser.loading=!1,e.updateUser.error=!1,e.updateUser.success=!0,e.user=r.payload.user,e.updateUser.message=r.payload.message}).addCase(c.rejected,(e,r)=>{e.updateUser.loading=!1,e.updateUser.error=!0,e.updateUser.success=!1,e.updateUser.message=r.payload.message}).addCase(u.pending,e=>{e.getUserOrders.loading=!0,e.getUserOrders.error=!1,e.getUserOrders.success=!1,e.getUserOrders.message="Loading..."}).addCase(u.fulfilled,(e,r)=>{e.getUserOrders.loading=!1,e.getUserOrders.error=!1,e.getUserOrders.success=!0,e.userOrders=r.payload.orders,e.getUserOrders.message=r.payload.message}).addCase(u.rejected,(e,r)=>{e.getUserOrders.loading=!1,e.getUserOrders.error=!0,e.getUserOrders.success=!1,e.getUserOrders.message=r.payload.message}).addCase(l.pending,e=>{e.logout.loading=!0,e.logout.error=!1,e.logout.success=!1,e.logout.message="Logging out..."}).addCase(l.fulfilled,(e,r)=>{e.logout.loading=!1,e.logout.error=!1,e.logout.success=!0,e.user={},e.token=null,e.loggedIn=!1,localStorage.removeItem("user"),localStorage.removeItem("isAuthenticated"),e.logout.message=r.payload.message}).addCase(l.rejected,(e,r)=>{e.logout.loading=!1,e.logout.error=!0,e.logout.success=!1,e.logout.message=r.payload.message}).addCase(i.pending,e=>{e.getUserAddresses.loading=!0,e.getUserAddresses.error=!1,e.getUserAddresses.success=!1,e.getUserAddresses.message="Loading..."}).addCase(i.fulfilled,(e,r)=>{e.getUserAddresses.loading=!1,e.getUserAddresses.error=!1,e.getUserAddresses.success=!0,e.userAddresses=r.payload.addresses,e.getUserAddresses.message=r.payload.message}).addCase(i.rejected,(e,r)=>{e.getUserAddresses.loading=!1,e.getUserAddresses.error=!0,e.getUserAddresses.success=!1,e.getUserAddresses.message=r.payload.message})}}),{clearUserAddresses:m,clearRegister:p,clearLogin:C,clearUserOrders:y,clearUpdateUser:f}=g.actions;r.f=g.reducer},88:function(e,r,a){"use strict";a.d(r,"c",(function(){return d})),a.d(r,"d",(function(){return l})),a.d(r,"a",(function(){return c}));var t=a(7),s=a(9);const o={pizzas:[],filters:{price:[200,4e3],search:""},loading:!1},d=Object(t.b)("pizza/getAll",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.post("/pizza/getAll",e);return r}catch(t){return a(t.response.data)}}),n=Object(t.c)({name:"pizza",initialState:o,reducers:{setFilters:(e,r)=>{e.filters.price=r.payload.price,e.filters.search=r.payload.search},clearFilters:e=>{e.filters=o.filters}},extraReducers:e=>{e.addCase(d.pending,e=>{e.loading=!0,e.pizzas=[]}).addCase(d.fulfilled,(e,r)=>{e.loading=!1,e.pizzas=r.payload}).addCase(d.rejected,e=>{e.loading=!1})}}),{setFilters:l,clearFilters:c}=n.actions;r.b=n.reducer},89:function(e,r,a){"use strict";a.d(r,"a",(function(){return o})),a.d(r,"b",(function(){return n}));var t=a(7),s=a(9);const o=Object(t.b)("order/addOrder",async(e,r)=>{let{rejectWithValue:a}=r;try{const{data:r}=await s.a.post("/orders/add",e);return r}catch(t){return a(t.response.data)}}),d=Object(t.c)({name:"order",initialState:{order:null,addOrder:{loading:!1,error:!1,success:!1,message:null}},reducers:{clearAddOrder:e=>{e.addOrder.loading=!1,e.addOrder.error=!1,e.addOrder.success=!1,e.addOrder.message=null}},extraReducers:e=>{e.addCase(o.pending,e=>{e.addOrder.loading=!0,e.addOrder.error=!1,e.addOrder.success=!1,e.addOrder.message=null}),e.addCase(o.fulfilled,(e,r)=>{e.addOrder.loading=!1,e.addOrder.error=!1,e.addOrder.success=!0,e.addOrder.message=r.payload.message}),e.addCase(o.rejected,(e,r)=>{e.addOrder.loading=!1,e.addOrder.error=!0,e.addOrder.success=!1,e.addOrder.message=r.payload.message})}}),{clearAddOrder:n}=d.actions;r.c=d.reducer},9:function(e,r,a){"use strict";var t=a(249);a(153).config();const s=t.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_URL,withCredentials:!0,timeout:1e4,delayed:!0,headers:{"Access-Control-Allow-Origin":"*"}});s.interceptors.request.use(e=>e.delayed?new Promise(r=>setTimeout(()=>r(e),1e3)):e,e=>Promise.reject(e)),r.a=s}},[[140,8,9]]]);
//# sourceMappingURL=main.a3f502ae.chunk.js.map