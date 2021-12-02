---
title: achoz
description: chaos from a to z
date: 2021-12-02 14:42:00
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
---

# {{ page.description }}

[![{{ page.image }}]({{ page.image }})](/gallery#{{ page.gallery }})

[[ahoxus](/)] helps you to reduce all your money needs down to zero.

**achoz**, by ahoxus, is a simple and free/libre open source app to organize and search through all your data offline-first (once you normalize it).

(this is another way to view the [[uproot](/uproot)] project. they're both the same).

[[subscribe](/#subscribe)] for a better chance of [[joining](/join)] the beta release.

# story

cregox have a lot of data. files, emails, messages, web links, web content, etc. they a also are of different kinds; text, video, audio, apps, etc.

when trying to find something they do remember to be there, sometimes it gets impossible!

the goal of achoz is making cregox self-data-searching-life not only easier, but enable a new world of possibilities, in which they don't have to worry anymore how to store data for themselves (as long as it's stored with open and free standards).

so a lot of it goes through self education to normalize the data a bit.

after that, we have all of it replicated through all our devices and some cloud, with just one single search away to find whatever might be needed!

(on another instance, 90gb of MP3 will be turned into 10gb with insignificant loss, so the whole library can easily be used everywhere)

# demonstration

please see the link below. it is still just a proof of concept.

the data there comes mostly at random from cregox personal files (around 15gb of them).

it works even offline (if you can set it up yourself).

it even shows images and videos (look for them).

(beware they might be pornographic or otherwise disturbing for some viewers, while in alpha stage)

[achoz.ahoxus.org](http://achoz.ahoxus.org)

# roadmap (outdated)

## first

- create script #magictill to slim down files
- create a search able to instantly search through all files
- setup syncthing across all devices (done)
- get a cloud server to be a linked device (done)

## second

- make magictill automated for older files
- make all the data easy to access for the public (not just the index)

## third

- magictill should also facilitate file normalisation
- make a new roadmap
- get to all technical details

# technical

## talk

using emails we can replace all your facebook and other such needs:

- identity: opennic for free nameserver (in the long term) or ipv6 + self hosting
- site: your unique profile using [#data](#data)
- forums: a mailing list using sourcehut + fossil-scm
- messengers: with delta chat and jitsi (plus telegram, telephones, and voip, for ringing), and perhaps briar
- social media: mastodon, scuttlebutt
- irc: much better with forums and messengers

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
- bank: bitcoin, of course... good to have money, even without any need for it!

## search

this is the most complex, yet, once everything else is set, it's also the simplest one to resolve!

- google, bing: use searx instead. or duck.
- pc: a #mobileofflinefirst webapp for lunr or meili, plus ripgrepall

# subscribe
[[subscribe](/#subscribe)] for a better chance of [[joining](/join)] the beta release.

# origin
started based on [this description by cregox](http://cregox.net/achoz) (more links to some concepts there).
