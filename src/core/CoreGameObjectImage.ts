import { CoreGameObject } from "./CoreGameObject";

export class CoreGameObjectImage extends CoreGameObject {
  public image: string

  update(): void {
  }

  get gameUi(): HTMLElement {
    const img = new Image()
    img.src = this.image
    return img
  }
}