webpackJsonp([10],{0:function(e,t,a){a(295),a(300),a(297),a(296),a(301),a(299),a(298),e.exports=a(302)},295:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),l=a(296),i=s(l),d=a(297),u=s(d),o=a(300),c=s(o);t.default=r.default.createClass({displayName:"Permission",propTypes:{permission:r.default.PropTypes.object,type:r.default.PropTypes.string},getDefaultProps:function(){return{modeEnable:!1}},getInitialState:function(){return this.init(this.props)},init:function(e){var t,a,s=e.permission,n=[],r=[],l=[];return s&&(t=s.mode,a=s.rating,n=s.group,r=s.user,l=s.except),{permission:s,modeEnable:this.props.modeEnable,formData:{mode:t,rating:a},includeGroups:n,includeMembers:r,excludeMembers:l}},componentDidMount:function(){},componentDidUpdate:function(e){var t=this.props.permission;t!==e.permission&&this.setState(this.init(this.props))},modeChange:function(e){var t=this.state.formData;t.mode="inherit"===t.mode?"manual":"inherit",this.setState({formData:t})},inputChange:function(e,t){var a=this.state.formData;a[e]=t,this.setState({formData:a})},handleIncludeGroupDelete:function(e){var t=this.state.includeGroups;t.splice(e,1),this.setState({includeGroups:t})},handleIncludeMemberDelete:function(e){var t=this.state.includeMembers;t.splice(e,1),this.setState({includeMembers:t})},handleExcludeMemberDelete:function(e){var t=this.state.excludeMembers;t.splice(e,1),this.setState({excludeMembers:t})},handleIncludeAddition:function(e){var t,a=this.state.includeGroups,s=this.state.includeMembers;e.hasOwnProperty("displayName")?(t=_.find(s,{id:e.id}),t||(s.push(e),this.setState({includeMembers:s}))):(t=_.find(a,{id:e.id}),t||(a.push(e),this.setState({includeGroups:a})))},handleExcludeAddition:function(e){var t=this.state.excludeMembers,a=_.find(t,{id:e.id});a||(t.push(e),this.setState({excludeMembers:t}))},render:function(){var e=this,t=this.props.modeEnable,a=this.props.type+"Mode",s=this.props.type+"Rating",n=this.props.type+"Group",l=this.props.type+"User",d=this.props.type+"Except",o=this.props.type+"VGroup[]",p=this.state.formData.mode,h=this.state.formData.rating,m=!1;"manual"!==p&&"inherit"!==p||(t=!0,"manual"!==p&&(m=!0));var f,g=[{value:"super",name:XE.Lang.trans("xe::memberRatingAdministrator")},{value:"manager",name:XE.Lang.trans("xe::memberRatingManager")},{value:"member",name:XE.Lang.trans("xe::member")},{value:"guest",name:XE.Lang.trans("xe::guest")}],b=g.map(function(t,a){return t.value==h?r.default.createElement(i.default,{data:t,name:s,isChecked:!0,controlDisabled:m,key:a,onChangeRadio:e.inputChange.bind(null,"rating")}):r.default.createElement(i.default,{data:t,name:s,isChecked:!1,controlDisabled:m,key:a,onChangeRadio:e.inputChange.bind(null,"rating")})}),v=this.props.vgroupAll.length<1?null:this.props.vgroupAll.map(function(e){var t={type:"checkbox",disabled:m,name:o,value:e.id,key:e.id},a=function(e,t){for(var a=0;a<t.length;a++)if(t[a]==e)return a;return-1};return a(e.id,this.props.permission.vgroup)!=-1&&(t.defaultChecked=!0),r.default.createElement("label",null,r.default.createElement("input",t)," ",e.title,"  ")}.bind(this)),y=this.state.includeGroups.map(function(e){return e.id}),E=this.state.includeMembers.map(function(e){return e.id}),M=this.state.excludeMembers.map(function(e){return e.id});return t&&(f=r.default.createElement("div",{className:"form-group"},r.default.createElement("div",{className:"checkbox"},r.default.createElement("label",null,r.default.createElement("input",{type:"checkbox",name:a,value:"inherit",onChange:this.modeChange,checked:"inherit"===p})," ",XE.Lang.trans("xe::inheritMode"))))),r.default.createElement("div",null,f,r.default.createElement("div",{className:"form-group"},r.default.createElement("label",null,XE.Lang.trans("xe::memberRating")),r.default.createElement("div",{className:"radio"},b)),r.default.createElement("div",{className:"form-group"},r.default.createElement("label",null,XE.Lang.trans("xe::includeUserOrGroup")),r.default.createElement(u.default,{selectedGroup:this.state.includeGroups,selectedMember:this.state.includeMembers,searchMemberUrl:this.props.memberSearchUrl,searchGroupUrl:this.props.groupSearchUrl,disabled:m,handleGroupDelete:this.handleIncludeGroupDelete,handleMemberDelete:this.handleIncludeMemberDelete,handleAddition:this.handleIncludeAddition}),r.default.createElement("input",{type:"hidden",name:n,className:"form-control",value:y}),r.default.createElement("input",{type:"hidden",name:l,className:"form-control",value:E})),function(){if(v)return r.default.createElement("div",{className:"form-group"},r.default.createElement("label",null,XE.Lang.trans("xe::includeVGroup")),v)}.call(this),r.default.createElement("div",{className:"form-group"},r.default.createElement("label",null,XE.Lang.trans("xe::excludeUser")),r.default.createElement(c.default,{selectedMember:this.state.excludeMembers,searchMemberUrl:this.props.memberSearchUrl,disabled:m,handleDelete:this.handleExcludeMemberDelete,handleAddition:this.handleExcludeAddition}),r.default.createElement("input",{type:"hidden",name:d,className:"form-control",value:M})))}})},296:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n);t.default=r.default.createClass({displayName:"PermissionRadioComp",render:function(){return r.default.createElement("label",null,r.default.createElement("input",{type:"radio",disabled:this.props.controlDisabled,name:this.props.name,value:this.props.data.value,checked:this.props.isChecked,onChange:this.inputChange})," ",this.props.data.name,"  ")},inputChange:function(e){this.props.onChangeRadio(e.target.value)},prodTypes:{data:r.default.PropTypes.object,onChangeRadio:r.default.PropTypes.function,isChecked:r.default.PropTypes.boolean,controlDisabled:r.default.PropTypes.boolean,name:r.default.PropTypes.string}})},297:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),l=a(154),i=s(l),d=a(298),u=s(d),o=a(299),c=s(o),p={ENTER:13,TAB:9,BACKSPACE:8,UP_ARROW:38,DOWN_ARROW:40,ESCAPE:27};t.default=r.default.createClass({displayName:"PermissionInclude",propTypes:{selectedGroup:r.default.PropTypes.array,selectedMember:r.default.PropTypes.array,placeholder:r.default.PropTypes.string,suggestion:r.default.PropTypes.array,groups:r.default.PropTypes.array,handleGroupDelete:r.default.PropTypes.func.isRequired,handleMemberDelete:r.default.PropTypes.func.isRequired,handleAddition:r.default.PropTypes.func.isRequired},getDefaultProps:function(){return{placeholder:XE.Lang.trans("xe::explainIncludeUserOrGroup"),selectedGroup:[],selectedMember:[],groupSuggestions:[],memberSuggestions:[]}},componentDidMount:function(){},getInitialState:function(){return{suggestions:[],groupSuggestions:[],memberSuggestions:[],query:"",selectedIndex:-1,selectionMode:!1,searchingCnt:0}},handleGroupDelete:function(e,t){this.props.handleGroupDelete(e),this.setState({query:""})},handleMemberDelete:function(e,t){this.props.handleMemberDelete(e),this.setState({query:""})},handleChange:function(e){var t=e.target.value.trim();if(this.setState({query:t}),t.length>0){var a=t.substr(0,1);switch(a){case"@":t=t.substr(1,t.length),this.searchMember(t);break;case"%":t=t.substr(1,t.length),this.searchGroup(t)}}else this.setState({query:"",suggestions:[],searchingCnt:0})},searchMember:function(e){var t=this.props.searchMemberUrl,a=this,s=this.state.searchingCnt+1;a.setState({searchingCnt:s}),$.ajax({url:t+"/"+e,method:"get",dataType:"json",cache:!1,success:function(e){var t=a.state.searchingCnt;t-=1,a.setState({suggestions:e,searchingCnt:t})}.bind(a),error:function(e,s,n){var r=a.state.searchingCnt;r-=1,a.setState({searchingCnt:r}),console.error(t,s,n.toString())}.bind(a)})},searchGroup:function(e){var t=this.props.searchGroupUrl,a=this,s=this.state.searchingCnt+1;a.setState({searchingCnt:s}),$.ajax({url:t+"/"+e,method:"get",dataType:"json",cache:!1,success:function(e){var t=a.state.searchingCnt;t-=1,a.setState({suggestions:e,searchingCnt:t})}.bind(a),error:function(e,s,n){var r=a.state.searchingCnt;r-=1,a.setState({searchingCnt:r}),console.error(t,s,n.toString())}.bind(a)})},handleKeyDown:function(e){var t=this.state,a=t.query,s=t.selectedIndex,n=t.suggestions;e.keyCode===p.ESCAPE&&(e.preventDefault(),this.setState({selectedIndex:-1,selectionMode:!1,suggestions:[]})),e.keyCode!==p.ENTER&&e.keyCode!==p.TAB||""==a||(e.preventDefault(),this.state.selectionMode&&this.addTag(this.state.suggestions[this.state.selectedIndex])),e.keyCode===p.BACKSPACE&&""==a&&(this.props.selectedMember.length>0?this.handleMemberDelete(this.props.selectedMember.length-1):this.handleGroupDelete(this.props.selectedGroup.length-1)),e.keyCode===p.UP_ARROW&&(e.preventDefault(),s<=0?this.setState({selectedIndex:this.state.suggestions.length-1,selectionMode:!0}):this.setState({selectedIndex:s-1,selectionMode:!0})),e.keyCode===p.DOWN_ARROW&&(e.preventDefault(),this.setState({selectedIndex:(this.state.selectedIndex+1)%n.length,selectionMode:!0}))},addTag:function(e){var t=i.default.findDOMNode(this.refs.input);this.props.handleAddition(e),this.setState({query:"",selectionMode:!1,selectedIndex:-1}),t.value="",t.focus()},handleSuggestionClick:function(e,t){this.addTag(this.state.suggestions[e])},handleSuggestionHover:function(e,t){this.setState({selectedIndex:e,selectionMode:!0})},render:function(){var e="%",t="@",a=this.props.selectedGroup.map(function(t,a){return r.default.createElement(c.default,{key:t.id,tag:t,prefix:e,onDelete:this.handleGroupDelete.bind(this,a)})}.bind(this)),s=this.props.selectedMember.map(function(e,a){return r.default.createElement(c.default,{key:e.id,tag:e,prefix:t,onDelete:this.handleMemberDelete.bind(this,a)})}.bind(this)),n=this.state.query.trim(),l=this.state.selectedIndex,i=this.state.suggestions,d=this.props.placeholder;return r.default.createElement("div",{className:"ReactTags__tags"},r.default.createElement("div",{className:"ReactTags__selected"},a),r.default.createElement("div",{className:"ReactTags__selected"},s),r.default.createElement("div",{className:"ReactTags__tagInput"},r.default.createElement("input",{type:"text",ref:"input",placeholder:d,className:"form-control",disabled:this.props.disabled,value:this.state.query,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),r.default.createElement(u.default,{query:n,suggestions:i,searchingCnt:this.state.searchingCnt,selectedIndex:l,handleClick:this.handleSuggestionClick,handleHover:this.handleSuggestionHover})))}})},298:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),l=2;t.default=r.default.createClass({displayName:"PermissionTagSuggestion",propTypes:{query:r.default.PropTypes.string.isRequired,selectedIndex:r.default.PropTypes.number.isRequired,suggestions:r.default.PropTypes.array.isRequired,handleClick:r.default.PropTypes.func.isRequired,handleHover:r.default.PropTypes.func.isRequired,searchingCnt:r.default.PropTypes.number},markIt:function(e,t){var a=t.trim().replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&"),s=RegExp(a,"gi"),n=e.displayName||e.name;return{__html:n.replace(s,"<mark>$&</mark>")}},render:function(){var e,t,a,s=this.props;return this.props.searchingCnt>0?t=r.default.createElement("ul",null,r.default.createElement("li",null,"Searching ... ",r.default.createElement("span",{className:"spinner",role:"spinner"},r.default.createElement("span",{className:"spinner-icon"})))):a=s.suggestions.map(function(e,t){return r.default.createElement("li",{key:t,onClick:s.handleClick.bind(null,t),onMouseOver:s.handleHover.bind(null,t),className:t==s.selectedIndex?"active":""},r.default.createElement("span",{dangerouslySetInnerHTML:this.markIt(e,s.query)}))}.bind(this)),e=r.default.createElement("ul",null,a),a&&0===a.length||s.query.length<l?r.default.createElement("div",{className:"ReactTags__suggestions"}):r.default.createElement("div",{className:"ReactTags__suggestions"},t,e)}})},299:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n);t.default=r.default.createClass({displayName:"PermissionTag",propTypes:{prefix:r.default.PropTypes.string,onDelete:r.default.PropTypes.func.isRequired,tag:r.default.PropTypes.object.isRequired},render:function(){var e=this.props.tag,t=e.displayName||e.name;return t=this.props.prefix+t,r.default.createElement("span",{className:"ReactTags__tag"},t,r.default.createElement("a",{className:"ReactTags__remove",onClick:this.props.onDelete},"x"))}})},300:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),l=a(154),i=s(l),d=a(298),u=s(d),o=a(299),c=s(o),p={ENTER:13,TAB:9,BACKSPACE:8,UP_ARROW:38,DOWN_ARROW:40,ESCAPE:27};t.default=r.default.createClass({displayName:"PermissionExclude",propTypes:{selectedMember:r.default.PropTypes.array,placeholder:r.default.PropTypes.string,suggestions:r.default.PropTypes.array,handleDelete:r.default.PropTypes.func.isRequired,handleAddition:r.default.PropTypes.func.isRequired},getDefaultProps:function(){return{placeholder:XE.Lang.trans("xe::explainExcludeUser"),selectedMember:[],suggestions:[]}},componentDidMount:function(){},getInitialState:function(){return{suggestions:[],query:"",selectedIndex:-1,selectionMode:!1,searchingCnt:0}},handleDelete:function(e,t){this.props.handleDelete(e),this.setState({query:""})},handleChange:function(e){var t=e.target.value.trim();this.setState({query:t});var a=t.substr(0,1);if("@"==a){var s=t.substr(1,t.length);this.searchMember(s)}else this.setState({suggestions:[],searchingCnt:0})},searchMember:function(e){var t=this.props.searchMemberUrl,a=this,s=this.state.searchingCnt+1;a.setState({searchingCnt:s}),$.ajax({url:t+"/"+e,method:"get",dataType:"json",cache:!1,success:function(e){var t=a.state.searchingCnt;t-=1,a.setState({suggestions:e,searchingCnt:t})}.bind(a),error:function(e,s,n){var r=a.state.searchingCnt;r-=1,a.setState({searchingCnt:r}),console.error(t,s,n.toString())}.bind(a)})},handleKeyDown:function(e){var t=this.state,a=t.query,s=t.selectedIndex,n=t.suggestions;e.keyCode===p.ESCAPE&&(e.preventDefault(),this.setState({selectedIndex:-1,selectionMode:!1,suggestions:[]})),e.keyCode!==p.ENTER&&e.keyCode!==p.TAB||""==a||(e.preventDefault(),this.state.selectionMode&&this.addTag(this.state.suggestions[this.state.selectedIndex])),e.keyCode===p.BACKSPACE&&""==a&&this.handleDelete(this.props.selectedMember.length-1),e.keyCode===p.UP_ARROW&&(e.preventDefault(),s<=0?this.setState({selectedIndex:this.state.suggestions.length-1,selectionMode:!0}):this.setState({selectedIndex:s-1,selectionMode:!0})),e.keyCode===p.DOWN_ARROW&&(e.preventDefault(),this.setState({selectedIndex:(this.state.selectedIndex+1)%n.length,selectionMode:!0}))},addTag:function(e){var t=i.default.findDOMNode(this.refs.input);this.props.handleAddition(e),this.setState({query:"",selectionMode:!1,selectedIndex:-1}),t.value="",t.focus()},handleSuggestionClick:function(e,t){this.addTag(this.state.suggestions[e])},handleSuggestionHover:function(e,t){this.setState({selectedIndex:e,selectionMode:!0})},render:function(){var e="@",t=this.props.selectedMember.map(function(t,a){return r.default.createElement(c.default,{key:t.id,tag:t,prefix:e,onDelete:this.handleDelete.bind(this,a)})}.bind(this)),a=this.state.query.trim(),s=this.state.selectedIndex,n=this.state.suggestions,l=this.props.placeholder;return r.default.createElement("div",{className:"ReactTags__tags"},r.default.createElement("div",{className:"ReactTags__selected"},t),r.default.createElement("div",{className:"ReactTags__tagInput"},r.default.createElement("input",{type:"text",ref:"input",placeholder:l,className:"form-control",disabled:this.props.disabled,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),r.default.createElement(u.default,{query:a,suggestions:n,searchingCnt:this.state.searchingCnt,selectedIndex:s,handleClick:this.handleSuggestionClick,handleHover:this.handleSuggestionHover})))}})},301:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var n=a(3),r=s(n),l=a(154),i=s(l),d=a(295),u=s(d);$(".__xe__uiobject_permission").each(function(e){var t=$(this),a=t.data("data"),s=t.data("key"),n=t.data("type"),l=t.data("memberUrl"),d=t.data("groupUrl"),o=t.data("vgroupAll");i.default.render(r.default.createElement(u.default,{key:s,memberSearchUrl:l,groupSearchUrl:d,permission:a,type:n,vgroupAll:o}),this)})},302:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),r=s(n),l=a(297),i=s(l),d=a(300),u=s(d),o=a(296),c=s(o);t.default=r.default.createClass({displayName:"Permission",propTypes:{permission:r.default.PropTypes.object,type:r.default.PropTypes.string},getDefaultProps:function(){return{modeEnable:!1}},getInitialState:function(){return this.init(this.props)},init:function(e){var t,a,s=e.permission,n=[],r=[],l=[];return s&&(t=s.mode,a=s.rating,n=s.group,r=s.user,l=s.except),{permission:s,modeEnable:this.props.modeEnable,formData:{mode:t,rating:a},includeGroups:n,includeMembers:r,excludeMembers:l}},componentDidMount:function(){},componentDidUpdate:function(e){var t=this.props.permission;t!==e.permission&&this.setState(this.init(this.props))},inputChange:function(e,t){var a=t.target.value,s=this.state.formData;s[e]=a,this.setState({formData:s})},handleIncludeGroupDelete:function(e){var t=this.state.includeGroups;t.splice(e,1),this.setState({includeGroups:t})},handleIncludeMemberDelete:function(e){var t=this.state.includeMembers;t.splice(e,1),this.setState({includeMembers:t})},handleExcludeMemberDelete:function(e){var t=this.state.excludeMembers;t.splice(e,1),this.setState({excludeMembers:t})},handleIncludeAddition:function(e){var t,a=this.state.includeGroups,s=this.state.includeMembers;e.hasOwnProperty("displayName")?(t=_.find(s,{id:e.id}),t||(s.push(e),this.setState({includeMembers:s}))):(t=_.find(a,{id:e.id}),t||(a.push(e),this.setState({includeGroups:a})))},handleExcludeAddition:function(e){var t=this.state.excludeMembers,a=_.find(t,{id:e.id});a||(t.push(e),this.setState({excludeMembers:t}))},render:function(){var e=this,t=this.props.type+"Rating",a=this.props.type+"Group",s=this.props.type+"User",n=this.props.type+"Except",l=this.props.type+"VGroup[]",d=this.state.formData.mode,o=this.state.formData.rating,p=!1;"manual"!==d&&"inherit"!==d||"manual"!==d&&(p=!0);var h=[{value:"super",name:"Super"},{value:"manager",name:"Manager"},{value:"member",name:"Member"},{value:"guest",name:"Guest"}],m=this.props.vgroupAll.length<1?null:this.props.vgroupAll.map(function(e){var t={type:"checkbox",disabled:p,name:l,value:e.id,key:e.id},a=function(e,t){for(var a=0;a<t.length;a++)if(t[a]==e)return a;return-1};return a(e.id,this.props.permission.vgroup)!=-1&&(t.defaultChecked=!0),r.default.createElement("label",null,r.default.createElement("input",t)," ",e.title,"  ")}.bind(this)),f=this.state.includeGroups.map(function(e){return e.id}),g=this.state.includeMembers.map(function(e){return e.id}),b=this.state.excludeMembers.map(function(e){return e.id});return r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement("label",null,"Rating  ",r.default.createElement("i",{className:"fa fa-info-circle","data-toggle":"popover","data-content":"권한의 등급을 설정합니다."})),r.default.createElement("br",null),h.map(function(a,s){var n=a.value===o;return r.default.createElement(c.default,{data:a,name:t,isChekced:n,controlDisabled:p,key:s,onChangeRadio:e.inputChange})})),r.default.createElement("div",null,r.default.createElement("label",null,"Include Group and User ",r.default.createElement("i",{className:"fa fa-info-circle","data-toggle":"popover","data-content":"포함하고자 하는 대상을 지정합니다.","data-original-title":""})),r.default.createElement("br",null),r.default.createElement(i.default,{selectedGroup:this.state.includeGroups,selectedMember:this.state.includeMembers,searchMemberUrl:this.props.memberSearchUrl,searchGroupUrl:this.props.groupSearchUrl,disabled:p,handleGroupDelete:this.handleIncludeGroupDelete,handleMemberDelete:this.handleIncludeMemberDelete,handleAddition:this.handleIncludeAddition}),r.default.createElement("input",{type:"hidden",name:a,className:"form-control",value:f}),r.default.createElement("input",{type:"hidden",name:s,className:"form-control",value:g})),function(){if(m)return r.default.createElement("p",null,r.default.createElement("label",null,"Include Virtual Group ",r.default.createElement("i",{className:"fa fa-info-circle","data-toggle":"popover","data-content":"포함하고자 하는 대상을 지정합니다.","data-original-title":""})),r.default.createElement("br",null),m)}.call(this),r.default.createElement("div",null,r.default.createElement("label",null,"Exclude User  ",r.default.createElement("i",{className:"fa fa-info-circle","data-toggle":"popover","data-content":"제외하고자 하는 대상을 지정합니다.","data-original-title":""})),r.default.createElement("br",null),r.default.createElement(u.default,{selectedMember:this.state.excludeMembers,searchMemberUrl:this.props.memberSearchUrl,disabled:p,handleDelete:this.handleExcludeMemberDelete,handleAddition:this.handleExcludeAddition}),r.default.createElement("input",{type:"hidden",name:n,className:"form-control",value:b})))}})}});