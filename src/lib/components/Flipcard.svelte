<script>
  import { flip } from "svelte/animate";

  let showAnswer = false;
  let cardContent = {
    question: "What is the capital of France?",
    answer: "Paris"
  };

  function flipCard() {
    showAnswer = !showAnswer;
  }
</script>

<style>
  .flip-card {
    animation: flip 0.6s;
  }

  @keyframes flip {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(180deg);
    }
  }
  
  .perspective {
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
</style>

<div class="flex items-center justify-center h-screen">
  <div
    class="bg-white w-64 h-40 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer perspective"
    class:flip-card="{showAnswer}"
    on:click={flipCard}
  >
    <div class="front">
      <h2 class="text-lg font-semibold">{cardContent.question}</h2>
    </div>
    <div class="back transform rotate-y-180">
      <p class="text-lg">{cardContent.answer}</p>
    </div>
  </div>
</div>
