(function(t){function e(e){for(var i,o,d=e[0],r=e[1],c=e[2],u=0,p=[];u<d.length;u++)o=d[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,d=1;d<n.length;d++){var r=n[d];0!==a[r]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],r=d.push.bind(d);d.push=e,d=d.slice();for(var c=0;c<d.length;c++)e(d[c]);var l=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("32b5")},"32b5":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[1==t.wysiwyg?n("button",{ref:"addBtn",staticClass:"btn mb-2",attrs:{type:"button"}},[t._v(" Add Pin ")]):t._e(),1==t.wysiwyg?n("donkeytail-modal",{attrs:{parent:"canvas"},on:{added:function(e){return t.addPin(e)}}}):t._e(),n("div",{ref:"canvas",staticClass:"rounded leading-0 relative",class:t.wysiwyg?"":"overflow-hidden",attrs:{id:t.namespacedId+"-canvas"}},[n("img",{ref:"image",staticClass:"w-full",attrs:{src:t.canvasUrl}}),t.showPins?n("div",t._l(t.pins,function(e){return n("donkeytail-pin",{key:"pin-"+e.id,attrs:{pin:e,"canvas-id":t.namespacedId+"-canvas",wysiwyg:t.wysiwyg},on:{positioned:function(e){return t.setPinPosition(e)},updated:function(e){return t.updated(e)},deleted:function(e){return t.deleted(e)}}})}),1):t._e(),t._l(t.pins,function(e){return n("div",{key:"pinput-"+e.id},[n("input",{attrs:{type:"hidden",name:t.name+"[meta]["+e.id+"]"}}),n("input",{attrs:{type:"hidden",name:t.name+"[meta]["+e.id+"][id]"},domProps:{value:e.id}}),n("input",{attrs:{type:"hidden",name:t.name+"[meta]["+e.id+"][label]"},domProps:{value:e.label}}),t.wysiwyg?n("input",{attrs:{type:"hidden",name:t.name+"[meta]["+e.id+"][description]"},domProps:{value:e.description}}):t._e(),n("input",{attrs:{type:"hidden",name:t.name+"[meta]["+e.id+"][x]"},domProps:{value:e.x}}),n("input",{attrs:{type:"hidden",name:t.name+"[meta]["+e.id+"][y]"},domProps:{value:e.y}})])})],2)],1)},s=[],o=(n("a4d3"),n("e01a"),n("4de4"),n("c740"),n("4160"),n("caad"),n("a434"),n("a9e3"),n("b64b"),n("2532"),n("159b"),n("b85c")),d=n("5530"),r={props:{namespacedId:{type:String,required:!0},name:{type:String,required:!0},value:{type:Number},meta:{type:[Object,Array]},wysiwyg:{type:Boolean,default:!1}},data:function(){return{canvasUrl:!1,showPins:!1,pins:[],tippy:null}},methods:{addPin:function(t){this.pins.push({id:Math.floor(999999*Math.random()),label:t.label,description:t.description,x:50,y:50})},getCanvasUrl:function(t){var e=this;window.axios({method:"post",url:"/actions/donkeytail/default/get-asset",data:{assetId:t,requestId:1},headers:{"X-CSRF-Token":window.csrfToken}}).then(function(t){e.canvasUrl=t.data,e.$refs.image.onload=function(){$("#".concat(e.namespacedId,"-pane")).velocity({height:$("#".concat(e.namespacedId,"-pane")).get(0).scrollHeight,padding:"24px",opacity:1},400,"easeInOut",function(){$(this).css("height","auto"),e.showPins=!0})}}).catch(function(t){console.log(t)})},setPinPosition:function(t){var e=this.pins.findIndex(function(e){return e.id===t.id});Object.assign(this.pins[e],t)},updated:function(t){var e=this.pins.findIndex(function(e){return e.id===t.id});this.$set(this.pins,e,Object(d["a"])(Object(d["a"])({},this.pins[e]),t))},deleted:function(t){var e=this.pins.findIndex(function(e){return e.id===t.id});this.$delete(this.pins,e)}},mounted:function(){var t=this;if(t.value&&(t.getCanvasUrl(t.value),t.meta&&Object.keys(t.meta).length)){for(var e=[],n=0,i=Object.keys(t.meta);n<i.length;n++){var a=i[n];t.meta[a].id=Number(t.meta[a].id),t.meta[a].x=Number(t.meta[a].x),t.meta[a].y=Number(t.meta[a].y),e.push(t.meta[a])}t.pins=e}$(document).ready(function(){$("#".concat(t.namespacedId,"-canvasId")).data("elementSelect").on("selectElements",function(e){console.log(e),t.getCanvasUrl(e.elements[0].id)}),$("#".concat(t.namespacedId,"-canvasId")).data("elementSelect").on("removeElements",function(e){t.canvasUrl=!1,$("#".concat(t.namespacedId,"-pane")).velocity({height:0,padding:0,opacity:0},{duration:400,easing:"easeInOut"})}),$("#".concat(t.namespacedId,"-pins")).data("elementSelect").on("selectElements",function(e){var n=e.elements.filter(function(e){return!t.pins.includes(e)});n.forEach(function(e){t.pins.push({id:e.id,label:e.label,x:50,y:50})})}),$("#".concat(t.namespacedId,"-pins")).data("elementSelect").on("removeElements",function(e){var n,i=[],a=Object(o["a"])(e.target.elementSelect.$items);try{for(a.s();!(n=a.n()).done;){var s=n.value;i.push(Number(s.getAttribute("data-id")))}}catch(c){a.e(c)}finally{a.f()}var d=t.pins.filter(function(t){return!i.includes(t.id)})[0],r=t.pins.findIndex(function(t){return t.id==d.id});t.pins.splice(r,1)})})}},c=r,l=n("2877"),u=Object(l["a"])(c,a,s,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"pin",staticClass:"-ml-2 -mt-2 h-4 w-4 rounded-full border-white shadow-sm border-2 border-solid border-opacity-90 bg-black bg-opacity-50 absolute z-10 top-0 left-0 cursor-move flex items-center justify-center"},[n("div",{staticClass:"h-1 w-1 rounded-full bg-white bg-opacity-90",staticStyle:{margin:"0!important"}}),t.wysiwyg?n("donkeytail-modal",{attrs:{label:t.pin.label,description:t.pin.description,parent:"pin"},on:{updated:function(e){return t.updated(e)},deleted:function(e){return t.deleted(e)}}}):t._e()],1)},m=[],h=(n("b680"),n("ce88")),v=n.n(h),y=n("6f9a"),b=(n("52df"),n("b91c"),{props:["canvas-id","pin","wysiwyg"],data:function(){return{draggie:null,canvas:null,position:{x:0,y:0}}},methods:{setPosition:function(){var t=this.canvas.getBoundingClientRect().width,e=this.canvas.getBoundingClientRect().height,n=this.position.x*t/100,i=this.position.y*e/100;this.draggie.setPosition(n,i)},updated:function(t){this.$emit("updated",Object(d["a"])({id:this.pin.id},t))},deleted:function(t){this.$emit("deleted",{id:this.pin.id})}},mounted:function(){var t=this;if(this.canvas=document.getElementById(t.canvasId),this.position.x=this.pin.x,this.position.y=this.pin.y,this.draggie=new v.a(this.$refs.pin,{containment:t.canvas}),t.wysiwyg||Object(y["a"])(t.$refs.pin,{content:t.pin.label,moveTransition:"transform 0.35s ease-in-out"}),0!==this.position.x||0!==this.position.y){this.setPosition(),window.addEventListener("resize",this.setPosition),new ResizeObserver(this.setPosition).observe(document.getElementById("content-container"));var e=document.getElementById("tabs");e&&e.addEventListener("click",this.setPosition)}this.draggie.on("dragEnd",function(){var e=0,n=this.position.x+e,i=this.position.y+e,a=t.canvas.getBoundingClientRect().width,s=t.canvas.getBoundingClientRect().height,o=n/a*100,d=i/s*100;t.position.x=Math.max(0,Number(o.toFixed(3))),t.position.y=Math.max(0,Number(d.toFixed(3))),t.$emit("positioned",{id:t.pin.id,x:t.position.x,y:t.position.y})})},destroyed:function(){window.removeEventListener("resize",this.setPosition)}}),g=b,w=Object(l["a"])(g,f,m,!1,null,null,null),x=w.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"pinModal",staticClass:"p-3",staticStyle:{width:"500px"}},[n("div",{staticClass:"field mb-4"},[t._m(0),n("div",{staticClass:"input ltr"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pin.title,expression:"pin.title"}],staticClass:"text fullwidth",attrs:{type:"text",name:"title",autofocus:"",autocomplete:"off"},domProps:{value:t.pin.title},on:{input:[function(e){e.target.composing||t.$set(t.pin,"title",e.target.value)},function(e){return t.input(e)}]}})])]),n("div",{staticClass:"field mb-4"},[t._m(1),n("div",{staticClass:"input ltr"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"donkeytail-redactor block opacity-0",staticStyle:{"min-height":"110px"},attrs:{name:"description",autofocus:"",autocomplete:"off"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),"pin"==t.parent?n("button",{staticClass:"btn block ml-auto",on:{click:function(e){return e.preventDefault(),t.deletePin()}}},[t._v(" Delete Pin ")]):t._e(),"canvas"==t.parent?n("button",{staticClass:"btn submit block ml-auto",class:t.canAdd?"":"opacity-50",attrs:{disabled:!t.canAdd&&"disabled"},on:{click:function(e){return e.preventDefault(),t.addPin()}}},[t._v(" Add ")]):t._e()])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("label",{staticClass:"required"},[t._v("Title")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("label",{staticClass:"required"},[t._v("Description")])])}],k={props:["parent","label","description"],data:function(){return{pin:{title:"",description:""},tippy:null,canAdd:!1}},methods:{addPin:function(){this.$emit("added",{label:this.pin.title,description:this.pin.description}),this.tippy.hide()},deletePin:function(){this.$emit("deleted"),this.tippy.hide()},input:function(t){"pin"==this.parent?this.$emit("updated",{label:this.pin.title,description:this.pin.description}):this.pin.title&&this.pin.title.length>0&&(this.canAdd=!0)}},mounted:function(){var t=this,e="pin"==this.parent?"pin":"addBtn";this.tippy=Object(y["a"])(t.$parent.$refs[e],{content:t.$refs.pinModal,trigger:"click",theme:"light-border",allowHTML:!0,hideOnClick:"toggle",interactive:!0,maxWidth:600,zIndex:1e3,onClickOutside:function(t,e){console.log(e),t.hide()},onShown:function(){$(".donkeytail-redactor").redactor({buttons:["html","bold","italic","lists","link","image","horizontalrule"],plugins:["alignment","source"],callbacks:{synced:function(e){t.pin.description=e,t.input()}}})}}),this.pin.title=this.label}},O=k,C=Object(l["a"])(O,P,_,!1,null,null,null),I=C.exports;n("d109"),n("df24");n.p="http://localhost:8080/",i["a"].config.productionTip=!1;var j={install:function(t){t.component("donkeytail-canvas",p),t.component("donkeytail-pin",x),t.component("donkeytail-modal",I)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(j);var E=function(t){return{el:t.detail}};window.addEventListener("build",function(t){new window.Vue(E(t))},!1)},d109:function(t,e,n){}});