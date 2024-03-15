<script lang="ts">
    import { _ } from 'svelte-i18n';
	import { UserSolid, MobilePhoneSolid, BriefcaseSolid, ProfileCardSolid, } from 'flowbite-svelte-icons';
	import LocaleSwitcher from "$lib/components/LocaleSwitcher.svelte";
	import { applyAction, enhance } from '$app/forms';
	// import { step } from "$lib/store";

	// export const prerender = false;

	let cameraImage: HTMLImageElement | null;
	let cameraInput: HTMLInputElement | null;
	let showImage = false;

	function onChange(): void {	
		const file: File | undefined = cameraInput?.files?.[0];

		if (file) {
			showImage = true;

			const reader: FileReader = new FileReader();
			reader.addEventListener("load", function () {
				if (cameraImage) cameraImage.setAttribute("src", reader.result as string);
			});
			reader.readAsDataURL(file);

			return;
		}

		showImage = false;
	}

</script>
<div class="antialiased min-h-screen relative bg-gradient-to-r from-yellow-50 to-yellow-100">
    <div class="p-4">
		<LocaleSwitcher />
	</div>
    
    <div class="p-4">
		<div class="grid grid-cols-1 place-items-center mt-2">
			<img alt="Logo" src="../images/logo-medivest.png" class="w-36" />

			<h1 class="text-[#0B8880] font-bold text-2xl text-center mt-8">
				{$_('signup.title')}
			</h1>
			<p class="text-gray-800 font-medium text-base text-center">{$_('signup.subtitle')}</p>



		</div>

		<form method="post"
			use:enhance={() => {
				return async ({ result }) => {
					await applyAction(result);
				};
			}} 
			enctype="multipart/form-data"
			class="max-w-md mx-auto mt-8">
			<div class="mb-5">
				<label for="name" class="block mb-2 text-sm font-medium text-gray-800">{$_('signup.form.name.label')}</label>
				<div class="flex">
				  <span class="inline-flex items-center px-3 text-sm text-gray-800 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
					<UserSolid class="text-gray-500 w-5 h-5" />
				  </span>
				  <input name="name" type="text" id="name" required class="rounded-none rounded-e-lg bg-white border border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder={$_('signup.form.name.placeholder')}>
				</div>
			</div>
			<div class="mb-5">
				<label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-800">{$_('signup.form.phoneNumber.label')}</label>
				<div class="flex shadow-sm">
				  <span class="inline-flex items-center px-3 text-sm text-gray-800 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
					<MobilePhoneSolid class="text-gray-500 w-5 h-5" />
				  </span>
				  <input name="phoneNumber" type="tel" id="phoneNumber" required class="rounded-none rounded-e-lg bg-white border border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder={$_('signup.form.phoneNumber.placeholder')}>
				</div>
			</div>
			<div class="mb-8">
				<label for="companyName" class="block mb-2 text-sm font-medium text-gray-800">{$_('signup.form.companyName.label')}</label>
				<div class="flex">
				  <span class="inline-flex items-center px-3 text-sm text-gray-800 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
					<BriefcaseSolid class="text-gray-500 w-5 h-5" />
				  </span>
				  <input name="companyName" type="text" id="companyName"  required class="rounded-none rounded-e-lg bg-white border border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder={$_('signup.form.companyName.placeholder')}>
				</div>
			</div>
			<div class="relative text-sm font-medium shadow text-gray-800 bg-white border border-gray-300 rounded-md p-4">
				{#if showImage}									
					<img class="w-full" bind:this={cameraImage} src="" alt="Preview" />
				{:else}
					<div class="flex flex-col items-center justify-center gap-x-1">
						<ProfileCardSolid class="text-gray-400 w-12 h-12" />
						{$_('signup.form.photo.placeholder')}
						<span class="text-xs text-red-500">*{$_('signup.form.photo.optional')}</span>
					</div>		

				{/if}

				<input class="w-full absolute inset-0 opacity-0" name="cameraImage" type="file" accept="image/*" capture="camera" bind:this={cameraInput} on:change={onChange}/>

			</div>
			<div>
				<button
				type="submit"
				class="w-full text-base flex justify-center bg-[#0B8880] hover:bg-[#007979] text-white font-semibold p-4 rounded mt-12 shadow transition-colors"
			
			>
				{$_('signup.actions.signup')}
			</button>
			</div>
		</form>

    </div>
    

</div>
