"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VehicleRegistrationFormComponent = void 0;
var core_1 = require("@angular/core");
var bottom_sheet_component_1 = require("../../../ui-components/bottom-sheet/bottom-sheet.component");
var camera_component_1 = require("../../../ui-components/camera/camera.component");
var VehicleRegistrationFormComponent = /** @class */ (function () {
    function VehicleRegistrationFormComponent(bottomSheet, dialog, cameraService, logger) {
        this.bottomSheet = bottomSheet;
        this.dialog = dialog;
        this.cameraService = cameraService;
        this.logger = logger;
        this.picturePlaceholder = 'assets/images/avatar_placeholder.jpg';
    }
    VehicleRegistrationFormComponent.prototype.ngOnInit = function () {
    };
    VehicleRegistrationFormComponent.prototype.uploadPicture = function () {
        var _this = this;
        this.bottomSheet.open(bottom_sheet_component_1.BottomSheetComponent, {
            data: {
                options: [
                    {
                        name: 'Take Picture with Cajmera',
                        onclick: function () {
                            _this.dialogRef = _this.dialog.open(camera_component_1.CameraComponent, {
                                width: '550px',
                                height: '550px'
                            });
                            _this.dialogRef.afterClosed().subscribe(function (result) {
                                _this.logger.info(_this.cameraService.getPicture());
                                _this.cameraService.webCamera.stop();
                                _this.updateProfilePicturePlaceholder(_this.cameraService.getPicture());
                            });
                        }
                    }
                    // {
                    //   name: 'Upload from File Storage',
                    //   onclick: () => {}
                    // }
                ]
            }
        });
    };
    VehicleRegistrationFormComponent.prototype.updateProfilePicturePlaceholder = function (picture) {
        if (picture) {
            this.picturePlaceholder = picture;
        }
        else {
            this.picturePlaceholder = 'assets/images/avatar_placeholder.jpg';
        }
    };
    VehicleRegistrationFormComponent = __decorate([
        core_1.Component({
            selector: 'app-vehicle-registration-form',
            templateUrl: './vehicle-registration-form.component.html',
            styleUrls: ['./vehicle-registration-form.component.scss']
        })
    ], VehicleRegistrationFormComponent);
    return VehicleRegistrationFormComponent;
}());
exports.VehicleRegistrationFormComponent = VehicleRegistrationFormComponent;
