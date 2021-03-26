export abstract class CoreGameObject {
  public x: number = 0;
  public y: number = 0;

  abstract update(): void

  addUiElement(uiElement: HTMLElement | null){
    this.uiElement = uiElement
    this.needUpdateUiElement = true
  }

  addChild<T extends CoreGameObject>(child: T){
    // Add object for controller
    this.childs.push(child)
    child.parent = this

    // Add html element
    if (this.uiElement) {
      this.uiBoxElement.appendChild(this.uiElement)
    }
    this.childBoxElement.appendChild(child.objectElement)
  }

  destroy(){
    // Todo
  }

  getObjectElement(): HTMLElement{
    return this.objectElement
  }

  constructor(){
    this.objectElement.style.position = "absolute"
    this.objectElement.appendChild(this.uiBoxElement)
    this.objectElement.appendChild(this.childBoxElement)
  }

  private childs: CoreGameObject[] = []
  private parent: CoreGameObject | null
  private uiElement: HTMLElement | null
  private needUpdateUiElement: boolean = false

  private uiBoxElement: HTMLElement = document.createElement('div')
  private childBoxElement: HTMLElement = document.createElement('div')
  private objectElement: HTMLElement = document.createElement('div')

  // I want this is private
  public baseUpdate(){
    this.objectElement.style.top = `${this.y}px`
    this.objectElement.style.left = `${this.x}px`

    if (this.needUpdateUiElement) {
      // Reset current element
      this.uiBoxElement.innerHTML = ""

      // Add new Ui element
      if (this.uiElement) {
        this.uiBoxElement.appendChild(this.uiElement)
      }

      // Reset need update flag
      this.needUpdateUiElement = false
    }

    // Update Child
    this.childs.forEach(child => {
      child.baseUpdate()
    });

    // Custom Update
    this.update()
  }
}