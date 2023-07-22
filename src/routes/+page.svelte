<script>
    import { vocab } from '$lib/vocab.js';
    import Flashcard from '$lib/components/Flashcard.svelte';
    
    let flashCardIndex = 1;
    
    $: question = vocab[flashCardIndex].question;
    $: answer = vocab[flashCardIndex].answer;
    
    
</script>

<div class="flex flex-col items-center justify-center h-screen">
    <Flashcard {question} {answer} />
    <div class="mt-3 flex justify-evenly w-full lg:w-1/2">
        <button class="bg-yellow-400 basis-1/5 rounded-md"><span class="text-2xl">&#8592;</span></button>
        <button class="bg-yellow-400 basis-1/5 rounded-md"><span class="text-2xl">&#8594;</span></button>
    </div>
</div>
