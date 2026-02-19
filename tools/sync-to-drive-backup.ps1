param(
  [string]$LocalRepo = "C:\dev\northflow_technologies",
  [string]$DriveRepo = "G:\My Drive\Northflow\Northflow Website REPO\northflow_technologies\northflow_technologies"
)

$ErrorActionPreference = "Stop"

Write-Host "Syncing source-only files (local -> drive backup)" -ForegroundColor Cyan
Write-Host "  From: $LocalRepo" -ForegroundColor DarkGray
Write-Host "    To: $DriveRepo" -ForegroundColor DarkGray

# Copy only source + config files.
# Keep node_modules and .next strictly local to avoid corruption in synced folders.
$dirs = @(
  "src",
  "public",
  "tools"
)

$files = @(
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

foreach ($dir in $dirs) {
  $from = Join-Path $LocalRepo $dir
  $to = Join-Path $DriveRepo $dir

  if (Test-Path $from) {
    robocopy $from $to /E /NFL /NDL /NJH /NJS /NP | Out-Null
  }
}

foreach ($file in $files) {
  $from = Join-Path $LocalRepo $file
  $to = Join-Path $DriveRepo $file

  if (Test-Path $from) {
    $toDir = Split-Path $to -Parent
    if (!(Test-Path $toDir)) {
      New-Item -ItemType Directory -Path $toDir | Out-Null
    }

    Copy-Item -Force $from $to
  }
}

Write-Host "Done." -ForegroundColor Green
