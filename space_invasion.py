import pygame as pg

WHITE = (255,255,255)
FPS = 60

screen = pg.display.set_mode((900,500))
pg.display.set_caption("Fuck off 2")


def draw():
    screen.fill(WHITE)
    pg.display.update()

def main():
    clock = pg.time.Clock()
    run =True
    while run:
        clock.tick(FPS)
        for event in pg.event.get():
            if event.type == pg.QUIT:
                run = False
            
        draw()

if __name__ == "__main__":
    main()
