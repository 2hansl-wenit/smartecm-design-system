#!/usr/bin/env sh
# Legacy GitLab/Vercel deployment entrypoint is intentionally disabled.
# Production is deployed through the company GitHub main -> Vercel integration.
# No tokens, team IDs, project IDs, or host-specific credentials are stored here.
set -eu
echo 'Legacy deployment disabled. Use the existing Vercel Git integration.' >&2
exit 1
