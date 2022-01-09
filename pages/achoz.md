---
title: achoz
description: chaos from a to z
date: 2022-01-06 22:42:00
gallery: 2020-11-21 achoz
image: /gallery/2020-11-21 achoz.jpeg
permalink: achoz
redirect_from:
  - 2020-11-21 achoz 
  - zohca
  - chaos
  - achos
  - axos
  - axoz
layout: page
published: true
menu: true
---

# {{ page.description }}

[![{{ page.image }}]({{ page.image }})](/gallery#{{ page.gallery }})

[[ahoxus](/)] helps you to reduce all your money needs down to zero.

**achoz**, by ahoxus, is a simple and free/libre open source app to organize and search through all your data offline-first (once you normalize it).

(this is another way to look at the [[uproot](/uproot)] project. they're both the same).

[[subscribe on ahoxus](/#subscribe)] for very sporadic news over email.

# roadmap

early 2022 january

broad vision, focused on search for now, from high to low priority

+ highest priority! **better and _useful_ results** (the search still doesn't bring anything useful)
+ link to directly open the found file (it works for images and videos already)
+ lowest priority: simple gui improvements
  - link back to here (from the public page at the current #demonstration)
  - page navigation on the top (for easier navigation)
  - link to go to new search (basically a `/` link on "achoz" which should always be on the top as a title)
+ if possible: endless scrolling (very complex topic, as we still need links to each search result, with hashtags - never seen it done properly)
+ move the roadmap somewhere else: ideally a shared and public text/markdown file, perhaps with automatic versioning and easy diff... would a fediverse tool such as write.as suffice?

[discussions](https://github.com/kcubeterm/achoz/discussions)

[more details](https://github.com/kcubeterm/achoz/blob/master/Roadmap.md), while we find no better place for the constantly changing roadmap.

# story

you have a lot of data: files, emails, messages, web links, web content, text, video, audio, apps, etc.

when trying to find something you do remember to be there, sometimes it gets impossible!

the goal of achoz is making your self-data-searching-life not only easier, but enable a new world of possibilities, in which you don't have to worry anymore how to store data for yourself (as long as it's stored with open and free standards).

we will also have all of your data synchronized across all your devices, and even the cloud if you want, with just one single search away to find whatever might be needed!

you can, for instance, even turn 90gb of MP3 into 10gb with insignificant loss, so your whole library can easily be used everywhere.

# search

remember to use the "search in this page" as well! data here got purposefully messy and in a single chunk of a web page.

## demonstration

the data there comes mostly at random from cregox personal files (around 15gb of them).

it works even offline (if you can set it up yourself).

[achoz.ahoxus.org](http://achoz.ahoxus.org) ([source](https://github.com/kcubeterm/achoz))

[public alpha launch announcement](https://www.reddit.com/r/selfhosted/comments/rtc2q2/achoz_a_selfhost_search_engine_for_your_personal/)

# checklist

## first

- create script #magictill to radically slim down files
- ∆ (on public alpha) create a search able to instantly search through all files
- ✓ setup syncthing across all devices
- ✓ get a cloud server to be a linked device

## second

- make magictill automated for older files
- make all the data easy to access for the public (not just the index)

## third

- magictill should also facilitate file normalisation

# technical

we must focus on agpl3+. all other license implies code being done without caring enough for the essential freedoms.

## talk

using emails we can replace all your facebook and other such needs:

- identity: open question. perhaps ipv6 + self hosting, or ipfs?
- site: your unique profile using [#data](#data)
- forums: open question. perhaps a mailing list using sourcehut + fossil-scm, or nodebb?
- messengers: delta chat and jitsi (plus telephones, and voip, for ringing), and perhaps briar and/or telegram (beware of tg!)
- social media: mastodon/fediverse, scuttlebutt
- irc: no mobile option as of 2021. forget about it! much better with forums and messengers

## data

ideas and existing tools for best data use and keep your data footprint to a minimum!

ps: [#**magictill**](#origin) script still in development, but we can also apply [the concept](https://github.com/kcubeterm/achoz/blob/master/Roadmap.md#magictill-slim-down-files) in practice, manually.
    by default, it will reduce all media files (in selected folder) with maximum compression. then, the ones older than 1 year start to get much smaller until 8 years, when they get to the bare minimum size. 16 years without access, they are deleted, but we still keep the name, checksum, and metadata.

- files: syncthing, fossil, and/or rsync (avoid nextcloud)
- media: photos, videos, and audio will get reduced by magictill
- music: with reduced audio file, no need to stream
- office: docs, sheets, and slides? you need to learn markdown, python, and html
- server: tilde clubs + raspberry pi + all free servers you can get (with small data footprint, you can spread it easily)

## money

- ledger: from linux. with cone. allows for infinite money #aloze TK (look at the fediverse)
- bank: bitcoin/blockchain (in 2021: uma and zcash for agpl, and even algorand for practical cheapest wallet), of course... good to have money, even without any need for it!

## search

- google, bing: use searx instead. or duck.
- personal computing: look at [#demonstration above](#demonstration) (a #mobileofflinefirst webapp for lunr or meili, plus ripgrepall (we ended up using first shiori and now only typesense)

# subscribe
[[subscribe](/#subscribe)] for very sporadic news over email.

# origin
started based on [this description by cregox](http://cregox.net/achoz) (more links to some concepts there).
