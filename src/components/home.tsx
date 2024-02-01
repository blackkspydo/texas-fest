import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div key="1" className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
      <header className="w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="ml-4 text-2xl font-bold text-gray-700 dark:text-gray-300">Mero Destiny</h1>
        </div>
        <button className="md:hidden flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700">
          <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </button>
      </header>

      <main className="flex flex-1 justify-center items-center">
        <div className="w-1/2 p-8">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to our community! We're glad you decided to join us. Please fill out the form on the right to
            complete your registration. If you have any questions or need assistance, don't hesitate to reach out to our
            support team. We're here to help!
          </p>
        </div>
        <form className="w-full md:w-1/2 lg:max-w-[500px] rounded-lg shadow-lg p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" required type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" placeholder="123-456-7890" required />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Input className="h-4 w-4" required type="checkbox" />
            <Label className="text-sm text-gray-700 dark:text-gray-300" htmlFor="terms-and-conditions">
              I agree to the Terms and Conditions
            </Label>
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
}
