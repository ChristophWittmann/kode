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
register(function webPoint(obj) {
    return `#ENDPOINT#${toJson(obj)}`
});


/*****
*****/
register(class WebAppEndpoints {
    constructor(webapp) {
        this.webapp = webapp;

        for (let propertyName of Object.getOwnPropertyNames(Reflect.getPrototypeOf(this))) {
            if (propertyName.startsWith('#ENDPOINT#')) {
                let endpoint = fromJson(propertyName.substr(10));
                this[`on${endpoint.name}`] = this[propertyName];

                this.webapp.on(endpoint.name, async req => {
                    await this.authorize();
                    await this[`on${endpoint.name}`](req);
                });
            }
        }
    }

    async authorize() {
        return true;
    }

    async [webPoint({ name:'SignIn', perms: [ 'user' ] })](req) {
        console.log('here');

        req.reply({
            greeting: 'hello signin please',
            status: 'successful',
        });
    }

    async [webPoint({ name:'SignOut', perms: [ 'user' ] })](req) {
    }
});
