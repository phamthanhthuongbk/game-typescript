import { CoreGameRunner } from "../core/CoreGameRunner";
import { Bird } from "./charaters/Bird";

export class GameRunner extends CoreGameRunner  {
  constructor() {
    super()

    const bird1 = new Bird()
    bird1.y = 10
    this.addChild(bird1)

    const bird2 = new Bird()
    bird2.y = 70
    this.addChild(bird2)

    const bird3 = new Bird()
    bird3.y = 130
    this.addChild(bird3)

    const bird4 = new Bird()
    bird4.y = 190
    this.addChild(bird4)

    this.run()
  }
}