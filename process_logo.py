from PIL import Image, ImageEnhance
import numpy as np

input_path = r"C:\Users\Nikesh S\.gemini\antigravity\brain\2b8429bc-e220-46a7-a79f-11438117115e\media__1781001749741.jpg"
output_path = r"C:\Users\Nikesh S\.gemini\antigravity\scratch\ims-solar-solutions\public\logo.png"

# Read image and convert to RGBA
img = Image.open(input_path).convert("RGBA")
data = np.array(img)

r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Calculate how close a pixel is to white. 
# White is (255,255,255). The closer the mean is to 255, the more transparent it should be.
mean_color = (r.astype(float) + g.astype(float) + b.astype(float)) / 3.0

# We want pure white (255) to be alpha=0, and let's say anything below 230 is alpha=255.
# This gives a smooth transition (anti-aliasing) between 230 and 255.
alpha = np.where(mean_color > 230, 255 - (mean_color - 230) * (255 / 25.0), 255)

# Clip to 0-255 and assign
data[:,:,3] = np.clip(alpha, 0, 255).astype(np.uint8)

# Remove the white "halo" by replacing near-white pixels' RGB with a dark blue or orange 
# Since the logo has orange/blue, an easier way is to just let the alpha handle it.
out_img = Image.fromarray(data)

# Enhance contrast slightly to make colors pop ("enhance this logo")
enhancer = ImageEnhance.Color(out_img)
out_img = enhancer.enhance(1.3)
enhancer2 = ImageEnhance.Contrast(out_img)
out_img = enhancer2.enhance(1.1)

# Resize to a reasonable logo size for the web (it's currently large)
# Assuming it's square, let's make it ~200px wide for crisp rendering on retina displays
out_img.thumbnail((400, 400), Image.Resampling.LANCZOS)

out_img.save(output_path, "PNG")
print("Logo successfully processed and saved to", output_path)
