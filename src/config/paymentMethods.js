/**
 * Accepted payment destinations — single source for /payment-methods and teasers.
 * Icons are stylized marks (not official logos) in brand-associated colors.
 */

export const PAYMENT_METHODS_PATH = "/payment-methods";

export const PAYMENT_METHODS = [
  {
    id: "jazzcash",
    title: "JazzCash",
    subtitle: "Mobile wallet transfer",
    accountLabel: "Wallet / mobile account",
    accountValue: "03044756078",
    accountName: "Haseeb Zahid",
    hint: "Pay from the JazzCash app using this mobile account title. Double-check the recipient name before sending."
  },
  {
    id: "meezan",
    title: "Meezan Bank",
    subtitle: "Bank account (IBAN / account transfer)",
    accountLabel: "Account number",
    accountValue: "02690105587640",
    accountName: "Haseeb Zahid",
    hint: "Use your bank’s app or branch transfer. If your bank asks for a title, match the account name above."
  }
];
