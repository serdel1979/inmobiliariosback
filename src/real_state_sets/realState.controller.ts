import { RealStateDTO } from './realState.dto';
import { Controller, Get, Param, Req, Post, Body } from '@nestjs/common';
import { RealStateService } from './realState.service';
import { Request } from 'express';
import { RealState } from './entity/realState.entity';

@Controller('real_state')
export class RealStateController {
  constructor(private realStateService: RealStateService) {}

  @Get()
  findAll(@Req() request: Request): Promise<RealState[]> {
    return this.realStateService.findAll(request.query);
  }

  @Post()
  createRealState(@Body() newRealState: RealStateDTO): Promise<RealState> {
    return this.realStateService.createRealState(newRealState);
  }

  /*
  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string) {
    return this.booksService.deleteBook(bookId);
  }

  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string, @Body() body): Promise<Book> {
    let newBook: BookDto = body;
    return this.booksService.updateBook(bookId, newBook);
  }
*/
  @Get(':realStateId')
  findRealState(@Param('realStateId') realStateId: number): Promise<RealState> {
    return this.realStateService.findRealState(realStateId);
  }
}
