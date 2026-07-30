function calculateAiCost(tokensUsed) {
  const freeToken = 500;
  const tokenPercharge = 100;
  const rate = 5;
  if (typeof tokensUsed == "string" || tokensUsed < 0) {
    return "Invalid";
  }
  if (tokensUsed <= freeToken) {
    return 0;
  }
  const extraTokens = tokensUsed - freeToken;
  const costUnits = Math.floor(extraTokens / tokenPercharge);
  const cost = costUnits * rate;
  return cost;
}



