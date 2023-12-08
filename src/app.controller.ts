import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAssetDto, CreateOrderDto } from './dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('assets')
  createAsset(@Body() createAssetDto: CreateAssetDto) {
    return this.appService.createAsset(createAssetDto);
  }

  @Get('assets')
  getAssets() {
    return this.appService.getAssets();
  }

  @Post('orders')
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.appService.createOrder(createOrderDto);
  }

  @Get('orders')
  getOrders() {
    return this.appService.getOrders();
  }
}
