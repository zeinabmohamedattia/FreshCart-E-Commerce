"use strict";(self.webpackChunkfinalproject=self.webpackChunkfinalproject||[]).push([[301],{8301:function(e,a,s){s.r(a),s.d(a,{default:function(){return p}});var r=s(4165),t=s(5861),n=s(9439),l=s(1243),i=s(8744),o=s(2791),d=s(9329),c=s(7689),m=s(688),u=s(8007),h=s(4270),w=s(184);function p(){var e,a=(0,o.useState)(null),s=(0,n.Z)(a,2),p=s[0],f=s[1],x=(0,o.useContext)(m.S),b=x.setUserToken,g=x.setUserData,j=(0,c.s0)(),v=(0,o.useState)(!1),y=(0,n.Z)(v,2),N=y[0],P=y[1],S=u.Ry({email:u.Z_().required("email is required").email("invalid email"),newPassword:u.Z_().required("password is required").matches(/^[A-Z][\w\W]{5,8}$/,"invalid password ex:(Zeianb@123)")});var Z=(0,i.TA)({initialValues:{email:"",newPassword:""},validationSchema:S,onSubmit:function(a){return(e=e||(0,t.Z)((0,r.Z)().mark((function e(a){var s,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,l.Z.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",a).catch((function(e){f(e.response.data.message),P(!1)}));case 3:s=e.sent,t=s.data,P(!1),localStorage.setItem("userToken",t.token),localStorage.setItem("userEmail",t.user.email),b(t.token),g(t.user),j("/");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(h.q,{children:[(0,w.jsx)("meta",{charSet:"utf-8"}),(0,w.jsx)("title",{children:"Reset Password"})]}),(0,w.jsx)("h2",{className:"my-4",children:"Reset Your account password"}),(0,w.jsxs)("form",{onSubmit:Z.handleSubmit,children:[p?(0,w.jsx)("div",{className:"alert alert-danger text-center py-2",children:p}):"",(0,w.jsxs)("div",{className:"form-floating mb-3",children:[(0,w.jsxs)("div",{className:"form-floating mb-3",children:[(0,w.jsx)("input",{type:"email",id:"email",onChange:Z.handleChange,onBlur:Z.handleBlur,name:"email",className:"form-control  mb-2"}),(0,w.jsx)("label",{htmlFor:"email",children:"Email "}),Z.errors.email&&Z.touched.email?(0,w.jsx)("div",{className:"alert alert-danger py-2",children:Z.errors.email}):null]}),(0,w.jsxs)("div",{className:"form-floating mb-3",children:[(0,w.jsx)("input",{type:"password",id:"newPassword",onBlur:Z.handleBlur,onChange:Z.handleChange,name:"newPassword",className:"form-control form-floating"}),(0,w.jsx)("label",{htmlFor:"newPassword",children:"New Password "}),Z.errors.newPassword&&Z.touched.newPassword?(0,w.jsx)("div",{className:"alert alert-danger py-2",children:Z.errors.newPassword}):null]})]}),N?(0,w.jsx)("button",{type:"button",disabled:!0,className:"btn bg-main text-light",children:(0,w.jsx)(d.Rf,{color:"#FFF",width:"20",visible:!0,ariaLabel:"falling-circles-loading"})}):(0,w.jsx)("button",{disabled:!(Z.isValid&&Z.dirty),type:"submit",className:"btn bg-main text-light px-4 py-2",children:"Reset"})]})]})}}}]);
//# sourceMappingURL=301.f6e3c0a4.chunk.js.map