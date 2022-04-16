class RangeList {
  constructor(needLog = true) {
    this.rangeList = [];
    this.needLog = needLog;
  }

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    if (!this.validRange(range)) return;
    if (!this.rangeList.length) {
      this.rangeList.push(range);
      return;
    }

    let res = [];
    let r = range;
    for (var index = 0; index < this.rangeList.length; index++) {
      const curRange = this.rangeList[index];
      const flag = this.validIntersection(curRange, r);

      if (flag === 0) {
        r = this.mergeRange(r, curRange);
        continue;
      } else if (flag === 1) {
        res.push(curRange);
        continue;
      } else if (flag === -1) {
        break;
      }
    }

    this.rangeList = [...res, r, ...this.rangeList.slice(index)];
  }
  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    if (!this.validRange(range)) return;
    let r = range;
    let res = [];

    for (var index = 0; index < this.rangeList.length; index++) {
      const curRange = this.rangeList[index];
      const flag = this.validIntersection(curRange, r);

      if (flag === 0) {
        res = [...res, ...this.removeRange(curRange, r)];
        continue;
      } else if (flag === 1) {
        res.push(curRange);
        continue;
      } else if (flag === -1) {
        break;
      }
    }

    this.rangeList = [...res, ...this.rangeList.slice(index)];
  }
  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    const msg = this.rangeList
      .map(([min, max]) => `[${min}, ${max})`)
      .join(' ');
    if (this.needLog) {
      console.log(msg);
    }
    return msg;
  }

  validRange(range) {
    if (
      !range ||
      !Array.isArray(range) ||
      range.length !== 2 ||
      typeof range[0] !== 'number' ||
      typeof range[1] !== 'number' ||
      range[0] >= range[1]
    ) {
      return false;
    }
    return true;
  }

  validIntersection(range1, range2) {
    const [min1, max1] = range1;
    const [min2, max2] = range2;

    // range2 位于 range1 之后
    if (max1 < min2) {
      return 1;
    }

    // range2 位于 range1 之前
    if (min1 > max2) {
      return -1;
    }

    return 0;
  }

  mergeRange(range1, range2) {
    const [min1, max1] = range1;
    const [min2, max2] = range2;
    return [Math.min(min1, min2), Math.max(max1, max2)];
  }

  removeRange(range1, range2) {
    const [min1, max1] = range1;
    const [min2, max2] = range2;
    const res = [];

    if (min1 < min2) {
      res.push([min1, min2]);
    }

    if (max2 < max1) {
      res.push([max2, max1]);
    }

    return res;
  }
}

// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)
