import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PostlyAppComponent, environment} from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS} from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(PostlyAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
