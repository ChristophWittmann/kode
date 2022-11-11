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
 * A webapp is just one specific type of web extension and probably the most
 * frequencly employed.  A webapp is an extension with specific behavior: (1)
 * an undecorated GET results in responding with a dynamically built HTML doc,
 * (2) a GET with query parameters will be sent off to the handleGET() method
 * to handle, and (3) all POST querys will be passed on to the handlePOST()
 * method to be resolved.  To make a functioning webapp, an instance of a sub-
 * class needs to be made.
 * 
 * During server bootstrapping, the module is loaded and a instances of
 * the sub class are created.  Thereafter, that instance is used repeatedly for
 * handling HTTP and web socket requests.
*****/
register(class WebApp extends WebExtension {
    constructor() {
        super();
        this.webSockets = {};
        this.permissions = [];
    }

    async buildCSS(path) {
        this.visualCss = (await FILES.readFile(path)).toString();
        this.compactCss = await minify(path);
    }

    async buildHTML(path) {
        this.visualHtml = (await FILES.readFile(path)).toString();
        this.compactHtml = await minify(path);
    }

    async buildLinks() {
        let links = [];
        this.links = '';

        if ('favicons' in this.config) {
            for (let favicon of this.options.favicons) {
                switch (favicon.type) {
                    case 'icon':
                        let parsed = PATH.parse(favicon.href);
                        let mime = mkMime(parsed.ext);

                        links.push(
                            await htmlElement('link',
                                htmlAttribute('rel', favicon.type),
                                htmlAttribute('type', mime.code),
                                htmlAttribute('href', favicon.href)
                            ).toCompact()
                        );
                        break;

                    case 'shortcut icon':
                        links.push(
                            await htmlElement('link',
                                htmlAttribute('rel', favicon.type),
                                htmlAttribute('href', favicon.href)
                            ).toCompact()
                        );
                        break;
                }
            }
        }

        if (links.length) {
            this.links = `\n        ${links.join('\n        ')}`;
        }
    }

    async handleAuthentication(message) {
        let result = { ok: false };
        return result;
    }

    async handleGET(req, rsp) {
        let doc = mkTextTemplate(Config.minify ? this.compactHtml : this.visualHtml).set({
            css: this.compactCss,
            title: this.options.title,
            description: this.options.description,
            links: this.links,
            bodyClasses: this.options.bodyClasses,
            url: this.options.url,
            authenticate: this.options.authenticate,
            websocket: this.options.websocket,
        });

        rsp.end(200, 'text/html', await doc.toString());
    }

    async handlePOST(req, rsp) {
        if (req.isMessage() && 'messageName' in req.message()) {
            let requestMessage = req.message();
            let response = await this.query(requestMessage);

            if (response) {
                var message = {
                    messageName: 'PostResponse',
                    '#Trap': requestMessage['#Trap'],
                    response: response
                };
            }
            else {
                var message = {
                    messageName: 'Ignored',
                    '#Trap': requestMessage['#Trap'],                    
                };
            }

            rsp.end(200, 'application/json', toJson(message));
        }
        else {
            rsp.endStatus(401);
        }
    }

    async init(cssPath, htmlPath) {
        await super.init();
        await this.buildLinks();
        await this.buildHTML(PATH.join(env.kodePath, 'server/webExtensions/webApp.html'));

        if (this.options.colorsCss) {
            await this.buildCSS(this.config.css);
        }
        else {
            await this.buildCSS(PATH.join(env.kodePath, 'server/webExtensions/webApp.css'));
        }

        await mkWebAppEndpoints(this);
    }

    async onWebSocket(req, webSocket) {
        console.log(websocket);
        //this.webSockets[webSocket.id] = webSocket;
    }
});
