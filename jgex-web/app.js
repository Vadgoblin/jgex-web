async function Java_wprover_NativeFileBridge_showOpenDialog(lib) {
  const ClassName = await lib.wprover.NativeFileBridge;
  await ClassName.onFileLoaded("dummy string");
}


async function main() {
  await cheerpjInit(
    {
      version: 17,
      natives: { Java_wprover_NativeFileBridge_showOpenDialog }
    }
  );
  cheerpjCreateDisplay(-1, -1, document.body);
  await cheerpjRunJar("/app/jgex.jar");
}

main().catch((err) => {
  console.error("CheerpJ execution error:", err);
});
