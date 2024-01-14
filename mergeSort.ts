// MergeSort funtion
export const merge =(collection1: number[], collection2: number[]): number[] => {
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

// for execute :
// npx ts-node mergeSort.ts
// console.log(merge([1,2,3,4],[5,6,7,8]))

