"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[6],{96206:function(e,n,t){t.r(n);var r=t(74165),i=t(15861),a=t(29439),l=t(61889),o=t(20068),s=t(36151),c=t(20890),d=t(1582),u=t(28029),p=t(94925),x=t(93044),g=t(64554),h=t(72791),f=t(85231),v=t(99372),m=t(43500),Z=t(26564),k=t(37781),j=t(57689),y=t(14473),b=(t(81724),t(92506),t(80184));n.default=function(){var e=(0,h.useState)(!1),n=(0,a.Z)(e,2),t=n[0],_=n[1],C=(0,h.useRef)(null),w=(0,h.useState)(null),S=(0,a.Z)(w,2),P=S[0],R=S[1],W=(0,h.useState)(""),I=(0,a.Z)(W,2),D=I[0],z=I[1],A=(0,h.useState)(null),B=(0,a.Z)(A,2),G=B[0],L=B[1],E=(0,j.UO)().id,F=function(){C.current.click()},O=(0,j.s0)(),T=(0,h.useState)(""),U=(0,a.Z)(T,2),q=U[0],M=U[1],N=(0,h.useState)(""),H=(0,a.Z)(N,2),J=H[0],K=H[1],Q=(0,h.useState)(""),V=(0,a.Z)(Q,2),X=V[0],Y=V[1],$=(0,h.useState)(""),ee=(0,a.Z)($,2),ne=ee[0],te=ee[1],re=(0,h.useState)(""),ie=(0,a.Z)(re,2),ae=ie[0],le=ie[1],oe=(0,h.useState)(""),se=(0,a.Z)(oe,2),ce=se[0],de=se[1],ue=(0,h.useState)(""),pe=(0,a.Z)(ue,2),xe=pe[0],ge=pe[1],he=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i,a,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==q&&null!==q&&""!==J&&null!==J&&""!==X&&null!==X&&""!==ne&&null!==ne&&""!==ae&&null!==ae&&""!==ce&&null!==ce){e.next=4;break}(0,k.Z)("error","All fields are required"),e.next=28;break;case 4:if(null!==G&&""!==G){e.next=8;break}t={package_id:E,program_id:xe,package_name:q,description:J,package_price:ne,stripe_payment_link:X,type:"one-time",package_offer_price:ae,total_students:ce},e.next=14;break;case 8:return a={image:G},e.next=11,(0,y.nv)(a);case 11:n=e.sent,console.log(n),t={package_id:E,image:null===(i=n)||void 0===i?void 0:i.path,program_id:xe,package_name:q,description:J,package_price:ne,stripe_payment_link:X,type:"one-time",package_offer_price:ae,total_students:ce};case 14:return _(!0),e.prev=15,e.next=18,(0,y.v_)("package/update",t);case 18:l=e.sent,console.log("ADD Packahge "),console.log(l),l.error?(console.log("error true"),(0,k.Z)("error",l.message),_(!1)):(setTimeout((function(){(0,k.Z)("success","Product Updated Successfully"),O("/courses")}),1e3),_(!1)),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(15),(0,k.Z)("error","Something Went Wrong"),_(!1);case 28:case"end":return e.stop()}}),e,null,[[15,24]])})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.U2)("program/get");case 3:n=e.sent,console.log("ALL PROGRAMS"),console.log(n),n.error||ge(n.result[0].program_id),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i,a,l,o,s,c,d,u,p,x,g,h,f,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={package_id:E},e.next=4,(0,y.v_)("package/getByProgramId",n);case 4:t=e.sent,console.log("Course edit "),console.log(t),t.error||(M(null===t||void 0===t||null===(i=t.data)||void 0===i||null===(a=i.course)||void 0===a?void 0:a.package_name),K(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(o=l.course)||void 0===o?void 0:o.description),Y(null===t||void 0===t||null===(s=t.data)||void 0===s||null===(c=s.course)||void 0===c?void 0:c.stripe_payment_link),te(null===t||void 0===t||null===(d=t.data)||void 0===d||null===(u=d.course)||void 0===u?void 0:u.package_price),le(null===t||void 0===t||null===(p=t.data)||void 0===p||null===(x=p.course)||void 0===x?void 0:x.package_offer_price),de(null===t||void 0===t||null===(g=t.data)||void 0===g||null===(h=g.course)||void 0===h?void 0:h.total_students),z(null===t||void 0===t||null===(f=t.data)||void 0===f||null===(v=f.course)||void 0===v?void 0:v.image)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){fe(),ve()}),[]),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(l.ZP,{container:!0,spacing:2,children:(0,b.jsx)(l.ZP,{item:!0,xs:12,md:12,style:{position:"relative"},children:(0,b.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,b.jsxs)(l.ZP,{item:!0,xs:12,md:12,style:{display:"flex",flexDirection:"row",justifyContent:"left",marginBottom:"2%"},children:[(0,b.jsx)(o.Z,{title:"Back",children:(0,b.jsx)(s.Z,{onClick:function(){O("/users")},className:"poppinsRegularBold",sx:{paddingInline:"10px",display:"block",color:"#03356b",backgroundColor:"none",fontSize:"16px",fontWeight:600,borderRadius:"50px",textTransform:"capitalize",transition:"background-color 0.3s, color 0.3s",transitionDelay:"0.3s",marginRight:"10px","&:hover":{backgroundColor:"#03356b",color:"white"}},children:(0,b.jsx)(v.Z,{})})}),(0,b.jsx)(c.Z,{variant:"h3",style:{fontWeight:700},children:"Add Course"})]}),(0,b.jsx)(l.ZP,{item:!0,xs:12,md:12,children:(0,b.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,b.jsx)(l.ZP,{item:!0,xs:12,md:12,children:(0,b.jsx)(l.ZP,{container:!0,spacing:2,style:{border:"1px solid lightGray",borderRadius:"10px",backgroundColor:"white"},children:(0,b.jsx)(l.ZP,{item:!0,xs:12,md:12,children:(0,b.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,b.jsxs)(l.ZP,{item:!0,xs:12,md:6,style:{padding:"20px"},children:[(0,b.jsxs)(d.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{variant:"h5",children:"Title"}),(0,b.jsx)(u.Z,{id:"email-login",type:"text",value:q,name:"name",onChange:function(e){return M(e.target.value)},fullWidth:!0})]}),(0,b.jsxs)(d.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{variant:"h5",children:"Description"}),(0,b.jsx)(u.Z,{id:"description",type:"text",value:J,name:"description",onChange:function(e){return K(e.target.value)},fullWidth:!0,multiline:!0,rows:4})]}),(0,b.jsxs)(d.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{variant:"h5",children:"Stripe Payment Link"}),(0,b.jsx)(p.Z,{htmlFor:"email-login",children:"This link should be get from stripe Products Dashboard ."}),(0,b.jsxs)(d.Z,{spacing:1,display:"flex",direction:"row",children:[(0,b.jsx)(u.Z,{id:"stripe_payment_link",type:"text",value:X,name:"stripe_payment_link",onChange:function(e){return Y(e.target.value)},fullWidth:!0}),(0,b.jsx)(s.Z,{disableElevation:!0,variant:"outlined",onClick:function(){return window.open("https://dashboard.stripe.com/","_blank")},startIcon:(0,b.jsx)(m.Z,{}),size:"medium",style:{color:"rgb(76 91 104)",fontWeight:700,backgroundColor:"white",border:"1px solid lightGray",boxShadow:" 0px 2px 30px -15px rgba(94,94,107,0.67)"},color:"secondary",children:"Stripe"})]})]}),(0,b.jsxs)(d.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{variant:"h5",children:" Original Price"}),(0,b.jsx)(u.Z,{id:"package_price",type:"text",value:ne,name:"package_price",onChange:function(e){return te(e.target.value)},fullWidth:!0})]}),(0,b.jsxs)(d.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{variant:"h5",children:"Offer Price"}),(0,b.jsx)(u.Z,{id:"offer_price",type:"text",value:ae,name:"offer_price",onChange:function(e){return le(e.target.value)},fullWidth:!0})]}),(0,b.jsxs)(d.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{variant:"h5",children:"Total Students"}),(0,b.jsx)(u.Z,{id:"total_students",type:"text",value:ce,name:"total_students",onChange:function(e){return de(e.target.value)},fullWidth:!0})]})]}),(0,b.jsx)(l.ZP,{item:!0,xs:12,md:6,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,b.jsxs)(d.Z,{spacing:1,children:[""===P||null===P?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(x.Z,{src:"".concat(y._n).concat(D),onClick:F,alt:"Selected",style:{width:"auto",height:"200px",border:"1px solid lightGray",borderRadius:"10px"},variant:"square"})}):(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(g.Z,{onClick:F,style:{marginInline:"2%",backgroundColor:"#f2f0f0",border:"3px dotted #cecece",borderRadius:"10px",display:"flex",justifyContent:"center",flexDirection:"column"},children:[P&&(0,b.jsx)(x.Z,{src:P,alt:"Selected",style:{width:"auto",height:"200px",border:"1px solid lightGray",borderRadius:"10px"},variant:"square"}),(0,b.jsx)(f.Z,{children:(0,b.jsx)(s.Z,{onClick:function(){return R("")},disableElevation:!0,variant:"outlined",size:"medium",style:{color:"rgb(76 91 104)",fontWeight:700,backgroundColor:"white",border:"1px solid lightGray",boxShadow:" 0px 2px 30px -15px rgba(94,94,107,0.67)",marginBlock:"1%"},color:"secondary",children:"Change Image"})})]})}),(0,b.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},id:"fileInput",onChange:function(e){var n=e.target.files[0];if(n){L(n);var t=new FileReader;t.onload=function(){R(t.result)},t.readAsDataURL(n)}},ref:C})]})})]})})})}),(0,b.jsx)(l.ZP,{item:!0,xs:12,align:"right",children:(0,b.jsx)(s.Z,{disabled:t,startIcon:t?(0,b.jsx)(Z.Z,{color:"#fff",loading:t,size:20}):null,onClick:function(){return he()},disableElevation:!0,variant:"contained",size:"medium",style:{fontWeight:700,color:"white",boxShadow:" 0px 2px 30px -15px rgba(94,94,107,0.67)",marginInline:"2%"},color:"primary",children:"Save"})})]})})]})})})})}},43500:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413),i=t(72791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"}}]},name:"paper-clip",theme:"outlined"},l=t(34110),o=function(e,n){return i.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};o.displayName="PaperClipOutlined";var s=i.forwardRef(o)}}]);
//# sourceMappingURL=6.8edb44b5.chunk.js.map