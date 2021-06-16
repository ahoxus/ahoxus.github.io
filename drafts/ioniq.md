---
title: ioniq
description: hyundai made the best ev battery on the market, and nobody knows it
date: 2021-06-16 17:22:00
gallery: ioniq
image: /gallery/ioniq.jpg
permalink: ioniq
redirect_from:
  - hyundai
layout: draft
published: true
---

# {{ page.description }}

[![{{ page.image }}]({{ page.image }})](/gallery#{{ page.gallery }})

this was ahoxus newest acquisition. the best [ev](/ev) on the market means it's the most economic one and even after 5 years and 90 thousand km, it's still at 100%. charges from 5 to 94 in just 40 minutes. then drive up to 180km real scenario.

here's some pictures as reference to the art we will make on it.

<section id="thumbnails">
  {% assign gallery = site.static_files | where: "image", true | reverse %}
  {% for image in gallery %}
  {% if image.path contains "/ioniq/" %}
  <article>
   <a name="{{ image.name }}" />
   <h4>[{{ image.basename | replace: "_", " " }}](/{{ image.basename }})</h4>
   <a class="thumbnail" href="{{ image.path }}" data-position="{{ site.thumbnail_position }}"><img src="{{ image.path }}" alt="{{ image.basename }}" /></a>
  </article>
  {% endif %}
  {% endfor %}
</section>
