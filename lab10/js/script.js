document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nicknameInput = document.getElementById("nickname");
  const startScreen = document.getElementById("start-screen");
  const gameContainer = document.getElementById("game-container");

  // Start Game button
  startBtn.addEventListener("click", () => {
    const nickname = nicknameInput.value.trim();
    if (!nickname) {
      alert("Нэрээ оруулна уу.");
      return;
    }

    // Save nickname to cookies
    document.cookie = `nickname=${nickname}; path=/; max-age=86400`;

    // Hide the start screen and show the game container
    startScreen.classList.add("hidden");
    gameContainer.classList.remove("hidden");

    // Start the game
    startGame();
  });

  function startGame() {
    console.log("Game started!");
    // This is where you can add your game logic.
    // For example, load a random word, create the keyboard, handle guesses, etc.
  }

});
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nicknameInput = document.getElementById("nickname");
  const startScreen = document.getElementById("start-screen");
  const gameContainer = document.getElementById("game-container");
  const keyboard = document.getElementById("keyboard");

  // Start Game button
  startBtn.addEventListener("click", () => {
    const nickname = nicknameInput.value.trim();
    if (!nickname) {
      alert("Нэрээ оруулна уу.");
      return;
    }

    // Save nickname to cookies
    document.cookie = `nickname=${nickname}; path=/; max-age=86400`;

    // Hide the start screen and show the game container
    startScreen.classList.add("hidden");
    gameContainer.classList.remove("hidden");

    // Show the keyboard
    keyboard.classList.remove("hidden");

    // Start the game
    startGame();
  });

  function startGame() {
    console.log("Game started!");
    // Add logic to handle the word guessing and other game mechanics
  }
});
