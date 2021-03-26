import { CoreGameObject } from "../../core/CoreGameObject";
import flapybird from "../assets/file.png";


export class Plane extends CoreGameObject {
  update(): void {
    this.x += 1
  }
  constructor(){
    super();
    const img = new Image()
    img.width = 50
    img.height = 50
    img.src = flapybird
    this.addUiElement(img)
  }
}