import { Tensor2D, tensor2d, gather } from "@tensorflow/tfjs-node";

export function matMul(left: Tensor2D, right: Tensor2D) {
  const [lr, lc] = left.shape;
  const [rr, rc] = right.shape;

  if (lc !== rr) {
    throw new Error(
      "Matrix Size does not match. Inner matrix dimension must agree."
    );
  }
  const leftArr = left.dataSync();
  const rightArr = right.dataSync();

  let res = new Array<number>(lr * rc);
  res.fill(0);

  for (let i = 0; i < lr; i++) {
    for (let j = 0; j < rc; j++) {
      for (let k = 0; k < lc; k++) {
        res[i * rc + j] += leftArr[i * lc + k] * rightArr[k * rc + j];
      }
    }
  }
  return tensor2d(res, [lr, rc]);
}
