if (THREE == null) {
    throw "import THREE before load_field_tiles.js";
}

var TGR = TGR || {};

TGR.tileLoader = new THREE.TextureLoader();
TGR.tileLoader.setPath("texture/field/")

TGR.Texture = {
    "Void" : null,
    "Neutral" : TGR.tileLoader.load("mass_common0.png"),
    "Check" : TGR.tileLoader.load("mass_check0.png"),
    "Encounter" : TGR.tileLoader.load("mass_encount0.png"),
    "Draw" : TGR.tileLoader.load("mass_draw0.png"),
    "Bonus" : TGR.tileLoader.load("mass_bonus0.png"),
    "Drop" : TGR.tileLoader.load("mass_drop0.png"),
    "Warp" : TGR.tileLoader.load("mass_warp0.png"),
    "Draw_2" : TGR.tileLoader.load("mass_drawL2.png"),
    "Bonus_2" : TGR.tileLoader.load("mass_bonusL2.png"),
    "Drop_2" : TGR.tileLoader.load("mass_dropL2.png"),
    "Deck" : null,
    "Encounter_2" : TGR.tileLoader.load("mass_encountL2.png"),
    "Move" : TGR.tileLoader.load("mass_move0.png"),
    "Move_2" : TGR.tileLoader.load("mass_moveL2.png"),
    "WarpMove" : TGR.tileLoader.load("mass_warpmove0.png"),
    "WarpMove_2" : TGR.tileLoader.load("mass_warpmoveL2.png"),
    "Snow" : TGR.tileLoader.load("mass_snow0.png"),
    "Ice" : TGR.tileLoader.load("mass_ice0.png"),
    "Heal" : TGR.tileLoader.load("mass_heal.png"),
    "Heal_2" : TGR.tileLoader.load("mass_healL2.png"),

    "Boss" : TGR.tileLoader.load("mass_encount1.png"),
};

TGR.Tile = function(tile_type){
    if (typeof(tile_type) === "number"){
        tile_type = TGR.Fields.Tile[tile_type];
    }
    var material = new THREE.MeshBasicMaterial({map : TGR.Texture[tile_type], side: THREE.DoubleSide});    
    var geometry = new THREE.PlaneGeometry( 1, 1 );
    return new THREE.Mesh( geometry, material );
}

delete TGR.tileLoader;
