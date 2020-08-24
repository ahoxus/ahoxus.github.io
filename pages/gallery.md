---
title: gallery
description: media and photo updates
date: 2020-08-24 01:38:00
permalink: /gallery/
redirect_from:
  - /photos/
  - /media/
layout: page
published: true
---

# {{ page.description }}

<section id="thumbnails">
  {% assign gallery = site.static_files | where: "image", true %}
  {% for image in gallery %}
<article>
  <a class="thumbnail" href="/{{ site.gallery_dir }}/{{ image.name }}" data-position="{{ site.thumbnail_position }}"><img src="/{{ site.gallery_dir }}/{{ image.name }}" alt="{{ image.basename }}" /></a>
  <h2>{{ image.basename | replace: "_", " " }}</h2>
</article>
  {% endfor %}
</section>

