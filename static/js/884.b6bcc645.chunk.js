"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[884],{39968:function(e,t,r){var i=r(1582),n=r(20890),s=r(61889),o=r(81918),a=r(55184),l=r(80184),c=function(e){var t=e.color,r=e.title,c=e.count,d=e.percentage;e.isLoss,e.extra;return(0,l.jsx)(a.Z,{contentSX:{p:2.25},children:(0,l.jsxs)(i.Z,{spacing:.5,children:[(0,l.jsx)(n.Z,{variant:"h6",color:"textSecondary",children:r}),(0,l.jsxs)(s.ZP,{container:!0,alignItems:"center",children:[(0,l.jsx)(s.ZP,{item:!0,children:(0,l.jsx)(n.Z,{variant:"h4",color:"inherit",children:c})}),d&&(0,l.jsx)(s.ZP,{item:!0,children:(0,l.jsx)(o.Z,{variant:"combined",color:t,label:"".concat(d,"%"),sx:{ml:1.25,pl:1},size:"small"})})]})]})})};c.defaultProps={color:"primary"},t.Z=c},24884:function(e,t,r){r.r(t),r.d(t,{default:function(){return ee}});var i=r(74165),n=r(15861),s=r(29439),o=r(61889),a=r(20890),l=r(36151),c=r(72791),d=r(64554),u=r(47047),x=r(39281),h=r(79836),p=r(56890),Z=r(35855),g=r(53994),m=r(53382),j=r(93044),f=r(78121),v=r(20068),b=r(26812),y=r(80911),P=r(23786),S=r(94721),_=r(13400),w=r(1582),k=r(28029),C=r(47071),U=r(94925),z=r(5289),E=r(85231),W=r(39157),A=r(51691),B=r(22299),F=r.n(B),I=r(65661),R=r(4783),T=r(14473),q=r(75033),D=r(60732),M=r(43500),L=r(72351),N=r(81724),G=r(92506),O=r(57689),V=r(37781),J=r(90838),X=r(66934),Y=r(80184),H=(0,X.ZP)(z.Z)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function K(){var e=(0,O.s0)(),t=(0,c.useState)([]),r=(0,s.Z)(t,2),B=r[0],X=r[1],K=(0,c.useState)(0),Q=(0,s.Z)(K,2),$=(Q[0],Q[1]),ee=(0,c.useRef)(null),te=(0,c.useState)(null),re=(0,s.Z)(te,2),ie=re[0],ne=re[1],se=Boolean(ie),oe=(0,c.useState)(!1),ae=(0,s.Z)(oe,2),le=ae[0],ce=ae[1],de=function(){ce(!1)},ue=(0,c.useState)(0),xe=(0,s.Z)(ue,2),he=xe[0],pe=xe[1],Ze=(0,c.useState)(!1),ge=(0,s.Z)(Ze,2),me=ge[0],je=ge[1],fe=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je(!0),console.log(he),t={user_id:he,status:"active"===et?"inactive":"active"},e.next=5,(0,T.v_)("user/updateUsername",t);case 5:r=e.sent,console.log("Update Status "),console.log(r),r.error?((0,V.Z)("error",r.message),je(!1)):((0,V.Z)("success",r.message),ce(!1),je(!1),We());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=(0,c.useState)(0),be=(0,s.Z)(ve,2),ye=be[0],Pe=be[1],Se=(0,c.useState)(5),_e=(0,s.Z)(Se,2),we=_e[0],ke=_e[1],Ce=(0,c.useState)(!0),Ue=(0,s.Z)(Ce,2),ze=Ue[0],Ee=Ue[1],We=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,T.v_)("user/getAllUsers");case 3:t=e.sent,console.log("ALL USERS"),console.log(t),t.error||($(t.totalPages),X(t.result)),Ee(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Ee(!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Ae=(0,c.useState)(null),Be=(0,s.Z)(Ae,2),Fe=Be[0],Ie=Be[1],Re=(0,c.useRef)(null),Te=(0,c.useState)(null),qe=(0,s.Z)(Te,2),De=qe[0],Me=qe[1],Le=(0,c.useState)(null),Ne=(0,s.Z)(Le,2),Ge=Ne[0],Oe=Ne[1],Ve=(0,c.useState)(!1),Je=(0,s.Z)(Ve,2),Xe=Je[0],Ye=Je[1],He=function(){Ye(!1)},Ke=function(e){var t=e.target.files[0];if(t){Oe(t);var r=new FileReader;r.onload=function(){Me(r.result)},r.readAsDataURL(t)}},Qe=(0,c.useState)(""),$e=(0,s.Z)(Qe,2),et=$e[0],tt=$e[1],rt=function(){Re.current.click()};return(0,c.useEffect)((function(){We()}),[ye]),(0,Y.jsx)(d.Z,{children:ze?(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o.ZP,{container:!0,spacing:2,pt:10,children:[(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,Y.jsx)(u.Z,{variant:"rectangular",height:100})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,Y.jsx)(u.Z,{variant:"rectangular",height:100})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,Y.jsx)(u.Z,{variant:"rectangular",height:100})})]})}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:12,align:"right",children:(0,Y.jsx)(x.Z,{sx:{width:"100%",overflowX:"auto",position:"relative",display:"block",maxWidth:"100%","& td, & th":{whiteSpace:"nowrap"}},children:(0,Y.jsxs)(h.Z,{"aria-labelledby":"tableTitle",sx:{"& .MuiTableCell-root:first-of-type":{pl:2},"& .MuiTableCell-root:last-of-type":{pr:3}},children:[(0,Y.jsx)(p.Z,{children:(0,Y.jsxs)(Z.Z,{children:[(0,Y.jsx)(g.Z,{align:"left",children:"Name"}),(0,Y.jsx)(g.Z,{align:"center",children:"Subscribed Courses"}),(0,Y.jsx)(g.Z,{align:"center",children:"Status"}),(0,Y.jsx)(g.Z,{align:"center",children:"Created"}),(0,Y.jsx)(g.Z,{align:"center",children:"Updated"}),(0,Y.jsx)(g.Z,{align:"right"})]})}),(0,Y.jsx)(m.Z,{children:0===B.length?(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(Z.Z,{children:(0,Y.jsx)(g.Z,{colSpan:6,align:"center",children:(0,Y.jsx)(d.Z,{style:{display:"flex",justifyContent:"center"},children:(0,Y.jsx)(j.Z,{variant:"square",src:R,alt:"No Data",style:{width:"64px",height:"auto",marginBlock:"2%"}})})})})}):(0,Y.jsx)(Y.Fragment,{children:B.slice(ye*we,ye*we+we).map((function(t){return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(Z.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Y.jsx)(g.Z,{component:"th",scope:"row",style:{cursor:"pointer"},onClick:function(){return e("/user_detail/".concat(t.user_id))},children:(0,Y.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:2,children:(0,Y.jsx)(j.Z,{style:{backgroundColor:"#03356b",textTransform:"capitalize"},children:null===t||void 0===t?void 0:t.user_name.charAt(0)})}),(0,Y.jsxs)(o.ZP,{item:!0,xs:12,md:10,children:[(0,Y.jsx)(a.Z,{variant:"h5",style:{fontWeight:200},children:null===t||void 0===t?void 0:t.user_name}),(0,Y.jsx)(a.Z,{variant:"h6",style:{fontWeight:200,color:"gray"},children:t.email})]})]})}),(0,Y.jsx)(g.Z,{align:"center",children:null===t||void 0===t?void 0:t.subscribedProducts}),(0,Y.jsx)(g.Z,{align:"center",children:(0,Y.jsx)(f.Z,{color:"active"===(null===t||void 0===t?void 0:t.status)?"success":"error",badgeContent:(0,Y.jsx)("span",{style:{textTransform:"capitalize"},children:null===t||void 0===t?void 0:t.status})})}),(0,Y.jsx)(g.Z,{align:"center",children:(0,J.p)(null===t||void 0===t?void 0:t.created_at)}),(0,Y.jsx)(g.Z,{align:"center",children:(0,J.p)(t.updated_at)}),(0,Y.jsx)(g.Z,{align:"center",children:(0,Y.jsx)(v.Z,{title:"Action",children:(0,Y.jsx)(q.Z,{ref:ee,style:{fontSize:"30px",cursor:"pointer"},onClick:function(e){pe(t.user_id),ne(e.currentTarget),Ie(t),tt(t.status)}})})})]},null===t||void 0===t?void 0:t.product_id)})}))})})]})})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:12,align:"right",children:(0,Y.jsx)(b.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:B.length,rowsPerPage:we,page:ye,onPageChange:function(e,t){Pe(t)},onRowsPerPageChange:function(e){ke(parseInt(e.target.value,10)),Pe(0)}})})]}),(0,Y.jsxs)(y.Z,{id:"basic-menu",anchorEl:ie,open:se,onClose:function(){ne(null)},MenuListProps:{"aria-labelledby":"basic-button"},PaperProps:{elevation:0,sx:{overflow:"visible",boxShadow:"0px 2px 30px -15px rgba(94,94,107,0.67)",mt:1.5}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,Y.jsx)(P.Z,{onClick:function(){return e("/user_detail/".concat(he))},children:"View User"}),(0,Y.jsx)(P.Z,{onClick:function(){console.log(et),ce(!0),ne(null)},children:"active"===et?"Block User":"Unblock User"})]}),(0,Y.jsxs)(z.Z,{open:le,onClose:de,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,Y.jsx)(I.Z,{sx:{m:0,p:2,fontSize:"20px",fontWeight:700},id:"customized-dialog-title",children:"Update Status"}),(0,Y.jsx)(W.Z,{children:(0,Y.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,Y.jsx)(o.ZP,{item:!0,xs:12,children:(0,Y.jsx)(S.Z,{})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,children:(0,Y.jsxs)(A.Z,{id:"alert-dialog-description",style:{fontSize:"15px",color:"black"},children:["Are you sure you want to  ","active"===et?"Block User":"Unblock User","?"]})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,children:(0,Y.jsx)(S.Z,{})}),(0,Y.jsxs)(o.ZP,{item:!0,xs:12,align:"right",children:[(0,Y.jsx)(l.Z,{disableElevation:!0,onClick:de,variant:"outlined",size:"medium",style:{marginRight:"12px",fontWeight:700,color:"gray",boxShadow:" 0px 2px 30px -15px rgba(94,94,107,0.67)"},color:"secondary",children:"No"}),(0,Y.jsx)(l.Z,{disabled:me,onClick:function(){return fe()},disableElevation:!0,variant:"contained",size:"medium",style:{fontWeight:700,color:"white",boxShadow:" 0px 2px 30px -15px rgba(94,94,107,0.67)"},color:"error",children:"Yes"})]})]})})]}),(0,Y.jsxs)(H,{onClose:He,"aria-labelledby":"customized-dialog-title",open:Xe,children:[(0,Y.jsx)(I.Z,{sx:{m:0,p:2,fontSize:"25px",fontWeight:700},id:"customized-dialog-title",children:"Edit Product"}),(0,Y.jsx)(_.Z,{"aria-label":"close",onClick:He,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,Y.jsx)(D.Z,{})}),(0,Y.jsx)(W.Z,{dividers:!0,children:(0,Y.jsx)(G.J9,{initialValues:{name:Fe?Fe.product_name:"",description:Fe?Fe.description:"",product_id_stripe:Fe?Fe.product_id_stripe:"",submit:null},validationSchema:N.Ry().shape({name:N.Z_().required("Name is required"),description:N.Z_().required("Description is required"),product_id_stripe:N.Z_().required("Stripe Product is required")}),onSubmit:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,r){var n,s,o,a,l,c,d,u,x;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.setErrors,s=r.setStatus,o=r.setSubmitting,a=r.resetForm,e.prev=1,console.log(t),console.log(Ge),null!==Ge&&""!==Ge){e.next=8;break}(0,V.Z)("error","Image Is Required"),e.next=13;break;case 8:return d={image:Ge},e.next=11,(0,T.nv)(d);case 11:c=e.sent,console.log(c);case 13:return o(!0),u={product_id:Fe.product_id,image:null===(l=c)||void 0===l?void 0:l.path,product_name:t.name,description:t.description,product_id_stripe:t.product_id_stripe},e.prev=15,e.next=18,(0,T.v_)("product/updateProduct",u);case 18:x=e.sent,console.log(x),x.error?(console.log("error true"),(0,V.Z)("error",x.message),o(!1)):((0,V.Z)("success",x.message),Oe(""),Me(""),a(),setTimeout((function(){window.location.reload()}),1e3),s({success:!1}),o(!1)),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(15),(0,V.Z)("error","Something Went Wrong"),s({success:!1}),o(!1);case 28:s({success:!1}),o(!1),e.next=37;break;case 32:e.prev=32,e.t1=e.catch(1),s({success:!1}),n({submit:e.t1.message}),o(!1);case 37:case"end":return e.stop()}}),e,null,[[1,32],[15,23]])})));return function(t,r){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,r=e.handleBlur,i=e.handleChange,n=e.handleSubmit,s=e.isSubmitting,c=e.touched,d=e.values;return(0,Y.jsx)("form",{noValidate:!0,onSubmit:n,children:(0,Y.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,Y.jsx)(o.ZP,{item:!0,xs:12,children:(0,Y.jsxs)(w.Z,{spacing:1,children:[(0,Y.jsx)(a.Z,{variant:"h5",children:"Product Name"}),(0,Y.jsx)(k.Z,{id:"email-login",type:"text",value:d.name,name:"name",onBlur:r,onChange:i,placeholder:"Enter Product Name",fullWidth:!0,error:Boolean(c.name&&t.name)}),c.name&&t.name&&(0,Y.jsx)(C.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:t.name})]})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,children:(0,Y.jsxs)(w.Z,{spacing:1,children:[(0,Y.jsx)(a.Z,{variant:"h5",children:"Description"}),(0,Y.jsx)(U.Z,{htmlFor:"email-login",children:"Appears at checkout, on the customer portal, and in quotes."}),(0,Y.jsx)(k.Z,{id:"description",type:"text",value:d.description,name:"description",onBlur:r,onChange:i,placeholder:"Enter Product description",fullWidth:!0,multiline:!0,rows:4,error:Boolean(c.description&&t.description)}),c.description&&t.description&&(0,Y.jsx)(C.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:t.description})]})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,children:(0,Y.jsxs)(w.Z,{spacing:1,children:[(0,Y.jsx)(a.Z,{variant:"h5",children:"Stripe Product Id"}),(0,Y.jsx)(U.Z,{htmlFor:"email-login",children:"This id should be get from stripe Products ."}),(0,Y.jsxs)(w.Z,{spacing:1,display:"flex",direction:"row",children:[(0,Y.jsx)(k.Z,{id:"product_id_stripe",type:"text",value:d.product_id_stripe,name:"product_id_stripe",onBlur:r,onChange:i,placeholder:"Enter Stripe Product Id",fullWidth:!0,error:Boolean(c.product_id_stripe&&t.product_id_stripe)}),(0,Y.jsx)(l.Z,{disableElevation:!0,variant:"outlined",onClick:function(){return window.open("https://dashboard.stripe.com/","_blank")},startIcon:(0,Y.jsx)(M.Z,{}),size:"medium",style:{color:"rgb(76 91 104)",fontWeight:700,backgroundColor:"white",border:"1px solid lightGray",boxShadow:" 0px 2px 30px -15px rgba(94,94,107,0.67)"},color:"secondary",children:"Stripe"})]}),c.product_id_stripe&&t.product_id_stripe&&(0,Y.jsx)(C.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:t.product_id_stripe})]})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,children:(0,Y.jsxs)(w.Z,{spacing:1,children:[(0,Y.jsx)(a.Z,{variant:"h5",children:"Image"}),(0,Y.jsx)(U.Z,{htmlFor:"email-login",children:"Appears at checkout. JPEG or PNG image smaller than 2 MB."}),""===De||null===De?(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(E.Z,{children:(0,Y.jsx)(l.Z,{onClick:rt,disableElevation:!0,variant:"outlined",startIcon:(0,Y.jsx)(L.Z,{}),size:"medium",style:{color:"rgb(76 91 104)",fontWeight:700,backgroundColor:"white",border:"1px solid lightGray",boxShadow:" 0px 2px 30px -15px rgba(94,94,107,0.67)"},color:"secondary",children:"Upload"})})}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(E.Z,{children:(0,Y.jsx)(l.Z,{onClick:function(){return Me("")},disableElevation:!0,variant:"outlined",size:"medium",style:{color:"rgb(76 91 104)",fontWeight:700,backgroundColor:"white",border:"1px solid lightGray",boxShadow:" 0px 2px 30px -15px rgba(94,94,107,0.67)"},color:"secondary",children:"Cancel"})}),De&&(0,Y.jsx)(j.Z,{src:De,alt:"Selected",style:{width:"300px",height:"auto",border:"1px solid lightGray",borderRadius:"10px"},variant:"square"})]}),(0,Y.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},id:"fileInput",onChange:Ke,ref:Re})]})}),t.submit&&(0,Y.jsx)(o.ZP,{item:!0,xs:12,children:(0,Y.jsx)(C.Z,{error:!0,children:t.submit})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,children:(0,Y.jsx)(S.Z,{})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,align:"right",children:(0,Y.jsx)(l.Z,{disabled:s,startIcon:s?(0,Y.jsx)(F(),{color:"white",loading:s,size:20}):null,type:"submit",disableElevation:!0,variant:"contained",size:"medium",style:{fontWeight:700,color:"white",boxShadow:" 0px 2px 30px -15px rgba(94,94,107,0.67)"},color:"primary",children:"Update"})})]})})}})})]})]})})}var Q=r(79286),$=(r(53386),r(39968)),ee=((0,X.ZP)(z.Z)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}})),function(){var e=(0,c.useState)(!1),t=(0,s.Z)(e,2),r=(t[0],t[1],(0,c.useRef)(null),(0,c.useState)(null)),d=(0,s.Z)(r,2),u=(d[0],d[1],(0,c.useState)(null)),x=(0,s.Z)(u,2),h=(x[0],x[1],(0,O.s0)()),p=(0,c.useState)(0),Z=(0,s.Z)(p,2),g=(Z[0],Z[1],(0,c.useState)(10)),m=(0,s.Z)(g,2),j=(m[0],m[1],(0,c.useState)([])),f=(0,s.Z)(j,2),v=(f[0],f[1],(0,c.useState)(0)),b=(0,s.Z)(v,2),y=b[0],P=b[1],S=(0,c.useState)(0),_=(0,s.Z)(S,2),w=_[0],k=_[1],C=(0,c.useState)(0),U=(0,s.Z)(C,2),z=(U[0],U[1],(0,c.useState)(0)),W=(0,s.Z)(z,2),A=(W[0],W[1],(0,c.useState)(0)),B=(0,s.Z)(A,2),F=B[0],I=B[1],R=(0,c.useState)(0),q=(0,s.Z)(R,2),D=(q[0],q[1],function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,T.v_)("user/dashboardAdminCount");case 3:t=e.sent,console.log("ALL Dashboard Count"),console.log(t),t.error||(P(t.total_users),k(t.total_active_users),I(t.total_block_users)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}());return(0,c.useEffect)((function(){D()}),[]),(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:9,style:{display:"flex",justifyContent:"space-between"},children:(0,Y.jsx)(a.Z,{variant:"h3",style:{fontWeight:700},children:"Users"})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:3,style:{display:"flex",justifyContent:"right"},children:(0,Y.jsx)(E.Z,{children:(0,Y.jsx)(l.Z,{onClick:function(){return h("/userAdd")},disableElevation:!0,startIcon:(0,Y.jsx)(Q.Z,{}),size:"medium",color:"primary",variant:"contained",children:"User"})})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,Y.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,Y.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:4,children:(0,Y.jsx)($.Z,{title:"Total Users",count:y})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:4,children:(0,Y.jsx)($.Z,{title:"Total Active Users",count:w})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:4,children:(0,Y.jsx)($.Z,{title:"Total Blocked Users",count:F})})]})}),(0,Y.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,Y.jsx)(K,{})})]})})})}}]);
//# sourceMappingURL=884.b6bcc645.chunk.js.map