# kikbak.tv

Automated top 100 videos of the web.

How it works:

1. `Database` - A database with all the blogs and videos we have found. Hosted on mlab
2. `Jobs` - Scripts run hourly on the CI to scan for new videos and update stats (`src/jobs`)
3. `Website` - A static website generated from the data

## Job Schedule

- `0:00` - `scan-blogs` - Find new videos
- `0:10` - `remove-dead-videos` - Delete dead videos
- `0:20`- `update-stats` - Update stats for recent videos (Last 2 weeks)
- `0:30` - `make-video-list` + `deploy_prod` - Publish new static website

## Developing

```sh
# Install dependencies
yarn

# Make the video list
yarn make-video-list

# Start the development server for the website
yarn dev
```

<!--
const updates = {
  noRssButLooksGood: [
    'https://rockshotmagazine.com/sound-vision/',
    'https://www.subbacultcha.be/editorial/',
    'http://wearerawmeat.com/video/feed/',
    'https://www.thewildhoneypie.com/videos', // looks awesome no feeds
    'http://www.canthisevenbecalledmusic.com/feed/',
    'http://www.syffal.com/videos',
    'https://www.stimulateyoursoul.com/music',
    'https://www.gigwise.com/news?page=new-releases',
    'https://www.sputnikmusic.com/',
    'https://www.backyardopera.com/music-2',
    'www.slantmagazine.com',
    'http://sniffers.co.nz/'
  ],

  feedNotFound: [
    'Next2Shine.com/feed/', // connection refused
    'http://www.lagasta.com/feed/', // 503
    'http://www.causeequalstime.com/category/videos/feed/', // 403
    'http://shadazz.fr/feed/', // bad xml
    'http://noizzwebzine.blogspot.com/feeds/posts/default', // 404 but also feedburner
    'http://planetapopradio.blogspot.com/feed/' // 404
  ]
}; -->
