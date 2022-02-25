require("dotenv").config();
// Dependencies
const fs = require("fs");
const Koa = require("koa");
const Router = require("@koa/router");
const Mastodon = require("mastodon-api");

// Setting up the things
const app = new Koa();
const router = new Router();
const masto = new Mastodon({
  access_token: process.env.MASTODON_ACCESS_KEY,
  api_url: `https://${process.env.MASTODON_API_ENDPOINT}`,
});

console.log(process.env.MASTODON_ACCESS_KEY);
console.log(process.env.MASTODON_API_ENDPOINT);

// Routers 'n' stuff
router.get("/", async (ctx, next) => {
  await next();
  ctx.response.type = "html";
  ctx.response.body = fs.createReadStream("./views/toot.html");
});

router.get("/dummy.json", async (ctx, next) => {
  await next();
  ctx.response.type = "json";
  ctx.response.body = fs.createReadStream("./dummy.json");
});

router.get("/toots.json", async (ctx, next) => {
  ctx.type = "json";
  await masto
    .get("timelines/home", {})
    .then((response) => {
      ctx.body = JSON.stringify(response.data);
    })
    .catch((error) => {
      ctx.body = error;
    });
  await next();
});

// Error handling
app.on("error", (err) => {
  log.error("Server error", err);
});

// Turn it on
app.use(router.routes()).use(router.allowedMethods());
app.listen(2209, () => {
  console.log("App listening on http://localhost:2209");
});
