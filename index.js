import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://simple.wikipedia.org/wiki/Wikipedia:Basic_English_combined_wordlist';

axios(url)
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
            .sort()

        console.log(words.length)
        
        for (let word of words) {
            console.log(word);
        }
        
        
    })
    .catch(console.error);
    
    
const createWordArray = (domParser,key) => {
    return domParser('b:contains("' + key + ':")').nextAll('a').
        map((index,element) => domParser(element).text()).get();
}
