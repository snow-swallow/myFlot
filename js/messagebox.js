var isIe=(document.all)?true:false;
function setSelectState(state){
	var objl=document.getElementsByTagName('select');
	for(var i=0;i<objl.length;i++){
		objl[i].style.visibility=state;
	}
}
function mousePosition(ev){
	if(ev.pageX || ev.pageY){
		return {
			x:ev.pageX, 
			y:ev.pageY
		};
	}
	return {
		x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y:ev.clientY + document.body.scrollTop - document.body.clientTop
	};
}
function showMessageBox(wTitle,content,pos,wWidth){
	closeWindow();
	var bWidth = document.documentElement.clientWidth;
	var bHeight = document.documentElement.clientHeight;
	if(isIe){
		setSelectState('hidden');
	}
	var back=document.createElement("div");
	back.id="back";
	var styleStr="top:0px;left:0px;position:fixed;background:#666;width:"+bWidth+"px;height:"+bHeight+"px;";
	styleStr+=(isIe)?"filter:alpha(opacity=0);":"opacity:0;";
	back.style.cssText=styleStr;
	document.body.appendChild(back);
	showBackground(back,50);
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";
	mesW.innerHTML="<div class='mesWindowTop'>"+
		"<table width='100%' height='100%'>"+
			"<tr>"+
				"<td>"+wTitle+"</td>"+
				"<td style='width:1px;'><input type='button' onclick='closeWindow();' title='Close' class='close' value='Close' /></td>"+
			"</tr>"+
		"</table>"+
	"</div>"+
	"<div class='mesWindowContent' id='mesWindowContent'>"+content+"</div>"+
	"<div style='text-align:center;padding-bottom:10px;'>" +
		"<a id='confirmBtn' href='javascript:;' class='msgBtn'>Yes</a><a id='cancelBtn' href='javascript:;' onclick='closeWindow();' class='ml5 msgBtn'>Cancel</a>"+
	"<div>"+
	"<div class='mesWindowBottom'></div>";
	var mesWWidth = 500, mesWHeight = 120;
	var mesWLeft = (document.documentElement.clientWidth-mesWWidth)/2;
	var mesWTop = (document.documentElement.clientHeight-mesWHeight)/2;
//	v_top += document.documentElement.scrollTop;
	styleStr="top:"+ mesWTop +"px;left:"+ mesWLeft +"px;position:fixed;width:"+ mesWWidth +"px;height:"+ mesWHeight +"px;z-index:9999;background-color:#fff;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}
function showBackground(obj,endInt){
	if(isIe){
		obj.filters.alpha.opacity+=5;
		if(obj.filters.alpha.opacity<endInt){
			setTimeout(function(){showBackground(obj,endInt)},5);
		}
	}else{
		var al=parseFloat(obj.style.opacity);al+=0.05;
		obj.style.opacity=al;
		if(al<(endInt/100)){
			setTimeout(function(){showBackground(obj,endInt)},5);
		}	
	}
}
function closeWindow(){
	if(document.getElementById('back')!=null){
		document.getElementById('back').parentNode.removeChild(document.getElementById('back'));
	}
	if(document.getElementById('mesWindow')!=null){
		document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
	}
	if(isIe){
		setSelectState('');
	}
}
function MessageBox(ev, title, content, fn){
	var objPos = mousePosition(ev);
	messContent="<div id='messageBox' style='padding:20px 0 20px 0;text-align:center'>"+content+"</div>";
	showMessageBox(title, messContent, objPos, 350);
	$('confirmBtn').on('click', function(){
		closeWindow();
		if(typeof fn === 'function'){
			fn();
		}
	})
}