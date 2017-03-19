#!/usr/bin/env bash
inkscape -z -e apple-touch-icon.png    -w  180 -h  180 icon.svg
inkscape -z -e tile.png    -w  558 -h  558 icon.svg
convert tile.png -crop 558x270+0+135 tile-wide.png
convert tile.png -resize 32x32 favicon.ico
