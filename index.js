import axios from 'axios';

const url = 'https://simple.wikipedia.org/wiki/Wikipedia:Basic_English_combined_wordlist';

axios(url)
    .then(response => {
        const html = response.data;
        console.log(html);
    })
    .catch(console.error);