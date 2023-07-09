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
