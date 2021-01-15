---
title: achoz
description: chaos from a to z
date: 2021-01-15 22:42:00
gallery: 2020-11-21 achoz
image: /gallery/2020-11-21 achoz.jpg
permalink: achoz
redirect_from:
  - 2020-11-21 achoz 
  - zohca
  - chaos
layout: page
published: true
---

# {{ page.description }}

[![{{ page.image }}]({{ page.image }})](/gallery#{{ page.gallery }})

[[ahoxus](/)] helps you to reduce all your money needs down to zero.

**achoz**, by ahoxus, is a simple and free/libre open source app to organize and search through all your data offline-first (once you normalize it).

(this is another way to view the [[uproot](/uproot)] project. they're both the same).

[[subscribe](/#subscribe)] for a better chance of [[joining](/join)] the beta release.

# demonstration

please see the link below. it is still just a proof of concept.

it uses [a slimmed down forked version of shiori](https://github.com/cauerego/shiori), a bookmark keeper, and it's hosted on a free account from digital ocean (gently offered through their "hub for good" plan).

the bookmarks there are mostly random (from cregox personal history). there are over 3500 items you can instantly search through (not yet inside their cached content). and it works even offline (if you can set it up yourself) - it even caches supported pages with images (over 5GB in this case) for offline viewing!

soon, achoz will eventually be possible and easy to install, and it will automatically index through all your offline files (as long as they are in an open format).

i[achoz.ahoxus.org](http://achoz.ahoxus.org)

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

using [#**magict**](#origin) scripts with termux, git and rsync, we replace most of your google/microsoft needs:

- files: syncthing, nextcloud, fossil, and/or rsync
- photos: magict to reduce older unselected photos size periodically on files
- music: any radio app? TK
- videos: magict plus lbry? TK
- office: nextcloud and libre office? docs, sheets and slides TK
- server: tilde clubs? TK netlify? anyway, any free servers work, easy to migrate with magict, including dns

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
