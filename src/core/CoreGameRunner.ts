import { CoreGameObject } from "./CoreGameObject";

export abstract  class CoreGameRunner {
  public width = 200
  public height = 200
  public frameRate = 24

  public childs: CoreGameObject[]

  /*
  * Run Game
  */
  public async run() {
    while (true) {
      this.childs.forEach(gameObject => {
        gameObject.coreUpdate()
      });
      await this.sleep()
    }
  }

  private sleep() {
    return new Promise(resolve => setTimeout(resolve, 1000/this.frameRate));
  }
}