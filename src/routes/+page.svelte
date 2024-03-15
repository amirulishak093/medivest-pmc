<script lang="ts">
	import LocaleSwitcher from "$lib/components/LocaleSwitcher.svelte";
	import Welcome from "$lib/components/Welcome.svelte";
    import { step } from "$lib/store";

</script>


<div class="antialiased min-h-screen relative bg-gradient-to-r from-yellow-50 to-yellow-100">
    <div class="p-4">
		<LocaleSwitcher />
	</div>
    {#if $step === 0}
        <Welcome />
    {/if}
</div>