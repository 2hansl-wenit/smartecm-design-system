# Prepare an allowlisted, static-only preview. Does not deploy.
param([string]$RepoPath = (Split-Path -Parent $PSScriptRoot))
$ErrorActionPreference = 'Stop'
$repo = (Resolve-Path -LiteralPath $RepoPath).Path
$dist = Join-Path $repo 'preview-dist'
if (Test-Path -LiteralPath $dist) { Remove-Item -LiteralPath $dist -Recurse -Force }
New-Item -ItemType Directory -Force -Path (Join-Path $dist 'styles') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $dist 'tokens') | Out-Null
foreach ($file in @('index.html','documents.html')) {
  $source = Join-Path $repo $file
  if (-not (Test-Path -LiteralPath $source)) { throw "Missing required file: $file" }
  Copy-Item -LiteralPath $source -Destination (Join-Path $dist $file)
}
Get-ChildItem (Join-Path $repo 'styles') -File -Filter '*.css' | Copy-Item -Destination (Join-Path $dist 'styles')
Copy-Item (Join-Path $repo 'tokens/tokens.json') (Join-Path $dist 'tokens/tokens.json')
New-Item -ItemType Directory -Force -Path (Join-Path $dist 'assets') | Out-Null
foreach ($asset in @('로고_smartecm.png','로고_smartecm_w.png','패키지이미지_배경없음.png')) {
 Copy-Item -LiteralPath (Join-Path $repo ('assets/' + $asset)) -Destination (Join-Path $dist 'assets')
}
New-Item -ItemType Directory -Force -Path (Join-Path $dist 'scripts') | Out-Null
Copy-Item -LiteralPath (Join-Path $repo 'scripts/document-library.js') -Destination (Join-Path $dist 'scripts/document-library.js')
# Publish only reviewed public AI-readable summaries.
New-Item -ItemType Directory -Force -Path (Join-Path $dist 'ai') | Out-Null
foreach ($guide in @('document.md','ui.md')) {
  Copy-Item -LiteralPath (Join-Path $repo ('ai/' + $guide)) -Destination (Join-Path $dist ('ai/' + $guide))
}
# Only copy tokens actually required by the demo. No reference docs, source Skill or Git metadata.
Write-Host "Static preview assembled: $dist" -ForegroundColor Green
Write-Host 'Review the HTML/CSS/JSON content before publishing on an external Vercel URL.'
