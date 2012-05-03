var xForRefIcon = 0;
var yForRefIcon = 0;

var xForSubDiagramIcon = 0;
var yForSubDiagramIcon = 0;

var xForTransIcon = 0;
var yForTransIcon = 0;

var fileLinks = [];
var folderLinks = [];
var urlLinks = [];
var diagramLinks = [];
var shapeLinks = [];
var subdiagramLinks = [];
var fromTransitorLinks = [];
var toTransitorLinks = [];

var vpLinkNameToggle;

function showReferenceIcon(modelValues) {
	if (modelValues != ''){
		var xyValueArray = modelValues.split(",");
		var shapeWidth = xyValueArray[2]*1 - xyValueArray[0]*1;
//		if (shapeWidth > 24){
			var diagram = document.getElementById("diagram");
			var xOffset = findPosX(diagram);
			var yOffset = findPosY(diagram);
			
			var shapeX = xyValueArray[0]*1;
			var shapeY = xyValueArray[1]*1;
			var x = shapeX + xOffset*1;
			var y = shapeY + yOffset*1 - 13;
			var h = xyValueArray[3]*1 - xyValueArray[1]*1;
			var url = xyValueArray[4];
	
			var referenceIconLayer = document.getElementById("referenceIconLayer");
		
			N = (document.all) ? 0 : 1;
			if (N) {
				referenceIconLayer.style.left = x - 3;
				referenceIconLayer.style.top = y + h;
			} else {
				referenceIconLayer.style.posLeft = x - 3;
				referenceIconLayer.style.posTop = y + h;
			}
			referenceIconLayer.style.visibility="visible"
//		}
	}
}

function hideReferenceIcon() {
	referenceIconLayer.style.visibility="hidden"
}

function showSubdiagramIcon(modelValues) {
	if (modelValues != ''){
		var xyValueArray = modelValues.split(",");
		var shapeWidth = xyValueArray[2]*1 - xyValueArray[0]*1;
//		if (shapeWidth > 24){
			var diagram = document.getElementById("diagram");
			var xOffset = findPosX(diagram);
			var yOffset = findPosY(diagram);
			
			var shapeRightX = xyValueArray[2]*1;
			var shapeRightY = xyValueArray[1]*1;
			var x = shapeRightX + xOffset*1 - 10;
			var y = shapeRightY + yOffset*1 - 13;
			var h = xyValueArray[3]*1 - xyValueArray[1]*1;
			var url = xyValueArray[4];
	
			var subdiagramIconLayer = document.getElementById("subdiagramIconLayer");
		
			N = (document.all) ? 0 : 1;
			if (N) {
				subdiagramIconLayer.style.left = x - 3;
				subdiagramIconLayer.style.top = y + h;
			} else {
				subdiagramIconLayer.style.posLeft = x - 3;
				subdiagramIconLayer.style.posTop = y + h;
			}
			subdiagramIconLayer.style.visibility="visible"
//		}
	}
}

function hideSubdiagramIcon() {
	subdiagramIconLayer.style.visibility="hidden"
}

function showTransitorIcon(modelValues) {
	if (modelValues != ''){
		var xyValueArray = modelValues.split(",");
		var shapeWidth = xyValueArray[2]*1 - xyValueArray[0]*1;
//		if (shapeWidth > 24){
			var diagram = document.getElementById("diagram");
			var xOffset = findPosX(diagram);
			var yOffset = findPosY(diagram);
			
			var shapeRightX = xyValueArray[2]*1;
			var shapeRightY = xyValueArray[1]*1;
			var x = shapeRightX + xOffset*1 - 10;
			var y = shapeRightY + yOffset*1;
			var h = xyValueArray[3]*1 - xyValueArray[1]*1;
			var url = xyValueArray[4];
	
			var transitorIconLayer = document.getElementById("transitorIconLayer");
		
			N = (document.all) ? 0 : 1;
			if (N) {
				transitorIconLayer.style.left = x - 3;
				transitorIconLayer.style.top = y + h;
			} else {
				transitorIconLayer.style.posLeft = x - 3;
				transitorIconLayer.style.posTop = y + h;
			}
			transitorIconLayer.style.visibility="visible"
//		}
	}
}

function hideTransitorIcon() {
	transitorIconLayer.style.visibility="hidden"
}

function storeReferenceAndSubdiagramInfos(coords, fileRefs, folderRefs, urlRefs, diagramRefs, shapeRefs, subdiagrams, modelElementRefs, fromTransitors, toTransitors) {
	if (coords != ''){
	  	var xyValueArray = coords.split(",");
		var shapeWidth = xyValueArray[2]*1 - xyValueArray[0]*1;
//		if (shapeWidth > 24){
			fileLinks = [];
			folderLinks = [];
			urlLinks = [];
			diagramLinks = [];
			shapeLinks = [];
			subdiagramLinks = [];
			modelElementLinks = [];
			fromTransitorLinks = [];
			toTransitorLinks = [];
			
		  	var popup = document.getElementById("linkPopupMenuTable");
		  	
		  	for (i = 0 ; i < fileRefs.length ; i++) {
		  		fileLinks[i] = fileRefs[i];
		  	}
		  	for (i = 0 ; i < folderRefs.length ; i++) {
		  		folderLinks[i] = folderRefs[i];
		  	}
		  	for (i = 0 ; i < urlRefs.length ; i++) {
		  		urlLinks[i] = urlRefs[i];
		  	}
		  	for (j = 0 ; j < diagramRefs.length ; j++) {
		  		diagramLinks[j] = diagramRefs[j]
		  	}
		  	for (j = 0 ; j < shapeRefs.length ; j++) {
		  		shapeLinks[j] = shapeRefs[j]
		  	}
		  	for (j = 0 ; j < subdiagrams.length ; j++) {
		  		subdiagramLinks[j] = subdiagrams[j]
		  	}
		  	for (j = 0 ; j < modelElementRefs.length ; j++) {
		  		modelElementLinks[j] = modelElementRefs[j]
		  	}
		  	for (j = 0 ; j < fromTransitors.length ; j++) {
		  		fromTransitorLinks[j] = fromTransitors[j]
		  	}
		  	for (j = 0 ; j < toTransitors.length ; j++) {
		  		toTransitorLinks[j] = toTransitors[j]
		  	}
		  	
		  	var diagram = document.getElementById("diagram");
		  	var xOffset = findPosX(diagram);
		  	var yOffset = findPosY(diagram);
		  	
		  	var shapeX = xyValueArray[0]*1;
		  	var shapeY = xyValueArray[1]*1;
		  	var x = shapeX + xOffset*1;
		  	var y = shapeY + yOffset*1 + 2;
		  	var w = xyValueArray[2]*1 - xyValueArray[0]*1;
		  	var h = xyValueArray[3]*1 - xyValueArray[1]*1;
		  	var url = xyValueArray[4];
		  
		  	xForRefIcon = x;
		  	yForRefIcon = y + h;

		  	shapeX = xyValueArray[2]*1;
		  	shapeY = xyValueArray[1]*1;
		  	x = shapeX + xOffset*1 - 12;
		  	y = shapeY + yOffset*1 + 2;
		  	w = xyValueArray[2]*1 - xyValueArray[0]*1;
		  	h = xyValueArray[3]*1 - xyValueArray[1]*1;
		  	url = xyValueArray[4];

		  	xForSubDiagramIcon = x;
		  	yForSubDiagramIcon = y + h;
		  	
		  	xForTransIcon = x;
		  	yForTransIcon = y + h + 12;
//		}
	}
}

function resetPopupForReference() {
	clearLinkPopupContent();

  	var popup = document.getElementById("linkPopupMenuTable");
  	
  	// file references
  	for (i = 0 ; i < fileLinks.length ; i++) {
	  	var fileNameUrl = fileLinks[i].split("*");
  		var name = fileNameUrl[0];
  		var url = fileNameUrl[1];

  		var row = popup.insertRow(popup.rows.length)
  		var imgPopupCell = row.insertCell(0);
  		imgPopupCell.innerHTML="<div style=\"float: left; width: 18px !important;height: 18px !important;background-image:url(../images/icons/FileReference.png) !important; background-image:url(''); filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../images/icons/FileReference.png');\"></div>&nbsp;"+name
  		imgPopupCell.valign="middle"
  		imgPopupCell.destination=url
  		imgPopupCell.className="PopupMenuRowDeselected";
  		imgPopupCell.onmouseover= function onmouseover(event) { this.className="PopupMenuRowSelected"; };
  		imgPopupCell.onmouseout= function onmouseover(event) { this.className="PopupMenuRowDeselected"; };
  		imgPopupCell.onclick= function onclick(event) { window.open(this.destination) };
      
  	}

    // folder reference
  	for (i = 0 ; i < folderLinks.length ; i++) {
	  	var folderNameUrl = folderLinks[i].split("*");
  		var name = folderNameUrl[0];
  		var url = folderNameUrl[1];

  		var row = popup.insertRow(popup.rows.length)
  		var imgPopupCell = row.insertCell(0);
  		imgPopupCell.innerHTML="<div style=\"float: left; width: 18px !important;height: 18px !important;background-image:url(../images/icons/FolderReference.png) !important; background-image:url(''); filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../images/icons/FolderReference.png');\"></div>&nbsp;"+name
  		imgPopupCell.valign="middle"
  	  	imgPopupCell.destination=url
  	  	imgPopupCell.className="PopupMenuRowDeselected";
  		imgPopupCell.onmouseover= function onmouseover(event) { this.className="PopupMenuRowSelected"; };
  		imgPopupCell.onmouseout= function onmouseover(event) { this.className="PopupMenuRowDeselected"; };
  		imgPopupCell.onclick= function onclick(event) { window.open(this.destination) };
  	}

    // url reference
  	for (i = 0 ; i < urlLinks.length ; i++) {
  	  var row = popup.insertRow(popup.rows.length)
  	  var imgPopupCell = row.insertCell(0);
  	  var destination = urlLinks[i][0];
  	  var name = urlLinks[i][1];
  	  if (name == null || name == '')
  		name = destination;
      imgPopupCell.innerHTML="<div style=\"float: left; width: 18px !important;height: 18px !important;background-image:url(../images/icons/UrlReference.png) !important; background-image:url(''); filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../images/icons/UrlReference.png');\"></div>&nbsp;"+name
  	  imgPopupCell.valign="middle"
      imgPopupCell.destination=destination;
      imgPopupCell.className="PopupMenuRowDeselected";
      imgPopupCell.onmouseover= function onmouseover(event) { this.className="PopupMenuRowSelected"; };
      imgPopupCell.onmouseout= function onmouseover(event) { this.className="PopupMenuRowDeselected"; };
      imgPopupCell.onclick= function onclick(event) { window.open(this.destination) };

  	}

    // diagram reference
  	for (j = 0 ; j < diagramLinks.length ; j++) {
	  	var diagramUrlNameType = diagramLinks[j].split("/");
  		var url = diagramUrlNameType[0];
  		var name = diagramUrlNameType[1];
  		var type = diagramUrlNameType[2];
  		var imgSrc = '../images/icons/'+type+'.png';
  		  		  	
  		var row = popup.insertRow(popup.rows.length)
  		var imgPopupCell = row.insertCell(0);
  		imgPopupCell.innerHTML="<div style=\"float: left; width: 18px !important;height: 18px !important;background-image:url(" + imgSrc + ") !important; background-image:url(''); filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + imgSrc + "');\"></div>&nbsp;"+name
  		imgPopupCell.valign="middle"
  		imgPopupCell.className="PopupMenuRowDeselected";
  		imgPopupCell.onmouseover= function onmouseover(event) { this.className="PopupMenuRowSelected"; };
  		imgPopupCell.onmouseout= function onmouseover(event) { this.className="PopupMenuRowDeselected"; };
  		if (url == 'vplink') {
	  		imgPopupCell.destination= diagramUrlNameType[3].replace('@','/');
	  		imgPopupCell.vpLinkWithName= diagramUrlNameType[4].replace('@','/');
  			imgPopupCell.onclick= function onclick(event) { showVpLink(this.destination, this.vpLinkWithName, this) };
  		} else {
	  		imgPopupCell.destination=url
	  		if (url != null && url != '') {
  				imgPopupCell.onclick= function onclick(event) { window.open(this.destination,'_content_pane') };
				}
			}
  	}

    // shape reference
  	for (j = 0 ; j < shapeLinks.length ; j++) {
	  	var shapeUrlNameType = shapeLinks[j].split("/");
  		var url = shapeUrlNameType[0];
  		var name = shapeUrlNameType[1];
  		var type = shapeUrlNameType[2];
  		var imgSrc = '../images/icons/'+type+'.png';
  		  		  	
		var row = popup.insertRow(popup.rows.length)
		var row = popup.insertRow(popup.rows.length)
		var imgPopupCell = row.insertCell(0);
		imgPopupCell.innerHTML="<div style=\"float: left; width: 18px !important;height: 18px !important;background-image:url(" + imgSrc + ") !important; background-image:url(''); filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + imgSrc + "');\"></div>&nbsp;"+name
		imgPopupCell.valign="middle"
		imgPopupCell.destination=url
		imgPopupCell.className="PopupMenuRowDeselected";
		imgPopupCell.onmouseover= function onmouseover(event) { this.className="PopupMenuRowSelected"; };
		imgPopupCell.onmouseout= function onmouseover(event) { this.className="PopupMenuRowDeselected"; };
		if (type.length > 0){
			imgPopupCell.onclick= function onclick(event) { window.open(this.destination,'_content_pane') };
		}
  	}
  	
    // model element reference
  	for (j = 0 ; j < modelElementLinks.length ; j++) {
	  	var modelElementUrlNameType = modelElementLinks[j].split("/");
  		var url =  modelElementUrlNameType[0];
  		var name = modelElementUrlNameType[1];
  		var type =  modelElementUrlNameType[2];
  		var imgSrc = '../images/icons/'+type+'.png';
  		  		  	
		var row = popup.insertRow(popup.rows.length)
		var row = popup.insertRow(popup.rows.length)
		var imgPopupCell = row.insertCell(0);
		imgPopupCell.innerHTML="<div style=\"float: left; width: 18px !important;height: 18px !important;background-image:url(" + imgSrc + ") !important; background-image:url(''); filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + imgSrc + "');\"></div>&nbsp;"+name
		imgPopupCell.valign="middle"
		imgPopupCell.destination=url
		imgPopupCell.className="PopupMenuRowDeselected";
		imgPopupCell.onmouseover= function onmouseover(event) { this.className="PopupMenuRowSelected"; };
		imgPopupCell.onmouseout= function onmouseover(event) { this.className="PopupMenuRowDeselected"; };
		if (type.length > 0){
			imgPopupCell.onclick= function onclick(event) { window.open(this.destination,'_content_pane') };
		}
  	}
}


function resetPopupForSubdiagram() {
	clearLinkPopupContent();

  	var popup = document.getElementById("linkPopupMenuTable");
  	
    // subdiagram
  	for (j = 0 ; j < subdiagramLinks.length ; j++) {
	  	var diagramUrlNameType = subdiagramLinks[j].split("/");
  		var url = diagramUrlNameType[0];
  		var name = diagramUrlNameType[1];
  		var type = diagramUrlNameType[2];
  		var imgSrc = '../images/icons/'+type+'.png';
  		  		  	
  		var row = popup.insertRow(popup.rows.length)
  		var imgPopupCell = row.insertCell(0);
  		imgPopupCell.innerHTML="<div style=\"float: left; width: 18px !important;height: 18px !important;background-image:url(" + imgSrc + ") !important; background-image:url(''); filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + imgSrc + "');\"></div>&nbsp;"+name
  		imgPopupCell.valign="middle"
  		imgPopupCell.destination=url
  		imgPopupCell.className="PopupMenuRowDeselected";
  		imgPopupCell.onmouseover= function onmouseover(event) { this.className="PopupMenuRowSelected"; };
  		imgPopupCell.onmouseout= function onmouseover(event) { this.className="PopupMenuRowDeselected"; };
  		if (url != null && url != '') {
  			imgPopupCell.onclick= function onclick(event) { window.open(this.destination,'_content_pane') };
			}
  	}
}

function movePopupPositionToReferenceIconPosition() {
	movePopupPositionToSpecificPosition(xForRefIcon, yForRefIcon);
}

function movePopupPositionToSubdiagramIconPosition() {
	movePopupPositionToSpecificPosition(xForSubDiagramIcon, yForSubDiagramIcon);
}

function movePopupPositionToCursorPosition(event) {
  	var diagram = document.getElementById("diagram");
  	var xOffset = 0;
  	var yOffset = 0;

  	var e = (window.event) ? window.event : event;
  	xOffset = e.clientX;
  	yOffset = e.clientY;
  	
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
  	
  	var nX = xOffset*1;
  	var nY = yOffset*1;

  	movePopupPositionToSpecificPosition(nX, nY);
}

function movePopupPositionToSpecificPosition(x, y) {
  	var popupLayer = document.getElementById("linkPopupMenuLayer");
  	if (N) {
  		popupLayer.style.left = x;
  		popupLayer.style.top = y;
  	} else {
  		popupLayer.style.posLeft = x;
  		popupLayer.style.posTop = y;
  	}
}

function switchPopupShowHideStatus(){
	var popup = document.getElementById("linkPopupMenuTable");
  	if (popup.style.visibility=="visible") {
		hideLinkPopup();
	}else{
  		showLinkPopup();
	}
}

function adjustPopupPositionForSpotLightTable() {
	movePopupPositionToSpecificPosition(cursorX,cursorY);
}

function showLinkPopup(){
	var popup = document.getElementById("linkPopupMenuTable");
	popup.style.visibility="visible"
	document.getElementById("linkPopupMenuLayer").style.visibility="visible";
}

function hideLinkPopup(){
	var popup = document.getElementById("linkPopupMenuTable");
	popup.style.visibility="hidden"
	document.getElementById("linkPopupMenuLayer").style.visibility="hidden";
}

function clearLinkPopupContent(){
	var popup = document.getElementById("linkPopupMenuTable");
	for (i = popup.rows.length ; i >0 ; i--) {
		popup.deleteRow(0);
	}
}

function movePopupPositionToTransitorIconPosition() {
	movePopupPositionToSpecificPosition(xForTransIcon, yForTransIcon);
}

function resetPopupForTransitor() {
	clearLinkPopupContent();

	var popup = document.getElementById("linkPopupMenuTable");
	
  // transitor
	var row = popup.insertRow(popup.rows.length);
	var popupCell = row.insertCell(0);
	popupCell.innerHTML="<div style=\"font-size:11px\">From:</div>";
	for (j = 0 ; j < fromTransitorLinks.length ; j++) {
  	var shapeUrlNameType = fromTransitorLinks[j].split("/");
  	addPopupItem(popup, shapeUrlNameType);
	}
	row = popup.insertRow(popup.rows.length);
	popupCell = row.insertCell(0);
	popupCell.innerHTML="<div style=\"font-size:11px\">To:</div>";
	for (j = 0 ; j < toTransitorLinks.length ; j++) {
  	var shapeUrlNameType = toTransitorLinks[j].split("/");
		addPopupItem(popup, shapeUrlNameType);
	}
}

function addPopupItem(popup, shapeUrlNameType) {
	var url = shapeUrlNameType[0];
	var name = shapeUrlNameType[1];
	var type = shapeUrlNameType[2];
	var imgSrc = '../images/icons/'+type+'.png';
	  		  	
	var row = popup.insertRow(popup.rows.length)
	var imgPopupCell = row.insertCell(0);
	imgPopupCell.innerHTML="<div style=\"float: left; width: 18px !important;height: 18px !important;background-image:url(" + imgSrc + ") !important; background-image:url(''); filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + imgSrc + "');\"></div>&nbsp;"+name
	imgPopupCell.valign="middle";
	imgPopupCell.destination=url;
	imgPopupCell.className="PopupMenuRowDeselected";
	imgPopupCell.onmouseover= function onmouseover(event) { this.className="PopupMenuRowSelected"; };
	imgPopupCell.onmouseout= function onmouseover(event) { this.className="PopupMenuRowDeselected"; };
	imgPopupCell.onclick= function onclick(event) { window.open(this.destination,'_content_pane') };
}

function showVpLink(link, linkWithName, linkElem){
	// getting absolute location in page
	var lLeft = 0;
	var lTop = 0;
	var lParent = linkElem;
	while (lParent != null) {
		lLeft += lParent.offsetLeft;
		lTop += lParent.offsetTop;
		lParent = lParent.offsetParent;
	}
	showVpLinkAt(link, linkWithName, lLeft, lTop + linkElem.offsetHeight);
}
function showVpLinkAtDiagram(link, linkWithName, aLeft, aTop){
	var lLeft = 0;
	var lTop = 0;
	var diagramElem = document.getElementById('diagram');
	var lParent = diagramElem;
	while (lParent != null) {
		lLeft += lParent.offsetLeft;
		lTop += lParent.offsetTop;
		lParent = lParent.offsetParent;
	}
	
	showVpLinkAt(link, linkWithName, lLeft + aLeft, lTop + aTop);
}
function showVpLinkAt(link, linkWithName, aLeft, aTop){
	var popup = document.getElementById("vplink");
	if (popup.style.visibility == "visible") {
		popup.style.visibility="hidden";
	} else {
		var withName = document.getElementById("vplink-checkbox");
		var linktext = document.getElementById("vplink-text");
		if (withName.checked) {
			linktext.value = linkWithName;
			vpLinkNameToggle = link;
		} else {
			linktext.value = link;
			vpLinkNameToggle = linkWithName;
		}
		N = (document.all) ? 0 : 1;
		
		if (N) {
			popup.style.left = aLeft;
			popup.style.top = aTop;
		} else {
			popup.style.posLeft = aLeft;
			popup.style.posTop = aTop;
		}

		popup.style.visibility="visible"
		linktext.focus();
		linktext.select();
	}
}

function vpLinkToggleName() {
	var linktext = document.getElementById("vplink-text");
	var tmp = linktext.value;
	linktext.value = vpLinkNameToggle;
	vpLinkNameToggle = tmp;
	
	linktext.focus();
	linktext.select();
}