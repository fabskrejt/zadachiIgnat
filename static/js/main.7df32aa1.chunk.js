(this["webpackJsonpzadachi-ignat"]=this["webpackJsonpzadachi-ignat"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={messageBox:"Message_messageBox__KdDBl",avatar:"Message_avatar__3FT3j",textBlock:"Message_textBlock__2U7Di",angle:"Message_angle__1T-oN",name:"Message_name__Tzmp0",message:"Message_message__8WR15",sendTime:"Message_sendTime__1YGRm"}},,,,function(e,t,n){e.exports={buttonContainer:"SuperButton_buttonContainer__1Jwf5",default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",greetingContainer:"Greeting_greetingContainer__2YA-4"}},function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},function(e,t,n){e.exports={hw5Container:"HW5_hw5Container__3THNH"}},,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},function(e,t,n){e.exports={someClass:"Affairs_someClass__l4fwN",affairs:"Affairs_affairs__HryGq"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__TqnG3"}},function(e,t,n){e.exports={header:"Header_header__1amup"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(18),s=n.n(r),i=(n(28),n(19)),o=n.n(i),j=n(8),l=n(2),u=n(7),b=n.n(u),d=n(0);var h=function(e){return Object(d.jsxs)("div",{className:b.a.messageBox,children:[Object(d.jsx)("div",{className:b.a.avatar,children:Object(d.jsx)("img",{src:e.avatar})}),Object(d.jsx)("div",{className:b.a.angle}),Object(d.jsxs)("div",{className:b.a.textBlock,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.message,children:e.message})]}),Object(d.jsx)("div",{className:b.a.sendTime,children:e.time})]})]})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",m="some text",p="22:00";var f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(h,{avatar:O,name:x,message:m,time:p}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},v=n(3),_=n(20),g=n.n(_);var C=function(e){return Object(d.jsxs)("div",{className:g.a.affairs,children:[Object(d.jsx)("span",{children:e.affair.name}),Object(d.jsx)("span",{children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},k=n(6),N=n(5),S=n(11),y=n.n(S),w=function(e){var t=e.red,n=e.className,a=Object(N.a)(e,["red","className"]),c="".concat(t?y.a.red:y.a.default," ").concat(n);return Object(d.jsx)("div",{className:y.a.buttonContainer,children:Object(d.jsx)("button",Object(k.a)({className:c},a))})};var T=function(e){var t=e.data.map((function(t){return Object(d.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(w,{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(w,{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)(w,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)(w,{onClick:function(){e.setFilter("low")},children:"Low"})]})},B=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(a.useState)(B),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(v.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(T,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},I=n(23),F=n(14),E=n.n(F),H=n(12),J=n.n(H),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(J.a.error," ").concat(i||""),l="".concat(r?J.a.errorInput:J.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(k.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},G=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=c?E.a.error:"";return Object(d.jsxs)("div",{className:E.a.greetingContainer,children:[Object(d.jsx)(M,{value:t,onChange:n,className:s,error:c}),Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{onClick:a,children:"Add"}),Object(d.jsx)("span",{children:r})]})]})},W=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(v.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(v.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(d.jsx)(G,{name:s,setNameCallback:function(e){" "!==e.currentTarget.value?(u(""),i(e.currentTarget.value)):u("name is require!")},addUser:function(){s?(n(s),alert("Hello ".concat(s,"!")),i("")):u("name is require!")},error:l,totalUsers:b})},P=n(32);var U=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(W,{users:n,addUserCallback:function(e){c([].concat(Object(I.a)(n),[{_id:Object(P.a)(),name:e}]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},q=n(15),z=n.n(q),D=n(16),K=n.n(D),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(k.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:K.a.spanClassName,children:c})]})};var R=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(v.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:z.a.column,children:[Object(d.jsx)(M,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(M,{className:z.a.blue}),Object(d.jsx)(w,{children:"default"}),Object(d.jsx)(w,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(w,{disabled:!0,onClick:s,children:"disabled"}),Object(d.jsx)(X,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(X,{checked:j,onChange:function(e){return l(e.currentTarget.checked)},children:"Input"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Y=n(21),L=n.n(Y),Z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(v.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,b=l.onDoubleClick,h=l.className,O=Object(N.a)(l,["children","onDoubleClick","className"]),x="".concat(L.a.span," ").concat(h);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(M,Object(k.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsx)("span",Object(k.a)(Object(k.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},O),{},{children:u||r.value}))})};function Q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Q("test",{x:"A",y:1});$("test",{x:"",y:0});var V=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(Z,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(w,{onClick:function(){Q("editable-span-value",n)},children:"save"}),Object(d.jsx)(w,{onClick:function(){c($("editable-span-value",n))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(A,{}),Object(d.jsx)(U,{}),Object(d.jsx)(R,{}),Object(d.jsx)(V,{})]})};var te=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ne=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(N.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(d.jsx)("select",Object(k.a)(Object(k.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},ae=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:t,checked:a===e,onChange:s,value:e}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:i})},ce=["x","y","z"];var re=function(){var e=Object(a.useState)(ce[1]),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ne,{options:ce,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(ae,{name:"radio",options:ce,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},se=function(){return Object(d.jsx)(re,{})},ie=function(){return Object(d.jsx)("div",{children:"Junior+ page now empty"})},oe="/pre-junior",je="/junior",le="/junior-plus";var ue=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/",element:Object(d.jsx)(l.a,{replace:!0,to:oe})}),Object(d.jsx)(l.b,{path:oe,element:Object(d.jsx)(ee,{})}),Object(d.jsx)(l.b,{path:je,element:Object(d.jsx)(se,{})}),Object(d.jsx)(l.b,{path:le,element:Object(d.jsx)(ie,{})}),"// add routes",Object(d.jsx)(l.b,{element:Object(d.jsx)(te,{})})]})})},be=n(22),de=n.n(be);var he=function(){return Object(d.jsxs)("div",{className:de.a.header,children:[Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{to:"".concat(oe),children:"preJunior"})}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{to:"".concat(je),children:"Junior"})}),Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{to:"".concat(le),children:"Junior+"})})]})},Oe=n(17),xe=n.n(Oe);var me=function(){return Object(d.jsx)("div",{className:xe.a.hw5Container,children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)("div",{className:xe.a.ss,children:Object(d.jsx)(he,{})}),Object(d.jsx)(ue,{})]})})};var pe=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(me,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.7df32aa1.chunk.js.map