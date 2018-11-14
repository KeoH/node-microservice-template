import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {

    @Get()
    findAll() {
        return 'Todos los gatos!'
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `Quieres el gato con ID: ${id}`
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return createCatDto
    }
}
