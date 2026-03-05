"use client";

import { useModalStore } from "@/store/UseModalStore";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/_lib/auth-client";

const SignInModal = () => {
  const { isSignInOpen, closeSignIn } = useModalStore();

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const signInWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <Modal onClose={closeSignIn} isOpen={isSignInOpen}>
      <h2 className="text-xl font-semibold text-white mb-2">
        Sign in to TechBlog
      </h2>

      <p className="text-sm text-gray-400 mb-8">
        Use one of these providers to sign in
      </p>

      <div className="space-y-4">
        {/* google */}
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <button
          onClick={signInWithGithub}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          <FaGithub className="text-xl" />
          Continue with Github
        </button>

        <p className="text-xs text-gray-500 text-center mt-8">
          By continuing, you agree to our Terms an Conditions
        </p>
      </div>
    </Modal>
  );
};

export default SignInModal;
