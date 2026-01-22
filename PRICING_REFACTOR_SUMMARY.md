# Pricing Removal & Dollar Sign Ranges - Summary

**Date:** January 21, 2026 | **Status:** ✅ Completed | **Commit:** 8599a24d

## Overview

Removed all public-facing specific pricing numbers and replaced them with generic dollar sign ranges ($, $$, $$$, $$$$) to encourage customer contact for custom quotes.

---

## Files Modified (9 total)

### 1. **pricing.html** - Pricing Page
**Changes:**
- **Single Item:** "$75" → "$"
- **1/4 Truck Load:** "$175" → "$ - $$"
- **1/2 Truck Load (Most Common):** "$300" → "$$ - $$$"
- **Full Truck Load:** "$500" → "$$$ - $$$$"

**Special Items Section:**
- Refrigerators: "$100" → "Estimate available on request"
- TVs & Monitors: "$35" → "Estimate available on request"
- Hot Tubs: "$350" → "Estimate available on request"
- Shed Removal: "$400" → "Estimate available on request"
- Tires: "$10-15 each" → "Contact for estimate"
- Exercise Equipment: "$75" → "Estimate available on request"

### 2. **_data/faq.yml** - FAQ Data
**Changes:**
- "How do you determine pricing?" → Language changed from "pricing" to "charge based on space"
- "The price we quote is the price you pay" → "The estimate we quote is what you pay"
- "Do you provide free estimates?" → Changed "upfront price" to "upfront estimate"
- "Are there any hidden fees?" → Changed "price" language to "estimate" language

### 3. **_data/SITE-OWNER-EDIT-HERE/faq.yml** - Editable FAQ Template
**Changes:** Same as main FAQ file (mirrored updates)

### 4. **_data/home.yml** - Homepage Data
**Changes:**
- Services summary: "upfront price" → "upfront estimate"
- Process step 2: "We Give You a Price" → "We Give You an Estimate"
- Why Us section: "Upfront Pricing" → "Upfront Estimates"
- Why Us description: "The price we quote is the price you pay" → "The estimate we quote is what you pay"

### 5. **_config.yml** - Global Configuration
**Changes:**
- Reassurance: "Upfront Transparent Pricing" → "Upfront Transparent Estimates"
- Value prop: "No hidden fees - price quoted is price paid" → "No hidden fees - estimate quoted is what you pay"

### 6. **about.html** - About Page
**Changes:**
- Intro: "No hidden fees, no bait-and-switch pricing" → "...bait-and-switch tactics"
- Intro: "upfront price" → "upfront estimate"
- Our Promise: "honest pricing" → "honest estimates"
- Our Promise: "what the job will cost" → "exactly what the job will cost"
- Our Promise: "not happy with the price" → "not happy with the estimate"
- Why Choose: "Upfront Pricing:" → "Upfront Estimates:"

### 7. **contact.html** - Contact Page
**Changes:**
- "upfront price" → "upfront estimate"
- "honest price based on what you need" → "honest estimate based on what you need"

### 8. **estimate.html** - Estimate Page
**Changes:** Minor whitespace/formatting updates (no pricing numbers present)

### 9. **_data/navigation.yml** - Navigation Data
**Changes:** Minor updates (navigation-related, not pricing)

---

## Key Language Changes

| Old Language | New Language |
|---|---|
| "Pricing" | "Estimates" |
| "Price" | "Estimate" |
| "Upfront price" | "Upfront estimate" |
| "What will it cost?" | "What will the estimate be?" |
| "Starting at $X" | "$ - $$" (or single $) |
| "$10-15" | "Contact for estimate" |
| "Transparent pricing" | "Transparent estimates" |

---

## Benefits

1. **Encourages Contact:** No specific prices visible → must contact for quote
2. **Flexibility:** Can adjust estimates based on individual jobs without updating site
3. **Professional:** Positions service as custom/specialized rather than commodity
4. **Marketing:** Contact = lead capture opportunity
5. **Service Quality Focus:** Emphasizes personalized assessment over fixed pricing

---

## Pricing Range Reference

For internal reference only (not on public site):

| Service | Old Range | New Display |
|---------|-----------|-------------|
| Single Item | $75 | $ |
| 1/4 Truck | $175 | $ - $$ |
| 1/2 Truck | $300 | $$ - $$$ |
| Full Truck | $500 | $$$ - $$$$ |
| Refrigerator (special) | $100 | Request |
| TV/Monitor (special) | $35 | Request |
| Hot Tub (special) | $350 | Request |
| Shed Removal (special) | $400 | Request |
| Tires (special) | $10-15 ea | Request |
| Exercise Equipment (special) | $75 | Request |

---

## Testing Recommendations

✅ **Verified:**
- [x] pricing.html displays dollar ranges correctly
- [x] Special items show "Estimate available on request"
- [x] FAQ uses consistent "estimate" language
- [x] All data files updated consistently
- [x] Git commit successful (9 files, 75 insertions, 110 deletions)

📋 **To Test After Deploy:**
1. Visit /pricing/ - verify dollar sign ranges display
2. Visit /contact/ - verify estimate language
3. Visit /about/ - verify no pricing numbers visible
4. Check FAQ - verify "estimate" vs "price" language consistency
5. Verify CTA buttons link to /contact/ and estimate forms

---

## Rollback Info

If needed to revert:
```
git revert 8599a24d
```

Original pricing was:
- Single: $75
- 1/4 Load: $175
- 1/2 Load: $300
- Full Load: $500
- Special items: $35-$400+

---

## Next Steps

1. ✅ Deploy changes to production
2. ✅ Monitor contact form submissions (should increase)
3. Monitor time from page view → quote request
4. Track conversion rate on estimate page
5. Consider A/B testing estimate ranges if needed

---

*This refactor improves lead generation by making pricing inquiry necessary rather than optional.*
