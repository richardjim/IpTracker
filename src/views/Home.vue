<template>
    <div class="flex flex-col h-screen max-h-screen">
        <div class="flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32">
            <div class="w-full max-w-screen-sm">
                <h1 class="text-white text-center text-4x1 pb-4">IP Address Tracker</h1>
                <div class="flex">
                    <input type="text" class="w-full rounded-l-md px-4 py-2"
                        placeholder="Search for any IP address or domain">
                    <button class="bg-cyan-500 text-white px-4 py-2 rounded-r-md">Search</button>
                </div>
            </div>
            <IPInfo />
        </div>
    </div>
</template> 

<script>
import IPInfo from '../components/IPInfo.vue';

export default {
    name: "Home",
    components: { IPInfo }
}
</script>  