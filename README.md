# SEI-Project-2: ContraDictionary ![img](https://img.shields.io/badge/version-v%201.0.0-blue)
by [Sandra Spighel](https://www.linkedin.com/in/sandraspighel/) & [Aislin Bamber](https://www.linkedin.com/in/aislin-bamber/)

![ContraDictionary](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/ContraDictionary.gif?raw=true)

👉 [<b>TRY ME</b>](https://contradictionary.netlify.app/) 👈

# Table of Contents

  - [Brief](#brief)
  - [Description](#description)
  - [Technology Used](#technology-used)
  - [Get Started](#get-started)
    - [Installation Steps](#installation-steps)
  - [Project Development](#project-development)
    - [Idea](#idea)
    - [Wireframe](#wireframe)
    - [Process](#process)
      - [Classic Dictionary](#classic-dictionary)
      - [Urban Dictionary](#urban-dictionary)
      - [Showing the definitions on the page](#showing-the-definitions-on-the-page)
      - [Bringing it all together](#bringing-it-all-together)
  - [Final Thoughts & Project Wrap](#final-thoughts-and-project-wrap)
    - [Wins](#wins)
    - [Known Bugs / Blockers](#known-bugs-/-blockers)
    - [Key Learnings](#key-learnings)
    - [Possible future features](#possible-future-features)
  - [Disclaimer](#disclaimer)
  - [License](#license)

## Brief
  Pair-coding with one other colleague, we had two days (Wednesday PM to Friday PM) to develop an app fetching data from a free public API and displaying it on a custom built front end, all using React.
## Description
This was the first project we built using React and APIs, after studying both during the previous week. It was a challenging project as my colleague and I did not feel confident in our understanding of either of the two, but by taking it step by step and choosing to push ourselves by using two APIs instead of only one, we felt more confident at the end. 

The website allows a user to search for an English word and displays its dual definitions side-by-side: the classic dictionary definition, and the slang definition.

## Technology used
The app is using [React](https://reactjs.org/), [Axios](https://github.com/axios/axios), [SASS](https://sass-lang.com/) and two dictionary APIs: [(unofficial) Google Dictionary API](https://github.com/meetDeveloper/googleDictionaryAPI) and [Urban Dictionary API](https://rapidapi.com/community/api/urban-dictionary), and was deployed with [Netlify](https://www.netlify.com/).

## Get Started
The website is mobile-friendly and accessible through the web browser. 

### Installation Steps:
* Clone or download the repo
* Install dependencies: <code>yarn</code>
* Start server: <code>yarn start</code>
---

## Project Development
### Idea
After researching APIs and discussing possible ideas, the top two options we came up with were either using a weather API, or a dictionary API. While doing further research into API options for each of the two, we ran across a classic dictionary API, and the Urban Dictionary API, which gave us the idea of a dual word definition app. 

### Wireframe
![Wireframe](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/Wireframe.jpg?raw=true)

### Process
After setting up a new React app, we started by reading in depth the documentation of each of the two APIs to work out how to get the data. 

#### Classic Dictionary
We initially wanted to use the [Cambridge Dictionary API](https://dictionary-api.cambridge.org/), but because accessing the resource could only be done through first requesting an API key via a form that needed to be approved, we had to reorient towards another resource that would be available immediately. 

We proceeded with the [(unofficial) Google Dictionary API](https://github.com/meetDeveloper/googleDictionaryAPI)

![Classic Dictionary API](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/classic_api.png?raw=true)

As per the example in the screen grab above, this is the data a get request returns when searching the word “hello”: 
``` 
[{
      "word": "hello",
      "phonetics": [
        {
          "text": "/həˈloʊ/",
          "audio": "https://lex-audio.useremarkable.com/mp3/hello_us_1_rr.mp3"
        },
        {
          "text": "/hɛˈloʊ/",
          "audio": "https://lex-audio.useremarkable.com/mp3/hello_us_2_rr.mp3"
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "exclamation",
          "definitions": [
            {
              "definition": "Used as a greeting or to begin a phone conversation.",
              "example": "hello there, Katie!"
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "An utterance of “hello”; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [
                "greeting",
                "welcome",
                "salutation",
                "saluting",
                "hailing",
                "address",
                "hello",
                "hallo"
              ]
            }
          ]
        },
        {
          "partOfSpeech": "intransitive verb",
          "definitions": [
            {
              "definition": "Say or shout “hello”; greet someone.",
              "example": "I pressed the phone button and helloed"
            }
          ]
        }
      ]
    }
  ]
``` 
In order to keep it as close to the Urban Dictionary definitions as possible, we decided to not use any audio, and to display instead the phonetic text along with the word searched:

![phonetic](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/phonetic.png?raw=true)

Fetching the data was straight-forward, we installed Axios and then wrote a request based on the word searched.

#### Urban Dictionary
Accessing the Urban Dictionary was a bit more complicated and took us a good half a day to figure out. 

We first had to sign up for an account with Rapid API, create a .env file in the root of our project and add our Urban Dictionary secret key in before restarting our server. This was required to be able to access the Urban Dictionary API. 

We then selected JasvaScript / Axios from the code snippets section and copied the code.

![urban_code](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/urban_code.png?raw=true)

Even though we used Axios again, we had to use a different syntax from what we had previously done in class and homework, which took a while to get our heads around.

![urban_api](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/urban_api2.png?raw=true)

After a some trial and error, we finally celebrated successfully fetching a word with the correct request:

```
  export function getUrbanDictionaryDefinition(wordSearched) {
  return axios({
    method: 'GET',
    url: baseUrlUrbanDictionary,
    params: { term: wordSearched },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_MY_URBAN_API_KEY,
      'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
    },
  })
  }
```

#### Showing the definitions on the page
After successfully logging words, we had to now build the front end to display them on the page, along with their definitions:
![definitions](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/definitions.png?raw=true)

We decided to use SASS for styling as we both wanted to get more experience with it. We also decided to keep the front clear and minimal, so we don’t distract the viewer from the multiple word meanings and differences which we wanted to emphasize. 

We followed the wireframe structure and allocated the left side of the screen to the classic definition, and the right side to the slang definition. 

The hardest part was showing the classic definition, as we had to map twice to get all the information we needed: once through the meanings array, and again through the definitions array:

```
       <div className="definitions">
         {meanings.length > 0 ?
           meanings.map((meaning, index) => (
             <div key={index}>
               <em>{meaning.partOfSpeech} &nbsp; :</em>
               <div><br/></div>
 
               {meaning.definitions.map(definition => (
                 <div key={definition.definition}>
                   {definition.definition}
                   <div><br/></div>
 
                   {definition.example ?
                     (<div> Example: {definition.example} </div>)
                     :
                     <div></div>}
                  
                   <div><br/></div>
                   <div>***</div>
                 </div>
               ))}
               <div><br/></div>
             </div>
           ))
           :
           <div>I do not know what this word means!</div>
         }
```
#### Bringing it all together
We decided for a blue-green colour scheme to use throughout the front end to keep it simple, but also provide enough contrast:

![color_scheme](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/color_scheme.png?raw=true)

Finally, we started working on showing results side by side on the page when a word was searched, like this:

![working_title](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/working_title.png?raw=true)

We built a search form where the user can type the word, which is using State to store the word searched:

```
function SearchForm({ setSearchTerm }) {
 
 const [ formdata, setFormdata ] = React.useState('')
 const handleChange = (event) => {
   setFormdata(event.target.value)
 }
 
 const handleSubmit = (event) => {
   event.preventDefault()
   setSearchTerm(formdata)
   setFormdata('')
 }
 return (
   <div className="search-box">
     <form onSubmit={handleSubmit}>
       <input
         className="input-field"
         placeholder="Search for a word"
         onChange={handleChange}
       />
       <button type="submit" className="button">Search!</button>
     </form>
   </div>
 )
}
```

And then linked everything in App.js by storing wordSearched and definitions in state, and then using useEffect to track changes to the wordSearched so that we can update the definitions when this changes:

```
 const [wordSearched, setWordSearched] = React.useState('')
 const [definitions, setDefinitions] = React.useState({
   classic: null,
   urban: null,
 })
 
 React.useEffect(() => {
   if (!wordSearched) return
 
   const getData = async () => {
     const classic = getClassicDictionaryDefinition(wordSearched)
     const urban = getUrbanDictionaryDefinition(wordSearched)
     const { data: classicData } = await classic
     const { data: urbanData } = await urban
     setDefinitions({ urban: urbanData, classic: classicData[0] })
   }
   getData() 
 
 }, [wordSearched])
```

We then finalised the look of our page. My colleague suggested naming the website Contra Dictionary, which we both thought is a great idea and immediately implemented it.

We used [Special Elite](https://fonts.google.com/specimen/Special+Elite?preview.text_type=custom) as our main font because it resembled old printing press letters.

Just before the deadline, we also did a few further changes and adjustments using flexbox, and added some shading to help with the readability of the text. 

![no_word_searched](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/no_word_searched.png?raw=true)

![word_searched](https://github.com/HotSauceNinja/SEI-Project-2-ContraDictionary/blob/main/src/images/word_searched.png?raw=true)

## Final Thoughts and Project Wrap
### Wins
* We got on really well as a team and both had a very clear idea from the start what we wanted, which helped as we worked together to deliver a cohesive result.

* The final result looks exactly as we planned it from the start, and we think opting for a minimalist and clean style helps place the emphasis on the most important elements of the page: the words and their definitions.

### Known Bugs / Blockers
* We spent a lot of time researching APIs to find the best one to use. In retrospect, I would select one project from the start, and only then start researching APIs.

* After the deadline, we found small bugs while demonstrating the app to the rest of the class. Given this was a time-limited project meant to showcase our initial understanding of React and APIs (we started learning both the previous week), we decided to leave the app as is, so it could be a reference of our growth level from this point onwards.

* The bugs we found are to do with searching for words that have no definitions in the Urban dictionary, in which case the page remains unchanged (either with the previous word searched, or empty if this was the first word searched). 
To resolve this, it would be required to implement a ternary checking if the word searched existed in the Urban Dictionary API and displaying its definition, or showing an error message (“Sorry, this word does not have a definition in this dictionary”) if it does not exist. 

### Key Learnings:
* At the start of our project, neither of us was very confident in using React or on the full process of getting information from APIs, which meant we had a very slow work pace and we needed to ask for help a couple of times after we got really stuck (accessing the information from the Urban Dictionary, and trying to fetch information from the Classic Dictionary through a second map). We both feel a lot more confident at the end of the project, and trying to resolve the problems we had throughout helped us get a much better understanding of React and APIs.

* This was the first team project in the course and I was happy to discover that teamworking in coding follows the same rules as team working in any other project. We communicated very well in our team and established clear goals, which sped up our progress.

### Possible future features
* Show random word
* Show synonims or antonyms with possibility of navigating to their definition

## Disclaimer
The Urban Dictionary API features content that might at times be upsetting, vulgar or derogatory. This content does not reflect our views, and our sole intention when creating this app was to showcase how words take on different meanings and connotations according to different contexts. 

## License & copyright
This project was build for educational purposes. No copyright infringement is intended and all content is used under educational license. 
