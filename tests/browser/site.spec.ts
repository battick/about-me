import { test, expect } from "@playwright/test";
for (const width of [1440, 1728, 1920, 2560, 390])
  test("home responsive at " + width, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1080 });
    await page.goto("");
    await expect(page.locator("h1")).toContainText("写成现实");
    for (const section of await page.locator("main section").all())
      await section.scrollIntoViewIfNeeded();
    await expect(page.getByText("开发样例")).toHaveCount(0);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(
      await page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs.every(
            (i) =>
              (i as HTMLImageElement).complete &&
              (i as HTMLImageElement).naturalWidth > 0,
          ),
        ),
    ).toBe(true);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: ".qa/home-" + width + ".png",
      fullPage: true,
    });
  });
test("routes, filtering, keyboard, reload and missing content", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("");
  await expect(page.locator("h1")).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(page.getByText("跳到主要内容")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.getByRole("link", { name: "查看项目 ↗", exact: true }).click();
  await expect(page.locator("h1")).toHaveText("想法的落点。");
  await page.getByRole("button", { name: "React", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "React", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page
    .getByRole("link", { name: "探索项目 ↗：DARK LAB 项目详情" })
    .click();
  await expect(page.locator("h1")).toHaveText("DARK LAB");
  await page.reload();
  await expect(page.getByRole("heading", { name: "技术选择" })).toBeVisible();
  await page.goto("#/projects/no-such-project");
  await expect(page.locator("h1")).toHaveText("这条路，还没写好。");
  await page.goto("#/notes");
  await expect(page.locator("h1")).toHaveText("这条路，还没写好。");
  await page.goto("#/about");
  await expect(page.locator("h1")).toContainText("battick");
  await page.goto("#/contact");
  await expect(page.locator("h1")).toContainText("一起做");
  await expect(
    page.getByRole("link", { name: "在 GitHub 找到我" }),
  ).toHaveAttribute("href", "https://github.com/battick");
  expect(errors).toEqual([]);
});
test("mobile menu and reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("");
  await page.getByRole("button", { name: "菜单" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "关于" })
    .click();
  await expect(page.locator("h1")).toContainText("你好");
  await expect(page.getByRole("button", { name: "菜单" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await page.goto("");
  await expect(page.locator("video")).toHaveCount(0);
  expect(
    await page
      .locator(".reveal")
      .first()
      .evaluate((el) => getComputedStyle(el).opacity),
  ).toBe("1");
});
