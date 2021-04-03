import { CoreGameObject } from "./CoreGameObject";

export abstract  class CoreGameRunner extends CoreGameObject {
  public width = 200
  public height = 200
  public frameRate = 240

  constructor(elementId: string){
    super()
    
    const root = document.getElementById(elementId)
    root.innerHTML = ""
    root.appendChild(this.getObjectElement())
  }

  update(){
    // Noop
  }

  /*
  * Run Game
  */
  public async run() {
    while (true) {
      this.baseUpdate()
      await this.sleep()
    }
  }

  private sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000/this.frameRate));
  }
}