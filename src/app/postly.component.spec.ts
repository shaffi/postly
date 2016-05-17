import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PostlyAppComponent } from '../app/postly.component';

beforeEachProviders(() => [PostlyAppComponent]);

describe('App: Postly', () => {
  it('should create the app',
      inject([PostlyAppComponent], (app: PostlyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'postly works!\'',
      inject([PostlyAppComponent], (app: PostlyAppComponent) => {
    expect(app.title).toEqual('postly works!');
  }));
});
