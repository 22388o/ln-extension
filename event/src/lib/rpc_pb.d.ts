// package: lnrpc
// file: rpc.proto

import * as jspb from "google-protobuf";

export class Transaction extends jspb.Message {
  getTxHash(): string;
  setTxHash(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getNumConfirmations(): number;
  setNumConfirmations(value: number): void;

  getBlockHash(): string;
  setBlockHash(value: string): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getTimeStamp(): number;
  setTimeStamp(value: number): void;

  getTotalFees(): number;
  setTotalFees(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    txHash: string,
    amount: number,
    numConfirmations: number,
    blockHash: string,
    blockHeight: number,
    timeStamp: number,
    totalFees: number,
  }
}

export class GetTransactionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsRequest): GetTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsRequest;
  static deserializeBinaryFromReader(message: GetTransactionsRequest, reader: jspb.BinaryReader): GetTransactionsRequest;
}

export namespace GetTransactionsRequest {
  export type AsObject = {
  }
}

export class TransactionDetails extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): void;
  addTransactions(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionDetails.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionDetails): TransactionDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionDetails;
  static deserializeBinaryFromReader(message: TransactionDetails, reader: jspb.BinaryReader): TransactionDetails;
}

export namespace TransactionDetails {
  export type AsObject = {
    transactionsList: Array<Transaction.AsObject>,
  }
}

export class SendRequest extends jspb.Message {
  getDest(): Uint8Array | string;
  getDest_asU8(): Uint8Array;
  getDest_asB64(): string;
  setDest(value: Uint8Array | string): void;

  getDestString(): string;
  setDestString(value: string): void;

  getAmt(): number;
  setAmt(value: number): void;

  getPaymentHash(): Uint8Array | string;
  getPaymentHash_asU8(): Uint8Array;
  getPaymentHash_asB64(): string;
  setPaymentHash(value: Uint8Array | string): void;

  getPaymentHashString(): string;
  setPaymentHashString(value: string): void;

  getPaymentRequest(): string;
  setPaymentRequest(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendRequest): SendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendRequest;
  static deserializeBinaryFromReader(message: SendRequest, reader: jspb.BinaryReader): SendRequest;
}

export namespace SendRequest {
  export type AsObject = {
    dest: Uint8Array | string,
    destString: string,
    amt: number,
    paymentHash: Uint8Array | string,
    paymentHashString: string,
    paymentRequest: string,
  }
}

export class SendResponse extends jspb.Message {
  getPaymentError(): string;
  setPaymentError(value: string): void;

  getPaymentPreimage(): Uint8Array | string;
  getPaymentPreimage_asU8(): Uint8Array;
  getPaymentPreimage_asB64(): string;
  setPaymentPreimage(value: Uint8Array | string): void;

  hasPaymentRoute(): boolean;
  clearPaymentRoute(): void;
  getPaymentRoute(): Route | undefined;
  setPaymentRoute(value?: Route): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendResponse): SendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendResponse;
  static deserializeBinaryFromReader(message: SendResponse, reader: jspb.BinaryReader): SendResponse;
}

export namespace SendResponse {
  export type AsObject = {
    paymentError: string,
    paymentPreimage: Uint8Array | string,
    paymentRoute?: Route.AsObject,
  }
}

export class ChannelPoint extends jspb.Message {
  getFundingTxid(): Uint8Array | string;
  getFundingTxid_asU8(): Uint8Array;
  getFundingTxid_asB64(): string;
  setFundingTxid(value: Uint8Array | string): void;

  getFundingTxidStr(): string;
  setFundingTxidStr(value: string): void;

  getOutputIndex(): number;
  setOutputIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelPoint.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelPoint): ChannelPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelPoint;
  static deserializeBinaryFromReader(message: ChannelPoint, reader: jspb.BinaryReader): ChannelPoint;
}

export namespace ChannelPoint {
  export type AsObject = {
    fundingTxid: Uint8Array | string,
    fundingTxidStr: string,
    outputIndex: number,
  }
}

export class LightningAddress extends jspb.Message {
  getPubkey(): string;
  setPubkey(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightningAddress.AsObject;
  static toObject(includeInstance: boolean, msg: LightningAddress): LightningAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LightningAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LightningAddress;
  static deserializeBinaryFromReader(message: LightningAddress, reader: jspb.BinaryReader): LightningAddress;
}

export namespace LightningAddress {
  export type AsObject = {
    pubkey: string,
    host: string,
  }
}

export class SendManyRequest extends jspb.Message {
  getAddrtoamountMap(): jspb.Map<string, number>;
  clearAddrtoamountMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendManyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendManyRequest): SendManyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendManyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendManyRequest;
  static deserializeBinaryFromReader(message: SendManyRequest, reader: jspb.BinaryReader): SendManyRequest;
}

export namespace SendManyRequest {
  export type AsObject = {
    addrtoamountMap: Array<[string, number]>,
  }
}

export class SendManyResponse extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendManyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendManyResponse): SendManyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendManyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendManyResponse;
  static deserializeBinaryFromReader(message: SendManyResponse, reader: jspb.BinaryReader): SendManyResponse;
}

export namespace SendManyResponse {
  export type AsObject = {
    txid: string,
  }
}

export class SendCoinsRequest extends jspb.Message {
  getAddr(): string;
  setAddr(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendCoinsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendCoinsRequest): SendCoinsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendCoinsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendCoinsRequest;
  static deserializeBinaryFromReader(message: SendCoinsRequest, reader: jspb.BinaryReader): SendCoinsRequest;
}

export namespace SendCoinsRequest {
  export type AsObject = {
    addr: string,
    amount: number,
  }
}

export class SendCoinsResponse extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendCoinsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendCoinsResponse): SendCoinsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendCoinsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendCoinsResponse;
  static deserializeBinaryFromReader(message: SendCoinsResponse, reader: jspb.BinaryReader): SendCoinsResponse;
}

export namespace SendCoinsResponse {
  export type AsObject = {
    txid: string,
  }
}

export class NewAddressRequest extends jspb.Message {
  getType(): NewAddressRequest.AddressType;
  setType(value: NewAddressRequest.AddressType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewAddressRequest): NewAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewAddressRequest;
  static deserializeBinaryFromReader(message: NewAddressRequest, reader: jspb.BinaryReader): NewAddressRequest;
}

export namespace NewAddressRequest {
  export type AsObject = {
    type: NewAddressRequest.AddressType,
  }

  export enum AddressType {
    WITNESS_PUBKEY_HASH = 0,
    NESTED_PUBKEY_HASH = 1,
    PUBKEY_HASH = 2,
  }
}

export class NewWitnessAddressRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewWitnessAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewWitnessAddressRequest): NewWitnessAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewWitnessAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewWitnessAddressRequest;
  static deserializeBinaryFromReader(message: NewWitnessAddressRequest, reader: jspb.BinaryReader): NewWitnessAddressRequest;
}

export namespace NewWitnessAddressRequest {
  export type AsObject = {
  }
}

export class NewAddressResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewAddressResponse): NewAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewAddressResponse;
  static deserializeBinaryFromReader(message: NewAddressResponse, reader: jspb.BinaryReader): NewAddressResponse;
}

export namespace NewAddressResponse {
  export type AsObject = {
    address: string,
  }
}

export class SignMessageRequest extends jspb.Message {
  getMsg(): Uint8Array | string;
  getMsg_asU8(): Uint8Array;
  getMsg_asB64(): string;
  setMsg(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignMessageRequest): SignMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignMessageRequest;
  static deserializeBinaryFromReader(message: SignMessageRequest, reader: jspb.BinaryReader): SignMessageRequest;
}

export namespace SignMessageRequest {
  export type AsObject = {
    msg: Uint8Array | string,
  }
}

export class SignMessageResponse extends jspb.Message {
  getSignature(): string;
  setSignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignMessageResponse): SignMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignMessageResponse;
  static deserializeBinaryFromReader(message: SignMessageResponse, reader: jspb.BinaryReader): SignMessageResponse;
}

export namespace SignMessageResponse {
  export type AsObject = {
    signature: string,
  }
}

export class VerifyMessageRequest extends jspb.Message {
  getMsg(): Uint8Array | string;
  getMsg_asU8(): Uint8Array;
  getMsg_asB64(): string;
  setMsg(value: Uint8Array | string): void;

  getSignature(): string;
  setSignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMessageRequest): VerifyMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMessageRequest;
  static deserializeBinaryFromReader(message: VerifyMessageRequest, reader: jspb.BinaryReader): VerifyMessageRequest;
}

export namespace VerifyMessageRequest {
  export type AsObject = {
    msg: Uint8Array | string,
    signature: string,
  }
}

export class VerifyMessageResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  getPubkey(): string;
  setPubkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMessageResponse): VerifyMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMessageResponse;
  static deserializeBinaryFromReader(message: VerifyMessageResponse, reader: jspb.BinaryReader): VerifyMessageResponse;
}

export namespace VerifyMessageResponse {
  export type AsObject = {
    valid: boolean,
    pubkey: string,
  }
}

export class ConnectPeerRequest extends jspb.Message {
  hasAddr(): boolean;
  clearAddr(): void;
  getAddr(): LightningAddress | undefined;
  setAddr(value?: LightningAddress): void;

  getPerm(): boolean;
  setPerm(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectPeerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectPeerRequest): ConnectPeerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectPeerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectPeerRequest;
  static deserializeBinaryFromReader(message: ConnectPeerRequest, reader: jspb.BinaryReader): ConnectPeerRequest;
}

export namespace ConnectPeerRequest {
  export type AsObject = {
    addr?: LightningAddress.AsObject,
    perm: boolean,
  }
}

export class ConnectPeerResponse extends jspb.Message {
  getPeerId(): number;
  setPeerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectPeerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectPeerResponse): ConnectPeerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectPeerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectPeerResponse;
  static deserializeBinaryFromReader(message: ConnectPeerResponse, reader: jspb.BinaryReader): ConnectPeerResponse;
}

export namespace ConnectPeerResponse {
  export type AsObject = {
    peerId: number,
  }
}

export class DisconnectPeerRequest extends jspb.Message {
  getPubKey(): string;
  setPubKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectPeerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectPeerRequest): DisconnectPeerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisconnectPeerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectPeerRequest;
  static deserializeBinaryFromReader(message: DisconnectPeerRequest, reader: jspb.BinaryReader): DisconnectPeerRequest;
}

export namespace DisconnectPeerRequest {
  export type AsObject = {
    pubKey: string,
  }
}

export class DisconnectPeerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectPeerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectPeerResponse): DisconnectPeerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisconnectPeerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectPeerResponse;
  static deserializeBinaryFromReader(message: DisconnectPeerResponse, reader: jspb.BinaryReader): DisconnectPeerResponse;
}

export namespace DisconnectPeerResponse {
  export type AsObject = {
  }
}

export class HTLC extends jspb.Message {
  getIncoming(): boolean;
  setIncoming(value: boolean): void;

  getAmount(): number;
  setAmount(value: number): void;

  getHashLock(): Uint8Array | string;
  getHashLock_asU8(): Uint8Array;
  getHashLock_asB64(): string;
  setHashLock(value: Uint8Array | string): void;

  getExpirationHeight(): number;
  setExpirationHeight(value: number): void;

  getRevocationDelay(): number;
  setRevocationDelay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTLC.AsObject;
  static toObject(includeInstance: boolean, msg: HTLC): HTLC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTLC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTLC;
  static deserializeBinaryFromReader(message: HTLC, reader: jspb.BinaryReader): HTLC;
}

export namespace HTLC {
  export type AsObject = {
    incoming: boolean,
    amount: number,
    hashLock: Uint8Array | string,
    expirationHeight: number,
    revocationDelay: number,
  }
}

export class ActiveChannel extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): void;

  getRemotePubkey(): string;
  setRemotePubkey(value: string): void;

  getChannelPoint(): string;
  setChannelPoint(value: string): void;

  getChanId(): number;
  setChanId(value: number): void;

  getCapacity(): number;
  setCapacity(value: number): void;

  getLocalBalance(): number;
  setLocalBalance(value: number): void;

  getRemoteBalance(): number;
  setRemoteBalance(value: number): void;

  getCommitFee(): number;
  setCommitFee(value: number): void;

  getCommitWeight(): number;
  setCommitWeight(value: number): void;

  getFeePerKw(): number;
  setFeePerKw(value: number): void;

  getUnsettledBalance(): number;
  setUnsettledBalance(value: number): void;

  getTotalSatoshisSent(): number;
  setTotalSatoshisSent(value: number): void;

  getTotalSatoshisReceived(): number;
  setTotalSatoshisReceived(value: number): void;

  getNumUpdates(): number;
  setNumUpdates(value: number): void;

  clearPendingHtlcsList(): void;
  getPendingHtlcsList(): Array<HTLC>;
  setPendingHtlcsList(value: Array<HTLC>): void;
  addPendingHtlcs(value?: HTLC, index?: number): HTLC;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveChannel.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveChannel): ActiveChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveChannel;
  static deserializeBinaryFromReader(message: ActiveChannel, reader: jspb.BinaryReader): ActiveChannel;
}

export namespace ActiveChannel {
  export type AsObject = {
    active: boolean,
    remotePubkey: string,
    channelPoint: string,
    chanId: number,
    capacity: number,
    localBalance: number,
    remoteBalance: number,
    commitFee: number,
    commitWeight: number,
    feePerKw: number,
    unsettledBalance: number,
    totalSatoshisSent: number,
    totalSatoshisReceived: number,
    numUpdates: number,
    pendingHtlcsList: Array<HTLC.AsObject>,
  }
}

export class ListChannelsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListChannelsRequest): ListChannelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChannelsRequest;
  static deserializeBinaryFromReader(message: ListChannelsRequest, reader: jspb.BinaryReader): ListChannelsRequest;
}

export namespace ListChannelsRequest {
  export type AsObject = {
  }
}

export class ListChannelsResponse extends jspb.Message {
  clearChannelsList(): void;
  getChannelsList(): Array<ActiveChannel>;
  setChannelsList(value: Array<ActiveChannel>): void;
  addChannels(value?: ActiveChannel, index?: number): ActiveChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListChannelsResponse): ListChannelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChannelsResponse;
  static deserializeBinaryFromReader(message: ListChannelsResponse, reader: jspb.BinaryReader): ListChannelsResponse;
}

export namespace ListChannelsResponse {
  export type AsObject = {
    channelsList: Array<ActiveChannel.AsObject>,
  }
}

export class Peer extends jspb.Message {
  getPubKey(): string;
  setPubKey(value: string): void;

  getPeerId(): number;
  setPeerId(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getBytesSent(): number;
  setBytesSent(value: number): void;

  getBytesRecv(): number;
  setBytesRecv(value: number): void;

  getSatSent(): number;
  setSatSent(value: number): void;

  getSatRecv(): number;
  setSatRecv(value: number): void;

  getInbound(): boolean;
  setInbound(value: boolean): void;

  getPingTime(): number;
  setPingTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Peer.AsObject;
  static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Peer;
  static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
}

export namespace Peer {
  export type AsObject = {
    pubKey: string,
    peerId: number,
    address: string,
    bytesSent: number,
    bytesRecv: number,
    satSent: number,
    satRecv: number,
    inbound: boolean,
    pingTime: number,
  }
}

export class ListPeersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPeersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPeersRequest): ListPeersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPeersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPeersRequest;
  static deserializeBinaryFromReader(message: ListPeersRequest, reader: jspb.BinaryReader): ListPeersRequest;
}

export namespace ListPeersRequest {
  export type AsObject = {
  }
}

export class ListPeersResponse extends jspb.Message {
  clearPeersList(): void;
  getPeersList(): Array<Peer>;
  setPeersList(value: Array<Peer>): void;
  addPeers(value?: Peer, index?: number): Peer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPeersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPeersResponse): ListPeersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPeersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPeersResponse;
  static deserializeBinaryFromReader(message: ListPeersResponse, reader: jspb.BinaryReader): ListPeersResponse;
}

export namespace ListPeersResponse {
  export type AsObject = {
    peersList: Array<Peer.AsObject>,
  }
}

export class GetInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
  static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
  export type AsObject = {
  }
}

export class GetInfoResponse extends jspb.Message {
  getIdentityPubkey(): string;
  setIdentityPubkey(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  getNumPendingChannels(): number;
  setNumPendingChannels(value: number): void;

  getNumActiveChannels(): number;
  setNumActiveChannels(value: number): void;

  getNumPeers(): number;
  setNumPeers(value: number): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getBlockHash(): string;
  setBlockHash(value: string): void;

  getSyncedToChain(): boolean;
  setSyncedToChain(value: boolean): void;

  getTestnet(): boolean;
  setTestnet(value: boolean): void;

  clearChainsList(): void;
  getChainsList(): Array<string>;
  setChainsList(value: Array<string>): void;
  addChains(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoResponse): GetInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoResponse;
  static deserializeBinaryFromReader(message: GetInfoResponse, reader: jspb.BinaryReader): GetInfoResponse;
}

export namespace GetInfoResponse {
  export type AsObject = {
    identityPubkey: string,
    alias: string,
    numPendingChannels: number,
    numActiveChannels: number,
    numPeers: number,
    blockHeight: number,
    blockHash: string,
    syncedToChain: boolean,
    testnet: boolean,
    chainsList: Array<string>,
  }
}

export class ConfirmationUpdate extends jspb.Message {
  getBlockSha(): Uint8Array | string;
  getBlockSha_asU8(): Uint8Array;
  getBlockSha_asB64(): string;
  setBlockSha(value: Uint8Array | string): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getNumConfsLeft(): number;
  setNumConfsLeft(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmationUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmationUpdate): ConfirmationUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmationUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmationUpdate;
  static deserializeBinaryFromReader(message: ConfirmationUpdate, reader: jspb.BinaryReader): ConfirmationUpdate;
}

export namespace ConfirmationUpdate {
  export type AsObject = {
    blockSha: Uint8Array | string,
    blockHeight: number,
    numConfsLeft: number,
  }
}

export class ChannelOpenUpdate extends jspb.Message {
  hasChannelPoint(): boolean;
  clearChannelPoint(): void;
  getChannelPoint(): ChannelPoint | undefined;
  setChannelPoint(value?: ChannelPoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelOpenUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelOpenUpdate): ChannelOpenUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelOpenUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelOpenUpdate;
  static deserializeBinaryFromReader(message: ChannelOpenUpdate, reader: jspb.BinaryReader): ChannelOpenUpdate;
}

export namespace ChannelOpenUpdate {
  export type AsObject = {
    channelPoint?: ChannelPoint.AsObject,
  }
}

export class ChannelCloseUpdate extends jspb.Message {
  getClosingTxid(): Uint8Array | string;
  getClosingTxid_asU8(): Uint8Array;
  getClosingTxid_asB64(): string;
  setClosingTxid(value: Uint8Array | string): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelCloseUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelCloseUpdate): ChannelCloseUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelCloseUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelCloseUpdate;
  static deserializeBinaryFromReader(message: ChannelCloseUpdate, reader: jspb.BinaryReader): ChannelCloseUpdate;
}

export namespace ChannelCloseUpdate {
  export type AsObject = {
    closingTxid: Uint8Array | string,
    success: boolean,
  }
}

export class CloseChannelRequest extends jspb.Message {
  hasChannelPoint(): boolean;
  clearChannelPoint(): void;
  getChannelPoint(): ChannelPoint | undefined;
  setChannelPoint(value?: ChannelPoint): void;

  getTimeLimit(): number;
  setTimeLimit(value: number): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseChannelRequest): CloseChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseChannelRequest;
  static deserializeBinaryFromReader(message: CloseChannelRequest, reader: jspb.BinaryReader): CloseChannelRequest;
}

export namespace CloseChannelRequest {
  export type AsObject = {
    channelPoint?: ChannelPoint.AsObject,
    timeLimit: number,
    force: boolean,
  }
}

export class CloseStatusUpdate extends jspb.Message {
  hasClosePending(): boolean;
  clearClosePending(): void;
  getClosePending(): PendingUpdate | undefined;
  setClosePending(value?: PendingUpdate): void;

  hasConfirmation(): boolean;
  clearConfirmation(): void;
  getConfirmation(): ConfirmationUpdate | undefined;
  setConfirmation(value?: ConfirmationUpdate): void;

  hasChanClose(): boolean;
  clearChanClose(): void;
  getChanClose(): ChannelCloseUpdate | undefined;
  setChanClose(value?: ChannelCloseUpdate): void;

  getUpdateCase(): CloseStatusUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseStatusUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: CloseStatusUpdate): CloseStatusUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseStatusUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseStatusUpdate;
  static deserializeBinaryFromReader(message: CloseStatusUpdate, reader: jspb.BinaryReader): CloseStatusUpdate;
}

export namespace CloseStatusUpdate {
  export type AsObject = {
    closePending?: PendingUpdate.AsObject,
    confirmation?: ConfirmationUpdate.AsObject,
    chanClose?: ChannelCloseUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    CLOSE_PENDING = 1,
    CONFIRMATION = 2,
    CHAN_CLOSE = 3,
  }
}

export class PendingUpdate extends jspb.Message {
  getTxid(): Uint8Array | string;
  getTxid_asU8(): Uint8Array;
  getTxid_asB64(): string;
  setTxid(value: Uint8Array | string): void;

  getOutputIndex(): number;
  setOutputIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: PendingUpdate): PendingUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingUpdate;
  static deserializeBinaryFromReader(message: PendingUpdate, reader: jspb.BinaryReader): PendingUpdate;
}

export namespace PendingUpdate {
  export type AsObject = {
    txid: Uint8Array | string,
    outputIndex: number,
  }
}

export class OpenChannelRequest extends jspb.Message {
  getTargetPeerId(): number;
  setTargetPeerId(value: number): void;

  getNodePubkey(): Uint8Array | string;
  getNodePubkey_asU8(): Uint8Array;
  getNodePubkey_asB64(): string;
  setNodePubkey(value: Uint8Array | string): void;

  getNodePubkeyString(): string;
  setNodePubkeyString(value: string): void;

  getLocalFundingAmount(): number;
  setLocalFundingAmount(value: number): void;

  getPushSat(): number;
  setPushSat(value: number): void;

  getNumConfs(): number;
  setNumConfs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenChannelRequest): OpenChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenChannelRequest;
  static deserializeBinaryFromReader(message: OpenChannelRequest, reader: jspb.BinaryReader): OpenChannelRequest;
}

export namespace OpenChannelRequest {
  export type AsObject = {
    targetPeerId: number,
    nodePubkey: Uint8Array | string,
    nodePubkeyString: string,
    localFundingAmount: number,
    pushSat: number,
    numConfs: number,
  }
}

export class OpenStatusUpdate extends jspb.Message {
  hasChanPending(): boolean;
  clearChanPending(): void;
  getChanPending(): PendingUpdate | undefined;
  setChanPending(value?: PendingUpdate): void;

  hasConfirmation(): boolean;
  clearConfirmation(): void;
  getConfirmation(): ConfirmationUpdate | undefined;
  setConfirmation(value?: ConfirmationUpdate): void;

  hasChanOpen(): boolean;
  clearChanOpen(): void;
  getChanOpen(): ChannelOpenUpdate | undefined;
  setChanOpen(value?: ChannelOpenUpdate): void;

  getUpdateCase(): OpenStatusUpdate.UpdateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenStatusUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: OpenStatusUpdate): OpenStatusUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenStatusUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenStatusUpdate;
  static deserializeBinaryFromReader(message: OpenStatusUpdate, reader: jspb.BinaryReader): OpenStatusUpdate;
}

export namespace OpenStatusUpdate {
  export type AsObject = {
    chanPending?: PendingUpdate.AsObject,
    confirmation?: ConfirmationUpdate.AsObject,
    chanOpen?: ChannelOpenUpdate.AsObject,
  }

  export enum UpdateCase {
    UPDATE_NOT_SET = 0,
    CHAN_PENDING = 1,
    CONFIRMATION = 2,
    CHAN_OPEN = 3,
  }
}

export class PendingChannelRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PendingChannelRequest): PendingChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingChannelRequest;
  static deserializeBinaryFromReader(message: PendingChannelRequest, reader: jspb.BinaryReader): PendingChannelRequest;
}

export namespace PendingChannelRequest {
  export type AsObject = {
  }
}

export class PendingChannelResponse extends jspb.Message {
  getTotalLimboBalance(): number;
  setTotalLimboBalance(value: number): void;

  clearPendingOpenChannelsList(): void;
  getPendingOpenChannelsList(): Array<PendingChannelResponse.PendingOpenChannel>;
  setPendingOpenChannelsList(value: Array<PendingChannelResponse.PendingOpenChannel>): void;
  addPendingOpenChannels(value?: PendingChannelResponse.PendingOpenChannel, index?: number): PendingChannelResponse.PendingOpenChannel;

  clearPendingClosingChannelsList(): void;
  getPendingClosingChannelsList(): Array<PendingChannelResponse.ClosedChannel>;
  setPendingClosingChannelsList(value: Array<PendingChannelResponse.ClosedChannel>): void;
  addPendingClosingChannels(value?: PendingChannelResponse.ClosedChannel, index?: number): PendingChannelResponse.ClosedChannel;

  clearPendingForceClosingChannelsList(): void;
  getPendingForceClosingChannelsList(): Array<PendingChannelResponse.ForceClosedChannel>;
  setPendingForceClosingChannelsList(value: Array<PendingChannelResponse.ForceClosedChannel>): void;
  addPendingForceClosingChannels(value?: PendingChannelResponse.ForceClosedChannel, index?: number): PendingChannelResponse.ForceClosedChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PendingChannelResponse): PendingChannelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingChannelResponse;
  static deserializeBinaryFromReader(message: PendingChannelResponse, reader: jspb.BinaryReader): PendingChannelResponse;
}

export namespace PendingChannelResponse {
  export type AsObject = {
    totalLimboBalance: number,
    pendingOpenChannelsList: Array<PendingChannelResponse.PendingOpenChannel.AsObject>,
    pendingClosingChannelsList: Array<PendingChannelResponse.ClosedChannel.AsObject>,
    pendingForceClosingChannelsList: Array<PendingChannelResponse.ForceClosedChannel.AsObject>,
  }

  export class PendingChannel extends jspb.Message {
    getRemoteNodePub(): string;
    setRemoteNodePub(value: string): void;

    getChannelPoint(): string;
    setChannelPoint(value: string): void;

    getCapacity(): number;
    setCapacity(value: number): void;

    getLocalBalance(): number;
    setLocalBalance(value: number): void;

    getRemoteBalance(): number;
    setRemoteBalance(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PendingChannel.AsObject;
    static toObject(includeInstance: boolean, msg: PendingChannel): PendingChannel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PendingChannel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PendingChannel;
    static deserializeBinaryFromReader(message: PendingChannel, reader: jspb.BinaryReader): PendingChannel;
  }

  export namespace PendingChannel {
    export type AsObject = {
      remoteNodePub: string,
      channelPoint: string,
      capacity: number,
      localBalance: number,
      remoteBalance: number,
    }
  }

  export class PendingOpenChannel extends jspb.Message {
    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): PendingChannelResponse.PendingChannel | undefined;
    setChannel(value?: PendingChannelResponse.PendingChannel): void;

    getConfirmationHeight(): number;
    setConfirmationHeight(value: number): void;

    getBlocksTillOpen(): number;
    setBlocksTillOpen(value: number): void;

    getCommitFee(): number;
    setCommitFee(value: number): void;

    getCommitWeight(): number;
    setCommitWeight(value: number): void;

    getFeePerKw(): number;
    setFeePerKw(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PendingOpenChannel.AsObject;
    static toObject(includeInstance: boolean, msg: PendingOpenChannel): PendingOpenChannel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PendingOpenChannel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PendingOpenChannel;
    static deserializeBinaryFromReader(message: PendingOpenChannel, reader: jspb.BinaryReader): PendingOpenChannel;
  }

  export namespace PendingOpenChannel {
    export type AsObject = {
      channel?: PendingChannelResponse.PendingChannel.AsObject,
      confirmationHeight: number,
      blocksTillOpen: number,
      commitFee: number,
      commitWeight: number,
      feePerKw: number,
    }
  }

  export class ClosedChannel extends jspb.Message {
    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): PendingChannelResponse.PendingChannel | undefined;
    setChannel(value?: PendingChannelResponse.PendingChannel): void;

    getClosingTxid(): string;
    setClosingTxid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClosedChannel.AsObject;
    static toObject(includeInstance: boolean, msg: ClosedChannel): ClosedChannel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClosedChannel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClosedChannel;
    static deserializeBinaryFromReader(message: ClosedChannel, reader: jspb.BinaryReader): ClosedChannel;
  }

  export namespace ClosedChannel {
    export type AsObject = {
      channel?: PendingChannelResponse.PendingChannel.AsObject,
      closingTxid: string,
    }
  }

  export class ForceClosedChannel extends jspb.Message {
    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): PendingChannelResponse.PendingChannel | undefined;
    setChannel(value?: PendingChannelResponse.PendingChannel): void;

    getClosingTxid(): string;
    setClosingTxid(value: string): void;

    getLimboBalance(): number;
    setLimboBalance(value: number): void;

    getMaturityHeight(): number;
    setMaturityHeight(value: number): void;

    getBlocksTilMaturity(): number;
    setBlocksTilMaturity(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ForceClosedChannel.AsObject;
    static toObject(includeInstance: boolean, msg: ForceClosedChannel): ForceClosedChannel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ForceClosedChannel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ForceClosedChannel;
    static deserializeBinaryFromReader(message: ForceClosedChannel, reader: jspb.BinaryReader): ForceClosedChannel;
  }

  export namespace ForceClosedChannel {
    export type AsObject = {
      channel?: PendingChannelResponse.PendingChannel.AsObject,
      closingTxid: string,
      limboBalance: number,
      maturityHeight: number,
      blocksTilMaturity: number,
    }
  }
}

export class WalletBalanceRequest extends jspb.Message {
  getWitnessOnly(): boolean;
  setWitnessOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WalletBalanceRequest): WalletBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WalletBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletBalanceRequest;
  static deserializeBinaryFromReader(message: WalletBalanceRequest, reader: jspb.BinaryReader): WalletBalanceRequest;
}

export namespace WalletBalanceRequest {
  export type AsObject = {
    witnessOnly: boolean,
  }
}

export class WalletBalanceResponse extends jspb.Message {
  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WalletBalanceResponse): WalletBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WalletBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletBalanceResponse;
  static deserializeBinaryFromReader(message: WalletBalanceResponse, reader: jspb.BinaryReader): WalletBalanceResponse;
}

export namespace WalletBalanceResponse {
  export type AsObject = {
    balance: number,
  }
}

export class ChannelBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelBalanceRequest): ChannelBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelBalanceRequest;
  static deserializeBinaryFromReader(message: ChannelBalanceRequest, reader: jspb.BinaryReader): ChannelBalanceRequest;
}

export namespace ChannelBalanceRequest {
  export type AsObject = {
  }
}

export class ChannelBalanceResponse extends jspb.Message {
  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelBalanceResponse): ChannelBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelBalanceResponse;
  static deserializeBinaryFromReader(message: ChannelBalanceResponse, reader: jspb.BinaryReader): ChannelBalanceResponse;
}

export namespace ChannelBalanceResponse {
  export type AsObject = {
    balance: number,
  }
}

export class QueryRoutesRequest extends jspb.Message {
  getPubKey(): string;
  setPubKey(value: string): void;

  getAmt(): number;
  setAmt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRoutesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRoutesRequest): QueryRoutesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRoutesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRoutesRequest;
  static deserializeBinaryFromReader(message: QueryRoutesRequest, reader: jspb.BinaryReader): QueryRoutesRequest;
}

export namespace QueryRoutesRequest {
  export type AsObject = {
    pubKey: string,
    amt: number,
  }
}

export class QueryRoutesResponse extends jspb.Message {
  clearRoutesList(): void;
  getRoutesList(): Array<Route>;
  setRoutesList(value: Array<Route>): void;
  addRoutes(value?: Route, index?: number): Route;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRoutesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRoutesResponse): QueryRoutesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRoutesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRoutesResponse;
  static deserializeBinaryFromReader(message: QueryRoutesResponse, reader: jspb.BinaryReader): QueryRoutesResponse;
}

export namespace QueryRoutesResponse {
  export type AsObject = {
    routesList: Array<Route.AsObject>,
  }
}

export class Hop extends jspb.Message {
  getChanId(): number;
  setChanId(value: number): void;

  getChanCapacity(): number;
  setChanCapacity(value: number): void;

  getAmtToForward(): number;
  setAmtToForward(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hop.AsObject;
  static toObject(includeInstance: boolean, msg: Hop): Hop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Hop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hop;
  static deserializeBinaryFromReader(message: Hop, reader: jspb.BinaryReader): Hop;
}

export namespace Hop {
  export type AsObject = {
    chanId: number,
    chanCapacity: number,
    amtToForward: number,
    fee: number,
  }
}

export class Route extends jspb.Message {
  getTotalTimeLock(): number;
  setTotalTimeLock(value: number): void;

  getTotalFees(): number;
  setTotalFees(value: number): void;

  getTotalAmt(): number;
  setTotalAmt(value: number): void;

  clearHopsList(): void;
  getHopsList(): Array<Hop>;
  setHopsList(value: Array<Hop>): void;
  addHops(value?: Hop, index?: number): Hop;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Route.AsObject;
  static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Route;
  static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
  export type AsObject = {
    totalTimeLock: number,
    totalFees: number,
    totalAmt: number,
    hopsList: Array<Hop.AsObject>,
  }
}

export class NodeInfoRequest extends jspb.Message {
  getPubKey(): string;
  setPubKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfoRequest): NodeInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfoRequest;
  static deserializeBinaryFromReader(message: NodeInfoRequest, reader: jspb.BinaryReader): NodeInfoRequest;
}

export namespace NodeInfoRequest {
  export type AsObject = {
    pubKey: string,
  }
}

export class NodeInfo extends jspb.Message {
  hasNode(): boolean;
  clearNode(): void;
  getNode(): LightningNode | undefined;
  setNode(value?: LightningNode): void;

  getNumChannels(): number;
  setNumChannels(value: number): void;

  getTotalCapacity(): number;
  setTotalCapacity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfo;
  static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
  export type AsObject = {
    node?: LightningNode.AsObject,
    numChannels: number,
    totalCapacity: number,
  }
}

export class LightningNode extends jspb.Message {
  getLastUpdate(): number;
  setLastUpdate(value: number): void;

  getPubKey(): string;
  setPubKey(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  clearAddressesList(): void;
  getAddressesList(): Array<NodeAddress>;
  setAddressesList(value: Array<NodeAddress>): void;
  addAddresses(value?: NodeAddress, index?: number): NodeAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightningNode.AsObject;
  static toObject(includeInstance: boolean, msg: LightningNode): LightningNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LightningNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LightningNode;
  static deserializeBinaryFromReader(message: LightningNode, reader: jspb.BinaryReader): LightningNode;
}

export namespace LightningNode {
  export type AsObject = {
    lastUpdate: number,
    pubKey: string,
    alias: string,
    addressesList: Array<NodeAddress.AsObject>,
  }
}

export class NodeAddress extends jspb.Message {
  getNetwork(): string;
  setNetwork(value: string): void;

  getAddr(): string;
  setAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAddress.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAddress): NodeAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAddress;
  static deserializeBinaryFromReader(message: NodeAddress, reader: jspb.BinaryReader): NodeAddress;
}

export namespace NodeAddress {
  export type AsObject = {
    network: string,
    addr: string,
  }
}

export class RoutingPolicy extends jspb.Message {
  getTimeLockDelta(): number;
  setTimeLockDelta(value: number): void;

  getMinHtlc(): number;
  setMinHtlc(value: number): void;

  getFeeBaseMsat(): number;
  setFeeBaseMsat(value: number): void;

  getFeeRateMilliMsat(): number;
  setFeeRateMilliMsat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoutingPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: RoutingPolicy): RoutingPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoutingPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoutingPolicy;
  static deserializeBinaryFromReader(message: RoutingPolicy, reader: jspb.BinaryReader): RoutingPolicy;
}

export namespace RoutingPolicy {
  export type AsObject = {
    timeLockDelta: number,
    minHtlc: number,
    feeBaseMsat: number,
    feeRateMilliMsat: number,
  }
}

export class ChannelEdge extends jspb.Message {
  getChannelId(): number;
  setChannelId(value: number): void;

  getChanPoint(): string;
  setChanPoint(value: string): void;

  getLastUpdate(): number;
  setLastUpdate(value: number): void;

  getNode1Pub(): string;
  setNode1Pub(value: string): void;

  getNode2Pub(): string;
  setNode2Pub(value: string): void;

  getCapacity(): number;
  setCapacity(value: number): void;

  hasNode1Policy(): boolean;
  clearNode1Policy(): void;
  getNode1Policy(): RoutingPolicy | undefined;
  setNode1Policy(value?: RoutingPolicy): void;

  hasNode2Policy(): boolean;
  clearNode2Policy(): void;
  getNode2Policy(): RoutingPolicy | undefined;
  setNode2Policy(value?: RoutingPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelEdge.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelEdge): ChannelEdge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelEdge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelEdge;
  static deserializeBinaryFromReader(message: ChannelEdge, reader: jspb.BinaryReader): ChannelEdge;
}

export namespace ChannelEdge {
  export type AsObject = {
    channelId: number,
    chanPoint: string,
    lastUpdate: number,
    node1Pub: string,
    node2Pub: string,
    capacity: number,
    node1Policy?: RoutingPolicy.AsObject,
    node2Policy?: RoutingPolicy.AsObject,
  }
}

export class ChannelGraphRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelGraphRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelGraphRequest): ChannelGraphRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelGraphRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelGraphRequest;
  static deserializeBinaryFromReader(message: ChannelGraphRequest, reader: jspb.BinaryReader): ChannelGraphRequest;
}

export namespace ChannelGraphRequest {
  export type AsObject = {
  }
}

export class ChannelGraph extends jspb.Message {
  clearNodesList(): void;
  getNodesList(): Array<LightningNode>;
  setNodesList(value: Array<LightningNode>): void;
  addNodes(value?: LightningNode, index?: number): LightningNode;

  clearEdgesList(): void;
  getEdgesList(): Array<ChannelEdge>;
  setEdgesList(value: Array<ChannelEdge>): void;
  addEdges(value?: ChannelEdge, index?: number): ChannelEdge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelGraph.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelGraph): ChannelGraph.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelGraph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelGraph;
  static deserializeBinaryFromReader(message: ChannelGraph, reader: jspb.BinaryReader): ChannelGraph;
}

export namespace ChannelGraph {
  export type AsObject = {
    nodesList: Array<LightningNode.AsObject>,
    edgesList: Array<ChannelEdge.AsObject>,
  }
}

export class ChanInfoRequest extends jspb.Message {
  getChanId(): number;
  setChanId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChanInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChanInfoRequest): ChanInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChanInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChanInfoRequest;
  static deserializeBinaryFromReader(message: ChanInfoRequest, reader: jspb.BinaryReader): ChanInfoRequest;
}

export namespace ChanInfoRequest {
  export type AsObject = {
    chanId: number,
  }
}

export class NetworkInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfoRequest): NetworkInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfoRequest;
  static deserializeBinaryFromReader(message: NetworkInfoRequest, reader: jspb.BinaryReader): NetworkInfoRequest;
}

export namespace NetworkInfoRequest {
  export type AsObject = {
    test: string,
  }
}

export class NetworkInfo extends jspb.Message {
  getGraphDiameter(): number;
  setGraphDiameter(value: number): void;

  getAvgOutDegree(): number;
  setAvgOutDegree(value: number): void;

  getMaxOutDegree(): number;
  setMaxOutDegree(value: number): void;

  getNumNodes(): number;
  setNumNodes(value: number): void;

  getNumChannels(): number;
  setNumChannels(value: number): void;

  getTotalNetworkCapacity(): number;
  setTotalNetworkCapacity(value: number): void;

  getAvgChannelSize(): number;
  setAvgChannelSize(value: number): void;

  getMinChannelSize(): number;
  setMinChannelSize(value: number): void;

  getMaxChannelSize(): number;
  setMaxChannelSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfo): NetworkInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfo;
  static deserializeBinaryFromReader(message: NetworkInfo, reader: jspb.BinaryReader): NetworkInfo;
}

export namespace NetworkInfo {
  export type AsObject = {
    graphDiameter: number,
    avgOutDegree: number,
    maxOutDegree: number,
    numNodes: number,
    numChannels: number,
    totalNetworkCapacity: number,
    avgChannelSize: number,
    minChannelSize: number,
    maxChannelSize: number,
  }
}

export class StopRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopRequest): StopRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopRequest;
  static deserializeBinaryFromReader(message: StopRequest, reader: jspb.BinaryReader): StopRequest;
}

export namespace StopRequest {
  export type AsObject = {
  }
}

export class StopResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopResponse): StopResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopResponse;
  static deserializeBinaryFromReader(message: StopResponse, reader: jspb.BinaryReader): StopResponse;
}

export namespace StopResponse {
  export type AsObject = {
  }
}

export class GraphTopologySubscription extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraphTopologySubscription.AsObject;
  static toObject(includeInstance: boolean, msg: GraphTopologySubscription): GraphTopologySubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GraphTopologySubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraphTopologySubscription;
  static deserializeBinaryFromReader(message: GraphTopologySubscription, reader: jspb.BinaryReader): GraphTopologySubscription;
}

export namespace GraphTopologySubscription {
  export type AsObject = {
  }
}

export class GraphTopologyUpdate extends jspb.Message {
  clearNodeUpdatesList(): void;
  getNodeUpdatesList(): Array<NodeUpdate>;
  setNodeUpdatesList(value: Array<NodeUpdate>): void;
  addNodeUpdates(value?: NodeUpdate, index?: number): NodeUpdate;

  clearChannelUpdatesList(): void;
  getChannelUpdatesList(): Array<ChannelEdgeUpdate>;
  setChannelUpdatesList(value: Array<ChannelEdgeUpdate>): void;
  addChannelUpdates(value?: ChannelEdgeUpdate, index?: number): ChannelEdgeUpdate;

  clearClosedChansList(): void;
  getClosedChansList(): Array<ClosedChannelUpdate>;
  setClosedChansList(value: Array<ClosedChannelUpdate>): void;
  addClosedChans(value?: ClosedChannelUpdate, index?: number): ClosedChannelUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraphTopologyUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: GraphTopologyUpdate): GraphTopologyUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GraphTopologyUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraphTopologyUpdate;
  static deserializeBinaryFromReader(message: GraphTopologyUpdate, reader: jspb.BinaryReader): GraphTopologyUpdate;
}

export namespace GraphTopologyUpdate {
  export type AsObject = {
    nodeUpdatesList: Array<NodeUpdate.AsObject>,
    channelUpdatesList: Array<ChannelEdgeUpdate.AsObject>,
    closedChansList: Array<ClosedChannelUpdate.AsObject>,
  }
}

export class NodeUpdate extends jspb.Message {
  clearAddressesList(): void;
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): void;
  addAddresses(value: string, index?: number): string;

  getIdentityKey(): string;
  setIdentityKey(value: string): void;

  getGlobalFeatures(): Uint8Array | string;
  getGlobalFeatures_asU8(): Uint8Array;
  getGlobalFeatures_asB64(): string;
  setGlobalFeatures(value: Uint8Array | string): void;

  getAlias(): string;
  setAlias(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: NodeUpdate): NodeUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeUpdate;
  static deserializeBinaryFromReader(message: NodeUpdate, reader: jspb.BinaryReader): NodeUpdate;
}

export namespace NodeUpdate {
  export type AsObject = {
    addressesList: Array<string>,
    identityKey: string,
    globalFeatures: Uint8Array | string,
    alias: string,
  }
}

export class ChannelEdgeUpdate extends jspb.Message {
  getChanId(): number;
  setChanId(value: number): void;

  hasChanPoint(): boolean;
  clearChanPoint(): void;
  getChanPoint(): ChannelPoint | undefined;
  setChanPoint(value?: ChannelPoint): void;

  getCapacity(): number;
  setCapacity(value: number): void;

  hasRoutingPolicy(): boolean;
  clearRoutingPolicy(): void;
  getRoutingPolicy(): RoutingPolicy | undefined;
  setRoutingPolicy(value?: RoutingPolicy): void;

  getAdvertisingNode(): string;
  setAdvertisingNode(value: string): void;

  getConnectingNode(): string;
  setConnectingNode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelEdgeUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelEdgeUpdate): ChannelEdgeUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelEdgeUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelEdgeUpdate;
  static deserializeBinaryFromReader(message: ChannelEdgeUpdate, reader: jspb.BinaryReader): ChannelEdgeUpdate;
}

export namespace ChannelEdgeUpdate {
  export type AsObject = {
    chanId: number,
    chanPoint?: ChannelPoint.AsObject,
    capacity: number,
    routingPolicy?: RoutingPolicy.AsObject,
    advertisingNode: string,
    connectingNode: string,
  }
}

export class ClosedChannelUpdate extends jspb.Message {
  getChanId(): number;
  setChanId(value: number): void;

  getCapacity(): number;
  setCapacity(value: number): void;

  getClosedHeight(): number;
  setClosedHeight(value: number): void;

  hasChanPoint(): boolean;
  clearChanPoint(): void;
  getChanPoint(): ChannelPoint | undefined;
  setChanPoint(value?: ChannelPoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClosedChannelUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ClosedChannelUpdate): ClosedChannelUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClosedChannelUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClosedChannelUpdate;
  static deserializeBinaryFromReader(message: ClosedChannelUpdate, reader: jspb.BinaryReader): ClosedChannelUpdate;
}

export namespace ClosedChannelUpdate {
  export type AsObject = {
    chanId: number,
    capacity: number,
    closedHeight: number,
    chanPoint?: ChannelPoint.AsObject,
  }
}

export class SetAliasRequest extends jspb.Message {
  getNewAlias(): string;
  setNewAlias(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAliasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAliasRequest): SetAliasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAliasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAliasRequest;
  static deserializeBinaryFromReader(message: SetAliasRequest, reader: jspb.BinaryReader): SetAliasRequest;
}

export namespace SetAliasRequest {
  export type AsObject = {
    newAlias: string,
  }
}

export class SetAliasResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAliasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetAliasResponse): SetAliasResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAliasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAliasResponse;
  static deserializeBinaryFromReader(message: SetAliasResponse, reader: jspb.BinaryReader): SetAliasResponse;
}

export namespace SetAliasResponse {
  export type AsObject = {
  }
}

export class Invoice extends jspb.Message {
  getMemo(): string;
  setMemo(value: string): void;

  getReceipt(): Uint8Array | string;
  getReceipt_asU8(): Uint8Array;
  getReceipt_asB64(): string;
  setReceipt(value: Uint8Array | string): void;

  getRPreimage(): Uint8Array | string;
  getRPreimage_asU8(): Uint8Array;
  getRPreimage_asB64(): string;
  setRPreimage(value: Uint8Array | string): void;

  getRHash(): Uint8Array | string;
  getRHash_asU8(): Uint8Array;
  getRHash_asB64(): string;
  setRHash(value: Uint8Array | string): void;

  getValue(): number;
  setValue(value: number): void;

  getSettled(): boolean;
  setSettled(value: boolean): void;

  getCreationDate(): number;
  setCreationDate(value: number): void;

  getSettleDate(): number;
  setSettleDate(value: number): void;

  getPaymentRequest(): string;
  setPaymentRequest(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    memo: string,
    receipt: Uint8Array | string,
    rPreimage: Uint8Array | string,
    rHash: Uint8Array | string,
    value: number,
    settled: boolean,
    creationDate: number,
    settleDate: number,
    paymentRequest: string,
  }
}

export class AddInvoiceResponse extends jspb.Message {
  getRHash(): Uint8Array | string;
  getRHash_asU8(): Uint8Array;
  getRHash_asB64(): string;
  setRHash(value: Uint8Array | string): void;

  getPaymentRequest(): string;
  setPaymentRequest(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddInvoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddInvoiceResponse): AddInvoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddInvoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddInvoiceResponse;
  static deserializeBinaryFromReader(message: AddInvoiceResponse, reader: jspb.BinaryReader): AddInvoiceResponse;
}

export namespace AddInvoiceResponse {
  export type AsObject = {
    rHash: Uint8Array | string,
    paymentRequest: string,
  }
}

export class PaymentHash extends jspb.Message {
  getRHashStr(): string;
  setRHashStr(value: string): void;

  getRHash(): Uint8Array | string;
  getRHash_asU8(): Uint8Array;
  getRHash_asB64(): string;
  setRHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentHash.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentHash): PaymentHash.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentHash, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentHash;
  static deserializeBinaryFromReader(message: PaymentHash, reader: jspb.BinaryReader): PaymentHash;
}

export namespace PaymentHash {
  export type AsObject = {
    rHashStr: string,
    rHash: Uint8Array | string,
  }
}

export class ListInvoiceRequest extends jspb.Message {
  getPendingOnly(): boolean;
  setPendingOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvoiceRequest): ListInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvoiceRequest;
  static deserializeBinaryFromReader(message: ListInvoiceRequest, reader: jspb.BinaryReader): ListInvoiceRequest;
}

export namespace ListInvoiceRequest {
  export type AsObject = {
    pendingOnly: boolean,
  }
}

export class ListInvoiceResponse extends jspb.Message {
  clearInvoicesList(): void;
  getInvoicesList(): Array<Invoice>;
  setInvoicesList(value: Array<Invoice>): void;
  addInvoices(value?: Invoice, index?: number): Invoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvoiceResponse): ListInvoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInvoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvoiceResponse;
  static deserializeBinaryFromReader(message: ListInvoiceResponse, reader: jspb.BinaryReader): ListInvoiceResponse;
}

export namespace ListInvoiceResponse {
  export type AsObject = {
    invoicesList: Array<Invoice.AsObject>,
  }
}

export class InvoiceSubscription extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceSubscription): InvoiceSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceSubscription;
  static deserializeBinaryFromReader(message: InvoiceSubscription, reader: jspb.BinaryReader): InvoiceSubscription;
}

export namespace InvoiceSubscription {
  export type AsObject = {
  }
}

export class Payment extends jspb.Message {
  getPaymentHash(): string;
  setPaymentHash(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getCreationDate(): number;
  setCreationDate(value: number): void;

  clearPathList(): void;
  getPathList(): Array<string>;
  setPathList(value: Array<string>): void;
  addPath(value: string, index?: number): string;

  getFee(): number;
  setFee(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payment.AsObject;
  static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payment;
  static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
  export type AsObject = {
    paymentHash: string,
    value: number,
    creationDate: number,
    pathList: Array<string>,
    fee: number,
  }
}

export class ListPaymentsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPaymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPaymentsRequest): ListPaymentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPaymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPaymentsRequest;
  static deserializeBinaryFromReader(message: ListPaymentsRequest, reader: jspb.BinaryReader): ListPaymentsRequest;
}

export namespace ListPaymentsRequest {
  export type AsObject = {
  }
}

export class ListPaymentsResponse extends jspb.Message {
  clearPaymentsList(): void;
  getPaymentsList(): Array<Payment>;
  setPaymentsList(value: Array<Payment>): void;
  addPayments(value?: Payment, index?: number): Payment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPaymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPaymentsResponse): ListPaymentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPaymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPaymentsResponse;
  static deserializeBinaryFromReader(message: ListPaymentsResponse, reader: jspb.BinaryReader): ListPaymentsResponse;
}

export namespace ListPaymentsResponse {
  export type AsObject = {
    paymentsList: Array<Payment.AsObject>,
  }
}

export class DeleteAllPaymentsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllPaymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllPaymentsRequest): DeleteAllPaymentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAllPaymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllPaymentsRequest;
  static deserializeBinaryFromReader(message: DeleteAllPaymentsRequest, reader: jspb.BinaryReader): DeleteAllPaymentsRequest;
}

export namespace DeleteAllPaymentsRequest {
  export type AsObject = {
  }
}

export class DeleteAllPaymentsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllPaymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllPaymentsResponse): DeleteAllPaymentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAllPaymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllPaymentsResponse;
  static deserializeBinaryFromReader(message: DeleteAllPaymentsResponse, reader: jspb.BinaryReader): DeleteAllPaymentsResponse;
}

export namespace DeleteAllPaymentsResponse {
  export type AsObject = {
  }
}

export class DebugLevelRequest extends jspb.Message {
  getShow(): boolean;
  setShow(value: boolean): void;

  getLevelSpec(): string;
  setLevelSpec(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebugLevelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DebugLevelRequest): DebugLevelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DebugLevelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebugLevelRequest;
  static deserializeBinaryFromReader(message: DebugLevelRequest, reader: jspb.BinaryReader): DebugLevelRequest;
}

export namespace DebugLevelRequest {
  export type AsObject = {
    show: boolean,
    levelSpec: string,
  }
}

export class DebugLevelResponse extends jspb.Message {
  getSubSystems(): string;
  setSubSystems(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebugLevelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DebugLevelResponse): DebugLevelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DebugLevelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebugLevelResponse;
  static deserializeBinaryFromReader(message: DebugLevelResponse, reader: jspb.BinaryReader): DebugLevelResponse;
}

export namespace DebugLevelResponse {
  export type AsObject = {
    subSystems: string,
  }
}

export class PayReqString extends jspb.Message {
  getPayReq(): string;
  setPayReq(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayReqString.AsObject;
  static toObject(includeInstance: boolean, msg: PayReqString): PayReqString.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PayReqString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayReqString;
  static deserializeBinaryFromReader(message: PayReqString, reader: jspb.BinaryReader): PayReqString;
}

export namespace PayReqString {
  export type AsObject = {
    payReq: string,
  }
}

export class PayReq extends jspb.Message {
  getDestination(): string;
  setDestination(value: string): void;

  getPaymentHash(): string;
  setPaymentHash(value: string): void;

  getNumSatoshis(): number;
  setNumSatoshis(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayReq.AsObject;
  static toObject(includeInstance: boolean, msg: PayReq): PayReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PayReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayReq;
  static deserializeBinaryFromReader(message: PayReq, reader: jspb.BinaryReader): PayReq;
}

export namespace PayReq {
  export type AsObject = {
    destination: string,
    paymentHash: string,
    numSatoshis: number,
  }
}

