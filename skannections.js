// Define an array of physics situations as objects
const physicsSituations = [
    "An object in free fall near the surface of the Earth",
    "A car accelerating on a straight road",
    "A block sliding down an inclined plane",
    "A simple pendulum in motion",
    "An object attached to a rotating platform",
    "A satellite in orbit around a planet",
    "A rotating wheel with angular momentum",
    "A ball rolling down a curved track",
    "A mass attached to a string swinging in a circle",
    "A roller coaster moving through loops",
    "A harmonic oscillator (spring-mass system)",
    "A planet in elliptical orbit around the Sun",
    "A gyroscope precessing",
    "A swinging pendulum with varying potential and kinetic energy",
    "A car moving in a circular path with centripetal force",
    "A rotating fan blade with angular velocity",
    "A rocket taking off into space with thrust and work",
    "A flywheel with rotational kinetic energy",
    "A frictionless roller coaster on a hill",
    "A simple harmonic oscillator in motion"
];

const strategies = [
    "kinematics",
    "constant velocity",
    "forces",
    "momentum",
    "angular momentum",
    "orbital mechanics",
    "centripetal force",
    "energy concepts",
    "torque",
    "angular kinematics",
    "logic",
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
