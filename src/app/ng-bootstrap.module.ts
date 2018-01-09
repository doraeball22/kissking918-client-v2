import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        NgbModule
    ],
    exports: [
        BrowserAnimationsModule,
        NgbModule
    ],
})
export class NgBootstrap { }