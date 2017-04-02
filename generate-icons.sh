#!/usr/bin/env bash
inkscape -z -e apple-touch-icon.png    -w  180 -h  180 icon.svg
inkscape -z -e tile.png    -w  558 -h  558 icon.svg
convert tile.png -crop 558x270+0+135 tile-wide.png
convert tile.png -resize 32x32 favicon.ico

inkscape -z -e app-icon_LDPI.png    -w  36 -h  36 icon.svg
inkscape -z -e app-icon_MDPI.png    -w  48 -h  48 icon.svg
inkscape -z -e app-icon_HDPI.png    -w  72 -h  72 icon.svg
inkscape -z -e app-icon_XHDPI.png   -w  96 -h  96 icon.svg
inkscape -z -e app-icon_XXHDPI.png  -w 144 -h 144 icon.svg
inkscape -z -e app-icon_XXXHDPI.png -w 192 -h 192 icon.svg
inkscape -z -e app-icon_WEB.png     -w 512 -h 512 icon.svg
