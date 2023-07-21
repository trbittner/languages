<script>
    import Flipcard from '$lib/components/Flipcard.svelte'
</script>

<div class="flex flex-col items-center justify-center h-screen">
    <Flipcard />
    <div class="mt-3 flex justify-evenly w-full lg:w-1/2">
        <button class="bg-yellow-400 basis-1/5 rounded-md"><span class="text-2xl">&#8592;</span></button>
        <button class="bg-yellow-400 basis-1/5 rounded-md"><span class="text-2xl">&#8594;</span></button>
    </div>
</div>
