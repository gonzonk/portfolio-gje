---
title: Backend Design
layout: doc
---

## Team Contract

- Expected level of achievement: A+
- Personal goals for each team member (building a great app? learning a particular skill?):
  - Matt: Improve collaboration skills and working with others to build an amazing app from the ground up  
  - Gonzalo: Train group development skills, and further develop my own software skills.
  - Gurjaap: Improve upon the skills we built during our individual projects
  -Muco: Build an app that provides a novel and compelling solution to a real problem. Gain further practice with the tech stack used in class
- Meetings: at least 2 per week during class times in the Stud and more meetings on weekends if necessary
- Quality of Work: We will have team review meetings to recap work that has been done individually and we will review each other’s code when the time comes.
- Task Assignment: Tasks will be divided equally among the team members and if team members know they might miss a deadline then they should communicate with the group early.
- Decisions: All decisions will be group decisions and in cases of disagreement we will resort to a majority vote. 

## Problem Area:
- Problem: Preservation of endangered and less documented languages.
- Solution: Crowdsourced online dictionary database for endangered languages, with pronunciations, descriptions, and images. Learning exercises, such as flashcards and quizzes. 

## Impact Case
1. The problem of language preservation is important because there are many under-documented languages which are currently passed orally, and learners have difficulty accessing the written resources. Unless languages are well-documented they will become extinct as older generations of native speakers pass away. 
2. Our solution to address this problem is to create a crowdsourced, dictionary learning platform to catalog under-documented languages.
3. We believe this solution is good because it provides a low barrier to entry to upload words to the database. Further interactive learning exercises provide an engaging way for users to learn more of a language.
4. We could measure the number of words people learned to prove that the webapp is a good solution to preserving endangered languages.

## Research Findings

There are over 3,000 currently endangered languages, about 40% of all languages in the world. According to experts, in the best case scenario 50% of all current languages will be extinct within the next 100 years, with up to 90% being extinct in the worst case. Importantly these endangered languages are spread all over the world, from Australia to North America, to Africa, with 167 languages currently being endangered in the USA alone (Endangered Languages Project). The issue with most of these endangered languages is that they’re passed down orally and very little documentation exists of them. 

During the course of our research, we came across a project by the Cow Creek Education Center that involved building an app to facilitate the uptake of the Takelma language. We thought it was a great way to create an app that has some real world need. We reached out to them but haven’t gotten a reply yet.

Ways in which existing solutions do not serve the needs of stakeholders:
- Popular existing apps provide no opportunity for learning endangered languages
  - Duolingo supports around 40 languages and Babbel only supports 14 languages. There are over 7,000 languages worldwide, so this is less than 1 percent of all languages, and none of the ones included are endangered.
- Existing apps provide no opportunity for users to contribute content for unsupported languages
  - It would be infeasible for apps like Duolingo to add support for every endangered language in the world by themselves since they’re closed-sourced, but they also do not provide any ability for users to contribute or help them create this support through crowdsourcing or something along those lines.
- Apps that allow users to submit their own words to create a dictionary don’t include pronunciations
  - In many of these endangered languages, accents and pronunciation are very important, and slight mispronunciations can sometimes change the entire meaning of a word. Including them in a dictionary would be extremely beneficial for users.
- Apps that create dictionaries aren’t useful to learn from
  - Nobody is going to just read through a dictionary for fun. This is why apps like Duolingo exist in the first place. There were no apps that took advantage of their crowdsourced data to create more interactive learning exercises, such as flashcards or quizzes.



## VSD Impacts
- Desired Values: Conservation, Cooperation, Community
- Accounting for Culture: Additional language features - Some languages may have additional features that may not be considered from an english-speaking point of view, such as tonal or stress based words. Furthermore, some languages may use characters not included in unicode To accommodate these, language feature recommendations may be required.
- Diverse Geographies: Internet Access - Some users may not have reliable internet access, especially more remote users. It may be worth considering having a low fidelity option, which would reduce downloads needed to utilize the page. Additionally, we could architect the app in such a way that it can still retain some of its core functionality offline.
- Non Targeted Use: Bad Actors - There may be bad actors in a crowdsourced language platform, so it will be important to include moderation capabilities.
- Environmental Impact: Energy Use - Keeping with the value of conservation our website should avoid functionality that utilizes high amounts of energy. For instance our website should avoid any AI integration.
- Adaptation: Teaching Children - For parents trying to pass on a native language to their children, they could use this app to help with the learning process. 
- Adaptation: Remembering a Language - For people who move away from a place where they used to speak an endangered language, they might start to forget it. However, they could use this app as a learning tool to help remember some of the vocabulary.
- Challenges with Heteronyms: Heteronyms are words that are spelled the same but pronounced differently and have different meanings. This makes adding a pronunciation feature vital to our app to help users understand the difference between words that are spelled the same but mean different things based on how they are pronounced.  
- One person multiple roles: A user can have multiple roles within the app. For example, at one point in the usage of the app they might be working to preserve a language by adding words and definitions. In another instance of using the app, they could be trying to learn an endangered language themselves.

## Interview Summaries of Key Lessons

### List of Interviewer Roles and Interviewees :
- Gonzalo: 
Will interview his mom, she worked with Navajo peoples and would be interested in casually learning a native language
Role: Stakeholder, End User
- Muco
Will reach out to linguistics professor
Role: Expert
- Matt: 
Will interview friend from Paraguay
There is a Native American language called Guaraní that is used by the Paraguayan people
Role: Stakeholder
- Gurjaap:
Will interview someone who grew up in a village in Mexico that natively spoke the Awakatek language, which is considered endangered
Role: Stakeholder, End User

### Key Takeaways:
- Documentation efforts are vital for languages being preserved
- Many endangered languages are transmitted orally by older generations, and if they are not passed on, they often fade away with those generations.
- Even people adjacent to speakers realize the decline in its speaking population, as less of the younger generations speak a language
- Many native endangered language speakers are unaware of any efforts to preserve or document their language, if they even exist
- Online resources are limited for many these endangered languages
- A crowdsourced approach to document languages can be a great way to leverage the community of native speakers and directly involve them in preservation efforts
- One of the main problems with learning words from an endangered language is different phonetics and alphabets, demonstrating the importance of pronunciation guides
- Learning a language requires much more than just learning individual words, sentence structures and context are critical to actually learning a language. Implementing something like this would be outside of our capabilities, so we are limiting our scope to a dictionary and vocabulary application.
- Vocabulary building through interactive means can be quite effective in making the learning experience more engaging, especially with younger speakers looking to improve their command of the language. However, it also puts community  members with limited Internet access at a disadvantage.

### Full Interview Summaries:
**Interview with Linguistics Professor**

Questions:
- What is the state of endangered languages and prior preservation efforts?
- What role can technology play in promoting those efforts?
  - Role in preserving the language
  - Role in facilitating language learning
- What are the limitations of using technology to address this problem?

I reached out to an MIT Linguistics professor whose classes I attended in the past to gain a better understanding of the problem we are trying to solve. 

I started by asking her about the state of endangered languages and prior preservation efforts, to which she pointed out that there is rarely a one-size-fits-all solution to this problem, especially because communities whose languages are endangered usually face unique challenges in preserving their languages that vary from one community to the next. 

For example, some endangered languages might still have hundreds or thousands of native speakers, both old and young, but little to no written record of their language. Other communities might have very few speakers or even not at all, but extensive written documentation of the language from prior research work conducted by linguists on the language that can help revitalize the language. She mentioned work by one of her colleagues on the Wôpanâak language, a language that has had no speakers for more than a century but has a large corpus of texts.  She concluded that researching and leveraging prior documentation efforts, as well as engaging with native speakers if available, would greatly help us build a solution that meets the needs of our target audience.

I also asked her about technology's role in promoting language preservation efforts and mentioned our intention to build a crowdsourced dictionary platform that enables speakers to document and learn their language through an interactive interface. She raised a couple of points. She noted that a crowdsourced approach can be a great way to leverage the community of existing speakers, especially for languages that still have a sizable number of native speakers. Additionally, an interactive way to make the material more engaging could be particularly effective in encouraging young community members to learn the language. At the same time, she pointed out that many communities with endangered languages usually have limited access to smartphones or the internet and that can pose a challenge when it comes to adopting our proposed solution, depending on the community targeted.

**Interview with Cassondra, worked and lived on a Navajo reservation**

Questions:
- What endangered languages have you spent time around if you know of them?
  - Worked closely as a government pharmacist with Navajo Peoples for 2 years
- When you worked with the Navajo people, did any of them speak a native language?
  - Much of the older generation spoke Navajo, but the younger did not
- If so, did you ever pick up any phrases or words?
  - Picked up some of the language, nouns and verbs.
- Would you have been interested in learning more of the language, or would you want to learn it now?
  - She would have if there was “a Duolingo for it”
- Have you ever used an app like duolingo, or a language learning service, if so what was that like?
  - She has used duolingo and enjoys the different types of questions and modalities of learning they have (audio, writing etc.)

Cassondra has worked for two years and lived on a Navajo reservation. When I mentioned that Navajo was an endangered language she said she was “not surprised, as the younger generation didn't really speak Navajo”. When I asked if she would have wanted to learn more, she explained that the language was very difficult to learn due to different phonetics and a different alphabet, she specifically mentioned how useful it is to hear pronunciations when learning new words, demonstrating the value of recordings. But I was surprised when she said “If there would have been a duolingo for it, I would have tried to learn more,” showing a desire to learn more. She continued to explain that the most difficult aspect of learning such a different language is sentence formation, showing a limitation of our current solution, but still demonstrating its potential as a learning aid.

**Interview with Hugo, speaker of Awakatek language**

Questions:
- What endangered language do you speak?
  - Grew up in a village in Mexico that spoke the Awakatek language
- How well do you speak the language now?
  - He can maintain a conversation fairly well, but he forgot a lot since he doesn’t use it very often now
- What challenges does your community face in maintaining the language?
  - Passed down from parents but a lot fewer people live in the village now, and older speakers start to pass away. People moved out, and when they do, they don’t use the language as much so they start to forget it or don’t learn it
- What efforts are being made to document or revitalize your language?
  - Doesn’t know of any efforts like that. Said not much was being done to document it when he grew up there
- How can others support the preservation of your language?
  - Said that it would be hard to learn the language without a teacher, but for someone like him who is just forgetting the words, it would be nice to have some kind of reminder. I asked if he means like a dictionary, and he said yes something along those lines
- How important are the different pronunciation and accents in your language?
  - Accents are very important and people might not understand you if you pronounce certain words wrong
  
Hugo grew up in a village in Mexico that spoke the Awakatek language, but once he moved out, he started speaking it less and forgetting words and phrases as he had to start learning other languages. He says that the language is really just passed down from parents to their kids orally, and that it’s really declining since fewer people live in the village nowadays. When they leave, they don’t use the language as much and don’t pass it down. He isn’t familiar with any efforts being made to document or revitalize the language, and he believes it would be hard to learn the language without a teacher. However, for those who have already learned the language and are forgetting it now, like his situation, he thinks a dictionary kind of thing would be really helpful. He says that accents and pronunciation are really important in the language though, so it would be nice to have those included in the dictionary as well.

**Interview with Agnes, speaker of Guaraní**

Questions:
- Can you describe some unique features of your Guaraní?
- What challenges does your community face in maintaining the language?
- What efforts are being made to document or revitalize Guaraní?
- How can others support the preservation of your language?
- How is it being passed down from generation to generation?
- If you had a magic wand that could help you achieve your goals most effectively or change the situation most dramatically, what would it be?

Agnes is from Paraguay, where the secondary native language is Guaraní. She explained that while it is widely spoken by older generations, younger people tend to have a limited understanding of it. Her grandparents spoke Guaraní, but it wasn’t passed down to her father, so neither of her parents speaks it. She mentioned that the language is taught in schools, but the instruction is inadequate, with only one hour of class per week. Most of her high school friends don’t speak it well, though those who do tend to speak it at home. She also noted that online resources for learning Guaraní are not ideal, and that most available materials are limited to translations from Spanish to Guaraní, not English to Guaraní. Finally, she pointed out that there are insufficient efforts to document the language, which has led to a lack of comprehensive resources for learning it.

## Revised impact case
1. The problem of language preservation is important because there are many under-documented languages which are currently passed orally (Endangered Languages Project). Learners have difficulty accessing the written resources and might have limited access to online resources (Agnes interview). Unless languages are well-documented they will become extinct as older generations of native speakers pass away (Hugo interview). 
2. Our solution to address this problem is to create a crowdsourced, dictionary, vocabulary-learning platform to catalog under-documented languages. We would also like to provide users the ability to access part of the app with limited Internet access to address some of the accessibility concerns expressed in the Linguistic professor’s interview.
3. We believe this solution is good because it provides a low barrier to entry to upload words to the database. Further interactive learning exercises provide an engaging way for users to learn more of a language (Linguistics professor, Cassondra interviews).
4. We could measure the number of words added to the dictionary to address the documentation part of the app and number of correct answers to learning exercises to measure the educational effectiveness of the app, to prove that our app is a good solution to the problem.
