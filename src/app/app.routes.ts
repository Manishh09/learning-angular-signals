import { Routes } from '@angular/router';
import { DefaultCdDemoComponent } from './change-detection-strategies/default-cd-demo/default-cd-demo.component';
import { OnpushCdDemoComponent } from './change-detection-strategies/onpush-cd-demo/onpush-cd-demo.component';
import { SignalsDemoComponent } from './signals/signals-demo/signals-demo.component';
import { HomeComponent } from './home/home.component';
import { WithoutSignalsDemoComponent } from './signals/without-signals-demo/without-signals-demo.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'default-cd',
        component: DefaultCdDemoComponent
    },
    {
        path: 'onpush-cd',
        component: OnpushCdDemoComponent
    },
    {
        path: 'signals',
        component: SignalsDemoComponent
    },
    {
        path: 'without-signals',
        component: WithoutSignalsDemoComponent
    }
];
