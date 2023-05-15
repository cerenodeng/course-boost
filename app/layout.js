import './globals.css'

export const metadata = {
  title: 'Course Boost UI',
  description: 'Best online course management and selling platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{
          backgroundImage: "url('https://picsum.photos/1920/1080')"
        }} class="h-screen bg-center bg-cover">
          <div class="flex p-4">
            <div class="flex w-1/2 justify-start gap-x-5 px-5 py-2.5">
              <a href="#" class="text-lg font-normal hover:underline hover:underline-offset-8">Demo</a>
              <a href="#" class="text-lg font-normal hover:underline hover:underline-offset-8">Pricing</a>
              <a href="#" class="text-lg font-normal hover:underline hover:underline-offset-8">About</a>
            </div>
            <div class="flex w-1/2 justify-end gap-x-5 px-5 py-2.5">
              <a href="#" class="text-lg font-normal hover:underline hover:underline-offset-8">Join</a>
              <a href="#" class="text-lg font-normal hover:underline hover:underline-offset-8">Login</a>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html >
  )
}
