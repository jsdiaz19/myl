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
                    <a href="index.html" data-type="index-link">material documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1fc48edce6b315fc03a04c64f9b77f59"' : 'data-target="#xs-components-links-module-AppModule-1fc48edce6b315fc03a04c64f9b77f59"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1fc48edce6b315fc03a04c64f9b77f59"' :
                                            'id="xs-components-links-module-AppModule-1fc48edce6b315fc03a04c64f9b77f59"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppSidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FullComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FullComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DemoMaterialModule.html" data-type="entity-link">DemoMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialComponentsModule.html" data-type="entity-link">MaterialComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MaterialComponentsModule-f1a432734e96add431d148360ae03b1d"' : 'data-target="#xs-components-links-module-MaterialComponentsModule-f1a432734e96add431d148360ae03b1d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MaterialComponentsModule-f1a432734e96add431d148360ae03b1d"' :
                                            'id="xs-components-links-module-MaterialComponentsModule-f1a432734e96add431d148360ae03b1d"' }>
                                            <li class="link">
                                                <a href="components/BalanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BalanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BudgetDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BudgetDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BudgetGoalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BudgetGoalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckDespachoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckDespachoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CostEffectivenessComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CostEffectivenessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeclarationImportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeclarationImportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DescriptionDespachoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DescriptionDespachoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogAnomalyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogAnomalyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LowSalesProductComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LowSalesProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PositionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PositionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportStoreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReportStoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RosterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RosterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchedulesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchedulesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadCsvComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UploadCsvComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewDeclarationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewDeclarationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewdespachosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewdespachosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-6ec4bbd08a3079010d14930918180061"' : 'data-target="#xs-directives-links-module-SharedModule-6ec4bbd08a3079010d14930918180061"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-6ec4bbd08a3079010d14930918180061"' :
                                        'id="xs-directives-links-module-SharedModule-6ec4bbd08a3079010d14930918180061"' }>
                                        <li class="link">
                                            <a href="directives/AccordionAnchorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionAnchorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AccordionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AccordionLinkDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionLinkDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-6ec4bbd08a3079010d14930918180061"' : 'data-target="#xs-injectables-links-module-SharedModule-6ec4bbd08a3079010d14930918180061"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-6ec4bbd08a3079010d14930918180061"' :
                                        'id="xs-injectables-links-module-SharedModule-6ec4bbd08a3079010d14930918180061"' }>
                                        <li class="link">
                                            <a href="injectables/MenuItems.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MenuItems</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StarterModule.html" data-type="entity-link">StarterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StarterModule-c3cb4b6301314cfe3163f5f6702b6867"' : 'data-target="#xs-components-links-module-StarterModule-c3cb4b6301314cfe3163f5f6702b6867"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StarterModule-c3cb4b6301314cfe3163f5f6702b6867"' :
                                            'id="xs-components-links-module-StarterModule-c3cb4b6301314cfe3163f5f6702b6867"' }>
                                            <li class="link">
                                                <a href="components/CreateDespachoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateDespachoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/AccordionAnchorDirective.html" data-type="entity-link">AccordionAnchorDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AccordionDirective.html" data-type="entity-link">AccordionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/AccordionLinkDirective.html" data-type="entity-link">AccordionLinkDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link">MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher-1.html" data-type="entity-link">MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher-2.html" data-type="entity-link">MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher-3.html" data-type="entity-link">MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher-4.html" data-type="entity-link">MyErrorStateMatcher</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BalanceService.html" data-type="entity-link">BalanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BudgetGoalService.html" data-type="entity-link">BudgetGoalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BudgetGoalService-1.html" data-type="entity-link">BudgetGoalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CheckService.html" data-type="entity-link">CheckService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateDespachoService.html" data-type="entity-link">CreateDespachoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeclarationImportService.html" data-type="entity-link">DeclarationImportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogServiceService.html" data-type="entity-link">DialogServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttBDService.html" data-type="entity-link">HttBDService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LowSalesService.html" data-type="entity-link">LowSalesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuItems.html" data-type="entity-link">MenuItems</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PDFdespachoService.html" data-type="entity-link">PDFdespachoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PositionService.html" data-type="entity-link">PositionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShopsService.html" data-type="entity-link">ShopsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewDespachoServiceService.html" data-type="entity-link">ViewDespachoServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewReportService.html" data-type="entity-link">ViewReportService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Budget.html" data-type="entity-link">Budget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChangeSeller.html" data-type="entity-link">ChangeSeller</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Description.html" data-type="entity-link">Description</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Description-1.html" data-type="entity-link">Description</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Despacho.html" data-type="entity-link">Despacho</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemReference.html" data-type="entity-link">ItemReference</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link">Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Payment.html" data-type="entity-link">Payment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/person.html" data-type="entity-link">person</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product-1.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReferenceDespacho.html" data-type="entity-link">ReferenceDespacho</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/schedules.html" data-type="entity-link">schedules</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SellerWeek.html" data-type="entity-link">SellerWeek</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});