
import { useState } from "react";
import Icon from "../components/Icon.jsx";
import Logo from "../components/Logo.jsx";

export default function Auth({ go, initialMode = "signin" }) {
  const [isRegister, setIsRegister] = useState(initialMode === "register");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    acceptedTerms: false,
  });

  const updateField = (event) => {
    const { name, value, checked, type } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const switchMode = (register) => {
    setIsRegister(register);
    setSubmitted(false);
    setShowPassword(false);
    setForm({
      name: "",
      email: "",
      password: "",
      acceptedTerms: false,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    // Connect this form to your Express authentication API later.
  };

  return (
    <main className="min-h-screen bg-[#f3f7fc] lg:grid lg:grid-cols-2">
      {/* Left branding panel */}
      <section className="relative hidden overflow-hidden bg-[#102b46] text-white lg:flex lg:min-h-screen lg:items-center">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-[#2864f0]/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#36c6b0]/15 blur-3xl" />

        <div className="relative mx-auto w-full max-w-xl px-12 py-16 xl:px-16">
          <button
            type="button"
            onClick={() => go("home")}
            className="mb-16 inline-flex items-center rounded-lg"
          >
            <Logo onClick={() => go("home")} />
          </button>

          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#36c6b0]">
            <span className="h-px w-7 bg-[#36c6b0]" />
            Your research workspace
          </span>

          <h1 className="mt-7 font-serif text-5xl font-bold leading-[1.12] tracking-tight xl:text-6xl">
            {isRegister ? (
              <>
                Keep your research journey{" "}
                <span className="italic text-[#70a2ff]">organised.</span>
              </>
            ) : (
              <>
                Welcome back to{" "}
                <span className="italic text-[#70a2ff]">
                  clearer research.
                </span>
              </>
            )}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
            {isRegister
              ? "Create a free student account to save useful topic ideas and keep your research resources in one secure place."
              : "Sign in to revisit saved topics, purchased materials, and research support requests."}
          </p>

          <div className="mt-9 space-y-5">
            {[
              "Save promising research directions",
              "Access materials from any device",
              "Track orders and service requests",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#36c6b0]/15 text-[#36c6b0]">
                  <Icon name="check" size={15} />
                </span>
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#36c6b0]">
              Academic integrity
            </span>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              TekLight resources support learning and original research. Your
              work should always remain authentically yours.
            </p>
          </div>

          <div className="mt-12 text-xs text-slate-400">
            © {new Date().getFullYear()} TekLight Research & Data Analysis
          </div>
        </div>
      </section>

      {/* Right form panel */}
      <section className="flex min-h-screen items-center justify-center bg-white px-5 py-8 sm:px-10 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile branding */}
          <div className="mb-10 flex items-center justify-between lg:hidden">
            <button type="button" onClick={() => go("home")}>
              <Logo onClick={() => go("home")} />
            </button>

            <button
              type="button"
              onClick={() => switchMode(!isRegister)}
              className="text-sm font-semibold text-[#2864f0]"
            >
              {isRegister ? "Sign in" : "Register"}
            </button>
          </div>

          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#008b83]">
              {isRegister ? "Create your account" : "Student sign in"}
            </span>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#102b46] sm:text-4xl">
              {isRegister
                ? "Start your research workspace"
                : "Good to see you again"}
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#65758b]">
              {isRegister
                ? "It only takes a minute to get started."
                : "Enter your details to access your account."}
            </p>
          </div>

          {submitted && (
            <div
              role="status"
              className="mb-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
            >
              <Icon name="shield" size={20} />
              <div>
                <p className="font-semibold">Authentication not connected</p>
                <p className="mt-1 leading-5">
                  This is the frontend preview. Connect your Express API to
                  register or sign in securely.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={submit} className="space-y-5">
            {isRegister && (
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#102b46]">
                  Full name
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-[#d9e2ef] bg-white px-4 py-3.5 text-sm text-[#102b46] outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
                />
              </label>
            )}

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#102b46]">
                Email address
              </span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-[#d9e2ef] bg-white px-4 py-3.5 text-sm text-[#102b46] outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 flex items-center justify-between text-sm font-semibold text-[#102b46]">
                Password

                {!isRegister && (
                  <button
                    type="button"
                    onClick={() => go("forgot-password")}
                    className="text-xs font-semibold text-[#2864f0] hover:text-blue-800"
                  >
                    Forgot password?
                  </button>
                )}
              </span>

              <div className="flex items-center rounded-xl border border-[#d9e2ef] bg-white pr-4 transition focus-within:border-[#2864f0] focus-within:ring-4 focus-within:ring-blue-100">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete={
                    isRegister ? "new-password" : "current-password"
                  }
                  value={form.password}
                  onChange={updateField}
                  placeholder={
                    isRegister
                      ? "Create a strong password"
                      : "Enter your password"
                  }
                  minLength={8}
                  required
                  className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3.5 text-sm text-[#102b46] outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  className="text-xs font-semibold text-[#65758b] hover:text-[#2864f0]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {isRegister && (
                <span className="mt-2 block text-xs text-[#65758b]">
                  Use at least 8 characters.
                </span>
              )}
            </label>

            {isRegister && (
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#65758b]">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={form.acceptedTerms}
                  onChange={updateField}
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[#2864f0]"
                />

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => go("terms")}
                    className="font-semibold text-[#2864f0] underline underline-offset-2"
                  >
                    Terms of Service
                  </button>{" "}
                  and acknowledge the{" "}
                  <button
                    type="button"
                    onClick={() => go("privacy")}
                    className="font-semibold text-[#2864f0] underline underline-offset-2"
                  >
                    Privacy Policy
                  </button>
                  .
                </span>
              </label>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#2864f0] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              {isRegister ? "Create account" : "Sign in"}
              <Icon name="arrow" size={17} />
            </button>
          </form>

          <div className="mt-7 text-center text-sm text-[#65758b]">
            {isRegister
              ? "Already have an account?"
              : "New to TekLight?"}{" "}
            <button
              type="button"
              onClick={() => switchMode(!isRegister)}
              className="font-bold text-[#2864f0] hover:text-blue-800"
            >
              {isRegister ? "Sign in" : "Create an account"}
            </button>
          </div>

          <div className="my-7 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#e5ebf3]" />
            <span className="text-xs text-[#94a3b8]">TEKLIGHT</span>
            <span className="h-px flex-1 bg-[#e5ebf3]" />
          </div>

          <button
            type="button"
            onClick={() => go("home")}
            className="mx-auto flex items-center gap-2 text-sm font-medium text-[#65758b] transition hover:text-[#2864f0]"
          >
            <span className="rotate-180">
              <Icon name="arrow" size={15} />
            </span>
            Back to homepage
          </button>

          <p className="mt-8 text-center text-xs leading-5 text-[#94a3b8]">
            Your research journey, organised in one place.
          </p>
        </div>
      </section>
    </main>
  );
}
