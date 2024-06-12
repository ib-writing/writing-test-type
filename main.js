const item_1 = document.getElementsByClassName("item-1")[0];

const item_2 = document.getElementsByClassName("item-2")[0];

const item_3 = document.getElementsByClassName("item-3")[0];

const article_1 = document.getElementsByClassName("article-1")[0]
const article_2 = document.getElementsByClassName("article-2")[0]
const article_3 = document.getElementsByClassName("article-3")[0];

itemList = [
    [item_1,article_1], 
    [item_2,article_2],
    [item_3,article_3]
]

item_3.classList.add("item-border");
article_3.classList.remove("display-none");

function toggleBorder(selectedItem) {
    itemList.forEach(item => {
        if (item[0] === selectedItem) {
            item[0].classList.add("item-border");
            item[1].classList.remove("display-none")
        } else {
            item[0].classList.remove("item-border");
            item[1].classList.add("display-none")
        }
    });
}

// create custom element for Item 1: Grammar

const divBasicGrammar = document.getElementsByClassName("basic-grammar")

const BASIC_GRAMMAR_DATA = [
    ["11 Grammar Rules for Error-Free Writing", ["Write in Complete Sentences", "Make Sure Your Subjects and Verbs Agree", "Link Ideas With a Conjunction or Semicolon", "Use Correctly Commas", "Use a Serial Comma When Necessary", "Voice Active Use", "Use the Correct Verb Tense", "Keep Your Verb Tense Consistent", "Only Use Apostrophes for Possessive Nouns and Contractions", "Keep Your Homophones Straight", "Use End Punctuations Correctly"]],
    ["Parts of Speech", [["", "Definition/Function", "In a Sentence"]], 
                        [["NOUN", "Person, place or thing", "<b>Sven</b> owns an expensive house"], 
                        ["VERB", "Physical action or state", "They <b>play</b> golf on Sundays"], 
                        ["ADJECTIVE", "Describes nouns and pronouns", "That was a <b>loud</b> sound system"], 
                        ["ADVERB", "Modifies adjectives, verbs, and adverbs", "The food arrived <b>fast</b>"], 
                        ["PRONOUN", "Replaces nouns", "<b>She</b> is very punctual"], 
                        ["PREPOSITION", "Links nouns to other words", "The shoes are <b>beside</b> the door"], 
                        ["CONJUNCTION", "Joins words, phrases or clauses", "He requested today off, <b>but</b> was denied"], 
                        ["INTERJECTION", "Shows strong feelings", "<b>Wow!</b> That's a suprise gift"]],
                        ],
    ["Basic Grammar", [["SUBJECT", "OBJECT", "POSSESSIVE ADJECTIVE", "POSSESSIVE PRONOUNS"]], 
                        [["I", "me", "my", "mine" ],
                        ["You", "you", "your", "yours" ],
                        ["We", "us", "our", "ours" ],
                        ["They", "them", "their", "theirs" ],
                        ["He", "him", "his", "his" ],
                        ["She", "her", "her", "hers" ],
                        ["It", "it", "it", "???" ]],
                    ]
]

// create custom element for Item 3: Practices

const divExamPractices = document.getElementsByClassName("exam-practices")

const EXAM_PRACTICES_DATA = [
    [ "Article",[
        { date: 'May 2019', content: 'You interviewed an innovator who developed an application (or “app”) that can help teenagers make better use of their time. Write an article based on this interview to be published in your school magazine, describing the application and explaining how it will be of benefit to teenagers. Do not simply write the exact words (or transcript) of the interview.' }, 
        { date: 'November 2016', content: 'Your school is to be featured in the next issue of an international education magazine. Write the article that will appear in this magazine, which describes the different ways in which your school assists students who are learners of English to develop their communication skills in this language.' },
        { date: 'May 2016', content: 'Many students at your school are fixated on physical appearance. Write an article to be published in your school magazine in which you explain the issue and describe how young people can avoid the negative consequences connected with such obsession' }, 
        { date: 'November 2015', content: 'Last summer you worked for an organization that provides healthcare in developing countries. Write an article for your school magazine about what you did and why you feel the work of this organization is important.' },
        { date: 'May 2015', content: 'You watched a film in which the main characters did not have a common language but still managed to work collaboratively. Write an article for your school magazine describing how the characters communicated with each other and reflecting on how necessary it is to share a language. ' }, 
  
    ]], 
    [ "Blog",[
        { date: 'November 2019', content: 'A computer scientist has predicted that robots will begin replacing teachers in the classroom within the next ten years. Write a blog entry in which you discuss both potential benefits and drawbacks of such revolutionary technology, and stating whether you think this would be a positive change.' }, 
        { date: 'May 2019', content: 'You went on holiday to a country you’ve always wanted to visit. Nothing went as you planned, and you came back home feeling disappointed and frustrated. Write a blog entry describing what you had initially planned, explaining how it went wrong, and reflecting on what you have learned from the experience.' },
        { date: 'November 2018', content: 'A recent national survey has found that a majority of teenagers believe online gaming should be classed as a sport. Write a blog entry in which you discuss to what extent you agree with this view, giving reasons for your opinion' }, 
        { date: 'May 2018', content: 'You read an article that argued that the way you dress influences what others think about you. Write a blog entry in which you discuss to what extent you agree or disagree with this claim and give reasons for your views.' },
        { date: 'May 2017', content: 'You recently volunteered at a local hospital where you tended to children recovering from long-term illnesses. Write a blog entry describing the experience and explaining the factors other than medicine and medical treatment that, in your opinion, helped those children recover.' }, 
        { date: 'November 2016', content: 'Social media are changing the ways in which we interact with each other. Write a blog entry describing a recent development in social media and explaining some of the ways it is altering our manners and customs.' },
        { date: 'May 2016', content: 'Many teenagers in your neighbourhood prefer virtual games to spending time with peers and claim it helps them bond with each other. Write a blog entry in which you discuss the pros and cons of playing games online and whether true bonding occurs when playing such games.' }, 
        { date: 'November 2015', content: 'Last year you were staying in an English-speaking country when Halloween was celebrated. Write a blog for readers in your country describing the custom of Halloween and saying what you and your friends did on that day.' },
        { date: 'May 2015', content: 'You recently read an article in which the author claimed that natural sciences (such as chemistry, biology or physics) are not as beneficial as social sciences (such as economics or history) in the 21st century. Write a blog entry in which you discuss the claim and give reasons for your opinion. ' }, 

    ]], 
    [ "Diary/Journal",[
        { date: 'November 2017', content: 'While on a school exchange in an English-speaking country, you attended a conference on the difficulties faced by communities trying to maintain customs and traditions in a rapidly changing world. Write a diary entry in which you record and reflect on the ideas presented at the event' }, 
    
    ]], 
    [ "E-mail",[
        { date: 'November 2022', content: 'A building of great cultural significance has fallen into a state of neglect. The local council is now proposing to demolish it and replace it with a public park. You want to stop the council from going ahead with this plan. Write a text in which you explain why you oppose the demolition, suggest an alternative use for the building, and justify why your suggestion would be more useful for the community' }, 
        { date: 'May 2022', content: 'You and your friend planned to travel together after graduation but you fell out because you could not agree on where to go or what to do. Now, you want to resolve the situation with your friend. Write a text in which you express why you think the situation occurred, how your feelings have changed, and offer ideas that both you and your friend might be able to agree to.' },
        { date: 'November 2021', content: 'You recently listened to a podcast which suggested that supportive friendships make a major contribution to teenagers’ well-being. This made you reflect on your own friendships. Write a text to a good friend summarizing the ideas expressed in the podcast, comparing them to your own experience and stating the extent to which you agree with them.' }, 
        { date: 'May 2019', content: 'On a holiday to an English-speaking country, you attended a traditional ceremony that has been modernized to suit the 21st century, and you found the modernized version fascinating. Write an email to a friend, describing the ceremony and how it was modernized, and explaining what you liked about the modernized version. ' },
        { date: 'November 2018', content: 'You recently attended a one-day workshop organized by your student council entitled: “Health and Wellness for Students”. Write an email to a friend in which you describe the activities you participated in and evaluate their benefits.' }, 
        { date: 'May 2018', content: 'You recently read a book that discussed how acceptance of different ethnicities in a community can strengthen that community. You want to recommend the book to a friend who you know is interested in this topic. Write an email to this friend telling him or her about the book and expressing your opinion about its main argument(s).' },
        { date: 'November 2017', content: 'You are currently on holiday in an English-speaking country, and you are impressed by the ways in which this country enables people with disabilities to participate fully in society. Write an email to an English-speaking friend explaining what you have observed and why you are so impressed' }, 
        { date: 'May 2017', content: 'To protect students from cyberbullying, your school introduced a surveillance system that allows it to monitor everything students do online during school hours. As the President of the Student Council, write an email to your school principal explaining why senior students at your school oppose the use of this surveillance system, and suggesting alternative ways in which the school can protect students from cyberbullying.' },
        { date: 'May 2015', content: 'To celebrate different traditions, your town council is holding a costume party in which all those who attend must wear traditional costumes. Write an email to a friend describing what your chosen costume is and why you have chosen it. ' }, 

    ]], 

    [ "Proposal",[
        { date: 'May 2022', content: 'Your friend recently experienced cyberbullying, and you feel this is an increasingly common problem. You want to involve your school in addressing the problem. Write a text in which you describe what happened to your friend, explain the effects of cyberbullying on the school community, and suggest ways in which your school could tackle the problem.' }, 
        { date: 'May 2018', content: 'Your school is planning to organize a summer camp that centres around the most popular activities amongst teenagers and is looking for ideas for the camp. Write a proposal to your school board in which you suggest activities for the camp, and explain why they will be engaging for teenagers' },
        { date: 'November 2017', content: 'Lack of physical exercise is becoming an increasing problem among students at your school. Therefore, the principal of your school has decided to run a campaign to tackle this issue. Write a proposal to your principal outlining your ideas for the campaign and explain why they would be effective in promoting students to take more exercise.' }, 
        { date: 'November 2016', content: 'There is a national campaign to lessen the negative impact of humans on the environment. Write a proposal for the school management, suggesting ways in which your school could use technology to reduce its consumption of resources.' },
        { date: 'November 2015', content: 'Some important archaeological remains have recently been discovered near your city. Write a proposal to the city council for the creation of a centre that could be used either by visitors to enjoy the site or by experts to study it.' }, 
        { date: 'May 2015', content: 'Your school board plans to introduce an alternative educational programme that emphasizes learning through entertainment and would like to incorporate students’ suggestions into the new programme. Write a proposal in which you explain what your suggestions for the new programme are and how students will benefit from them. ' },

    ]], 

    [ "Letter To Editor",[
        { date: 'May 2022', content: 'You are increasingly frustrated by the world’s apparent inability to address the challenges of climate change. You want to engage the attention of the wider community. Write a text in which you describe your frustration, outline a possible plan for action, and explain why it is important to take action now' }, 
        { date: 'May 2021', content: 'You notice that many languages in the world are in danger of disappearing and feel that the international community is not doing enough to save them. You want to raise awareness of this and urge the world to take action. Write a text in which you describe the causes of the languages’ disappearance, explain why preserving them is important, and suggest what world leaders should do.' },
        { date: 'May 2019', content: 'A recent newspaper article claimed that governments do not do enough to help immigrants integrate into society. You feel strongly about this issue. Write a letter to the editor of the newspaper in which you express your opinion on the issue and give reasons for it.  ' }, 
        { date: 'May 2016', content: 'You recently read an article in your local newspaper in which the author claimed that teen cliques, or exclusive friendship groups, affect teenagers negatively. Write a letter to the editor of your local newspaper in which you either agree or disagree with the claim and give reasons for your opinion' },


    ]], 

    [ "Speech",[
        { date: 'May 2021', content: 'You have just returned from a volunteering programme overseas and have been invited to share your experience with students who are considering the same programme. Write a text in which you describe what was most challenging in achieving the programme’s objectives, explain how you addressed it, and reflect on how it has changed your outlook on life.' }, 
        { date: 'November 2020', content: 'A famous former student of your school will visit your campus next month. You have been asked to announce this to the school community to raise awareness and interest. Write a text in which you describe the famous visitor’s achievements and the purpose of their visit, and explain why the school community should be excited about this occasion.' },
        { date: 'November 2018', content: 'The principal of your school is proposing to reduce the length of the school’s main holiday. This matter will be debated at the next Parent Teacher Association meeting. As one of those invited to present a student perspective, write the text of your opening speech to be given at the meeting, either supporting or opposing the principal’s proposal.' }, 
        { date: 'May 2017', content: 'Your teacher has set this as the topic of your next English B class debate: “Works of art represent their creators, not the culture in which they were created”. Write your opening speech either agreeing or disagreeing with the statement.' },
        { date: 'November 2016', content: 'You are taking part in a class debate on the motion: “Sport is essential to health and happiness”. Write the text of your opening speech either agreeing or disagreeing with this motion.' }, 
        { date: 'May 2016', content: 'Some of your classmates are unaware of the dangers associated with loss of privacy while using social networks. Your principal has asked you, as the president of the student council, to give a talk to your fellow students in which you discuss these dangers and suggest ways in which students can protect themselves.' },
        { date: 'November 2015', content: 'You are taking part in a class debate on the motion: “Robots should not be used in factories because they take jobs from people.” Write your speech either agreeing or disagreeing with this motion. ' }, 
        { date: 'May 2015', content: 'Young people in your town are increasingly too reliant on dietary supplements (such as energy boosters, bodybuilding supplements or weight loss supplements). To raise awareness about the issue, your principal asked you to give a talk to your schoolmates in which you discuss the severity of the issue and suggest how it can be overcome' },

    ]], 

    [ "Pamplet/Brochure",[
        { date: 'November 2020', content: 'The government has proposed a housing development project in your local national park which will result in environmental damage. You strongly object to the project and wish to raise awareness among the local community. Write a text describing the government’s project, explaining the negative impact it will have and persuading the community to take action.' }, 
        { date: 'November 2019', content: 'Next month, your school will celebrate diversity by holding a concert featuring students from different cultural backgrounds. Your task is to advertise the audition to select the performers. Write a leaflet in which you give information about the concert and the audition, and persuade students to audition.' },
        { date: 'May 2019', content: 'Many students at your school are exercising too much because they think it is the only way to remain healthy. As the captain of the athletics club, you would like to raise awareness about this problem. Write a pamphlet to be distributed to your schoolmates, defining what too much exercise is, outlining its dangers and suggesting alternative ways in which they can improve their health.' }, 
        { date: 'May 2017', content: 'As part of your school activities, you designed a summer programme for your peers that aims to create better understanding of the different cultures in your community. Write a brochure in which you promote the programme and describe the different activities in which students will be participating.' },
        { date: 'May 2016', content: 'Your school is organizing an art exhibition in which a number of different customs and traditions will be celebrated. To promote the exhibition, write a brochure to be handed out at the exhibition’s entrance, describing the different exhibits and explaining how they represent customs and traditions.' }, 
        { date: 'November 2015', content: 'The capital of your country is actively marketing the city to English-speaking tourists and all local schools have been invited to take part in this important venture. Write a promotional pamphlet covering aspects from both the past and the present of the city.' },

    ]], 

    [ "Report",[
        { date: 'November 2018', content: 'Your local government has recently banned all petrol and diesel vehicles from your city centre, allowing access only to electric vehicles. As a local resident, you have been invited to give feedback on this scheme by submitting a report. Write the report, describing the impact this scheme has had on the community, and suggesting modifications' }, 


    ]], 

    [ "Forum",[
        { date: 'November 2022', content: 'You belong to an online group interested in languages. One member has said that they feel different when speaking English to speaking in their home language. You wish to express your opinions to the group. Write a text to summarize the member’s ideas, compare them to your own experiences, and express your own ideas about the relationship between language and identity. ' }, 

    ]], 

    [ "Letter",[
        { date: 'November 2019', content: 'An international health charity is looking for teenagers willing to be interviewed in a documentary about teenage health issues. You want to take part in this project. Write a letter to the documentary makers describing the ideas or experiences you would like to share, and explaining why you would be a suitable candidate for the interview' }, 

    ]], 

    [ "Set Of Guidelines",[
        { date: 'November 2022', content: 'You read an article which claims that cities are responsible for most of the world’s carbon emissions. You feel your city could be doing more. Write a text for your fellow citizens in which you describe one source of carbon emissions within your city, present measures to reduce the pollution it causes, and explain why the measures would benefit the population.' }, 
        { date: 'November 2021', content: 'The youth magazine that you work for is running a competition to find “The Teenage Journalist of the Year”. You have been asked to inform the readers of the magazine about how the competition will work. Write a text in which you present the task that the journalists must undertake, set out the rules they must follow and explain how their performance will be evaluated.' }, 
    ]], 

    [ "Social Media Posting",[
        { date: 'November 2021', content: 'You have read that some teenagers do not read enough to reach their full potential. You want to share your ideas with your peers. Write a text in which you state your own opinion on the subject, outline one idea to improve the situation and explain how this idea could improve teenagers’ life chances.' }, 

    ]], 

    [ "News Report",[
        { date: 'May 2021', content: 'Your city has become a very popular destination for tourists from around the world. You have inquired into the impact of mass tourism on different groups of people in the city. You want to inform the public about your investigation. Write a text in which you describe the situation, highlight opinions from the different groups of people, and draw attention to what needs to be addressed going forward.' },
        { date: 'November 2019', content: 'The only cinema showing English language films in your local area has just closed down because of a decline in ticket sales. As a junior reporter for your local newspaper, write a news report giving details about the closure, including the reasons for this, and presenting the reactions of the local community.' }, 
        { date: 'May 2018', content: 'An exhibition focusing on alternative medicine, such as herbal medicines and aromatherapy, was held in your town. As a junior editor of your town’s newspaper, write a news report in which you describe the event and the promoted benefits of the alternative medicine methods displayed.' },  

    ]],
    
    [ "Review",[
        { date: 'November 2020', content: 'You recently watched a documentary which gave you a surprising insight into an aspect of English-speaking culture, and you want to share your reactions with a wider public. Write a text in which you describe the documentary you watched, evaluate its content, and offer your own conclusions about its quality.' },
        { date: 'May 2017', content: 'You recently watched a documentary that you thought was both entertaining and informative. As a junior reporter for your local newspaper, write a review of this documentary describing it and explaining how it was both entertaining and informative.' }, 
        { date: 'November 2016', content: 'You recently attended a fundraising concert at your school at which a former student, now a famous musician, took part. Write a review of the event to be published in your school newspaper.' },  

    ]], 

    [ "Interview",[
        { date: 'November 2019', content: 'Due to the growing demand for skill-based jobs, many business leaders have stated that the school curriculum should focus on developing practical skills rather than academic knowledge. You interviewed one such business leader about this topic and the reasons for his/her views. Write an article based on this interview to be published in your school newspaper. Do not simply write the exact words (transcript) of the interview.' },
        { date: 'November 2018', content: 'You are currently attending a school in an English-speaking country, and a newly arrived refugee has just joined your class. You interviewed this student about their first impressions of their new home, and their hopes for the future. Write an article based on this interview to be published in your school magazine. Do not simply write the words (transcript) of the interview' }, 
        { date: 'May 2018', content: 'As your school’s newspaper editor, you interviewed the creator of a new social network and asked him / her about the difference between the newly-created social network and the ones that we currently use. Write an article based on this interview to be published in your school newspaper. Do not simply write the exact words (transcript) of the interview.' },  
        { date: 'November 2017', content: 'A famous English-speaking author recently visited your town. The author’s books are very popular with young people. As a junior reporter for the local newspaper, you interviewed the author about what motivates them to write and why their work appeals to a teenage audience. Write an article for the local newspaper based on this interview. Do not simply write the text (transcript) of the interview.' },

    ]], 


]

// function openPractice() {
//     console.log(this)
//     this[0].style.height = "auto";
// }

function createArticleElement(contentDetails, articleNum) {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', articleNum);
    // mainDiv.onclick = () => openPractice(this)

    mainDiv.addEventListener('click', () => {
        if (mainDiv.style.height == "auto") {
            mainDiv.style.height = "4rem";
            mainDiv.style.setProperty('--background', 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)');
            const container = mainDiv.firstChild.lastChild;
            container.classList.remove("fa-angle-down");
            container.classList.add("fa-angle-right");
        } 
        else {
            mainDiv.style.height = "auto";
            mainDiv.style.setProperty('--background', 'none');
            const container = mainDiv.firstChild.lastChild;
            container.classList.add("fa-angle-down");
            container.classList.remove("fa-angle-right");
        }
    
    });

    const container = document.createElement("div");
    container.setAttribute('class', 'title-icon')

    const heading = document.createElement('h3');
    heading.innerText = contentDetails[0];
    container.appendChild(heading);

    container.innerHTML += "<i class='fa-solid fa-angle-right'></i>"

    mainDiv.appendChild(container)

    if (articleNum == "article-1-content"){
        const innerDiv = document.createElement('div');

        if (contentDetails[0] == "11 Grammar Rules for Error-Free Writing"){
            innerDiv.setAttribute('class', 'grammar-rules');
            
            const ol = document.createElement('ol');

            contentDetails[1].forEach(detail => {   

                const li = document.createElement('li');
                li.innerText = detail;
                
                ol.appendChild(li);

            innerDiv.appendChild(ol);
            
            });
        };

        if (contentDetails[0] == "Parts of Speech" || contentDetails[0] == "Basic Grammar") {
            innerDiv.setAttribute('class', 'tables');
        
            const table = document.createElement('table');
        
            // Create table headers
            contentDetails[1].forEach(details => {
                const tr = document.createElement("tr");
        
                details.forEach(detail => {
                    const th = document.createElement("th");  
                    th.innerText = detail;
                    tr.appendChild(th);  
                });
        
                table.appendChild(tr);
            });
        
            // Create table rows
            contentDetails[2].forEach(details => {
                const tr = document.createElement("tr");
        
                details.forEach(detail => {
                    const td = document.createElement("td");
                    td.innerText = detail;
                    tr.appendChild(td);
                });
        
                table.appendChild(tr);
            });
        
            innerDiv.appendChild(table);
        };

        

        mainDiv.appendChild(innerDiv);
        divBasicGrammar[0].appendChild(mainDiv);
    };

    if (articleNum == "article-3-content"){

    // const contentDetails = [ "Blog",
    //     { date: 'May 2019', content: '...' }, // Add the content for May 2019
    //     { date: 'November 2016', content: '...' }, // Add the content for November 2016
    // ]];

        const innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'past-paper');

        contentDetails[1].forEach(detail => {
            const strong = document.createElement('strong');
            strong.innerText = detail.date;

            const span = document.createElement('span');
            span.innerText = detail.content;

            innerDiv.appendChild(strong);
            innerDiv.appendChild(span);
        });

        mainDiv.appendChild(innerDiv);
        divExamPractices[0].appendChild(mainDiv);
    }

}

EXAM_PRACTICES_DATA.forEach(contentDetails => {
    createArticleElement(contentDetails, 'article-3-content')
})
BASIC_GRAMMAR_DATA.forEach(contentDetails => {
    createArticleElement(contentDetails, 'article-1-content')
})