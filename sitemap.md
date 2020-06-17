---
permalink: /sitemap/
layout: page
title: sitemap
sitemap: false
menu: true
---

# menu

{% for page in site.pages %}
  {% if page.layout == 'page' %}
    {% if page.menu == true %}
      {% if page.title %}
        {% if page.sitemap != false %}
- [{{page.title}}]({{ page.url | prepend: site.baseurl }})
        {% endif %}
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}

# more

{% for page in site.pages %}
  {% if page.layout == 'page' %}
    {% if page.menu == false %}
      {% if page.lang == undefined %}
        {% if page.title %}
          {% if page.sitemap != false %}
- [{{page.title}}]({{ page.url | prepend: site.baseurl }})
          {% endif %}
        {% endif %}
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}

# pages in portuguese

{% for page in site.pages %}
  {% if page.layout == 'page' %}
    {% if page.menu == false %}
      {% if page.lang == 'pt' %}
        {% if page.title %}
          {% if page.sitemap != false %}
- [{{page.title}}]({{ page.url | prepend: site.baseurl }})
          {% endif %}
        {% endif %}
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}

# drafts

{% for page in site.pages %}
  {% if page.layout == 'draft' %}
    {% if page.title %}
      {% if page.sitemap != false %}
- [{{page.title}}]({{ page.url | prepend: site.baseurl }})
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}
