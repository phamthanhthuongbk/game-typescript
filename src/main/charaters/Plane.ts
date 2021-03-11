import { CoreGameObject } from "../../core/CoreGameObject";
import flapybird from "../assets/file.png";


export class Plane extends CoreGameObject {
  count = 1;
  update(): void {
  }
  get gameUi(): HTMLElement {
    const img = new Image()
    img.src = flapybird
    return img
  }
}