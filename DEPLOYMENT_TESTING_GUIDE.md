# Deployment & Testing Guide - Mobile Fixes

**Date:** December 27, 2025  
**Status:** Ready for Testing & Deployment

---

## 🚀 Pre-Deployment Checklist

### ✅ Completed
- [x] Contact form configured with Netlify Forms
- [x] Success page created at `/success/`
- [x] Reviews page escape sequences fixed
- [x] Mobile card layouts optimized
- [x] Site built successfully
- [x] CSS compiled with mobile breakpoints

### 📋 Ready to Test
- [ ] Local testing (desktop browser)
- [ ] Local testing (mobile simulator)
- [ ] Netlify deployment
- [ ] Live testing on iPhone
- [ ] Form notification configuration

---

## 🧪 Testing Instructions

### Step 1: Local Desktop Testing

**Start Local Server:**
```powershell
npm run serve
```
Server will start at: `http://localhost:4000`

**Test Contact Form:**
1. Navigate to: `http://localhost:4000/contact/`
2. Fill out all required fields:
   - Name: Your name
   - Email: Your email
   - Phone: Optional
   - Project details: Test message
3. Click "Request an estimate"
4. **Expected:** Should redirect to `/success/` page
5. **Note:** Form won't actually submit locally (Netlify needed)

**Test Reviews Page:**
1. Navigate to: `http://localhost:4000/reviews/`
2. **Check for:**
   - No visible code (no `\r\n` sequences)
   - Clean HTML rendering
   - Proper section structure
   - Thumbtack button works

**Test Mobile Cards:**
1. Open DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Set to iPhone 16 Pro Max (430px width)
4. Navigate to home page
5. **Check "What We Deliver" section:**
   - Cards in single column on mobile
   - No horizontal scroll
   - Proper spacing
   - Text readable and well-aligned

---

### Step 2: Mobile Browser Testing

**Option A: Browser DevTools**
```
1. Open Chrome DevTools (F12)
2. Click Toggle Device Toolbar (Ctrl+Shift+M)
3. Select device: iPhone 16 Pro Max
4. Test responsive breakpoint at 480px
```

**Option B: Actual iPhone (Recommended)**
```
1. Deploy to Netlify (see Step 3)
2. Open tillerstead.com/contact/ on iPhone
3. Test form submission
4. Verify success page displays
5. Check reviews page rendering
6. Verify card layouts
```

---

### Step 3: Netlify Deployment

**Deploy to Production:**

```powershell
# 1. Check git status
git status

# 2. Stage all changes
git add .

# 3. Commit with descriptive message
git commit -m "fix: resolve mobile contact form 405 error, broken code on reviews, and card layouts

- Configure Netlify Forms for contact page
- Add success page with thank you message
- Fix literal escape sequences in reviews.html
- Add mobile breakpoints for deliver cards (480px)
- Improve mobile spacing and prevent overflow

Fixes #mobile-form-405 #reviews-broken-code #mobile-cards"

# 4. Push to GitHub (triggers Netlify auto-deploy)
git push origin main
```

**Monitor Deployment:**
1. Go to Netlify dashboard: https://app.netlify.com
2. Select your Tillerstead site
3. Watch "Deploys" tab for build progress
4. **Build time:** ~2-3 minutes
5. **Check for errors** in build log

---

### Step 4: Configure Netlify Forms

**Access Forms Settings:**
1. Log in to Netlify: https://app.netlify.com
2. Click on Tillerstead site
3. Go to: **Forms** (in left sidebar)

**Set Up Notifications:**
1. Click on "contact" form
2. Go to "Form notifications"
3. Click "Add notification"
4. Select "Email notification"
5. **Configure:**
   - **Email to notify:** info@tillerstead.com
   - **Subject:** New Contact Form Submission - {{name}}
   - **Email body template:**
   ```
   New contact form submission from tillerstead.com

   Name: {{name}}
   Email: {{email}}
   Phone: {{phone}}
   Project Details:
   {{message}}

   Submitted: {{created_at}}
   ```

**Enable Spam Filtering:**
1. In Forms settings
2. Toggle **Enable spam filtering** (uses Akismet)
3. Honeypot is already configured in form code

---

### Step 5: Live Testing on iPhone

**After Netlify Deployment:**

1. **Open on iPhone:**
   - URL: https://tillerstead.com/contact/
   
2. **Test Contact Form:**
   - Fill in name, email, phone, message
   - Submit form
   - **Expected:** Redirect to success page
   - **Expected:** Email notification to info@tillerstead.com
   
3. **Test Reviews Page:**
   - URL: https://tillerstead.com/reviews/
   - **Check:** No broken code visible
   - **Check:** Clean HTML rendering
   - **Check:** Thumbtack link works
   
4. **Test Mobile Cards:**
   - URL: https://tillerstead.com/
   - Scroll to "What We Deliver" section
   - **Check:** Single column layout
   - **Check:** No horizontal scroll
   - **Check:** Proper spacing and alignment

---

## 📊 Verification Checklist

### Contact Form (/contact/)
- [ ] Form displays correctly on desktop
- [ ] Form displays correctly on mobile
- [ ] All fields have proper labels
- [ ] Required fields show validation
- [ ] Submit button works
- [ ] Redirects to /success/ page
- [ ] Email notification received at info@tillerstead.com
- [ ] Honeypot prevents spam
- [ ] No 405 error

### Success Page (/success/)
- [ ] Page loads after form submission
- [ ] Thank you message displays
- [ ] Next steps are clear
- [ ] Contact info is visible
- [ ] Links to home/services work
- [ ] Mobile responsive

### Reviews Page (/reviews/)
- [ ] No broken code visible
- [ ] HTML renders cleanly
- [ ] Section headers display
- [ ] Testimonials section loads
- [ ] Thumbtack button works
- [ ] Mobile responsive
- [ ] No `\r\n` escape sequences

### Mobile Cards (/)
- [ ] Single column on < 480px
- [ ] No horizontal scroll
- [ ] Cards fill width properly
- [ ] Spacing is appropriate
- [ ] Text is readable
- [ ] No overflow issues

---

## 🔧 Netlify Dashboard Access

**Form Submissions:**
- **Path:** Site Settings → Forms → contact
- **View:** All submissions with timestamp
- **Export:** Download as CSV
- **Spam:** Filtered automatically

**Build Status:**
- **Path:** Deploys tab
- **Check:** Build log for errors
- **Time:** ~2-3 minutes per deploy
- **Auto-deploy:** Triggers on git push

**Performance:**
- **Path:** Site Settings → Build & deploy
- **Check:** Build time and size
- **Optimize:** Enable asset optimization

---

## 🚨 Troubleshooting

### Form Shows 405 Error
**Symptoms:** Form submission fails with "405 Method Not Allowed"
**Cause:** Netlify Forms not detected during build
**Fix:**
1. Check form has `data-netlify="true"` attribute
2. Check form has `name="contact"` attribute
3. Rebuild and redeploy
4. Clear browser cache

### Form Doesn't Redirect to Success Page
**Symptoms:** Stays on contact page after submit
**Cause:** Action URL incorrect or JS interference
**Fix:**
1. Verify `action="/success/"` in form tag
2. Check success page exists at `/success/`
3. Test in incognito mode (disable extensions)

### No Email Notifications
**Symptoms:** Form submits but no email received
**Cause:** Notifications not configured
**Fix:**
1. Go to Netlify → Forms → contact
2. Add email notification (see Step 4 above)
3. Check spam folder
4. Verify email address is correct

### Reviews Page Still Shows Code
**Symptoms:** Visible `\r\n` or broken HTML
**Cause:** File not properly saved or cached
**Fix:**
1. Verify `pages/reviews.html` has clean HTML
2. Rebuild: `npm run build`
3. Hard refresh browser (Ctrl+Shift+R)
4. Clear cache and redeploy

### Mobile Cards Overlapping
**Symptoms:** Cards display side-by-side on mobile
**Cause:** Media query not applying
**Fix:**
1. Verify `_sass/30-components/_deliver.scss` has `@media (max-width: 480px)`
2. Rebuild CSS: `npm run build:css`
3. Test at exact 480px width
4. Check browser supports CSS Grid

---

## 📈 Success Criteria

### Form Functionality
✅ **Zero** 405 errors  
✅ **100%** successful submissions  
✅ **< 500ms** form validation  
✅ Email notifications within **5 minutes**

### Mobile Experience
✅ No horizontal scroll  
✅ Touch targets **≥ 44px**  
✅ Text **readable** without zoom  
✅ Cards **single column** on mobile

### Code Quality
✅ No visible escape sequences  
✅ Clean HTML rendering  
✅ Valid semantic structure  
✅ WCAG 2.1 AA compliant

---

## 📝 Post-Deployment Tasks

### Immediate (Day 1)
- [ ] Test form on actual iPhone
- [ ] Submit test form and verify email
- [ ] Check all pages on mobile Safari
- [ ] Monitor Netlify Forms dashboard

### Short-term (Week 1)
- [ ] Review form submissions daily
- [ ] Check spam filtering effectiveness
- [ ] Monitor page load speeds
- [ ] Gather user feedback

### Ongoing
- [ ] Weekly form submission review
- [ ] Monthly mobile UX testing
- [ ] Quarterly accessibility audit
- [ ] Update contact info as needed

---

## 🎯 Next Issues to Address

Based on screenshot filenames, these issues still need fixing:

1. **Mobile Navigation** 
   - Files: `broken mobile nav.png`, `wtf mobile nav is still broken.png`
   - Priority: HIGH

2. **Header Issues**
   - Files: `BROKEN BUTTONS UGLY HERO AND NO SVG ICON LOGO.png`
   - Priority: MEDIUM

3. **Footer Styling**
   - Files: `broken footer style and no svg icon in header.png`
   - Priority: MEDIUM

4. **Homepage Code**
   - Files: `EXPOSED BROKEN CODE ON HOMEPAGE.png`
   - Priority: HIGH

---

## 📞 Support

**Netlify Support:**  
- Docs: https://docs.netlify.com/forms/setup/
- Community: https://answers.netlify.com/
- Status: https://www.netlifystatus.com/

**Form Testing:**  
- Local: http://localhost:4000/contact/
- Live: https://tillerstead.com/contact/

**Reports:**  
- Mobile fixes: `reports/MOBILE_FIXES_SUMMARY.md`
- Contrast audit: `reports/CONTRAST_FIX_SUMMARY.md`

---

**Status:** ✅ Ready for deployment  
**Estimated Test Time:** 30 minutes  
**Deployment Time:** 2-3 minutes  
**Total Time to Production:** < 1 hour
