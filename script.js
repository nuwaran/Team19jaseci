// let currentWord = "";
// let isLoading = false;
// let previousGuesses = [];

// // Enhanced send functionality
// document.getElementById("scissor").onclick = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/walker/echo", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         history: previousGuesses,
//       }),
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     const result = data.reports?.[0]?.echo;

//     recordGuess(result);

//     if (result === "scissor") {
//       document.getElementById("show").innerHTML = "success";
//     } else {
//       document.getElementById("show").innerHTML = result;
//     }
//   } catch (err) {
//     console.error("API check error:", err);
//     showStatus("❌ Error checking API status", "error");
//   } finally {
//     setLoading(false);
//   }
// };

// document.getElementById("paper").onclick = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/walker/echo", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         history: previousGuesses,
//       }),
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     const result = data.reports?.[0]?.echo;

//     recordGuess(result);

//     if (result === "paper") {
//       document.getElementById("show").innerHTML = "success";
//     } else {
//       document.getElementById("show").innerHTML = result;
//     }
//   } catch (err) {
//     console.error("API check error:", err);
//     showStatus("❌ Error checking API status", "error");
//   } finally {
//     setLoading(false);
//   }
// };

// document.getElementById("rock").onclick = async () => {
//   try {
//     const res = await fetch("http://localhost:8000/walker/echo", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         history: previousGuesses,
//       }),
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     const result = data.reports?.[0]?.echo;

//     recordGuess(result);

//     if (result === "rock") {
//       document.getElementById("show").innerHTML = "success";
//     } else {
//       document.getElementById("show").innerHTML = result;
//     }
//   } catch (err) {
//     console.error("API check error:", err);
//     showStatus("❌ Error checking API status", "error");
//   } finally {
//     setLoading(false);
//   }
// };

// // Enhanced check API status
// document.getElementById("check").onclick = async () => {
//   if (isLoading) return;

//   setLoading(true);
//   showStatus("Checking API status...", "loading");

//   try {
//     const res = await fetch("http://localhost:8000/walker/check_env", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     const apiKey = data.reports?.[0]?.GROQ_API_KEY;

//     displayApiStatus(apiKey);

//     if (apiKey && apiKey !== "Not set") {
//       showStatus("API key is configured", "success");
//     } else {
//       showStatus("API key is not configured", "error");
//     }
//   } catch (err) {
//     console.error("API check error:", err);
//     showStatus("❌ Error checking API status", "error");
//   } finally {
//     setLoading(false);
//   }
// };

// // Clear results
// document.getElementById("clear").onclick = () => {
//   document.getElementById("result").classList.add("hidden");
//   document.getElementById("check_result").classList.add("hidden");
//   document.getElementById("msg").value = "";
//   currentWord = "";
//   hideStatus();
// };

// // Enter key support
// document.getElementById("msg").addEventListener("keypress", (e) => {
//   if (e.key === "Enter" && !isLoading) {
//     document.getElementById("send").click();
//   }
// });

// // Helper functions
// function setLoading(loading) {
//   isLoading = loading;
//   const sendBtn = document.getElementById("send");
//   const btnText = sendBtn.querySelector(".btn-text");

//   if (loading) {
//     sendBtn.disabled = true;
//     btnText.innerHTML = '<span class="loading-spinner"></span>Searching...';
//   } else {
//     sendBtn.disabled = false;
//     btnText.textContent = "Search";
//   }
// }

// function showStatus(message, type) {
//   // Remove existing status
//   const existingStatus = document.querySelector(".status");
//   if (existingStatus) {
//     existingStatus.remove();
//   }

//   const statusDiv = document.createElement("div");
//   statusDiv.className = `status ${type}`;

//   if (type === "loading") {
//     statusDiv.innerHTML = `<span class="loading-spinner"></span>${message}`;
//   } else {
//     statusDiv.textContent = message;
//   }

//   const container = document.querySelector(".result-container");
//   container.insertBefore(statusDiv, container.firstChild);
// }

// function hideStatus() {
//   const status = document.querySelector(".status");
//   if (status) {
//     status.remove();
//   }
// }

// function displayDefinition(echo) {
//   const resultDiv = document.getElementById("result");

//   // Try to parse the response more intelligently
//   const lines = echo.split("\n").filter((line) => line.trim());
//   let definition = "";
//   let examples = [];

//   // Look for numbered examples
//   const examplePattern = /^\d+\.\s*(.+)/;
//   let foundExamples = false;

//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i].trim();
//     const match = line.match(examplePattern);

//     if (match) {
//       examples.push(match[1]);
//       foundExamples = true;
//     } else if (!foundExamples && line) {
//       definition += line + " ";
//     }
//   }

//   // Clean up definition
//   definition = definition.trim();

//   // If no clear separation found, try alternative parsing
//   if (!definition || examples.length === 0) {
//     const match = echo.match(/^(.*?)\s*1\.\s*(.+)/s);
//     if (match) {
//       definition = match[1].trim();
//       const examplesText = "1. " + match[2].trim();
//       examples = examplesText.split(/\d+\.\s+/).filter((e) => e.trim());
//     } else {
//       definition = echo;
//     }
//   }

//   let html = `
//                 <div class="result-box">
//                     <div class="word-display">${currentWord}</div>
//                     <div class="definition">${definition}</div>
//             `;

//   if (examples.length > 0) {
//     html += `
//                     <div class="examples">
//                         <h4>Examples:</h4>
//                         <ol>
//                 `;
//     examples.forEach((example) => {
//       if (example.trim()) {
//         html += `<li>${example.trim()}</li>`;
//       }
//     });
//     html += `</ol></div>`;
//   }

//   html += `</div>`;

//   resultDiv.innerHTML = html;
//   resultDiv.classList.remove("hidden");
// }

// function displayApiStatus(apiKey) {
//   const checkResultDiv = document.getElementById("check_result");

//   const maskedKey =
//     apiKey && apiKey !== "Not set"
//       ? apiKey.substring(0, 8) + "..." + apiKey.substring(apiKey.length - 4)
//       : apiKey;

//   checkResultDiv.innerHTML = `
//                 <div class="result-box">
//                     <h3>🔑 API Configuration</h3>
//                     <div class="api-status">
//                         <strong>GROQ_API_KEY:</strong> ${maskedKey}
//                     </div>
//                 </div>
//             `;
//   checkResultDiv.classList.remove("hidden");
// }

// // Auto-focus on input when page loads
// window.addEventListener("load", () => {
//   document.getElementById("msg").focus();
// });

// function recordGuess(result) {
//   previousGuesses.push(result);

//   // Optionally limit the history length to avoid big payloads
//   if (previousGuesses.length > 10) previousGuesses.shift();
// }

let currentScore = 10;
let wins = 0;
let losses = 0;
let isLoading = false;
let previousGuesses = [];
let gameOver = false;

const choices = {
  rock: { icon: "🪨", name: "Rock" },
  paper: { icon: "📄", name: "Paper" },
  scissor: { icon: "✂️", name: "Scissors" },
};

// Game logic
function determineWinner(playerChoice, aiChoice) {
  if (playerChoice === aiChoice) return "tie";

  const winConditions = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper",
  };

  return winConditions[playerChoice] === aiChoice ? "win" : "lose";
}

function updateScore(result) {
  const scoreElement = document.getElementById("score");
  const scoreChangeElement = document.getElementById("score-change");

  let change = 0;
  let changeText = "";
  let changeClass = "";

  switch (result) {
    case "win":
      change = 5;
      changeText = "+5 points!";
      changeClass = "score-gain";
      wins++;
      document.getElementById("wins").textContent = wins;
      break;
    case "lose":
      change = -5;
      changeText = "-5 points";
      changeClass = "score-loss";
      losses++;
      document.getElementById("losses").textContent = losses;
      break;
    case "tie":
      changeText = "No change";
      changeClass = "";
      break;
  }

  currentScore += change;
  scoreElement.textContent = currentScore;
  scoreChangeElement.textContent = changeText;
  scoreChangeElement.className = `score-change ${changeClass}`;

  // Check for game over
  if (currentScore <= 0) {
    gameOver = true;
    currentScore = 0;
    scoreElement.textContent = currentScore;
    showGameOver();
  }
}

function showGameOver() {
  document.getElementById("game-over").classList.remove("hidden");
  disableButtons();
}

function disableButtons() {
  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach((btn) => {
    btn.classList.add("disabled");
    btn.disabled = true;
  });
}

function enableButtons() {
  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("disabled");
    btn.disabled = false;
  });
}

function setLoading(loading) {
  isLoading = loading;
  const loadingElement = document.getElementById("loading");

  if (loading) {
    loadingElement.classList.remove("hidden");
    disableButtons();
  } else {
    loadingElement.classList.add("hidden");
    if (!gameOver) enableButtons();
  }
}

function updateHistory(aiChoice) {
  const historyList = document.getElementById("history-list");
  const historyItem = document.createElement("div");
  historyItem.className = "history-item";
  historyItem.textContent = `AI chose ${choices[aiChoice].name}`;

  historyList.appendChild(historyItem);

  // Keep only last 5 items
  while (historyList.children.length > 6) {
    historyList.removeChild(historyList.firstChild);
  }
}

function showResult(playerChoice, aiChoice, result) {
  const resultSection = document.getElementById("result-section");
  const playerDisplay = document.getElementById("player-display");
  const aiDisplay = document.getElementById("ai-display");
  const outcomeMessage = document.getElementById("outcome-message");

  playerDisplay.textContent = choices[playerChoice].icon;
  aiDisplay.textContent = choices[aiChoice].icon;

  let message = "";
  let messageClass = "";

  switch (result) {
    case "win":
      message = "🎉 You Win!";
      messageClass = "win";
      break;
    case "lose":
      message = "😔 You Lose!";
      messageClass = "lose";
      break;
    case "tie":
      message = "🤝 It's a Tie!";
      messageClass = "tie";
      break;
  }

  outcomeMessage.textContent = message;
  outcomeMessage.className = `outcome-message ${messageClass}`;

  resultSection.classList.remove("hidden");
  updateScore(result);
}

async function makeMove(playerChoice) {
  if (isLoading || gameOver) return;

  setLoading(true);

  try {
    const res = await fetch("http://localhost:8000/walker/echo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        history: previousGuesses,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const aiChoice = data.reports?.[0]?.echo?.toLowerCase();

    if (!choices[aiChoice]) {
      throw new Error("Invalid AI response");
    }

    // Record the AI's choice
    previousGuesses.push(aiChoice);
    if (previousGuesses.length > 10) {
      previousGuesses.shift();
    }

    const result = determineWinner(playerChoice, aiChoice);
    showResult(playerChoice, aiChoice, result);
    updateHistory(aiChoice);
  } catch (err) {
    console.error("Game error:", err);
    alert(
      "Sorry, there was an error connecting to the game server. Please try again."
    );
  } finally {
    setLoading(false);
  }
}

function restartGame() {
  currentScore = 10;
  wins = 0;
  losses = 0;
  previousGuesses = [];
  gameOver = false;

  document.getElementById("score").textContent = currentScore;
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("result-section").classList.add("hidden");
  document.getElementById("score-change").textContent = "";

  // Reset history
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = '<div class="history-item">Game restarted</div>';

  enableButtons();
}

// Event listeners
document.getElementById("rock").onclick = () => makeMove("rock");
document.getElementById("paper").onclick = () => makeMove("paper");
document.getElementById("scissor").onclick = () => makeMove("scissor");
document.getElementById("restart-btn").onclick = restartGame;

// Add some visual feedback on button press
document.querySelectorAll(".choice-btn").forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "translateY(-2px) scale(0.95)";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});
