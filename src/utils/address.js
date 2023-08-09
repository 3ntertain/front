export function shortenWalletAddress(walletAddress) {
  if (walletAddress.length < 6) {
    return walletAddress
  }

  const shortenedAddress =
    walletAddress.substring(0, 3) + "..." + walletAddress.slice(-3)
  return shortenedAddress
}
