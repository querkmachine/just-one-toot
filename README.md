# Just One Toot

Just One Toot (JOT for short) is a [Mastodon](https://joinmastodon.org) "client" for read-only display of your main Mastodon feed. As per its name, it shows just one toot at a time, making it well-suited for small-screen devices like old tablets or monitors you might otherwise have gathering dust.

Made because I have some old tablets and monitors gathering dust (and also to experiment with Koa for the first time).

## Usage

### Setting up JOT

JOT runs on [Node.js](https://nodejs.org/en/). You'll need that.

1. Clone/download the JOT repo.
2. In the repo directory, run `npm install` to install dependencies.

### Setting up credentials

1. On your Mastodon instance, go to Settings → Development.
2. Create a new application. Name it whatever you want, an give it the `read`, `read:accounts` and `read:statuses` permissions.
3. Copy the access token it gives you into `.env.example`.
4. Update the endpoint URL in `.env.example` to match the URL for your Mastodon instance.
5. Rename `.env.example` to `.env`.

### Running JOT

1. Run `npm run serve` to start a local server that should (if all went well) display the most recent 20 toots from your main timeline in a little cycling fashion.
2. That's about it. Put the script on a server or a Raspberry Pi or something if you want, then load it up on a spare monitor or tablet to put on display.
3. If you put it on a smartphone or tablet (I only tested this on iPhones and iPads), I recommend hitting Share → Add to Home Screen to get a nicer version without the browser UI. 

## Disclaimer

I made this in like a day. It's offered with no support, no warranty, no guarantee it'll be maintained or work in iOS 9 (it doesn't, I tried). 