(this["webpackJsonpmy-blind"]=this["webpackJsonpmy-blind"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r,s=n(1),a=n.n(s),o=n(38),c=n.n(o),i=(n(48),n(4)),l=(n(49),n(2)),d=n(5),u=n.n(d),b=n(11),m=n(43),p=n(39),x=n.n(p),j=n(17),f=n.n(j),g=n(0);function h(e){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(u.a.mark((function e(t){var n,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.omdbapi.com/?apikey=6aeef859&s=".concat(t),e.prev=1,"undefined"!==typeof r&&r.cancel("Operation canceled as a new request has come in."),r=f.a.CancelToken.source(),e.next=6,f.a.get(n,{cancelToken:r.token});case 6:return s=e.sent,a=s.data,e.abrupt("return",{result:a});case 11:if(e.prev=11,e.t0=e.catch(1),!f.a.isCancel(e.t0)){e.next=15;break}return e.abrupt("return",{cancelPrevQuery:!0});case 15:return e.abrupt("return",[e.t0]);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var y=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)({}),o=Object(i.a)(a,2),c=(o[0],o[1]),l=Object(s.useState)([]),d=Object(i.a)(l,2),p=d[0],j=d[1];function f(e){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(u.a.mark((function e(t){var n,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if(n=e.sent,r=n.cancelPrevQuery,s=n.result,!r){e.next=7;break}return e.abrupt("return");case 7:"True"===s.Response?(j(s.Search),console.log(p)):(j([]),console.log(s.Error));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsxs)("div",{className:"inline items-start ml-4 w-full p-6 mt-4",style:{position:"relative"},children:[Object(g.jsxs)("div",{style:{position:"relative",margin:"auto"},children:[Object(g.jsx)("span",{style:{position:"absolute",left:"55%",top:"3px"},className:"p-2 rounded-lg bg-white-500 focus:outline-none",children:Object(g.jsx)(m.b,{style:{color:"gray"}})}),Object(g.jsx)("input",{className:"inline-block rounded-3xl mx-auto w-96 p-2 bg-transparent text-white-700 border border-white-1 focus:outline-none",value:n,onChange:function(e){r(e.target.value);var t=x.a.debounce(f,300);c((function(e){return e.cancel&&e.cancel(),t})),t(e.target.value)},placeholder:"Find a post",type:"text",name:"searchbar",id:"search"})]}),Object(g.jsx)("ul",{className:"w-80 ml-5 rounded-md",style:{position:"absolute",backgroundColor:"#243339"},children:p.map((function(e,t){return Object(g.jsx)("li",{className:"border border-white rounded-sm",children:e.Title},t)}))})]})};y.defaultProps={};var w=y,v=function(){return Object(g.jsx)("div",{className:"inline ml-2 mt-4",children:Object(g.jsx)(w,{})})};v.defaultProps={};var N=v,k=n(95);function P(e,t){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(u.a.mark((function e(t,n){var r,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new Headers).append("Content-type","application/json"),n.createdAt=Date.now(),s=JSON.stringify(n),console.log(s),a={method:"POST",headers:r,body:s,redirect:"follow"},e.next=8,fetch(t,a);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){var t=e.setOpenModal,n=Object(s.useState)("Tech"),r=Object(i.a)(n,2),a=r[0],o=r[1],c=Object(s.useState)(""),l=Object(i.a)(c,2),d=l[0],p=l[1],x=Object(s.useState)(""),j=Object(i.a)(x,2),f=j[0],h=j[1];return Object(g.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto",role:"dialog",children:Object(g.jsxs)("div",{className:"flex items-end justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(g.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),Object(g.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen",children:"\u200b"}),Object(g.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(g.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(g.jsxs)("div",{className:"bg-black-500 sm:flex sm:items-start",children:[Object(g.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:Object(g.jsx)(m.a,{})}),Object(g.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4  sm:text-left",children:[Object(g.jsx)("h3",{className:"text-lg mt-2 leading-6 font-medium text-gray-900",id:"modal-title",children:"Write a Post"}),Object(g.jsxs)("div",{className:"mt-2",children:[Object(g.jsx)("p",{className:"text-sm text-gray-500",children:Object(g.jsxs)("select",{name:"category",id:"selectCat",onChange:function(e){console.log("Selection"),console.log(e.target.value),o(e.target.value)},value:a,className:"text-sm mx-auto rounded-md w-96 p-3 border border-lightgray-600 text-gray-700",children:[Object(g.jsx)("option",{children:" Tech "}),Object(g.jsx)("option",{children:" S/W "}),Object(g.jsx)("option",{children:" Immigration "}),Object(g.jsx)("option",{children:" Investments "}),Object(g.jsx)("option",{children:" Misc. "}),Object(g.jsx)("option",{children:" Layoffs "}),Object(g.jsx)("option",{children:" COVID-19 "}),Object(g.jsx)("option",{children:" WFH "}),Object(g.jsx)("option",{children:" Return to office "}),Object(g.jsx)("option",{children:" IT "})]})}),Object(g.jsx)("p",{className:"text-sm text-gray-500",children:Object(g.jsx)("input",{className:"rounded-md  focus:outline-none mx-auto w-96 p-4 m-3 shadow-inner border border-lightgray-600 text-gray-700",type:"text",required:!0,name:"title",placeholder:"Add a title",onBlur:function(e){console.log("Title blur"),p(e.target.value)}})}),Object(g.jsx)("p",{className:"text-sm text-gray-500",children:Object(g.jsxs)("textarea",{className:"resize-none text-gray-600 focus:outline-none border rounded-md mx-auto h-64 w-96 p-4 m-3 shadow-inner border border-lightgray-600 break-normal",type:"text",required:!0,name:"textarea-name",value:f,placeholder:"Start writing here...",onChange:function(e){return h(e.target.value)},children:["onBlur=",function(e){console.log("Text blur"),console.log(e.target.value),h(f)}]})})]})]})]})}),Object(g.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(g.jsx)("button",{type:"button",onClick:function(){t(!1);var e={id:Object(k.a)(),topic:a,title:d,text:f};function n(){return(n=Object(b.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t,n);case 2:return r=e.sent,console.log("RESP"),e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(e);var r=function(e,t){return n.apply(this,arguments)}("https://my-blind-98ebc-default-rtdb.firebaseio.com/bl-posts.json",e);console.log("RES"),console.log(r)},className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",children:"Submit"}),Object(g.jsx)("button",{type:"button",onClick:function(){t(!1)},className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Cancel"})]})]})]})})};S.defaultProps={};var I=S;function A(e){var t=Object(l.f)(),n=Object(s.useState)(!1),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(g.jsxs)("div",{className:"inline-flex box-content p-4 border-2 border-gray-500 w-screen",children:[Object(g.jsx)("div",{style:{marginTop:"25px",padding:"0",width:"200px",fontSize:"2em"},children:Object(g.jsx)("span",{style:{fontFamily:"Zen Tokyo Zoo"},children:"MYBLIND"})}),Object(g.jsx)("div",{className:"w-1/2",children:Object(g.jsx)(N,{})}),Object(g.jsxs)("div",{className:"mt-5",children:[Object(g.jsx)("button",{className:"mr-2 sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",onClick:function(){console.log("Sign up btn clicked"),t.push("/my-blind-signup")},children:"Sign Up"}),Object(g.jsx)("button",{className:"mr-2 sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",onClick:function(){o(!0),console.log("Add post btn clicked")},children:"Write a Post"}),Object(g.jsx)("button",{className:"sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",onClick:function(){console.log("Sign up btn clicked"),t.push("/my-blind-signin")},children:"Log In"})]}),a&&Object(g.jsx)(I,{setOpenModal:o})]})}A.defaultProps={};var T=A,F=n(16),B=n.n(F),D=a.a.createContext({topic:"",title:"",text:"",createdAt:"",id:""});D.displayName="PostContext";var L=D,E=function(){var e=Object(l.g)(),t=Object(s.useContext)(L),n=t.allPosts,r=(t.setAllPosts,t.post),a=t.setPost,o=Object(l.f)(),c=function(t){var s=n.find((function(e){return e.id===t.target.id}));a(s),console.log(t.target),console.log("Ready to navigate to post ",r.id),o.push("".concat(e.path,"/").concat(r.id))};return Object(g.jsx)("div",{children:n.length>0&&n.map((function(e){return Object(g.jsx)("div",{onClick:c,id:e.id,children:Object(g.jsx)("div",{id:e.id,className:"flex cursor-pointer flex-col md:flex-row overflow-hidden bg-gray-400 rounded-lg shadow-xl  mt-4 w-2/3 mx-2",children:Object(g.jsxs)("div",{id:e.id,className:"w-full py-4 px-6 text-gray-800 flex flex-col justify-between",children:[Object(g.jsx)("h3",{id:e.id,className:"font-semibold text-lg leading-tight truncate",children:e.title}),Object(g.jsxs)("p",{id:e.id,className:"text-sm text-gray-700  tracking-wide mt-2",children:["Created ",B()(e.createdAt).calendar()]}),Object(g.jsx)("p",{id:e.id,className:"mt-2",children:e.text}),Object(g.jsxs)("p",{id:e.id,className:"text-sm text-gray-700 tracking-wide mt-2",children:["topic: ",e.topic]})]})})},e.id)}))})};E.defaultProps={post:{}};var U=E;function M(e){return R.apply(this,arguments)}function R(){return(R=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(){var e=Object(s.useContext)(L),t=e.allPosts,n=e.setAllPosts;return Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://my-blind-98ebc-default-rtdb.firebaseio.com/bl-posts.json",e.next=3,M("https://my-blind-98ebc-default-rtdb.firebaseio.com/bl-posts.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Error with GET Posts - Status ".concat(t.status));case 6:return e.next=8,t.json();case 8:r=e.sent,s=Object.keys(r).map((function(e){return r[e]})),console.log(s),s.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),n(s);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(g.jsx)("div",{className:"flex-column mx-auto",children:Object(g.jsx)(U,{posts:t})})};z.defaultProps={};var W=z;function q(e){return Object(g.jsx)("div",{className:" box-content p-4 border-2 border-gray-500 w-screen mx-auto",children:Object(g.jsx)(W,{})})}q.defaultProps={};var G=q,J=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)(T,{}),Object(g.jsx)(G,{})]})};J.defaultProps={};var K=J,Y=n(41),H=function(e){Object(Y.a)(e);var t=Object(s.useState)(""),n=Object(i.a)(t,2),r=n[0],a=(n[1],Object(s.useState)("")),o=Object(i.a)(a,2),c=o[0],d=(o[1],Object(l.f)());return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"mx-auto mt-5 w-full max-w-xs",children:[Object(g.jsxs)("form",{className:" bg-gray-400  shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(g.jsxs)("div",{className:"mb-4",children:[Object(g.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Username"}),Object(g.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",value:r,placeholder:"Username"})]}),Object(g.jsxs)("div",{className:"mb-6",children:[Object(g.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{className:"shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",value:c,placeholder:"******************"}),Object(g.jsx)("p",{className:"text-red-300 text-xs italic",children:"Please enter a password."})]}),Object(g.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[Object(g.jsx)("button",{className:"sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",type:"button",children:"Sign In"}),Object(g.jsx)("button",{className:"sm:w-auto ml-2 flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",onClick:function(e){d.push("/my-blind")},children:"Go Back"})]}),Object(g.jsx)("div",{className:"flex items-center justify-between",children:Object(g.jsx)("a",{className:"inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800",href:"#",children:"Forgot Password?"})})]}),Object(g.jsx)("p",{className:"text-center text-gray-500 text-xs",children:"\xa92020 MY-BLIND Corp. All rights reserved."})]})})};H.defaultProps={};var Q=H,V=function(e){var t=Object(l.f)();return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"mx-auto h-full mt-5 w-3/4 ",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"text-gray-300",children:" Already have an account?"}),Object(g.jsx)("button",{onClick:function(){t.push("/my-blind-signin")},className:"sm:w-auto ml-2 mb-4 flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",children:"Log In"})]}),Object(g.jsxs)("form",{className:"bg-gray-400  shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(g.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(g.jsx)("div",{className:"md:w-1/3",children:Object(g.jsx)("label",{className:"block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-full-name",children:"Pick a Username"})}),Object(g.jsx)("div",{className:"md:w-2/3",children:Object(g.jsx)("input",{className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-full-name",type:"text",value:"jane.doe"})})]}),Object(g.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(g.jsx)("div",{className:"md:w-1/3",children:Object(g.jsx)("label",{className:"block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-work-email",children:"Enter work email"})}),Object(g.jsx)("div",{className:"md:w-2/3",children:Object(g.jsx)("input",{type:"email",className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-work-email",value:"jane.doe@company.com"})})]}),Object(g.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(g.jsx)("div",{className:"md:w-1/3",children:Object(g.jsx)("label",{className:"block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-password",children:"Password"})}),Object(g.jsx)("div",{className:"md:w-2/3",children:Object(g.jsx)("input",{className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-password",type:"password",placeholder:"******************"})})]}),Object(g.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(g.jsx)("div",{className:"md:w-1/3",children:Object(g.jsx)("label",{className:"block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-password",children:"Re-enter Password"})}),Object(g.jsx)("div",{className:"md:w-2/3",children:Object(g.jsx)("input",{className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",id:"inline-password",type:"password",placeholder:"******************"})})]}),Object(g.jsxs)("div",{className:"md:flex md:items-center",children:[Object(g.jsx)("div",{className:"md:w-1/3"}),Object(g.jsxs)("div",{className:"md:w-2/3",children:[Object(g.jsx)("button",{className:"sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",type:"button",children:"Sign Up"}),Object(g.jsx)("button",{className:"sm:w-auto ml-4 flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",onClick:function(e){t.push("/my-blind")},children:"Go Back"})]})]})]}),Object(g.jsx)("p",{className:"text-center text-gray-500 text-xs",children:"\xa92020 MY-BLIND Corp. All rights reserved."})]})})};V.defaultProps={};var Z=V,X=function(){var e=Object(s.useContext)(L).post,t=B()(e.createdAt).calendar(),n=Object(l.f)();return Object(g.jsxs)("div",{className:"mx-auto justify-center items-center mt-10",style:{backgroundColor:"#243339"},children:[Object(g.jsx)("div",{id:e.id,className:"mx-auto bg-gray-400 rounded-lg shadow-xl w-3/4",children:Object(g.jsxs)("div",{className:"w-full py-4 px-6 text-gray-800 ",children:[Object(g.jsx)("h3",{className:"font-semibold text-lg leading-tight truncate",children:e.title}),Object(g.jsxs)("p",{className:"text-sm text-gray-700  tracking-wide mt-2",children:["Created ",t]}),Object(g.jsx)("p",{className:"mt-2",children:e.text}),Object(g.jsxs)("p",{className:"text-sm text-gray-700 tracking-wide mt-2",children:["topic: ",e.topic]})]})}),Object(g.jsx)("div",{className:"mx-auto mt-5 w-80",children:Object(g.jsx)("button",{className:"sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",style:{marginLeft:"45%"},onClick:function(e){n.push("/my-blind")},children:"Go Back"})})]})};X.defaultProps={post:{}};var $=X;var _=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)([]),o=Object(i.a)(a,2),c={allPosts:n,setAllPosts:r,post:o[0],setPost:o[1]};return Object(g.jsx)(L.Provider,{value:c,children:Object(g.jsx)("div",{className:"App flex-column",children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/my-blind-signup",children:Object(g.jsx)(Z,{})}),Object(g.jsx)(l.a,{path:"/my-blind-signin",children:Object(g.jsx)(Q,{})}),Object(g.jsx)(l.a,{path:"/my-blind/:id",children:Object(g.jsx)($,{})}),Object(g.jsx)(l.a,{path:"/my-blind",children:Object(g.jsx)(K,{})}),Object(g.jsx)(l.a,{path:"/",children:Object(g.jsx)(K,{})})]})})})},ee=n(12),te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),a(e),o(e)}))},ne=n(42);n.n(ne).a.initializeApp({apiKey:"AIzaSyDVTIl9qKcyI7BUguDh3vWSzUWpKj-1IJc",authDomain:"my-blind-98ebc.firebaseapp.com",databaseURL:"https://my-blind-98ebc-default-rtdb.firebaseio.com",projectId:"my-blind-98ebc",storageBucket:"my-blind-98ebc.appspot.com",messagingSenderId:"72678794531",appId:"1:72678794531:web:9ee6bd14978556a685d896"}),c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(ee.a,{children:Object(g.jsx)(_,{})})}),document.getElementById("root")),te()}},[[91,1,2]]]);
//# sourceMappingURL=main.6b360df4.chunk.js.map