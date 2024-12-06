---
title: P5 - Beta Release
layout: doc
---

# P5 - Beta Release
## Design revisions

__Quizzing__: One thing we decided to do was to get rid of the quizzing page in the interest of time. We decided that our other features were more core to the functionality of our app and quizzing was not an essential feature so we decided to scope down. 

__Flashcarding__: We decided to create and add to flashcard groups from posts rather than from a posts page. This was done to make it clear to users what word they are adding, and allow for ease of creation of sets.

__Dictionary__: We initially designed the dictionary feature so the user could browse entries alphabetically. During implementation, however, we decided to allow users to also browse entries by category to enable learners to find related words more easily. 

__Upvoting__: We decided to show total upvotes and downvotes rather than just the upvotes minus downvotes. This was to allow users to understand how frequently an item is being voted on, and the validity of a strong upward overall vote.

__Wordling__: In Wordling, we only stored the possible words and the current word. However during implementation, we decided it would be better to store previous words as well (if we run out of possible words for the game, we can use previous words). We also added a doc that stores the word along with the date that it was used, instead of just the current word, because it handles sharing data between multiple users in a more safe way.

## Task List

| Task | Instruction | Reasoning |
| :---: | :---: | :---: |
| Add a word to dictionary (Teacher account) | Please add the word “hapu” meaning “clan” to the dictionary | Ensure that users can easily figure out how to add words |
| Find a word | Please tell me what the word “kai” means | Ensure that a user could find a word they wanted to translate |
| Find words for a given category | Please find the words in the "Kinship" category | Ensure that a user can easily find related words by category |
| Upvote a word (Teacher account) | Try to upvote or downvote any word | Ensure that a user could easily vote on a word |
| Create an event | Create a mock event for meeting other Māori speakers  | Guarantee that a user can view and create events |
| Customize your profile | Try to change your profile description to anything you want | See if the flow to customize your profile is intuitive and easy to find |
| Make a group | Could you create a flashcard group and add 3 words to it | See if it is intuitive to create and update a group |
| Try Flashcards | Could you do the flashcards for the set you created | Make sure users can navigate to and around the flashcard view |
| Play Word of the Day game | Try to win the Word of the Day game | Hear their thoughts on the game and see if it’s intuitive to play |

