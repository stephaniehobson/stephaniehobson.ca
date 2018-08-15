MVP:

- Deploy
- noindex typography file
- search for "wordpress" to find all internal links
    - add images to posts linking to /wp-content
- footer links
- link to tag list
- SEO
    - generate site map of current site and submit
        - make sure all current pages are being indexed
        - (I can create a site map myself from crawling data)
    -  export the Webmastertrools 404 and 500 reports
    - export the Search Console Perforamnce /Exclude (for redirects?)
    - get backlinks report
        - fix any 404s
    - crawl with screaming frog
    - after move submit new sitemap to Google
- do I need to add canonical links to new template?
    <link rel="canonical" href="http://stephaniehobson.ca/wordpress/2017/10/31/how-we-rebuilt-the-viewsourceconf-org-website/" />
- do I need to alias short URLs?
    <link rel='shortlink' href='http://stephaniehobson.ca/?p=792' />
- change from posts to blog?


Other:

- about
- Redirect old Wordpress URLs
  - all posts
- make slide share and videos take up full width of <main>
- symbol at end of blog posts (like bobulate's dog) (maincule?)
- review heading levels
- pagination for home page
- make sure heading levels are accurate on all pages
- useful 404 page
- twitter replacement, micro blogs
  - import Tweets
- service worker to cache articles
- Implement code syntax styling
- Update about page
- Decide on grid size and implement
- Decide on typography and implement
  - Fix heading levels for posts
- Review each post
- Next/Prev Links on individual posts (or other CTA at bottom of post)
- Reader view
- Write & implement summaries for posts
- Remove tags or categories? (remove all posts not webdesign?)
  - only categories
  - still need "webdesign" category? Isn't the whole blog about it?
- fix posts with <dl>s
- fix posts with HTML tags
- warning on out dated posts ("from before iPhone, from before Chrome, before CSS grid")
- most recent instagram and twitter posts
- share icons & links? (maybe I'm opposed to this? :P)
- pages:
    - talks
        - grouped by talk with links to resources, only show most recent slides(or video), dates presented link to Notist
    - portfolio/work
- blurb at end of blog posts introducing myself (comic book inspired? Imagine Eric Meyer is introducing me)
- "read more" buttons specific to content "see the code" "view the slides"


Done:

- favicon
- Tag archive, alphabetical with post count
- Archive pages
    - years
        - make year template descending
        - show post count
- display posts
  - add meta data
  - add structured data markup
- RSS feed
  - home
    - categories
    - make sure old Wordpress URLs still work
      - http://stephaniehobson.ca/feed/
        - gulp script to copy to /feed/ folder
        - GHP will serve index.xml as folder index \o/
      - http://stephaniehobson.ca/wordpress/category/webdesign/feed/
      - http://stephaniehobson.ca/wordpress/tag/conference/feed/
- demo/experiment pages
- styled 404 page
- review all tags and categories, attempt to standardize
- add category pages
- youtube short code
- slide share short code
- linting
