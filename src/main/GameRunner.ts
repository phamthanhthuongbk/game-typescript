import { CoreGameRunner } from "../core/CoreGameRunner";
import { Plane } from "./charaters/Plane";

export class GameRunner extends CoreGameRunner  {
  constructor() {
    super()

    const bird = new Plane()
    this.addChild(bird)
    this.run()
  }
}