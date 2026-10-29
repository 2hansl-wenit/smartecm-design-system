# Instructions for maintaining SmartECM Design System

- This repository is the **canonical** shared design-system and skill source.
- Read README.md and SKILL.md before changing UI guidance.
- Treat tokens/tokens.json and references/*.md as one versioned contract; change examples, rules, and version notes together when applicable.
- v0.1.0 values are draft. Do not mark any design value as user-approved without explicit approval.
- Favor focused edits, no unrequested dependencies, no proprietary font files, no personal data or secrets.
- Keep Codex/ChatGPT adoption instructions accurate; installation does not imply automatic synchronization.
- When modifying this repository, record significant decisions in docs/decisions.md.

- For report/proposal or A4 document work, read references/document-style.md and tokens/document-tokens.json first; keep style synchronized with styles/document.css and documents.html. Do not publish identifying content from client reports in the public preview.

## SmartECM company repository policy

- Canonical origin is `git@github.com:2hansl-wenit/smartecm-design-system.git`, branch `main`. Preserve the old GitLab and old local checkout. Never push to personal repositories.
- Apply `$smartecm-ui` for frontend UI, dashboard, component and A4 document work.
- Read `company/smartecm-profile.md` and `company/company-tokens.json` before design changes.
- Keep customer content, infrastructure addresses, secrets, private product internals and credentials out of public preview assets.
- Maintain independent Git history; never push company-only changes to the personal GitHub remote.
- For release changes, check layout/interaction behavior, source claims, print output and accessibility before merging.

- Keep the existing Vercel smart-ecm/smartecm-design-preview project. Use the company GitHub main integration with sh scripts/build-preview.sh and preview-dist. Never create a replacement project or connect a personal repository.
