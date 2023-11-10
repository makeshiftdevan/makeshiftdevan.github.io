// Define an array of physics situations as objects
const physicsSituations = [
    {
        description: "An object in free fall near the surface of the Earth",
        strategy: "kinematics",
        diagram: "Free-falling object near the Earth's surface",
        strategies: ["kinematics", "forces", "energy concepts", "logic"],
        variables: ["time", "acceleration", "velocity", "distance"],
    },
    // ... (other physics situations, make sure to add 30 in total)
];

<script>
    // Define an array of physics situations as objects
    const physicsSituations = [
        {
            description: "An object in free fall near the surface of the Earth",
            strategy: "kinematics",
            diagram: "Free-falling object near the Earth's surface",
            strategies: ["kinematics", "forces", "energy concepts", "logic"],
            variables: ["time", "acceleration", "velocity", "distance"],
        },
        // ... (other physics situations, make sure to add 30 in total)
    ];

    // Initialize game variables
    let points = 0;
    let currentGroup = 1; // Current group number
    let correctSelections = 0; // Number of correct selections in the current group

    // Function to start a new group
    function startNewGroup() {
        // Update the game UI to display the current group number and directions
        const directions = document.getElementById("directions");
        directions.textContent = `Group ${currentGroup}: Create 4 groups of 4`;

        // Generate a random physics situation
        const randomSituation = generateRandomSituation();
        const gameBoard = document.querySelector(".game-board");
        gameBoard.innerHTML = '';

        // Shuffle the problem-solving strategies and populate the grid
        const shuffledStrategies = shuffleArray(randomSituation.strategies);
        populateGrid(shuffledStrategies);

        // Add click event listeners to the grid cells
        addClickListener();
    }

    // Function to handle user clicks
    function handleCellClick(selectedStrategy, cell) {
        const currentSituation = physicsSituations[currentGroup - 1]; // Current group is 1-based

        if (selectedStrategy === currentSituation.strategy) {
            // Correct selection, update UI, add points
            cell.classList.add('correct');
            points += 100;
            updateScore();
            correctSelections++;

            if (correctSelections === 4) {
                // The group is completed
                currentGroup++;
                correctSelections = 0;

                startNewGroup();
            }
        } else {
            // Incorrect selection, update UI, vibrate, subtract points
            cell.classList.add('incorrect');
            points -= 100;
            updateScore();
            setTimeout(() => {
                cell.classList.remove('incorrect');
            }, 500);
        }
    }

    // Function to generate a random physics situation
    function generateRandomSituation() {
        const randomIndex = Math.floor(Math.random() * physicsSituations.length);
        return physicsSituations[randomIndex];
    }

    // Function to shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to update the score on the UI
    function updateScore() {
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = `Score: ${points}`;
    }

    // Function to populate the grid with cells based on strategies
    function populateGrid(strategies) {
        const gameBoard = document.querySelector(".game-board");

        strategies.forEach((strategy) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = strategy;

            // Add a data attribute to store the strategy for comparison
            cell.setAttribute("data-strategy", strategy);

            gameBoard.appendChild(cell);
        });
    }

    // Function to add click event listeners to the grid cells
    function addClickListener() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("click", () => {
                const selectedStrategy = cell.getAttribute("data-strategy");
                handleCellClick(selectedStrategy, cell);
            });
        });
    }

    // Start the game by initializing the first group
    startNewGroup();
