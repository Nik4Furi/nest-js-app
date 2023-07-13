import { Controller, Get,Post ,Body,Param,Put,Delete} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { BookDto } from './dto/book.dto';

@Controller('book')
export class BookController {

    constructor(private bookService:BookService ){}


    @Get()
    async getAllBooks(): Promise<Book[]>{
        return this.bookService.findAll();
    }

    @Get(':id')
    async getBook(
        @Param('id')
        id:string
    ): Promise<Book>{
        return this.bookService.findBookId(id);
    }

    @Post()
    async createBook(
        @Body()
        book:BookDto
    ): Promise <Book>{
        return this.bookService.createNew(book)
    }

    
    @Put(':id')
    async updateBook(
        @Param('id')
        id:string ,
        @Body()
        book:BookDto      
    ): Promise <Book>{
        return this.bookService.updateBook(id,book)
    }

    @Delete(':id')
    async deleteBook(
        @Param('id')
        id:string 
    ): Promise <Book>{
        return this.bookService.deleteBook(id)
    }
}
