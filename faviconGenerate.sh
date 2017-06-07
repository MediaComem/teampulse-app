#!/bin/bash
cd "public"
gifsicle --explode favicon.gif
touch faviconBase64
> faviconBase64

for f in favicon.gif.*
 do 
   x=$(base64 --wrap=0 $f)
   echo -n "'data:image/png;base64,$x'," >> faviconBase64
 done

 rm -f favicon.gif.*