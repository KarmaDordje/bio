import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should have visible navigation links', async ({ page }) => {
    await page.goto('/');
    
    const navLinks = [
      'Strona główna',
      'Centrum ogrodnicze',
      'Szkółka',
      'Paliwa',
      'Projekty',
      'Oferta',
      'Aktualności',
      'O nas',
      'Kontakt'
    ];

    for (const label of navLinks) {
      await expect(page.locator('nav').getByRole('link', { name: label, exact: true })).toBeVisible();
    }
  });

  test('should navigate to O nas page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav').getByRole('link', { name: 'O nas', exact: true }).click();
    await expect(page).toHaveURL('/about');
  });
});
