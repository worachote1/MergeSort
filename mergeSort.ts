// MergeSort funtion
const merge =(collection1: number[], collection2: number[]): number[] => {
    let res: number[] = [];
    let pLeft = 0;
    let pRight = 0;

    while (pLeft < collection1.length && pRight < collection2.length) {
        if (collection1[pLeft] < collection2[pRight]) {
            res.push(collection1[pLeft]);
            pLeft++;
        } else {
            res.push(collection2[pRight]);
            pRight++;
        }
    }

    while (pLeft < collection1.length) {
        res.push(collection1[pLeft]);
        pLeft++;
    }

    while (pRight < collection2.length) {
        res.push(collection2[pRight]);
        pRight++;
    }

    return res;
}

// Unit test
// for execute :
// npx ts-node mergeSort.ts
const testList1 = [1, 3, 5, 7];
const testList2 = [2, 4, 6, 8];

console.log(merge(testList1,testList2))