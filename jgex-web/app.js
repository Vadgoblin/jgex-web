async function Java_wprover_CheerpJIntegration_WebFileChooser_triggerJsFileDialog(lib) {
    return new Promise((resolve) => {
        const input = document.createElement("input");
        input.type = "file";
        input.style.display = "none";
        document.body.appendChild(input);

        input.onchange = async (e) => {
            try {
                const file = e.target.files[0];
                if (!file) {
                    resolve(null);
                    return;
                }

                const arrayBuffer = await file.arrayBuffer();
                const uint8Array = new Uint8Array(arrayBuffer);

                const virtualPath = "/str/" + file.name;
                await cheerpOSAddStringFile(virtualPath, uint8Array);

                resolve(virtualPath);
            } catch (err) {
                console.error("Error reading file:", err);
                resolve(null);
            } finally {
                input.remove();
            }
        };

        input.oncancel = () => {
            input.remove();
            resolve(null);
        };

        input.click();
    });
}


async function main() {
  await cheerpjInit(
    {
      version: 17,
      natives: { Java_wprover_CheerpJIntegration_WebFileChooser_triggerJsFileDialog }
    }
  );
  cheerpjCreateDisplay(-1, -1, document.body);
  await cheerpjRunJar("/app/jgex.jar");
}

main().catch((err) => {
  console.error("CheerpJ execution error:", err);
});
