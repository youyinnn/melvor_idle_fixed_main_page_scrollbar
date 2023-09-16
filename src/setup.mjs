export function setup({ onModsLoaded, onCharacterLoaded, onInterfaceReady }) {
  onInterfaceReady((ctx) => {
    // Build or modify in-game UI elements
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    document.getElementById("page-container").style.overflowY =
      "none !imporytan";
  });
}
