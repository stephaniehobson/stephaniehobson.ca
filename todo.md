MVP:

- add canonical URLs
- Deploy
    - http://www.competa.com/blog/how-to-deploy-only-your-dist-folder-to-gh-pages-branch-github-pages/
- noindex typography file
- link to tag list
- add canonical link to all posts and pages, use fully qualified URL
  - add optional canonical parameter to posts to point to Hacks?
    <link rel="canonical" href="http://stephaniehobson.ca/wordpress/2017/10/31/how-we-rebuilt-the-viewsourceconf-org-website/">
- SEO
    - export the Webmaster tools 404 and 500 reports
    - export the Search Console Performance / Exclude (for redirects?)
    - get backlinks report
      - fix any 404s
    - crawl with screaming frog (can't save, find free tool replacement)
    - after move submit new sitemap to Google
- do I need to alias short URLs? ... can I?
    <link rel='shortlink' href='http://stephaniehobson.ca/?p=792' />
- change from posts to blog?
- 410 for deleted tags?


Other:

- shrink images on print styles post
- update coverflow page with new code & prefixes
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
- search for "wordpress" to find all internal links
  - add images to posts linking to /wp-content
- test iframes
- generate site map of current site and submit
      - make sure all current pages are being indexed
      - (I can create a site map myself from crawling data)
- footer links
- about
- Redirect old Wordpress URLs
  - all posts
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
