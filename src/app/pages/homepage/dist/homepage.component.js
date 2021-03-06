"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomepageComponent = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../../environments/environment");
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.initialWelcomeContent();
    };
    HomepageComponent.prototype.initialWelcomeContent = function () {
        //this.welcomeCard = environment_1.environment.en.app.dashboard.home.welcomeCard;
        this.driverAndRegistrationCard = environment_1.environment.en.app.dashboard.home.driverAndRegistrationCard;
    };
    HomepageComponent = __decorate([
        core_1.Component({
            selector: 'app-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.scss']
        })
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
