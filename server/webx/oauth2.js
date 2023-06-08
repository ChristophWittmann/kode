/*****
 * Copyright (c) 2017-2023 Kode Programming
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


const ac = 'ieIU439Guek7383KkRfdekRkk383849keiekOEKEWldkjdOELLWMdf';

/*****
*****/
register(class OAuth2 extends Webx {
    static authorizations = {};

    constructor(thunk, reference) {
        super(thunk, reference);
    }

    async generateAccessToken() {
    }

    async generateAuthorizationCode(settings, params) {
        return ac;
    }

    async handleGET(req, rsp) {
        let params = req.parameters();

        if ('oauth2' in Config) {
            if (params.client_id in Config.oauth2) {
                let settings = Config.oauth2[params.client_id];

                if (params.response_type == 'code' && typeof params.redirect_uri == 'string') {
                    if ((!settings && !params.scope) || (settings && params.scope == settings.scope)) {
                        let authCode = await this.generateAuthorizationCode(settings, params);

                        if (params.state) {
                            rsp.setHeader('Location', `${env.scheme}://${params.redirect_uri}?code=${authCode}&state=${params.state}`);
                            rsp.endStatus(302);
                            return;
                        }
                        else {
                            rsp.setHeader('Location', `${env.scheme}://${params.redirect_uri}?code=${authCode}`);
                            rsp.endStatus(302);
                            return;
                        }
                    }
                }
            }
        }

        rsp.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        rsp.end(200, 'text/plain', `error=access_denied&state=${params.state}`);
    }

    async handlePost(req, rsp) {
        rsp.end(200, 'text/plain', 'Hello OAuth2 Stub POST ...');
    }
});