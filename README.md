# srsltid URL Cleaner

A browser extension for Chrome and Firefox that automatically removes the `?srsltid=` tracking parameter from URLs and redirects to the clean canonical version.

## Install
1. Download the zip from [Releases](../../releases)
2. Unzip it
3. Go to `chrome://extensions`, enable Developer mode, click Load unpacked, select the folder

## How it works
Uses the `webNavigation` API to detect navigation events. If `srsltid` is present in the query string, it strips it and redirects the tab before the page loads.
