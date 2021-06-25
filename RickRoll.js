var rickroll = function (opt) {
  if (typeof(opt) !== 'object') {
	  opt = { click: true };
  };
  
  if (opt && typeof(opt) === 'object') {
	if (opt.click) {
		window.onclick = rickroll.showup;
		window.ontouchmove = rickroll.showup;
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
  
  return true;
};

rickroll.video = "https://yonle.github.io/RickRoll.js/vid.mp4";
rickroll.showup = async function ShowUp(opt = {}) {
  if (typeof(opt) !== 'object') opt = {}
  if (!opt.force && rickroll.showup.only_once && rickroll.playing) {
  	return false;
  }
  var video = document.createElement("video");
  video.load();
  video.src = opt.src || rickroll.video;
  video.style.display = "block";
  video.style.width = "100%";
  video.style.height = "auto";
  video.style.position = "fixed";
  video.style.top = "0";
  video.style.bottom = "0";
  video.style.left = "0";
  video.style.right = "0";
  video.loop = opt.loop || rickroll.showup.loop || true;
  rickroll.playing = true;
  try {
  	await video.play();
	document.open();
	document.appendChild(video);
	document.close();
	return true;
  } catch (error) {
  	rickroll.playing = false;
  	return error;
  }
};

rickroll.showup.only_once = true;
rickroll.showup.loop = true;
rickroll.playing = false;

// NodeJS Support
if (typeof(module) === 'object' && module.exports) {
	module.exports = rickroll;
}
