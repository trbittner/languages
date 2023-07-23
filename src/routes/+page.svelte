<script>
    import { vocab } from '$lib/vocab.js';
    import Flashcard from '$lib/components/Flashcard.svelte';
    
    let flashCardIndex = 0;
    
    $: question = vocab[flashCardIndex].question;
    $: answer = vocab[flashCardIndex].answer;
    
    let isFlipped = false;
    
    const flipCard = () => {
        isFlipped = !isFlipped;
    }    
    
    const previousCard = () => {
        isFlipped = false;
        if (flashCardIndex === 0) {
            flashCardIndex = vocab.length - 1;
        } else {
            flashCardIndex -= 1;
        }    
    }
    
    const nextCard = () => {
        isFlipped = false;
        if (flashCardIndex === vocab.length -1) {
            flashCardIndex = 0;
        } else {
            flashCardIndex += 1;
        }
    }
</script>

<div class="flex flex-col items-center justify-center h-screen">
    <div class="w-1/2 aspect-video flex items-center justify-center flip-card" 
    on:click={flipCard}>
        <div class="flip-card-inner relative w-full h-full" class:flipped={isFlipped}>
            <Flashcard {question} {answer} />
        </div>
    </div>
    <div class="mt-3 flex justify-evenly w-full lg:w-1/2">
        <button class="bg-yellow-400 basis-1/5 rounded-md" on:click={previousCard}>
            <span class="text-2xl">&#8592;</span>
        </button>
        <button class="bg-yellow-400 basis-1/5 rounded-md" on:click={nextCard}>
            <span class="text-2xl">&#8594;</span>
        </button>
    </div>
</div>

<style>
  .flip-card {
    perspective: 1000px;
  }
  
  .flip-card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  
  .flipped {
    transform: rotateY(180deg);
  }
</style>
