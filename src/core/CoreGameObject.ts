export abstract class CoreGameObject {
  private childs: CoreGameObject[] = []
  parent: CoreGameObject | null
  addChild<T extends CoreGameObject>(child: T){
    this.childs.push(child)
    child.parent = this
  }

  abstract get gameUi(): HTMLElement
  abstract update(): void

  public coreUpdate(){
    this.childs.forEach(gameObject => {
      gameObject.coreUpdate()
    });

    this.update()
  }

  public coreUpdateUi(): Element{
    const div = document.createElement('div')
    div.appendChild(this.gameUi)
    this.childs.forEach(gameObject => {
      div.appendChild(gameObject.coreUpdateUi())
    });
    return div
  }
}