import axios from 'axios'

const baseUrlClassicDictionary = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

// const baseUrlUrbanDictionary = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define'

export function getClassicDictionaryDefinition(wordSearched) {
  return axios.get(`${baseUrlClassicDictionary}/${wordSearched}`)
}

// export function getUrbanDictionaryDefinition(urbanOptions) {
//   urbanOptions = {
//     method: 'GET',
//     url: baseUrlUrbanDictionary,
//     params: { term: 'fairy' },
//     headers: {
//       'x-rapidapi-key': process.env.REACT_APP_MY_URBAN_API_KEY,
//       'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
//     },
//   }
//   return { urbanOptions }
// }