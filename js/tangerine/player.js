TGR.Player = class {
    constructor(obj3d, x, y){
        this.obj = obj3d;
        this.x = x;
        this.y = y;
        this.obj.position.x = x;
        this.obj.position.y = y;
        this.obj.position.z = 0.95;
        this.moving = false;
    }

    get position(){
        return {x : this.x , y: this.y };
    }

    move(dx, dy, time = 500, onComplete = null){
        //should change, will do this later
        if(this.moving)
            return;
        if(onComplete === null){
            onComplete = () => {this.moving = false;};
        }
        this.moving = true;

        var position_xyr = {x : this.x, y: this.y, rotation: 0};
        var tween_xyr = new TWEEN.Tween(position_xyr)
            .to({x: position_xyr.x + dx, y: position_xyr.y + dy, rotation: Math.PI * 2}, time)
            .onUpdate(() => {
                this.x = position_xyr.x;
                this.y = position_xyr.y;
                this.obj.position.x = this.x;
                this.obj.position.y = this.y;
                this.obj.rotation.y = position_xyr.rotation;
            })
            .onComplete(onComplete);
/*
        var bounce_time = 2;
        var position_z = {z : this.obj.position.z};
        var tween_z = new TWEEN.Tween(position_z)
            .to({z: position_z.z + 0.2}, time / bounce_time / 2)
            .onUpdate(() => {this.obj.position.z = position_z.z;})
            .easing(TWEEN.Easing.Quadratic.In)
            .repeat(bounce_time * 2)
            .yoyo();
*/
        tween_xyr.start();
//        tween_z.start();
    }
}
