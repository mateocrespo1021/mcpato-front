import './polyfills.server.mjs';
import{a as B,b as q,d as G}from"./chunk-FPYMEHWE.mjs";import{a as z,b as L}from"./chunk-YPFCLQYT.mjs";import{a as A}from"./chunk-QVWED6R6.mjs";import{g as k,h as D}from"./chunk-KS3KDHAX.mjs";import{b as $,c as N}from"./chunk-GUB6ADBC.mjs";import{j as V,k as I,m as j}from"./chunk-MXP5DA67.mjs";import"./chunk-M5W5VWE7.mjs";import"./chunk-XKXUENXH.mjs";import"./chunk-YMBN7AH5.mjs";import{A as T,l as E}from"./chunk-MZQYRCJF.mjs";import{a as R}from"./chunk-LDD7U23Q.mjs";import{Gb as u,Hb as g,Mc as b,Nc as S,Oa as i,Ob as w,Oc as F,Pb as h,Pc as O,Qb as P,T as c,Uc as M,X as y,bb as d,ea as f,fa as x,hb as l,pb as n,qb as a,rb as _,vb as v,xb as C,yb as s}from"./chunk-H7TBDE3E.mjs";import"./chunk-5XUXGTUW.mjs";var H=e=>({"border-top-1 surface-border":e}),J=()=>({"left.px":5,"top.px":5});function K(e,m){if(e&1){let t=v();n(0,"div",5)(1,"p-dropdown",6),C("onChange",function(o){f(t);let p=s();return x(p.onSortChange(o))}),a()()}if(e&2){let t=s();i(),l("options",t.sortOptions)}}function Q(e,m){if(e&1&&_(0,"p-tag",22),e&2){let t=s().$implicit,r=s(2);l("value",r.amountProduct(t.id))("ngStyle",h(2,J))}}function U(e,m){if(e&1){let t=v();n(0,"div",9)(1,"div",10)(2,"div",11),_(3,"app-lazy-image",12),d(4,Q,1,3,"p-tag",13),a(),n(5,"div",14)(6,"div",15)(7,"div")(8,"span",16),u(9),a(),n(10,"div",17),u(11),a()()(),n(12,"div",18)(13,"span",19),u(14),a(),n(15,"div",20)(16,"p-button",21),C("click",function(){let o=f(t).$implicit,p=s(2);return x(p.showModal(o))}),a()()()()()()}if(e&2){let t=m.$implicit,r=m.first,o=s(2);i(),l("ngClass",P(7,H,!r)),i(2),l("url",o.baseProducts+t.image+".webp")("alt",t.name),i(),l("ngIf",o.amountProduct(t.id)),i(5),g(t.category),i(2),g(t.name),i(3),g("$"+t.price)}}function W(e,m){if(e&1&&(n(0,"div",7),d(1,U,17,9,"div",8),a()),e&2){let t=m.$implicit;i(),l("ngForOf",t)}}var vt=(()=>{class e{constructor(){this.productExplorer=c(B),this.modalProduct=c(L),this.cartsService=c(z),this.baseProducts=j.baseProducts}get currentCart(){return this.cartsService.cartSignal}get products(){return this.productExplorer.proExSignal}get currentProduct(){return this.modalProduct.productSignal}get modal(){return this.modalProduct.modalSignal}ngOnInit(){this.sortOptions=[{label:"Precio alto a bajo",value:"!price"},{label:"Precio bajo a alto",value:"price"}]}showModal(t){this.currentProduct.set(t),this.modal.set(!0)}amountProduct(t){let r=this.currentCart().reduce((o,p)=>p.product.id===t?o+p.amount:o,0);return r?r.toString():""}onSortChange(t){let r=t.value;r.indexOf("!")===0?(this.sortOrder=-1,this.sortField=r.substring(1,r.length)):(this.sortOrder=1,this.sortField=r)}counterArray(t){return Array(t)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=y({type:e,selectors:[["app-products-category"]],standalone:!0,features:[w],decls:5,vars:5,consts:[["dv",""],[1,"card"],[3,"value","rows","paginator","sortField","sortOrder"],["pTemplate","header"],["pTemplate","list"],[1,"flex","flex-column","md:flex-row","md:justify-content-between"],["placeholder","Ordenar Por Precio","styleClass","mb-2 md:mb-0",3,"onChange","options"],[1,"grid","grid-nogutter"],["class","col-12",4,"ngFor","ngForOf"],[1,"col-12"],[1,"flex","flex-column","sm:flex-row","sm:align-items-center","p-4","gap-3",3,"ngClass"],[1,"md:w-10rem","relative"],[1,"block","xl:block","mx-auto","border-round","w-full",3,"url","alt"],["severity","success","class","absolute",3,"value","ngStyle",4,"ngIf"],[1,"flex","flex-column","md:flex-row","justify-content-between","md:align-items-center","flex-1","gap-4"],[1,"flex","flex-row","md:flex-column","justify-content-between","align-items-start","gap-2"],[1,"font-medium","text-secondary","text-sm"],[1,"text-lg","font-medium","text-900","mt-2"],[1,"flex","flex-column","md:align-items-end","gap-5"],[1,"text-xl","font-semibold","text-900"],[1,"flex","flex-row-reverse","md:flex-row","gap-2"],["icon","pi pi-shopping-cart","severity","warning","label","Agregar",1,"flex-auto","md:flex-initial","white-space-nowrap",3,"click"],["severity","success",1,"absolute",3,"value","ngStyle"]],template:function(r,o){r&1&&(n(0,"div",1)(1,"p-dataView",2,0),d(3,K,2,1,"ng-template",3)(4,W,2,1,"ng-template",4),a()()),r&2&&(i(),l("value",o.products())("rows",5)("paginator",!0)("sortField",o.sortField)("sortOrder",o.sortOrder))},dependencies:[M,b,S,F,O,G,q,T,I,V,N,$,A,D,k,E,R],styles:["[_nghost-%COMP%]{display:block}"]})}}return e})();export{vt as ProductsCategoryComponent};
