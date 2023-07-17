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

<div class="flex items-center justify-center h-screen">
  <div class="bg-blue-300 w-1/2 aspect-video rounded-md shadow-md flex items-center justify-center">
    <p class="text-lg text-gray-700 text-center">{cardContent.question}</p>
  </div>
</div>

<style>
  /* .flip-card {
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
  } */
</style>
