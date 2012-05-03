var tooltip = { 
	tooltipTimeOut : 1000,
	xOffset : 20,
	yOffset : 0,
	area : Object,
	shadowArea : Object,
  tipLayer : Object,
	tId : '',
	
	init : function(){
		tipLayer = document.createElement('div');
		tipLayer.id = 'toolTip';
		document.getElementsByTagName('body')[0].appendChild(tipLayer);
		tipLayer.style.top = '0';
		tipLayer.style.visibility = 'hidden';
		tipLayer.onmouseover= function onmouseover(event) {
    	if ( window.tId ) {
    		clearTimeout(tId);
    	}
    };
		tipLayer.onmouseout= function onmouseout(event) {
		  tooltip.hide();
    };
    
		shadowArea = document.createElement('div');
		shadowArea.id = 'shadowArea';
		shadowArea.onmouseover= tipLayer.onmouseover;
		shadowArea.onmouseout = tipLayer.onmouseout;
		
		document.getElementsByTagName('body')[0].appendChild(shadowArea);
	},

  show : function(area){
  	if ( window.tId ) {
  		clearTimeout(tId);
  	}
  	if ( window.opacityID ) {
  		clearTimeout(opacityID);
  	}
  	
	  this.area = area;
		area.removeAttribute('title');
		this.updateShadowArea(area);
		
		tipLayer.style.visibility = 'visible';
		tipLayer.style.opacity = '.1';
		tipLayer.innerHTML = area.getAttribute('docContent');
    this.moveTo(area);
		this.fade(10);
	},
	
	updateShadowArea : function(area){
  	var areaCoordinate = area.coords.split(",");
  	var topRightX = areaCoordinate[2]*1
    var topRightY = areaCoordinate[1]*1
  	var width = this.xOffset;
    var height = areaCoordinate[3]*1 - topRightY;

  	N = (document.all) ? 0 : 1;
		var diagram = document.getElementById("diagram");
  	if (N) {
  		shadowArea.style.left = findPosX(diagram) + topRightX;
  		shadowArea.style.top = findPosY(diagram) + topRightY;
  	} else {
  		shadowArea.style.posLeft = findPosX(diagram) + topRightX;
  		shadowArea.style.posTop = findPosY(diagram) + topRightY;
  	}		
		shadowArea.style.width = width;
		shadowArea.style.height = height;

	},
	
	fade : function(opac) {
		var passed = parseInt(opac);
		var newOpac = parseInt(passed+5);
		if ( newOpac < 90 ) {
			tipLayer.style.opacity = '.'+newOpac;
			tipLayer.style.filter = "alpha(opacity:"+newOpac+")";
			opacityID = window.setTimeout("tooltip.fade('"+newOpac+"')",40);
		}
		else { 
			tipLayer.style.opacity = '.90';
			tipLayer.style.filter = "alpha(opacity:90)";
		}
	},
	
	moveTo : function(area) {
  	var areaCoordinate = area.coords.split(",");
  	var topRightX = areaCoordinate[2]*1
    var topRightY = areaCoordinate[1]*1
  	var bottomRightX = areaCoordinate[2]*1
    var bottomRightY = areaCoordinate[3]*1
    var tipLayerX
    var tipLayerY
  	N = (document.all) ? 0 : 1;
		var diagram = document.getElementById("diagram");
  	if (N) {
      tipLayerX = tooltip.xOffset + findPosX(diagram) + topRightX;
      tipLayerY = tooltip.yOffset + findPosY(diagram) + topRightY;
  		tipLayer.style.left = tipLayerX;
  		tipLayer.style.top = tipLayerY;
  		tipLayer.style.width = getWidth(tipLayerX);
  	} else {
      tipLayerX = tooltip.xOffset + findPosX(diagram) + topRightX;
      tipLayerY = tooltip.yOffset + findPosY(diagram) + topRightY;
  		tipLayer.style.posLeft = tipLayerX;
  		tipLayer.style.posTop = tipLayerY;
  		tipLayer.style.width = getWidth(tipLayerX);
  	}		
	},
	
	hide : function() {
    tId = window.setTimeout(function(){
  		if ( window.tID ) {
  			clearTimeout(tID);
  		}
  		if ( window.opacityID ) {
  			clearTimeout(opacityID);
  		}
  		tipLayer.style.visibility = 'hidden';
    }, this.tooltipTimeOut);
	}
};

function initPage(){
	tooltip.init();
}

function showTooltip(area){
  tooltip.show(area);
}

function hideTooltip(){
  tooltip.hide();
}

function getWidth(aLeft) {
  var lWidth = getClientWidth() + getScrollLeft() - aLeft - 20;
  if (lWidth < 100) {
  	lWidth = 100;
  } else if (lWidth > 450) {
  	lWidth = 450;
  }
  
  return lWidth;
}

function getClientWidth() {
	return filterResults (
		window.innerWidth ? window.innerWidth : 0,
		document.documentElement ? document.documentElement.clientWidth : 0,
		document.body ? document.body.clientWidth : 0
	);
}
function getScrollLeft() {
	return filterResults (
		window.pageXOffset ? window.pageXOffset : 0,
		document.documentElement ? document.documentElement.scrollLeft : 0,
		document.body ? document.body.scrollLeft : 0
	);
}
function filterResults(aWin, aDoc, aBody) {
	var aResult = aWin ? aWin : 0;
	if (aDoc && (!aResult || (aResult > aDoc)))
		aResult = aDoc;
	return aBody && (!aResult || (aResult > aBody)) ? aBody : aResult;
}