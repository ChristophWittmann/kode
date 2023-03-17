/*****
 * Copyright (c) 2017-2022 Kode Programming
 * https://github.com/KodeProgramming/kode/blob/main/LICENSE
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
*****/


/*****
*****/
register(class WArrayEditor extends WEditor {
    constructor(readonly) {
        super();
        this.table = mkWTable();
        this.body = this.table.getBody();
        this.append(this.table);
        this.readonly = readonly ? readonly : false;
        this.columns = [];
        this.objects = mkActiveData([]);
    }

    appendColumns(...columns) {
        cols.forEach(column => this.columns.push(column));
        return this;
    }

    append(...objects) {
        for (let object of objects) {
            let row = this.mkRow(object);
            this.objects.push(object);
            this.body.append(row);
        }

        return this;
    }

    changeColumns(...columnNames) {
    }

    clearColumns(...columnNames) {
        if (columnNames.length) {
            for (let columnName of columnNames) {
                for (let i = 0; i < this.columsn.length; i++) {

                }
            }
        }
        else {
            this.columns = [];
        }

        return this;
    }

    getActiveData() {
        return this.rows;
    }

    getObjectAt(index) {
        return clone(this.objects[index]);
    }

    getObjects() {
        return clone(this.objects);
    }

    insertAfter(...objects) {
        return this;
    }

    insertAfter(...objects) {
        return this;
    }

    length() {
        return this.objects.length;
    }

    mkRow(object) {
    }

    prepend(...objects) {
        return this;
    }

    async refresh() {
        this.ignore();
        this.clear();

        this.listen();
    }

    removeObjects(...objects) {
        return this;
    }

    removeObjectsAt(from, to) {
        return this;
    }
});
