var TGR = TGR || {};
TGR.Chara = TGR.Chara || {};
TGR.Texture = TGR.Texture || {};

TGR.charaLoader = new THREE.TextureLoader();
TGR.charaLoader.setPath("texture/chara/")
TGR.Texture.Chara = {
    "Hime"   : TGR.charaLoader.load("Hime_(Summer).png"),
    "Suguri" : TGR.charaLoader.load("Suguri_(Summer).png"),
}

TGR.Chara = function(name){
    var material = new THREE.MeshBasicMaterial({
        map : TGR.Texture.Chara[name],
        side: THREE.DoubleSide,
        transparent : true,
    });
    var geometry = new THREE.PlaneGeometry( 2, 2 );
    return new THREE.Mesh( geometry, material );
}

delete TGR.charaLoader;
