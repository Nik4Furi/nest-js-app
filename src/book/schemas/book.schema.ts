import {Schema , Prop, SchemaFactory} from '@nestjs/mongoose'


@Schema({
    timestamps : true
})

export class Book {

    @Prop()
    title : string;

    @Prop()
    description : string;

    @Prop()
    author : string;
}


export const BookSchema = SchemaFactory.createForClass(Book)