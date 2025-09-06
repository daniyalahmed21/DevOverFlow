
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

export default async function Home() {
  const session = await auth();
  console.log("Session:", session);
  return (
    <div className="flex flex-col justify-center items-center py-2 min-h-screen">
      <div>
        <h5>Are you sure you want to sign out?</h5>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: ROUTES.SIGNIN });
          }}
        >
          <Button type="submit">Sign out</Button>
        </form>
      </div>
    </div>
  );
}
