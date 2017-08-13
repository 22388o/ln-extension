// package: lnrpc
// file: rpc.proto

import * as rpc_pb from "./rpc_pb";
export class Lightning {
  static serviceName = "lnrpc.Lightning";
}
export namespace Lightning {
  export class WalletBalance {
    static readonly methodName = "WalletBalance";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.WalletBalanceRequest;
    static readonly responseType = rpc_pb.WalletBalanceResponse;
  }
  export class ChannelBalance {
    static readonly methodName = "ChannelBalance";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.ChannelBalanceRequest;
    static readonly responseType = rpc_pb.ChannelBalanceResponse;
  }
  export class GetTransactions {
    static readonly methodName = "GetTransactions";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.GetTransactionsRequest;
    static readonly responseType = rpc_pb.TransactionDetails;
  }
  export class SendCoins {
    static readonly methodName = "SendCoins";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.SendCoinsRequest;
    static readonly responseType = rpc_pb.SendCoinsResponse;
  }
  export class SubscribeTransactions {
    static readonly methodName = "SubscribeTransactions";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = rpc_pb.GetTransactionsRequest;
    static readonly responseType = rpc_pb.Transaction;
  }
  export class SendMany {
    static readonly methodName = "SendMany";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.SendManyRequest;
    static readonly responseType = rpc_pb.SendManyResponse;
  }
  export class NewAddress {
    static readonly methodName = "NewAddress";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.NewAddressRequest;
    static readonly responseType = rpc_pb.NewAddressResponse;
  }
  export class NewWitnessAddress {
    static readonly methodName = "NewWitnessAddress";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.NewWitnessAddressRequest;
    static readonly responseType = rpc_pb.NewAddressResponse;
  }
  export class SignMessage {
    static readonly methodName = "SignMessage";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.SignMessageRequest;
    static readonly responseType = rpc_pb.SignMessageResponse;
  }
  export class VerifyMessage {
    static readonly methodName = "VerifyMessage";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.VerifyMessageRequest;
    static readonly responseType = rpc_pb.VerifyMessageResponse;
  }
  export class ConnectPeer {
    static readonly methodName = "ConnectPeer";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.ConnectPeerRequest;
    static readonly responseType = rpc_pb.ConnectPeerResponse;
  }
  export class DisconnectPeer {
    static readonly methodName = "DisconnectPeer";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.DisconnectPeerRequest;
    static readonly responseType = rpc_pb.DisconnectPeerResponse;
  }
  export class ListPeers {
    static readonly methodName = "ListPeers";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.ListPeersRequest;
    static readonly responseType = rpc_pb.ListPeersResponse;
  }
  export class GetInfo {
    static readonly methodName = "GetInfo";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.GetInfoRequest;
    static readonly responseType = rpc_pb.GetInfoResponse;
  }
  export class PendingChannels {
    static readonly methodName = "PendingChannels";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.PendingChannelRequest;
    static readonly responseType = rpc_pb.PendingChannelResponse;
  }
  export class ListChannels {
    static readonly methodName = "ListChannels";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.ListChannelsRequest;
    static readonly responseType = rpc_pb.ListChannelsResponse;
  }
  export class OpenChannelSync {
    static readonly methodName = "OpenChannelSync";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.OpenChannelRequest;
    static readonly responseType = rpc_pb.ChannelPoint;
  }
  export class OpenChannel {
    static readonly methodName = "OpenChannel";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = rpc_pb.OpenChannelRequest;
    static readonly responseType = rpc_pb.OpenStatusUpdate;
  }
  export class CloseChannel {
    static readonly methodName = "CloseChannel";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = rpc_pb.CloseChannelRequest;
    static readonly responseType = rpc_pb.CloseStatusUpdate;
  }
  export class SendPayment {
    static readonly methodName = "SendPayment";
    static readonly service = Lightning;
    static readonly requestStream = true;
    static readonly responseStream = true;
    static readonly requestType = rpc_pb.SendRequest;
    static readonly responseType = rpc_pb.SendResponse;
  }
  export class SendPaymentSync {
    static readonly methodName = "SendPaymentSync";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.SendRequest;
    static readonly responseType = rpc_pb.SendResponse;
  }
  export class AddInvoice {
    static readonly methodName = "AddInvoice";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.Invoice;
    static readonly responseType = rpc_pb.AddInvoiceResponse;
  }
  export class ListInvoices {
    static readonly methodName = "ListInvoices";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.ListInvoiceRequest;
    static readonly responseType = rpc_pb.ListInvoiceResponse;
  }
  export class LookupInvoice {
    static readonly methodName = "LookupInvoice";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.PaymentHash;
    static readonly responseType = rpc_pb.Invoice;
  }
  export class SubscribeInvoices {
    static readonly methodName = "SubscribeInvoices";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = rpc_pb.InvoiceSubscription;
    static readonly responseType = rpc_pb.Invoice;
  }
  export class DecodePayReq {
    static readonly methodName = "DecodePayReq";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.PayReqString;
    static readonly responseType = rpc_pb.PayReq;
  }
  export class ListPayments {
    static readonly methodName = "ListPayments";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.ListPaymentsRequest;
    static readonly responseType = rpc_pb.ListPaymentsResponse;
  }
  export class DeleteAllPayments {
    static readonly methodName = "DeleteAllPayments";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.DeleteAllPaymentsRequest;
    static readonly responseType = rpc_pb.DeleteAllPaymentsResponse;
  }
  export class DescribeGraph {
    static readonly methodName = "DescribeGraph";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.ChannelGraphRequest;
    static readonly responseType = rpc_pb.ChannelGraph;
  }
  export class GetChanInfo {
    static readonly methodName = "GetChanInfo";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.ChanInfoRequest;
    static readonly responseType = rpc_pb.ChannelEdge;
  }
  export class GetNodeInfo {
    static readonly methodName = "GetNodeInfo";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.NodeInfoRequest;
    static readonly responseType = rpc_pb.NodeInfo;
  }
  export class QueryRoutes {
    static readonly methodName = "QueryRoutes";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.QueryRoutesRequest;
    static readonly responseType = rpc_pb.QueryRoutesResponse;
  }
  export class GetNetworkInfo {
    static readonly methodName = "GetNetworkInfo";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.NetworkInfoRequest;
    static readonly responseType = rpc_pb.NetworkInfo;
  }
  export class StopDaemon {
    static readonly methodName = "StopDaemon";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.StopRequest;
    static readonly responseType = rpc_pb.StopResponse;
  }
  export class SubscribeChannelGraph {
    static readonly methodName = "SubscribeChannelGraph";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = rpc_pb.GraphTopologySubscription;
    static readonly responseType = rpc_pb.GraphTopologyUpdate;
  }
  export class SetAlias {
    static readonly methodName = "SetAlias";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.SetAliasRequest;
    static readonly responseType = rpc_pb.SetAliasResponse;
  }
  export class DebugLevel {
    static readonly methodName = "DebugLevel";
    static readonly service = Lightning;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = rpc_pb.DebugLevelRequest;
    static readonly responseType = rpc_pb.DebugLevelResponse;
  }
}
