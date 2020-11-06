---
title: confirmation
description: a template, to be sent over email
date: 2020-10-22 10:00:00
image: /img/dancing.gif
permalink: confirmation
redirect_from:
  - could
  - be
layout: draft
published: true
---

# {{ page.description }}

this template is taken from our latest email to a guest! he comes from lisbon airport and wants to pay for the ride.

the gif at the end is always a nice touch, isn't it?

# template

<div class="template" id="text">
dear #guest,

your registration to visit ahoxus is confirmed.

arrival: 2020-10-26 18:30
travel method: airplane and car ride
accommodation: trailer
departure: 2020-11-02

car ride amount: €240
security deposit amount: €256
payment method: cash on arrival
the deposit will be given back on departure

please make sure to bring warm clothes for the cool days in the mountain area.

for further information:
- how to get to ahoxus
https://ahoxus.org/map
- what to bring
https://ahoxus.org/stay
- car ride
https://cregox.net/car

i look forward to welcoming you!

and please write to me if you have any questions in the meantime.

with love,
caue

![{{ page.image }}]({{ page.image }})

rulote ahoxus, r da conchada
andraes, vila real
5000-751
portugal

---- cregox.net/ahoxus    +351 918424479
</div>

<button onclick="copyText()">copy to clipboard</button>

<script>
function copyText () {
     var text = document.getElementById("text");
     //text.select();
     //document.execCommand("copy");
     
     var currentRange;
     if (document.getSelection().rangeCount > 0) {
          currentRange = document.getSelection().getRangeAt(0);
          window.getSelection().removeRange(currentRange);
     } else {
          currentRange = false;
     }
 
     var CopyRange = document.createRange();
     CopyRange.selectNode(text);
     window.getSelection().addRange(CopyRange);
     document.execCommand("copy");
 
     window.getSelection().removeRange(CopyRange);
 
     if (currentRange) {
          window.getSelection().addRange(currentRange);
     }
}
</script>
