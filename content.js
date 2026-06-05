const STYLE_ID = "youtube-shorts-blocker-style";

function addShortsBlockerStyles() {
  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    a[href^="/shorts"],
    a[href*="youtube.com/shorts"],
    ytd-guide-entry-renderer:has(> a[title="Shorts"]),
    ytd-guide-entry-renderer:has(a[href^="/shorts"]),
    ytd-guide-entry-renderer:has(a[title="Shorts"]),
    ytd-guide-entry-renderer:has(a[aria-label="Shorts"]),
    ytd-guide-entry-renderer:has(yt-formatted-string[title="Shorts"]),
    ytd-guide-entry-renderer:has(#endpoint[title="Shorts"]),
    ytd-mini-guide-entry-renderer:has(a[href^="/shorts"]),
    ytd-mini-guide-entry-renderer:has(a[title="Shorts"]),
    ytd-mini-guide-entry-renderer:has(a[aria-label="Shorts"]),
    ytd-rich-section-renderer:has(a[href*="/shorts"]),
    ytd-reel-shelf-renderer,
    ytd-reel-item-renderer,
    ytd-rich-item-renderer:has(a[href*="/shorts"]),
    ytd-video-renderer:has(a[href*="/shorts"]),
    ytd-grid-video-renderer:has(a[href*="/shorts"]),
    ytd-compact-video-renderer:has(a[href*="/shorts"]),
    yt-lockup-view-model:has(a[href*="/shorts"]),
    ytm-reel-shelf-renderer,
    ytm-shorts-lockup-view-model {
      display: none !important;
    }
  `;
  document.documentElement.append(style);
}

function redirectShortsToHome() {
  if (window.location.pathname.startsWith("/shorts")) {
    window.location.replace("https://www.youtube.com/");
  }
}

function blockShortsClicks(event) {
  const shortsTarget = event.target.closest(
    'a[href^="/shorts"], a[href*="youtube.com/shorts"], a[title="Shorts"]'
  );

  if (!shortsTarget) {
    return;
  }

  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.replace("https://www.youtube.com/");
}

function blockShorts() {
  addShortsBlockerStyles();
  // Prevent directly opening a /shorts URL.
  redirectShortsToHome();
}

document.addEventListener("click", blockShortsClicks, true);
document.addEventListener("yt-navigate-start", redirectShortsToHome);
document.addEventListener("yt-navigate-finish", blockShorts);

blockShorts();

let isBlockScheduled = false;

const observer = new MutationObserver(() => {
  if (isBlockScheduled) {
    return;
  }

  isBlockScheduled = true;

  requestAnimationFrame(() => {
    isBlockScheduled = false;
    blockShorts();
  });
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});
