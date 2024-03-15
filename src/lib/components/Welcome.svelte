<script lang="ts">
    import { _ } from 'svelte-i18n';

    import { step } from '$lib/store';

</script>

<div class="p-4">
	<div class="grid grid-cols-1 place-items-center mt-12">
		<img alt="Logo" src="../images/logo-medivest.png" class="w-40" />

		<h1 class="text-[#0B8880] font-bold text-3xl text-center mt-12">
			{$_('intro.title')}
		</h1>
		<p class="text-gray-800 font-medium text-xl text-center">{$_('intro.subtitle')}</p>

		<button
			class="w-full sm:max-w-xs text-lg flex justify-center bg-[#0B8880] hover:bg-[#007979] text-white font-semibold p-4 rounded mt-12 shadow transition-colors"
			on:click={() => {
				$step += 1;
			}}
		>
			{$_('intro.actions.start')}
		</button>
		<p class="italic text-center mt-4 text-gray-800 text-sm">
			*{$_('intro.notice')}
		</p>
	</div>
</div>
