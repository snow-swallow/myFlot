var r = 140, // circle radius
	or = 6,	// hour and minute center radius
	sr = 2, // second center radius
	rh = r/3,
	rm = r*3/5,
	rs = r*7/10,
	rc = 100, // corner radius
	dc = ox / 4,
	ox = 190, oy = 190,
	d = 10,
	f = 28;
	
function draw(h, m, s) {
	var c = document.getElementById('clock_canvas');
	if (c) {
		var ctx = c.getContext("2d");
		
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.save();
		
		// outline circle
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = '#fff';
		ctx.strokeStyle = '#fff';
		ctx.arc(ox, oy, r, 0, Math.PI*2, false);
		ctx.fill();
		ctx.stroke();
		ctx.restore();
		
		// circle center
		ctx.beginPath();
		ctx.arc(ox, oy, or, 0, Math.PI*2, false);
		ctx.fill();
		
		// 12 ticks
		ctx.beginPath();
		for(var i = 1; i < 13; i ++) {
			var sita = Math.PI/6 * i;
			var fx = ox + (r-d-f/2) * Math.sin(sita),
				fy = oy - (r-d-f/2) * Math.cos(sita);
			ctx.font = f + 'px sans-serif';
			ctx.textBaseline = 'middle';
			ctx.textAlign = 'center';
			ctx.fillText(i, fx, fy);
		}
		
		var angleS = s/60*(Math.PI*2),
			angleM = m/60*(Math.PI*2) + (angleS/(Math.PI*2))*((Math.PI*2)/60),
			angleH = h/12*(Math.PI*2) + (angleM/(Math.PI*2))*((Math.PI*2)/12),
			pointS = {
				x: ox + (rs) * Math.sin(angleS),
				y: oy - (rs) * Math.cos(angleS)
			},
			pointM = {
				x: ox + (rm) * Math.sin(angleM),
				y: oy - (rm) * Math.cos(angleM)
			},
			pointH = {
				x: ox + (rh) * Math.sin(angleH),
				y: oy - (rh) * Math.cos(angleH)
			};
		
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.moveTo(ox, oy);
		ctx.lineTo(pointH.x, pointH.y);
		ctx.stroke();
		
		ctx.lineWidth = 2;
		ctx.moveTo(ox, oy);
		ctx.lineTo(pointM.x, pointM.y);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.strokeStyle = 'red';
		ctx.fillStyle = 'red';
		ctx.lineWidth = 1;
		ctx.arc(ox, oy, sr, 0, Math.PI*2, false);
		ctx.moveTo(ox, oy);
		ctx.lineTo(pointS.x, pointS.y);
		ctx.stroke();
		ctx.fill();
		
		ctx.restore();
		
	}
}

$(function(){
	var h=0, m=0, s=0, n=0, d, milliseconds=0;
	var result = window.setInterval(function(){
		d = new Date();
		milliseconds = d.getMilliseconds();
		s = d.getSeconds() + milliseconds/1000;
		m = d.getMinutes() + milliseconds/1000/60;
		h = d.getHours() + milliseconds/1000/3600;
		draw(h, m, s);
	}, 50);
	
})