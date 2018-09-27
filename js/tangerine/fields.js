var TGR = TGR || {};
TGR.Fields = TGR.Fields || {};

TGR.Fields.CLOVER = {"height":11,"tile":[[null,null,null,null,null,null,null,null,null,null,null],[null,null,null,{"linking":72,"type":10},{"linking":65,"type":5},{"linking":65,"type":3},{"linking":129,"type":4},null,null,null,null],[null,null,null,{"linking":40,"type":2},null,null,{"linking":130,"type":21},null,null,null,null],[null,null,null,{"linking":104,"type":3},{"linking":65,"type":8},{"linking":65,"type":7},{"linking":67,"type":5},{"linking":193,"type":3},{"linking":65,"type":2},{"linking":129,"type":10},null],[null,{"linking":72,"type":4},{"linking":65,"type":21},{"linking":41,"type":5},null,null,null,{"linking":130,"type":8},null,{"linking":130,"type":5},null],[null,{"linking":40,"type":3},null,{"linking":40,"type":7},null,null,null,{"linking":130,"type":7},null,{"linking":130,"type":3},null],[null,{"linking":40,"type":5},null,{"linking":40,"type":8},null,null,null,{"linking":134,"type":5},{"linking":20,"type":21},{"linking":18,"type":4},null],[null,{"linking":36,"type":10},{"linking":20,"type":2},{"linking":52,"type":3},{"linking":28,"type":5},{"linking":20,"type":7},{"linking":20,"type":8},{"linking":146,"type":3},null,null,null],[null,null,null,null,{"linking":40,"type":21},null,null,{"linking":130,"type":2},null,null,null],[null,null,null,null,{"linking":36,"type":4},{"linking":20,"type":3},{"linking":20,"type":5},{"linking":18,"type":10},null,null,null],[null,null,null,null,null,null,null,null,null,null,null]],"width":11};


TGR.Fields.Linking = {
    "up" : 1 << 7,
    "right" : 1 << 6,
    "down" : 1 << 5,
    "left" : 1 << 4,
    "up^" : 1 << 3,
    "right^" : 1 << 2,
    "down^" : 1 << 1,
    "left^" : 1 << 0,
};

//looks stupid
TGR.Fields.Tile = {
    "Void" : 0,  0 : "Void",
    "Neutral" : 1,  1 : "Neutral",
    "Check" : 2,  2 : "Check",
    "Encounter" : 3,  3 : "Encounter",
    "Draw" : 4,  4 : "Draw",
    "Bonus" : 5,  5 : "Bonus",
    "Drop" : 6,  6 : "Drop",
    "Warp" : 7,  7 : "Warp",
    "Draw_2" : 8,  8 : "Draw_2",
    "Bonus_2" : 9,  9 : "Bonus_2",
    "Drop_2" : 10,  10 : "Drop_2",
    "Deck" : 18,  18 : "Deck",
    "Encounter_2" : 20,  20 : "Encounter_2",
    "Move" : 21,  21 : "Move",
    "Move_2" : 22,  22 : "Move_2",
    "WarpMove" : 23,  23 : "WarpMove",
    "WarpMove_2" : 24,  24 : "WarpMove_2",
    "Snow" : 25,  25 : "Snow",
    "Ice" : 26,  26 : "Ice",
    "Heal" : 27,  27 : "Heal",
    "Heal_2" : 28,  28 : "Heal_2",
};

TGR.Fields.has_direction = function(linking, direction){
    return Boolean(linking & TGR.fields.linking[direction]);
}


