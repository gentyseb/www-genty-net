import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { SgyModule } from "./sgy/sgy.module";
import { environment } from "./environments/environment";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(SgyModule)
    // tslint:disable-next-line:no-console
    .catch((err: any) => console.log(err));
