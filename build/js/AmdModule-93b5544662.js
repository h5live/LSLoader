/*combojs*/define("AmdModule",["common/test"],function(e){return function(){$("body").append("AMDRunning:the test number is "+e.testNumber),$("body").append("</br>this is new version");new AMap.Map("container",{resizeEnable:!0,zoom:11,center:[116.397428,39.90923]})}});