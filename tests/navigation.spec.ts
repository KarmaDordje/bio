import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should have visible navigation links', async ({ page }) => {
    await page.goto('/');
    
    const navLinks = [
      'Home',
      'Garden',
      'Bio Fuels',
      'About',
      'Contact'
    ];

    for (const label of navLinks) {
      await expect(page.locator('nav').getByRole('link', { name: label, exact: true })).toBeVisible();
    }
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav').getByRole('link', { name: 'Contact', exact: true }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav').getByRole('link', { name: 'About', exact: true }).click();
    await expect(page).toHaveURL('/about');
  });
});
