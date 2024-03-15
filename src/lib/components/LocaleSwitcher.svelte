<script lang="ts">
	import { locale } from 'svelte-i18n';
	import '/node_modules/flag-icons/css/flag-icons.min.css';

	function changeLocale(locale: string) {
		$locale = locale;
	}
</script>

<div class="w-full sm:max-w-xs flex items-center justify-center mx-auto gap-x-2">
	<button
		class="flex-1 flex items-center gap-x-2 justify-center bg-white border-2 hover:border-[#0B8880] {$locale ===
			'ms' &&
			'border-[#0B8880]'} transition-colors text-gray-800 shadow font-medium py-2 px-4 rounded-full"
		on:click={() => {
			changeLocale('ms');
		}}
	>
		<span class="fi fi-my"></span>
		B. Melayu
	</button>
	<button
		class="flex-1 flex items-center gap-x-2 justify-center bg-white border-2 hover:border-[#0B8880] {$locale?.startsWith(
			'en'
		) &&
			'border-[#0B8880]'} transition-colors text-gray-800 shadow font-medium py-2 px-4 rounded-full"
		on:click={() => {
			changeLocale('en');
		}}
	>
		<span class="fi fi-gb"></span>
		B. Inggeris
	</button>
</div>
