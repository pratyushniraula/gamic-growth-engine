
Replace the current 5 playbooks with the 7 new cold-outreach playbooks across the resources page, download page, and Kit.com tag mapping.

### Files to update

1. **src/pages/Resources.tsx** — Replace `playbooks` array with 7 entries (titles, descriptions, slugs, categories, page counts). Reuse existing 5 cover images and cycle 2 of them for the extra playbooks until new art is provided.

2. **src/pages/Download.tsx** — Replace `playbookData` map with 7 matching entries keyed by new slugs.

3. **supabase/functions/kit-subscribe/index.ts** — Update `playbookTags` map with 7 new slug → tag entries, then redeploy.

### New playbook list

| # | Title | Slug | Category | Pages |
|---|-------|------|----------|-------|
| 1 | The Ultimate Cold Email Playbook in 2026 | ultimate-cold-email-2026 | Cold Outreach | 48 |
| 2 | The Local Lead Gen Cold Outreach Playbook | local-lead-gen-outreach | Lead Generation | 34 |
| 3 | 5 Cold Email Scripts To Book CALLS INSTANTLY | cold-email-scripts-calls | Cold Outreach | 12 |
| 4 | Bullet-Proof Checklist To Avoid Spam | spam-checklist | Cold Outreach | 8 |
| 5 | 5 Plug-and-Play AI Workflows For Cold Outreach | ai-workflows-outreach | Growth | 22 |
| 6 | 4 Cold Email CTAs for Over $3M In Pipeline | ctas-3m-pipeline | Copywriting | 14 |
| 7 | 3 Subject Lines That Book You Calls This Week | subject-lines-calls | Copywriting | 10 |

Descriptions will be 1–2 sentence punchy copy describing what's inside each (drafted in implementation).

### Image strategy
Reuse existing 5 cover images now; the extras (#6, #7) will reuse `playbook-copywriting.jpg` and `playbook-cold-email.jpg`. You can swap in custom art later.

### Categories
Keep existing pills (`All`, `Cold Outreach`, `Lead Generation`, `Sales`, `Copywriting`, `Growth`) — all 7 fit cleanly.

### Deployment
Redeploy `kit-subscribe` after updating tag mapping so new slugs get tagged correctly in Kit.com.
