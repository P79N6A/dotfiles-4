var oneMinuteSignup=oneMinuteSignup||{};oneMinuteSignup.TabProperties=function(){var t=this;this.scriptTimeout=null,this.tab=null,this.tabId=null,this.appLoginUrl=null,this.url=null,this.appId=null,this.appName=null,this.type=null,this.username=null,this.newPassword=null,this.activeScript=null,this.activeTriggerScript=null,this.currentState=oneMinuteSignup.ScriptState.done,this.setState=function(i){console.log("App: "+t.appId+" State: "+i),i===oneMinuteSignup.ScriptState.done&&t.clearTimeout(),t.currentState=i},this.setTimeout=function(i){t.scriptTimeout=setTimeout(function(){i(t)},3e4)},this.clearTimeout=function(){clearTimeout(t.scriptTimeout)}};
//# sourceMappingURL=sourcemaps/1minsignup/models/TabProperties.js.map
