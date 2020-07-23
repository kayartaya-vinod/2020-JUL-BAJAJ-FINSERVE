
// A component (a typescript class + html + css [optional] )

import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// @Component --> specifies meta-data for this class
// and instructs to treat this class a Componnt, the HTML of which, will
// presented in the index.html
@Component({
    selector: 'hello-world',
    templateUrl: './ex01.html',
    styleUrls: [ './ex01.css' ]
})
class HelloWorldComponent {
    title: string;
    subTitle: string;

    constructor() {
        this.title = 'Angular is fun!';
        this.subTitle = '...powerful and beautiful.';
    }
}


/// 👆🏼component ends here ---------

// @NgModule is a decorator using which we define the members of the ng-module
// such as components, directives, pipes, other modules, injectables, etc.
@NgModule({
    declarations: [
        // list of all components, directives and pipes here
        HelloWorldComponent, 
    ],
    imports: [
        // list of other modules (your own/ 3rd party) here
        BrowserModule, // <-- does all the browser DOM manipulation
    ],
    providers: [
        // list of services (injectables) here
    ],
    bootstrap: [
        // list of all components that appear directly in the index.html 
        HelloWorldComponent, // most of the times, you will have only  one bootstrap component
    ]
})
class MainModule {}

// we have to instruct angular framework (runtime.js on the browser) to
// bootstrap our module (MainModule)

platformBrowserDynamic() // the function returns an object
    .bootstrapModule(MainModule); // using that object, we register our bootstrap module
