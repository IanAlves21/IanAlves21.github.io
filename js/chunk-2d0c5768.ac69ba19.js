(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5768"],{"3ecc":function(t,e,a){"use strict";a.r(e);var i,l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("h4",{staticClass:"card-title"},[t._v("Table with Links")]),a("p",{staticClass:"category"},[t._v("Here is a subtitle for this table")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("el-table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"name",label:"Name"}}),a("el-table-column",{attrs:{prop:"job",label:"Job Position"}}),a("el-table-column",{attrs:{prop:"salary",label:"Salary"}}),a("el-table-column",{attrs:{label:"Actions"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"td-actions"},[a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"View Profile",expression:"'View Profile'",modifiers:{"top-center":!0}}],staticClass:"btn btn-info btn-link btn-xs",attrs:{href:"#"},on:{click:function(a){return t.handleLike(e.$index,e.row)}}},[a("i",{staticClass:"fa fa-user"})]),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Edit Profile",expression:"'Edit Profile'",modifiers:{"top-center":!0}}],staticClass:"btn btn-warning btn-link btn-xs",on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[a("i",{staticClass:"fa fa-edit"})]),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Delete",expression:"'Delete'",modifiers:{"top-center":!0}}],staticClass:"btn btn-danger btn-link btn-xs",on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[a("i",{staticClass:"fa fa-close"})])])}}])})],1)],1)])]),a("card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("h4",{staticClass:"card-title"},[t._v("Table with Switches")]),a("p",{staticClass:"category"},[t._v("With some subtitle")])]),a("div",{staticClass:"row table-full-width"},[a("div",{staticClass:"col-sm-12"},[a("el-table",{staticClass:"table-striped",attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"name",label:"Name"}}),a("el-table-column",{attrs:{prop:"job",label:"Job Position"}}),a("el-table-column",{attrs:{prop:"salary",label:"Salary"}}),a("el-table-column",{attrs:{label:"Active"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("l-switch",{model:{value:e.row.active,callback:function(a){t.$set(e.row,"active",a)},expression:"props.row.active"}})]}}])})],1)],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("h4",{staticClass:"card-title"},[t._v("Table Big Boy")]),a("p",{staticClass:"category"},[t._v("A table for content management")]),a("br")]),a("div",{staticClass:"table-responsive"},[a("el-table",{staticClass:"table-bigboy",staticStyle:{width:"100%"},attrs:{data:t.productsTable}},[a("el-table-column",{attrs:{"min-width":"220",label:"THUMB"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return[a("div",{staticClass:"img-container"},[a("img",{attrs:{src:e.image,alt:"Agenda"}})])]}}])}),a("el-table-column",{attrs:{"min-width":"220",label:"BLOG TITLE"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("p",[t._v(t._s(i.title))])]}}])}),a("el-table-column",{attrs:{"min-width":"180",label:"DESCRIPTION",prop:"description"}}),a("el-table-column",{attrs:{"min-width":"100",label:"DATE",prop:"date"}}),a("el-table-column",{attrs:{"min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(t){t.row;return[a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"View Post",expression:"'View Post'",modifiers:{"top-center":!0}}],staticClass:"btn-success btn-simple btn-link"},[a("i",{staticClass:"fa fa-image"})]),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Edit",expression:"'Edit'",modifiers:{"top-center":!0}}],staticClass:"btn-info btn-simple btn-link"},[a("i",{staticClass:"fa fa-edit"})]),a("a",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Delete",expression:"'Delete'",modifiers:{"top-center":!0}}],staticClass:"btn-danger btn-simple btn-link"},[a("i",{staticClass:"fa fa-times"})])]}}])})],1)],1)])],1)])],1)},s=[],o=a("ade3"),n=(a("5466"),a("450d"),a("ecdf")),r=a.n(n),c=(a("38a0"),a("ad41")),d=a.n(c),u=(a("b0c0"),a("159b"),a("75c6")),b={components:(i={LSwitch:u["a"]},Object(o["a"])(i,d.a.name,d.a),Object(o["a"])(i,r.a.name,r.a),i),data:function(){return{tableData:[{name:"Andrew Mike",job:"Develop",salary:"€ 99,225",active:!1},{name:"John Doe",job:"Design",salary:"€ 89,241",active:!1},{name:"Alex Mike",job:"Design",salary:"€ 92,144",active:!1},{name:"Mike Monday",job:"Marketing",salary:"€ 49,990",active:!0},{name:"Paul dickens",job:"Communication",salary:"€ 69,201",active:!0}],productsTable:[{image:"static/img/blog-1.jpg",title:"10 Things that all designers do",description:"Most beautiful agenda for the office, really nice paper and black cover. Most beautiful agenda for the office.",date:"30/08/2016",views:"1,225"},{image:"static/img/blog-2.jpg",title:"Back to School Offer",description:"Design is not just what it looks like and feels like. Design is how it works.",date:"17/07/2016",views:"49,302"},{image:"static/img/blog-3.jpg",title:"First Dribbble Meetup in Romania",description:"A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.",date:"23/06/2016",views:"1,799"},{image:"static/img/blog-4.jpg",title:"How we created our startup with 0$",description:"A desk is a generally wooded piece of furniture and a type of useful table often used in a school or office setting for various academic or professional activities ...",date:"30/08/2016",views:"23,030"},{image:"static/img/blog-5.jpg",title:"To use or not to use Bootstrap",description:"The Office Chair adapts naturally to virtually every body and is a permanent fixture.",date:"10/05/2016",views:"13,763"}]}},methods:{handleLike:function(t,e){alert("Your clicked on Like button")},handleEdit:function(t,e){alert("Your want to edit ".concat(e.name))},handleDelete:function(t,e){alert("Your want to delete ".concat(e.name))},getSummaries:function(t){var e=this,a=t.columns,i=[];return a.forEach((function(t,l){if(0===l)i[l]="Total";else if(l<a.length-1)i[l]="";else{var s=0;e.productsTable.forEach((function(t){s+=t.quantity*t.price})),i[l]="€ ".concat(s)}})),i}}},p=b,f=a("2877"),m=Object(f["a"])(p,l,s,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0c5768.ac69ba19.js.map