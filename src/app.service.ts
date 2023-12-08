import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateAssetDto, CreateOrderDto } from './dto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async createAsset(createAssetDto: CreateAssetDto) {
    return this.prisma.asset.create({
      data: createAssetDto,
    });
  }

  async getAssets() {
    return this.prisma.asset.findMany();
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: createOrderDto,
    });
  }

  async getOrders() {
    return this.prisma.order.findMany();
  }
}
