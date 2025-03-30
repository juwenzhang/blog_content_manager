import{e as q}from"./el-input-B96HkrZP.js";import{f as ee}from"./el-date-picker-whSvojdK.js";import"./page-model.vue_vue_type_style_index_0_scoped_6e9fdcd0_lang-D1tnRVhx.js";import{u as te,E as oe,a as ae,b as le,c as ne,d as re,e as se,f as pe,g as ie,h as de}from"./system-CIELy8PU.js";import{d as F,L as A,m as C,y as ue,a as x,o as t,S as R,e as u,f as g,U as B,w as a,W as V,a6 as L,a7 as N,a3 as T,h as c,r as W,A as _,_ as j}from"./index-9EFiyGD-.js";import{E as G,a as J,b as X}from"./index-DjA5g-Qg.js";const ce={class:"system-user-content"},_e={class:"system-user-header"},me={class:"system-user-title"},fe={class:"system-user-table"},ye={class:"system-user-pagination"},he=F({__name:"page-content",props:{pageName:{},header:{},propsList:{},childrenTree:{}},emits:["showDialog","editData"],setup(m,{expose:b,emit:f}){const o=A({isCreate:!1,isDelete:!1,isUpdate:!1,isQuery:!1}),s=te(),d=C({}),i=C(0),w=C(()=>{}),h=C(()=>{}),k=C(1),y=C(10),l=f,z=async(p={})=>{if(o.isQuery)return;const r=y.value,E=(k.value-1)*r,D={size:r,offset:E,searchForm:p};return await s.postUserListRequest(m.pageName,D)},H=()=>{l("showDialog")},S=async p=>{const r=await s.deleteUserByIdRequest(p);r&&(d.value=r)},I=p=>{l("editData",p)};return ue(async()=>{var p;d.value=await z(),(p=d.value)!=null&&p.list&&(i.value=1/Object.keys(d.value.list[0]).length),w.value=async()=>{d.value=await z()},h.value=async()=>{d.value=await z()}}),b({fetchUserListRequest:z}),(p,r)=>{var v,$,M,O;const E=q,D=oe,n=ae,P=le;return t(),x("div",ce,[R("div",_e,[R("h2",me,B(((v=p.header)==null?void 0:v.title)??"数据列表"),1),o.isCreate?(t(),u(E,{key:0,type:"primary",size:"large",onClick:H},{default:a(()=>{var e;return[V(B(((e=p.header)==null?void 0:e.btnTitle)??"数据操作"),1)]}),_:1})):g("",!0)]),R("div",fe,[($=d.value)!=null&&$.list?(t(),u(n,{key:0,data:d.value.list,border:"",stripe:"",size:"large","row-key":(M=p.childrenTree)==null?void 0:M.rowKey},{default:a(()=>[(t(!0),x(L,null,N(p.propsList,(e,Y)=>(t(),x(L,{key:Y},[(e==null?void 0:e.type)==="index"?(t(),u(D,{key:0,type:"index",label:"序号",width:"75",align:"center"})):g("",!0),(e==null?void 0:e.type)==="selection"?(t(),u(D,{key:1,type:"selection",width:"55",align:"center"})):g("",!0),(e==null?void 0:e.type)==="normal"?(t(),u(D,T({key:2,align:"center",ref_for:!0},e),null,16)):g("",!0),e.type==="timer"?(t(),u(D,T({key:3,ref_for:!0},e,{align:"center"}),{default:a(U=>[V(B((e==null?void 0:e.prop)&&c(ee)(U.row[e==null?void 0:e.prop])),1)]),_:2},1040)):g("",!0),e.type==="handler"?(t(),u(D,{key:4,align:"center"},{header:a(()=>r[2]||(r[2]=[R("span",null,"操作",-1)])),default:a(U=>[o.isUpdate?(t(),u(E,{key:0,size:"small",type:"primary",text:"",icon:"Edit",onClick:Z=>I(U.row)},{default:a(()=>r[3]||(r[3]=[V(" 编辑 ")])),_:2},1032,["onClick"])):g("",!0),o.isDelete?(t(),u(E,{key:1,size:"small",type:"danger",text:"",icon:"Delete",onClick:Z=>S(U.row.id)},{default:a(()=>r[4]||(r[4]=[V(" 删除 ")])),_:2},1032,["onClick"])):g("",!0)]),_:1})):g("",!0),e.type==="custom"?(t(),u(D,T({key:5,align:"center",ref_for:!0},e),{default:a(U=>[W(p.$slots,e==null?void 0:e.slotName,T({ref_for:!0},U,{prop:e.prop}),void 0,!0)]),_:2},1040)):g("",!0)],64))),128))]),_:3},8,["data","row-key"])):g("",!0)]),R("div",ye,[_(P,{"current-page":k.value,"onUpdate:currentPage":r[0]||(r[0]=e=>k.value=e),"page-size":y.value,"onUpdate:pageSize":r[1]||(r[1]=e=>y.value=e),"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper",total:(O=d.value)==null?void 0:O.total,onSizeChange:w.value,onCurrentChange:h.value},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])])}}}),ge=j(he,[["__scopeId","data-v-85279989"]]),ke={class:"system-user-search"},ve={class:"system-user-btn"},Ce=F({__name:"page-search",props:{formItems:{}},emits:["queryClick","resetClick"],setup(m,{expose:b,emit:f}){console.log(m.formItems);const o=C(),s=A({}),d=f,i=()=>{var h;o.value&&((h=o.value)==null||h.resetFields(),d("resetClick"))},w=()=>{d("queryClick",s)};return b({searchForm:s}),(h,k)=>{const y=X,l=J,z=re,H=ne,S=q,I=G;return t(),x("div",ke,[_(I,{model:s,"label-width":"80px",ref_key:"formRef",ref:o,size:"large"},{default:a(()=>[_(H,{gutter:20},{default:a(()=>[(t(!0),x(L,null,N(h.formItems,(p,r)=>(t(),u(z,{key:r,span:8},{default:a(()=>[_(l,T({ref_for:!0},p),{default:a(()=>[_(y)]),_:2},1040)]),_:2},1024))),128))]),_:1}),R("div",ve,[_(S,{type:"warning",size:"large",icon:"Refresh",onClick:i},{default:a(()=>k[0]||(k[0]=[V(" 重置 ")])),_:1}),_(S,{type:"primary",size:"large",icon:"Search",onClick:w},{default:a(()=>k[1]||(k[1]=[V(" 查询 ")])),_:1})])]),_:1},8,["model"])])}}}),be=j(Ce,[["__scopeId","data-v-a602f2a3"]]),we={class:"system-user-model"},De={class:"system-user-model-form"},Ve={class:"system-user-model-dialog-footer"},xe=F({__name:"page-model",props:{header:{},propsList:{}},setup(m,{expose:b}){const f=m,o=C(),s=C(!1),i=A(function(){const y={};for(const l of f.propsList)y[l.prop]=l.initialValue??"";return y}()),w=()=>{s.value=!s.value,(()=>{var l;(l=o.value)==null||l.resetFields()})()},h=()=>{w()};return b({changeDialogVisible:w,changeFormData:y=>{w();const l=y;i.username=l.name,i.realName=l.realName,i.role=l.roleId,i.department_id=l.departmentId}}),(y,l)=>{const z=X,H=ie,S=pe,I=de,p=J,r=G,E=q,D=se;return t(),x("div",we,[_(D,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=n=>s.value=n),title:f.header.addTitle||f.header.editTitle||"新建用户",width:"30%",center:""},{footer:a(()=>[R("div",Ve,[_(E,{type:"primary",onClick:h},{default:a(()=>l[1]||(l[1]=[V("确定")])),_:1}),_(E,{onClick:w},{default:a(()=>l[2]||(l[2]=[V("取消")])),_:1})])]),default:a(()=>[R("div",De,[_(r,{"label-width":"80px",model:i,size:"large",ref_key:"formRef",ref:o},{default:a(()=>[(t(!0),x(L,null,N(f.propsList,(n,P)=>(t(),u(p,{key:P,label:n.label,prop:n.prop},{default:a(()=>[n.type==="input"?(t(),u(z,{key:0,modelValue:i[n.prop],"onUpdate:modelValue":v=>i[n.prop]=v,placeholder:n.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])):n.type==="select"?(t(),u(S,{key:1,modelValue:i[n.prop],"onUpdate:modelValue":v=>i[n.prop]=v,placeholder:n.placeholder},{default:a(()=>[(t(!0),x(L,null,N(n.options,(v,$)=>(t(),u(H,{key:$,label:v.label,value:v.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):n.type==="date"?(t(),u(I,{key:2,modelValue:i[n.prop],"onUpdate:modelValue":v=>i[n.prop]=v,type:"daterange",placeholder:n.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])):g("",!0),n.type==="custom"?W(y.$slots,n.slotName,{key:3},void 0,!0):g("",!0)]),_:2},1032,["label","prop"]))),128))]),_:3},8,["model"])])]),_:3},8,["modelValue","title"])])}}}),ze=j(xe,[["__scopeId","data-v-6e9fdcd0"]]),Q={pageName:"content",header:{title:"内容管理",btnTitle:"添加内容"},propsList:[{type:"selection",label:"选择",prop:"selection",width:"80px"},{type:"index",label:"序号",prop:"id",width:"80px"},{type:"normal",label:"内容标题",prop:"title",width:"150px"},{type:"normal",label:"内容类型",prop:"type",width:"150px"},{type:"normal",label:"内容状态",prop:"statusId",width:"150px"},{type:"normal",label:"内容作者",prop:"author",width:"150px"},{type:"handler",label:"操作",prop:"handle",width:"150px"},{type:"timer",label:"创建时间",prop:"create_time"},{type:"timer",label:"更新时间",prop:"update_time"},{type:"handler",label:"操作",width:"150px"}]},K={header:{addTitle:"新增用户",editTitle:"编辑用户"},propsList:[{type:"input",label:"用户名",prop:"username",placeholder:"请输入用户名"},{type:"input",label:"手机号",prop:"phone",placeholder:"请输入手机号"}]},Ee={formItems:[{type:"input",label:"用户名",field:"username"},{type:"input",label:"手机号",field:"phone"},{type:"input",label:"邮箱",field:"email"}]};function Re(){const m=C();return{contentRef:m,queryClickHandler:o=>{var s;(s=m.value)==null||s.fetchUserListRequest(o)},resetClickHandler:()=>{var o;(o=m.value)==null||o.fetchUserListRequest({})}}}function Se(){const m=C();function b(){var o;(o=m.value)==null||o.changeDialogVisible()}function f(o){var s;(s=m.value)==null||s.changeFormData(o)}return{modelRef:m,showDialogHandler:b,editDataHandler:f}}const Ne=F({__name:"department",setup(m){const{contentRef:b,resetClickHandler:f,queryClickHandler:o}=Re(),{modelRef:s,showDialogHandler:d,editDataHandler:i}=Se();return(w,h)=>{const k=q;return t(),x(L,null,[_(c(be),{"form-items":c(Ee).formItems,onQueryClick:c(o),onResetClick:c(f)},null,8,["form-items","onQueryClick","onResetClick"]),_(c(ge),{"page-name":c(Q).pageName,"props-list":c(Q).propsList,header:c(Q).header,onShowDialog:c(d),onEditData:c(i),ref_key:"contentRef",ref:b},null,8,["page-name","props-list","header","onShowDialog","onEditData"]),_(c(ze),{header:c(K).header,"props-list":c(K).propsList,ref_key:"modelRef",ref:s},{footer:a(()=>[_(k,{type:"primary",onClick:c(d)},{default:a(()=>h[0]||(h[0]=[V("保存")])),_:1},8,["onClick"])]),_:1},8,["header","props-list"])],64)}}});export{Ne as default};
