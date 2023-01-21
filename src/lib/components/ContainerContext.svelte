<script lang="ts">
	import type { Container } from 'inversify';
	import { setContainer } from '../functions/svelte-inversify';

	export let container: Container;

	setContainer(container);
</script>

<slot />
