(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b5d82a2"],{"001f":function(t,a,e){},"2b12":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"top"},[e("Input",{staticStyle:{width:"300px"},attrs:{search:"",placeholder:"Enter something..."}}),e("Button",{attrs:{type:"primary",shape:"circle",icon:"md-add"},on:{click:function(a){t.drawerShow=!0}}},[t._v("添加")])],1),e("Table",{attrs:{border:"",columns:t.columns12,data:t.data6},scopedSlots:t._u([{key:"name",fn:function(a){var o=a.row;return[e("strong",[t._v(t._s(o.name))])]}},{key:"action",fn:function(a){a.row;var o=a.index;return[e("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(a){return t.show(o)}}},[t._v("查看")]),e("Button",{attrs:{type:"error",size:"small"},on:{click:function(a){return t.remove(o)}}},[t._v("删除")])]}}])}),e("div",{staticClass:"page-box"},[e("Page",{attrs:{total:40,size:"small","show-elevator":"","show-total":""}})],1),e("Drawer",{attrs:{title:"账号管理",width:"720","mask-closable":!1,styles:t.styles},model:{value:t.drawerShow,callback:function(a){t.drawerShow=a},expression:"drawerShow"}},[e("Form",{attrs:{model:t.formData}},[e("FormItem",{attrs:{label:"姓名","label-position":"top"}},[e("Input",{attrs:{placeholder:"please enter user name"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("FormItem",{attrs:{label:"身份","label-position":"top"}},[e("Select",{attrs:{placeholder:"please select an owner"},model:{value:t.formData.owner,callback:function(a){t.$set(t.formData,"owner",a)},expression:"formData.owner"}},[e("Option",{attrs:{value:"jobs"}},[t._v("管理员")]),e("Option",{attrs:{value:"ive"}},[t._v("普通员工")])],1)],1),e("FormItem",{attrs:{label:"编号","label-position":"top"}},[e("Input",{attrs:{placeholder:"please enter user name"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("FormItem",{attrs:{label:"所属部门","label-position":"top"}},[e("Select",{attrs:{placeholder:"please choose the type"},model:{value:t.formData.type,callback:function(a){t.$set(t.formData,"type",a)},expression:"formData.type"}},[e("Option",{attrs:{value:"private"}},[t._v("财务部")]),e("Option",{attrs:{value:"public"}},[t._v("行政部")])],1)],1)],1),e("div",{staticClass:"demo-drawer-footer"},[e("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(a){t.drawerShow=!1}}},[t._v("取消")]),e("Button",{attrs:{type:"primary"},on:{click:function(a){t.drawerShow=!1}}},[t._v("提交")])],1)],1)],1)},r=[],n=(e("7f7f"),{name:"account",data:function(){return{columns12:[{title:"姓名",slot:"name"},{title:"身份",key:"age"},{title:"编号",key:"address"},{title:"所属部门",key:"age"},{title:"操作",slot:"action",width:150,align:"center"}],data6:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park"}],drawerShow:!1,styles:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:"53px",position:"static"},formData:{name:"",type:""}}},methods:{show:function(t){this.$Modal.info({title:"User Info",content:"Name：".concat(this.data6[t].name,"<br>Age：").concat(this.data6[t].age,"<br>Address：").concat(this.data6[t].address)})},remove:function(t){this.data6.splice(t,1)}}}),s=n,l=(e("83c3"),e("2877")),i=Object(l["a"])(s,o,r,!1,null,"232a0016",null);a["default"]=i.exports},"83c3":function(t,a,e){"use strict";var o=e("001f"),r=e.n(o);r.a}}]);
//# sourceMappingURL=chunk-5b5d82a2.e88d1bff.js.map