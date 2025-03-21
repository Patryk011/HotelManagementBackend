import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDto } from './dto/room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  create(@Body() dto: RoomDto) {
    return this.roomService.createRoom(dto);
  }

  @Get()
  findAll() {
    return this.roomService.findAllRooms();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomService.findRoomById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.updateRoom(+id, updateRoomDto);
  }
}
