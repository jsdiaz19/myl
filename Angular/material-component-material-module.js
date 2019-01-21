(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-component-material-module"],{

/***/ "./src/app/material-component/check-despachos/check-despachos.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/material-component/check-despachos/check-despachos.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntable {\r\n  width: 40%;\r\n  margin-top: 30px;\r\n}\r\n\r\n.card-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.mat-column-select {\r\n  overflow: initial;\r\n}\r\n\r\n#close_box{\r\n  position: fixed;\r\n  display: none;\r\n  left: 840px;\r\n  top: 280px;\r\n}\r\n\r\n#delete{\r\n  position: fixed;\r\n  display: none;\r\n  left: 840px;\r\n  top: 340px;\r\n}\r\n\r\n#finish{\r\n  position: fixed;\r\n  display: none;\r\n  left: 840px;\r\n  top: 220px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2NoZWNrLWRlc3BhY2hvcy9jaGVjay1kZXNwYWNob3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9jaGVjay1kZXNwYWNob3MvY2hlY2stZGVzcGFjaG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGFibGUge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc2VsZWN0IHtcclxuICBvdmVyZmxvdzogaW5pdGlhbDtcclxufVxyXG5cclxuI2Nsb3NlX2JveHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBsZWZ0OiA4NDBweDtcclxuICB0b3A6IDI4MHB4O1xyXG59XHJcblxyXG4jZGVsZXRle1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGxlZnQ6IDg0MHB4O1xyXG4gIHRvcDogMzQwcHg7XHJcbn1cclxuXHJcbiNmaW5pc2h7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbGVmdDogODQwcHg7XHJcbiAgdG9wOiAyMjBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/material-component/check-despachos/check-despachos.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/material-component/check-despachos/check-despachos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n      <mat-card-title>Verificacion de despacho</mat-card-title>\r\n      <mat-card-subtitle>Aqui se validara el numero de productos recibidos</mat-card-subtitle>\r\n      <mat-card-subtitle>Caja {{numBox+1}}</mat-card-subtitle>\r\n        <div class=\"card-container\">\r\n\r\n          <!--Table of products register -->          \r\n          <table mat-table [dataSource]=\"Source\" class=\"mat-elevation-z8\" >\r\n            \r\n              <ng-container matColumnDef=\"Select\">\r\n                  <th mat-header-cell *matHeaderCellDef>\r\n                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                                  [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n                    </mat-checkbox>\r\n                  </th>\r\n                  <td mat-cell *matCellDef=\"let row\">\r\n                    <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                                  (change)=\"$event ? selection.toggle(row) : null\"\r\n                                  [checked]=\"selection.isSelected(row)\">\r\n                    </mat-checkbox>\r\n                  </td>\r\n                </ng-container>\r\n\r\n            <ng-container matColumnDef=\"Codigo de barras\">\r\n              <th mat-header-cell *matHeaderCellDef> Codigo de barras </th>\r\n              <td mat-cell *matCellDef=\"let element\" (keyup)=\"Add_product()\" contenteditable=\"true\" id=\"edit\"> \r\n                <ng-container *ngIf=\"element.cod!='empty'\">\r\n                    {{element.cod}}\r\n                </ng-container>\r\n              </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"Cantidad\">\r\n              <th mat-header-cell *matHeaderCellDef> Cantidad </th>\r\n              <td mat-cell *matCellDef=\"let element\" > \r\n                <ng-container *ngIf=\"element.cod!='empty'\">\r\n                  {{element.cantidad}}\r\n                </ng-container>\r\n                <ng-container *ngIf=\"element.cod=='empty'\">\r\n                    0\r\n                </ng-container>\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" ></tr>\r\n        </table> \r\n        \r\n        <div>\r\n          <mat-button-toggle id=\"delete\" (click)=\"Delete()\">Eliminar</mat-button-toggle>\r\n          <mat-button-toggle id=\"close_box\" (click)=\"ValidateBox()\" >Cerrar caja</mat-button-toggle>\r\n          <mat-button-toggle id=\"finish\" >Cerrar despacho</mat-button-toggle>\r\n        </div>\r\n\r\n        <!--Table of description of products register -->\r\n        <table mat-table [dataSource]=\"Data\" class=\"mat-elevation-z8\" >\r\n\r\n          <ng-container matColumnDef=\"Referencia\">\r\n            <th mat-header-cell *matHeaderCellDef> Referencia </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <ng-container *ngIf=\"element.ref!='empty'\">\r\n                    {{element.ref}}\r\n                </ng-container> \r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Unidades\">\r\n            <th mat-header-cell *matHeaderCellDef> Unidades </th>\r\n            <td mat-cell *matCellDef=\"let element\" > \r\n              <ng-container *ngIf=\"element.ref!='empty'\">\r\n                  {{element.und}}\r\n              </ng-container> \r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"labelColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: labelColumns;\"></tr>\r\n      </table> \r\n        </div> \r\n        \r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/material-component/check-despachos/check-despachos.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/check-despachos/check-despachos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckDespachoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckDespachoComponent", function() { return CheckDespachoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_Http_htt_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/Http/htt-bd.service */ "./src/app/service/Http/htt-bd.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _description_despacho_description_despacho_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../description-despacho/description-despacho.component */ "./src/app/material-component/description-despacho/description-despacho.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CheckDespachoComponent = /** @class */ (function () {
    function CheckDespachoComponent(_route, HttpBD, router, dialog) {
        var _this = this;
        this._route = _route;
        this.HttpBD = HttpBD;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['Select', 'Codigo de barras', 'Cantidad'];
        this.labelColumns = ['Referencia', 'Unidades'];
        this.despacho = null;
        this.Box = null;
        this.numBox = 0;
        this.numProduct = 0;
        this.Source = null;
        this.Data = null;
        this.miMapa = new Map();
        this.selection = null;
        this.initial = [
            { cod: 'empty' }
        ];
        this.init = [];
        this.refUnd = null;
        this.Attempts = 2;
        this.despacho = this._route.snapshot.paramMap.get('id');
        this.Box = this._route.snapshot.paramMap.get('num');
        this.HttpBD.UnidadBox(this.despacho, this.numBox + 1).subscribe(function (result) {
            _this.refUnd = result;
        });
    }
    CheckDespachoComponent.prototype.ngOnInit = function () {
        this.Source = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.initial);
        this.Data = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.init);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
    };
    CheckDespachoComponent.prototype.equal = function (obj1, obj2) {
        return JSON.stringify(obj1) == JSON.stringify(obj2);
    };
    CheckDespachoComponent.prototype.indexof = function (obj1, element) {
        for (var index = 0; index < element.length; index++) {
            if (this.equal(obj1, element[index])) {
                return index;
            }
        }
        return -1;
    };
    CheckDespachoComponent.prototype.Add_product = function () {
        var _this = this;
        if (document.getElementById('edit').textContent.length == 12) {
            var content = document.getElementById('edit').textContent;
            document.getElementById('edit').textContent = '';
            this.HttpBD.Get_reference(content).subscribe(function (result) {
                if (result != null) {
                    _this.numProduct += 1;
                    if (_this.initial.length >= 1) {
                        document.getElementById('delete').style.display = "block";
                        document.getElementById('close_box').style.display = "block";
                    }
                    else {
                        document.getElementById('delete').style.display = "none";
                        document.getElementById('close_box').style.display = "none";
                    }
                    _this.initial.push({ cod: content, cantidad: '1' });
                    _this.Source = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.initial);
                    if (_this.miMapa.get(content) == undefined) {
                        _this.miMapa.set(content, [result['referencia'], 1]);
                        _this.init.push({ ref: result['referencia'], und: 1 });
                    }
                    else {
                        _this.init.splice(_this.indexof({ ref: result['referencia'], und: _this.miMapa.get(content)[1] }, _this.init), 1);
                        _this.miMapa.set(content, [result['referencia'], _this.miMapa.get(content)[1] + 1]);
                        _this.init.push({ ref: result['referencia'], und: _this.miMapa.get(content)[1] });
                    }
                    _this.Data = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.init);
                }
            });
        }
        if (document.getElementById('edit').textContent.length > 15) {
            document.getElementById('edit').textContent = '';
        }
    };
    CheckDespachoComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.Source.data.length;
        return numSelected === numRows;
    };
    CheckDespachoComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isAllSelected() == true) {
            this.selection.clear();
            this.Source.data.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    CheckDespachoComponent.prototype.Delete = function () {
        for (var index = 0; index < this.selection.selected.length; index++) {
            var ant = this.selection.selected[index];
            this.initial.splice(this.indexof(ant, this.initial), 1);
            this.Source = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.initial);
            var del = this.miMapa.get(ant['cod']);
            this.numProduct -= 1;
            if (del[1] - 1 > 0) {
                this.miMapa.set(ant['cod'], [del[0], del[1] - 1]);
                this.init.splice(this.indexof({ ref: del[0], und: del[1] }, this.init), 1);
                this.init.push({ ref: del[0], und: del[1] - 1 });
            }
            else {
                this.miMapa.delete(ant['cod']);
                this.init.splice(this.indexof({ ref: del[0], und: del[1] }, this.init), 1);
            }
            this.Data = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.init);
        }
        this.selection.clear();
    };
    CheckDespachoComponent.prototype.ValidateBox = function () {
        var _this = this;
        if (this.refUnd.length == this.init.length) {
            var temp = Array.from(this.miMapa.values());
            if (JSON.stringify(Array.from(this.miMapa.values()).sort()) === JSON.stringify(Array.from(this.refUnd).sort())) {
                window.alert("El numero de productos registrados coinciden\n\n                            CAJA VALIDADA");
                this.initial = [{ cod: 'empty' }];
                this.init = [];
                this.Data = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.init);
                this.Source = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.initial);
                this.numBox += 1;
                this.miMapa.clear();
                if (this.numBox + 1 <= this.Box) {
                    this.HttpBD.UnidadBox(this.despacho, this.numBox + 1).subscribe(function (result) {
                        _this.refUnd = result;
                    });
                }
                else {
                    this.HttpBD.UpdateBox(this.despacho);
                    this.router.navigate(['/button']);
                }
            }
            else {
                window.alert("El numero de productos registrados no coinciden con el numero de productos enviados, por favor intenta de nuevo");
                this.initial = [{ cod: 'empty' }];
                this.init = [];
                this.Data = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.init);
                this.Source = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.initial);
                this.Attempts -= 1;
                if (this.Attempts == 0) {
                    var dialogRef = this.dialog.open(_description_despacho_description_despacho_component__WEBPACK_IMPORTED_MODULE_5__["DescriptionDespachoComponent"], {
                        width: '1000px',
                        data: { ref: this.despacho, inv: Array.from(this.miMapa.values()) }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        window.location.href = '/view';
                        window.location.reload(false);
                    });
                }
                else {
                    this.miMapa.clear();
                }
            }
        }
        else {
            window.alert("El numero de productos registrados no coinciden con el numero de productos enviados, por favor intenta de nuevo");
            this.initial = [{ cod: 'empty' }];
            this.init = [];
            this.Data = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.init);
            this.Source = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.initial);
            this.Attempts -= 1;
            if (this.Attempts == 0) {
                var dialogRef = this.dialog.open(_description_despacho_description_despacho_component__WEBPACK_IMPORTED_MODULE_5__["DescriptionDespachoComponent"], {
                    width: '1000px',
                    data: { ref: this.despacho, inv: Array.from(this.miMapa.values()) }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    window.location.href = '/view';
                    window.location.reload(false);
                });
            }
            else {
                this.miMapa.clear();
            }
        }
    };
    CheckDespachoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check',
            template: __webpack_require__(/*! ./check-despachos.component.html */ "./src/app/material-component/check-despachos/check-despachos.component.html"),
            styles: [__webpack_require__(/*! ./check-despachos.component.css */ "./src/app/material-component/check-despachos/check-despachos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_Http_htt_bd_service__WEBPACK_IMPORTED_MODULE_3__["HttBDService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CheckDespachoComponent);
    return CheckDespachoComponent;
}());



/***/ }),

/***/ "./src/app/material-component/description-despacho/description-despacho.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/material-component/description-despacho/description-despacho.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9kZXNjcmlwdGlvbi1kZXNwYWNoby9kZXNjcmlwdGlvbi1kZXNwYWNoby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/material-component/description-despacho/description-despacho.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/material-component/description-despacho/description-despacho.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <mat-card-title>DESCRIPCION DE ANOMALIA</mat-card-title>\n    <mat-card-subtitle>Debido a una diferencia de numero de producto, se realizara un informe acerca de esta anomalia </mat-card-subtitle>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Describa aqui la anomalia\" (blur)=Get($event)>\n      </textarea>\n    </mat-form-field>\n    \n    <h4>RESULTADO DEL ULTIMO CONTEO</h4>\n    \n    <mat-list *ngFor=\"let product of inv\" role=\"list\">\n        {{ product[0]}}: {{product[1]}} Unidades\n    </mat-list>\n    \n    \n    <button mat-button id=\"Send\" (click)=\"SendInfo()\">Confirmar</button>\n</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/material-component/description-despacho/description-despacho.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/material-component/description-despacho/description-despacho.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DescriptionDespachoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionDespachoComponent", function() { return DescriptionDespachoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_Http_htt_bd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/Http/htt-bd.service */ "./src/app/service/Http/htt-bd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DescriptionDespachoComponent = /** @class */ (function () {
    function DescriptionDespachoComponent(data, HttpBD, dialogRef) {
        this.data = data;
        this.HttpBD = HttpBD;
        this.dialogRef = dialogRef;
        this.inv = null;
        this.descript = null;
    }
    DescriptionDespachoComponent.prototype.ngOnInit = function () {
        this.inv = this.data.inv;
        console.log(this.data.ref);
    };
    DescriptionDespachoComponent.prototype.Get = function (event) {
        this.descript = event.target.value;
    };
    DescriptionDespachoComponent.prototype.SendInfo = function () {
        this.HttpBD.Anomaly(this.data.ref, this.inv, this.descript);
        this.dialogRef.close();
    };
    DescriptionDespachoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-description-despacho',
            template: __webpack_require__(/*! ./description-despacho.component.html */ "./src/app/material-component/description-despacho/description-despacho.component.html"),
            styles: [__webpack_require__(/*! ./description-despacho.component.css */ "./src/app/material-component/description-despacho/description-despacho.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _service_Http_htt_bd_service__WEBPACK_IMPORTED_MODULE_2__["HttBDService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], DescriptionDespachoComponent);
    return DescriptionDespachoComponent;
}());



/***/ }),

/***/ "./src/app/material-component/grid/grid.component.html":
/*!*************************************************************!*\
  !*** ./src/app/material-component/grid/grid.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Fixed height grid-list</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-grid-list&gt;</code> is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec. <code><a href=\"https://material.io/guidelines/components/grid-lists.html\">Official Doc here</a></code></mat-card-subtitle>\r\n              <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n                  <mat-grid-tile\r\n                      *ngFor=\"let tile of tiles\"\r\n                      [colspan]=\"tile.cols\"\r\n                      [rowspan]=\"tile.rows\"\r\n                      [style.background]=\"tile.color\">\r\n                    {{tile.text}}\r\n                  </mat-grid-tile>\r\n                </mat-grid-list>  \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>    \r\n<!-- ============================================================== -->\r\n<!-- Basic Card Grid-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>\r\n      <mat-card-title>Basic grid-list</mat-card-title>\r\n      <mat-card-subtitle><code>&lt;mat-grid-list&gt;</code> is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec. <a href=\"https://material.io/guidelines/components/grid-lists.html\">here</a></mat-card-subtitle>\r\n      <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n        <mat-grid-tile>1</mat-grid-tile>\r\n        <mat-grid-tile>2</mat-grid-tile>\r\n        <mat-grid-tile>3</mat-grid-tile>\r\n        <mat-grid-tile>4</mat-grid-tile>\r\n      </mat-grid-list>  \r\n    </mat-card-content>        \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/material-component/grid/grid.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-component/grid/grid.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dyaWQvQzpcXFVzZXJzXFxBVVhJTElBUjNcXERvY3VtZW50c1xcQW5ndWxhclxcbXlsL3NyY1xcYXBwXFxtYXRlcmlhbC1jb21wb25lbnRcXGdyaWRcXGdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/material-component/grid/grid.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-component/grid/grid.component.ts ***!
  \***********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.tiles = [
            {
                text: 'One',
                cols: 3,
                rows: 1,
                color: 'lightblue'
            },
            {
                text: 'Two',
                cols: 1,
                rows: 2,
                color: 'lightgreen'
            },
            {
                text: 'Three',
                cols: 1,
                rows: 1,
                color: 'lightpink'
            },
            {
                text: 'Four',
                cols: 2,
                rows: 1,
                color: '#DDBDF1'
            }
        ];
    }
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/material-component/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/material-component/grid/grid.component.scss")]
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/material-component/lists/lists.component.html":
/*!***************************************************************!*\
  !*** ./src/app/material-component/lists/lists.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Basic list</mat-card-title>\r\n              <mat-card-subtitle><code>&lt;mat-list&gt;</code> is a container component that wraps and formats a series of line items. As the base list component, it provides Material Design styling, but no behavior of its own.<code><a href=\"https://material.angular.io/components/list/overview\">Official Doc here</a></code></mat-card-subtitle>\r\n              <mat-list role=\"list\">\r\n                <mat-list-item role=\"listitem\">Item 1</mat-list-item>\r\n                <mat-list-item role=\"listitem\">Item 2</mat-list-item>\r\n                <mat-list-item role=\"listitem\">Item 3</mat-list-item>\r\n              </mat-list>\r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- List with selection-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"50%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>List with selection</mat-card-title>\r\n              <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n              <mat-selection-list #shoes>\r\n                 <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\r\n                    {{shoe}}\r\n                 </mat-list-option>\r\n              </mat-selection-list>\r\n              <p>\r\n                  Options selected: {{shoes.selectedOptions.selected.length}}\r\n              </p>    \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"50%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Multiline lists</mat-card-title>\r\n              <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n              <mat-list>\r\n                <mat-list-item *ngFor=\"let message of messages\">\r\n                  <h3 matLine>{{message.from}}</h3>\r\n                  <p matLine class=\"text-muted\">{{message.subject}}</p>\r\n                  <p matLine class=\"text-muted\">{{message.content}}</p>    \r\n                </mat-list-item>\r\n              </mat-list>    \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- List with icons selection-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content>\r\n              <mat-card-title>Multiline lists</mat-card-title>\r\n              <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n              <mat-list>\r\n                <mat-list-item *ngFor=\"let message of messages\">\r\n                  <img mat-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">    \r\n                  <h3 matLine>{{message.from}}</h3>\r\n                  <p matLine class=\"text-muted\">{{message.content}}</p>     \r\n                </mat-list-item>\r\n              </mat-list>    \r\n            </mat-card-content>        \r\n        </mat-card>\r\n    </div>\r\n</div> \r\n<!-- ============================================================== -->\r\n<!-- List with icons selection-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\" >\r\n        <mat-card>\r\n            <mat-card-content class=\"p-b-0 m-b-0\">\r\n              <mat-card-title>List with sections</mat-card-title>\r\n              <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n            </mat-card-content>   \r\n                <mat-list>\r\n                <mat-card-content class=\"p-t-0\">    \r\n                  <h3 mat-subheader>Folders</h3>\r\n                  <mat-list-item *ngFor=\"let folder of folders\">\r\n                    <mat-icon mat-list-icon>folder</mat-icon>\r\n                    <h4 mat-line>{{folder.name}}</h4>\r\n                    <p mat-line> {{folder.updated | date}} </p>\r\n                  </mat-list-item>\r\n                </mat-card-content>   \r\n                   \r\n                  <mat-divider></mat-divider>\r\n                <mat-card-content>    \r\n                  <h3 mat-subheader>Notes</h3>\r\n                  <mat-list-item *ngFor=\"let note of notes\">\r\n                    <mat-icon mat-list-icon>note</mat-icon>\r\n                    <h4 mat-line>{{note.name}}</h4>\r\n                    <p mat-line> {{note.updated | date}} </p>\r\n                  </mat-list-item>\r\n                </mat-card-content>      \r\n                </mat-list>    \r\n                  \r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/material-component/lists/lists.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-component/lists/lists.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9saXN0cy9saXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/material-component/lists/lists.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-component/lists/lists.component.ts ***!
  \*************************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.messages = [
            {
                from: 'Nirav joshi (nbj@gmail.com)',
                image: 'assets/images/users/1.jpg',
                subject: 'Material angular',
                content: 'This is the material angular template'
            },
            {
                from: 'Sunil joshi (sbj@gmail.com)',
                image: 'assets/images/users/2.jpg',
                subject: 'Wrappixel',
                content: 'We have wrappixel launched'
            },
            {
                from: 'Vishal Bhatt (bht@gmail.com)',
                image: 'assets/images/users/3.jpg',
                subject: 'Task list',
                content: 'This is the latest task hasbeen done'
            }
        ];
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16')
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16')
            },
            {
                name: 'Work',
                updated: new Date('1/28/16')
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16')
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16')
            }
        ];
    }
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/material-component/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.scss */ "./src/app/material-component/lists/lists.component.scss")]
        })
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/material-component/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.routing */ "./src/app/material-component/material.routing.ts");
/* harmony import */ var _view_despachos_view_despachos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-despachos/view-despachos.component */ "./src/app/material-component/view-despachos/view-despachos.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/material-component/grid/grid.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/material-component/lists/lists.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/material-component/menu/menu.component.ts");
/* harmony import */ var _check_despachos_check_despachos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./check-despachos/check-despachos.component */ "./src/app/material-component/check-despachos/check-despachos.component.ts");
/* harmony import */ var _description_despacho_description_despacho_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./description-despacho/description-despacho.component */ "./src/app/material-component/description-despacho/description-despacho.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_material_routing__WEBPACK_IMPORTED_MODULE_9__["MaterialRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"]
            ],
            providers: [],
            declarations: [
                _view_despachos_view_despachos_component__WEBPACK_IMPORTED_MODULE_10__["ViewdespachosComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_11__["GridComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_12__["ListsComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _check_despachos_check_despachos_component__WEBPACK_IMPORTED_MODULE_14__["CheckDespachoComponent"],
                _description_despacho_description_despacho_component__WEBPACK_IMPORTED_MODULE_15__["DescriptionDespachoComponent"],
            ],
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/material-component/material.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/material-component/material.routing.ts ***!
  \********************************************************/
/*! exports provided: MaterialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function() { return MaterialRoutes; });
/* harmony import */ var _view_despachos_view_despachos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-despachos/view-despachos.component */ "./src/app/material-component/view-despachos/view-despachos.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/material-component/grid/grid.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/material-component/lists/lists.component.ts");
/* harmony import */ var _check_despachos_check_despachos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-despachos/check-despachos.component */ "./src/app/material-component/check-despachos/check-despachos.component.ts");
/* harmony import */ var _description_despacho_description_despacho_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./description-despacho/description-despacho.component */ "./src/app/material-component/description-despacho/description-despacho.component.ts");





var MaterialRoutes = [
    {
        path: 'view',
        component: _view_despachos_view_despachos_component__WEBPACK_IMPORTED_MODULE_0__["ViewdespachosComponent"]
    },
    {
        path: 'Description',
        component: _description_despacho_description_despacho_component__WEBPACK_IMPORTED_MODULE_4__["DescriptionDespachoComponent"]
    },
    {
        path: 'grid',
        component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]
    },
    {
        path: 'lists',
        component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_2__["ListsComponent"]
    },
    {
        path: 'check/:id/:num',
        component: _check_despachos_check_despachos_component__WEBPACK_IMPORTED_MODULE_3__["CheckDespachoComponent"]
    },
];


/***/ }),

/***/ "./src/app/material-component/menu/menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/material-component/menu/menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <!-- Card column -->\r\n    <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Basic menu</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n                <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                  <button mat-menu-item>Item 1</button>\r\n                  <button mat-menu-item>Item 2</button>\r\n                </mat-menu>\r\n            </mat-card-content>    \r\n       </mat-card>\r\n       <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>On icon menu</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu2\"><mat-icon>menu</mat-icon></button>\r\n                <mat-menu #menu2=\"matMenu\">\r\n                  <button mat-menu-item>Item 1</button>\r\n                  <button mat-menu-item>Item 2</button>\r\n                </mat-menu>\r\n            </mat-card-content>    \r\n       </mat-card>\r\n       <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Nested menu</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n                <button mat-raised-button color=\"accent\" [matMenuTriggerFor]=\"animals\">Animal index</button>\r\n\r\n                <mat-menu #animals=\"matMenu\">\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #vertebrates=\"matMenu\">\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\r\n                  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\r\n                  <button mat-menu-item>Birds</button>\r\n                  <button mat-menu-item>Mammals</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #invertebrates=\"matMenu\">\r\n                  <button mat-menu-item>Insects</button>\r\n                  <button mat-menu-item>Molluscs</button>\r\n                  <button mat-menu-item>Crustaceans</button>\r\n                  <button mat-menu-item>Corals</button>\r\n                  <button mat-menu-item>Arachnids</button>\r\n                  <button mat-menu-item>Velvet worms</button>\r\n                  <button mat-menu-item>Horseshoe crabs</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #fish=\"matMenu\">\r\n                  <button mat-menu-item>Baikal oilfish</button>\r\n                  <button mat-menu-item>Bala shark</button>\r\n                  <button mat-menu-item>Ballan wrasse</button>\r\n                  <button mat-menu-item>Bamboo shark</button>\r\n                  <button mat-menu-item>Banded killifish</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #amphibians=\"matMenu\">\r\n                  <button mat-menu-item>Sonoran desert toad</button>\r\n                  <button mat-menu-item>Western toad</button>\r\n                  <button mat-menu-item>Arroyo toad</button>\r\n                  <button mat-menu-item>Yosemite toad</button>\r\n                </mat-menu>\r\n\r\n                <mat-menu #reptiles=\"matMenu\">\r\n                  <button mat-menu-item>Banded Day Gecko</button>\r\n                  <button mat-menu-item>Banded Gila Monster</button>\r\n                  <button mat-menu-item>Black Tree Monitor</button>\r\n                  <button mat-menu-item>Blue Spiny Lizard</button>\r\n                  <button mat-menu-item disabled>Velociraptor</button>\r\n                </mat-menu>\r\n            </mat-card-content>    \r\n       </mat-card>\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>With icon menu</mat-card-title>\r\n                <mat-card-subtitle><code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu4\">\r\n                  <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #menu4=\"matMenu\">\r\n                  <button mat-menu-item>\r\n                    <mat-icon>dialpad</mat-icon>\r\n                    <span>Redial</span>\r\n                  </button>\r\n                  <button mat-menu-item disabled>\r\n                    <mat-icon>voicemail</mat-icon>\r\n                    <span>Check voicemail</span>\r\n                  </button>\r\n                  <button mat-menu-item>\r\n                    <mat-icon>notifications_off</mat-icon>\r\n                    <span>Disable alerts</span>\r\n                  </button>\r\n                </mat-menu>\r\n            </mat-card-content>    \r\n       </mat-card>\r\n    </div>    \r\n</div>    "

/***/ }),

/***/ "./src/app/material-component/menu/menu.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-component/menu/menu.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/material-component/menu/menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-component/menu/menu.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/material-component/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/material-component/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/material-component/view-despachos/view-despachos.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/view-despachos/view-despachos.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-card>\r\n  <mat-card-content>    \r\n  <mat-card-title>Despacho Disponibles</mat-card-title>\r\n  <mat-card-subtitle>Aqui encontrara los despachos pendientes</mat-card-subtitle>\r\n\r\n  <div id=\"Filtering\">\r\n    Tienda de destino:\r\n    <select id=\"store\" (change)=\"applyFilter($event)\">\r\n      <option value=\" \"> </option>\r\n      <option *ngFor=\"let tiendas of Store\" value={{tiendas}}>{{tiendas}}</option>\r\n    </select> \r\n  </div>\r\n\r\n  <table mat-table [dataSource]=\"Source\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"Id\">\r\n      <th mat-header-cell *matHeaderCellDef> Id. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element[0]}} </td>\r\n    </ng-container>\r\n  \r\n\r\n  \r\n\r\n    <ng-container matColumnDef=\"Origen\">\r\n      <th mat-header-cell *matHeaderCellDef> Origen </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element[1]}} </td>\r\n    </ng-container>\r\n  \r\n\r\n    <ng-container matColumnDef=\"Estado\">\r\n      <th mat-header-cell *matHeaderCellDef> Estado </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element[2]}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Cajas\">\r\n      <th mat-header-cell *matHeaderCellDef> Cajas </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element[3]}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"Unidades\">\r\n      <th mat-header-cell *matHeaderCellDef> Unidades </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element[4]}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Verificar\">\r\n      <th mat-header-cell *matHeaderCellDef> Verificar </th>\r\n      <td mat-cell *matCellDef=\"let element\"> \r\n        <ng-container *ngIf=\"element[2]=='TRANSPORTE'\">\r\n          <a routerLink=\"/check/{{element[0]}}/{{element[3]}}\">Verificar</a>\r\n        </ng-container>\r\n      </td>\r\n    </ng-container>\r\n    \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/material-component/view-despachos/view-despachos.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/material-component/view-despachos/view-despachos.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\ntable {\n  width: 100%;\n  margin-top: 30px; }\n\n#Filtering {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L3ZpZXctZGVzcGFjaG9zL0M6XFxVc2Vyc1xcQVVYSUxJQVIzXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG15bC9zcmNcXGFwcFxcbWF0ZXJpYWwtY29tcG9uZW50XFx2aWV3LWRlc3BhY2hvc1xcdmlldy1kZXNwYWNob3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC92aWV3LWRlc3BhY2hvcy92aWV3LWRlc3BhY2hvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbiNGaWx0ZXJpbmd7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/material-component/view-despachos/view-despachos.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/material-component/view-despachos/view-despachos.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewdespachosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdespachosComponent", function() { return ViewdespachosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_Http_htt_bd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/Http/htt-bd.service */ "./src/app/service/Http/htt-bd.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_Data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/Data/data.service */ "./src/app/service/Data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewdespachosComponent = /** @class */ (function () {
    function ViewdespachosComponent(HttpBD, Data) {
        this.HttpBD = HttpBD;
        this.Data = Data;
        this.displayedColumns = ['Id', 'Origen', 'Estado', 'Cajas', 'Unidades', 'Verificar'];
        this.Source = null;
        this.Store = null;
        this.idStore = null;
    }
    ViewdespachosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idStore = this.Data.Get_usr();
        if (this.idStore == null) {
            this.idStore = localStorage.getItem('idStore');
        }
        console.log(this.idStore);
        this.HttpBD.Get_Despacho(this.idStore).subscribe(function (result) {
            if (result != null) {
                _this.Source = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](Object.values(result));
            }
        });
        this.HttpBD.Cod_Store().subscribe(function (result) {
            _this.Store = result;
        });
    };
    ViewdespachosComponent.prototype.applyFilter = function (FilterValue) {
        this.Source.filter = FilterValue.target.value.toString().trim();
    };
    ViewdespachosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./view-despachos.component.html */ "./src/app/material-component/view-despachos/view-despachos.component.html"),
            styles: [__webpack_require__(/*! ./view-despachos.component.scss */ "./src/app/material-component/view-despachos/view-despachos.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_Http_htt_bd_service__WEBPACK_IMPORTED_MODULE_1__["HttBDService"], _service_Data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ViewdespachosComponent);
    return ViewdespachosComponent;
}());



/***/ })

}]);
//# sourceMappingURL=material-component-material-module.js.map