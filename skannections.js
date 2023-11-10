<!DOCTYPE html>
<html>

<head>
    <title>Skanections</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://drive.google.com/uc?export=download&id=1qAoOeymcT1cS8Xx2jx0yLI6O4svJs2aS">
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            text-align: center;
            margin-top: 20px;
        }

        .game-board {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 20px;
        }

        .cell {
            width: 100px;
            height: 100px;
            background-color: rgb(183, 45, 186);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            cursor: pointer;
        }

        .cell.correct {
            background-color: rgb(36, 232, 6);
        }

        .cell.incorrect {
            background-color: rgb(224, 33, 75);
            animation: shake 0.3s ease-in-out infinite;
        }

        #score {
            font-size: 20px;
            margin-top: 20px;
        }

        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(5px); }
        }
    </style>
</head>

<body oncopy="return false;" oncut="return false;" onpaste="return false;" oncontextmenu="return false;">
    <div class="container">
        <h1>Skanections</h1>
        <p id="directions">Create 4 groups of 4</p>
        <div class="game-board">
            <!-- Grid cells will be dynamically generated here -->
        </div>
        <p id="score">Score: 0</p>
    </div>

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
    {
        description: "An object in free fall near the surface of the Earth",
        strategy: "kinematics",
        diagram: "Free-falling object near the Earth's surface",
        strategies: ["kinematics", "forces", "energy concepts", "logic"],
        variables: ["time", "acceleration", "velocity", "distance"],
    },
    {
        description: "A block sliding down an inclined plane",
        strategy: "forces",
        diagram: "Block sliding down an inclined plane",
        strategies: ["forces", "kinematics", "energy concepts", "logic"],
        variables: ["force", "mass", "acceleration", "distance"],
    },
    {
        description: "A simple pendulum in motion",
        strategy: "simple harmonic motion",
        diagram: "Simple pendulum in motion",
        strategies: ["simple harmonic motion", "kinematics", "energy concepts", "logic"],
        variables: ["period", "amplitude", "velocity", "distance"],
    },
    {
        description: "An object attached to a spring oscillating",
        strategy: "simple harmonic motion",
        diagram: "Object attached to a spring oscillating",
        strategies: ["simple harmonic motion", "forces", "energy concepts", "logic"],
        variables: ["period", "amplitude", "force", "distance"],
    },
    {
        description: "Two objects inelastic collision",
        strategy: "Newton’s laws of motion",
        diagram: "Two objects inelastic collision",
        strategies: ["Newton’s laws of motion", "kinematics", "energy concepts", "logic"],
        variables: ["momentum", "mass", "velocity", "collision"],
    },
    {
    description: "Two objects elastic collision",
    strategy: "Newton’s laws of motion",
    diagram: "Two objects elastic collision",
    strategies: ["Newton’s laws of motion", "kinematics", "energy concepts", "logic"],
    variables: ["momentum", "mass", "velocity", "collision"],
},
{
    description: "A car moving with constant velocity",
    strategy: "kinematics",
    diagram: "Car moving with constant velocity",
    strategies: ["kinematics", "forces", "energy concepts", "logic"],
    variables: ["time", "velocity", "distance", "acceleration"],
},
{
    description: "A rocket launching into space",
    strategy: "orbital mechanics",
    diagram: "Rocket launching into space",
    strategies: ["orbital mechanics", "forces", "energy concepts", "logic"],
    variables: ["velocity", "thrust", "mass", "gravity"],
},
{
    description: "A satellite in orbit",
    strategy: "orbital mechanics",
    diagram: "Satellite in orbit",
    strategies: ["orbital mechanics", "kinematics", "energy concepts", "logic"],
    variables: ["velocity", "radius", "mass", "gravity"],
},
{
    description: "A pulley system with masses",
    strategy: "forces",
    diagram: "Pulley system with masses",
    strategies: ["forces", "kinematics", "energy concepts", "logic"],
    variables: ["force", "mass", "acceleration", "distance"],
},
{
    description: "A block on a rough surface with friction",
    strategy: "forces",
    diagram: "Block on a rough surface with friction",
    strategies: ["forces", "kinematics", "energy concepts", "logic"],
    variables: ["force", "mass", "acceleration", "friction"],
},
{
    description: "A ball rolling down a ramp",
    strategy: "kinematics",
    diagram: "Ball rolling down a ramp",
    strategies: ["kinematics", "forces", "energy concepts", "logic"],
    variables: ["time", "velocity", "distance", "acceleration"],
},{
    description: "A mass attached to a string swung in a circle",
    strategy: "centripetal force",
    diagram: "Mass attached to a string swung in a circle",
    strategies: ["centripetal force", "kinematics", "energy concepts", "logic"],
    variables: ["velocity", "radius", "mass", "centripetal force"],
},{
        description: "An object in free fall near the surface of the Earth",
        strategy: "kinematics",
        diagram: "Free-falling object near the Earth's surface",
        strategies: ["kinematics", "forces", "energy concepts", "logic"],
        variables: ["time", "acceleration", "velocity", "distance"],
    },
    {
        description: "A block sliding down an inclined plane",
        strategy: "kinematics",
        diagram: "Block on an inclined plane",
        strategies: ["kinematics", "forces", "energy concepts", "logic"],
        variables: ["time", "acceleration", "velocity", "distance"],
    },
    {
        description: "A simple pendulum in motion",
        strategy: "simple harmonic motion",
        diagram: "Simple pendulum",
        strategies: ["simple harmonic motion", "forces", "energy concepts", "logic"],
        variables: ["time", "acceleration", "velocity", "displacement"],
    },
    {
        description: "A car moving with constant velocity",
        strategy: "kinematics",
        diagram: "Car with constant velocity",
        strategies: ["kinematics", "forces", "energy concepts", "logic"],
        variables: ["time", "velocity", "distance"],
    },
    {
        description: "A satellite in orbit",
        strategy: "orbital mechanics",
        diagram: "Satellite in orbit",
        strategies: ["orbital mechanics", "forces", "energy concepts", "logic"],
        variables: ["time", "velocity", "radius"],
    },
    {
        description: "A mass attached to a string swung in a circle",
        strategy: "centripetal force",
        diagram: "Mass on a string in circular motion",
        strategies: ["centripetal force", "angular kinematics", "forces", "energy concepts", "logic"],
        variables: ["time", "angular velocity", "radius", "tension"],
    },
    {
        description: "An object sliding down a frictionless incline",
        strategy: "kinematics",
        diagram: "Object on an inclined plane",
        strategies: ["kinematics", "forces", "energy concepts"],
        variables: ["time", "acceleration", "velocity", "distance"],
    },
    {
        description: "A projectile launched at an angle",
        strategy: "kinematics",
        diagram: "Projectile motion",
        strategies: ["kinematics", "forces", "energy concepts"],
        variables: ["time", "launch angle", "velocity", "range"],
    },
    {
        description: "A block on a rotating turntable",
        strategy: "centripetal force",
        diagram: "Block on a turntable",
        strategies: ["centripetal force", "angular kinematics", "forces"],
        variables: ["radius", "angular velocity", "centripetal force"],
    },
    {
        description: "A satellite orbiting a planet",
        strategy: "orbital mechanics",
        diagram: "Satellite in orbit",
        strategies: ["orbital mechanics", "forces", "energy concepts"],
        variables: ["orbital radius", "orbital speed", "gravitational force"],
    },
    {
        description: "A swinging pendulum",
        strategy: "simple harmonic motion",
        diagram: "Simple harmonic motion",
        strategies: ["simple harmonic motion", "forces", "energy concepts"],
        variables: ["amplitude", "period", "frequency", "displacement"],
    },
    {
        description: "A rolling hoop",
        strategy: "angular momentum",
        diagram: "Rolling hoop",
        strategies: ["angular momentum", "torque", "energy concepts"],
        variables: ["angular velocity", "moment of inertia", "angular momentum"],
    },
    {
        description: "A rotating space station",
        strategy: "angular kinematics",
        diagram: "Rotating space station",
        strategies: ["angular kinematics", "forces", "energy concepts"],
        variables: ["angular velocity", "radius", "centripetal force"],
    },
    {
        description: "A lever system",
        strategy: "torque",
        diagram: "Lever system",
        strategies: ["torque", "angular kinematics", "forces"],
        variables: ["lever arm", "force", "torque"],
    },
    {
        description: "A rotating merry-go-round",
        strategy: "centripetal force",
        diagram: "Merry-go-round",
        strategies: ["centripetal force", "angular kinematics", "forces"],
        variables: ["radius", "angular velocity", "centripetal force"],
    },
    {
        description: "A roller coaster loop",
        strategy: "centripetal force",
        diagram: "Roller coaster loop",
        strategies: ["centripetal force", "energy concepts", "forces"],
        variables: ["radius", "velocity", "centripetal force"],
    },{
    description: "A block on an inclined plane with friction",
    strategy: "forces",
    diagram: "Block on an inclined plane with friction",
    strategies: ["forces", "kinematics", "energy concepts", "logic"],
    variables: ["force", "mass", "acceleration", "distance", "friction"],
},
{
    description: "A pendulum experiencing air resistance",
    strategy: "simple harmonic motion with air resistance",
    diagram: "Pendulum with air resistance",
    strategies: ["simple harmonic motion", "forces", "energy concepts", "logic"],
    variables: ["period", "amplitude", "velocity", "distance", "air resistance"],
},{
        description: "A person swinging on a playground swing",
        strategy: "simple harmonic motion",
        diagram: "Person on a swing",
        strategies: ["simple harmonic motion", "forces", "energy concepts"],
        variables: ["period", "amplitude", "velocity", "displacement"],
    },
    {
        description: "A person lifting a weight with a pulley system",
        strategy: "forces",
        diagram: "Person lifting weight with pulley",
        strategies: ["forces", "kinematics", "energy concepts", "logic"],
        variables: ["force", "mass", "acceleration", "distance"],
    },
    {
        description: "A Ferris wheel in motion",
        strategy: "centripetal force",
        diagram: "Ferris wheel",
        strategies: ["centripetal force", "angular kinematics", "energy concepts"],
        variables: ["radius", "angular velocity", "centripetal force"],
    },
    {
        description: "A rotating platform with a spinning top",
        strategy: "angular momentum",
        diagram: "Rotating platform with spinning top",
        strategies: ["angular momentum", "torque", "energy concepts"],
        variables: ["angular velocity", "moment of inertia", "angular momentum"],
    },
    {
        description: "A satellite undergoing an orbital maneuver",
        strategy: "orbital mechanics",
        diagram: "Satellite orbital maneuver",
        strategies: ["orbital mechanics", "forces", "energy concepts"],
        variables: ["velocity", "thrust", "mass", "gravity"],
    },
    {
        description: "A gymnast performing a somersault",
        strategy: "angular kinematics",
        diagram: "Gymnast somersault",
        strategies: ["angular kinematics", "forces", "energy concepts"],
        variables: ["angular velocity", "radius", "torque"],
    },
    {
        description: "A rotating ceiling fan",
        strategy: "angular energy",
        diagram: "Rotating ceiling fan",
        strategies: ["angular energy", "torque", "energy concepts"],
        variables: ["angular velocity", "moment of inertia", "angular energy"],
    },
    {
        description: "A rotating door with a person pushing it",
        strategy: "torque",
        diagram: "Rotating door with person",
        strategies: ["torque", "angular kinematics", "forces"],
        variables: ["lever arm", "force", "torque"],
    },
    {
        description: "A satellite experiencing a gravitational slingshot",
        strategy: "orbital mechanics",
        diagram: "Gravitational slingshot",
        strategies: ["orbital mechanics", "kinematics", "energy concepts"],
        variables: ["velocity", "gravity", "trajectory"],
    },
    {
        description: "A spinning ice skater pulling in their arms",
        strategy: "angular momentum",
        diagram: "Spinning ice skater",
        strategies: ["angular momentum", "forces", "energy concepts"],
        variables: ["angular velocity", "moment of inertia", "angular momentum"],
    },
    {
        description: "A rotating merry-go-round with adjustable speed",
        strategy: "centripetal force",
        diagram: "Adjustable speed merry-go-round",
        strategies: ["centripetal force", "angular kinematics", "forces"],
        variables: ["radius", "angular velocity", "centripetal force"],
    },{
        description: "Kicking a soccer ball",
        strategy: "kinematics",
        diagram: "Kicking a soccer ball",
        strategies: ["kinematics", "forces", "energy concepts"],
        variables: ["time", "velocity", "distance", "acceleration"],
    },
    {
        description: "Pushing a friend on a swing",
        strategy: "simple harmonic motion",
        diagram: "Pushing a friend on a swing",
        strategies: ["simple harmonic motion", "forces", "energy concepts"],
        variables: ["period", "amplitude", "velocity", "displacement"],
    },
    {
        description: "Riding a bike uphill",
        strategy: "forces",
        diagram: "Biking uphill",
        strategies: ["forces", "kinematics", "energy concepts"],
        variables: ["force", "mass", "acceleration", "distance"],
    },
    {
        description: "Throwing a ball in the air",
        strategy: "kinematics",
        diagram: "Throwing a ball",
        strategies: ["kinematics", "forces", "energy concepts"],
        variables: ["time", "velocity", "height", "acceleration"],
    },
    {
        description: "Swinging a pendulum",
        strategy: "simple harmonic motion",
        diagram: "Swinging a pendulum",
        strategies: ["simple harmonic motion", "forces", "energy concepts"],
        variables: ["period", "amplitude", "velocity", "displacement"],
    },
    {
        description: "Sliding down a snow-covered hill",
        strategy: "kinematics",
        diagram: "Sliding down a snowy hill",
        strategies: ["kinematics", "forces", "energy concepts"],
        variables: ["time", "velocity", "distance", "acceleration"],
    },
    {
        description: "Bouncing a basketball",
        strategy: "kinematics",
        diagram: "Bouncing a basketball",
        strategies: ["kinematics", "forces", "energy concepts"],
        variables: ["time", "velocity", "height", "acceleration"],
    },
    {
        description: "Rollerblading on a smooth surface",
        strategy: "kinematics",
        diagram: "Rollerblading",
        strategies: ["kinematics", "forces", "energy concepts"],
        variables: ["time", "velocity", "distance", "acceleration"],
    },
    {
        description: "Using a seesaw at the playground",
        strategy: "torque",
        diagram: "Seesaw at the playground",
        strategies: ["torque", "angular kinematics", "forces"],
        variables: ["lever arm", "force", "torque"],
    },
    {
        description: "Launching a water rocket",
        strategy: "Newton’s laws of motion",
        diagram: "Water rocket launch",
        strategies: ["Newton’s laws of motion", "kinematics", "energy concepts"],
        variables: ["force", "mass", "velocity", "distance"],
    },
    {
        description: "Climbing a ladder",
        strategy: "forces",
        diagram: "Climbing a ladder",
        strategies: ["forces", "kinematics", "energy concepts"],
        variables: ["force", "mass", "acceleration", "distance"],
    },
    {
        description: "Swimming in a pool",
        strategy: "buoyancy",
        diagram: "Swimming in a pool",
        strategies: ["buoyancy", "forces", "energy concepts"],
        variables: ["buoyant force", "density", "volume", "gravity"],
    },
    {
        description: "Sitting on a swing at its lowest point",
        strategy: "centripetal force",
        diagram: "Swing at its lowest point",
        strategies: ["centripetal force", "angular kinematics", "forces"],
        variables: ["radius", "angular velocity", "centripetal force"],
    },
    {
        description: "Turning a corner while driving",
        strategy: "centripetal force",
        diagram: "Turning a corner in a car",
        strategies: ["centripetal force", "kinematics", "energy concepts"],
        variables: ["radius", "velocity", "centripetal force"],
    },
    {
        description: "Dropping a pencil to the floor",
        strategy: "kinematics",
        diagram: "Dropping a pencil",
        strategies: ["kinematics", "forces", "energy concepts"],
        variables: ["time", "acceleration", "velocity", "distance"],
    },
    {
        description: "Opening and closing a door",
        strategy: "torque",
        diagram: "Opening and closing a door",
        strategies: ["torque", "angular kinematics", "forces"],
        variables: ["lever arm", "force", "torque"],
    },
    {
        description: "Turning a key in a lock",
        strategy: "torque",
        diagram: "Turning a key",
        strategies: ["torque", "angular kinematics", "forces"],
        variables: ["lever arm", "force", "torque"],
    },
    {
        description: "Playing on a merry-go-round",
        strategy: "centripetal force",
        diagram: "Playing on a merry-go-round",
        strategies: ["centripetal force", "angular kinematics", "forces"],
        variables: ["radius", "angular velocity", "centripetal force"],
    },
    {
        description: "Using a skateboard on a ramp",
        strategy: "kinematics",
        diagram: "Skateboarding on a ramp",
        strategies: ["kinematics", "forces", "energy concepts"],
        variables: ["time", "velocity", "distance", "acceleration"],
    }
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
 // Function to generate a random physics situation
 function generateRandomSituation() {
            const randomIndex = Math.floor(Math.random() * physicsSituations.length);
            return physicsSituations[randomIndex];
        }
        // Start the game by initializing the first group
        startNewGroup();
    </script>
</body>

</html>
