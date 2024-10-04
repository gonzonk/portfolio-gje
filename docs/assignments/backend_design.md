---
title: Backend Design
layout: doc
---

# Data Modeling
Concept Posting[Author]
Purpose Allow public sharing of blueprint through webpage
Principle After uploading a blueprint, title, description, and media, other users can view all these thing on a unique page
State
posts: set Posts
blueprintMedia: posts -> set MediaFiles
title, description: posts -> one String
Actions
makePost(blueprint: Blueprint, medias:set Media, description: String, author: Author, tags: set String, out post)
post = new Post
post.blueprintMedia = Media
post.description = description
post.title = title
post.author = author
post.tags = tags
posts += post
return post
getPost(postId: ID, out post Post)
return posts[postID]
delete(author: Author)
assert author = this.post.author
post -= post\

Concept Commenting[Content, Author]
Purpose Allows users to link content to other content
Principle
State postids: set String
comments: set Comment
content: comments -> one String
parent: comments -> one Content
authorL comments -> one Author
Actions
makeComment(parent: Content, content: String, authorL Author, out comment Comment)
comment = new Comment()
comment.content = content
comment.parent = parent
comment.author = author
comments += comment
return comment
getCommentsFromParent(parent: Content, out comments set Comment)
return comments.find({parent: parent})
getComment(commentID: ID, out comment Comment)
return comments[ID]
delete(author: Author)
assert author = comment.author
comments -= this.ID\

Concept Rating[Content][Author]
Purpose allows users to enumerate their feelings about aspects of a piece of content
Principle Users can select a rating for a post which is average across all rating to show other users general community consensus
State
ratings: set Rating
authors: map rating -> (author: Author, index: Number, rating: Number)
parent: ratings -> one Object
values: ratings -> set Integers
count: ratings -> set Integers
Actions
getRating(parent: Object, out rating: Rating)
return ratings[parent]
averageRatings(out averages set Number)
return [values[i]/count[i] for range(len(count))]
makeRating(parent: Content, rating: Number, ratingIndex: Number, author: Author)
if ratings[{parent: parent}] not exist:
ratings += new Rating(parent=parent, values=[], count=[])
if authors[(ratingId)] exists:
values values[ratingIndex] -= authors[(ratingId)].rating
count[ratingIndex] -= 1
values[ratingIndex] += rating
count[ratingIndex] += 1


Concept Authenticating
Purpose allow each user to have personalize features
Principle Users can register with a username and password and can identify themselves to the app later with the same username and password
State
users: set Account
username: users -> one String
password: users -> one String
Actions
register(username: string, password: string, out account: Account):
assert username not in users
users += [username, password]
login(username: string, password: string, out account: Account):
assert password == user[account].password
return user[username]


Concept Sessioning[User]
Purpose allows users to continue one authenticated session for a period
Principle once started, until session is ended user is remembered and can be accessed
State
active: set Session
user: active -> one user
Actions
start(user: User, out session: Session)
session = new Session(user)
active += session
return session
getUser(session: Session, out user: User)
return active[session].user
expire(session:Session)
active -= session


Concept Stitching[Content][Author]
Purpose Users can share their attempts at a craft
Principle Users can create a ‘stitch’ where they share their attempt at blueprint, that links back to the blueprint they followed on the website or the stitch they stitched onto (allows users to modify blueprints and put their own spin on things to inspire others).
State
stitches: set Stitch
media: stitches -> set mediaFiles
parent: stitches -> one Content
captions: stitches -> one String
authors: stitches -> one Author
Actions
makeStitch(media :set Media, caption: String, author: Author, parent, out Stitch)
stitch = new stitch()
stitch.media = media
stitch.caption = caption
stitch.author = author
stitch.parent = parent
stitches += stitch
return stitch
delete(author: Author)
assert stitch.author = author
stitch -= stitch

![Data Connections](../Assets/A4%20map.png)