var waveObj = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.rand = [];
}
waveObj.prototype.num = 10;
waveObj.prototype.init = function(){
	for(var i = 0 ; i <this.num ; i++){
		this.alive[i] = false;
		this.rand[i] = 0;
	}
}
waveObj.prototype.draw = function(){

	ctx1.save();
	ctx1.lineWidht = 3;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor - 'white';
	for( var i = 0; i< this.num; i++){
		if(this.alive[i]){

			this.rand[i] += deltaTime * 0.04;
			if(this.rand[i]>50){
				this.alive[i] = false;
				break;
			}
			var alpha = 1 -this.rand[i]/50;

			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.rand[i],0,Math.PI *2);
			ctx1.closePath();
			ctx1.strokeStyle = 'rgba(255,255,255,' + alpha +')';
			ctx1.stroke();
		}
	}

	ctx1.restore();
}
waveObj.prototype.born = function(x,y){
	for( var i = 0; i<this.num; i ++){
		if(!this.alive[i]){

			this.alive[i] = true;
			this.rand[i] = 10;
			this.x[i] = x;
			this.y[i] = y;

			return;
		}
	}
}