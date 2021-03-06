<script>
    import { createEventDispatcher } from "svelte";
    import { _ } from "../services/i18n";
    export let value = "es";
    const dispatch = createEventDispatcher();

    function switchLocale(event) {
        event.preventDefault();
        dispatch("locale-changed", event.target.value);
    }
    
</script>

<div class="choose-locale">
    <div class="select">
        <p>{$_("switch.lang")}</p>
        <!-- svelte-ignore a11y-no-onchange -->
        <select {value} on:change={switchLocale}>
            <option value="es">Español</option>
            <option value="en">English</option>
        </select>
    </div>
</div>

<style>
    .choose-locale {
        display: flex;
        justify-content: center;
    }
    .select {
        margin: 0 1rem 1rem;
    }
</style>
