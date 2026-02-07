// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * User Journey End-to-End Tests
 * Implements: COV-JOURNEYS (specs/coverage/user-journeys-tests.md)
 * Tests: 16 business use case validations across UC1, UC2, UC3
 */

test.describe('UC1: Learn About smaQit', () => {
  
  // COV-JOURNEYS-001: Maps to BUS-PRODUCT-001
  test('Product name is visible on landing', async ({ page }) => {
    await page.goto('');
    
    const productName = page.locator('text=smaQit').first();
    await expect(productName).toBeVisible();
    await expect(productName).toBeInViewport();
  });

  // COV-JOURNEYS-002: Maps to BUS-PRODUCT-002
  test('Tagline is visible on landing', async ({ page }) => {
    await page.goto('');
    
    await expect(page.locator('text=Power up with smaQit')).toBeVisible();
  });

  // COV-JOURNEYS-003: Maps to BUS-PRODUCT-003
  test('Product description includes toolkit type', async ({ page }) => {
    await page.goto('');
    
    await expect(page.locator('text=/Spec Driven Development/i')).toBeVisible();
    await expect(page.locator('text=/SDD/i')).toBeVisible();
    await expect(page.locator('text=/toolkit/i')).toBeVisible();
  });

  // COV-JOURNEYS-004: Maps to BUS-PRODUCT-004
  test('Target audience is clearly stated', async ({ page }) => {
    await page.goto('');
    
    await expect(page.locator('text=/IT professionals/i')).toBeVisible();
    
    // Should mention at least one role
    const hasRole = await page.evaluate(() => {
      const text = document.body.textContent.toLowerCase();
      return text.includes('product owners') || 
             text.includes('architects') || 
             text.includes('engineers') || 
             text.includes('testers');
    });
    
    expect(hasRole).toBeTruthy();
  });

  // COV-JOURNEYS-005: Maps to BUS-PRODUCT-005
  test('Open source license is stated', async ({ page }) => {
    await page.goto('');
    
    await expect(page.locator('text=/open source|Open Source/i')).toBeVisible();
  });
});

test.describe('UC2: Explore smaQit Capabilities', () => {
  
  // COV-JOURNEYS-006: Maps to BUS-FEATURES-001
  test('Stateful Specs feature is visible', async ({ page }) => {
    await page.goto('');
    
    await page.locator('text=/features|key features/i').scrollIntoViewIfNeeded();
    
    await expect(page.locator('text=Stateful Specs')).toBeVisible();
    
    // Should have a description
    const card = page.locator('.feature-card').filter({ hasText: 'Stateful Specs' });
    await expect(card.locator('.feature-description, p')).toBeVisible();
  });

  // COV-JOURNEYS-007: Maps to BUS-FEATURES-002
  test('Versioned Prompts feature is visible', async ({ page }) => {
    await page.goto('');
    
    await page.locator('text=/features/i').scrollIntoViewIfNeeded();
    
    await expect(page.locator('text=Versioned Prompts')).toBeVisible();
    
    const card = page.locator('.feature-card').filter({ hasText: 'Versioned Prompts' });
    await expect(card.locator('.feature-description, p')).toBeVisible();
  });

  // COV-JOURNEYS-008: Maps to BUS-FEATURES-003
  test('Agile team focus is communicated', async ({ page }) => {
    await page.goto('');
    
    await page.locator('text=/features/i').scrollIntoViewIfNeeded();
    
    await expect(page.locator('text=/agile/i')).toBeVisible();
    
    // Should mention agile teams
    const hasAgileTeams = await page.evaluate(() => {
      const text = document.body.textContent.toLowerCase();
      return text.includes('agile teams') || text.includes('agile workflow');
    });
    
    expect(hasAgileTeams).toBeTruthy();
  });

  // COV-JOURNEYS-009: Maps to BUS-FEATURES-004
  test('Modular layers feature is visible', async ({ page }) => {
    await page.goto('');
    
    await page.locator('text=/features/i').scrollIntoViewIfNeeded();
    
    await expect(page.locator('text=/Modular Layers|Modular/i')).toBeVisible();
    
    const card = page.locator('.feature-card').filter({ hasText: /Modular/i });
    await expect(card.locator('.feature-description, p')).toBeVisible();
  });

  // COV-JOURNEYS-010: Maps to BUS-FEATURES-005
  test('Innovation and differentiation is communicated', async ({ page }) => {
    await page.goto('');
    
    await page.locator('text=/features/i').scrollIntoViewIfNeeded();
    
    // Check that features collectively communicate innovation
    const featureCards = page.locator('.feature-card');
    const count = await featureCards.count();
    
    expect(count).toBe(4);
    
    // At least one feature should mention a differentiating capability
    const hasDifferentiator = await page.evaluate(() => {
      const text = document.body.textContent.toLowerCase();
      return text.includes('versioned') || 
             text.includes('stateful') || 
             text.includes('modular') ||
             text.includes('reproducible');
    });
    
    expect(hasDifferentiator).toBeTruthy();
  });
});

test.describe('UC3: Connect via Social Channels', () => {
  
  // COV-JOURNEYS-011: Maps to BUS-CONNECT-001
  test('GitHub icon is visible in footer', async ({ page }) => {
    await page.goto('');
    
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const githubIcon = page.locator('footer a[href*="github.com"] i, footer .fa-github');
    await expect(githubIcon).toBeVisible();
  });

  // COV-JOURNEYS-012: Maps to BUS-CONNECT-002
  test('LinkedIn icon is visible in footer', async ({ page }) => {
    await page.goto('');
    
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const linkedinIcon = page.locator('footer a[href*="linkedin.com"] i, footer .fa-linkedin');
    await expect(linkedinIcon).toBeVisible();
  });

  // COV-JOURNEYS-013: Maps to BUS-CONNECT-003
  test('GitHub link navigates to smaQit repository', async ({ page }) => {
    await page.goto('');
    
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const githubLink = page.locator('footer a[href*="github.com"]').first();
    const href = await githubLink.getAttribute('href');
    
    expect(href).toContain('github.com');
    expect(href.toLowerCase()).toContain('smaqit');
  });

  // COV-JOURNEYS-014: Maps to BUS-CONNECT-004
  test('LinkedIn link navigates to creator profile', async ({ page }) => {
    await page.goto('');
    
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const linkedinLink = page.locator('footer a[href*="linkedin.com"]').first();
    const href = await linkedinLink.getAttribute('href');
    
    // Verify it's the correct LinkedIn profile for Rui Vaz
    expect(href).toBe('https://www.linkedin.com/in/rui-vaz-43b13842/');
  });

  // COV-JOURNEYS-015: Maps to BUS-CONNECT-005
  test('Social icons are recognizable and clickable', async ({ page }) => {
    await page.goto('');
    
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const githubLink = page.locator('footer a[href*="github.com"]').first();
    const linkedinLink = page.locator('footer a[href*="linkedin.com"]').first();
    
    // Check hover states
    await githubLink.hover();
    await expect(githubLink).toBeVisible();
    
    await linkedinLink.hover();
    await expect(linkedinLink).toBeVisible();
    
    // Verify they have visible click affordance (are links)
    await expect(githubLink).toHaveAttribute('href');
    await expect(linkedinLink).toHaveAttribute('href');
  });
});

test.describe('Complete User Journey', () => {
  
  // COV-JOURNEYS-016: Complete visitor journey
  test('Visitor completes full journey from landing to connection', async ({ page }) => {
    // Step 1: Navigate and discover product
    await page.goto('');
    
    // Verify immediate visibility
    await expect(page.locator('text=smaQit').first()).toBeVisible();
    await expect(page.locator('text=Power up with smaQit')).toBeVisible();
    
    // Understand it's an SDD toolkit
    await expect(page.locator('text=/Spec Driven Development/i')).toBeVisible();
    await expect(page.locator('text=/IT professionals/i')).toBeVisible();
    
    // Step 2: Scroll and explore features
    await page.locator('text=/features/i').scrollIntoViewIfNeeded();
    
    const featureCards = page.locator('.feature-card');
    await expect(featureCards).toHaveCount(4);
    
    // Read feature content
    await expect(page.locator('text=Stateful Specs')).toBeVisible();
    await expect(page.locator('text=Versioned Prompts')).toBeVisible();
    await expect(page.locator('text=/agile/i')).toBeVisible();
    await expect(page.locator('text=/Modular/i')).toBeVisible();
    
    // Step 3: Scroll to footer and find social connections
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const githubIcon = page.locator('footer a[href*="github.com"]').first();
    const linkedinIcon = page.locator('footer a[href*="linkedin.com"]').first();
    
    await expect(githubIcon).toBeVisible();
    await expect(linkedinIcon).toBeVisible();
    
    // Step 4: Verify ability to connect (check links)
    const githubHref = await githubIcon.getAttribute('href');
    expect(githubHref).toContain('github.com');
    expect(githubHref.toLowerCase()).toContain('smaqit');
    
    const linkedinHref = await linkedinIcon.getAttribute('href');
    expect(linkedinHref).toContain('linkedin.com');
    
    // Journey complete: User can explore code or connect professionally
  });
});

test.describe('Cross-Viewport User Journeys', () => {
  
  test('Mobile user completes discovery journey', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('');
    
    // Product discovery
    await expect(page.locator('text=smaQit').first()).toBeVisible();
    
    // Feature exploration
    await page.locator('text=/features/i').scrollIntoViewIfNeeded();
    const features = page.locator('.feature-card');
    await expect(features).toHaveCount(4);
    
    // Social connection
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('footer a[href*="github.com"]')).toBeVisible();
  });

  test('Tablet user completes discovery journey', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('');
    
    // Product discovery
    await expect(page.locator('text=smaQit').first()).toBeVisible();
    
    // Feature exploration
    await page.locator('text=/features/i').scrollIntoViewIfNeeded();
    const features = page.locator('.feature-card');
    await expect(features).toHaveCount(4);
    
    // Social connection
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('footer a[href*="github.com"]')).toBeVisible();
  });

  test('Desktop user completes discovery journey', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('');
    
    // Product discovery
    await expect(page.locator('text=smaQit').first()).toBeVisible();
    
    // Feature exploration
    await page.locator('text=/features/i').scrollIntoViewIfNeeded();
    const features = page.locator('.feature-card');
    await expect(features).toHaveCount(4);
    
    // Social connection
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('footer a[href*="github.com"]')).toBeVisible();
  });
});
