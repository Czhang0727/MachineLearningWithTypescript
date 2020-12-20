export class Tensor {
  constructor() {}
  public static create(dimensions: number[]) {
    let res = new Array();
    if (dimensions.length === 0) {
      return res;
    }

    let level = 0;

    while (level < dimensions.length) {
      let currLevel = level;
      let currArr = res;

      while (currLevel > 0) {}
      level += 1;
    }
    return res;
  }
}
