## Yet to be named language project
* This is an attempt to take the top 2500 words by frequency in English and create study guides for them in Fr, Es, and zn_CH.
* We'll first try to obtain those 2500 words using puppeteer and input from 
    [this article](https://www.freecodecamp.org/news/web-scraping-in-javascript-with-puppeteer/).
* [This article](https://www.scraperapi.com/blog/web-scraping-javascript-tutorial/)
    also seems to provide guidance on scraping as well.
* [This github repo](https://github.com/hermitdave/FrequencyWords) actually 
    appears to list 50K words in several languages.  I discovered it via 
    [this Wiktionary](https://en.m.wiktionary.org/wiki/Wiktionary:Frequency_lists/English)
    link.  The list was last updated in 2018.
    ** It's enough to make me rethink my strategy of using English only words 
        for this project.
* I'm going to use [this list](https://simple.wikipedia.org/wiki/Wikipedia:Basic_English_combined_wordlist)
    as the source for my vocabulary.  I'll also match it against 
    [this list](https://en.m.wiktionary.org/wiki/Wiktionary:Frequency_lists/PG/2006/04/1-10000)
    to determine a rough frequency for learning.  If I can find (or generate) 
    categories for the words, I'll also attempt to do that for more structured
    learning.
* [This list](https://www.kaggle.com/datasets/rtatman/english-word-frequency)
    is also likely to be well cultivated if I go in search of further words.
* As an aside, [this link](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/) 
    explains why the `axios` library still has richer functionality compared to
    the built in `fetch` library in JS.
* The wordlist above omits verbs.  While in theory one is able to communicate the
    basics without verbs, I'm aiming for a slightly higher level of fluency.
* I'll use [this list](https://www.poetrysoup.com/common_words/common_verbs.aspx) 
    for verbs.
    * The same list can also be found [here](https://www.syllablecount.com/syllables/words/verbs.aspx).
    * It's therefore very likely both sites are pulling it from another source.
* [This site](https://www.english-corpora.org/) may ultimately prove useful as well.
* This is the prompt I've used in ChatGPT to create sentence translations for words:
    > For the following list of words provide a Spanish translation for the word 
        (in a Mexican dialect where applicable) and an example sentence using the word.  
        You should provide the English word, the Spanish translation, the English 
        sentence, and the Spanish sentence as output in the following format:
    >
    > ---
    > en_word: [the English word]\
    > es_word: [the Spanish word]\
    > en_sentence: [the English sentence]\
    > es_sentence: [the Spanish sentence]\
* [This site](https://baselang.com/blog/basic-grammar/all-the-spanish-verb-tenses/)
    helps explain verb tenses.
* This is the prompt I used for verbs:
    > For the following list of verbs provide a Spanish translation for the word 
    > (in a Mexican dialect where applicable) and an example sentence using the word.  
    > If the word can be treated as another particle of speech, use it as a verb.  
    > If the word has multiple translations as a verb (like 'to be' in Spanish, 
    > which translates to 'ser' or 'estar'), provide examples for both.  You should 
    > provide the English word, the Spanish translation, the English sentence, and 
    > the Spanish sentence as output in the following sample YAML format.
    >
    > ---
    > en_word: [the English word]\
    > es_words:\
    > [Spanish word 1]\
    > [Spanish word 2]\
    > en_sentences:\
    > [English sentence 1]\
    > [English sentence 2]\
    > es_sentences:\
    > [Spanish sentence 1]\
    > [Spanish sentence 2]\
* The YAML format was somewhat crappy, so I followed it up with the following prompt:
    > Reformat the previous output to fit the following format:
    >
    > {'en_word':English word, 'es_words':[list of Spanish words],
    >   'en_sentences':[list of English sentences],
    >   'es_sentences':[list of Spanish translations]}

## Design Suggestions from ChatGPT ##

Primary Color: #3498db (vibrant blue)
Secondary Color: #555555 (dark gray)
Background Color: #f5f5f5 (light gray)
Additional Blue Color: #80b6ed (lighter blue)

Now, let's indicate where the additional blue color can be used in your website:

1. Buttons:
   - Background Color: #3498db (primary color) for the default state.
   - Background Color: #80b6ed (additional blue color) for the hover or active state.

2. Links:
   - Font Color: #3498db (primary color) for normal links.
   - Font Color: #80b6ed (additional blue color) for hovered or active links.

3. Accent Elements:
   - Border Color: #80b6ed (additional blue color) for borders around specific 
    elements to add emphasis or highlight.

These are just a few suggestions for incorporating the additional blue color. 
You can apply it to various elements based on your website's design and layout 
requirements. Remember to use the colors consistently throughout your website to 
maintain a cohesive visual experience.

Feel free to adjust the specific use cases and shades of blue as per your preference.

Primary Color: #3498db (vibrant blue)
Secondary Color: #555555 (dark gray)
Background Color: #f5f5f5 (light gray)
Additional Blue Color: #80b6ed (lighter blue)
Primary Yellow: #ffd700 (bright yellow)
Secondary Yellow: #ffeb99 (light yellow)

Now, let's determine where each color should be used:

1. Primary Color (#3498db - vibrant blue):
   - Use for headings, links, and buttons to create a strong visual impact.

2. Secondary Color (#555555 - dark gray):
   - Use for body text, subheadings, and other supporting elements to provide 
    contrast and legibility.

3. Background Color (#f5f5f5 - light gray):
   - Use as the background color for the overall website to maintain a clean and
    neutral backdrop.

4. Additional Blue Color (#80b6ed - lighter blue):
   - Use as an accent color for buttons, links, borders, or other interactive 
    elements to provide visual interest.

5. Primary Yellow Color (#ffd700 - bright yellow):
   - Use for call-to-action buttons, highlighting important elements, or drawing
    attention to specific information.

6. Secondary Yellow Color (#ffeb99 - light yellow):
   - Use as a subtle highlight or background color for certain sections or 
    elements to add warmth or gentle contrast.

Remember that these are general guidelines, and you can adjust the usage of 
colors based on your specific design preferences and requirements. Consistency 
in color application across the website will help create a visually cohesive and 
harmonious experience for your users.

Feel free to explore different combinations and experiment with the placement of 
these colors to achieve the desired visual impact and aesthetics for your website.

Certainly! Here are the Tailwind CSS equivalents for the colors mentioned in the color scheme:

1. Primary Color (#3498db - vibrant blue):
   - Tailwind CSS equivalent: `bg-blue-500` (for background color) or `text-blue-500` (for text color)

2. Secondary Color (#555555 - dark gray):
   - Tailwind CSS equivalent: `bg-gray-700` (for background color) or `text-gray-700` (for text color)

3. Background Color (#f5f5f5 - light gray):
   - Tailwind CSS equivalent: `bg-gray-100`

4. Additional Blue Color (#80b6ed - lighter blue):
   - Tailwind CSS equivalent: `bg-blue-300` (for background color) or `text-blue-300` (for text color)

5. Primary Yellow Color (#ffd700 - bright yellow):
   - Tailwind CSS equivalent: `bg-yellow-400` (for background color) or `text-yellow-400` (for text color)

6. Secondary Yellow Color (#ffeb99 - light yellow):
   - Tailwind CSS equivalent: `bg-yellow-200` (for background color) or `text-yellow-200` (for text color)

These Tailwind CSS classes can be applied to various elements using the `bg-*` 
or `text-*` classes, depending on whether you want to set the background color 
or text color. Additionally, you can combine these classes with other Tailwind 
CSS utility classes to further customize the styles as needed.

Remember to add the Tailwind CSS classes to the respective HTML elements or 
Svelte components in your project to apply the desired colors.

Please note that if you are using a different color palette or customized 
Tailwind CSS configuration, the class names and values may differ. In that case, 
you can customize your own color palette in the `tailwind.config.js` file.

I hope this helps you incorporate the Tailwind CSS equivalents for the color 
scheme in your Svelte project! Let me know if you have any further questions.
