(function(e){function t(t){for(var i,o,n=t[0],a=t[1],l=t[2],h=0,u=[];h<n.length;h++)o=n[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],i=!0,n=1;n<c.length;n++){var a=c[n];0!==s[a]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=c[0]))}return e}var i={},s={app:0},r=[];function o(t){if(i[t])return i[t].exports;var c=i[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=i,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(c,i,function(t){return e[t]}.bind(null,i));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],a=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var d=a;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"034f":function(e,t,c){"use strict";c("85ec")},"56d7":function(e,t,c){"use strict";c.r(t);var i=c("2b0e"),s=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("HelloWorld")},r=[],o=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("img",{ref:"moxa",staticClass:"pic",attrs:{src:"media/moxa.png"}}),c("img",{ref:"gbox",staticClass:"pic",attrs:{src:"media/gbox.png"}}),c("img",{ref:"GTI_PC",staticClass:"pic",attrs:{src:"media/PC.png"}}),c("img",{ref:"GW",staticClass:"pic",attrs:{src:"media/tarelka.png"}}),c("img",{ref:"CAM",staticClass:"pic",attrs:{src:"media/cam.png"}}),c("img",{ref:"WF",staticClass:"pic",attrs:{src:"media/wi-fi.png"}}),c("img",{ref:"WFC",staticClass:"pic",attrs:{src:"media/wi-fi-client.png"}}),c("img",{ref:"commut",staticClass:"pic",attrs:{src:"media/commut.png"}}),c("img",{ref:"dell",staticClass:"pic",attrs:{src:"media/dell140.png"}}),e._v(" "+e._s(e.isawait)+" "+e._s(e.isawaitscheme)+" "),c("br"),c("select",{directives:[{name:"model",rawName:"v-model",value:e.selectcbke,expression:"selectcbke"}],on:{change:function(t){var c=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectcbke=t.target.multiple?c:c[0]}}},e._l(e.predrects,(function(t){return c("option",{key:t.id,staticClass:"item-a",domProps:{value:t}},[e._v(e._s(t.name)+" "+e._s(t.serial)+" ")])})),0),c("input",{directives:[{name:"model",rawName:"v-model",value:e.TextIP,expression:"TextIP"}],attrs:{placeholder:"IP"},domProps:{value:e.TextIP},on:{input:function(t){t.target.composing||(e.TextIP=t.target.value)}}}),c("select",{directives:[{name:"model",rawName:"v-model",value:e.SelectedType,expression:"SelectedType"}],on:{change:function(t){var c=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.SelectedType=t.target.multiple?c:c[0]}}},[c("option",{attrs:{disabled:"",value:""}},[e._v("Выберите один из вариантов")]),c("option",[e._v("GBOX")]),c("option",[e._v("GTI_PC")]),c("option",[e._v("Wi-Fi")]),c("option",[e._v("Wi-Fi_Main")]),c("option",[e._v("Camera")]),c("option",[e._v("Video_reg")]),c("option",[e._v("Moxa")]),c("option",[e._v("Gateway")]),c("option",[e._v("GBOX_Reserve")]),c("option",[e._v("Switch")]),c("option",[e._v("Dell140")])]),c("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedServices,expression:"checkedServices"}],attrs:{type:"checkbox",id:"GTI",value:"0"},domProps:{checked:Array.isArray(e.checkedServices)?e._i(e.checkedServices,"0")>-1:e.checkedServices},on:{change:function(t){var c=e.checkedServices,i=t.target,s=!!i.checked;if(Array.isArray(c)){var r="0",o=e._i(c,r);i.checked?o<0&&(e.checkedServices=c.concat([r])):o>-1&&(e.checkedServices=c.slice(0,o).concat(c.slice(o+1)))}else e.checkedServices=s}}}),c("label",{attrs:{for:"GTI"}},[e._v("GTI")]),c("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedServices,expression:"checkedServices"}],attrs:{type:"checkbox",id:"ZTS",value:"1"},domProps:{checked:Array.isArray(e.checkedServices)?e._i(e.checkedServices,"1")>-1:e.checkedServices},on:{change:function(t){var c=e.checkedServices,i=t.target,s=!!i.checked;if(Array.isArray(c)){var r="1",o=e._i(c,r);i.checked?o<0&&(e.checkedServices=c.concat([r])):o>-1&&(e.checkedServices=c.slice(0,o).concat(c.slice(o+1)))}else e.checkedServices=s}}}),c("label",{attrs:{for:"ZTS"}},[e._v("ZTS")]),c("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedServices,expression:"checkedServices"}],attrs:{type:"checkbox",id:"KRS",value:"2"},domProps:{checked:Array.isArray(e.checkedServices)?e._i(e.checkedServices,"2")>-1:e.checkedServices},on:{change:function(t){var c=e.checkedServices,i=t.target,s=!!i.checked;if(Array.isArray(c)){var r="2",o=e._i(c,r);i.checked?o<0&&(e.checkedServices=c.concat([r])):o>-1&&(e.checkedServices=c.slice(0,o).concat(c.slice(o+1)))}else e.checkedServices=s}}}),c("label",{attrs:{for:"KRS"}},[e._v("KRS")]),c("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedServices,expression:"checkedServices"}],attrs:{type:"checkbox",id:"GRP",value:"3"},domProps:{checked:Array.isArray(e.checkedServices)?e._i(e.checkedServices,"3")>-1:e.checkedServices},on:{change:function(t){var c=e.checkedServices,i=t.target,s=!!i.checked;if(Array.isArray(c)){var r="3",o=e._i(c,r);i.checked?o<0&&(e.checkedServices=c.concat([r])):o>-1&&(e.checkedServices=c.slice(0,o).concat(c.slice(o+1)))}else e.checkedServices=s}}}),c("label",{attrs:{for:"KRS"}},[e._v("GRP")]),c("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedServices,expression:"checkedServices"}],attrs:{type:"checkbox",id:"VID",value:"4"},domProps:{checked:Array.isArray(e.checkedServices)?e._i(e.checkedServices,"4")>-1:e.checkedServices},on:{change:function(t){var c=e.checkedServices,i=t.target,s=!!i.checked;if(Array.isArray(c)){var r="4",o=e._i(c,r);i.checked?o<0&&(e.checkedServices=c.concat([r])):o>-1&&(e.checkedServices=c.slice(0,o).concat(c.slice(o+1)))}else e.checkedServices=s}}}),c("label",{attrs:{for:"VID"}},[e._v("VIDEO")]),c("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedServices,expression:"checkedServices"}],attrs:{type:"checkbox",id:"REP",value:"5"},domProps:{checked:Array.isArray(e.checkedServices)?e._i(e.checkedServices,"5")>-1:e.checkedServices},on:{change:function(t){var c=e.checkedServices,i=t.target,s=!!i.checked;if(Array.isArray(c)){var r="5",o=e._i(c,r);i.checked?o<0&&(e.checkedServices=c.concat([r])):o>-1&&(e.checkedServices=c.slice(0,o).concat(c.slice(o+1)))}else e.checkedServices=s}}}),c("label",{attrs:{for:"REP"}},[e._v("REPORTING")]),c("button",{on:{click:e.addKE}},[e._v("ADD")]),e._v(" "+e._s(e.TextIP)+" "),c("br"),c("button",{on:{click:e.save}},[e._v("save")]),c("br"),e._l(e.rectangle,(function(t){return c("div",{key:t.id,staticClass:"item-inline"},[c("div",{attrs:{id:"d1"}},[e._v(" "+e._s(t.name)+" "+e._s(t.id)+" "),c("button",{on:{click:function(c){return e.deleteke(t.id)}}},[e._v("Удалить")])])])})),c("div",{staticClass:"container"},[c("div",{staticClass:"stages"},[c("v-stage",{ref:"stage",attrs:{config:e.stageSize},on:{click:e.clickhandler}},[c("v-layer",{ref:"layer"})],1)],1),c("div",{staticClass:"tower"},[e._v(" "+e._s(e.clickedobject)+" Связать с: "+e._s(e.prevclicked)+" "),c("br"),c("button",{on:{click:e.addcons}},[e._v("Add connector")]),c("br"),e._l(e.cons,(function(t){return c("div",{key:t},[e._v(" "+e._s(t)+" "),c("button",{on:{click:function(c){return e.deleteconn(t)}}},[e._v("Удалить")])])}))],2)])],2)},n=[],a=c("bc3a"),l=c.n(a),d=c("21a6"),h=c.n(d),u=c("362d"),v=c.n(u);const p=.7*window.innerWidth,f=window.innerHeight-150;var g={name:"HelloWorld",data(){return{isawaitscheme:"Ожидаем загрузку схемы.",isawait:"Ожидаем информации по скважине.",clickedobject:"",prevclicked:"",selectcbke:null,wellkeinfo:null,chosed:null,SelectWELL:null,toshow:null,SelectPR:null,projs:null,wells:null,cons:[],selectKE:null,checkedServices:[],connecters:null,counterobjects:0,SelectedType:null,TextIP:null,wellname:null,wellinfo:null,sourceGbox:new Image(100,50),sourceGTI:new Image(100,50),sourceGateway:new Image(100,50),sourceCam:new Image(100,50),sourceWiFi:new Image(100,50),sourceWiFiClient:new Image(100,50),sourceMoxa:new Image(100,50),sourceSwitch:new Image(100,50),sourceDell:new Image(100,50),list:null,confnewline:null,stage:null,rectX:[],rectY:[],kenow:"-1",tester:null,prevdata:null,prevtrigg:0,stageSize:{width:p,height:f,id:"foo"},configLine:{points:[],stroke:"black",strokeWidth:2},isDragging:!1,rectangle:[],predrects:[{name:"Newobject",id:"-1"}]}},watch:{prevdata:function(){this.isawaitscheme="Схема загружена."},wellkeinfo:function(){this.isawait="Информация по КЕ загружена."},clickedobject:function(){this.load()},SelectPR:function(){this.setToshow()},SelectWELL:function(){this.chosed=Date.now().valueOf()},selectcbke:function(){"Newobject"!=this.selectcbke.name?(this.replacr(this.selectcbke.id),this.tester=1):(this.kenow=String(parseInt(Date.now().valueOf())%1e6)+String(this.counterobjects),this.tester=0)}},beforeMount(){this.getKEs()},mounted(){console.log(location.host),console.log(this.$refs.layer.getNode())},methods:{clickhandler(e){console.log(e);let t="nachalo";console.log(this.clickedobject),console.log(t),null!=e.target.parent?(t=e.target.parent.attrs.id,console.log("clicked on",e.target.parent.attrs.id,t),this.helpfun(t)):(this.prevclicked="",this.clickedobject="")},helpfun(e){""==this.prevclicked?this.prevclicked=this.clickedobject:this.prevclicked="",this.clickedobject=e,console.log(this.clickedobject),console.log("prev"+this.prevclicked)},deleteke(e){let t=this.rectangle;for(let[i,s]of t.entries())s.id==e&&t.splice(i,1);this.rectangle=t;let c=this.cons;for(let[i,s]of c.entries())s[0]!=e&&s[1]!=e||c.splice(i,1);this.cons=c,this.load()},deleteconn(e){let t=this.cons;for(let[c,i]of t.entries())i==e&&t.splice(c,1);this.cons=t,this.load()},replacr(e){this.kenow=e,console.log(this.kenow)},prevfun(){console.log("PREVDATA",this.prevdata),this.prevtrigg=0,0!=this.prevdata.Wellinfo.length&&(this.prevtrigg=1),console.log("PREVDATA TO CHANGE",this.prevtrigg),this.cons=this.prevdata.Connecters,this.rectangle=this.prevdata.Wellinfo,this.load(),this.counterobjects=this.SelectWELL.monitorstatus,console.log(this.counterobjects)},getKEs(){l.a.get("startup").then(e=>(this.wellkeinfo=e.data,this.setcbke())),l.a.get("startupscheme").then(e=>(this.prevdata=e.data,this.prevfun()))},setcbke(){var e=[{name:"Newobject",id:"-1"}];this.wellkeinfo.forEach((function(t){e.push({name:t.type,id:String(t.CbId),serial:t.serial})})),this.predrects=e},setToshow:function(){let e=[],t=this.wellinfo,c=this.SelectPR;t.forEach((function(t){t.projectid==c&&e.push({Name:t.Name,id:t.id,monitorstatus:t.monitorstatus})})),this.toshow=e,console.log(e)},setWells(){let e=[],t=[],c=this.wellinfo;c.forEach((function(c,i,s){var r=e.findIndex(e=>e.Name==c.projectid);-1==r?(e.push({Name:s[i].projectid}),t.push({prid:e.findIndex(e=>e.Name==c.projectid),Name:s[i].Name})):t.push({prid:e.findIndex(e=>e.Name==c.projectid),Name:s[i].Name})})),this.projs=e,this.wells=t},addcons(){var e=String(this.clickedobject);let t=String(this.prevclicked);console.log(e),null!=this.clickedobject&&null!=this.prevclicked&&this.cons.push([e,t]),console.log(this.selectKE),console.log(this.cons),this.clickedobject="",this.prevclicked="",this.load()},addKE(){let e="";console.log(this.kenow),0==this.tester?(e=String(parseInt(Date.now().valueOf())%1e6)+String(this.counterobjects),console.log("NEWKE")):(e=this.kenow,console.log("OLDKE")),console.log(e),this.rectangle.push({x:146,y:269,width:100,height:100,fill:"green",prtext:"",name:this.SelectedType,cornerRadius:10,ip:this.TextIP,services:this.checkedServices,shadowColor:"black",shadowBlur:5,shadowOpacity:.8,shadowOffset:{x:5,y:5},id:e}),this.kenow=e,console.log(),this.kenow==String(parseInt(Date.now().valueOf())%1e6)+String(this.counterobjects)&&(this.counterobjects=this.counterobjects+1),console.log(e,String(Date.now().valueOf())+"100"+this.counterobjects),this.load()},setImages(){console.log("SETTING"),this.sourceGbox.src=this.$refs.gbox.src,this.sourceGTI.src=this.$refs.GTI_PC.src,this.sourceGateway.src=this.$refs.GW.src,this.sourceCam.src=this.$refs.CAM.src,this.sourceWiFi.src=this.$refs.WF.src,this.sourceWiFiClient.src=this.$refs.WFC.src,this.sourceMoxa.src=this.$refs.moxa.src,this.sourceSwitch.src=this.$refs.commut.src,this.sourceDell.src=this.$refs.dell.src,console.log("ENDSETTING",this.sourceGbox.src,this.sourceMoxa)},load(){this.setImages(),console.log(this.rectangle),this.Connectors()},save(){localStorage.setItem("storage",JSON.stringify(this.rectangle)),console.log(JSON.stringify(Date.now().valueOf())),console.log(JSON.stringify(this.rectangle)),console.log(JSON.stringify(this.cons));let e="",t="";console.log("PREVTRIG",this.prevtrigg),console.log(this.prevdata),0==this.prevtrigg?(e="post",t="createwell",this.prevtrigg=1):(e="put",t="updatewell");var c=new Blob([JSON.stringify({status:1,wellid:parseInt(this.wellkeinfo[0].wellid),connectors:JSON.stringify(this.rectangle),lines:JSON.stringify(this.cons)})],{type:"applications/json;charset=utf-8"});h.a.saveAs(c,"static.txt"),l()({method:e,url:t,data:{status:1,wellid:parseInt(this.wellkeinfo[0].wellid),connectors:JSON.stringify(this.rectangle),lines:JSON.stringify(this.cons)}})},Connectors:function(){let e=this.prevclicked,t=this.clickedobject,c=this.$refs.layer.getNode();c.children.splice(0,c.children.length);var i=this.cons;function s(){let e=[];return console.log(i),i.forEach((function(t){console.log(t);var c=t[0],i=t[1];e.push({id:"connector-"+e.length,from:c,to:i})})),e}function r(e,t){return[e.x+50,e.y+50,t.x+50,t.y+50]}var o=s(),n=this.rectangle;function a(){n.forEach(e=>{var t=c.findOne("#"+e.id);t.x(e.x),t.y(e.y)}),n.forEach(e=>{var t=c.findOne("#"+e.id);t.x(e.x),t.y(e.y)}),o.forEach(e=>{var t=c.findOne("#"+e.id),i=c.findOne("#"+e.from),s=c.findOne("#"+e.to);const o=r(i.position(),s.position());t.points(o)}),c.batchDraw()}this.confnewline=o,o.forEach(e=>{var t=new v.a.Line({stroke:"black",id:e.id,fill:"black"});c.add(t)}),n.forEach(i=>{var s=new Image(100,50);"GBOX"==i.name||"GBOX_Reserve"==i.name?s=this.sourceGbox:"Gateway"==i.name?s=this.sourceGateway:"GTI_PC"==i.name||"Video_reg"==i.name?s=this.sourceGTI:"Moxa"==i.name?s=this.sourceMoxa:"Camera"==i.name?s=this.sourceCam:"Wi-Fi"==i.name?s=this.sourceWiFiClient:"Wi-Fi_Main"==i.name?s=this.sourceWiFi:"RUH"==i.name?s=this.sourceMoxa:"Dell140"==i.name?s=this.sourceDell:"Switch"==i.name&&(s=this.sourceSwitch);let r="green";i.id!=e&&i.id!=t||(r="yellow");var o=new v.a.Rect({y:50,draggable:!1,fill:r,width:100,height:50,shadowBlur:10}),n=new v.a.Group({id:i.id,fill:i.fill,x:i.x,y:i.y,width:100,height:100,shadowBlur:10,draggable:!0}),l=new v.a.Text({text:i.name+"\n"+i.ip,fontSize:14,id:i.id,y:60,draggable:!1}),d=new v.a.Image({image:s,width:100,height:50});n.add(o),n.add(l),n.add(d),c.add(n),n.on("dragmove",()=>{i.x=n.x(),i.y=n.y(),a()})}),setTimeout(a,70)},apiRes:function(){this.Connectors()}}},m=g,k=(c("af1f"),c("2877")),w=Object(k["a"])(m,o,n,!1,null,null,null),S=w.exports,b={name:"App",components:{HelloWorld:S}},y=b,_=(c("034f"),Object(k["a"])(y,s,r,!1,null,null,null)),x=_.exports,I=c("7591"),j=c.n(I);i["default"].use(j.a),i["default"].config.productionTip=!1,new i["default"]({render:e=>e(x)}).$mount("#app")},"85ec":function(e,t,c){},af1f:function(e,t,c){"use strict";c("b7f5")},b7f5:function(e,t,c){}});
//# sourceMappingURL=app.9629443b.js.map