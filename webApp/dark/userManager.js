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


(() => {
    /*****
     * There are two primary panels for managing users: (1) UserManager and (2)
     * UserEditor.  The UserManager searches for users based on provided keyboard
     * input and provides links to open individual users in the UserEditor.  The
     * UserManager also provides a button for creating a new user.  The layout of
     * this panel has three sections: (a) create user button, (2) dynamic search
     * input, and (3) table of search results.
    *****/
    register(class UserManager extends WPanel {
        constructor() {
            super('form');
            this.setAttribute('autocomplete', 'off');
            this.setRefreshers('UserCreateUser', 'UserModifyUser');

            this.controller = mkActiveData({
                searchPattern: '',
            });

            this.append(
                mkWidget('h3')
                .setInnerHtml(txx.fwUserManagerTitle),

                mkWGrid({
                        rows: ['12px', '48px', '12px'],
                        cols: ['12px', '150px', 'auto'],
                })
                .setAt(1, 1,
                    mkIButton()
                    .setValue(txx.fwUserManagerCreateUser)
                    .on('dom.click', message => {
                        this.getView().push(new UserEditor(this, 0n));
                    })
                ),

                mkWGrid({
                        rows: ['12px', 'auto', '12px', '48px', '24px', 'auto'],
                        cols: ['12px', 'minmax(350px, 90%)', 'auto'],
                })
                .setAt(1, 1,
                    mkWidget()
                    .setClassNames('font-size-4')
                    .setInnerHtml(txx.fwUserManagerSearch)
                )
                .setAt(3, 1,
                    mkIDynamic(500)
                    .setPanelState('focus', true)
                    .bind(this.controller, 'searchPattern', Binding.valueBinding)
                    .on('Input.Pause', message => this.refreshList())
                )
                .setAt(5, 1,
                    (this.matching = mkWArrayEditor(
                        {
                            property: 'firstName',
                            label: txx.fwUserEditorFirstName,
                            readonly: true,
                            messages: ['dom.click'],
                        },
                        {
                            property: 'lastName',
                            label: txx.fwUserEditorLastName,
                            readonly: true,
                            messages: ['dom.click'],
                        },
                        {
                            property: 'email',
                            label: txx.fwUserEditorEmail,
                            readonly: true,
                            messages: ['dom.click'],
                        },
                    ))
                    .on('dom.click', message => {
                        let userOid = message.htmlElement.getPinned('data').oid;
                        this.getView().push(new UserEditor(this, userOid));
                    })
                )
            );
        }

        async refreshList() {
            if (this.controller.searchPattern.trim()) {
                var userArray = await queryServer({
                    messageName: 'UserSearch',
                    criterion: 'search',
                    pattern: this.controller.searchPattern.trim(),
                });
            }
            else {
                var userArray = [];
            }

            this.matching.clear();
            this.matching.push(...userArray);

            if (userArray.length) {
                this.matching.revealHead();
            }
            else {
                this.matching.concealHead();
            }
        }
    });


    /*****
     * There are two primary panels for managing users: (1) UserManager and (2)
     * UserEditor.  The UserEditor is the core panel used for entering user
     * properties, modifying user properties, and for saving those properties.
     * The UserEditor is a transient panel, meaning that once yoiu change the
     * stack via a push, pop, or promote, it will go away and leave any remaining
     * work undone.  The UserEditor is most an arrayngement of WObjectEditors and
     * WArrayEditors providing access to the user record and other additional
     * supporting DBMS records.
    *****/
    class UserEditor extends WPanel {
        constructor(userManager, userOid) {
            super('form');
            this.userOid = userOid;
            this.userManager = userManager;
            this.setFlag('transient');
            this.setAttribute('autocomplete', 'off');
            this.setRefreshers('UserModifyUser', 'UserSetGrants');
            this.refresh();
        }

        permissionExt(permission) {
            let editor = null;
            let valueName = `permission${permission.name[0].toUpperCase()}${permission.name.substr(1)}`;
            let contextName = `context${permission.name[0].toUpperCase()}${permission.name.substr(1)}`;

            if (permission.container) {
                let labelKey = `${permission.container}Permission${permission.name[0].toUpperCase()}${permission.name.substr(1)}`
                var label = labelKey in txx ? txx[labelKey] : valueName;
            }
            else {
                let labelKey = `fwPermission${permission.name[0].toUpperCase()}${permission.name.substr(1)}`
                var label = labelKey in txx ? txx[labelKey] : valueName;
            }

            if (typeof permission.editor == 'string' && permission.editor.length) {
                eval(`editor = ${permission.editor}`);
            }

            return [ valueName, contextName, label, editor ];
        }

        async refresh() {
            if (this.userOid > 0n) {
                var userData = await queryServer({ messageName: 'UserGetUserData', oid: this.userOid });

                if (this.userEditor) {
                    if (userData && userData.updated.isLE(this.userEditor.getField('updated'))) {
                        return;
                    }
                }
            }
            else {
                if (this.userEditor) {
                    return;
                }
                else {
                    var userData = new Object({
                        oid: 0n,
                        created: mkTime(),
                        updated: mkTime(),
                        email: '',
                        emailOid: 0n,
                        title: '',
                        firstName: '',
                        lastName: '',
                        suffix: '',
                        status: 'active',
                        authType: 'simple',
                        verified: false,
                        password: false,
                        failures: 0,
                        phones: [],
                        addresses: [],
                        altEmails: [],
                    });
                }
            }

            this.ignore();
            this.clear();

            this.append(
                (this.userEditor = mkWObjectEditor())
                .addBreak(mkWidget('h3').setInnerHtml(txx.fwUserEditorTitle))
                .add(userData, {
                    email: {
                        label: txx.fwUserEditorEmail,
                        type: ScalarEmail,
                        focus: true,
                    },
                    title: {
                        label: txx.fwUserEditorUserTitle,
                    },
                    firstName: {
                        label: txx.fwUserEditorFirstName,
                    },
                    lastName: {
                        label: txx.fwUserEditorLastName,
                    },
                    suffix: {
                        label: txx.fwUserEditorSuffix,
                    },
                    status: {
                        label: txx.fwUserEditorStatus,
                        type: ScalarEnum,
                        choices: [
                            { value: 'active', text: txx.fwUserEditorStatusActive },
                            { value: 'inactive', text: txx.fwUserEditorStatusInactive },
                        ],
                    },
                    authType: {
                        readonly: true,
                        label: txx.fwUserEditorAuthorizationType,
                        type: ScalarEnum,
                        choices: [
                            { value: 'simple', text: 'simple' }
                        ]
                    },
                    verified: {
                        readonly: true,
                        label: txx.fwUserEditorVerified,
                        type: ScalarBool,
                    },
                    password: {
                        readonly: true,
                        label: txx.fwUserEditorPassword,
                        type: ScalarBool,
                    },
                    failures: {
                        readonly: true,
                        label: txx.fwUserEditorSignInFailures,
                        type: ScalarNumber,
                    },
                }),
            );

            await this.refreshGrants(userData);
            this.listen();
            super.refresh();
        }

        async refreshGrants(userData) {
            if (userData.oid > 0n) {
                const permissions = await queryServer({ messageName: 'UserGetPermissions' });
                const grants = await queryServer({ messageName: 'UserGetGrants', userOid: userData.oid });
                this.userEditor.addBreak(mkWidget('h3').setInnerHtml(txx.fwUserPermissionsTitle));

                for (let permissionKey of Object.keys(permissions).sort()) {
                    let permission = permissions[permissionKey];
                    let value = permissionKey in grants.permissions ? true : false;
                    let [ valueName, contextName, label, editor ] = this.permissionExt(permission);

                    if (permission.name in grants.permissions) {
                        this.userEditor.getActiveData()[contextName] = grants.context[permission.name];
                    }
                    else {
                        this.userEditor.getActiveData()[contextName] = new Object();
                    }

                    if (editor) {
                        var extra = mkWHotSpot()
                        .setInnerHtml(txx.fwPermissionContextAvailable)
                        .setWidgetStyle('scalar-extra')
                        .bind(this.userEditor.getActiveData(), valueName, (widget, value) => {
                            value ? widget.reveal() : widget.conceal();
                        })
                        .on('dom.click', async message => {
                            this.clearFlag('transient');

                           let contextEditor = await waitOn(new editor({
                                grants: grants,
                                permission: permission,
                                save: context => {
                                    ActiveData.assign(this.userEditor.getActiveData()[contextName], context);
                                    this.getView().pop();
                                    this.setFlag('transient');
                                },
                            }));

                           this.getView().push(contextEditor);
                        });
                    }
                    else {
                        var extra = null;
                    }

                    let options = new Object({
                        type: ScalarBool,
                        label: label,
                        extra: extra,
                    });

                    this.userEditor.addField(valueName, value, options);
                }
            }
        }

        async save() {
            let userData = this.userEditor.getValues();

            if (userData.oid == 0n) {
                let result = await queryServer({
                    messageName: 'UserCreateUser',
                    userData: userData,
                });

                if (!result.ok) {
                    await mkWAlertDialog({ text: txx[result.feedback] });
                    return;
                }
            }
            else {
                await queryServer({
                    messageName: 'UserModifyUser',
                    userData: userData,
                });

                let values = this.userEditor.getValues();
                const grants = {};

                Object.keys(values)
                .filter(key => key.startsWith('permission'))
                .forEach(key => {
                    let name = key.substring(10).toLowerCase();

                    grants[name] = {
                        permission: name,
                        granted: values[key],
                    };
                });

                Object.keys(values)
                .filter(key => key.startsWith('context'))
                .forEach(key => {
                    let name = key.substring(7).toLowerCase();
                    grants[name].context = values[key];
                });

                await queryServer({
                    messageName: 'UserSetGrants',
                    userOid: userData.oid,
                    grants: grants,
                });
            }

            this.userManager.refreshList();
            this.getView().pop();
        }
    }
})();