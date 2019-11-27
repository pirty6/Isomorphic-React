#!/bin/bash
# Convert pptx to pdf
#libreoffice --headless --convert-to pdf *.pptx

# Convert pdf to png
for pdfile in *.pdf ; do
  convert -density 150 "${pdfile}" -quality 90 "${pdfile%.*}".png
done

# Remove pdf files
#rm *.pdf

#Remove pptx files
#rm *.pptx
