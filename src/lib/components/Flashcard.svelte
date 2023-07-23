<script>
    export let question = '';
    export let answer= '';
</script>

<div class="flip-card-front rounded-md shadow-md bg-blue-300 border-4 
    border-yellow-200 flex items-center justify-center absolute w-full h-full">
    <p class="text-lg text-gray-700 text-center">{question}</p>
</div>
<div class="flip-card-back rounded-md shadow-md bg-yellow-200 border-4 
    border-blue-300 flex items-center justify-center absolute w-full h-full">
    <p class="text-lg text-gray-700 text-center">{answer}</p>
</div>

<style>
  .flip-card-front,
  .flip-card-back {
    backface-visibility: hidden;
  }
  
  .flip-card-back {
    transform: rotateY(180deg);
  }
</style>
