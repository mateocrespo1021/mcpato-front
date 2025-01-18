import './polyfills.server.mjs';
import{c as F,d as N}from"./chunk-C5YD5MOK.mjs";import{a as $,b as O}from"./chunk-YPFCLQYT.mjs";import"./chunk-RHAAPE3N.mjs";import"./chunk-C27HXZ5M.mjs";import{b as k,c as E}from"./chunk-GUB6ADBC.mjs";import"./chunk-BD5QBZBR.mjs";import{j as M,k as T,m as V}from"./chunk-MXP5DA67.mjs";import"./chunk-M5W5VWE7.mjs";import"./chunk-XKXUENXH.mjs";import{A as w}from"./chunk-MZQYRCJF.mjs";import{a as j}from"./chunk-LDD7U23Q.mjs";import{Gb as u,Ib as d,Oa as i,Ob as S,Oc as P,Pb as h,Pc as y,T as f,Uc as I,X as g,bb as p,ea as v,fa as x,hb as n,pb as r,qb as a,rb as _,vb as C,xb as b,yb as s}from"./chunk-H7TBDE3E.mjs";import"./chunk-5XUXGTUW.mjs";var z=()=>({"left.px":5,"top.px":5});function B(e,c){if(e&1&&_(0,"p-tag",14),e&2){let t=s().$implicit,o=s(2);n("value",o.amountProduct(t.id))("ngStyle",h(2,z))}}function D(e,c){if(e&1&&(r(0,"span",15),u(1),a()),e&2){let t=s().$implicit;i(),d("$",t.discount,"")}}function L(e,c){if(e&1){let t=C();r(0,"div",4)(1,"div",5)(2,"div",6),_(3,"app-lazy-image",7),p(4,B,1,3,"p-tag",8),a()(),r(5,"div",9),u(6),a(),r(7,"div",10)(8,"div",11),u(9),p(10,D,2,1,"span",12),a(),r(11,"span")(12,"p-button",13),b("click",function(){let l=v(t).$implicit,m=s(2);return x(m.showModal(l))}),a()()()()}if(e&2){let t=c.$implicit,o=s(2);i(3),n("url",o.baseProducts+t.image+".webp")("alt",t.name),i(),n("ngIf",o.amountProduct(t.id)),i(2),d(" ",t.name," "),i(3),d(" ","$"+t.price," "),i(),n("ngIf",t.discount!=0),i(2),n("disabled",!t.status)("label",t.status?"":"No disponible")}}function q(e,c){if(e&1&&(r(0,"p-carousel",2),p(1,L,13,8,"ng-template",3),a()),e&2){let t=s();n("value",t.products)("numVisible",4)("numScroll",3)("responsiveOptions",t.responsiveOptions)}}var mt=(()=>{class e{constructor(){this.modalProduct=f(O),this.cartsService=f($),this.baseProducts=V.baseProducts,this.products=[],this.responsiveOptions=[{breakpoint:"1199px",numVisible:4,numScroll:4},{breakpoint:"991px",numVisible:3,numScroll:3},{breakpoint:"800px",numVisible:2,numScroll:2},{breakpoint:"600px",numVisible:1,numScroll:1}]}get currentCart(){return this.cartsService.cartSignal}get currentProduct(){return this.modalProduct.productSignal}get stateModal(){return this.modalProduct.modalSignal()}get modal(){return this.modalProduct.modalSignal}showModal(t){this.currentProduct.set(t),this.modal.set(!0)}amountProduct(t){let o=this.currentCart().reduce((l,m)=>m.product.id===t?l+m.amount:l,0);return o?o.toString():""}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=g({type:e,selectors:[["app-carousel-products"]],inputs:{products:"products"},standalone:!0,features:[S],decls:2,vars:1,consts:[[1,"card"],["showIndicators","false",3,"value","numVisible","numScroll","responsiveOptions",4,"ngIf"],["showIndicators","false",3,"value","numVisible","numScroll","responsiveOptions"],["pTemplate","item"],[1,"border-1","surface-border","border-round","m-2","p-3"],[1,"mb-3"],[1,"relative","mx-auto"],[3,"url","alt"],["severity","success","class","absolute",3,"value","ngStyle",4,"ngIf"],[1,"mb-3","font-medium"],[1,"flex","justify-content-between","align-items-center"],[1,"mt-0","font-semibold","text-xl"],["class","text-danger","style","text-decoration: line-through;",4,"ngIf"],["icon","pi pi-shopping-cart","severity","warning","styleClass","ml-2",3,"click","disabled","label"],["severity","success",1,"absolute",3,"value","ngStyle"],[1,"text-danger",2,"text-decoration","line-through"]],template:function(o,l){o&1&&(r(0,"div",0),p(1,q,2,4,"p-carousel",1),a()),o&2&&(i(),n("ngIf",l.products.length))},dependencies:[I,P,y,N,F,w,T,M,E,k,j]})}}return e})();export{mt as CarouselProductsComponent};
