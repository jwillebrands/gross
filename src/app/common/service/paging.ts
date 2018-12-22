import { List } from "immutable";

export class PageOffset {

    constructor(
        public readonly pageNumber: number,
        public readonly size: number
    ) { }

    isFirst(): boolean {
        return this.pageNumber === 0;
    }

    skipCount(): number {
        return this.pageNumber * this.size;
    }

    previous(): PageOffset {
        return new PageOffset(this.pageNumber - 1, this.size);
    }

    next(): PageOffset {
        return new PageOffset(this.pageNumber + 1, this.size);
    }
}

export class Page<T> implements Iterable<T> {
    constructor(
        private readonly _offset: PageOffset,
        private readonly _data: T[],
        public readonly _totalItems: number) {
    }

    get data(): List<T> {
        return List(this._data);
    }

    nextPage(): PageOffset {
        return this._offset.next();
    }

    previousPage(): PageOffset {
        return this._offset.previous();
    }

    last(): boolean {
        return this.nextPage().skipCount() >= this._totalItems;
    }

    *[Symbol.iterator](): Iterator<T> {
        for (let i of this._data) {
            yield i;
        }
    }

    map<U>(mapper: (obj: T) => U): Page<U> {
        return new Page(
            this._offset,
            this._data.map(mapper),
            this._totalItems
        );
    }
}