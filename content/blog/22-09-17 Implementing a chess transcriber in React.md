---
title: "Implementing a chess transcriber in React"
date: 2022-09-17
description: "Coding a fairly complex UI in React led to some realizations around component architecture & state management. Components should be divided by functionality and often central stores (like Redux) are unnecessary even for deep UI trees."
tags: []
medium_link: "https://medium.com/@busywhistling/implementing-a-chess-transcriber-in-react-937f1cc8ba75"
devto_link: "https://dev.to/busywhistling/implementing-a-chess-transcriber-in-react-2ahi"
---

React is today one of the most popular frameworks for coding UI layers of modern
web apps. By the moniker “modern”, I mean an era where best practices have
matured for the vast majority of use cases & some level of declarative
programming has been achieved (*you code what should happen, instead of how to
do it*).

I think there are two fundamental aspects of React’s popularity (especially
compared to the frameworks / libraries used before it):

- **Component architecture.** Stemming from the CS notion of separation of
concerns, React simplifies building complex apps by encouraging modularity
(plug-&-play), reusability (DRY) and clear abstraction. This aspect has been
kept in mind in the former frameworks as well, and React continues to implement
it (much to the benefit of engineers for whom React is their first framework).
Note the emphasis of React’s separating concerns despite coupling HTML/CSS and
JS.

- **Reactive programming.** This is a declarative paradigm to create systems
where asynchronous functions automatically handle updates to static content,
without the programmer having to explicitly implement the updates. Over the last
decade, this has transformed the engineering world with the rise of the internet
(aka *asynchronous land*). Event loops/queues & efficient updating of
declarative code has been extensively used to design [reactive
systems](https://www.reactivemanifesto.org/) and React is a library bringing
similar patterns to web UIs. Like in much of engineering, while *imagining* a
system where only the updated UI pieces (only things to be done) are re-rendered
(get done) is easy, implementing it in reality is hard (browser DOM operations
are expensive & not designed for it). React tackles this by using a
reconciliation algorithm on a virtual DOM (a JS object representing the DOM
tree) to handle this *reactively*.

# **Chess transcriber**

Here I want to talk about how I implemented a [chess
transcriber](https://paramjit.org/chess_transcriber/) using React
([source](https://github.com/busywhistling/chess_transcriber)).

- Designing component architecture. The UI has a decent level of complex logic
to it. At first, I divided the app in a Left Sidebar, main Chessboard and the
Right Sidebar. The Left Sidebar should state instructions on how to use the app
& let you choose functionality, the Right Sidebar should give
functionality-specific instructions. And the main Chessboard is where all action
should happen.

- Implementing the Chessboard took some thought and really capitalizes on the
abstraction model of React. The entire Board (enclosed in a wooden box) has 64
Tiles, where each Tile’s props characterize it’s color, an onClick event
listener, the piece on it & options to highlight it. I used
the [chess.js](https://www.npmjs.com/package/chess.js) library to handle the
underlying chess logic (the library has been coded over 10 years and provides an
excellent API), and designed the UI dataflow keeping the library’s interface in
mind.

- Handling the application state. At first, I tried passing props around to
handle the UI updates, but it quickly became too complex to deal with. Not that
it couldn’t be done, but the resulting design was ugly (not well abstracted,
lots of re-implementation of code & lots of passing data to places where it
doesn’t *exactly* need to be). I researched a bit, and indeed there are central
state store implementations (often with the Flux architecture), which people
like to use for complex component trees. I chose Redux to store where the pieces
exist on the board & which are the highlighted tiles for a move, etc., and made
the app work.

![https://miro.medium.com/max/700/1*z4zTg1NIUHNFEtPLnOuD-w.png](https://miro.medium.com/max/700/1*z4zTg1NIUHNFEtPLnOuD-w.png)

My chess transcriber web app

# **A second look & re-architecture**

The more I learnt to think in React (and since I wanted to improve the app), I
thought through exactly which component needed which data flow and how to
arrange them in a well-organized *dataflow-lean* way. I decided to re-architect
the app making the following changes.

- Component architecture. At first, I had divided the components focusing on UI,
but that seems like a mistake. I have now divided the *components based on
functionality.* The UI is an *implementation / representation* of the
underlying *UI logic* — the main app (in JS) which says what is happening. This
app (like any application code solving business logic) is divided
into *functions* (i.e., by *functionality*). It often happens that this
translates to separate UI components, but it’s important to note that the
underlying driver of this abstraction is functionality, not UI. (For example,
you can have a UI mixing up all outputs of various components in a well-written
React app).

- State management. I realized that my app (much like a lot of apps out there)
don’t really need to use Redux or even React’s Context API. This came [in
time](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) when
I realized that using Redux really makes sense when *you want the actions (state
changes) themselves* (whether for bug reports, persistent storage or syncing UI
across network). That is, in a way, Redux helps to decouple the actions from the
components themselves. Even deep component trees which on first glance seem like
they would benefit from a central store (via Flux or Context) can often be
rearranged in a way that encourage component composition with
appropriate *local* state initialization / usage.

This app has been pretty useful to appreciate the underlying design choices of
React and to understand when exactly to use (or not) Store libraries. Clean code
comes from clean architecture, which requires having a clear idea of
what *exactly* various tools offer, and when they make sense to use. Try out [the
app](https://paramjit.org/chess_transcriber/), and let me know your thoughts!