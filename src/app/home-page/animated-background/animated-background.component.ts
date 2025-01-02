import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  AfterViewInit,
  ViewChild,
  HostBinding,
  Input,
} from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'animated-background',
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.css'],
})
export class AnimatedBackgroundComponent implements OnInit, AfterViewInit {
  @HostBinding('class') elementClass: string | undefined;

  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  @Input() set class(val: string) {
    this.elementClass = val;
  }

  private pipeCount = 10;
  private pipePropCount = 8;
  private pipePropsLength = this.pipeCount * this.pipePropCount;
  private turnCount = 8;
  private turnAmount = ((360 / this.turnCount) * Math.PI) / 180;
  private turnChanceRange = 250;
  private baseSpeed = 2.5;
  private rangeSpeed = 1;
  private baseTTL = 100;
  private rangeTTL = 300;
  private baseWidth = 2;
  private rangeWidth = 4;
  private baseHue = 180;
  private rangeHue = 60;
  private backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--background-500');

  private canvas: any;
  private ctx: any;
  private center: any;
  private tick: number = 0;
  private pipeProps: Float32Array = new Float32Array(this.pipePropsLength);

  constructor(private themeService:ThemeService) {}

  ngOnInit(): void {
    this.themeService.signal$.subscribe(signal =>{
      this.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--background-500');
      this.baseHue = 240
      this.initPipes();
      this.ctx.a.reset()
    })
  }

  ngAfterViewInit(): void {
    this.setup();
    window.addEventListener('resize', this.resize.bind(this));
  }

  setup() {
    this.createCanvas();
    this.resize();
    this.initPipes();
    this.draw();
  }

  createCanvas() {
    const container = this.canvasContainer.nativeElement;
    this.canvas = {
      a: document.createElement('canvas'),
      b: document.createElement('canvas'),
    };

    container.appendChild(this.canvas.b);

    this.ctx = {
      a: this.canvas.a.getContext('2d'),
      b: this.canvas.b.getContext('2d'),
    };

    this.center = [];
    this.tick = 0;
  }

  resize() {
    const container = this.canvasContainer.nativeElement;

    this.canvas.a.width = container.clientWidth;
    this.canvas.a.height = container.clientHeight;

    this.canvas.b.width = container.clientWidth;
    this.canvas.b.height = container.clientHeight;

    this.center[0] = 0.5 * this.canvas.a.width;
    this.center[1] = 0.5 * this.canvas.a.height;
  }

  initPipes() {
    for (let i = 0; i < this.pipePropsLength; i += this.pipePropCount) {
      this.initPipe(i);
    }
  }

  initPipe(i: number) {
    let x =
      0.1 * this.canvas.a.width + Math.random() * 0.8 * this.canvas.a.width;
    let y =
      0.1 * this.canvas.a.height + Math.random() * 0.8 * this.canvas.a.height;
    let direction = Math.round(Math.random()) ? Math.PI / 2 : Math.PI * 1.5;
    let speed = this.baseSpeed + Math.random() * this.rangeSpeed;
    let life = 0;
    let ttl = this.baseTTL + Math.random() * this.rangeTTL;
    let width = this.baseWidth + Math.random() * this.rangeWidth;
    let hue = this.baseHue + Math.random() * this.rangeHue;

    this.pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
  }

  updatePipes() {
    this.tick++;

    for (let i = 0; i < this.pipePropsLength; i += this.pipePropCount) {
      this.updatePipe(i);
    }
  }

  updatePipe(i: number) {
    let x = this.pipeProps[i];
    let y = this.pipeProps[i + 1];
    let direction = this.pipeProps[i + 2];
    let speed = this.pipeProps[i + 3];
    let life = this.pipeProps[i + 4];
    let ttl = this.pipeProps[i + 5];
    let width = this.pipeProps[i + 6];
    let hue = this.pipeProps[i + 7];

    this.drawPipe(x, y, life, ttl, width, hue);

    life++;
    x += Math.cos(direction) * speed;
    y += Math.sin(direction) * speed;
    const turnChance =
      !(this.tick % Math.round(Math.random() * this.turnChanceRange)) &&
      (!(Math.round(x) % 6) || !(Math.round(y) % 6));
    const turnBias = Math.round(Math.random()) ? -1 : 1;
    direction += turnChance ? this.turnAmount * turnBias : 0;

    this.pipeProps[i] = x;
    this.pipeProps[i + 1] = y;
    this.pipeProps[i + 2] = direction;
    this.pipeProps[i + 4] = life;

    if (life > ttl) this.initPipe(i);
  }

  drawPipe(
    x: number,
    y: number,
    life: number,
    ttl: number,
    width: number,
    hue: number
  ) {
    this.ctx.a.save();
    this.ctx.a.strokeStyle = `hsla(${hue},75%,50%,${
      this.fadeInOut(life, ttl) * 0.3
    })`;
    this.ctx.a.beginPath();
    this.ctx.a.arc(x, y, width, 0, Math.PI * 2);
    this.ctx.a.stroke();
    this.ctx.a.closePath();
    this.ctx.a.restore();
  }

  fadeInOut(life: number, ttl: number) {
    return Math.sin((life / ttl) * Math.PI);
  }

  render() {
    this.ctx.b.save();
    this.ctx.b.fillStyle = this.backgroundColor;
    this.ctx.b.fillRect(0, 0, this.canvas.b.width, this.canvas.b.height);
    this.ctx.b.restore();

    this.ctx.b.save();
    this.ctx.b.filter = 'blur(12px)';
    this.ctx.b.drawImage(this.canvas.a, 0, 0);
    this.ctx.b.restore();

    this.ctx.b.save();
    this.ctx.b.drawImage(this.canvas.a, 0, 0);
    this.ctx.b.restore();
  }

  draw() {
    this.updatePipes();
    this.render();
    window.requestAnimationFrame(this.draw.bind(this));
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.resize();
  }
}
