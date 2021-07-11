class Tree {
    constructor(array) {
        this.array = array;
        this.root = array[0];
        this.peak = array[array.length - 1];
    }

    // using bubble sort > O(n^2)
    sort() {
        for (let x = 0; x < this.array.length; x++) {
            for (let y = x + 1; y < this.array.length; y++) {
                if (this.array[x] > this.array[y]) {
                    [this.array[x], this.array[y]] = [this.array[y], this.array[x]];
                }
            }
        }

        return this.array;
    }

    search(parent, query) {
        let leftRoute = [];
        let rightRoute = [];

        for (let x = 1; x < this.array.length; x++) {
            if (this.array[x] > parent) {
                // this.search(this.array[x], parent);
            } else {
                // this.search(parent, this.array[x]);
            }
        }

        return [leftRoute, rightRoute];
    }
}

module.exports = {
    Tree
}