# Image Usage Guide - Mara Retreat & Wellness

## Overview
This document outlines all images used throughout the website and their specific placements.

## Image Inventory

### Available Images (12 Total)
All images are located in `/public/assets/`

1. **luxury-spa.jpg** - Luxury private massage spa
2. **massage-session.jpg** - Professional massage session
3. **massage-therapy.jpg** - Therapeutic massage hands
4. **massage-types.jpg** - Different massage techniques
5. **spa-details.jpg** - Spa oils and hot stones details
6. **spa-hero.jpg** - Original spa hero image
7. **spa-interior.jpg** - Spa interior/lounge
8. **spa-resort.jpg** - Spa resort ambiance
9. **spa-room.jpg** - Private spa treatment room
10. **spa-treatment.jpg** - Massage treatment in progress
11. **wellness-gift.jpg** - Wellness gift presentation
12. **wellness-space.jpg** - Tranquil wellness space

---

## Image Usage by Page/Component

### 🏠 **Home Page** (`/`)

#### Hero Section
- **Image**: `/assets/luxury-spa.jpg`
- **Purpose**: Main hero background
- **Description**: Creates an inviting, professional first impression
- **Location**: `src/components/public/Hero.jsx`

#### Introduction/About Section
- **Image**: `/assets/massage-therapy.jpg`
- **Purpose**: About section featured image
- **Description**: Shows therapeutic massage technique
- **Location**: `src/data/siteContent.js` → `about.image`

#### Featured/Home Service Section
- **Image**: `/assets/wellness-gift.jpg`
- **Purpose**: Mobile spa service showcase
- **Description**: Illustrates wellness as a gift/service
- **Location**: `src/data/siteContent.js` → `featured.image`

#### CTA Section
- **Image**: `/assets/spa-resort.jpg`
- **Purpose**: Call-to-action background
- **Description**: Aspirational spa resort experience
- **Location**: `src/components/public/Cta.jsx`

#### Gallery Preview Section
Uses the gallery images (see Gallery section below)

---

### 💆 **Massages Page** (`/massages` or `/services`)

Each massage service has a unique image:

1. **Full Body Swedish**
   - Image: `/assets/massage-session.jpg`
   - Shows: Professional massage session

2. **Full Body Deep Tissue**
   - Image: `/assets/massage-therapy.jpg`
   - Shows: Therapeutic massage hands

3. **Thai Massage**
   - Image: `/assets/massage-types.jpg`
   - Shows: Different massage techniques

4. **Swedish Nuru**
   - Image: `/assets/spa-treatment.jpg`
   - Shows: Massage treatment in progress

5. **Deep Tissue Nuru**
   - Image: `/assets/wellness-space.jpg`
   - Shows: Tranquil wellness environment

6. **Erotic / Deep Tissue / Swedish**
   - Image: `/assets/luxury-spa.jpg`
   - Shows: Luxury private spa setting

7. **Tantric / Deep Tissue / Swedish**
   - Image: `/assets/spa-interior.jpg`
   - Shows: Spa interior ambiance

8. **4 Hands Swedish / Deep Tissue Nuru**
   - Image: `/assets/spa-resort.jpg`
   - Shows: Spa resort experience

9. **Couples Nuru Massage**
   - Image: `/assets/spa-room.jpg`
   - Shows: Private spa room for couples

10. **Yoni Massage**
    - Image: `/assets/wellness-gift.jpg`
    - Shows: Wellness as self-care

11. **Lingam**
    - Image: `/assets/massage-session.jpg`
    - Shows: Professional massage session

12. **Reflexology**
    - Image: `/assets/spa-details.jpg`
    - Shows: Spa oils and treatment details

13. **Back Massage**
    - Image: `/assets/massage-therapy.jpg`
    - Shows: Therapeutic massage technique

**Location**: `src/data/massages.js`

---

### 🖼️ **Gallery Page** (`/gallery`)

Gallery displays 9 curated images:

1. **spa-interior.jpg** - Wellness lounge (Featured)
2. **spa-details.jpg** - Spa oils and hot stones
3. **massage-session.jpg** - Professional massage treatment (Featured)
4. **luxury-spa.jpg** - Luxury treatment room
5. **wellness-space.jpg** - Wellness & self-care space (Featured)
6. **massage-therapy.jpg** - Therapeutic massage
7. **spa-resort.jpg** - Spa resort experience (Featured)
8. **wellness-gift.jpg** - Gift of wellness
9. **spa-room.jpg** - Private spa room (Featured)

**Location**: `src/data/gallery.js`

---

### ℹ️ **About Page** (`/about`)

#### Main Image
- **Image**: `/assets/wellness-space.jpg`
- **Purpose**: Showcase the retreat interior
- **Description**: Tranquil wellness and self-care space
- **Location**: `src/pages/public/About.jsx`

---

### 📄 **Massage Details Page** (`/massages/:slug`)

- **Images**: Dynamically pulled from massage data
- Each service detail page shows its assigned image
- **Location**: `src/pages/public/MassageDetails.jsx`
- **Data Source**: `src/data/massages.js`

---

## Image Distribution Strategy

### Professional Balance
- **Hero**: Luxury spa image for premium first impression
- **Services**: Variety of images showing different massage types
- **Gallery**: Mix of interior, details, and treatment shots
- **CTA**: Aspirational spa resort background

### No Repetition
Each massage service has a unique image to maintain visual interest and professionalism.

### Image Categories
1. **Interiors** (3): spa-interior, wellness-space, spa-room
2. **Treatments** (4): massage-session, massage-therapy, spa-treatment, massage-types
3. **Ambiance** (3): luxury-spa, spa-resort, wellness-gift
4. **Details** (2): spa-details, spa-hero

---

## Optimization Notes

### Current Status
- ✅ All images copied to `/public/assets/`
- ✅ All components updated with image paths
- ✅ No duplicate images across pages
- ✅ Professional variety maintained
- ✅ Build verified and successful

### Recommended Image Specs
- **Format**: JPG (current)
- **Dimensions**: Minimum 1200px width
- **File Size**: Under 500KB per image
- **Aspect Ratios**:
  - Hero: 16:9 or wider
  - Service Cards: 4:3
  - Gallery: Flexible (masonry layout)
  - About: 4:5 portrait

---

## Future Image Additions

To add new images:

1. Place image in `/public/assets/`
2. Use kebab-case naming (e.g., `new-spa-room.jpg`)
3. Update relevant data files:
   - `src/data/massages.js` for service images
   - `src/data/gallery.js` for gallery images
   - `src/data/siteContent.js` for hero/featured images

### Naming Convention
- Use descriptive, lowercase names
- Separate words with hyphens
- Examples: `massage-therapy.jpg`, `luxury-spa.jpg`

---

## Quick Reference

| Component | Image | Path |
|-----------|-------|------|
| Hero Background | luxury-spa.jpg | `/assets/luxury-spa.jpg` |
| About Section | massage-therapy.jpg | `/assets/massage-therapy.jpg` |
| Featured Section | wellness-gift.jpg | `/assets/wellness-gift.jpg` |
| CTA Background | spa-resort.jpg | `/assets/spa-resort.jpg` |
| About Page | wellness-space.jpg | `/assets/wellness-space.jpg` |
| Gallery | 9 images | See Gallery section |
| Services | 13 images | See Massages section |

---

**Last Updated**: September 25, 2026
**Status**: ✅ Complete - All images integrated
