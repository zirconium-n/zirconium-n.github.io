if (THREE == null) {
    throw "import THREE before load_field_tiles.js";
}

var TGR = TGR || {};

TGR.tileLoader = new THREE.TextureLoader();
TGR.tileLoader.setPath("texture/field/")

TGR.Texture = TGR.Texture || {};
TGR.Texture.Tile = {
    "Void"          : null,
    "Neutral"       : TGR.tileLoader.load("mass_common0.png"),
    "Check"         : TGR.tileLoader.load("mass_check0.png"),
    "Encounter"     : TGR.tileLoader.load("mass_encount0.png"),
    "Draw"          : TGR.tileLoader.load("mass_draw0.png"),
    "Bonus"         : TGR.tileLoader.load("mass_bonus0.png"),
    "Drop"          : TGR.tileLoader.load("mass_drop0.png"),
    "Warp"          : TGR.tileLoader.load("mass_warp0.png"),
    "Draw_2"        : TGR.tileLoader.load("mass_drawL2.png"),
    "Bonus_2"       : TGR.tileLoader.load("mass_bonusL2.png"),
    "Drop_2"        : TGR.tileLoader.load("mass_dropL2.png"),
    "Deck"          : null,
    "Encounter_2"   : TGR.tileLoader.load("mass_encountL2.png"),
    "Move"          : TGR.tileLoader.load("mass_move0.png"),
    "Move_2"        : TGR.tileLoader.load("mass_moveL2.png"),
    "WarpMove"      : TGR.tileLoader.load("mass_warpmove0.png"),
    "WarpMove_2"    : TGR.tileLoader.load("mass_warpmoveL2.png"),
    "Snow"          : TGR.tileLoader.load("mass_snow0.png"),
    "Ice"           : TGR.tileLoader.load("mass_ice0.png"),
    "Heal"          : TGR.tileLoader.load("mass_heal.png"),
    "Heal_2"        : TGR.tileLoader.load("mass_healL2.png"),
    
    "Boss"          : TGR.tileLoader.load("mass_encount1.png"),
};

TGR.Texture.Arrow = {
    "up"    : TGR.tileLoader.load("arrow_up.png"),
    "down"  : TGR.tileLoader.load("arrow_down.png"),
    "left"  : TGR.tileLoader.load("arrow_left.png"),
    "right" : TGR.tileLoader.load("arrow_right.png"),
}

TGR.Tile = function(tile_type){
    if (typeof(tile_type) === "number"){
        tile_type = TGR.Fields.Tile[tile_type];
    }
    var material = new THREE.MeshBasicMaterial({
        map : TGR.Texture.Tile[tile_type], 
        side: THREE.DoubleSide,
    });    
    var geometry = new THREE.PlaneGeometry( 1, 1 );
    return new THREE.Mesh( geometry, material );
}

TGR.Arrow = function(direction){
    var material = new THREE.MeshBasicMaterial({
        map : TGR.Texture.Arrow[direction],
        side: THREE.DoubleSide,
        transparent : true,
    });
    var geometry = new THREE.PlaneGeometry( 1, 1 );
    return new THREE.Mesh( geometry, material );
}

delete TGR.tileLoader;


TGR.Map = function(map){
    var mapobj = new THREE.Object3D();
    for (var y = 0; y < map.height; y++){
        for(var x = 0; x < map.width; x++){   
            var tile = map.tile[y][x];
            if(tile != null){
                var tileObj = TGR.Tile(tile.type);
                tileObj != null && mapobj.add( tileObj );
                tileObj.position.x = (x - 0*map.width / 2);
                tileObj.position.y = (y - 0*map.height / 2);

                for(let direction of ["up", "right", "left", "down"]){
                    if(!TGR.Fields.has_direction(tile.linking, direction)){
                        continue;
                    }
                    var arrowObj = TGR.Arrow(direction);
                    mapobj.add(arrowObj);
                    arrowObj.position.x = tileObj.position.x;
                    arrowObj.position.y = tileObj.position.y;
                    arrowObj.position.z = 0.01;
                }
            }
        }
    }
    return mapobj;
}
