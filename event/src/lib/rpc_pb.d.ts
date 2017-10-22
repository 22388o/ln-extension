// package: rpc
// file: rpc.proto

import * as jspb from "google-protobuf";
// import * as google_api_annotations_pb from "./google/api/annotations_pb";

export class Update extends jspb.Message {
  hasUpdatePrice(): boolean;
  clearUpdatePrice(): void;
  getUpdatePrice(): UpdatePrice | undefined;
  setUpdatePrice(value?: UpdatePrice): void;

  hasUpdateDeals(): boolean;
  clearUpdateDeals(): void;
  getUpdateDeals(): UpdateDeals | undefined;
  setUpdateDeals(value?: UpdateDeals): void;

  hasUpdateBalance(): boolean;
  clearUpdateBalance(): void;
  getUpdateBalance(): BalanceQueryResponse | undefined;
  setUpdateBalance(value?: BalanceQueryResponse): void;

  hasUpdateKline(): boolean;
  clearUpdateKline(): void;
  getUpdateKline(): KLine | undefined;
  setUpdateKline(value?: KLine): void;

  hasUpdateDepth(): boolean;
  clearUpdateDepth(): void;
  getUpdateDepth(): OrderDepthResponse | undefined;
  setUpdateDepth(value?: OrderDepthResponse): void;

  hasUpdateOrder(): boolean;
  clearUpdateOrder(): void;
  getUpdateOrder(): UpdateOrder | undefined;
  setUpdateOrder(value?: UpdateOrder): void;

  getDataCase(): Update.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Update.AsObject;
  static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Update;
  static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
}

export namespace Update {
  export type AsObject = {
    updatePrice?: UpdatePrice.AsObject,
    updateDeals?: UpdateDeals.AsObject,
    updateBalance?: BalanceQueryResponse.AsObject,
    updateKline?: KLine.AsObject,
    updateDepth?: OrderDepthResponse.AsObject,
    updateOrder?: UpdateOrder.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    UPDATE_PRICE = 1,
    UPDATE_DEALS = 2,
    UPDATE_BALANCE = 3,
    UPDATE_KLINE = 4,
    UPDATE_DEPTH = 5,
    UPDATE_ORDER = 6,
  }
}

export class Command extends jspb.Message {
  hasSubscribePrice(): boolean;
  clearSubscribePrice(): void;
  getSubscribePrice(): SubscribePrice | undefined;
  setSubscribePrice(value?: SubscribePrice): void;

  hasUnsubscribePrice(): boolean;
  clearUnsubscribePrice(): void;
  getUnsubscribePrice(): UnsubscribePrice | undefined;
  setUnsubscribePrice(value?: UnsubscribePrice): void;

  hasSubscibeDeals(): boolean;
  clearSubscibeDeals(): void;
  getSubscibeDeals(): SubscribeDeals | undefined;
  setSubscibeDeals(value?: SubscribeDeals): void;

  hasUnsubscribeDeals(): boolean;
  clearUnsubscribeDeals(): void;
  getUnsubscribeDeals(): UnsubscribeDeals | undefined;
  setUnsubscribeDeals(value?: UnsubscribeDeals): void;

  hasSubscribeBalance(): boolean;
  clearSubscribeBalance(): void;
  getSubscribeBalance(): SubscribeBalance | undefined;
  setSubscribeBalance(value?: SubscribeBalance): void;

  hasUnsubscribeBalance(): boolean;
  clearUnsubscribeBalance(): void;
  getUnsubscribeBalance(): UnsubscribeBalance | undefined;
  setUnsubscribeBalance(value?: UnsubscribeBalance): void;

  hasSubscribeKline(): boolean;
  clearSubscribeKline(): void;
  getSubscribeKline(): SubscribeKline | undefined;
  setSubscribeKline(value?: SubscribeKline): void;

  hasUnsubscribeKline(): boolean;
  clearUnsubscribeKline(): void;
  getUnsubscribeKline(): UnsubscribeKline | undefined;
  setUnsubscribeKline(value?: UnsubscribeKline): void;

  hasSubscribeDepth(): boolean;
  clearSubscribeDepth(): void;
  getSubscribeDepth(): SubscribeDepth | undefined;
  setSubscribeDepth(value?: SubscribeDepth): void;

  hasUnsubscribeDepth(): boolean;
  clearUnsubscribeDepth(): void;
  getUnsubscribeDepth(): UnsubscribeDepth | undefined;
  setUnsubscribeDepth(value?: UnsubscribeDepth): void;

  hasSubscribeOrders(): boolean;
  clearSubscribeOrders(): void;
  getSubscribeOrders(): SubscribeOrders | undefined;
  setSubscribeOrders(value?: SubscribeOrders): void;

  hasUnsubscribeOrders(): boolean;
  clearUnsubscribeOrders(): void;
  getUnsubscribeOrders(): UnsubscribeOrders | undefined;
  setUnsubscribeOrders(value?: UnsubscribeOrders): void;

  getDataCase(): Command.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    subscribePrice?: SubscribePrice.AsObject,
    unsubscribePrice?: UnsubscribePrice.AsObject,
    subscibeDeals?: SubscribeDeals.AsObject,
    unsubscribeDeals?: UnsubscribeDeals.AsObject,
    subscribeBalance?: SubscribeBalance.AsObject,
    unsubscribeBalance?: UnsubscribeBalance.AsObject,
    subscribeKline?: SubscribeKline.AsObject,
    unsubscribeKline?: UnsubscribeKline.AsObject,
    subscribeDepth?: SubscribeDepth.AsObject,
    unsubscribeDepth?: UnsubscribeDepth.AsObject,
    subscribeOrders?: SubscribeOrders.AsObject,
    unsubscribeOrders?: UnsubscribeOrders.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    SUBSCRIBE_PRICE = 1,
    UNSUBSCRIBE_PRICE = 2,
    SUBSCIBE_DEALS = 3,
    UNSUBSCRIBE_DEALS = 4,
    SUBSCRIBE_BALANCE = 5,
    UNSUBSCRIBE_BALANCE = 6,
    SUBSCRIBE_KLINE = 7,
    UNSUBSCRIBE_KLINE = 8,
    SUBSCRIBE_DEPTH = 9,
    UNSUBSCRIBE_DEPTH = 10,
    SUBSCRIBE_ORDERS = 11,
    UNSUBSCRIBE_ORDERS = 12,
  }
}

export class SubscribePrice extends jspb.Message {
  clearMarketsList(): void;
  getMarketsList(): Array<string>;
  setMarketsList(value: Array<string>): void;
  addMarkets(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribePrice.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribePrice): SubscribePrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribePrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribePrice;
  static deserializeBinaryFromReader(message: SubscribePrice, reader: jspb.BinaryReader): SubscribePrice;
}

export namespace SubscribePrice {
  export type AsObject = {
    marketsList: Array<string>,
  }
}

export class UpdatePrice extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  hasLast(): boolean;
  clearLast(): void;
  getLast(): MarketLastResponse | undefined;
  setLast(value?: MarketLastResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePrice.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePrice): UpdatePrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePrice;
  static deserializeBinaryFromReader(message: UpdatePrice, reader: jspb.BinaryReader): UpdatePrice;
}

export namespace UpdatePrice {
  export type AsObject = {
    market: string,
    last?: MarketLastResponse.AsObject,
  }
}

export class UnsubscribePrice extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribePrice.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribePrice): UnsubscribePrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribePrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribePrice;
  static deserializeBinaryFromReader(message: UnsubscribePrice, reader: jspb.BinaryReader): UnsubscribePrice;
}

export namespace UnsubscribePrice {
  export type AsObject = {
  }
}

export class SubscribeDeals extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getInterval(): number;
  setInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeDeals.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeDeals): SubscribeDeals.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeDeals, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeDeals;
  static deserializeBinaryFromReader(message: SubscribeDeals, reader: jspb.BinaryReader): SubscribeDeals;
}

export namespace SubscribeDeals {
  export type AsObject = {
    market: string,
    limit: number,
    interval: number,
  }
}

export class UpdateDeals extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  hasDeals(): boolean;
  clearDeals(): void;
  getDeals(): MarketDealsResponse | undefined;
  setDeals(value?: MarketDealsResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeals.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeals): UpdateDeals.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeals, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeals;
  static deserializeBinaryFromReader(message: UpdateDeals, reader: jspb.BinaryReader): UpdateDeals;
}

export namespace UpdateDeals {
  export type AsObject = {
    market: string,
    deals?: MarketDealsResponse.AsObject,
  }
}

export class UnsubscribeDeals extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeDeals.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeDeals): UnsubscribeDeals.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeDeals, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeDeals;
  static deserializeBinaryFromReader(message: UnsubscribeDeals, reader: jspb.BinaryReader): UnsubscribeDeals;
}

export namespace UnsubscribeDeals {
  export type AsObject = {
  }
}

export class SubscribeBalance extends jspb.Message {
  clearAssetsList(): void;
  getAssetsList(): Array<string>;
  setAssetsList(value: Array<string>): void;
  addAssets(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeBalance.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeBalance): SubscribeBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeBalance;
  static deserializeBinaryFromReader(message: SubscribeBalance, reader: jspb.BinaryReader): SubscribeBalance;
}

export namespace SubscribeBalance {
  export type AsObject = {
    assetsList: Array<string>,
  }
}

export class UnsubscribeBalance extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeBalance.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeBalance): UnsubscribeBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeBalance;
  static deserializeBinaryFromReader(message: UnsubscribeBalance, reader: jspb.BinaryReader): UnsubscribeBalance;
}

export namespace UnsubscribeBalance {
  export type AsObject = {
  }
}

export class SubscribeKline extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getInterval(): number;
  setInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeKline.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeKline): SubscribeKline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeKline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeKline;
  static deserializeBinaryFromReader(message: SubscribeKline, reader: jspb.BinaryReader): SubscribeKline;
}

export namespace SubscribeKline {
  export type AsObject = {
    market: string,
    interval: number,
  }
}

export class UnsubscribeKline extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeKline.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeKline): UnsubscribeKline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeKline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeKline;
  static deserializeBinaryFromReader(message: UnsubscribeKline, reader: jspb.BinaryReader): UnsubscribeKline;
}

export namespace UnsubscribeKline {
  export type AsObject = {
  }
}

export class SubscribeDepth extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getInterval(): number;
  setInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeDepth.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeDepth): SubscribeDepth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeDepth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeDepth;
  static deserializeBinaryFromReader(message: SubscribeDepth, reader: jspb.BinaryReader): SubscribeDepth;
}

export namespace SubscribeDepth {
  export type AsObject = {
    market: string,
    limit: number,
    interval: number,
  }
}

export class UnsubscribeDepth extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeDepth.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeDepth): UnsubscribeDepth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeDepth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeDepth;
  static deserializeBinaryFromReader(message: UnsubscribeDepth, reader: jspb.BinaryReader): UnsubscribeDepth;
}

export namespace UnsubscribeDepth {
  export type AsObject = {
  }
}

export class SubscribeOrders extends jspb.Message {
  clearMarketsList(): void;
  getMarketsList(): Array<Market>;
  setMarketsList(value: Array<Market>): void;
  addMarkets(value: Market, index?: number): Market;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOrders.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOrders): SubscribeOrders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeOrders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOrders;
  static deserializeBinaryFromReader(message: SubscribeOrders, reader: jspb.BinaryReader): SubscribeOrders;
}

export namespace SubscribeOrders {
  export type AsObject = {
    marketsList: Array<Market>,
  }
}

export class UnsubscribeOrders extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeOrders.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeOrders): UnsubscribeOrders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeOrders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeOrders;
  static deserializeBinaryFromReader(message: UnsubscribeOrders, reader: jspb.BinaryReader): UnsubscribeOrders;
}

export namespace UnsubscribeOrders {
  export type AsObject = {
  }
}

export class OrderDetailedInfo extends jspb.Message {
  getOrderId(): number;
  setOrderId(value: number): void;

  getUser(): number;
  setUser(value: number): void;

  getAmount(): string;
  setAmount(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getSide(): MarketSide;
  setSide(value: MarketSide): void;

  getMarket(): string;
  setMarket(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getFeeRate(): string;
  setFeeRate(value: string): void;

  getDealStock(): string;
  setDealStock(value: string): void;

  getDealMoney(): string;
  setDealMoney(value: string): void;

  getDealFee(): string;
  setDealFee(value: string): void;

  getCtime(): number;
  setCtime(value: number): void;

  getMtime(): number;
  setMtime(value: number): void;

  getLeft(): string;
  setLeft(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDetailedInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDetailedInfo): OrderDetailedInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderDetailedInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDetailedInfo;
  static deserializeBinaryFromReader(message: OrderDetailedInfo, reader: jspb.BinaryReader): OrderDetailedInfo;
}

export namespace OrderDetailedInfo {
  export type AsObject = {
    orderId: number,
    user: number,
    amount: string,
    price: string,
    side: MarketSide,
    market: string,
    source: string,
    feeRate: string,
    dealStock: string,
    dealMoney: string,
    dealFee: string,
    ctime: number,
    mtime: number,
    left: string,
  }
}

export class KLine extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  getOpenPrice(): string;
  setOpenPrice(value: string): void;

  getClosePrice(): string;
  setClosePrice(value: string): void;

  getMaxPrice(): string;
  setMaxPrice(value: string): void;

  getMinPrice(): string;
  setMinPrice(value: string): void;

  getNumber(): string;
  setNumber(value: string): void;

  getVolume(): string;
  setVolume(value: string): void;

  getMarket(): string;
  setMarket(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KLine.AsObject;
  static toObject(includeInstance: boolean, msg: KLine): KLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KLine;
  static deserializeBinaryFromReader(message: KLine, reader: jspb.BinaryReader): KLine;
}

export namespace KLine {
  export type AsObject = {
    time: number,
    openPrice: string,
    closePrice: string,
    maxPrice: string,
    minPrice: string,
    number: string,
    volume: string,
    market: string,
  }
}

export class DealDetail extends jspb.Message {
  getDealId(): number;
  setDealId(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  getAmount(): string;
  setAmount(value: string): void;

  getUser(): number;
  setUser(value: number): void;

  getFee(): string;
  setFee(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getDeal(): string;
  setDeal(value: string): void;

  getDealOrderId(): number;
  setDealOrderId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DealDetail.AsObject;
  static toObject(includeInstance: boolean, msg: DealDetail): DealDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DealDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DealDetail;
  static deserializeBinaryFromReader(message: DealDetail, reader: jspb.BinaryReader): DealDetail;
}

export namespace DealDetail {
  export type AsObject = {
    dealId: number,
    time: number,
    amount: string,
    user: number,
    fee: string,
    price: string,
    deal: string,
    dealOrderId: number,
  }
}

export class Balance extends jspb.Message {
  getAvailable(): string;
  setAvailable(value: string): void;

  getFreeze(): string;
  setFreeze(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Balance.AsObject;
  static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Balance;
  static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
  export type AsObject = {
    available: string,
    freeze: string,
  }
}

export class BalanceQueryRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceQueryRequest): BalanceQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceQueryRequest;
  static deserializeBinaryFromReader(message: BalanceQueryRequest, reader: jspb.BinaryReader): BalanceQueryRequest;
}

export namespace BalanceQueryRequest {
  export type AsObject = {
    userId: number,
  }
}

export class BalanceQueryResponse extends jspb.Message {
  getBalancesMap(): jspb.Map<string, Balance>;
  clearBalancesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceQueryResponse): BalanceQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceQueryResponse;
  static deserializeBinaryFromReader(message: BalanceQueryResponse, reader: jspb.BinaryReader): BalanceQueryResponse;
}

export namespace BalanceQueryResponse {
  export type AsObject = {
    balancesMap: Array<[string, Balance.AsObject]>,
  }
}

export class BalanceWithdrawalRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getAsset(): string;
  setAsset(value: string): void;

  getActionId(): number;
  setActionId(value: number): void;

  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceWithdrawalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceWithdrawalRequest): BalanceWithdrawalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceWithdrawalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceWithdrawalRequest;
  static deserializeBinaryFromReader(message: BalanceWithdrawalRequest, reader: jspb.BinaryReader): BalanceWithdrawalRequest;
}

export namespace BalanceWithdrawalRequest {
  export type AsObject = {
    userId: number,
    asset: string,
    actionId: number,
    amount: string,
  }
}

export class BalanceWithdrawalResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceWithdrawalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceWithdrawalResponse): BalanceWithdrawalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceWithdrawalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceWithdrawalResponse;
  static deserializeBinaryFromReader(message: BalanceWithdrawalResponse, reader: jspb.BinaryReader): BalanceWithdrawalResponse;
}

export namespace BalanceWithdrawalResponse {
  export type AsObject = {
    status: string,
  }
}

export class BalanceHistoryRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getAsset(): string;
  setAsset(value: string): void;

  getActionType(): string;
  setActionType(value: string): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getEndTime(): number;
  setEndTime(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceHistoryRequest): BalanceHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceHistoryRequest;
  static deserializeBinaryFromReader(message: BalanceHistoryRequest, reader: jspb.BinaryReader): BalanceHistoryRequest;
}

export namespace BalanceHistoryRequest {
  export type AsObject = {
    userId: number,
    asset: string,
    actionType: string,
    startTime: number,
    endTime: number,
    offset: number,
    limit: number,
  }
}

export class BalanceHistoryResponse extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  clearRecordsList(): void;
  getRecordsList(): Array<BalanceHistoryResponse.Record>;
  setRecordsList(value: Array<BalanceHistoryResponse.Record>): void;
  addRecords(value?: BalanceHistoryResponse.Record, index?: number): BalanceHistoryResponse.Record;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceHistoryResponse): BalanceHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceHistoryResponse;
  static deserializeBinaryFromReader(message: BalanceHistoryResponse, reader: jspb.BinaryReader): BalanceHistoryResponse;
}

export namespace BalanceHistoryResponse {
  export type AsObject = {
    offset: number,
    limit: number,
    recordsList: Array<BalanceHistoryResponse.Record.AsObject>,
  }

  export class Record extends jspb.Message {
    getTime(): number;
    setTime(value: number): void;

    getAsset(): string;
    setAsset(value: string): void;

    getActionType(): string;
    setActionType(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    getBalance(): string;
    setBalance(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Record.AsObject;
    static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Record;
    static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
  }

  export namespace Record {
    export type AsObject = {
      time: number,
      asset: string,
      actionType: string,
      amount: string,
      balance: string,
    }
  }
}

export class UpdateOrder extends jspb.Message {
  getEvent(): OrderEvent;
  setEvent(value: OrderEvent): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): OrderDetailedInfo | undefined;
  setInfo(value?: OrderDetailedInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrder.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrder): UpdateOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrder;
  static deserializeBinaryFromReader(message: UpdateOrder, reader: jspb.BinaryReader): UpdateOrder;
}

export namespace UpdateOrder {
  export type AsObject = {
    event: OrderEvent,
    info?: OrderDetailedInfo.AsObject,
  }
}

export class OrderPutLimitRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getMarket(): string;
  setMarket(value: string): void;

  getSide(): MarketSide;
  setSide(value: MarketSide): void;

  getAmount(): string;
  setAmount(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getFeeRate(): string;
  setFeeRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderPutLimitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderPutLimitRequest): OrderPutLimitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderPutLimitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderPutLimitRequest;
  static deserializeBinaryFromReader(message: OrderPutLimitRequest, reader: jspb.BinaryReader): OrderPutLimitRequest;
}

export namespace OrderPutLimitRequest {
  export type AsObject = {
    userId: number,
    market: string,
    side: MarketSide,
    amount: string,
    price: string,
    feeRate: string,
  }
}

export class OrderPutMarketRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getMarket(): string;
  setMarket(value: string): void;

  getSide(): MarketSide;
  setSide(value: MarketSide): void;

  getAmount(): string;
  setAmount(value: string): void;

  getFeeRate(): string;
  setFeeRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderPutMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderPutMarketRequest): OrderPutMarketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderPutMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderPutMarketRequest;
  static deserializeBinaryFromReader(message: OrderPutMarketRequest, reader: jspb.BinaryReader): OrderPutMarketRequest;
}

export namespace OrderPutMarketRequest {
  export type AsObject = {
    userId: number,
    market: string,
    side: MarketSide,
    amount: string,
    feeRate: string,
  }
}

export class OrderCancelRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getMarket(): string;
  setMarket(value: string): void;

  getOrderId(): number;
  setOrderId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderCancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderCancelRequest): OrderCancelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderCancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderCancelRequest;
  static deserializeBinaryFromReader(message: OrderCancelRequest, reader: jspb.BinaryReader): OrderCancelRequest;
}

export namespace OrderCancelRequest {
  export type AsObject = {
    userId: number,
    market: string,
    orderId: number,
  }
}

export class OrderDealsRequest extends jspb.Message {
  getOrderId(): number;
  setOrderId(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDealsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDealsRequest): OrderDealsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderDealsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDealsRequest;
  static deserializeBinaryFromReader(message: OrderDealsRequest, reader: jspb.BinaryReader): OrderDealsRequest;
}

export namespace OrderDealsRequest {
  export type AsObject = {
    orderId: number,
    offset: number,
    limit: number,
  }
}

export class OrderDealsResponse extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  clearDealsList(): void;
  getDealsList(): Array<DealDetail>;
  setDealsList(value: Array<DealDetail>): void;
  addDeals(value?: DealDetail, index?: number): DealDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDealsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDealsResponse): OrderDealsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderDealsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDealsResponse;
  static deserializeBinaryFromReader(message: OrderDealsResponse, reader: jspb.BinaryReader): OrderDealsResponse;
}

export namespace OrderDealsResponse {
  export type AsObject = {
    offset: number,
    limit: number,
    dealsList: Array<DealDetail.AsObject>,
  }
}

export class OrderBookRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getSide(): MarketSide;
  setSide(value: MarketSide): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBookRequest): OrderBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBookRequest;
  static deserializeBinaryFromReader(message: OrderBookRequest, reader: jspb.BinaryReader): OrderBookRequest;
}

export namespace OrderBookRequest {
  export type AsObject = {
    market: string,
    side: MarketSide,
    offset: number,
    limit: number,
  }
}

export class OrderBookResponse extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  clearOrdersList(): void;
  getOrdersList(): Array<OrderDetailedInfo>;
  setOrdersList(value: Array<OrderDetailedInfo>): void;
  addOrders(value?: OrderDetailedInfo, index?: number): OrderDetailedInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBookResponse): OrderBookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBookResponse;
  static deserializeBinaryFromReader(message: OrderBookResponse, reader: jspb.BinaryReader): OrderBookResponse;
}

export namespace OrderBookResponse {
  export type AsObject = {
    offset: number,
    limit: number,
    total: number,
    ordersList: Array<OrderDetailedInfo.AsObject>,
  }
}

export class OrderDepthRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getInterval(): string;
  setInterval(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDepthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDepthRequest): OrderDepthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderDepthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDepthRequest;
  static deserializeBinaryFromReader(message: OrderDepthRequest, reader: jspb.BinaryReader): OrderDepthRequest;
}

export namespace OrderDepthRequest {
  export type AsObject = {
    market: string,
    limit: number,
    interval: string,
  }
}

export class OrderDepthResponse extends jspb.Message {
  clearAsksList(): void;
  getAsksList(): Array<OrderDepthResponse.Depth>;
  setAsksList(value: Array<OrderDepthResponse.Depth>): void;
  addAsks(value?: OrderDepthResponse.Depth, index?: number): OrderDepthResponse.Depth;

  clearBidsList(): void;
  getBidsList(): Array<OrderDepthResponse.Depth>;
  setBidsList(value: Array<OrderDepthResponse.Depth>): void;
  addBids(value?: OrderDepthResponse.Depth, index?: number): OrderDepthResponse.Depth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDepthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDepthResponse): OrderDepthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderDepthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDepthResponse;
  static deserializeBinaryFromReader(message: OrderDepthResponse, reader: jspb.BinaryReader): OrderDepthResponse;
}

export namespace OrderDepthResponse {
  export type AsObject = {
    asksList: Array<OrderDepthResponse.Depth.AsObject>,
    bidsList: Array<OrderDepthResponse.Depth.AsObject>,
  }

  export class Depth extends jspb.Message {
    getVolume(): string;
    setVolume(value: string): void;

    getPrice(): string;
    setPrice(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Depth.AsObject;
    static toObject(includeInstance: boolean, msg: Depth): Depth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Depth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Depth;
    static deserializeBinaryFromReader(message: Depth, reader: jspb.BinaryReader): Depth;
  }

  export namespace Depth {
    export type AsObject = {
      volume: string,
      price: string,
    }
  }
}

export class OrderPendingRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getMarket(): string;
  setMarket(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderPendingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderPendingRequest): OrderPendingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderPendingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderPendingRequest;
  static deserializeBinaryFromReader(message: OrderPendingRequest, reader: jspb.BinaryReader): OrderPendingRequest;
}

export namespace OrderPendingRequest {
  export type AsObject = {
    userId: number,
    market: string,
    offset: number,
    limit: number,
  }
}

export class OrderPendingResponse extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  clearOrdersList(): void;
  getOrdersList(): Array<OrderDetailedInfo>;
  setOrdersList(value: Array<OrderDetailedInfo>): void;
  addOrders(value?: OrderDetailedInfo, index?: number): OrderDetailedInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderPendingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderPendingResponse): OrderPendingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderPendingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderPendingResponse;
  static deserializeBinaryFromReader(message: OrderPendingResponse, reader: jspb.BinaryReader): OrderPendingResponse;
}

export namespace OrderPendingResponse {
  export type AsObject = {
    offset: number,
    limit: number,
    total: number,
    ordersList: Array<OrderDetailedInfo.AsObject>,
  }
}

export class OrderPendingDetailRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getOrderId(): number;
  setOrderId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderPendingDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderPendingDetailRequest): OrderPendingDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderPendingDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderPendingDetailRequest;
  static deserializeBinaryFromReader(message: OrderPendingDetailRequest, reader: jspb.BinaryReader): OrderPendingDetailRequest;
}

export namespace OrderPendingDetailRequest {
  export type AsObject = {
    market: string,
    orderId: number,
  }
}

export class OrderFinishedRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getMarket(): string;
  setMarket(value: string): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getEndTime(): number;
  setEndTime(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getSide(): MarketSide;
  setSide(value: MarketSide): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderFinishedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderFinishedRequest): OrderFinishedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderFinishedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderFinishedRequest;
  static deserializeBinaryFromReader(message: OrderFinishedRequest, reader: jspb.BinaryReader): OrderFinishedRequest;
}

export namespace OrderFinishedRequest {
  export type AsObject = {
    userId: number,
    market: string,
    startTime: number,
    endTime: number,
    offset: number,
    limit: number,
    side: MarketSide,
  }
}

export class OrderFinishedResponse extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  clearOrdersList(): void;
  getOrdersList(): Array<OrderDetailedInfo>;
  setOrdersList(value: Array<OrderDetailedInfo>): void;
  addOrders(value?: OrderDetailedInfo, index?: number): OrderDetailedInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderFinishedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderFinishedResponse): OrderFinishedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderFinishedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderFinishedResponse;
  static deserializeBinaryFromReader(message: OrderFinishedResponse, reader: jspb.BinaryReader): OrderFinishedResponse;
}

export namespace OrderFinishedResponse {
  export type AsObject = {
    offset: number,
    limit: number,
    total: number,
    ordersList: Array<OrderDetailedInfo.AsObject>,
  }
}

export class OrderFinishedDetailRequest extends jspb.Message {
  getOrderId(): number;
  setOrderId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderFinishedDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderFinishedDetailRequest): OrderFinishedDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderFinishedDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderFinishedDetailRequest;
  static deserializeBinaryFromReader(message: OrderFinishedDetailRequest, reader: jspb.BinaryReader): OrderFinishedDetailRequest;
}

export namespace OrderFinishedDetailRequest {
  export type AsObject = {
    orderId: number,
  }
}

export class MarketLastRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketLastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketLastRequest): MarketLastRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketLastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketLastRequest;
  static deserializeBinaryFromReader(message: MarketLastRequest, reader: jspb.BinaryReader): MarketLastRequest;
}

export namespace MarketLastRequest {
  export type AsObject = {
    market: string,
  }
}

export class MarketLastResponse extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketLastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketLastResponse): MarketLastResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketLastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketLastResponse;
  static deserializeBinaryFromReader(message: MarketLastResponse, reader: jspb.BinaryReader): MarketLastResponse;
}

export namespace MarketLastResponse {
  export type AsObject = {
    price: string,
  }
}

export class MarketDealsRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getLastId(): number;
  setLastId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDealsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDealsRequest): MarketDealsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDealsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDealsRequest;
  static deserializeBinaryFromReader(message: MarketDealsRequest, reader: jspb.BinaryReader): MarketDealsRequest;
}

export namespace MarketDealsRequest {
  export type AsObject = {
    market: string,
    limit: number,
    lastId: number,
  }
}

export class MarketDealsResponse extends jspb.Message {
  clearDealsList(): void;
  getDealsList(): Array<MarketDealsResponse.Deal>;
  setDealsList(value: Array<MarketDealsResponse.Deal>): void;
  addDeals(value?: MarketDealsResponse.Deal, index?: number): MarketDealsResponse.Deal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDealsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDealsResponse): MarketDealsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDealsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDealsResponse;
  static deserializeBinaryFromReader(message: MarketDealsResponse, reader: jspb.BinaryReader): MarketDealsResponse;
}

export namespace MarketDealsResponse {
  export type AsObject = {
    dealsList: Array<MarketDealsResponse.Deal.AsObject>,
  }

  export class Deal extends jspb.Message {
    getDealId(): number;
    setDealId(value: number): void;

    getTime(): number;
    setTime(value: number): void;

    getType(): string;
    setType(value: string): void;

    getAmount(): string;
    setAmount(value: string): void;

    getPrice(): string;
    setPrice(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Deal.AsObject;
    static toObject(includeInstance: boolean, msg: Deal): Deal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Deal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Deal;
    static deserializeBinaryFromReader(message: Deal, reader: jspb.BinaryReader): Deal;
  }

  export namespace Deal {
    export type AsObject = {
      dealId: number,
      time: number,
      type: string,
      amount: string,
      price: string,
    }
  }
}

export class MarketUserDealsRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getMarket(): string;
  setMarket(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketUserDealsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketUserDealsRequest): MarketUserDealsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketUserDealsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketUserDealsRequest;
  static deserializeBinaryFromReader(message: MarketUserDealsRequest, reader: jspb.BinaryReader): MarketUserDealsRequest;
}

export namespace MarketUserDealsRequest {
  export type AsObject = {
    userId: number,
    market: string,
    offset: number,
    limit: number,
  }
}

export class MarketUserDealsResponse extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  clearDealsList(): void;
  getDealsList(): Array<DealDetail>;
  setDealsList(value: Array<DealDetail>): void;
  addDeals(value?: DealDetail, index?: number): DealDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketUserDealsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketUserDealsResponse): MarketUserDealsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketUserDealsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketUserDealsResponse;
  static deserializeBinaryFromReader(message: MarketUserDealsResponse, reader: jspb.BinaryReader): MarketUserDealsResponse;
}

export namespace MarketUserDealsResponse {
  export type AsObject = {
    offset: number,
    limit: number,
    dealsList: Array<DealDetail.AsObject>,
  }
}

export class MarketKLineRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getInterval(): number;
  setInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketKLineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketKLineRequest): MarketKLineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketKLineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketKLineRequest;
  static deserializeBinaryFromReader(message: MarketKLineRequest, reader: jspb.BinaryReader): MarketKLineRequest;
}

export namespace MarketKLineRequest {
  export type AsObject = {
    market: string,
    start: number,
    end: number,
    interval: number,
  }
}

export class MarketKLineResponse extends jspb.Message {
  clearKlineList(): void;
  getKlineList(): Array<KLine>;
  setKlineList(value: Array<KLine>): void;
  addKline(value?: KLine, index?: number): KLine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketKLineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketKLineResponse): MarketKLineResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketKLineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketKLineResponse;
  static deserializeBinaryFromReader(message: MarketKLineResponse, reader: jspb.BinaryReader): MarketKLineResponse;
}

export namespace MarketKLineResponse {
  export type AsObject = {
    klineList: Array<KLine.AsObject>,
  }
}

export class MarketStatusRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getPeriod(): number;
  setPeriod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketStatusRequest): MarketStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketStatusRequest;
  static deserializeBinaryFromReader(message: MarketStatusRequest, reader: jspb.BinaryReader): MarketStatusRequest;
}

export namespace MarketStatusRequest {
  export type AsObject = {
    market: string,
    period: number,
  }
}

export class MarketStatusResponse extends jspb.Message {
  getPeriod(): number;
  setPeriod(value: number): void;

  getLast(): string;
  setLast(value: string): void;

  getOpen(): string;
  setOpen(value: string): void;

  getClose(): string;
  setClose(value: string): void;

  getHigh(): string;
  setHigh(value: string): void;

  getLow(): string;
  setLow(value: string): void;

  getVolume(): string;
  setVolume(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketStatusResponse): MarketStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketStatusResponse;
  static deserializeBinaryFromReader(message: MarketStatusResponse, reader: jspb.BinaryReader): MarketStatusResponse;
}

export namespace MarketStatusResponse {
  export type AsObject = {
    period: number,
    last: string,
    open: string,
    close: string,
    high: string,
    low: string,
    volume: string,
  }
}

export class SubscribeTodayStatus extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getInterval(): number;
  setInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTodayStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTodayStatus): SubscribeTodayStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeTodayStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTodayStatus;
  static deserializeBinaryFromReader(message: SubscribeTodayStatus, reader: jspb.BinaryReader): SubscribeTodayStatus;
}

export namespace SubscribeTodayStatus {
  export type AsObject = {
    market: string,
    interval: number,
  }
}

export class MarketStatusTodayRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketStatusTodayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketStatusTodayRequest): MarketStatusTodayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketStatusTodayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketStatusTodayRequest;
  static deserializeBinaryFromReader(message: MarketStatusTodayRequest, reader: jspb.BinaryReader): MarketStatusTodayRequest;
}

export namespace MarketStatusTodayRequest {
  export type AsObject = {
    market: string,
  }
}

export class MarketStatusTodayResponse extends jspb.Message {
  getOpen(): string;
  setOpen(value: string): void;

  getLast(): string;
  setLast(value: string): void;

  getHigh(): string;
  setHigh(value: string): void;

  getLow(): string;
  setLow(value: string): void;

  getDeal(): string;
  setDeal(value: string): void;

  getVolume(): string;
  setVolume(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketStatusTodayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketStatusTodayResponse): MarketStatusTodayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketStatusTodayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketStatusTodayResponse;
  static deserializeBinaryFromReader(message: MarketStatusTodayResponse, reader: jspb.BinaryReader): MarketStatusTodayResponse;
}

export namespace MarketStatusTodayResponse {
  export type AsObject = {
    open: string,
    last: string,
    high: string,
    low: string,
    deal: string,
    volume: string,
  }
}

export enum Limit {
  LimitNone = 0,
  MaxOrders = 100,
  MaxDepth = 10000,
}

export enum OrderEvent {
  NoneEvent = 0,
  EventPut = 1,
  EventUpdate = 2,
  EventFinish = 3,
}

export enum Asset {
  BTC = 0,
  BCH = 1,
  ETH = 2,
  ETC = 3,
  LTC = 4,
  ZEC = 5,
  DASH = 6,
  XRP = 7,
  CNY = 8,
}

export enum Market {
  BTCETH = 0,
  BTCBCH = 1,
  BTCLTC = 2,
  BTCXRP = 3,
  BTCXEM = 4,
  BTCZEC = 5,
  BTCDASH = 6,
  BTCCNY = 7,
  ETHBCH = 8,
  ETHETC = 9,
}

export enum MarketSide {
  NoneSide = 0,
  AskSide = 1,
  BidSide = 2,
}

export enum DealType {
  NoneDealType = 0,
  Sell = 1,
  Buy = 2,
}

