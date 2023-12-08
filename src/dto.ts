export class CreateAssetDto {
    id: string;
    symbol: string;
}

export class CreateOrderDto {
    assetId: string;
    price: number;S
    status: string;
}
  