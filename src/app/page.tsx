"use client";

import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronRight,
  LockKeyhole,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080909] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#080909]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center">
              <div className="relative flex h-8 items-end gap-[3px]">
                <span className="h-4 w-[5px] rounded-sm bg-[#d9a94b]" />
                <span className="h-6 w-[5px] rounded-sm bg-[#e8bd6a]" />
                <span className="h-8 w-[5px] rounded-sm bg-[#f4d08a]" />
              </div>
            </div>

            <span className="text-[15px] font-semibold tracking-[0.08em]">
              IRONLINK
              <span className="font-light text-[#c9a45c]">
                COMMUNICATION
              </span>
            </span>
          </div>

          <nav className="hidden items-center gap-10 text-sm text-white/65 md:flex">
            <a href="#home" className="text-white">
              Home
            </a>
            <a href="#platform" className="transition hover:text-white">
              Platform
            </a>
            <a href="#security" className="transition hover:text-white">
              Security
            </a>
            <a href="#investors" className="transition hover:text-white">
              Investors
            </a>
          </nav>

          <a
            href="#investors"
            className="rounded-lg bg-[#dcb363] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f0ca7b]"
          >
            Schedule a Meeting
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center pt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(190,145,57,0.15),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.04),transparent_25%)]" />

        <div className="absolute right-[-15%] top-[15%] h-[600px] w-[600px] rounded-full border border-[#cda653]/10 blur-[1px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-[#dcb363]">
              <span className="h-px w-10 bg-[#dcb363]" />
              Government Revenue Infrastructure
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[78px]">
              We unlock
              <br />
              <span className="text-[#ddb567]">government revenue</span>
              <br />
              for people.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
              Ironlinkcommunication provides a secure infrastructure for
              accessing, holding and withdrawing government-backed revenue
              through a powerful digital wallet.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#investors"
                className="group flex items-center gap-3 rounded-lg bg-[#ddb567] px-7 py-4 font-semibold text-black transition hover:bg-[#f1cc80]"
              >
                Meet With Our Team
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#platform"
                className="flex items-center gap-2 rounded-lg border border-white/10 px-7 py-4 font-medium text-white/80 transition hover:border-white/25 hover:text-white"
              >
                Explore Platform
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-2 gap-7 border-t border-white/10 pt-7 sm:grid-cols-4">
              <Feature icon={<Building2 size={20} />} text="Government Revenue" />
              <Feature icon={<ShieldCheck size={20} />} text="Licensed & Secure" />
              <Feature icon={<Wallet size={20} />} text="Powerful Wallet" />
              <Feature icon={<Zap size={20} />} text="Fast Withdrawal" />
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute inset-0 rounded-full bg-[#c99945]/10 blur-[100px]" />

            <div className="relative rounded-[28px] border border-[#cba65c]/20 bg-gradient-to-br from-[#1c1c1d] to-[#0c0d0d] p-4 shadow-2xl shadow-black">
              <div className="rounded-[22px] border border-white/10 bg-[#111212] p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 items-end gap-[2px]">
                        <span className="h-3 w-[4px] bg-[#dcb363]" />
                        <span className="h-5 w-[4px] bg-[#e8bd6a]" />
                        <span className="h-7 w-[4px] bg-[#f4d08a]" />
                      </div>
                      <span className="text-xs font-semibold tracking-widest">
                        IRONLINK
                      </span>
                    </div>
                  </div>

                  <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] text-emerald-400">
                    SECURE
                  </div>
                </div>

                <div className="mt-16">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Total Wallet Balance
                  </p>

                  <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                    ₦52,430,000
                    <span className="text-xl text-white/40">.00</span>
                  </h2>

                  <p className="mt-2 text-xs text-white/35">
                    Government revenue available
                  </p>
                </div>

                <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">
                      Available to withdraw
                    </span>

                    <span className="text-sm font-semibold text-[#e1b967]">
                      ₦52.43M
                    </span>
                  </div>
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ddb567] py-4 font-semibold text-black">
                  Withdraw to Bank
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 hidden rounded-xl border border-white/10 bg-[#111212]/90 p-5 backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <p className="text-xs text-white/40">Transaction</p>
                  <p className="text-sm font-medium">Successfully secured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/5 bg-[#0d0e0e]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          <Stat value="₦100B+" label="Revenue Access" />
          <Stat value="100%" label="Secure Infrastructure" />
          <Stat value="24/7" label="Wallet Availability" />
          <Stat value="Fast" label="Account Withdrawal" />
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="relative py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#dcb363]">
              The Ironlink Wallet
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              From government revenue to{" "}
              <span className="text-[#ddb567]">your wallet.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/50">
              We simplify the journey between eligible government revenue and
              the people entitled to receive it. Our infrastructure is
              designed around security, accessibility and transparency.
            </p>

            <div className="mt-10 space-y-6">
              <PlatformFeature
                icon={<ShieldCheck />}
                title="Licensed & Compliant"
                description="Built around regulatory requirements and responsible financial infrastructure."
              />

              <PlatformFeature
                icon={<LockKeyhole />}
                title="Bank-Level Security"
                description="Security-first architecture designed to protect balances and transactions."
              />

              <PlatformFeature
                icon={<Banknote />}
                title="Easy Withdrawal"
                description="Move available funds from your Ironlink wallet directly into your bank account."
              />

              <PlatformFeature
                icon={<CheckCircle2 />}
                title="Transparent"
                description="Clear transaction visibility and auditable revenue movement."
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#cda653]/10 blur-[120px]" />

            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#171818] to-[#0c0d0d] p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs text-white/35">IRONLINK WALLET</p>
                  <p className="mt-1 text-sm text-white/60">
                    Revenue Account
                  </p>
                </div>

                <Wallet className="text-[#ddb567]" />
              </div>

              <div className="py-12">
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Available Balance
                </p>

                <p className="mt-4 text-5xl font-semibold">
                  ₦18,750,420
                  <span className="text-xl text-white/30">.00</span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-white/[0.035] p-4">
                  <span className="text-sm text-white/50">Government Revenue</span>
                  <span className="text-sm text-emerald-400">+₦4,500,000</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/[0.035] p-4">
                  <span className="text-sm text-white/50">Withdrawal</span>
                  <span className="text-sm text-white/60">₦1,250,000</span>
                </div>
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ddb567] py-4 font-semibold text-black">
                Withdraw to Account
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="border-y border-white/5 bg-[#0d0e0e] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#dcb363]">
              Built For Trust
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Financial infrastructure should feel{" "}
              <span className="text-[#ddb567]">safe.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            <SecurityCard
              icon={<ShieldCheck />}
              title="Licensed"
              text="A regulated approach to handling and distributing government revenue."
            />

            <SecurityCard
              icon={<LockKeyhole />}
              title="Protected"
              text="Security architecture built to safeguard users, wallets and transactions."
            />

            <SecurityCard
              icon={<Zap />}
              title="Accessible"
              text="A simple digital experience that makes accessing funds easier."
            />
          </div>
        </div>
      </section>

      {/* INVESTOR CTA */}
      <section id="investors" className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-[#cda653]/20 bg-gradient-to-br from-[#171716] to-[#0c0d0d] p-10 sm:p-16">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#cda653]/10 blur-[120px]" />

            <div className="relative flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#dcb363]">
                  For Investors
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Let&apos;s build the future of{" "}
                  <span className="text-[#ddb567]">
                    government revenue access.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-lg text-white/45">
                  Meet with the Ironlinkcommunication team and explore the
                  opportunity.
                </p>
              </div>

              <a
                href="mailto:investors@ironlinkcommunication.com"
                className="group flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#ddb567] px-8 py-5 font-semibold text-black transition hover:bg-[#f0ca7b]"
              >
                Schedule a Meeting
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 text-sm text-white/35 sm:flex-row lg:px-10">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-7 items-end gap-[2px]">
              <span className="h-3 w-[4px] bg-[#dcb363]" />
              <span className="h-5 w-[4px] bg-[#e8bd6a]" />
              <span className="h-7 w-[4px] bg-[#f4d08a]" />
            </div>

            <span className="font-semibold tracking-widest">
              IRONLINK
              <span className="font-light text-[#c9a45c]">
                COMMUNICATION
              </span>
            </span>
          </div>

          <div className="flex gap-7">
            <span>Privacy</span>
            <span>Compliance</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* COMPONENTS */

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#ddb567]">{icon}</div>
      <span className="text-xs leading-4 text-white/55">{text}</span>
    </div>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-r border-white/5 px-6 py-10 text-center last:border-r-0">
      <div className="text-3xl font-semibold text-[#ddb567] sm:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-white/35">
        {label}
      </div>
    </div>
  );
}

function PlatformFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#cda653]/20 bg-[#cda653]/5 text-[#ddb567]">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-white/40">{description}</p>
      </div>
    </div>
  );
}

function SecurityCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#101111] p-8 sm:p-10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#cda653]/10 text-[#ddb567]">
        {icon}
      </div>

      <h3 className="mt-8 text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-white/40">{text}</p>

      <div className="mt-8 flex items-center gap-2 text-xs font-medium text-[#ddb567]">
        Learn more
        <ChevronRight size={14} />
      </div>
    </div>
  );
}