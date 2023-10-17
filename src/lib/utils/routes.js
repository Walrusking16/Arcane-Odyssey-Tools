import { get } from 'svelte/store';
import { page } from '$app/stores';

export const routes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Gear Builder',
    path: '/gear-builder'
  }
];

export function isActiveRoute(route) {
  return route.path === get(page).url.pathname;
}
