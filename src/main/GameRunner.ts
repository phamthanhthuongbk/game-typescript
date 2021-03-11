import { CoreGameRunner } from "../core/CoreGameRunner";
import { Plane } from "./charaters/Plane";

export class GameRunner extends CoreGameRunner  {
  constructor() {
    super()
    this.addChild(new Plane())
    this.run()
  }
}