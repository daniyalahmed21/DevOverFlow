"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

import ROUTES from "@/constants/route";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    console.log("Signing in with", provider);
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME});
    } catch (error) {
      toast.error("Sign-in Failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign-in.",
      });
    }
  };
  const buttonClass =
    "flex-1 px-4 py-3.5 rounded-2 min-h-12 text-dark200_light800 background-dark400_light900 body-medium";
  return (
    <div className="flex flex-wrap gap-2.5 mt-10">
      <Button onClick={() => handleSignIn("github")} className={buttonClass}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button onClick={() => handleSignIn("google")} className={buttonClass}>
        <Image
          src="/icons/google.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
