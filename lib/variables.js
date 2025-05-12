export const BALL_SIZE = 16
export const CANVAS_HEIGHT = 600
export const CANVAS_WIDTH = 794
export const PEG_X = 70
export const PEG_Y = 70

export const COLOURS = [
  '#fcf9f8',
  '#ffece6',
  '#fbd0c1',
  '#fcbba4',
  '#fca585',
  '#f88f69',
  '#fa7342',
  '#f95c23',
  '#fa5012',
  '#ff4500'
]

export const BOX_COLOUR = '#fcf9e2'

export const Engine = Matter.Engine
export const Render = Matter.Render
export const World = Matter.World
export const Bodies = Matter.Bodies
export const Events = Matter.Events
export const Body = Matter.Body

export const engine = Engine.create({
  timing: { timeScale: 2 }
})

export const render = Render.create({
  element: document.querySelector('.target'),
  engine: engine,
  options: {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    wireframes: false,
    background: '#f1f1f1'
  }
})

/* CSS Reference
  color: #fcf9e2;
  color: #fcf9f8;
  color: #ffece6;
  color: #fbd0c1;
  color: #fcbba4;
  color: #fca585;
  color: #f88f69;
  color: #fa7342;
  color: #f95c23;
  color: #fa5012;
  color: #ff4500;

  
*/
