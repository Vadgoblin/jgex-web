async function main() {
  await cheerpjInit({ version: 17 });
  cheerpjCreateDisplay();
  await cheerpjRunJar("/app/jgex.jar");
}

main().catch((err) => {
  console.error("CheerpJ execution error:", err);
});
