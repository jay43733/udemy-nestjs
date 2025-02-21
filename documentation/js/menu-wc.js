'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">udemy-nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-cb00d0eb848304552dc3b31f5bbdd2b5953a96d7bd56e783e04b132047f9f25719783a520f97b5e4b0e729055301511ebc17dfd8046ecfb07c09c9c23e947227"' : 'data-bs-target="#xs-controllers-links-module-AppModule-cb00d0eb848304552dc3b31f5bbdd2b5953a96d7bd56e783e04b132047f9f25719783a520f97b5e4b0e729055301511ebc17dfd8046ecfb07c09c9c23e947227"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-cb00d0eb848304552dc3b31f5bbdd2b5953a96d7bd56e783e04b132047f9f25719783a520f97b5e4b0e729055301511ebc17dfd8046ecfb07c09c9c23e947227"' :
                                            'id="xs-controllers-links-module-AppModule-cb00d0eb848304552dc3b31f5bbdd2b5953a96d7bd56e783e04b132047f9f25719783a520f97b5e4b0e729055301511ebc17dfd8046ecfb07c09c9c23e947227"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-cb00d0eb848304552dc3b31f5bbdd2b5953a96d7bd56e783e04b132047f9f25719783a520f97b5e4b0e729055301511ebc17dfd8046ecfb07c09c9c23e947227"' : 'data-bs-target="#xs-injectables-links-module-AppModule-cb00d0eb848304552dc3b31f5bbdd2b5953a96d7bd56e783e04b132047f9f25719783a520f97b5e4b0e729055301511ebc17dfd8046ecfb07c09c9c23e947227"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cb00d0eb848304552dc3b31f5bbdd2b5953a96d7bd56e783e04b132047f9f25719783a520f97b5e4b0e729055301511ebc17dfd8046ecfb07c09c9c23e947227"' :
                                        'id="xs-injectables-links-module-AppModule-cb00d0eb848304552dc3b31f5bbdd2b5953a96d7bd56e783e04b132047f9f25719783a520f97b5e4b0e729055301511ebc17dfd8046ecfb07c09c9c23e947227"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthsModule.html" data-type="entity-link" >AuthsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthsModule-650d0d7b960e576cbb1ea58be010a3b683f4aff34ab38d6e2bd2ab38e8ec94d7353dcb3a6daf4d516aa18f06e54162d65849fe7d7c93f25dd3e1d1f29e0382cd"' : 'data-bs-target="#xs-controllers-links-module-AuthsModule-650d0d7b960e576cbb1ea58be010a3b683f4aff34ab38d6e2bd2ab38e8ec94d7353dcb3a6daf4d516aa18f06e54162d65849fe7d7c93f25dd3e1d1f29e0382cd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthsModule-650d0d7b960e576cbb1ea58be010a3b683f4aff34ab38d6e2bd2ab38e8ec94d7353dcb3a6daf4d516aa18f06e54162d65849fe7d7c93f25dd3e1d1f29e0382cd"' :
                                            'id="xs-controllers-links-module-AuthsModule-650d0d7b960e576cbb1ea58be010a3b683f4aff34ab38d6e2bd2ab38e8ec94d7353dcb3a6daf4d516aa18f06e54162d65849fe7d7c93f25dd3e1d1f29e0382cd"' }>
                                            <li class="link">
                                                <a href="controllers/AuthsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthsModule-650d0d7b960e576cbb1ea58be010a3b683f4aff34ab38d6e2bd2ab38e8ec94d7353dcb3a6daf4d516aa18f06e54162d65849fe7d7c93f25dd3e1d1f29e0382cd"' : 'data-bs-target="#xs-injectables-links-module-AuthsModule-650d0d7b960e576cbb1ea58be010a3b683f4aff34ab38d6e2bd2ab38e8ec94d7353dcb3a6daf4d516aa18f06e54162d65849fe7d7c93f25dd3e1d1f29e0382cd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthsModule-650d0d7b960e576cbb1ea58be010a3b683f4aff34ab38d6e2bd2ab38e8ec94d7353dcb3a6daf4d516aa18f06e54162d65849fe7d7c93f25dd3e1d1f29e0382cd"' :
                                        'id="xs-injectables-links-module-AuthsModule-650d0d7b960e576cbb1ea58be010a3b683f4aff34ab38d6e2bd2ab38e8ec94d7353dcb3a6daf4d516aa18f06e54162d65849fe7d7c93f25dd3e1d1f29e0382cd"' }>
                                        <li class="link">
                                            <a href="injectables/AuthsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-2c50f483261c58e7bd96d385c29be294e53c0272bb4e1c72a1a8751d234a1f0f903f895b49377b34b4729e67244d88e4057e253a34225eca91047c48f433bd0c"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-2c50f483261c58e7bd96d385c29be294e53c0272bb4e1c72a1a8751d234a1f0f903f895b49377b34b4729e67244d88e4057e253a34225eca91047c48f433bd0c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-2c50f483261c58e7bd96d385c29be294e53c0272bb4e1c72a1a8751d234a1f0f903f895b49377b34b4729e67244d88e4057e253a34225eca91047c48f433bd0c"' :
                                            'id="xs-controllers-links-module-PostsModule-2c50f483261c58e7bd96d385c29be294e53c0272bb4e1c72a1a8751d234a1f0f903f895b49377b34b4729e67244d88e4057e253a34225eca91047c48f433bd0c"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-2c50f483261c58e7bd96d385c29be294e53c0272bb4e1c72a1a8751d234a1f0f903f895b49377b34b4729e67244d88e4057e253a34225eca91047c48f433bd0c"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-2c50f483261c58e7bd96d385c29be294e53c0272bb4e1c72a1a8751d234a1f0f903f895b49377b34b4729e67244d88e4057e253a34225eca91047c48f433bd0c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-2c50f483261c58e7bd96d385c29be294e53c0272bb4e1c72a1a8751d234a1f0f903f895b49377b34b4729e67244d88e4057e253a34225eca91047c48f433bd0c"' :
                                        'id="xs-injectables-links-module-PostsModule-2c50f483261c58e7bd96d385c29be294e53c0272bb4e1c72a1a8751d234a1f0f903f895b49377b34b4729e67244d88e4057e253a34225eca91047c48f433bd0c"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-0f36c5462358ddb1d40e8680b144f5851defbc531187434ee5b6ff3a2132cb51f0eaabd39fb6c1112cb9b89f6964c9e665d5652389615663c7631abff1fc3c59"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-0f36c5462358ddb1d40e8680b144f5851defbc531187434ee5b6ff3a2132cb51f0eaabd39fb6c1112cb9b89f6964c9e665d5652389615663c7631abff1fc3c59"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-0f36c5462358ddb1d40e8680b144f5851defbc531187434ee5b6ff3a2132cb51f0eaabd39fb6c1112cb9b89f6964c9e665d5652389615663c7631abff1fc3c59"' :
                                            'id="xs-controllers-links-module-UsersModule-0f36c5462358ddb1d40e8680b144f5851defbc531187434ee5b6ff3a2132cb51f0eaabd39fb6c1112cb9b89f6964c9e665d5652389615663c7631abff1fc3c59"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-0f36c5462358ddb1d40e8680b144f5851defbc531187434ee5b6ff3a2132cb51f0eaabd39fb6c1112cb9b89f6964c9e665d5652389615663c7631abff1fc3c59"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-0f36c5462358ddb1d40e8680b144f5851defbc531187434ee5b6ff3a2132cb51f0eaabd39fb6c1112cb9b89f6964c9e665d5652389615663c7631abff1fc3c59"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-0f36c5462358ddb1d40e8680b144f5851defbc531187434ee5b6ff3a2132cb51f0eaabd39fb6c1112cb9b89f6964c9e665d5652389615663c7631abff1fc3c59"' :
                                        'id="xs-injectables-links-module-UsersModule-0f36c5462358ddb1d40e8680b144f5851defbc531187434ee5b6ff3a2132cb51f0eaabd39fb6c1112cb9b89f6964c9e665d5652389615663c7631abff1fc3c59"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthsController.html" data-type="entity-link" >AuthsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDto.html" data-type="entity-link" >GetUserParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthsService.html" data-type="entity-link" >AuthsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});