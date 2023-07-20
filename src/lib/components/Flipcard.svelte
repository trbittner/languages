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
  <div class="w-1/2 aspect-video flex items-center 
    justify-center flip-card" on:click={flipCard}>
    <div class="flip-card-inner relative w-full h-full" class:flipped={isFlipped}>
      <div class="flip-card-front rounded-md shadow-md bg-blue-300 border-4 
        border-yellow-200 flex items-center justify-center absolute w-full h-full">
        <p class="text-lg text-gray-700 text-center">{cardContent.question}</p>
      </div>
      <div class="flip-card-back rounded-md shadow-md bg-yellow-200 border-4 
        border-blue-300 flex items-center justify-center absolute w-full h-full">
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
