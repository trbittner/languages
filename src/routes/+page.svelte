<script>
</script>

<div class="flex flex-col items-center justify-center h-screen">
    <div class='relative bg-blue-500 w-7/12 aspect-video rounded-lg 
        overflow-hidden flex flex-col items-center justify-center
        border-4 border-yellow-200'>
        <div class='bg-gray-100 w-5/6 h-2/3 rounded-md'>
        </div>
        <div class='mt-2 bg-white w-2/3 rounded-md p-1 flex justify-between'>
            <input type='text' class='basis-11/12 px-0.5' 
                placeholder='Enter up to 5 tags for the story...' />
                <button type='button'>
                    <i class='bi-arrow-right-circle-fill text-yellow-400 text-2xl'></i>
                </button>
        </div>
        <div class="mt-4 flex items-center">
            <h2 class="mr-4">Choose Difficulty Level:</h2>
            <label class="mr-2">
                <input type="radio" name="difficulty" value="A1" class="mr-1" />
                A1
            </label>
            <label class="mr-2">
                <input type="radio" name="difficulty" value="A2" class="mr-1" />
                A2
            </label>
            <label class="mr-2">
                <input type="radio" name="difficulty" value="B1" class="mr-1" />
                B1
            </label>            
        </div>
        <div class="mt-4 flex items-center">
            <h2 class="mr-4">Choose Story Type:</h2>
            <label class="mr-2">
                <input type="radio" name="storyType" value="listen" class="mr-1" />
                Listen
            </label>
            <label class="mr-2">
                <input type="radio" name="storyType" value="read" class="mr-1" />
                Read
            </label>
        </div>
    </div>
</div>

<style>
</style>
