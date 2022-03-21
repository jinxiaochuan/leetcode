// https://github.com/facebook/react/blob/main/packages/scheduler/src/SchedulerMinHeap.js

class MinHeap {
  constructor(data = []) {
    // 最小堆
    this.data = data;
  }

  // 获取最小堆的值
  peek() {
    return this.size() === 0 ? null : this.data[0];
  }

  // 计算长度
  size() {
    return this.data.length;
  }

  // 往最小堆里添加元素
  push(node) {
    this.data.push(node);
    // 调整位置
    this.siftUp(node, this.size() - 1);
  }

  // 移除堆顶元素
  pop() {
    if (this.size() === 0) {
      return null;
    }
    const last = this.data.pop();
    const first = this.data[0];
    this.data[0] = last;
    this.siftDown(last, 0);
    return first;
  }

  // 数据上浮
  siftUp(node, i) {
    let index = i;
    while (index > 0) {
      // 父节点下标
      const parentIndex = (index - 1) >> 1; // 位运算相当于 除以2
      // 父节点
      const parent = this.data[parentIndex];
      // 是否需要进行相应的位置调整
      if (this.compare(node, parent) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 数据下浮
  siftDown(node, i) {
    let index = i;
    const length = this.size();
    const halfLength = length >> 1;
    while (index < halfLength) {
      const leftIndex = (index + 1) * 2 - 1;
      const rightIndex = leftIndex + 1;
      const left = this.data[leftIndex];
      const right = this.data[rightIndex];

      if (this.compare(node, left) > 0) {
        if (this.compare(left, right) < 0) {
          this.swap(index, leftIndex);
          index = leftIndex;
        } else {
          this.swap(index, rightIndex);
          index = rightIndex;
        }
      } else if (this.compare(node, right) > 0) {
        this.swap(index, rightIndex);
        index = rightIndex;
      } else {
        break;
      }
    }
  }

  // 比较
  compare(a, b) {
    return a - b;
  }

  // 交换两个变量的值
  swap(index1, index2) {
    // [a, b] = [b, a]
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }
}

module.exports = MinHeap;
