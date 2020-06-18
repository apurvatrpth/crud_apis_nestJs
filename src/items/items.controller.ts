import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService} from './items.service';
import { Item } from './interfaces/items-interface'

@Controller('items')
export class ItemsController {
constructor(private readonly itemsService: ItemsService){};

@Get()
findAll(): Promise<Item[]> {
return this.itemsService.findAll();
}

@Get(':id')
findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
}

@Post()
create(@Body() createItem: Item): Promise<Item>{
    return this.itemsService.create(createItem);
}

@Put(':id')
update(@Body() updateItem: Item, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItem);
}

@Delete(':id')
deleteid(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
}
}