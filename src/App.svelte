<script>
	import { writable } from "svelte/store";
	import { _, setupI18n, isLocaleLoaded, locale } from "./services/i18n";
	import LocalSwitcher from "./components/LocalSwitcher.svelte";

	const localeStore = writable(localStorage.getItem("localeStore") || "es");

	localeStore.subscribe((val) => localStorage.setItem("localeStore", val));

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: $localeStore });
	}
</script>

<main>
	{#if $isLocaleLoaded}
		<h3>{$_("home.topic")}</h3>

		<h4>{$_("home.label")}</h4>
		<ul>
			<li>{$_("home.services.web")}</li>
			<li>{$_("home.services.backend")}</li>
		</ul>

		<LocalSwitcher
			value={$locale}
			on:locale-changed={(e) => {
				setupI18n({ withLocale: e.detail });
				localStorage.setItem("localeStore", e.detail);
			}}
		/>
	{:else}
		<p>loading...</p>
	{/if}
</main>

<style>
</style>
