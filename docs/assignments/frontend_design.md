---
title: Frontend Design
layout: doc
---

# Heuristic Evaluation

## Usability
**Error Tolerance**: 
Because of how I have implemented the rating system, because any user can rate anything any number of times, accidentally rating post erroneously would be irreversible. To remedy this issue I can either create a submit button, or only post the rating to the database on leaving the page.	

**Discoverability**: 
At least in the elements provided in my wireframe, most pages are easily discoverable either directly through the menu, or accessing specific blueprints by clicking directly on them. I realize there is not a clear way to post a blueprint or a stitch through my wireframe, so I will make sure I include an easily discoverable way to post in the full app.

## Physical Heuristics
**Fitt’s Law**: 
Most of the clickables on the UI are fairly large relative to the full window. The smaller ones would be the menu button, the user button, and the search bar, but since these are always anchored at the top of the window, users in fullscreen can take advantage of the top of the screen, but it could be beneficial to increase the size of these buttons for non-fullscreen users.

**Gestalt Principles**: 
I feel that the homepage makes good use of gestalt principles separating two different communities using whitespace, and further separating blueprints from threads within the communities. On the Blueprint pages however, the UI is somewhat cramped making it difficult to distinguish separation between different elements (the description almost bleeds into the comments). Also the stitch and blueprint page have unequal vertical and horizontal spacing between posts, almost indicating a vertical grouping that is not there.

## Linguistic
**Speak a user’s language**: 
The button icon in the top left corner being used as the menu button may cause confusion for new users who may be expecting a more familiar hamburger icon. I feel the icon does add character to the webpage, furthermore, most users expect a menu option to be available in a corner of the nav bar, the button also suggests a menu with its design.

**Consistency**: 
The nav bar is reused throughout the whole application allowing users to become familiar with the options available to them there. Furthermore all links to a blueprint or stitch page have the same visual look which helps users understand they can click through to a blueprint page. This could actually be a problem with the stitch links and the blueprint links looking so similar, as it may confuse users as to which they are clicking on. I will make these two types of links more visually distinct.
