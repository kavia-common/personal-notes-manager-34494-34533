import App from './App.svelte';

const target = document.getElementById('app');
if (target) {
  // PUBLIC_INTERFACE
  // Mounts the Svelte App into a classic SPA root element.
  // Not used by SvelteKit, but kept for future non-Kit deployments.
  new App({ target });
}
