---
title: ioniq
description: hyundai made the best ev battery and nobody knows it
date: 2021-09-14 21:22:00
gallery: 2021-03 ioniq
image: /gallery/2021-03 ioniq.jpeg
permalink: ioniq
redirect_from:
  - 2021-03 ioniq
  - hyundai
layout: page
published: true
---

# {{ page.description }}

[![{{ page.image }}]({{ page.image }})](/gallery#{{ page.gallery }})

it's on sale from april to september 2021 in many different places, such as [[olx](https://m.olx.pt/d/anuncio/oferta-hyundai-ioniq-28kwh-full-eletric-98mm-c-7-anos-de-garantia-IDGrlQ1.html)].

"the best [[ev](/ev)] battery" on the market means:

- it's the most economic one.
- even after 5 years and 90 thousand km, it's still at 100%.
- charges from 5 to 94 in just 40 minutes.
- drive up to 180km real scenario.

here's some pictures as reference to the art we will soon make on it.

<section id="thumbnails">
  {% assign gallery = site.static_files | where: "image", true | reverse %}
  {% for image in gallery %}
  {% if image.path contains "/ioniq/" %}
  <article>
   <a name="{{ image.name }}" />
   <h4>[{{ image.basename | replace: "_", " " }}](#{{ image.name }})</h4>
   <a class="thumbnail" href="{{ image.path }}" data-position="{{ site.thumbnail_position }}"><img src="{{ image.path }}" alt="{{ image.basename }}" /></a>
  </article>
  {% endif %}
  {% endfor %}
</section>
