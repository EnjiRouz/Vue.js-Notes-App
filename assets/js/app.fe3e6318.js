(function(e){function t(t){for(var n,a,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},o={app:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"0f86":function(e,t,i){},1935:function(e,t,i){"use strict";i("e806")},"2f4f":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"wrapper-content"},[i("section",[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e.message?i("message",{attrs:{message:e.message}}):e._e(),i("new-note-creator",{attrs:{note:e.note},on:{addNote:e.addNewNote}}),i("div",{staticClass:"note-header"},[i("h1",[e._v("Created Notes")]),i("search",{attrs:{value:e.search,placeholder:"Find a note"},on:{search:function(t){e.search=t}}}),e.isMobile()?e._e():i("div",{staticClass:"icons"},[i("svg",{class:{active:e.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){e.grid=!0}}},[i("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),i("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),i("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),i("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),i("svg",{class:{active:!e.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){e.grid=!1}}},[i("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),i("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),i("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),i("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),i("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),i("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),i("notes",{attrs:{notes:e.getFilteredNotes,grid:e.grid},on:{remove:e.removeNote}})],1)])])])},r=[],a=(i("ac1f"),i("841c"),i("498a"),i("4de4"),i("a4d3"),i("e01a"),i("a434"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"message"},[i("p",[e._v("Error! "+e._s(e.message))])])}),s=[],l={name:"Message",props:{message:{type:String,required:!0,default:""}}},c=l,d=(i("93ab"),i("2877")),u=Object(d["a"])(c,a,s,!1,null,"4cc446a5",null),p=u.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"new-note-creator"},[i("label",[e._v("Priority "),i("br"),i("select",{directives:[{name:"model",rawName:"v-model",value:e.note.priorityLevel,expression:"note.priorityLevel"}],staticClass:"priority",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.note,"priorityLevel",t.target.multiple?i:i[0])}}},[i("option",{attrs:{disabled:"",value:""}},[e._v("Choose note priority")]),i("option",{attrs:{value:"-1"}},[e._v("Low")]),i("option",{attrs:{value:"0"}},[e._v("Normal")]),i("option",{attrs:{value:"1"}},[e._v("High")])])]),i("label",[e._v("Note Title "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.note.title,expression:"note.title"}],attrs:{type:"text",maxlength:"30"},domProps:{value:e.note.title},on:{input:function(t){t.target.composing||e.$set(e.note,"title",t.target.value)}}})]),i("label",[e._v(" Note Description "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note.description,expression:"note.description"}],attrs:{maxlength:"50"},domProps:{value:e.note.description},on:{input:function(t){t.target.composing||e.$set(e.note,"description",t.target.value)}}})]),i("button",{staticClass:"btn btnPrimary",on:{click:e.addNewNote}},[e._v("Create New Note")])])},f=[],h={name:"NewNoteCreator",props:{note:{type:Object,required:!0}},methods:{addNewNote:function(){this.$emit("addNote",this.note)}}},m=h,g=(i("ced0"),Object(d["a"])(m,v,f,!1,null,null,null)),w=g.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"notes"},e._l(e.notes,(function(t){return i("div",{key:t.id,staticClass:"note",class:{full:!e.grid}},[i("div",{staticClass:"priority",class:{high:t.priorityLevel>0,low:t.priorityLevel<0}}),i("div",{staticClass:"text-content"},[i("div",{staticClass:"note-header"},[t.titleEditModeEnabled?i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"note.title"},{name:"focus",rawName:"v-focus"}],staticClass:"note-editor",domProps:{value:t.title},on:{blur:function(i){t.titleEditModeEnabled=!1,t.date=new Date(Date.now()).toLocaleString(),e.$emit("update")},keyup:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter"))return null;t.titleEditModeEnabled=!1,t.date=new Date(Date.now()).toLocaleString(),e.$emit("update")},input:function(i){i.target.composing||e.$set(t,"title",i.target.value)}}}):i("p",{on:{click:function(e){t.titleEditModeEnabled=!0}}},[e._v(e._s(t.title))]),i("button",{staticClass:"close-btn",on:{click:function(i){return e.removeNote(t.id)}}},[e._v("x")])]),i("div",{staticClass:"note-body"},[t.descriptionEditModeEnabled?i("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"note.description"},{name:"focus",rawName:"v-focus"}],staticClass:"note-editor",domProps:{value:t.description},on:{blur:function(i){t.descriptionEditModeEnabled=!1,t.date=new Date(Date.now()).toLocaleString(),e.$emit("update")},keyup:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter"))return null;t.descriptionEditModeEnabled=!1,t.date=new Date(Date.now()).toLocaleString(),e.$emit("update")},input:function(i){i.target.composing||e.$set(t,"description",i.target.value)}}}):i("p",{on:{click:function(e){t.descriptionEditModeEnabled=!0}}},[e._v(e._s(t.description))]),i("span",[e._v(e._s(t.date))])])])])})),0)},b=[],x={name:"Notes",props:{notes:{type:Array,required:!0},grid:{type:Boolean,required:!0}},methods:{removeNote:function(e){this.$emit("remove",e)}},directives:{focus:{inserted:function(e){e.focus()}}}},E=x,_=(i("1935"),Object(d["a"])(E,y,b,!1,null,null,null)),C=_.exports,N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper__search"},[i("div",{staticClass:"search"},[i("div",{staticClass:"search-icon"},[i("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),i("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])},k=[],L={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Search"}},data:function(){return{search:this.value}},watch:{search:function(e){this.$emit("search",e)}}},M=L,O=(i("a97a"),Object(d["a"])(M,N,k,!1,null,"21813b7c",null)),S=O.exports,j={components:{message:p,newNoteCreator:w,notes:C,search:S},data:function(){return{uniqueId:2,title:"Notes App",message:null,grid:!0,search:"",note:{id:null,title:"",description:"",priorityLevel:"",titleEditModeEnabled:!1,descriptionEditModeEnabled:!1},notes:[{id:0,title:"Welcome Note",description:"Start Creating Notes Now!",date:new Date(Date.now()).toLocaleString(),priorityLevel:-1,titleEditModeEnabled:!1,descriptionEditModeEnabled:!1},{id:1,title:"Shopping List",description:"Milk, coffee, cookies",date:new Date(Date.now()).toLocaleString(),priorityLevel:1,titleEditModeEnabled:!1,descriptionEditModeEnabled:!1},{id:2,title:"TODO List",description:"Clean house, cook dinner",date:new Date(Date.now()).toLocaleString(),priorityLevel:0,titleEditModeEnabled:!1,descriptionEditModeEnabled:!1}]}},computed:{getFilteredNotes:function(){var e=this.notes,t=this.search;return t?(t=t.trim().toLowerCase(),e=e.filter((function(e){if(-1!==e.title.toLowerCase().indexOf(t)||-1!==e.description.toLowerCase().indexOf(t))return e})),i(e)):i(e);function i(e){return e.sort((function(e,t){return t.priorityLevel-e.priorityLevel}))}}},methods:{addNewNote:function(){var e=this.note,t=e.title,i=e.description,n=e.priorityLevel;if(""===t)return this.message="Title can't be blank",!1;this.notes.push({id:this.getUniqueId(),title:t,description:i,date:new Date(Date.now()).toLocaleString(),priorityLevel:n}),this.note.id=null,this.note.title="",this.note.description="",this.note.priorityLevel="",this.note.titleEditModeEnabled=!1,this.note.descriptionEditModeEnabled=!1,this.message=null},removeNote:function(e){for(var t=this.notes,i=0;i<t.length;i++)t[i].id===e&&t.splice(i,1)},getUniqueId:function(){return this.uniqueId+=1},isMobile:function(){var e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return e&&(this.grid=!1),e}}},D=j,$=(i("034f"),Object(d["a"])(D,o,r,!1,null,null,null)),P=$.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,i){},"93ab":function(e,t,i){"use strict";i("2f4f")},a97a:function(e,t,i){"use strict";i("f64e")},ced0:function(e,t,i){"use strict";i("0f86")},e806:function(e,t,i){},f64e:function(e,t,i){}});