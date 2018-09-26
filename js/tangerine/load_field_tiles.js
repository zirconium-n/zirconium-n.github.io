if (THREE == null) {
    throw "import THREE before load_field_tiles.js";
}

var TGR = TGR || {};

TGR.fieldLoader = new THREE.DDSLoader();
TGR.fieldLoader.setPath("texture/field/")

TGR.Texture = TGR.Texture || {};
TGR.Material = TGR.Material || {};

TGR.Texture.bonus0 = TGR.fieldLoader.load("mass_bonus0.dds");
TGR.Material.bonus0 = new THREE.MeshBasicMaterial({map : TGR.Texture.bonus0}); 

delete TGR.fieldLoader;
