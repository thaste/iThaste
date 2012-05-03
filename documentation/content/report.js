var incX = 0;
var incY = 0;
var intervalID = -1;
var goToURL = "#";
var shapeSpecURL = "#";
var cursorX = 0;
var cursorY = 0;

function initDiagram() {
	url = window.location.href;
	shapeIndex = url.indexOf('?shapeid=');
	if (shapeIndex != -1) {
		shapeid = url.substring(shapeIndex + '?shapeid='.length);
		lSelect = document.getElementById("SelectShape");
		if (lSelect != null) {
			for (i = 0; i < lSelect.options.length; i++) {
				if (lSelect.options[i].id == "option" + shapeid) {
					lSelect.selectedIndex = i;
					scrollWin(lSelect.value);
					showSpotLight(lSelect.value);
					break;
				}
			}
		}
	}
}
function initGridDiagram() {
	url = window.location.href;
	modelIndex = url.indexOf('.html#');
	if (modelIndex != -1) {
		modelid = url.substring(modelIndex + '.html#'.length);
		lSelect = document.getElementById('modelSelection' + modelid);
		if (lSelect != null) {
			lSelect.style.background='#FFE0E0';
		}
	}
}

function scrollWin(modelValues) {

	if (modelValues != ''){
		var diagram = document.getElementById("diagram");
		var xOffset = findPosX(diagram);
		var yOffset = findPosY(diagram);
	
		var viewportWidth = 0, viewportHeight = 0;
		if( typeof( window.innerWidth ) == 'number' ) {
			viewportWidth = window.innerWidth;
			viewportHeight = window.innerHeight;
		} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			viewportWidth = document.documentElement.clientWidth;
			viewportHeight = document.documentElement.clientHeight;
		} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
			viewportWidth = document.body.clientWidth;
			viewportHeight = document.body.clientHeight;
		}
		
		var lValues = modelValues.split("|");
		var lValueIndex = 0;
		var shapeOrConnector = lValues[lValueIndex++];
		
		var shapeX = lValues[lValueIndex++]*1;
		var shapeY = lValues[lValueIndex++]*1;
		var w = lValues[lValueIndex++]*1 + 20;
		var h = lValues[lValueIndex++]*1 + 20;
		var x = shapeX + xOffset*1 - viewportWidth/2 + w/2;
		var y = shapeY + yOffset*1 - viewportHeight/2 + h/2;
	
		incX = incY = 2;
		
		if (document.all) {
			if (!document.documentElement.scrollLeft)
				incX *= (document.body.scrollLeft > x?-15:15);
			else
				incX *= (document.documentElement.scrollLeft > x?-15:15);
								 
			if (!document.documentElement.scrollTop)
				incY *= (document.body.scrollTop > y?-15:15);
			else
				incY *= (document.documentElement.scrollTop > y?-15:15);
	
		}
		else {
			incX *= (window.pageXOffset > x?-15:15);
			incY *= (window.pageYOffset > y?-15:15);
		}
		
		intervalID = setInterval("doScroll(" + x + ", " + y +")", 1);
	}	
}

function doScroll(x, y) {
	var beforeX;
	var beforeY;
	var afterX;
	var afterY;

	if (document.all){
		if (!document.documentElement.scrollLeft)
			beforeX = document.body.scrollLeft;
		else
			beforeX = document.documentElement.scrollLeft;
							 
		if (!document.documentElement.scrollTop)
			beforeY = document.body.scrollTop;
		else
			beforeY = document.documentElement.scrollTop;
			
	}else{
		beforeX = window.pageXOffset;
		beforeY = window.pageYOffset;
	}

	window.scrollTo(beforeX+incX, beforeY+incY);
	
		if (document.all){
		if (!document.documentElement.scrollLeft)
			afterX = document.body.scrollLeft;
		else
			afterX = document.documentElement.scrollLeft;
							 
		if (!document.documentElement.scrollTop)
			afterY = document.body.scrollTop;
		else
			afterY = document.documentElement.scrollTop;
			
	}else{
		afterX = window.pageXOffset;
		afterY = window.pageYOffset;
	}
	
	if (incX!=0 && beforeX==afterX)
		incX = 0;
	if (incY!=0 && beforeY==afterY)
		incY = 0;
	
	if ((incX < 0 && (afterX < x || afterX+incX < x)) || (incX > 0 && (afterX > x || afterX+incX > x))) {
		incX = 0;
	} if ((incY < 0 && (afterY < y || afterY+incY < y)) || (incY > 0 && (afterY > y || afterY+incY > y))) {
		incY = 0;
	}

	if (incX==0 && incY==0) {
				window.clearInterval(intervalID);
	}
}

function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}

function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}

function showSpotLight(modelValues) {
	if (modelValues != '') {
		var diagram = document.getElementById("diagram");
		var xOffset = findPosX(diagram);
		var yOffset = findPosY(diagram);
		
		var lValues = modelValues.split("|");
		var lValueIndex = 0;
		var shapeOrConnector = lValues[lValueIndex++];
		
		var shapeX = lValues[lValueIndex++]*1;
		var shapeY = lValues[lValueIndex++]*1;
		var x = shapeX + xOffset*1 - 10;
		var y = shapeY + yOffset*1 - 10;
		var w = lValues[lValueIndex++]*1 + 20;
		var h = lValues[lValueIndex++]*1 + 20;
		var url_for_image_map = lValues[lValueIndex++];
		var url_for_spec = lValues[lValueIndex++];
		
		var spotLight = document.getElementById("spotlight");
		var spotlight_c = document.getElementById("spotlight_c");
		var spotLightResourcesTop = document.getElementById("spotLightResourcesTop");
		var spotLightResourcesRight = document.getElementById("spotLightResourcesRight");
		var spotLightTable = document.getElementById("spotLightTable");
		var spotLightCell = document.getElementById("spotLightCell");
		
		spotLight.style.width = w;
		spotLight.style.height = h;
		spotlight_c.width = w;
		spotlight_c.height = h;
		
		goToURL = url_for_image_map;
		shapeSpecURL = url_for_spec;
		
		var areaId = lValues[lValueIndex++];
		var areaObj = document.getElementById(areaId);
		spotLightCell.onmouseover= function onmouseover(event) {
			areaObj.onmouseover();
		};
		spotLightCell.onmouseout= function onmouseout(event) {
			areaObj.onmouseout();
		};
		
		N = (document.all) ? 0 : 1;
		if (N) {
			spotLight.style.left = x;
			spotLight.style.top = y;
			spotlight_c.style.left = x;
			spotlight_c.style.top = y;
			
			spotLightResourcesTop.style.left = x + w - 50;
			spotLightResourcesTop.style.top = y - 25;
			spotLightResourcesRight.style.left = x + w;
			spotLightResourcesRight.style.top = y + 10;
			spotLightTable.style.width = w;
			spotLightCell.style.width = w
			spotLightCell.style.height = h;
		}
		else {
			spotLight.style.posLeft = x;
			spotLight.style.posTop = y;
			spotlight_c.style.posLeft = x;
			spotlight_c.style.posTop = y;
			
			spotLightResourcesTop.style.posLeft = x + w - 50;
			spotLightResourcesTop.style.posTop = y - 25;
			spotLightResourcesRight.style.posLeft = x + w;
			spotLightResourcesRight.style.posTop = y + 10;
			spotLightTable.style.width = w;
			spotLightCell.style.width = w;
			spotLightCell.style.height = h;
		}			
		
		
		if (shapeOrConnector == 'connector') {
			// drawing connector
			spotLight.style.visibility = "hidden"
			
			var lPointCount = lValues[lValueIndex++];
			if (lPointCount > 0) {
				spotlight_c.style.visibility = "visible"
				
				var context = spotlight_c.getContext('2d');
				
				{
					context.beginPath();
					for (var lPointIndex = 0; lPointIndex < lPointCount; lPointIndex++) {
						var lPointX = lValues[lValueIndex++]*1 + 10; // +10, because <canvas 's x/y is -10, w/h is + 20.
						var lPointY = lValues[lValueIndex++]*1 + 10;
						
						if (lPointIndex == 0) {
							context.moveTo(lPointX+0.5, lPointY+0.5);
						}
						else {
							context.lineTo(lPointX+0.5, lPointY+0.5);
						}
					}
					context.lineWidth = 7;
					context.lineJoin = "round";
					context.strokeStyle="#0000FF";
					context.stroke();
				}
			}
			else {
				spotlight_c.style.visibility = "hidden"
			}
		}
		else {
			spotLight.style.visibility = "visible"
			spotlight_c.style.visibility = "hidden"
		}
		
		if (shapeY < 40){
			spotLightResourcesRight.style.visibility = "visible"
			spotLightResourcesTop.style.visibility = "hidden"
		}
		else {
			spotLightResourcesRight.style.visibility = "hidden"
			spotLightResourcesTop.style.visibility = "visible"
		}
		
	}
	else {
		var spotLight = document.getElementById("spotlight");
		var spotlight_c = document.getElementById("spotlight_c");
		var spotLightResourcesTop = document.getElementById("spotLightResourcesTop");
		var spotLightResourcesRight = document.getElementById("spotLightResourcesRight");
		spotLight.style.visibility = "hidden"
		spotlight_c.style.visibility = "hidden"
		spotLightResourcesTop.style.visibility = "hidden"
		spotLightResourcesRight.style.visibility = "hidden"
	}
}

function clearSpotLight() {
	var spotLight = document.getElementById("spotlight");
	var spotlight_c = document.getElementById("spotlight_c");
	var spotLightResourcesTop = document.getElementById("spotLightResourcesTop");
	var spotLightResourcesRight = document.getElementById("spotLightResourcesRight");
	spotLight.style.visibility = "hidden"
	spotlight_c.style.visibility = "hidden"
	spotLightResourcesTop.style.visibility = "hidden"
	spotLightResourcesRight.style.visibility = "hidden"
	document.location.href = goToURL;
}

function clearSpotLightFromOpenSpecButton() {
	var spotLight = document.getElementById("spotlight");
	var spotlight_c = document.getElementById("spotlight_c");
	var spotLightResourcesTop = document.getElementById("spotLightResourcesTop");
	var spotLightResourcesRight = document.getElementById("spotLightResourcesRight");
	spotLight.style.visibility = "hidden"
	spotlight_c.style.visibility = "hidden"
	spotLightResourcesTop.style.visibility = "hidden"
	spotLightResourcesRight.style.visibility = "hidden"
	document.location.href = shapeSpecURL;
}

function showLayersDialog(layersDialogId) {
	var layersDialog = document.getElementById(layersDialogId);
	
	var base = document.getElementById("diagram");
	
	var xOffset = findPosX(base) + 10;
	var yOffset = findPosY(base);
	
	layersDialog.style.left = xOffset;
	layersDialog.style.top = yOffset;
	layersDialog.style.display = "block";
	layersDialog.style.zIndex = 5;
}
function okLayersDialog(layersDialogId, checkBoxIds) {
	document.getElementById(layersDialogId).style.display = "none";
	
	var count = checkBoxIds.length;
	var lHidedCount = 0;
	for (var i = 0; i < count; i++) {
		var checkbox = document.getElementById(checkBoxIds[i]);
		if (checkbox.checked) {
		}
		else {
			lHidedCount++;
		}
	}
	
	if (lHidedCount == 0) {
		showComponent("fullDiagram");
	}
	else {
		hideComponent("fullDiagram");
	}
	
	for (var i = 0; i < count; i++) {
		var checkbox = document.getElementById(checkBoxIds[i]);
		var rowIds = checkbox.value.split(";");
		if (checkbox.checked) {
			var rowCount = rowIds.length;
			for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				var lRowId = rowIds[rowIndex]
				if (lHidedCount == 0 && lRowId.length > 12 && lRowId.substring(12, 0) == "diagramLayer") {
					hideComponent(lRowId); // hide Diagram, because all layers shown, just show the full diagram
				}
				else {
					showComponent(lRowId);
				}
			}
		}
		else {
			var rowCount = rowIds.length;
			for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				hideComponent(rowIds[rowIndex]);
			}
		}
	}
	layersDialog.style.zIndex = 1;
}
function showComponent(componentId) {
	var component = document.getElementById(componentId);
	if (component != null) {
		if (componentId.substring(6, 0) == "option") {
			component.disabled = false;
		}
		else if (componentId.substring(4, 0) == "area") {
			component.coords = component.getAttribute("coords2");
		}
		else if (component.style.display == "none") {
			component.style.display = "";
		}
	}
}
function hideComponent(componentId) {
	var component = document.getElementById(componentId);
	if (component != null) {
		if (componentId.substring(6, 0) == "option") {
			component.disabled = true;
		}
		else if (componentId.substring(4, 0) == "area") {
			component.coords = "0,0,0,0";
		}
		else if (component.style.display != "none") {
			component.style.display = "none";
		}
	}
}

function collapseLogicalViewElement(aLogicalViewElementIds, aExpandAnchorId, aCollapseAnchorId, aOpenFolderImageId, aCloseFolderImageId) {
	
	var count = aLogicalViewElementIds.length;
	for (var i = 0; i < count; i++) {
		var lLogicalViewElementId = aLogicalViewElementIds[i];
		var lComponentIds = lLogicalViewElementId.split(";"); // [rowId, level] or [rowId, level, expandAnchorId, collapseAnchorId]
		hideComponent(lComponentIds[0]);
	}
	
	showComponent(aExpandAnchorId);
	showComponent(aCloseFolderImageId);
	hideComponent(aCollapseAnchorId);
	hideComponent(aOpenFolderImageId);
}
function expandLogicalViewElement(aLogicalViewElementIds, aExpandAnchorId, aCollapseAnchorId, aOpenFolderImageId, aCloseFolderImageId) {
	var lCollapsedLevel = -1;
	var count = aLogicalViewElementIds.length;
	for (var i = 0; i < count; i++) {
		var lLogicalViewElementId = aLogicalViewElementIds[i];
		var lComponentIds = lLogicalViewElementId.split(";"); // [rowId, level] or [rowId, level, expandAnchorId, collapseAnchorId]
		var lComponentLevel = lComponentIds[1];
		if (lCollapsedLevel == -1 || lComponentLevel <= lCollapsedLevel) {
			showComponent(lComponentIds[0]);
			lCollapsedLevel = -1;
			
			if (lComponentIds.length == 4) {
				var lCollapseAnchor = document.getElementById(lComponentIds[2]);
				if (lCollapseAnchor.style.display != "none") {
					// its children is collapsed, don't expand them
					lCollapsedLevel = lComponentLevel;
				}
				
			}
		}
	}
	
	showComponent(aCollapseAnchorId);
	showComponent(aOpenFolderImageId);
	hideComponent(aExpandAnchorId);
	hideComponent(aCloseFolderImageId);
}

function updateCursorPos(event){
		var e = (window.event) ? window.event : event;
		var xOffset = e.clientX;
		var yOffset = e.clientY;

	if (document.all){
		if (!document.documentElement.scrollLeft)
			xOffset += document.body.scrollLeft;
		else
			xOffset += document.documentElement.scrollLeft;
		
		if (!document.documentElement.scrollTop)
			yOffset += document.body.scrollTop;
		else
			yOffset += document.documentElement.scrollTop;
		
	}else{
		xOffset += window.pageXOffset;
		yOffset += window.pageYOffset;
	}
	cursorX = xOffset;
	cursorY = yOffset;
}

function selectProject(aUrl) {
	document.location.href = aUrl;
}