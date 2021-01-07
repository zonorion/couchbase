import { Injectable, OnModuleInit } from '@nestjs/common';
import { model } from 'ottoman';
import { PriceSchema } from './entities/price-schema';

@Injectable()
export class CouchbaseRepository implements OnModuleInit {
  private priceModel;
  onModuleInit() {
    this.priceModel = model('prices', PriceSchema);
  }
  async test() {
    const result = this.priceModel.findOne();
    console.log(result);
  }
}
