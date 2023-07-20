<script>
  let cardContent = {
    question: "What is the capital of France?",
    answer: "Paris"
  };
  
  let isFlipped = false;
  
  const flipCard = () => {
      isFlipped = !isFlipped;
  }
</script>

<div class="flex items-center justify-center h-screen">
  <div class="w-1/2 aspect-video bg-blue-300 rounded-md shadow-md flex items-center justify-center flip-card" 
    on:click={flipCard} class:bg-yellow-200={isFlipped} >
    <div class="flip-card-inner relative w-full h-full" class:flipped={isFlipped}>
      <div class="flip-card-front flex items-center justify-center absolute w-full h-full">
        <p class="text-lg text-gray-700 text-center">{cardContent.question}</p>
      </div>
      <div class="flip-card-back flex items-center justify-center absolute w-full h-full">
        <p class="text-lg text-gray-700 text-center">{cardContent.answer}</p>
      </div>
    </div>
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
  
  .flip-card-front,
  .flip-card-back {
    backface-visibility: hidden;
  }
  
  .flip-card-back {
    transform: rotateY(180deg);
  }
</style>
