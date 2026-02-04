# Create output directory
New-Item -ItemType Directory -Force -Path public/optimized | Out-Null

# Compress each .mp4 video in public/
Get-ChildItem -Path public -Filter *.mp4 | ForEach-Object {
    $input = $_.FullName
    $filename = $_.BaseName
    $output = "public/optimized/$filename.mp4"

    Write-Host "🎬 Compressing: $($_.Name)"
    
    & "C:\Users\micha\Downloads\ffmpeg-7.1.1-essentials_build\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe" `
      -i $input `
      -vf "scale=1280:-2" `
      -c:v libx264 -crf 28 -preset fast `
      -c:a aac -b:a 128k `
      $output
}
