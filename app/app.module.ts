import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Local Modules 
import { AppComponent } from './app.component';
@NgModule({
    imports : [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap : [ AppComponent ]
})
//Export The App
export class AppModule {
    
}