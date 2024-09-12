// SQS MODS EXPAND SECTION PLUGIN START
var preview = "hide"; // Add jQuery if you don't have it already
// Additional CSS for modal (convert it into JS format)
var css = `
  .fhmodal {
    background-color: rgba(0,0,0,0.6);
    z-index: 999999999;
  }
  .fhmodal .page-section > .content-wrapper {
    width: auto;
  }
`;
var style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

// Load external scripts using JavaScript for defer or async loading
var expandScript = document.createElement('script');
expandScript.src = "https://aws-eu-sqsmods.s3.eu-west-2.amazonaws.com/assets/expand-sections-plugin/js/expand-v3.min.js";
expandScript.defer = true;
document.head.appendChild(expandScript);

// SQS MODS EXPAND SECTION PLUGIN END

// Load other external scripts
var backgroundScrollScript = document.createElement('script');
backgroundScrollScript.src = "https://cdn.jsdelivr.net/gh/willmyethewebsiteguy/backgroundScroll@1.1.001/javascript.min.js";
document.head.appendChild(backgroundScrollScript);

// Watch Video Circle Ghost
var videoCircleScript = document.createElement('script');
videoCircleScript.src = "https://mikeambs.squarespace.com/s/vpa-7-1.js";
document.head.appendChild(videoCircleScript);

// Video Backgrounds Utils
window.video_backs_settings = {
  buildCustomVideos: true,
  useProviderThumb: false,
  disableVideos: false,
  disableVideosOnAdmin: false,
  scrollDebounce: 50,
  offsetCheck: '1%',
  pauseOnHidden: true,
  pauseOnBlur: false
};

var videoBackgroundsScript = document.createElement('script');
videoBackgroundsScript.src = "//assets.squarewebsites.org/video-backgrounds/video-backgrounds.min.js";
document.head.appendChild(videoBackgroundsScript);

// Plugin Video Lightbox
var pluginVideoLightboxCSS = document.createElement('link');
pluginVideoLightboxCSS.href = "/s/plugin-video-lightbox.css";
pluginVideoLightboxCSS.rel = "stylesheet";
document.head.appendChild(pluginVideoLightboxCSS);

var pluginVideoLightboxScript = document.createElement('script');
pluginVideoLightboxScript.src = "/s/plugin-video-lightbox.js";
document.head.appendChild(pluginVideoLightboxScript);

pluginVideoLightbox({"autoplay":"true","closeOnClickOutside":"false"});

// Lazy Summaries
var lazySummariesScript = document.createElement('script');
lazySummariesScript.src = "//assets.squarewebsites.org/lazy-summaries/lazy-summaries.min.js";
document.head.appendChild(lazySummariesScript);

// Plugin RSS Feed
var pluginRSSFeedScript = document.createElement('script');
pluginRSSFeedScript.src = "/s/plugin-rss-feed.js";
document.head.appendChild(pluginRSSFeedScript);

pluginRSSFeed();

// Gumroad script
var gumroadScript = document.createElement('script');
gumroadScript.src = "https://gumroad.com/js/gumroad.js";
document.head.appendChild(gumroadScript);
