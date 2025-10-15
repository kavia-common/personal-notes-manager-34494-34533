<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import NotesList from '$lib/components/NotesList.svelte';
  import NoteEditor from '$lib/components/NoteEditor.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { keyboardShortcuts } from '$lib/stores/notes';

  $effect(() => {
    const unsub = keyboardShortcuts.subscribe(() => {});
    return () => unsub();
  });
</script>

<div class="container">
  <Header />
  <section class="workspace">
    <aside class="left"><NotesList /></aside>
    <section class="right"><NoteEditor /></section>
  </section>
  <Footer />
</div>

<style>
  .workspace {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 1rem;
    min-height: min(70vh, 900px);
  }
  @media (max-width: 900px) {
    .workspace { grid-template-columns: 1fr; }
  }
</style>
