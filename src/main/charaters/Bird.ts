import { CoreGameObject } from "../../core/CoreGameObject";
import flapybird from "../assets/file.png";


export class Bird extends CoreGameObject {
  update(): void {
    this.x += 1
    this.rotation += 1
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