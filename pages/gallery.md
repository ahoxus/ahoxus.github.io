---
title: gallery
description: media and photo updates
date: 2020-10-25 14:00:00
permalink: gallery
redirect_from:
  - photos
  - media
layout: page
published: true
---

# {{ page.description }}

<section id="thumbnails">
  {% assign gallery = site.static_files | where: "image", true | reverse %}
  {% for image in gallery %}
  {% if image.path = site.gallery_dir +"/"+image.name %}
  <article>
   <a name="{{ image.name }}" />
   <h4>[{{ image.basename | replace: "_", " " }}](/{{ image.basename }})</h4>
   <a class="thumbnail" href="{{ image.path }}" data-position="{{ site.thumbnail_position }}"><img src="{{ image.path }}" alt="{{ image.basename }}" /></a>
  </article>
  {% endif %}
  {% endfor %}
</section>

