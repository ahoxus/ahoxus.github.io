---
permalink: /sitemap/
layout: page
title: sitemap
sitemap: false
menu: true
---

{% for page in site.pages %}
  {% if page.title %}
    {% if page.sitemap != false %}
- [{{page.title}}]({{ page.url | prepend: site.baseurl }})
    {% endif %}
  {% endif %}
{% endfor %}
