webpackJsonp([1],{118:function(s,t,e){"use strict";var n=e(1),a=e(129),r=e(126),o=e.n(r);n.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Tools",component:o.a}]})},119:function(s,t,e){function n(s){e(123)}var a=e(117)(e(120),e(127),n,null,null);s.exports=a.exports},120:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},121:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(0),a=e.n(n),r={3:{nlx:.08,glf:.1},6:{nlx:.09,glf:.09},12:{nlx:.105,glf:.075}};t.default={name:"hello",data:function(){return{source:"256900",year:"2017",month:"5",day:"3",czSxf:"0",txSxf:"3",times:"3"}},computed:{results:function(){var s=this.source,t=this.year,e=this.month,n=this.day,o=this.times;if(s=s.trim(),t=t.trim(),e=e.trim(),n=n.trim(),!(s&&t&&e&&n))return[];s=parseInt(s);var i=parseInt(o),l=function(s,t){return t||(t=2),t=Math.pow(10,t),Math.round(s*t)/t},u=l(r[o].nlx*s/12),v=l(.18*s/12-u),j=[],c=new Date(t+"/"+e+"/"+n),d=function(s){return a()(c).add(s,"days").format("YYYY-MM-DD")},f=parseInt(this.czSxf||0),m=parseInt(this.txSxf||0);j.push({index:1,date:d(0),total:l(u+v+.03*s+m+f),source:0,lx:u,glf:v,bzj:l(.03*s),cz_sxf:f,tx_sxf:m});for(var p=1;p<i;p++)j.push({index:p+1,date:d(30*p-1),total:l(u+v),source:0,lx:u,glf:v,bzj:0,cz_sxf:0,tx_sxf:0});var _=u*i,x=v*i;if(_>parseInt(_)){var h=j[i-1],g=l(100*(parseInt(_)+1-_)%10/100),z=l(100*(parseInt(x)+1-x)%10/100);g<z?(h.lx=l(h.lx+g),h.glf=l(h.glf-g)):(h.lx=l(h.lx-z),h.glf=l(h.glf+z))}j.push({index:i+1,date:d(30*i-1),total:s,source:s,lx:0,glf:0,bzj:0,cz_sxf:0,tx_sxf:0});var y=0;_=0,x=0;for(var b in j)y+=j[b].total,_+=j[b].lx,x+=j[b].glf;return _=l(_,1),x=l(x,1),j.push({index:"总计",date:"-",total:y,source:s,lx:_,glf:x,bzj:j[0].bzj,cz_sxf:f,tx_sxf:j[0].tx_sxf}),j}}}},122:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(1),a=e(119),r=e.n(a),o=e(118);n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},123:function(s,t){},124:function(s,t){},125:function(s,t,e){function n(s){return e(a(s))}function a(s){var t=r[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}var r={"./af":2,"./af.js":2,"./ar":9,"./ar-dz":3,"./ar-dz.js":3,"./ar-kw":4,"./ar-kw.js":4,"./ar-ly":5,"./ar-ly.js":5,"./ar-ma":6,"./ar-ma.js":6,"./ar-sa":7,"./ar-sa.js":7,"./ar-tn":8,"./ar-tn.js":8,"./ar.js":9,"./az":10,"./az.js":10,"./be":11,"./be.js":11,"./bg":12,"./bg.js":12,"./bn":13,"./bn.js":13,"./bo":14,"./bo.js":14,"./br":15,"./br.js":15,"./bs":16,"./bs.js":16,"./ca":17,"./ca.js":17,"./cs":18,"./cs.js":18,"./cv":19,"./cv.js":19,"./cy":20,"./cy.js":20,"./da":21,"./da.js":21,"./de":24,"./de-at":22,"./de-at.js":22,"./de-ch":23,"./de-ch.js":23,"./de.js":24,"./dv":25,"./dv.js":25,"./el":26,"./el.js":26,"./en-au":27,"./en-au.js":27,"./en-ca":28,"./en-ca.js":28,"./en-gb":29,"./en-gb.js":29,"./en-ie":30,"./en-ie.js":30,"./en-nz":31,"./en-nz.js":31,"./eo":32,"./eo.js":32,"./es":34,"./es-do":33,"./es-do.js":33,"./es.js":34,"./et":35,"./et.js":35,"./eu":36,"./eu.js":36,"./fa":37,"./fa.js":37,"./fi":38,"./fi.js":38,"./fo":39,"./fo.js":39,"./fr":42,"./fr-ca":40,"./fr-ca.js":40,"./fr-ch":41,"./fr-ch.js":41,"./fr.js":42,"./fy":43,"./fy.js":43,"./gd":44,"./gd.js":44,"./gl":45,"./gl.js":45,"./gom-latn":46,"./gom-latn.js":46,"./he":47,"./he.js":47,"./hi":48,"./hi.js":48,"./hr":49,"./hr.js":49,"./hu":50,"./hu.js":50,"./hy-am":51,"./hy-am.js":51,"./id":52,"./id.js":52,"./is":53,"./is.js":53,"./it":54,"./it.js":54,"./ja":55,"./ja.js":55,"./jv":56,"./jv.js":56,"./ka":57,"./ka.js":57,"./kk":58,"./kk.js":58,"./km":59,"./km.js":59,"./kn":60,"./kn.js":60,"./ko":61,"./ko.js":61,"./ky":62,"./ky.js":62,"./lb":63,"./lb.js":63,"./lo":64,"./lo.js":64,"./lt":65,"./lt.js":65,"./lv":66,"./lv.js":66,"./me":67,"./me.js":67,"./mi":68,"./mi.js":68,"./mk":69,"./mk.js":69,"./ml":70,"./ml.js":70,"./mr":71,"./mr.js":71,"./ms":73,"./ms-my":72,"./ms-my.js":72,"./ms.js":73,"./my":74,"./my.js":74,"./nb":75,"./nb.js":75,"./ne":76,"./ne.js":76,"./nl":78,"./nl-be":77,"./nl-be.js":77,"./nl.js":78,"./nn":79,"./nn.js":79,"./pa-in":80,"./pa-in.js":80,"./pl":81,"./pl.js":81,"./pt":83,"./pt-br":82,"./pt-br.js":82,"./pt.js":83,"./ro":84,"./ro.js":84,"./ru":85,"./ru.js":85,"./sd":86,"./sd.js":86,"./se":87,"./se.js":87,"./si":88,"./si.js":88,"./sk":89,"./sk.js":89,"./sl":90,"./sl.js":90,"./sq":91,"./sq.js":91,"./sr":93,"./sr-cyrl":92,"./sr-cyrl.js":92,"./sr.js":93,"./ss":94,"./ss.js":94,"./sv":95,"./sv.js":95,"./sw":96,"./sw.js":96,"./ta":97,"./ta.js":97,"./te":98,"./te.js":98,"./tet":99,"./tet.js":99,"./th":100,"./th.js":100,"./tl-ph":101,"./tl-ph.js":101,"./tlh":102,"./tlh.js":102,"./tr":103,"./tr.js":103,"./tzl":104,"./tzl.js":104,"./tzm":106,"./tzm-latn":105,"./tzm-latn.js":105,"./tzm.js":106,"./uk":107,"./uk.js":107,"./ur":108,"./ur.js":108,"./uz":110,"./uz-latn":109,"./uz-latn.js":109,"./uz.js":110,"./vi":111,"./vi.js":111,"./x-pseudo":112,"./x-pseudo.js":112,"./yo":113,"./yo.js":113,"./zh-cn":114,"./zh-cn.js":114,"./zh-hk":115,"./zh-hk.js":115,"./zh-tw":116,"./zh-tw.js":116};n.keys=function(){return Object.keys(r)},n.resolve=a,s.exports=n,n.id=125},126:function(s,t,e){function n(s){e(124)}var a=e(117)(e(121),e(128),n,"data-v-5f0ff67a",null);s.exports=a.exports},127:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},128:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"hello"},[e("div",{staticClass:"filter"},[e("div",[e("span",[s._v("本金: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.source,expression:"source"}],domProps:{value:s.source},on:{input:function(t){t.target.composing||(s.source=t.target.value)}}})]),s._v(" "),e("div",{staticClass:"filter-date"},[e("span",[s._v("日期:")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.year,expression:"year"}],domProps:{value:s.year},on:{input:function(t){t.target.composing||(s.year=t.target.value)}}}),s._v("年 -\n      "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.month,expression:"month"}],domProps:{value:s.month},on:{input:function(t){t.target.composing||(s.month=t.target.value)}}}),s._v("月 -\n      "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.day,expression:"day"}],domProps:{value:s.day},on:{input:function(t){t.target.composing||(s.day=t.target.value)}}}),s._v("日\n    ")]),s._v(" "),e("div",[e("span",[s._v("期数:")]),s._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:s.times,expression:"times"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(s){return s.selected}).map(function(s){return"_value"in s?s._value:s.value});s.times=t.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"3"}},[s._v("3个月")]),s._v(" "),e("option",{attrs:{value:"6"}},[s._v("6个月")]),s._v(" "),e("option",{attrs:{value:"12"}},[s._v("12个月")])])]),s._v(" "),e("div",{staticClass:"sxf"},[e("span",[s._v("充值手续费: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.czSxf,expression:"czSxf"}],domProps:{value:s.czSxf},on:{input:function(t){t.target.composing||(s.czSxf=t.target.value)}}})]),s._v(" "),e("div",{staticClass:"sxf"},[e("span",[s._v("放款/提现手续费: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.txSxf,expression:"txSxf"}],domProps:{value:s.txSxf},on:{input:function(t){t.target.composing||(s.txSxf=t.target.value)}}})])]),s._v(" "),e("div",[e("table",{attrs:{cellspacing:"0",cellpadding:"5px"}},[s._m(0),s._v(" "),s._l(s.results,function(t){return e("tr",[e("td",[s._v(s._s(t.index))]),s._v(" "),e("td",[s._v(s._s(t.date))]),s._v(" "),e("td",[s._v(s._s(t.total))]),s._v(" "),e("td",[s._v(s._s(t.source))]),s._v(" "),e("td",[s._v(s._s(t.lx))]),s._v(" "),e("td",[s._v(s._s(t.glf))]),s._v(" "),e("td",[s._v(s._s(t.bzj))]),s._v(" "),e("td",[s._v(s._s(t.cz_sxf))]),s._v(" "),e("td",[s._v(s._s(t.tx_sxf))])])})],2)])])},staticRenderFns:[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("tr",[e("th",[s._v("期次")]),s._v(" "),e("th",[s._v("支付日期")]),s._v(" "),e("th",[s._v("总额")]),s._v(" "),e("th",[s._v("本金")]),s._v(" "),e("th",[s._v("利息")]),s._v(" "),e("th",[s._v("居间管理费")]),s._v(" "),e("th",[s._v("诚信保证金")]),s._v(" "),e("th",[s._v("充值手续费")]),s._v(" "),e("th",[s._v("放款/提现手续费")])])}]}}},[122]);
//# sourceMappingURL=app.a4707673a8dcde72947c.js.map