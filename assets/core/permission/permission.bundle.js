!function(e){var a={};function t(s){if(a[s])return a[s].exports;var n=a[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=a,t.d=function(e,a,s){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(s,n,function(a){return e[a]}.bind(null,n));return s},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=47)}([function(e,a,t){e.exports=t(2)(0)},function(e,a,t){e.exports=t(2)(3)},function(e,a){e.exports=_xe_dll_common},function(e,a,t){e.exports=t(2)(83)},function(e,a,t){e.exports=t(2)(2)},function(e,a,t){e.exports=t(2)(281)},function(e,a,t){e.exports=t(2)(18)},function(e,a,t){e.exports=t(2)(7)},,function(e,a,t){e.exports=t(2)(81)},function(e,a,t){e.exports=t(2)(240)},function(e,a,t){e.exports=t(19)},,,,,,,,function(e,a,t){e.exports=t(20)},function(e,a,t){var s=t(21),n=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},function(e,a,t){e.exports=t(2)(15)},function(e,a,t){e.exports=t(2)(46)},function(e,a,t){e.exports=t(2)(14)},,,,,,,,,,,,function(e,a,t){e.exports=t(2)(5)},,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var s=t(11),n=t.n(s),l=t(22),r=t.n(l),c=t(23),i=t.n(c),o=t(3),u=t.n(o),p=t(10),d=t.n(p),g=t(6),v=t.n(g),f=t(35),h=t.n(f),m=t(9),_=t.n(m),x=t(1),y=t.n(x),b=t(4),T=t.n(b),R=t(7),k=t.n(R),U=t(0),S=t.n(U),w=t(5),G=13,j=9,$=8,E=38,I=40,M=27,L=function(){function e(a){var t=a.$wrapper,s=a.key,n=a.userSearchUrl,l=a.groupSearchUrl,r=a.permission,c=a.type,i=a.vgroupAll;T()(this,e),this.$wrapper=t,this.key=s,this.userSearchUrl=n,this.groupSearchUrl=l,this.permission=r,this.type=c,this.vgroupAll=i,this.query="",this.suggestion=[],this.placeholder=w.default.Lang.trans("xe::explainIncludeUserOrGroup"),this.selectedIndex="",this.includeSelectedIndex=-1,this.excludeSelectedIndex=-1,this.MIN_QUERY_LENGTH=2}return k()(e,[{key:"bindEvents",value:function(){var e,a,t=this;this.$wrapper.on("change",".chkModeAble",function(e){var a,s;S()(e.target).is(":checked")?y()(a=t.$wrapper).call(a,"input:not(.chkModeAble)").prop("disabled",!0):y()(s=t.$wrapper).call(s,"input:not(.chkModeAble)").prop("disabled",!1)}),this.$wrapper.on("keydown",".inputUserGroup",function(e){var a,s,n=_()(a=e.target.value).call(a),l=S()(this),r=e.keyCode,c=y()(s=l.parent()).call(s,".ReactTags__suggestions ul"),i=l.data("input");if(n.length>=t.MIN_QUERY_LENGTH){if(c.length>0){var o=h()(l.data("index"),10),p=0;switch(r){case E:p=0==o?y()(c).call(c,"li").length-1:o-1,l.data("index",p),y()(c).call(c,"li").eq(p).addClass("active").siblings().removeClass("active");break;case I:p=o==y()(c).call(c,"li").length-1?0:o+1,l.data("index",p),y()(c).call(c,"li").eq(p).addClass("active").siblings().removeClass("active");break;case G:case j:if(e.preventDefault(),y()(c).call(c,"li.active").length>0){var g,f=y()(c).call(c,"li.active").data("tag"),m="",x="",b="";"user"==c.data("target")?"include"==i?(m=t.type+"User",x="user",b="@"):(m=t.type+"Except",x="except",b="@"):(m=t.type+"Group",x="group",b="%");var T=t.permission[x],R=!1;T.length>0?(v()(T).call(T,function(e,a){e.id===f.id&&(R=!0)}),R||t.permission[x].push(f)):t.permission[x].push(f);var k,U,w,L,O=d()(g=t.permission[x]).call(g,function(e){return e.id});if(!R)y()(k=c.closest(".ReactTags__tags")).call(k,"[name="+m+"]").val(_()(U=O.join()).call(U)),y()(w=c.closest(".ReactTags__tags")).call(w,"."+x+"Wrap").append(u()(L='<span class="ReactTags__tag">'.concat(b+(f.display_name||f.name),'<a class="ReactTags__remove btnRemoveTag" data-id="')).call(L,f.id,'">x</a></span>'));c.remove(),l.val("").data("index",-1).focus()}e.preventDefault();break;case M:t[i+"SelectedIndex"]=0,c.parent().empty(),l.focus()}}}else if($===r){var A,N=y()(A=l.closest(".ReactTags__tags")).call(A,".ReactTags__selected span");!n&&N.length>0&&t.removeTag(N.eq(N.length-1))}}),y()(e=this.$wrapper).call(e,".ReactTags__suggestions").on("mouseenter","li",function(){var e=S()(this);e.closest("ul");e.addClass("active").siblings().removeClass("active")}),y()(a=this.$wrapper).call(a,".ReactTags__suggestions").on("click","li",function(){var e,a,s=S()(this),n=s.data("tag"),l=s.closest("ul"),r=y()(e=s.closest(".ReactTags__tagInput")).call(e,"input:text"),c=r.data("input"),i=(n.id,""),o="",p="";"user"==l.data("target")?"include"==c?(i=t.type+"User",o="user",p="@"):(i=t.type+"Except",o="except",p="@"):(i=t.type+"Group",o="group",p="%");var g=t.permission[o],f=!1;g.length>0?(v()(g).call(g,function(e,a){e.id===n.id&&(f=!0)}),f||t.permission[o].push(n)):t.permission[o].push(n);var h,m,x,b,T=d()(a=t.permission[o]).call(a,function(e){return e.id});f||(y()(h=l.closest(".ReactTags__tags")).call(h,"[name="+i+"]").val(_()(m=T.join()).call(m)),y()(x=l.closest(".ReactTags__tags")).call(x,"."+o+"Wrap").append(u()(b='<span class="ReactTags__tag">'.concat(p+(n.display_name||n.name),'<a class="ReactTags__remove btnRemoveTag" data-id="')).call(b,n.id,'">x</a></span>')));l.remove(),r.val("").data("index",-1).focus()}),this.$wrapper.on("keyup",".inputUserGroup",function(e){var a,s,n,l=_()(a=e.target.value).call(a),r=S()(this),c=e.keyCode;if(l.length>=t.MIN_QUERY_LENGTH){if(-1==i()(s=[G,j,E,I,M,37,39]).call(s,c)){var o;switch("<ul>",'<li>Searching ... <span class="spinner" role="spinner"><span class="spinner-icon"></span></span></li>',"</ul>",y()(o=r.parent()).call(o,".ReactTags__suggestions").html('<ul><li>Searching ... <span class="spinner" role="spinner"><span class="spinner-icon"></span></span></li></ul>'),l.substr(0,1)){case"@":l=l.substr(1,l.length),t.searchUser(r,l);break;case"%":l=l.substr(1,l.length),t.searchGroup(r,l)}}}else y()(n=r.parent()).call(n,".ReactTags__suggestions").empty()}),this.$wrapper.on("click",".btnRemoveTag",function(e){e.preventDefault(),t.removeTag(S()(this).closest("span"))})}},{key:"makeIt",value:function(e,a){var t=_()(a).call(a).replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&"),s=RegExp(t,"gi");return(e.display_name||e.name).replace(s,"<mark>$&</mark>")}},{key:"removeTag",value:function(e){var a,t,s,n=this,l=e.closest(".ReactTags__selected").data("ptype"),c=e.data("id"),i="";switch(l){case"user":i=n.type+"User";break;case"except":i=n.type+"Except";break;case"group":i=n.type+"Group"}var o=n.permission[l];v()(o).call(o,function(e,a){var t;e.id!==c&&r()(t=n.permission[l]).call(t,a,1)});var u=d()(a=n.permission[l]).call(a,function(e){return e.id});y()(t=e.closest(".ReactTags__tags")).call(t,"[name="+i+"]").val(_()(s=u.join()).call(s)),e.remove()}},{key:"searchUser",value:function(e,a){var t=this,s=t.userSearchUrl;w.default.ajax({url:s+"/"+a,method:"get",dataType:"json",cache:!1,success:function(s){if(s.length>0){var l,r="";r+='<ul data-target="user">',v()(s).call(s,function(e,s){r+='<li class="" data-tag=\''.concat(n()(e),"'>"),r+="<span>".concat(t.makeIt(e,a),"</span>"),r+="</li>"}),r+="</ul>",y()(l=e.parent()).call(l,".ReactTags__suggestions").html(r)}else{var c;y()(c=e.parent()).call(c,".ReactTags__suggestions").empty()}},error:function(e,a,t){}})}},{key:"searchGroup",value:function(e,a){var t=this,s=t.groupSearchUrl;w.default.ajax({url:s+"/"+a,method:"get",dataType:"json",cache:!1,success:function(s){if(s.length>0){var l,r="";r+='<ul data-target="group">',v()(s).call(s,function(e,s){r+="<li data-tag='".concat(n()(e),"'>"),r+="<span>".concat(t.makeIt(e,a),"</span>"),r+="</li>"}),r+="</ul>",y()(l=e.parent()).call(l,".ReactTags__suggestions").html(r)}else{var c;y()(c=e.parent()).call(c,".ReactTags__suggestions").empty()}},error:function(e,a,t){}})}},{key:"render",value:function(){var e,a,t,s,n,l,r,c,i,o,p,g,f,h,m=this,x=this.permission.mode,y=this.permission.rating,b=!1,T=[{value:"super",name:w.default.Lang.trans("xe::userRatingAdministrator")},{value:"manager",name:w.default.Lang.trans("xe::userRatingManager")},{value:"user",name:w.default.Lang.trans("xe::user")},{value:"guest",name:w.default.Lang.trans("xe::guest")}],R=!1;"manual"!==x&&"inherit"!==x||(b=!0,"manual"!==x&&(R=!0));var k,U=d()(e=this.permission.group).call(e,function(e){return e.id}),S=d()(a=this.permission.user).call(a,function(e){return e.id}),G=d()(t=this.permission.except).call(t,function(e){return e.id}),j="";if(j+="<div>",b){var $,E,I="inherit"===x?'checked="checked"':"";j+='<div class="form-group">',j+='<div class="checkbox">',j+=u()($=u()(E='<label><input type="checkbox" name="'.concat(this.type+"Mode",'" class="chkModeAble" value="inherit" ')).call(E,I," /> ")).call($,w.default.Lang.trans("xe::inheritMode"),"</label>"),j+="</div>",j+="</div>"}(j+='<div class="form-group">',j+="<label>회원 등급</label>",j+='<div class="radio">',v()(T).call(T,function(e){var a,t,s,n,l=e.value==y?"checked":"";j+=u()(a=u()(t=u()(s=u()(n='<label><input type="radio" '.concat(R?'disabled="disabled"':"",' name="')).call(n,m.type+"Rating",'" value="')).call(s,e.value,'" ')).call(t,l?'checked="checked"':""," /> ")).call(a,e.name," &nbsp;</label>")}),j+="</div>",j+="</div>",j+='<div class="form-group">',j+="<label>".concat(w.default.Lang.trans("xe::includeUserOrGroup"),"</label>"),j+='<div class="ReactTags__tags">',j+='<div class="ReactTags__selected groupWrap" data-ptype="group">',v()(s=this.permission.group).call(s,function(e){var a,t=e,s="%"+(t.display_name||t.name);j+=u()(a='<span class="ReactTags__tag">'.concat(s,'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="')).call(a,t.id,'">x</a></span>')}),j+="</div>",j+='<div class="ReactTags__selected userWrap" data-ptype="user">',v()(n=this.permission.user).call(n,function(e){var a,t="@"+(e.display_name||e.name);j+=u()(a='<span class="ReactTags__tag">'.concat(t,'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="')).call(a,e.id,'|">x</a></span>')}),j+="</div>",j+='<div class="ReactTags__tagInput">',j+=u()(l=u()(r='<input type="text" placeholder="'.concat(this.placeholder,'" class="form-control inputUserGroup" data-input="include" ')).call(r,R?'disabled="disabled"':"",' value="')).call(l,this.query,'" data-index="-1" />'),j+='<div class="ReactTags__suggestions" data-input="include"></div>',j+="</div>",j+=u()(c='<input type="hidden" name="'.concat(this.type+"Group",'" class="form-control includeGroups" value="')).call(c,_()(i=U.join()).call(i),'" />'),j+=u()(o='<input type="hidden" name="'.concat(this.type+"User",'" class="form-control includeUsers" value="')).call(o,_()(p=S.join()).call(p),'" />'),j+="</div>",j+="</div>",this.vgroupAll.length>=1)&&(j+='<div class="form-group">',j+="<label>".concat(w.default.Lang.trans("xe::includeVGroup"),"</label>"),j+=d()(k=m.vgroupAll).call(k,function(e){var a,t,s,n,l=!1;return-1!=function(e,a){for(var t=0;t<a.length;t++)if(a[t]==e)return t;return-1}(e.id,this.permission.vgroup)&&(l=!0),u()(a=u()(t=u()(s=u()(n='<label><input type="checkbox" '.concat(R?'disabled="disabled"':"",' name="')).call(n,m.type+"VGroup[]",'" value="')).call(s,e.id,'" ')).call(t,l?'checked="checked"':""," /> ")).call(a,e.title," &nbsp;</label>")}),j+="</div>");j+='<div class="form-group">',j+="<label>".concat(w.default.Lang.trans("xe::excludeUser"),"</label>"),j+='<div class="ReactTags__tags">',j+='<div class="ReactTags__selected exceptWrap" data-ptype="except">',v()(g=this.permission.except).call(g,function(e){var a,t=e.display_name||e.name;t="@"+t,j+=u()(a='<span class="ReactTags__tag">'.concat(t,'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="')).call(a,e.id,'">x</a></span>')}),j+="</div>",j+='<div class="ReactTags__tagInput">',j+=u()(f='<input type="text" placeholder="'.concat(w.default.Lang.trans("xe::explainExcludeUser"),'" class="form-control inputUserGroup" data-input="exclude" ')).call(f,R?'disabled="disabled"':"",' data-index="-1" />'),j+='<div class="ReactTags__suggestions" data-input="exclude"></div>',j+="</div>",j+=u()(h='<input type="hidden" name="'.concat(this.type+"Except",'" class="form-control excludeUsers" value="')).call(h,G,'" />'),j+="</div>",j+="</div>",j+="</div>",this.$wrapper.html(j)}}]),e}();S()(".__xe__uiobject_permission").each(function(e){var a=S()(this),t=a.data("data"),s=a.data("key"),n=a.data("type"),l=a.data("userUrl"),r=a.data("groupUrl"),c=a.data("vgroupAll"),i=new L({$wrapper:a,key:s,userSearchUrl:l,groupSearchUrl:r,permission:t,type:n,vgroupAll:c});i.render(),i.bindEvents()})}]);