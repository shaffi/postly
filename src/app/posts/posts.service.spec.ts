import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PostsService } from './posts.service';

describe('Posts Service', () => {
  beforeEachProviders(() => [PostsService]);

  it('should ...',
      inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
