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

# story

you have a lot of data: files, emails, messages, web links, web content, text, video, audio, apps, etc.

when trying to find something you do remember to be there, sometimes it gets impossible!

the goal of achoz is making your self-data-searching-life not only easier, but enable a new world of possibilities, in which you don't have to worry anymore how to store data for yourself (as long as it's stored with open and free standards).

we will also have all of your data synchronized across all your devices, and even the cloud if you want, with just one single search away to find whatever might be needed!

you can, for instance, even turn 90gb of MP3 into 10gb with insignificant loss, so your whole library can easily be used everywhere.

# demonstration

the data there comes mostly at random from cregox personal files (around 15gb of them).

it works even offline (if you can set it up yourself).

try searching for "" to test the built-in video and image viewers.

(beware of possible pornographic or otherwise disturbing content for some viewers, while this is in alpha stage)

[achoz.ahoxus.org](http://achoz.ahoxus.org)

[source](https://github.com/kcubeterm/achoz)

[public alpha launch announcement](https://www.reddit.com/r/selfhosted/comments/rtc2q2/achoz_a_selfhost_search_engine_for_your_personal/)

# priority checklist

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
- make a technical roadmap for search and magictill

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

using [#**magictill**](#origin) scripts with termux, git and rsync, we replace most of your google/microsoft needs:

- files: syncthing, nextcloud, fossil, and/or rsync
- photos: magictill to reduce older unselected photos size periodically on files
- music: any radio app? TK
- videos: magictill plus lbry? TK
- office: nextcloud and libre office? docs, sheets and slides TK
- server: tilde clubs? TK netlify? anyway, any free servers work, easy to migrate with magictill, including dns
- limits: magictill by default will lossly reduce all files (except marked ones) older than 1 year with minimal compression. 5 years gets maximum. 10 years they are deleted, but keep the name, checksum, and metadata.

## money

- ledger: from linux. with cone.
- bank: bitcoin/blockchain (in 2021: uma and zcash for agpl, and even algorand for practical cheapest wallet), of course... good to have money, even without any need for it!

## search

- google, bing: use searx instead. or duck.
- personal computing: look at [#demonstration above](#demonstration) (a #mobileofflinefirst webapp for lunr or meili, plus ripgrepall (we ended up using first shiori and now only typesense)

# subscribe
[[subscribe](/#subscribe)] for very sporadic news over email.

# origin
started based on [this description by cregox](http://cregox.net/achoz) (more links to some concepts there).
