document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const message = document.getElementById('message');
    const totalCubes = 10;

    for (let i = 0; i < totalCubes; i++) {
        const cube = document.createElement('div');
        cube.className = 'cube';
        cube.style.backgroundColor = getRandomCubeColor();
        cube.addEventListener('click', toggleColor);
        container.appendChild(cube);
    }

    function toggleColor(event) {
        const cube = event.target;
        const currentColor = cube.style.backgroundColor;

        if (currentColor === 'green') {
        cube.style.backgroundColor = 'red';
        } else {
        cube.style.backgroundColor = 'green';
        }

        checkVictory();
    }

    function checkVictory() {
        const cubes = document.querySelectorAll('.cube');
        const greenCubes = Array.from(cubes).filter(cube => cube.style.backgroundColor === 'green');

        if (greenCubes.length === totalCubes) {
        message.textContent = 'Поздравляем! Вы победили!';
        } else {
        message.textContent = '';
        }
    }

    function getRandomCubeColor() {
        return Math.random() < 0.5 ? 'red' : 'green';
    }
    });
  