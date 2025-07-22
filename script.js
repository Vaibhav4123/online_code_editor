const tabs = document.querySelectorAll(".tab");
const editors = document.querySelectorAll(".code-editor");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".code-editor.active").classList.remove("active");

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

document.getElementById("run").addEventListener("click", () => {
  const html = document.getElementById("html").value;
  const css = `<style>${document.getElementById("css").value}</style>`;
  const js = `<script>${document.getElementById("js").value}<\/script>`;
  const output = document.getElementById("output");

  output.srcdoc = html + css + js;
});

document.getElementById("themeToggle").addEventListener("click", () => {
  const body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    document.getElementById("themeToggle").textContent = "🌙 Dark";
  } else {
    body.classList.add("dark");
    document.getElementById("themeToggle").textContent = "☀ Light";
  }
});

// Download project as HTML file
document.getElementById("download").addEventListener("click", () => {
  const htmlContent = document.getElementById("html").value;
  const cssContent = document.getElementById("css").value;
  const jsContent = document.getElementById("js").value;

  const blob = new Blob(
    [
      `
<!DOCTYPE html>
<html>
<head>
  <style>${cssContent}</style>
</head>
<body>
  ${htmlContent}
  <script>${jsContent}<\/script>
</body>
</html>`,
    ],
    { type: "text/html" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "live-code.html";
  a.click();
});

// Export stub (Gist or share link – logic to be added)
document.getElementById("export").addEventListener("click", () => {
  alert("Export feature coming soon! Can integrate GitHub Gist or Pastebin.");
});




























