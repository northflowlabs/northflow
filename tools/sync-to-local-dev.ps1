param(
  [string]$DriveRepo = "G:\My Drive\Northflow\Northflow Website REPO\northflow_technologies\northflow_technologies",
  [string]$LocalRepo = "C:\dev\northflow_technologies"
)

$ErrorActionPreference = "Stop"

Write-Host "Syncing source-only files" -ForegroundColor Cyan
Write-Host "  From: $DriveRepo" -ForegroundColor DarkGray
Write-Host "    To: $LocalRepo" -ForegroundColor DarkGray

# Sync only the source + config files we actually edit.
# Keep node_modules and .next strictly local to avoid corruption in synced folders.
$items = @(
  "src",
  "public",
  "package.json",
  "package-lock.json",
  "next.config.mjs",
  "tsconfig.json",
  "tailwind.config.js",
  "postcss.config.js",
  ".eslintrc.json",
  ".prettierrc",
  ".prettierignore",
  "next-env.d.ts",
  "README.md",
  ".env.example"
)

foreach ($item in $items) {
  $from = Join-Path $DriveRepo $item
  $to = Join-Path $LocalRepo $item

  if (Test-Path $from) {
    if ((Get-Item $from).PSIsContainer) {
      robocopy $from $to /MIR /NFL /NDL /NJH /NJS /NP | Out-Null
    } else {
      $toDir = Split-Path $to -Parent
      if (!(Test-Path $toDir)) {
        New-Item -ItemType Directory -Path $toDir | Out-Null
      }
      Copy-Item -Force $from $to
    }
  }
}

Write-Host "Done." -ForegroundColor Green
Write-Host "Next:" -ForegroundColor Cyan
Write-Host "  cd $LocalRepo" -ForegroundColor DarkGray
Write-Host "  npm install" -ForegroundColor DarkGray
Write-Host "  npm run dev" -ForegroundColor DarkGray
