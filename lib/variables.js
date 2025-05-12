const BALL_SIZE = 16
const CANVAS_HEIGHT = 600
const CANVAS_WIDTH = 794
const PEG_X = 70
const PEG_Y = 70

const COLOURS = [
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

const BOX_COLOUR = '#fcf9e2'

const Engine = Matter.Engine
const Render = Matter.Render
const World = Matter.World
const Bodies = Matter.Bodies
const Events = Matter.Events
const Body = Matter.Body

const engine = Engine.create({
  timing: { timeScale: 2 }
})

const render = Render.create({
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
