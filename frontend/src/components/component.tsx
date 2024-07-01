import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <VideoIcon className="h-6 w-6" />
          <span className="sr-only">Video Generator</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Generate Videos for Your E-commerce Business
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our powerful platform makes it simple to create high-quality videos for your products using text or
                    links.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features for Your E-commerce Videos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a range of features to help you create high-quality videos for your products,
                  including automatic captioning and multilingual support.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Automatic Captioning</h3>
                      <p className="text-muted-foreground">
                        Our AI-powered captioning engine automatically generates captions for your product videos,
                        ensuring accessibility and engagement.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Multilingual Support</h3>
                      <p className="text-muted-foreground">
                        Translate your captions and subtitles into multiple languages with our built-in translation
                        tools, reaching a global audience.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Customization Options</h3>
                      <p className="text-muted-foreground">
                        Easily adjust the style, timing, and positioning of your captions to match your brand and
                        product.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Generate Videos for Your Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simply provide us with the text or a link to your product, and our platform will automatically
                  generate a high-quality video with captions and subtitles.
                </p>
              </div>
              <div className="w-full max-w-2xl">
                <form className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="input">Input (Text or Link)</Label>
                      <Input type="text" id="input" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </Select>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Generate Video
                  </Button>
                </form>
              </div>
              <div className="w-full max-w-2xl">
                <div className="rounded-lg border p-4">
                  <h3 className="text-xl font-bold">Generated Video</h3>
                  <div className="mt-4 max-h-[300px] overflow-auto">
                    <video controls className="w-full rounded-lg">
                      <source src="/placeholder-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable Pricing for Your E-commerce Videos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your needs and budget. We offer flexible pricing options to suit
                  individuals and businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-4xl font-bold">$9</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Automatic Captioning</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Multilingual Support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Basic Customization</p>
                  </div>
                </div>
                <Button className="mt-6 w-full">Get Started</Button>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-4xl font-bold">$19</p>
                  <p className="text-muted-foreground">per month</p>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Automatic Captioning</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Multilingual Support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Advanced Customization</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Priority Support</p>
                  </div>
                </div>
                <Button className="mt-6 w-full">Get Started</Button>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-4xl font-bold">Custom</p>
                  <p className="text-muted-foreground">Contact us for pricing</p>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Automatic Captioning</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Multilingual Support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Advanced Customization</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Dedicated Support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <p>Custom Integrations</p>
                  </div>
                </div>
                <Button className="mt-6 w-full">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      >
        <p className="text-xs text-muted-foreground">&copy; 2024 Video Generator. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function VideoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}
