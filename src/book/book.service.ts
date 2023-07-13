import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {

    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) {}


    //---------- Creating the functions 
    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
    }

    async findBookId(id:string): Promise<Book> {
        const books = await this.bookModel.findById(id);
        if(!books) throw new Error('Book not found')
        return books;
    }

    //---------- Crate a new book
    async createNew(book: Book): Promise<Book>{
        const res =  await this.bookModel.create(book);
        return res;
    }

    async updateBook(id:string, book:Book): Promise<Book> {
        const books = await this.bookModel.findByIdAndUpdate(id,book,{new:true, runValidators:true});

        return books;
    }

    async deleteBook(id:string): Promise<Book> {
        const books = await this.bookModel.findByIdAndDelete(id);

        return books;
    }



}
