const cursor = document.getElementById('cursor');
        const cursorSecond = document.getElementById('cursor-second');

        document.addEventListener('mousemove', (e) => {
            // Update first cursor position
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            requestAnimationFrame(() => {
                cursor.style.left = `${mouseX}px`;
                cursor.style.top = `${mouseY}px`;
            });

            // Update second cursor position with a delay
            requestAnimationFrame(() => {
                cursorSecond.style.left = `${mouseX}px`;
                cursorSecond.style.top = `${mouseY}px`;
            });
        });

        // Animate both cursors on click
        document.addEventListener('click', () => {
            cursor.classList.add('click');
            cursorSecond.classList.add('click');

            cursor.addEventListener('animationend', () => {
                cursor.classList.remove('click');
                cursorSecond.classList.remove('click');
            }, { once: true });
        });