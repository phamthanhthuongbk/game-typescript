import { CoreGameObject } from "./CoreGameObject";

export abstract  class CoreGameRunner {
  public width = 200
  public height = 200
  public frameRate = 24

  private childs: CoreGameObject[] = []
  addChild<T extends CoreGameObject>(child: T){
    this.childs.push(child)
  }

  /*
  * Run Game
  */
  public async run() {
    while (true) {
      this.updateLogic()
      this.updateUi()
      await this.sleep()
    }
  }

  private updateLogic(){
    this.childs.forEach(gameObject => {
      gameObject.coreUpdate()
    });
  }

  private updateUi(){
    const root = document.getElementById("game-body")
    root.innerHTML = ""

    const div = document.createElement('div')
    div.style.width = `${this.width}`
    div.style.height = `${this.height}`

    this.childs.forEach(gameObject => {
      div.appendChild(gameObject.coreUpdateUi())
    });

    root.appendChild(div)
  }

  private sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000/this.frameRate));
  }
}