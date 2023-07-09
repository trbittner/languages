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
    ** The same list can also be found [here](https://www.syllablecount.com/syllables/words/verbs.aspx).
    ** It's therefore very likely both sites are pulling it from another source.
* [This site](https://www.english-corpora.org/) may ultimately prove useful as well.