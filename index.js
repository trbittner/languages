import axios from 'axios';
import cheerio from 'cheerio';

const wordsUrl = 'https://simple.wikipedia.org/wiki/Wikipedia:Basic_English_combined_wordlist';

axios(wordsUrl)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const basics = createWordArray($,'Basic')
        const international = createWordArray($,'International')
        const addendum = createWordArray($,'Addendum')
        const compound = createWordArray($,'Compound')
        const endings = createWordArray($,'Endings')
        const words = 
            [...basics,...international,...addendum,...compound,...endings]
            .map(word => word.toLowerCase())
            .sort();

        /* console.log(words.length)
        
        for (let word of words) {
            console.log(word);
        } */
    })
    .catch(console.error);
    
const verbUrl = "https://www.poetrysoup.com/common_words/common_verbs.aspx";

axios(verbUrl)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const linkElements = $('#ContentPane_GridView1 a');
        
        const verbs = linkElements.map((index,element) => $(element).text())
            .get()
            .map(verb => verb.toLowerCase());
            
        verbs.sort();
        
        console.log(verbs.length);
        
        for (let verb of verbs) {
            console.log(verb.trim());
        }
    })
    .catch(console.error);
    

    
    
const createWordArray = (domParser,key) => {
    return domParser('b:contains("' + key + ':")').nextAll('a').
        map((index,element) => domParser(element).text()).get();
}
