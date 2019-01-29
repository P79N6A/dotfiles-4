var CPWbot_cs;function CPWbot_cs_lib(){var e=this;this.JSON=JSON,JSON||(this.JSON=LPJSON),LPJSON;this.alert=alert;this.fill_field=function(e,t){if(e||(e=LP_derive_doc()),!t||!e)return!1;var i=0,n=this.getElementByType(e,t);if(n){if(info_log(e,"CA23",{param1:t.id_type,param2:t.id_value,param3:t.should_click,param4:t.should_fill_via_keys}),n.focus(),t.should_click){var r=t.flavor;CPWbot_cs.do_click(e,n,r),"function"==typeof sendKey&&sendKey("Z",n),fire_onchange(n,!0,!0)}t.should_fill_via_keys&&g_isfirefox?fill_field_via_keys(n,t.field_value):n.value=t.field_value,fire_onchange(n),i=1}else info_log(e,"CA24",{param1:t.id_type,param2:t.id_value});return sendBG({cmd:"cpwbot_fill_ack",url:get_doc_location_href(e),docstate:e.readyState,req_id:t.req_id,id_type:t.id_type,id_value:t.id_value,found:i?1:0,should_click:t.should_click,should_fill_via_keys:t.should_fill_via_keys},e),!0},this.click_field=function(t,i){if(t||(t=LP_derive_doc()),!i||!t)return!1;var n=e.CLICK_NOMINAL,r=e.CLICK_NO_FOCUS,a=e.CLICK_MOUSEDOWN,s=e.CLICK_STRANGE,o=this.getElementByType(t,i),l=0,d=n;if(i.flavor){var _=[n,r,a,s];lp_in_array(i.flavor,_)?d=i.flavor:info_log(t,"CA3")}return o?(info_log(t,"CA4",{param1:getmydocnum(t),param2:i.pwchangestate,param3:i.id_type,param4:i.id_value}),this.do_click(t,o,d),l=1):(info_log(t,"CA5",{param1:getmydocnum(t),param2:i.pwchangestate,param3:i.id_type,param4:i.id_value}),g_isdebug),sendBG({cmd:"cpwbot_click_ack",url:get_doc_location_href(t),docstate:t.readyState,pwchangestate:i.pwchangestate,msgid:i.msgid,id_type:i.id_type,id_value:i.id_value,found:l?1:0,flavor:d},t),!0},this.execute_script=function(e,t){if(e||(e=LP_derive_doc()),!t||!e||!Math)return!1;if(!g_isfirefox||!e||e.defaultView){var i=t.js,n=t.hash,r=null;if(i){var a,s=i;if(a="function"==typeof fasthash?fasthash:"function"==typeof crc32?crc32:"function(j) { if (j) { return j.length; } return 0; }",info_log(e,"CA6",{param1:n,param2:a(s)}),n!=a(s))return info_log(e,"CA7"),!1;var o="__lpresult"+Math.floor(Math.random()*Math.pow(2,31));info_log(e,"CA8",{param1:getmydocnum(e),param2:i}),run_custom_js(e,i=null===e.body?"try{"+i+"}catch(e) { }":"try {"+sprintf("var _res = document.getElementById('%s');  if (!_res) { _res = document.createElement('div');  _res.id='%s'; _res.style.display='none'; _res.style.left='-1000px'; document.body.appendChild(_res); } { ",o,o)+i+"} if (_res) { if (typeof(_res.innerText) != 'undefined') { _res.innerText = document._g_result; } else { _res.textContent = document._g_result; } document._g_result = null; }} catch(e) { }");var l=e.getElementById(o);l&&(void 0===(r=LP_elt_get_text(l))&&(r=null),l.parentElement.removeChild(l)),i=null}return sendBG({cmd:"cpwbot_js_ack",url:get_doc_location_href(e),docstate:e.readyState,req_id:t.req_id,result:CPWbot_cs.JSON.stringify(r)},e),!0}},this.getElementByType=function(e,t){if(e||(e=LP_derive_doc()),!t||!e)return null;if(g_isfirefox&&e&&!e.defaultView)return null;var i=null,n=null,r=t.id_type,a=t.id_value,s=666;if(r&&a)switch(r){case"id":i=e.getElementById(a);break;case"name":(n=e.getElementsByName(a))&&n.length>0&&(i=n[0]);break;case"xpath":g_isie&&"undefined"!=typeof init_LPfn&&init_LPfn()&&LPfn&&(s=LPfn.getDocumentMode(e)),s<8?alert("old IE - does not bundle in XPATH support. TODO "):i=LP_getElementByXPath(e,a)}return i},this.getElementsByType=function(e,t){if(e||(e=LP_derive_doc()),!t||!e)return null;var i=null,n=[],r=t.id_type,a=t.id_value,s=666;if(r&&a)switch(r){case"id":(i=e.getElementById(a))&&n.push(i);break;case"name":n=e.getElementsByName(a);break;case"xpath":g_isie&&"undefined"!=typeof init_LPfn&&init_LPfn()&&LPfn&&(s=LPfn.getDocumentMode(e)),s<8?this.alert("old IE - does not bundle in XPATH support. TODO "):n=LP_getElementsByXPath(e,a)}return n},this.field_is_displayed=function(e,t){return e||(e=LP_derive_doc()),!(!t||!e)&&!!lpIsVisible(t)},this.CLICK_NOMINAL=0,this.CLICK_NO_FOCUS=1,this.CLICK_MOUSEDOWN=2,this.CLICK_STRANGE=3,this.do_click=function(t,i,n){if(t||(t=LP_derive_doc()),!i||!t)return!1;var r=null;"undefined"!=typeof window&&(r=window),r||(r=t.defaultView),g_isfirefoxsdk&&r&&r.wrappedJSObject&&(r=r.wrappedJSObject);var a,s,o,l,d=e.CLICK_NOMINAL,_=e.CLICK_NO_FOCUS,c=e.CLICK_MOUSEDOWN,u=e.CLICK_STRANGE;switch(void 0!==n&&n||(n=d),void 0!==i.disabled&&i.disabled&&(i.disabled=!1),n!==_&&i.focus(),n){case u:0;break;case c:var f=LP_getAbsolutePos(t,i);if(f&&i){var m,p=i;(m=document.createEvent("MouseEvent")).target=p,m.initMouseEvent("mouseenter",!0,!1,r,0,f.left,f.top,f.left,f.top,!1,!1,!1,!1,0,r.document.documentElement),p.dispatchEvent(m),(m=document.createEvent("MouseEvent")).target=p,m.initMouseEvent("mousemove",!0,!1,r,0,f.left+2,f.top+2,f.left+2,f.top+2,!1,!1,!1,!1,0,null),p.dispatchEvent(m),(m=document.createEvent("MouseEvent")).target=p,m.initMouseEvent("mousedown",!0,!1,r,0,f.left+2,f.top+2,f.left+2,f.top+2,!1,!1,!1,!1,0,null),p.dispatchEvent(m),(m=document.createEvent("MouseEvent")).target=p,m.initMouseEvent("mouseup",!0,!1,r,0,f.left+2,f.top+2,f.left+2,f.top+2,!1,!1,!1,!1,0,null),p.dispatchEvent(m),(m=document.createEvent("MouseEvent")).target=p,m.initMouseEvent("click",!0,!1,r,0,f.left+2,f.top+2,f.left+2,f.top+2,!1,!1,!1,!1,0,null),p.dispatchEvent(m)}break;case d:case _:default:s=i,o="click",l="MouseEvents",(a=t)&&s&&o&&l&&(g_isfirefox?fireEvent(a,s,o,l):LP_fireEvent(s,o,l))}return!0},this.decode_fields_metainfo=function(e){var t="";return e&&(t=this.JSON.parse(e)),t},this.validate_page_fields=function(t,i,n,r,a,s,o,l){if(!t)return null;var d,_=!0,c={};info_log(t,"CA9",{param1:getmydocnum(t),param2:i}),n||(n=[]),r||(r=[]),l||(l=[]);var u,f=!1,m=0,p=0,g=0,y=0,v=n,h=r,E=l;if(s){u=new RegExp(s,"i");var b=punycode.URLToASCII(t.location.href);if(u.exec(b))return c.num_ok_matches=null,c.num_okfields=null,c.found_bad_match=null,c.num_badfields=null,c.url_success_match=!0,c.url_failure_match=!1,c.do_retry=!1,c.retval=!0,c.found_interactive=!1,info_log(t,"CA10",{param1:getmydocnum(t),param2:s}),g_isdebug&&(set_innertext(c,LP_elt_get_text(t.body)),c.innerhtml=t.body.innerHTML),c}if(o){u=new RegExp(o,"i");b=punycode.URLToASCII(t.location.href);if(u.exec(b))return c.num_ok_matches=null,c.num_okfields=null,c.found_bad_match=null,c.num_badfields=null,c.url_failure_match=!0,c.url_success_match=!1,c.do_retry=!1,c.retval=!1,c.found_interactive=!1,info_log(t,"CA11",{param1:getmydocnum(t),param2:o}),g_isdebug&&(set_innertext(c,LP_elt_get_text(t.body)),c.innerhtml=t.body.innerHTML),c}for(d=0;d<v.length;d++){var A=v[d].id_type,S=v[d].id_value;if(!e.getElementByType(t,{id_type:A,id_value:S})){info_log(t,"CA12",{param1:getmydocnum(t),param2:A,param3:S});break}m++,p++}if(p<v.length&&(f=!0,_=null),_)for(d=0;d<h.length;d++){A=h[d].id_type,S=h[d].id_value;if(this.getElementByType(t,{id_type:A,id_value:S})){m++,g=1,info_log(t,"CA13",{param1:getmydocnum(t),param2:S}),_=!1,f=!1;break}f=!0}for(d=0;d<E.length;d++){A=E[d].id_type,S=E[d].id_value;if(this.getElementByType(t,{id_type:A,id_value:S})){m++,y=1,info_log(t,"CA14",{param1:getmydocnum(t),param2:S}),f=!1;break}}return 0===m&&(v.length>0||h.length>0)&&(_=null),c&&(c.num_ok_matches=p,c.num_okfields=v.length,c.found_bad_match=g,c.num_badfields=h.length,c.do_retry=f,c.retval=_,c.url_success_match=!1,c.url_failure_match=!1,c.found_interactive=y,g_isdebug&&(set_innertext(c,LP_elt_get_text(t.body)),c.innerhtml=t.body.innerHTML)),c},this.interrogate=function(e,t,i){if(t&&!(i>10)){var n=t.desc,r=(t.required_fields,t.rejected_fields,t.proceed_on_interactive);void 0===i&&(i=1);var a;t.interactive_fields;if(a=e.readyState,!(r?"complete"==a||"interactive"==a:"complete"==a))return info_log(e,"CA15",{param1:getmydocnum(e),param2:n,param3:500,param4:e.readyState}),void setTimeout(function(){CPWbot_cs.interrogate(e,t,i+1)},500);g_cpwbot&&CPWbot_cs&&CPWbot_cs.interrogate_validate(e,t)}},this.interrogate_validate=function(e,t,i){if(!t||i>10)return!1;void 0!==i&&null!==i||(i=1);var n=t.desc,r=t.required_fields,a=t.rejected_fields,s=t.required_url,o=t.rejected_url,l=t.interactive_fields,d=t.id,_=t.validate_timeout,c=t.timestamp,u=((new Date).getTime()-c)/1e3;if(void 0!==_&&null!==_||(_=0),_>0&&i>=_/2e3)return info_log(e,"CA16",{param1:getmydocnum(e),param2:_,param3:1e3,param4:i,param5:u}),!1;info_log(e,"CA17",{param1:getmydocnum(e),param2:_,param3:1e3,param4:i,param5:u});var f=CPWbot_cs.decode_fields_metainfo(r),m=CPWbot_cs.decode_fields_metainfo(a),p=CPWbot_cs.decode_fields_metainfo(l);if(0===f.length&&0===m.length&&!o&&!s)return p.length,info_log(e,"CA18",{param1:getmydocnum(e)}),y=!0,sendBG({cmd:"cpwbot_validate_state_result",state:"STATE"+i,url:get_doc_location_href(e),docstate:e.readyState,desc:n,id:d,required_fields:r,rejected_fields:a,required_url:s,rejected_url:o,result_obj:CPWbot_cs.JSON.stringify(g),result:CPWbot_cs.JSON.stringify(y)},e),!0;var g=CPWbot_cs.validate_page_fields(e,n,f,m,_,s,o,p);if(null===g)return null;var y=g.retval;return g.do_retry&&null===y?(f.length,info_log(e,"CA19",{param1:getmydocnum(e),param2:i,param3:u,param4:n,param5:1}),setTimeout(function(){var l=CPWbot_cs.interrogate_validate(e,t,i+1);l||(l=0===f.length&&m.length>0||f.length>0&&m.length>0&&g.num_ok_matches>0,sendBG({cmd:"cpwbot_validate_state_result",state:"STATE_TIMEDOUT",url:get_doc_location_href(e),docstate:e.readyState,desc:n,id:d,required_fields:r,rejected_fields:a,required_url:s,rejected_url:o,result_obj:CPWbot_cs.JSON.stringify(g),result:CPWbot_cs.JSON.stringify(l)},e))},1e3),!0):(null===y&&(info_log(e,"CA20",{param1:getmydocnum(e)}),y=!1),sendBG({cmd:"cpwbot_validate_state_result",state:"STATE"+i,url:get_doc_location_href(e),docstate:e.readyState,desc:n,id:d,required_fields:r,rejected_fields:a,required_url:s,rejected_url:o,result_obj:CPWbot_cs.JSON.stringify(g),result:CPWbot_cs.JSON.stringify(y)},e),!0)};var t="__lpresultdiv";return this.do_result_div=function(e,i){if(!e)return!1;if(!g_isdebug)return!1;g_isdebug&&check_for_selenium_bits(e);var n=e.getElementById(t);return!n&&e.body&&(n=e.createElement("div"))&&(n.id=t,n.style.left="-999px",n.style.position="absolute",e.body.appendChild(n)),LP_elt_set_text(n,i)},this.hide_result_div=function(e){if(!e)return!1;var i=e.getElementById(t);return i&&i.parentElement.removeChild(i),!0},!0}function display_cpw_message_loop(e,t,i){if(e){if(null===t){if(null===e.getElementById("cpwmsg"))return;g_ischrome?chrome_runtime_sendMessage({cmd:"getcpwmsg"},function(t){t&&t.msg&&display_cpw_message(e,t.msg),1===t.minimize_state&&minimize_cpw_dialog(e)}):"undefined"!=typeof safari?(safari.self.removeEventListener("message",handleMessage,!1),safari.self.addEventListener("message",handleMessage,!1),safari.self.tab.dispatchMessage("getcpwmsg",{})):"undefined"!=typeof g_isfirefoxsdk&&g_isfirefoxsdk&&send_message({messagetype:"getcpwmsg"})}else display_cpw_message(e,t,i);g_isdebug&&check_for_selenium_bits(e),setTimeout(function(){display_cpw_message_loop(e,null,null)},51)}}function update_msgdiv_css(e,t,i,n,r){if(!e)return!1;var a="position:absolute !important; z-index: 200; visibility:visible !important;  border-style:transparent!important; border-width:0px !important;";a+='font-size:14px; font-family: "Open Sans",sans-serif',a+="height: "+t+" !important ; width: "+i+" !important; top:"+r+" !important; left:"+n+" !important; background-color: #ffffff;",a+="margin: 4px !important; padding: 0px !important; overflow:auto;",a+='font-family: "open_sansregular",helvetica neue,helvetica,arial,sans-serif;';var s=e.getElementById("cpwmsg");return!!s&&(s.style.cssText=a,!0)}CPWbot_cs||(CPWbot_cs=new CPWbot_cs_lib);var OVERLAY_MESSAGE_WIDTH="500px",OVERLAY_MESSAGE_HEIGHT="200px",OVERLAY_MESSAGE_HEIGHT_MINIMIZED="70px",OVERLAY_MESSAGE_TOP="50px",OVERLAY_MESSAGE_LEFT="50px";function display_cpw_message(e,t,i){if(e){if(n=e.getElementById("cpwmsg"))pass;else{var n,r=e.createElement("div");if(r.style.width="100%",r.style.height=window.innerHeight+"px",r.style.opacity="0.7",r.style.backgroundColor="#666666",r.id="cpwbg",r.style.position="absolute",r.style.top="0px",r.style.left="0px",e.body.appendChild(r),n=e.createElement("div")){n.id="cpwmsg",e.body.appendChild(n);update_msgdiv_css(e,OVERLAY_MESSAGE_HEIGHT,OVERLAY_MESSAGE_WIDTH,OVERLAY_MESSAGE_TOP,OVERLAY_MESSAGE_LEFT),n.setAttribute("role","status");var a,s=e.createElement("div");LP_set_style_attr(s,"color: #ffffff; padding: 18px 10px 18px 174px; background-color: #D22D27 !important; background-image:url(data:image/png;base64,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); background-repeat:no-repeat; background-position: 12px 14px; background-attachment: scroll;"),s.id="cpwtitle",s.addEventListener("click",function(){return toggle_cpw_dialog(e),!1},!1),(a=e.createElement("div")).id="msgbody",a.style.fontSize="18px",a.style.padding="10px 0px";var o=e.createElement("div"),l=e.createElement("div");l.style.width="100%",l.style.textAlign="right";var d=gs("Automatic Password Change");LP_elt_set_text(l,d),s.appendChild(l),n.appendChild(s);var _=e.createElement("div");_.style.padding="10px",n.appendChild(_),o.style.marginTop="5px",o.style.marginBottom="5px",o.style.fontSize="14px",o.style.color="#F09C0E";var c=gs("Please do not close this tab until LastPass is done updating your password.");LP_elt_set_text(o,c),_.appendChild(a),_.appendChild(o)}}a||(a=e.getElementById("msgbody")),a&&LP_elt_set_text(a,t)}}function cpw_hide_overlay(e,t){if(!e)return!1;if(g_isfirefox);else{var i=e.getElementById("lpiframeoverlaycpwmsg");i&&i.parentNode.removeChild(i)}return!0}function toggle_cpw_dialog(e){if(!e)return!1;var t=e.getElementById("msgbody");return!(!e.getElementById("cpwmsg")||!t)&&("none"==t.style.display?(maximize_cpw_dialog(e),maximize_cpw_bg()):(minimize_cpw_dialog(e),minimize_cpw_bg()),!0)}function maximize_cpw_dialog(e){if(!e)return!1;var t=OVERLAY_MESSAGE_TOP,i=OVERLAY_MESSAGE_LEFT,n=OVERLAY_MESSAGE_WIDTH,r=OVERLAY_MESSAGE_HEIGHT,a=e.getElementById("msgbody");return!(!e.getElementById("cpwmsg")||!a)&&("block"!=a.style.display&&(update_msgdiv_css(e,r,n,t,i),a.style.display="block"),!0)}function minimize_cpw_dialog(e){if(!e)return!1;var t=OVERLAY_MESSAGE_TOP,i=OVERLAY_MESSAGE_LEFT,n=OVERLAY_MESSAGE_WIDTH,r=e.getElementById("msgbody");return!(!e.getElementById("cpwmsg")||!r)&&("none"!=r.style.display&&(update_msgdiv_css(e,OVERLAY_MESSAGE_HEIGHT_MINIMIZED,n,t,i),r.style.display="none"),!0)}function do_cpw_overlay_handler(e,t){if(CPWbot_cs&&CPWbot_cs.JSON&&e&&e.msg){var i=CPWbot_cs.JSON.parse(e.msg);if(i){var n=encodeURIComponent(i.symbolic);if(g_isfirefox)lpShowOverlay(t,0,i.msg),lpSetOverlayStatus(t,""),lpisadmin&&do_cpw_debug(t);else{var r=encodeURIComponent(i.msg);info_log(t,"CA21",{param1:r}),showoverlay(e,"&cpwbot="+r+"&symbolic="+n)}}else info_log(t,"CA22")}}function ping_req_handler(e,t){var i=(new Date).getTime(),n=0;void 0!==t.timestamp&&t.timestamp&&(n=i-t.timestamp);var r="";try{r=punycode.URLToASCII(e.location.href)}catch(e){}sendBG({cmd:"ping_ack",timestamp:i,delta:n,id:t.id,url:r,docstate:get_docstate(e),flags:assemble_docflags_object(e)},e)}function get_docstate(e){return e?void 0!==e.readyState&&e.readyState?e.readyState:"undef":null}function assemble_docflags_object(e){if(!e||!e.location)return null;var t=e.location.origin?e.location.origin:null;return{is_special_site:g_is_specialsite,in_cpwbot:g_in_cpwbot,tutorial_flags:g_tutorial_flags,need_dynamic_delay:g_need_dynamic_delay,has_frameset:e.getElementsByTagName("FRAMESET").length>0,domain:e.domain,origin:t}}function run_custom_js(e,t,i){if(e){"undefined"!=typeof g_iscasper&&g_iscasper&&(this.stash_script=l,this.get_script=o,this.delete_script=d,this.prep_and_delete_priors=_);var n=_(e,i);try{if(""!=t){if(!e.g_content_check_result||is_page_JSON(e))return void(e.g_content_check_result=!1);var r=lp_gettld_url(e.location.href);if(("facebook.com"==r||"live.com"==r||"outlook.com"==r)&&0==e.getElementsByTagName("form").length)return;t="try{"+(t=t.replace(/lpcurrpage./g,""))+"}catch(e){}";var a=e.createElement("script"),s=e.createTextNode(t);a.appendChild(s),e.body&&e.body.appendChild(a),l(e,n,a)}}catch(e){}}function o(e,t){var i=null;return e||(e=LP_derive_doc()),e&&t?(e.script_stash?void 0===(i=e.script_stash[t])&&(i=null):e.script_stash={},i):null}function l(e,t,i){return e||(e=LP_derive_doc()),!!e&&(e.script_stash||(e.script_stash={}),!(!i||!t)&&(e.script_stash[t]=i,!0))}function d(e,t){if(!t||!e)return!1;var i=null;e.script_stash&&((i=e.script_stash[t])&&i.parentNode&&(verbose_log("cleanup: "+t),i.parentNode.removeChild(i)),delete e.script_stash[t]);return!0}function _(e,t){if(e||(e=LP_derive_doc()),!e)return"";var i="_lastpass_",n="";if(t&&"string"==typeof t){o(e,n=i+t);if(d(e,n),"3"===t)for(var r=1;r<3;r++){var a=i+r.toString();o(e,a),d(e,a)}}return null,n}}function do_result_div_handler(e,t){return g_isdebug&&CPWbot_cs&&CPWbot_cs.do_result_div(e,t.msg),!0}function hide_result_div_handler(e,t){return g_isdebug&&CPWbot_cs&&CPWbot_cs.hide_result_div(e),!0}function need_dynamic_delay(e){if(!e)return!1;var t=LP_elt_get_text(e.head);return LP_elt_get_text(e.body).indexOf("\x3c!-- ko")>=0||(t.indexOf("require")>=0||t.indexOf("lazyload")>=0)}function minimize_cpw_bg(){g_ischrome?chrome_runtime_sendMessage({cmd:"minimize_cpw_dialog"},function(e){pass}):"undefined"!=typeof safari?safari.self.tab.dispatchMessage("minimize_cpw_dialog",{}):"undefined"!=typeof g_isfirefoxsdk&&g_isfirefoxsdk&&send_message({messagetype:"minimize_cpw_dialog"})}function maximize_cpw_bg(){g_ischrome?chrome_runtime_sendMessage({cmd:"maximize_cpw_dialog"},function(e){pass}):"undefined"!=typeof safari?safari.self.tab.dispatchMessage("maximize_cpw_dialog",{}):"undefined"!=typeof g_isfirefoxsdk&&g_isfirefoxsdk&&send_message({messagetype:"maximize_cpw_dialog"})}function get_doc_location_href(e){try{return e.location?e.location.href:""}catch(e){return""}}function getmydocnum(e){if(g_isfirefox){if(e||(e=LP_derive_doc()),!e)return 0;if(void 0!==e.g_docnum)return e.g_docnum;var t=lpGetBrowserForDocument(e),i=get_tabid_from_browser(t);if(null==i)return console_error("did not found matching tab for given tabid, bail"),0;ff_setdocnum_conditional(e,i);g_CS_tops[i];return t.contentDocument==e&&(g_CS_tops[i]=e.g_docnum),e.g_docnum}return g_docnum}var g_is_selenium=!1,g_selenium_bits=-1,LPSELENIUMBITSDIV="__lpseleniumbitsdiv";function check_for_selenium_bits(e){if(!e)return-1;if(!g_isdebug)return-1;var t=-1,i=e.getElementById(LPSELENIUMBITSDIV);if(i){var n=parseInt(LP_elt_get_text(i));isNaN(n)||(g_selenium_bits=t=n),g_is_selenium=!0,sendBG({cmd:"from_selenium",bits:t,url:get_doc_location_href(e),docstate:e.readyState})}else-1!=g_selenium_bits&&(t=g_selenium_bits);return t}
//# sourceMappingURL=sourcemaps/cpwbot_cs.js.map
