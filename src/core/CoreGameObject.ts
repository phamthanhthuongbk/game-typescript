export abstract class CoreGameObject {
  private childs: CoreGameObject[]
  parent: CoreGameObject | null
  addChild<T extends CoreGameObject>(child: T){
    this.childs.push(child)
    child.parent = this
  }

  abstract gameUi: Element
  abstract update(): void


  public coreUpdate(){
    this.childs.forEach(gameObject => {
      gameObject.coreUpdate()
    });

    this.update()
  }
}