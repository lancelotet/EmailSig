import os
from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navigate to the app
            page.goto("http://localhost:8000/", timeout=60000)

            # Wait for the page to load
            expect(page.get_by_role("heading", name="Email Signature Details")).to_be_visible()

            # Use a known working image URL
            image_url = "https://dummyimage.com/120x120/000/fff.png"

            # Fill out the form
            page.get_by_label("Name").fill("Jules Verne")
            page.get_by_label("Title").fill("Visionary Author")
            page.get_by_label("Location").fill("Nantes, France")
            page.get_by_label("Image URL").fill(image_url)

            # Wait for the preview to update
            preview = page.locator('.signature-preview-container')
            expect(preview.get_by_text("Nantes, France")).to_be_visible()
            preview_image = preview.locator(f'img[src="{image_url}"]')
            expect(preview_image).to_be_visible()
            page.wait_for_timeout(2000) # Give image time to load

            # Start waiting for the download
            print("Waiting for download...")
            with page.expect_download() as download_info:
                page.get_by_role("button", name="🖼️ Export as PNG").click()

            download = download_info.value

            download_path = f"jules-scratch/verification/{download.suggested_filename}"
            download.save_as(download_path)
            print(f"Download saved to {download_path}")

            # Verify the download
            assert os.path.exists(download_path), f"File not found at {download_path}"
            assert os.path.getsize(download_path) > 0, "Downloaded file is empty"
            print("Download verified successfully.")

            # Take a final screenshot for visual confirmation
            page.screenshot(path="jules-scratch/verification/final_verification.png")

        except Exception as e:
            print(f"An error occurred: {e}")

        finally:
            browser.close()

if __name__ == "__main__":
    run_verification()
