chrome.webNavigation.onBeforeNavigate.addListener(
  async (details) => {
    if (details.frameId !== 0) return;

    const url = new URL(details.url);

    if (!url.searchParams.has("srsltid")) return;

    url.searchParams.delete("srsltid");

    const cleanUrl = url.toString();

    await chrome.tabs.update(details.tabId, { url: cleanUrl });
  }
);
