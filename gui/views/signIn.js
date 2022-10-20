/*****
 * Copyright (c) 2017-2022 Christoph Wittmann, chris.wittmann@icloud.com
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
register(class SignInView extends GridLayoutWidget {
    constructor() {
        super({
            rows: ['auto', '600px', 'auto'],
            rowGap: '0px',
            cols: ['auto', '500px', 'auto'],
            colGap: '0px',
        });

        /*
        this.signIn = new SignInWidget();
        //this.signIn.append(mkTextInput());

        this.signIn.append()

        let div = htmlElement('div');
        div.append(htmlText('Hello HTML Widget'));
        this.signIn.append(mkWidget(div));

        this.setAt(1, 1, this.signIn);
        */

        let w = mkHtmlElementWidget(`<div>
            <h1>A big title</h1>
            <h3>A smaller title</h3>
        </div>`);

        this.setAt(1, 1, w);
    }
});


/*****
*****/
class SignInWidget extends Widget {
    constructor() {
        super('div');
        this.setClassName('colors2');
    }
}