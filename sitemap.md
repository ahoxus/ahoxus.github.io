---
permalink: /sitemap/
layout: page
title: sitemap
sitemap: false
menu: true
---

{% for page in site.pages %}
  {% if page.lang == undefined %}
    {% if page.title %}
      {% if page.sitemap != false %}
- [{{page.title}}]({{ page.url | prepend: site.baseurl }})
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}

# pages in portuguese

{% for page in site.pages %}
  {% if page.lang == 'pt' %}
    {% if page.title %}
      {% if page.sitemap != false %}
- [{{page.title}}]({{ page.url | prepend: site.baseurl }})
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}
