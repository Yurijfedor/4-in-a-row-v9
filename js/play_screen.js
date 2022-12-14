if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".circle_inside");
    const result = document.querySelector("#result");
    const winner = document.querySelector(".show_the_winner_title");

    const scoreFirstPlayer = document.querySelector("#result_1");
    let scoreFirstPlOut = 0;
    scoreFirstPlayer.innerHTML = 0;
    const scoreSecondPlayer = document.querySelector("#result_2");
    scoreSecondPlayer.innerHTML = 0;
    let scoreSecondPlOut = 0;
    let roundCount = document.querySelector("#roundCount_id");
    let scoreRound = 1;
    roundCount.innerHTML = "Round: " + 1;

    // SET PLAYERS NAME

    let playerOneName = "Player 1";
    let playerTwoName = "Player 2";

    function setPlayersName() {
      let audio = new Audio();
      audio.src = "../sounds/click.mp3";
      audio.autoplay = true;
      audio.volume = 0.5;
      setTimeout(() => {
        playerOneName = document.getElementById("inp_1").value;
        playerTwoName = document.getElementById("inp_2").value;

        const space1 = playerOneName.trim() == "";
        const space2 = playerTwoName.trim() == "";

        if (space1) {
          document.getElementById("out_block").innerHTML =
            "Please enter the player's name with length characters from 1 to 10";
          return;
        } else if (space2) {
          document.getElementById("out_block").innerHTML =
            "Please enter the player's name with length characters from 1 to 10";
          return;
        } else if (playerOneName.length > 10 || playerTwoName.length > 10) {
          document.getElementById("out_block").innerHTML =
            "The entered player's name can't be more than 10 characters. Entered name length characters can be from 1 to 10 characters";
          return;
        } else {
          document.getElementById("pl_1sub").innerHTML = playerOneName;
          document.getElementById("pl_2sub").innerHTML = playerTwoName;
          document.getElementById("header_id").style.opacity = 1;
          document.getElementById("name_players_wrap").style.display = "none";
          document.getElementById("show_the_winner").style.display = "none";
          document.getElementById("game_screen").style.opacity = 1;
        }
        document.getElementById("out_block").innerHTML = " ";
      }, 300);
    }

    function cancelSetName() {
      let audio = new Audio();
      audio.src = "../sounds/click.mp3";
      audio.autoplay = true;
      audio.volume = 0.5;
      setTimeout(() => {
        document.getElementById("header_id").style.opacity = 1;
        document.getElementById("name_players_wrap").style.display = "none";
        document.getElementById("game_screen").style.opacity = 1;
      }, 300);
    }

    document.getElementById("btn_7").onclick = setPlayersName;
    document.getElementById("btn_8").onclick = cancelSetName;

    // END OF SET PLAYERS NAME

    // GAME MENU

    function backToMainMenu() {
      let audio = new Audio();
      audio.src = "../sounds/click.mp3";
      audio.autoplay = true;
      audio.volume = 0.5;
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 300);
    }

    function settings() {
      let audio = new Audio();
      audio.src = "../sounds/click.mp3";
      audio.autoplay = true;
      audio.volume = 0.5;
    }

    function backToGame() {
      let audio = new Audio();
      audio.src = "../sounds/click.mp3";
      audio.autoplay = true;
      audio.volume = 0.5;
      setTimeout(() => {
        document.getElementById("game_menu").style.display = "none";
      }, 300);
    }

    function gameMenu() {
      let audio = new Audio();
      audio.src = "../sounds/click.mp3";
      audio.autoplay = true;
      audio.volume = 0.5;
      setTimeout(() => {
        document.getElementById("game_menu").style.display = "flex";
      }, 300);
    }

    function NewGame() {
      let audio = new Audio();
      audio.src = "../sounds/click.mp3";
      audio.autoplay = true;
      audio.volume = 0.5;
      setTimeout(() => {
        location.reload();
        return false;
      }, 300);
    }

    document.getElementById("btn_9").onclick = backToMainMenu;
    document.getElementById("btn_10").onclick = settings;
    document.getElementById("btn_11").onclick = backToGame;
    document.getElementById("wrap_menu").onclick = gameMenu;
    document.getElementById("btn_12").onclick = NewGame;
    document.getElementById("btn_5").onclick = NewGame;

    // END OF GAME MENU

    // RELOAD BOARD

    document.getElementById("btn_4").onclick = reloadBoard;

    function reloadBoard() {
      let audio = new Audio();
      audio.src = "../sounds/click.mp3";
      audio.autoplay = true;
      audio.volume = 0.5;
      const yellowWins = document.querySelector(".wrap_result_win_1pl");
      scoreRound++;
      roundCount.innerHTML = "Round: " + scoreRound;
      document
        .querySelector("button.next_round_visible")
        .setAttribute("class", "next_round");
      document.querySelector("div.block_on").setAttribute("class", "block_off");
      document.querySelector(".result").textContent = "Who's the round winner?";

      if (scoreRound === 5) {
        roundCount.innerHTML = "Final round: " + scoreRound;
      }

      if (yellowWins) {
        document
          .querySelector("div.wrap_result_win_1pl")
          .setAttribute("class", "wrap_result");
      } else {
        document
          .querySelector("div.wrap_result_win_2pl")
          .setAttribute("class", "wrap_result");
      }
      secondPlColor();

      const yellowCircle = document.querySelectorAll(".circle_yellow_on_click");
      const redCircle = document.querySelectorAll(".circle_red_on_click");
      yellowCircle.forEach((el) => el.setAttribute("class", "circle_inside"));
      redCircle.forEach((el) => el.setAttribute("class", "circle_inside"));
      yellowCircle.forEach((el) => (el.style.boxShadow = "none"));
      redCircle.forEach((el) => (el.style.boxShadow = "none"));
    }

    // END OF RELOAD BOARD

    // RESTART ROUND

    document.getElementById("btn_6").onclick = restartRound;

    function restartRound() {
      let audio = new Audio();
      audio.src = "../sounds/click.mp3";
      audio.autoplay = true;
      audio.volume = 0.5;
      setTimeout(() => {
        document.querySelector(".result").textContent =
          "Who's the round winner?";
        document
          .querySelector("button.restart_round_visible")
          .setAttribute("class", "restart_round");
        document
          .querySelector("div.block_on")
          .setAttribute("class", "block_off");
        const yellowCircle = document.querySelectorAll(
          ".circle_yellow_on_click"
        );
        const redCircle = document.querySelectorAll(".circle_red_on_click");
        yellowCircle.forEach((el) => el.setAttribute("class", "circle_inside"));
        redCircle.forEach((el) => el.setAttribute("class", "circle_inside"));
        yellowCircle.forEach((el) => (el.style.boxShadow = "none"));
        redCircle.forEach((el) => (el.style.boxShadow = "none"));
        secondPlColor();
      }, 300);
    }

    // END OF RESTART ROUND

    const winningArrays = [
      [0, 1, 2, 3],
      [41, 40, 39, 38],
      [7, 8, 9, 10],
      [34, 33, 32, 31],
      [14, 15, 16, 17],
      [27, 26, 25, 24],
      [21, 22, 23, 24],
      [20, 19, 18, 17],
      [28, 29, 30, 31],
      [13, 12, 11, 10],
      [35, 36, 37, 38],
      [6, 5, 4, 3],
      [0, 7, 14, 21],
      [41, 34, 27, 20],
      [1, 8, 15, 22],
      [40, 33, 26, 19],
      [2, 9, 16, 23],
      [39, 32, 25, 18],
      [3, 10, 17, 24],
      [38, 31, 24, 17],
      [4, 11, 18, 25],
      [37, 30, 23, 16],
      [5, 12, 19, 26],
      [36, 29, 22, 15],
      [6, 13, 20, 27],
      [35, 28, 21, 14],
      [0, 8, 16, 24],
      [41, 33, 25, 17],
      [7, 15, 23, 31],
      [34, 26, 18, 10],
      [14, 22, 30, 38],
      [27, 19, 11, 3],
      [35, 29, 23, 17],
      [6, 12, 18, 24],
      [28, 22, 16, 10],
      [13, 19, 25, 31],
      [21, 15, 9, 3],
      [20, 26, 32, 38],
      [36, 30, 24, 18],
      [5, 11, 17, 23],
      [37, 31, 25, 19],
      [4, 10, 16, 22],
      [2, 10, 18, 26],
      [39, 31, 23, 15],
      [1, 9, 17, 25],
      [40, 32, 24, 16],
      [9, 17, 25, 33],
      [8, 16, 24, 32],
      [11, 17, 23, 29],
      [12, 18, 24, 30],
      [1, 2, 3, 4],
      [5, 4, 3, 2],
      [8, 9, 10, 11],
      [12, 11, 10, 9],
      [15, 16, 17, 18],
      [19, 18, 17, 16],
      [22, 23, 24, 25],
      [26, 25, 24, 23],
      [29, 30, 31, 32],
      [33, 32, 31, 30],
      [36, 37, 38, 39],
      [40, 39, 38, 37],
      [7, 14, 21, 28],
      [8, 15, 22, 29],
      [9, 16, 23, 30],
      [10, 17, 24, 31],
      [11, 18, 25, 32],
      [12, 19, 26, 33],
      [13, 20, 27, 34],
    ];

    // CHECK BOARD

    function checkBoard() {
      for (let y = 0; y < winningArrays.length; y++) {
        const square1 = squares[winningArrays[y][0]];
        const square2 = squares[winningArrays[y][1]];
        const square3 = squares[winningArrays[y][2]];
        const square4 = squares[winningArrays[y][3]];

        // CHECK FOR DRAW

        let countFillSquares = 0;

        for (const char of squares) {
          if (
            char.classList.contains("circle_red_on_click") ||
            char.classList.contains("circle_yellow_on_click")
          ) {
            countFillSquares++;
          }

          if (countFillSquares === 42) {
            document
              .querySelector("div.block_off")
              .setAttribute("class", "block_on");
            document
              .querySelector("button.restart_round")
              .setAttribute(
                "class",
                "restart_round_visible start-game-btn btn-8"
              );
            const yellowCircle = document.querySelectorAll(
              ".circle_yellow_on_click"
            );
            yellowCircle.forEach(
              (el) =>
                (el.style.boxShadow =
                  "0px 2px 0px 0px rgb(0 0 0 / 60%) inset, 0px -2px 0px 0px rgb(255 255 255 / 60%) inset")
            );
            const redCircle = document.querySelectorAll(".circle_red_on_click");
            redCircle.forEach(
              (el) =>
                (el.style.boxShadow =
                  "0px 2px 0px 0px rgb(0 0 0 / 60%) inset, 0px -2px 0px 0px rgb(255 255 255 / 60%) inset")
            );
            winnersPlColors();
            result.innerHTML = "Draw";
            return;
          }
        }

        // END OF CHECK FOR DRAW

        if (
          square1.classList.contains("circle_red_on_click") &&
          square2.classList.contains("circle_red_on_click") &&
          square3.classList.contains("circle_red_on_click") &&
          square4.classList.contains("circle_red_on_click") &&
          scoreRound === 5 &&
          scoreFirstPlOut === scoreSecondPlOut
        ) {
          document
            .querySelector("div.block_off")
            .setAttribute("class", "block_on");
          square1.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square2.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square3.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square4.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          let audio = new Audio();
          audio.src = "../sounds/winner.mp3";
          audio.autoplay = true;
          audio.volume = 0.4;
          setTimeout(() => {
            startConfetti();
            winner.innerHTML = playerTwoName + " " + "the winner !";
            document
              .querySelector(".show_the_winner")
              .setAttribute("class", "show_the_winner_red");
            document
              .querySelector("button.new_game")
              .setAttribute("class", "new_game_visible start-game-btn btn-8");
            result.innerHTML = playerTwoName + " " + "the winner !";
            document.getElementById("block_off_id").style.opacity = "0.5";
            document.getElementById("show_the_winner").style.display = "block";
            square1.classList.add("circle_red_on_click_win");
            square2.classList.add("circle_red_on_click_win");
            square3.classList.add("circle_red_on_click_win");
            square4.classList.add("circle_red_on_click_win");
            document
              .querySelector("div.wrap_result")
              .setAttribute("class", "wrap_result_win_2pl");
            scoreSecondPlOut++;
            scoreSecondPlayer.innerHTML = scoreSecondPlOut;
            winnersPlColors();
            return;
          }, 300);
        } else if (
          square1.classList.contains("circle_yellow_on_click") &&
          square2.classList.contains("circle_yellow_on_click") &&
          square3.classList.contains("circle_yellow_on_click") &&
          square4.classList.contains("circle_yellow_on_click") &&
          scoreRound === 5 &&
          scoreFirstPlOut === scoreSecondPlOut
        ) {
          document
            .querySelector("div.block_off")
            .setAttribute("class", "block_on");
          square1.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square2.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square3.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square4.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          let audio = new Audio();
          audio.src = "../sounds/winner.mp3";
          audio.autoplay = true;
          audio.volume = 0.4;
          setTimeout(() => {
            startConfetti();
            winner.innerHTML = playerOneName + " " + "the winner !";
            document
              .querySelector("button.new_game")
              .setAttribute("class", "new_game_visible start-game-btn btn-8");
            result.innerHTML = playerOneName + " " + "the winner !";
            document.getElementById("block_off_id").style.opacity = "0.5";
            document.getElementById("show_the_winner").style.display = "block";
            square1.classList.add("circle_yellow_on_click_win");
            square2.classList.add("circle_yellow_on_click_win");
            square3.classList.add("circle_yellow_on_click_win");
            square4.classList.add("circle_yellow_on_click_win");
            document
              .querySelector("div.wrap_result")
              .setAttribute("class", "wrap_result_win_1pl");
            scoreFirstPlOut++;
            scoreFirstPlayer.innerHTML = scoreFirstPlOut;
            winnersPlColors();
            return;
          }, 300);
        } else if (
          square1.classList.contains("circle_yellow_on_click") &&
          square2.classList.contains("circle_yellow_on_click") &&
          square3.classList.contains("circle_yellow_on_click") &&
          square4.classList.contains("circle_yellow_on_click") &&
          scoreRound === 5 &&
          scoreFirstPlOut < scoreSecondPlOut
        ) {
          document
            .querySelector("div.block_off")
            .setAttribute("class", "block_on");
          square1.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square2.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square3.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square4.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          let audio = new Audio();
          audio.src = "../sounds/winner.mp3";
          audio.autoplay = true;
          audio.volume = 0.4;
          setTimeout(() => {
            startConfetti();
            winner.innerHTML = playerTwoName + " " + "the winner !";
            document
              .querySelector(".show_the_winner")
              .setAttribute("class", "show_the_winner_red");
            document
              .querySelector("button.new_game")
              .setAttribute("class", "new_game_visible start-game-btn btn-8");
            result.innerHTML = playerTwoName + " " + "the winner !";
            document.getElementById("block_off_id").style.opacity = "0.5";
            document.getElementById("show_the_winner").style.display = "block";
            square1.classList.add("circle_yellow_on_click_win");
            square2.classList.add("circle_yellow_on_click_win");
            square3.classList.add("circle_yellow_on_click_win");
            square4.classList.add("circle_yellow_on_click_win");
            document
              .querySelector("div.wrap_result")
              .setAttribute("class", "wrap_result_win_2pl");
            scoreFirstPlOut++;
            scoreFirstPlayer.innerHTML = scoreFirstPlOut;
            winnersPlColors();
            return;
          }, 300);
        } else if (
          square1.classList.contains("circle_yellow_on_click") &&
          square2.classList.contains("circle_yellow_on_click") &&
          square3.classList.contains("circle_yellow_on_click") &&
          square4.classList.contains("circle_yellow_on_click") &&
          scoreRound === 5 &&
          scoreFirstPlOut > scoreSecondPlOut
        ) {
          document
            .querySelector("div.block_off")
            .setAttribute("class", "block_on");
          square1.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square2.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square3.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square4.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          let audio = new Audio();
          audio.src = "../sounds/winner.mp3";
          audio.autoplay = true;
          audio.volume = 0.4;
          setTimeout(() => {
            startConfetti();
            winner.innerHTML = playerOneName + " " + "the winner !";
            document
              .querySelector("button.new_game")
              .setAttribute("class", "new_game_visible start-game-btn btn-8");
            result.innerHTML = playerOneName + " " + "the winner !";
            document.getElementById("block_off_id").style.opacity = "0.5";
            document.getElementById("show_the_winner").style.display = "block";
            square1.classList.add("circle_yellow_on_click_win");
            square2.classList.add("circle_yellow_on_click_win");
            square3.classList.add("circle_yellow_on_click_win");
            square4.classList.add("circle_yellow_on_click_win");
            document
              .querySelector("div.wrap_result")
              .setAttribute("class", "wrap_result_win_1pl");
            scoreFirstPlOut++;
            scoreFirstPlayer.innerHTML = scoreFirstPlOut;
            winnersPlColors();
            return;
          }, 300);
        } else if (
          square1.classList.contains("circle_red_on_click") &&
          square2.classList.contains("circle_red_on_click") &&
          square3.classList.contains("circle_red_on_click") &&
          square4.classList.contains("circle_red_on_click") &&
          scoreRound === 5 &&
          scoreFirstPlOut > scoreSecondPlOut
        ) {
          document
            .querySelector("div.block_off")
            .setAttribute("class", "block_on");
          square1.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square2.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square3.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square4.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          let audio = new Audio();
          audio.src = "../sounds/winner.mp3";
          audio.autoplay = true;
          audio.volume = 0.4;
          setTimeout(() => {
            startConfetti();
            winner.innerHTML = playerOneName + " " + "the winner !";
            document
              .querySelector("button.new_game")
              .setAttribute("class", "new_game_visible start-game-btn btn-8");
            result.innerHTML = playerOneName + " " + "the winner !";
            document.getElementById("block_off_id").style.opacity = "0.5";
            document.getElementById("show_the_winner").style.display = "block";
            square1.classList.add("circle_red_on_click_win");
            square2.classList.add("circle_red_on_click_win");
            square3.classList.add("circle_red_on_click_win");
            square4.classList.add("circle_red_on_click_win");
            document
              .querySelector("div.wrap_result")
              .setAttribute("class", "wrap_result_win_1pl");
            scoreSecondPlOut++;
            scoreSecondPlayer.innerHTML = scoreSecondPlOut;
            winnersPlColors();
            return;
          }, 300);
        } else if (
          square1.classList.contains("circle_red_on_click") &&
          square2.classList.contains("circle_red_on_click") &&
          square3.classList.contains("circle_red_on_click") &&
          square4.classList.contains("circle_red_on_click") &&
          scoreRound === 5 &&
          scoreFirstPlOut < scoreSecondPlOut
        ) {
          document
            .querySelector("div.block_off")
            .setAttribute("class", "block_on");
          square1.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square2.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square3.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square4.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          let audio = new Audio();
          audio.src = "../sounds/winner.mp3";
          audio.autoplay = true;
          audio.volume = 0.4;
          setTimeout(() => {
            startConfetti();
            winner.innerHTML = playerTwoName + " " + "the winner !";
            document
              .querySelector(".show_the_winner")
              .setAttribute("class", "show_the_winner_red");
            document
              .querySelector("button.new_game")
              .setAttribute("class", "new_game_visible start-game-btn btn-8");
            result.innerHTML = playerTwoName + " " + "the winner !";
            document.getElementById("block_off_id").style.opacity = "0.5";
            document.getElementById("show_the_winner").style.display = "block";
            square1.classList.add("circle_red_on_click_win");
            square2.classList.add("circle_red_on_click_win");
            square3.classList.add("circle_red_on_click_win");
            square4.classList.add("circle_red_on_click_win");
            document
              .querySelector("div.wrap_result")
              .setAttribute("class", "wrap_result_win_2pl");
            scoreSecondPlOut++;
            scoreSecondPlayer.innerHTML = scoreSecondPlOut;
            winnersPlColors();
            return;
          }, 300);
        } else if (
          square1.classList.contains("circle_yellow_on_click") &&
          square2.classList.contains("circle_yellow_on_click") &&
          square3.classList.contains("circle_yellow_on_click") &&
          square4.classList.contains("circle_yellow_on_click")
        ) {
          document
            .querySelector("div.block_off")
            .setAttribute("class", "block_on");
          square1.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square2.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square3.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square4.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          let audio = new Audio();
          audio.src = "../sounds/win_round.mp3";
          audio.autoplay = true;
          audio.volume = 0.3;
          setTimeout(() => {
            result.innerHTML = playerOneName + " " + "wins the round !";
            square1.classList.add("circle_yellow_on_click_win");
            square2.classList.add("circle_yellow_on_click_win");
            square3.classList.add("circle_yellow_on_click_win");
            square4.classList.add("circle_yellow_on_click_win");
            document
              .querySelector("div.wrap_result")
              .setAttribute("class", "wrap_result_win_1pl");
            document
              .querySelector("button.next_round")
              .setAttribute("class", "next_round_visible custom-btn btn-7");
            scoreFirstPlOut++;
            scoreFirstPlayer.innerHTML = scoreFirstPlOut;
            winnersPlColors();
          }, 300);
        } else if (
          square1.classList.contains("circle_red_on_click") &&
          square2.classList.contains("circle_red_on_click") &&
          square3.classList.contains("circle_red_on_click") &&
          square4.classList.contains("circle_red_on_click")
        ) {
          document
            .querySelector("div.block_off")
            .setAttribute("class", "block_on");
          square1.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square2.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square3.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          square4.style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 5px 10px rgb(0, 172, 9)";
          let audio = new Audio();
          audio.src = "../sounds/win_round.mp3";
          audio.autoplay = true;
          audio.volume = 0.3;
          setTimeout(() => {
            result.innerHTML = playerTwoName + " " + "wins the round !";
            square1.classList.add("circle_red_on_click_win");
            square2.classList.add("circle_red_on_click_win");
            square3.classList.add("circle_red_on_click_win");
            square4.classList.add("circle_red_on_click_win");
            document
              .querySelector("div.wrap_result")
              .setAttribute("class", "wrap_result_win_2pl");
            document
              .querySelector("button.next_round")
              .setAttribute("class", "next_round_visible custom-btn btn-7");
            scoreSecondPlOut++;
            scoreSecondPlayer.innerHTML = scoreSecondPlOut;
            winnersPlColors();
          }, 300);
        }
      }
    }

    // END CHECK BOARD

    // BOARD CLICK

    for (let i = 0; squares.length; i++) {
      squares[i].onclick = () => {
        const rowYellow = squares[i % 7].classList.contains(
          "circle_yellow_on_click"
        );
        const rowRed = squares[i % 7].classList.contains("circle_red_on_click");
        const rowYellow7 = squares[(i % 7) + 7].classList.contains(
          "circle_yellow_on_click"
        );
        const rowRed7 = squares[(i % 7) + 7].classList.contains(
          "circle_red_on_click"
        );
        const rowYellow14 = squares[(i % 7) + 14].classList.contains(
          "circle_yellow_on_click"
        );
        const rowRed14 = squares[(i % 7) + 14].classList.contains(
          "circle_red_on_click"
        );
        const rowYellow21 = squares[(i % 7) + 21].classList.contains(
          "circle_yellow_on_click"
        );
        const rowRed21 = squares[(i % 7) + 21].classList.contains(
          "circle_red_on_click"
        );
        const rowYellow28 = squares[(i % 7) + 28].classList.contains(
          "circle_yellow_on_click"
        );
        const rowRed28 = squares[(i % 7) + 28].classList.contains(
          "circle_red_on_click"
        );
        const rowYellow35 = squares[(i % 7) + 35].classList.contains(
          "circle_yellow_on_click"
        );
        const rowRed35 = squares[(i % 7) + 35].classList.contains(
          "circle_red_on_click"
        );
        console.log(rowYellow);

        // ANIMATION

        // END OF ANIMATION

        if (checkColor_1() && (rowYellow || rowRed)) {
          return;
        } else if (checkColor_2() && (rowYellow || rowRed)) {
          return;
        } else if (checkColor_1() && (rowYellow7 || rowRed7)) {
          squares[i % 7].classList.add("circle_yellow_on_click");
          squares[i % 7].classList.add("fall");

          squares[i % 7].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const redCircle = document.querySelectorAll(".circle_red_on_click");
          redCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          firstPlColor();
        } else if (checkColor_2() && (rowYellow7 || rowRed7)) {
          squares[i % 7].classList.add("circle_red_on_click");
          squares[i % 7].classList.add("fall");

          squares[i % 7].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const yellowCircle = document.querySelectorAll(
            ".circle_yellow_on_click"
          );
          yellowCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          secondPlColor();
        } else if (checkColor_1() && (rowYellow14 || rowRed14)) {
          squares[(i % 7) + 7].classList.add("circle_yellow_on_click");
          squares[(i % 7) + 7].classList.add("fall");

          squares[(i % 7) + 7].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const redCircle = document.querySelectorAll(".circle_red_on_click");
          redCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          firstPlColor();
        } else if (checkColor_2() && (rowYellow14 || rowRed14)) {
          squares[(i % 7) + 7].classList.add("circle_red_on_click");
          squares[(i % 7) + 7].classList.add("fall");

          squares[(i % 7) + 7].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const yellowCircle = document.querySelectorAll(
            ".circle_yellow_on_click"
          );
          yellowCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          secondPlColor();
        } else if (checkColor_1() && (rowYellow21 || rowRed21)) {
          squares[(i % 7) + 14].classList.add("circle_yellow_on_click");
          squares[(i % 7) + 14].classList.add("fall");

          squares[(i % 7) + 14].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const redCircle = document.querySelectorAll(".circle_red_on_click");
          redCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          firstPlColor();
        } else if (checkColor_2() && (rowYellow21 || rowRed21)) {
          squares[(i % 7) + 14].classList.add("circle_red_on_click");
          squares[(i % 7) + 14].classList.add("fall");

          squares[(i % 7) + 14].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const yellowCircle = document.querySelectorAll(
            ".circle_yellow_on_click"
          );
          yellowCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          secondPlColor();
        } else if (checkColor_1() && (rowYellow28 || rowRed28)) {
          squares[(i % 7) + 21].classList.add("circle_yellow_on_click");
          squares[(i % 7) + 21].classList.add("fall");

          squares[(i % 7) + 21].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const redCircle = document.querySelectorAll(".circle_red_on_click");
          redCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          firstPlColor();
        } else if (checkColor_2() && (rowYellow28 || rowRed28)) {
          squares[(i % 7) + 21].classList.add("circle_red_on_click");
          squares[(i % 7) + 21].classList.add("fall");

          squares[(i % 7) + 21].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const yellowCircle = document.querySelectorAll(
            ".circle_yellow_on_click"
          );
          yellowCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          secondPlColor();
        } else if (checkColor_1() && (rowYellow35 || rowRed35)) {
          squares[(i % 7) + 28].classList.add("circle_yellow_on_click");
          squares[(i % 7) + 28].classList.add("fall");

          squares[(i % 7) + 28].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const redCircle = document.querySelectorAll(".circle_red_on_click");
          redCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          firstPlColor();
        } else if (checkColor_2() && (rowYellow35 || rowRed35)) {
          squares[(i % 7) + 28].classList.add("circle_red_on_click");
          squares[(i % 7) + 28].classList.add("fall");

          squares[(i % 7) + 28].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const yellowCircle = document.querySelectorAll(
            ".circle_yellow_on_click"
          );
          yellowCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          secondPlColor();
        } else if (checkColor_1()) {
          squares[(i % 7) + 35].classList.add("circle_yellow_on_click");
          squares[(i % 7) + 35].classList.add("fall");

          squares[(i % 7) + 35].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const redCircle = document.querySelectorAll(".circle_red_on_click");
          redCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          firstPlColor();
        } else if (checkColor_2()) {
          squares[(i % 7) + 35].classList.add("circle_red_on_click");
          squares[(i % 7) + 35].classList.add("fall");

          squares[(i % 7) + 35].style.boxShadow =
            "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 0px 9px 4px rgb(255, 255, 255)";
          const yellowCircle = document.querySelectorAll(
            ".circle_yellow_on_click"
          );
          yellowCircle.forEach(
            (el) =>
              (el.style.boxShadow =
                "0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset, 0px -2px 0px 0px rgba(255, 255, 255, 0.6) inset")
          );

          secondPlColor();
        }
        checkBoard();
      };
    }

    // END OF BOARD CLICK
  });

  function firstPlColor() {
    document.getElementById("pl_1").style.backgroundColor =
      "rgb(255, 255, 255)";
    document.getElementById("pl_1sub").style.color = "black";
    document.getElementById("after_players_title_1").style.color = "black";
    document.getElementById("pl_2sub").style.color = "white";
    document.getElementById("after_players_title_2").style.color = "white";
    document.getElementById("result_1").style.color = "black";
    document.getElementById("result_2").style.color = "white";
    document.getElementById("pl_2").style.backgroundColor = "rgb(72, 185, 44)";
    document.getElementById("pl_1").style.boxShadow = "none";
    document.getElementById("pl_2").style.boxShadow =
      "0px 0px 4px 4px rgba(31,135,43,1)";
  }

  function secondPlColor() {
    document.getElementById("pl_1").style.backgroundColor = "rgb(72, 185, 44)";
    document.getElementById("pl_2sub").style.color = "black";
    document.getElementById("after_players_title_2").style.color = "black";
    document.getElementById("pl_1sub").style.color = "white";
    document.getElementById("after_players_title_1").style.color = "white";
    document.getElementById("result_1").style.color = "white";
    document.getElementById("result_2").style.color = "black";
    document.getElementById("pl_2").style.backgroundColor =
      "rgb(255, 255, 255)";
    document.getElementById("pl_2").style.boxShadow = "none";
    document.getElementById("pl_1").style.boxShadow =
      "0px 0px 4px 4px rgba(31,135,43,1)";
  }

  function winnersPlColors() {
    document.getElementById("pl_1").style.backgroundColor =
      "rgb(255, 255, 255)";
    document.getElementById("pl_2sub").style.color = "black";
    document.getElementById("after_players_title_2").style.color = "black";
    document.getElementById("after_players_title_1").style.color = "black";
    document.getElementById("pl_1sub").style.color = "black";
    document.getElementById("pl_2").style.backgroundColor =
      "rgb(255, 255, 255)";
    document.getElementById("pl_1").style.boxShadow = "none";
    document.getElementById("pl_2").style.boxShadow = "none";
    document.getElementById("result_2").style.color = "black";
    document.getElementById("result_1").style.color = "black";
  }

  function checkColor_1() {
    element = document.getElementById("pl_1");
    color = window.getComputedStyle(element).backgroundColor;

    if (color == "rgb(72, 185, 44)") {
      return true;
    } else {
      return false;
    }
  }

  function checkColor_2() {
    element = document.getElementById("pl_2");
    color = window.getComputedStyle(element).backgroundColor;

    if (color == "rgb(72, 185, 44)") {
      return true;
    } else {
      return false;
    }
  }

  // CONFETTI

  var maxParticleCount = 300; //set max confetti count
  var particleSpeed = 2; //set the particle animation speed
  var startConfetti; //call to start confetti animation
  var stopConfetti; //call to stop adding confetti
  var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
  var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

  (function () {
    startConfetti = startConfettiInner;
    stopConfetti = stopConfettiInner;
    toggleConfetti = toggleConfettiInner;
    removeConfetti = removeConfettiInner;
    var colors = [
      "DodgerBlue",
      "OliveDrab",
      "Gold",
      "Pink",
      "SlateBlue",
      "LightBlue",
      "Violet",
      "PaleGreen",
      "SteelBlue",
      "SandyBrown",
      "Chocolate",
      "Crimson",
    ];
    var streamingConfetti = false;
    var animationTimer = null;
    var particles = [];
    var waveAngle = 0;

    function resetParticle(particle, width, height) {
      particle.color = colors[(Math.random() * colors.length) | 0];
      particle.x = Math.random() * width;
      particle.y = Math.random() * height - height;
      particle.diameter = Math.random() * 10 + 5;
      particle.tilt = Math.random() * 10 - 10;
      particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
      particle.tiltAngle = 0;
      return particle;
    }

    function startConfettiInner() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      window.requestAnimFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            return window.setTimeout(callback, 15);
          }
        );
      })();
      var canvas = document.getElementById("confetti-canvas");
      if (canvas === null) {
        canvas = document.createElement("canvas");
        canvas.setAttribute("id", "confetti-canvas");
        canvas.setAttribute(
          "style",
          "display:block; z-index:999999; pointer-events:none; position: fixed; top: -10px;"
        );
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
        window.addEventListener(
          "resize",
          function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          },
          true
        );
      }
      var context = canvas.getContext("2d");
      while (particles.length < maxParticleCount)
        particles.push(resetParticle({}, width, height));
      streamingConfetti = true;
      if (animationTimer === null) {
        (function runAnimation() {
          context.clearRect(0, 0, window.innerWidth, window.innerHeight);
          if (particles.length === 0) animationTimer = null;
          else {
            updateParticles();
            drawParticles(context);
            animationTimer = requestAnimFrame(runAnimation);
          }
        })();
      }
    }

    function stopConfettiInner() {
      streamingConfetti = false;
    }

    function removeConfettiInner() {
      stopConfetti();
      particles = [];
    }

    function toggleConfettiInner() {
      if (streamingConfetti) stopConfettiInner();
      else startConfettiInner();
    }

    function drawParticles(context) {
      var particle;
      var x;
      for (var i = 0; i < particles.length; i++) {
        particle = particles[i];
        context.beginPath();
        context.lineWidth = particle.diameter;
        context.strokeStyle = particle.color;
        x = particle.x + particle.tilt;
        context.moveTo(x + particle.diameter / 2, particle.y);
        context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
        context.stroke();
      }
    }

    function updateParticles() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var particle;
      //waveAngle += 0.01; wave angle of direction confetti
      for (var i = 0; i < particles.length; i++) {
        particle = particles[i];
        if (!streamingConfetti && particle.y < -15) particle.y = height + 100;
        else {
          particle.tiltAngle += particle.tiltAngleIncrement;
          particle.x += Math.sin(waveAngle);
          particle.y +=
            (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
          particle.tilt = Math.sin(particle.tiltAngle) * 15;
        }
        if (
          particle.x > width + 20 ||
          particle.x < -20 ||
          particle.y > height
        ) {
          if (streamingConfetti && particles.length <= maxParticleCount)
            resetParticle(particle, width, height);
          else {
            particles.splice(i, 1);
            i--;
          }
        }
      }
    }
  })();

  // END OF CONFETTI
}
