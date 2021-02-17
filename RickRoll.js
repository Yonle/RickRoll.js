var rickroll = function (opt) {
  if (!opt) {
	  window.onclick = rickroll.showup;
	  window.ontouchmove = rickroll.showup;
  };
  if (opt) {
	if (typeof(opt) !== 'object') {
		throw new TypeError("The 'option' argument must be type of object, Received instead of "+typeof(opt));
		return false;
	};
	if (opt.click) {
		window.onclick = rickroll.showup;
		window.onclick = rickroll.showup;
	};
	if (opt.scroll) window.onscroll = rickroll.showup;
	if (opt.mousemove) window.onmousemove = rickroll.showup;
	if (opt.mouseenter) window.onmouseenter = rickroll.showup;
	if (opt.mouseleave) window.onmouseleave = rickroll.showup;
	if (opt.mousewheel) window.onmousewheel = rickroll.showup;
	if (opt.drag) window.ondrag = rickroll.showup;
	if (opt.select) {
		window.onselect = rickroll.showup;
		window.onselectstart = rickroll.showup;
		window.onselectionchange = rickroll.showup;
	};
	if (opt.input) {
		window.oninput = rickroll.showup;
		window.onkeydown = rickroll.showup;
		window.onkeypress = rickroll.showup;
		window.onkeyup = rickroll.showup;
	};
	if (opt.resize) window.onresize = rickroll.showup;
  };
  console.log("[RickRoll.js] Now listening to some click event....");
};
rickroll.video = "https://github.com/Yonle/RickRoll.js/blob/main/vid.mp4?raw=true"
rickroll.showup = function () {
  console.log("[RickRoll.js] rickroll.showup() called.");
  document.open();
  document.write("<video id=\"video\"></video>");
  var video = document.getElementById("video");
  video.src = rickroll.video;
  video.style.display = "block";
  video.style.width = "100%";
  video.style.height = "auto";
  video.style.position = "fixed";
  video.style.top = "0";
  video.style.bottom = "0";
  video.style.left = "0";
  video.style.right = "0";
  video.loop = true;
  video.play();
  document.close();
};
