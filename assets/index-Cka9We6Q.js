import{b as g,k as u,d as f,l as R,c as o,u as _,F as b,aQ as S,e as $,o as h,w,r as v,t as j,n as N,h as c,g as x,j as C,I as K}from"./index-BFfMGo-6.js";import{m as r,_ as E}from"./el-input-DAmIQZQJ.js";const k=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),O=Symbol("rowContextKey"),P=f({name:"ElCol"}),B=f({...P,props:k,setup(p){const e=p,{gutter:l}=R(O,{gutter:o(()=>0)}),a=_("col"),i=o(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),d=o(()=>{const t=[];return["span","offset","pull","push"].forEach(s=>{const n=e[s];b(n)&&(s==="span"?t.push(a.b(`${e[s]}`)):n>0&&t.push(a.b(`${s}-${e[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(e[s])?t.push(a.b(`${s}-${e[s]}`)):S(e[s])&&Object.entries(e[s]).forEach(([n,y])=>{t.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),l.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,m)=>(h(),$(x(t.tag),{class:N(c(d)),style:j(c(i))},{default:w(()=>[v(t.$slots,"default")]),_:3},8,["class","style"]))}});var I=E(B,[["__file","col.vue"]]);const H=C(I),L=["start","center","end","space-around","space-between","space-evenly"],A=["top","middle","bottom"],D=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:L,default:"start"},align:{type:String,values:A}}),F=f({name:"ElRow"}),J=f({...F,props:D,setup(p){const e=p,l=_("row"),a=o(()=>e.gutter);K(O,{gutter:a});const i=o(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t}),d=o(()=>[l.b(),l.is(`justify-${e.justify}`,e.justify!=="start"),l.is(`align-${e.align}`,!!e.align)]);return(t,m)=>(h(),$(x(t.tag),{class:N(c(d)),style:j(c(i))},{default:w(()=>[v(t.$slots,"default")]),_:3},8,["class","style"]))}});var Q=E(J,[["__file","row.vue"]]);const M=C(Q);export{H as E,M as a};
