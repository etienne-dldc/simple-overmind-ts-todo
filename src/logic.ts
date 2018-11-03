import { Overmind, TApp } from 'overmind';

const state = {};

const config = {
  state,
};

declare module 'overmind' {
  interface App extends TApp<typeof config> {}
}

const app = new Overmind(config);
