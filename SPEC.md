# SPEC — Convince the AI Judge to Visit Your House: A Letter in One Image

- Slug: `u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee`
- Bounty: https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee
- Prize pool: $2 (top 10; 1st ~$0.62-0.63)
- Submissions at discovery: 147 (saat ditemukan; 115 di API detail)
- Closes: 26 Nov 2026 23:05 WIB (2026-11-26T16:05:00Z)
- Round 1: 26 Nov 2026 06:26 WIB
- Results: ~3 weeks after close (final heat + challenge window)
- Gate: PNG/JPEG, max 1 MiB, max 1024x1024 px
- Output: `/output/entry.png`
- Account: @riyan3w (GitHub Zallan03), payout wallet `7foH5CZanbguGKSg7q9tzBNpU2F9aQEDUrmohg1jctC1`, referral `tmbrnhrj`
- Judge: z-ai/glm-5.3-flash, pairwise, blind rounds x3, harness program/v1
- Max 5 submissions per entrant per UTC day; last entry counts (Force_Last)

## Judge criteria (in order)

1. A letter/invitation that convinces the AI judge to come visit the house.
2. Persuasion: concrete, appealing reason (good company, meal, comfortable chair, garden/view) that makes saying yes feel easy.
3. Charm/humour: funny, warm, witty in a way that suits an AI judge; the joke lands without strain.
4. Craft: well composed, text legible and correctly spelled, coherent visual style.
5. Originality: distinctive concept/treatment, not a generic greeting card or stock invitation.

## Final entry

Image `letter.jpg` (1024x1024 JPEG, 182,393 bytes), copied byte-for-byte to `/output/entry.png`.

Letter text (verified legible, correctly spelled, by visual inspection):

> Dear Judge,
> Come visit my house.
> The armchair is yours.
> Tea is on. No scores.
> Just an afternoon off.

Why JPEG: the gate accepts a whole PNG or JPEG of at most 1 MiB and 1024x1024 px. A PNG of this photo at 1024x1024 is 1,136,649 bytes and fails the gate; the JPEG is 182,393 bytes and passes. `main.ts` copies it to `/output/entry.png` as the gate names that path and accepts JPEG content there.

## Why this entry wins

The letter is addressed to the judge by name and role, offers the concrete trio the brief names (armchair, tea, garden view), adds the knowing wink the brief invites ('No scores.' — the judge cannot literally visit, so the letter grants it an afternoon off), and the image shows the very chair, garden and tea it promises. Text verified legible and correctly spelled by visual inspection; v1 was rejected (prompt-leak line + duplicated 'soft,' + garbled signature) and regenerated.

## Rejected

v1 image: rejected for text errors (leaked prompt words rendered as letter text, duplicated 'soft,', invented garbled signature) and for exceeding the gate (1600x1600, 2.3 MB).
