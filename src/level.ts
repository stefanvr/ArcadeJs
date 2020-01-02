import { ElementCode, ElementCodeSolid, ElementTile } from './level-definition';

export class LevelLayout 
{
    colums;
    rows;
    tile;

    constructor(dimensions) {
      this.colums = dimensions.width;
      this.rows = dimensions.height

      this.tile = {
        width:  10,
        height: 10
      }
    }
    
    width() { return this.colums * this.tile.width;  }
    height() { return this.rows * this.tile.height;  }
    coordX(x) { return x * this.tile.width;  }
    coordY(y) { return y * this.tile.height;  }
}

export class LevelElements 
{
  type;
  subType;
  colorCode;
  
  constructor(code) {
    this.type = code[2];
    this.subType = code[3];
    this.colorCode = code[4];
  }

   spriteCode() 
   {
      if(this.type === ElementCode.Solid)
      {
        if(this.subType === ElementCodeSolid.Brick) return "tile_solid";
        if(this.subType === ElementCodeSolid.Pid) return "tile_pid";
        if(this.subType === ElementCodeSolid.Spacebox) return "tile_box";
      }
  
      if(this.type === ElementCode.Passthrough) return "tile_mirror";  
      
      if(this.type === ElementCode.Tile)
      {
        let direction = "x";
        if(this.subType === ElementTile.Horizontal) direction = "h"; 
        if(this.subType === ElementTile.Vertical) direction = "v"; 
  
  
        let code = "tile_" + direction + "_single_" + this.colorCode;
        console.log(code);
        return code;
      }
      console.log("UnkownType", this.type, this.subType )
  }
}