import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { Game } from './@types/game.types'
import { AppService } from './app.service'
import { UpdateGameDTO } from './dtos/game.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  updateGame(@Body() game: UpdateGameDTO): Game { // update return type
    return this.appService.updateGame(game)
  }
}
