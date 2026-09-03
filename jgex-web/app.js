async function main() {
  await cheerpjInit({ version: 17 });
  cheerpjCreateDisplay(-1, -1, document.body);
  await cheerpjRunJar("/app/jgex.jar");
}

main().catch((err) => {
  console.error("CheerpJ execution error:", err);
});
