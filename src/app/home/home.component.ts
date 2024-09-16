import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mouseX = 0;
  mouseY = 0;
  positions: {
    xp: number;
    yp: number;
    xVelocity: number;
    yVelocity: number;
    speed: number;
  }[] = [];

  constructor() {}

  ngOnInit(): void {
    const balloons = document.querySelectorAll('.balloon');
    const balloonSize = 200; // Balloon size, important for boundaries

    // Initialize random start positions, velocities, and speeds for each balloon
    balloons.forEach(() => {
      this.positions.push({
        xp: Math.random() * (window.innerWidth - balloonSize),
        yp: Math.random() * (window.innerHeight - balloonSize),
        xVelocity: (Math.random() - 0.5) * 2, // Increased speed range
        yVelocity: (Math.random() - 0.5) * 2,
        speed: Math.random() * 0.5 + 0.5, // Speed factor for each balloon (between 0.5 and 1.0)
      });
    });

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY;
    });

    // Continuously move each balloon based on random motion and cursor avoidance
    setInterval(() => {
      balloons.forEach((balloon, index) => {
        const pos = this.positions[index];

        // Cursor avoidance logic
        const cursorDx = pos.xp + balloonSize / 2 - this.mouseX;
        const cursorDy = pos.yp + balloonSize / 2 - this.mouseY;
        const cursorDistance = Math.sqrt(cursorDx * cursorDx + cursorDy * cursorDy);
        const cursorInfluenceDist = 150; // Distance where balloons start avoiding cursor

        // Change direction smoothly if the cursor is near
        if (cursorDistance < cursorInfluenceDist) {
          const avoidanceStrength = (cursorInfluenceDist - cursorDistance) / cursorInfluenceDist; // Smooth avoidance strength
          const avoidanceFactor = 0.2; // Increase avoidance factor for stronger effect
          pos.xVelocity += (cursorDx / cursorDistance) * avoidanceFactor * avoidanceStrength;
          pos.yVelocity += (cursorDy / cursorDistance) * avoidanceFactor * avoidanceStrength;
        }

        // Update the balloon position based on its velocity and speed
        pos.xp += pos.xVelocity * pos.speed;
        pos.yp += pos.yVelocity * pos.speed;

        // Keep balloons within the screen bounds and gently reverse velocity if hitting edges
        if (pos.xp < 0) {
          pos.xp = 0;
          pos.xVelocity *= -1; // Reverse direction if hitting left edge
        } else if (pos.xp > window.innerWidth - balloonSize) {
          pos.xp = window.innerWidth - balloonSize;
          pos.xVelocity *= -1; // Reverse direction if hitting right edge
        }

        if (pos.yp < 0) {
          pos.yp = 0;
          pos.yVelocity *= -1; // Reverse direction if hitting top edge
        } else if (pos.yp > window.innerHeight - balloonSize) {
          pos.yp = window.innerHeight - balloonSize;
          pos.yVelocity *= -1; // Reverse direction if hitting bottom edge
        }

        // Apply the new position to the balloon
        (balloon as HTMLElement).style.left = pos.xp + 'px';
        (balloon as HTMLElement).style.top = pos.yp + 'px';
      });
    }, 20); // Repeat every 20 milliseconds for smooth movement
  }
}
