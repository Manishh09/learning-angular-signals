import { Routes } from '@angular/router';
import { DefaultCdDemoComponent } from './change-detection-strategies/default-cd-demo/default-cd-demo.component';
import { OnpushCdDemoComponent } from './change-detection-strategies/onpush-cd-demo/onpush-cd-demo.component';

export const routes: Routes = [
    {
        path: 'default-cd',
        component: DefaultCdDemoComponent
    },
    {
        path: 'onpush-cd',
        component: OnpushCdDemoComponent
    }
];
