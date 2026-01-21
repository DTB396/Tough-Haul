{% comment %}
============================================================
SCHEMA.ORG STRUCTURED DATA - TEMPLATE
Update values in _config.yml to customize for your client
============================================================
{% endcomment %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "{{ site.schema_type | default: 'ProfessionalService' }}",
  "@id": "{{ site.url }}/#organization",
  "name": "{{ site.company.name | default: site.title }}",
  "url": "{{ site.url }}",
  "logo": "{{ site.url }}{{ site.logo }}",
  "image": "{{ site.url }}/assets/images/og.jpg",
  "description": "{{ site.description | escape }}",
  {% if site.company.phone_link %}
  "telephone": "{{ site.company.phone_link }}",
  {% endif %}
  {% if site.company.email %}
  "email": "{{ site.company.email }}",
  {% endif %}
  "priceRange": "{{ site.company.price_range | default: '$$' }}",
  "paymentAccepted": "Cash, Check, Credit Card",
  "currenciesAccepted": "USD",
  {% if site.company.founding_date %}
  "foundingDate": "{{ site.company.founding_date }}",
  {% endif %}
  {% if site.company.address_line %}
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{ site.company.address_line }}",
    "addressLocality": "{{ site.company.address_locality }}",
    "addressRegion": "{{ site.company.address_region }}",
    "postalCode": "{{ site.company.postal_code }}",
    "addressCountry": "{{ site.company.country | default: 'US' }}"
  },
  {% endif %}
  {% if site.company.geo %}
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "{{ site.company.geo.lat }}",
    "longitude": "{{ site.company.geo.lng }}"
  },
  {% endif %}
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday"
      ],
      "opens": "{{ site.company.hours.weekday_open | default: '09:00' }}",
      "closes": "{{ site.company.hours.weekday_close | default: '17:00' }}"
    }
  ]
  {% if site.social %}
  ,"sameAs": [
    {% if site.social.facebook %}"{{ site.social.facebook }}"{% endif %}
    {% if site.social.twitter %}{% if site.social.facebook %},{% endif %}"https://twitter.com/{{ site.social.twitter }}"{% endif %}
    {% if site.social.instagram %}{% if site.social.facebook or site.social.twitter %},{% endif %}"https://instagram.com/{{ site.social.instagram }}"{% endif %}
    {% if site.social.linkedin %}{% if site.social.facebook or site.social.twitter or site.social.instagram %},{% endif %}"{{ site.social.linkedin }}"{% endif %}
  ]
  {% endif %}
}
</script>

{% comment %} WebPage Schema {% endcomment %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "{{ page.title | default: site.title }}",
  "description": "{{ page.description | default: site.description | escape }}",
  "url": "{{ page.url | absolute_url }}",
  "isPartOf": {
    "@id": "{{ site.url }}/#website"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "{{ page.featured_image | default: site.default_og_image | absolute_url }}"
  }
}
</script>
