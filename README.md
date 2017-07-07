# Teampulse Public Dashboard
![Dashboard TV version](tv_screenshot.jpg)

The dashboard is intended to use during the Race Across America 2017. It gather informations from all the Social media used by the [swiss Teampulse team](http://www.teampulse.ch): Youtube, Facebook, Instagram, Flickr

Embeds are used instead of raw API to provide a seamless display of the posts regardless of the post content (which can be really different one from another)

## Feature section 'A la une'

One section of the dashboard can be customised with either:
* A Flickr photoset
* A (live) Youtube video
* A Youtube playlist
* A (live) Facebook video

## 2 design: TV & Scroll

The system can be used on 
* Full HD TV with [https://teampulse.netlify.com/tv](https://teampulse.netlify.com/tv) with autoplay feature
* Desktop/mobile [https://teampulse.netlify.com/](https://teampulse.netlify.com/)

## Server

To standardize informations from the social medias and metrics provided by the sensors (which are developped at [Heig-vd](https://heig-vd.ch), the system uses a nodejs server: https://github.com/MediaComem/teampulse-server

## Enhancement

* Improve structure
* Improve CSS organisation
