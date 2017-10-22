// package: rpc
// file: rpc.proto

import * as rpc_pb from "./rpc_pb";
// import * as google_api_annotations_pb from "./google/api/annotations_pb";

export class Exchange {
  static serviceName = "rpc.Exchange";
}
export namespace Exchange {
  export class BalanceQuery {
    static readonly methodName = "BalanceQuery";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.BalanceQueryRequest;
    static readonly responseType = rpc_pb.BalanceQueryResponse;
  }
  export class BalanceWithdrawal {
    static readonly methodName = "BalanceWithdrawal";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.BalanceWithdrawalRequest;
    static readonly responseType = rpc_pb.BalanceWithdrawalResponse;
  }
  export class BalanceHistory {
    static readonly methodName = "BalanceHistory";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.BalanceHistoryRequest;
    static readonly responseType = rpc_pb.BalanceHistoryResponse;
  }
  export class OrderPutLimit {
    static readonly methodName = "OrderPutLimit";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderPutLimitRequest;
    static readonly responseType = rpc_pb.OrderDetailedInfo;
  }
  export class OrderPutMarket {
    static readonly methodName = "OrderPutMarket";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderPutMarketRequest;
    static readonly responseType = rpc_pb.OrderDetailedInfo;
  }
  export class OrderCancel {
    static readonly methodName = "OrderCancel";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderCancelRequest;
    static readonly responseType = rpc_pb.OrderDetailedInfo;
  }
  export class OrderBook {
    static readonly methodName = "OrderBook";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderBookRequest;
    static readonly responseType = rpc_pb.OrderBookResponse;
  }
  export class OrderDepth {
    static readonly methodName = "OrderDepth";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderDepthRequest;
    static readonly responseType = rpc_pb.OrderDepthResponse;
  }
  export class OrderPending {
    static readonly methodName = "OrderPending";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderPendingRequest;
    static readonly responseType = rpc_pb.OrderPendingResponse;
  }
  export class OrderDeals {
    static readonly methodName = "OrderDeals";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderDealsRequest;
    static readonly responseType = rpc_pb.OrderDealsResponse;
  }
  export class OrderPendingDetails {
    static readonly methodName = "OrderPendingDetails";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderPendingDetailRequest;
    static readonly responseType = rpc_pb.OrderDetailedInfo;
  }
  export class OrderFinished {
    static readonly methodName = "OrderFinished";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderFinishedRequest;
    static readonly responseType = rpc_pb.OrderFinishedResponse;
  }
  export class OrderFinishedDetail {
    static readonly methodName = "OrderFinishedDetail";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OrderFinishedDetailRequest;
    static readonly responseType = rpc_pb.OrderDetailedInfo;
  }
  export class MarketLast {
    static readonly methodName = "MarketLast";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.MarketLastRequest;
    static readonly responseType = rpc_pb.MarketLastResponse;
  }
  export class MarketDeals {
    static readonly methodName = "MarketDeals";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.MarketDealsRequest;
    static readonly responseType = rpc_pb.MarketDealsResponse;
  }
  export class MarketUserDeals {
    static readonly methodName = "MarketUserDeals";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.MarketUserDealsRequest;
    static readonly responseType = rpc_pb.MarketUserDealsResponse;
  }
  export class MarketKline {
    static readonly methodName = "MarketKline";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.MarketKLineRequest;
    static readonly responseType = rpc_pb.MarketKLineResponse;
  }
  export class MarketStatus {
    static readonly methodName = "MarketStatus";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.MarketStatusRequest;
    static readonly responseType = rpc_pb.MarketStatusResponse;
  }
  export class MarketStatusToday {
    static readonly methodName = "MarketStatusToday";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.MarketStatusTodayRequest;
    static readonly responseType = rpc_pb.MarketStatusTodayResponse;
  }
  export class SubscribeUpdates {
    static readonly methodName = "SubscribeUpdates";
    static readonly service = Exchange;
    static readonly requestStream = true;
    static readonly responseStream = true;
    static readonly requestType = rpc_pb.Command;
    static readonly responseType = rpc_pb.Update;
  }
}
