---
title: "React Berlin meetup Oct '22"
date: 2022-10-06
description: "Presentation slides from my talk at the React Berlin meetup"
tags: []
---

I spoke at the React Berlin meetup today (slides below), about my experience
writing a [chess transcriber](https://paramjit.org/chess_transcriber) in React. 

Coding a fairly complex UI in React led to some realizations around component
architecture & state management. Components should be divided by functionality
and often central stores (like Redux) are unnecessary even for deep UI trees.

<iframe class="speakerdeck-iframe" style="border: 0px none; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 560px; height: 315px;" src="https://speakerdeck.com/player/be02020b570f4923abdee739d6380ada" title="React Berlin meetup Oct '22" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" data-ratio="1.7777777777777777" frameborder="0"></iframe>

More about this can be read at my other [blog
post](https://paramjit.org/blog/22-09-17-implementing-a-chess-transcriber-in-react/).