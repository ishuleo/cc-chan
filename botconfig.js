module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ".", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", //Support Server Link
  Token: process.env.Token || "ODQyOTk0MTIwODQ2MjEzMTYx.YJ9ZdA.NPpzUEHCuDmvKD_6IOMRE3vTLno", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "842994120846213161", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "DUNiixJYcEWYdWW51XBYpz084a4Mcc6H", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL: "https://c.tenor.com/r2DGstl2IWEAAAAC/raiden-shogun-ei.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "0.0.0.0", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.
  
  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "Komi cant communicate", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

   // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "ummm.ishuleo.repl.co", //- The host name or IP of the lavalink server.
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "leoash2906", //- The password of the lavalink server.
    secure: true, // Set this to true if the lavalink uses SSL. if not set it to false.
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "aee709ecc22d4d3dbf6de4d67fcbcf5b", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "7745ab148346435aa0966db561735338", //Spotify Client Secret
  },
};
