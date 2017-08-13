/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.lnrpc.ActiveChannel', null, global);
goog.exportSymbol('proto.lnrpc.AddInvoiceResponse', null, global);
goog.exportSymbol('proto.lnrpc.ChanInfoRequest', null, global);
goog.exportSymbol('proto.lnrpc.ChannelBalanceRequest', null, global);
goog.exportSymbol('proto.lnrpc.ChannelBalanceResponse', null, global);
goog.exportSymbol('proto.lnrpc.ChannelCloseUpdate', null, global);
goog.exportSymbol('proto.lnrpc.ChannelEdge', null, global);
goog.exportSymbol('proto.lnrpc.ChannelEdgeUpdate', null, global);
goog.exportSymbol('proto.lnrpc.ChannelGraph', null, global);
goog.exportSymbol('proto.lnrpc.ChannelGraphRequest', null, global);
goog.exportSymbol('proto.lnrpc.ChannelOpenUpdate', null, global);
goog.exportSymbol('proto.lnrpc.ChannelPoint', null, global);
goog.exportSymbol('proto.lnrpc.CloseChannelRequest', null, global);
goog.exportSymbol('proto.lnrpc.CloseStatusUpdate', null, global);
goog.exportSymbol('proto.lnrpc.ClosedChannelUpdate', null, global);
goog.exportSymbol('proto.lnrpc.ConfirmationUpdate', null, global);
goog.exportSymbol('proto.lnrpc.ConnectPeerRequest', null, global);
goog.exportSymbol('proto.lnrpc.ConnectPeerResponse', null, global);
goog.exportSymbol('proto.lnrpc.DebugLevelRequest', null, global);
goog.exportSymbol('proto.lnrpc.DebugLevelResponse', null, global);
goog.exportSymbol('proto.lnrpc.DeleteAllPaymentsRequest', null, global);
goog.exportSymbol('proto.lnrpc.DeleteAllPaymentsResponse', null, global);
goog.exportSymbol('proto.lnrpc.DisconnectPeerRequest', null, global);
goog.exportSymbol('proto.lnrpc.DisconnectPeerResponse', null, global);
goog.exportSymbol('proto.lnrpc.GetInfoRequest', null, global);
goog.exportSymbol('proto.lnrpc.GetInfoResponse', null, global);
goog.exportSymbol('proto.lnrpc.GetTransactionsRequest', null, global);
goog.exportSymbol('proto.lnrpc.GraphTopologySubscription', null, global);
goog.exportSymbol('proto.lnrpc.GraphTopologyUpdate', null, global);
goog.exportSymbol('proto.lnrpc.HTLC', null, global);
goog.exportSymbol('proto.lnrpc.Hop', null, global);
goog.exportSymbol('proto.lnrpc.Invoice', null, global);
goog.exportSymbol('proto.lnrpc.InvoiceSubscription', null, global);
goog.exportSymbol('proto.lnrpc.LightningAddress', null, global);
goog.exportSymbol('proto.lnrpc.LightningNode', null, global);
goog.exportSymbol('proto.lnrpc.ListChannelsRequest', null, global);
goog.exportSymbol('proto.lnrpc.ListChannelsResponse', null, global);
goog.exportSymbol('proto.lnrpc.ListInvoiceRequest', null, global);
goog.exportSymbol('proto.lnrpc.ListInvoiceResponse', null, global);
goog.exportSymbol('proto.lnrpc.ListPaymentsRequest', null, global);
goog.exportSymbol('proto.lnrpc.ListPaymentsResponse', null, global);
goog.exportSymbol('proto.lnrpc.ListPeersRequest', null, global);
goog.exportSymbol('proto.lnrpc.ListPeersResponse', null, global);
goog.exportSymbol('proto.lnrpc.NetworkInfo', null, global);
goog.exportSymbol('proto.lnrpc.NetworkInfoRequest', null, global);
goog.exportSymbol('proto.lnrpc.NewAddressRequest', null, global);
goog.exportSymbol('proto.lnrpc.NewAddressRequest.AddressType', null, global);
goog.exportSymbol('proto.lnrpc.NewAddressResponse', null, global);
goog.exportSymbol('proto.lnrpc.NewWitnessAddressRequest', null, global);
goog.exportSymbol('proto.lnrpc.NodeAddress', null, global);
goog.exportSymbol('proto.lnrpc.NodeInfo', null, global);
goog.exportSymbol('proto.lnrpc.NodeInfoRequest', null, global);
goog.exportSymbol('proto.lnrpc.NodeUpdate', null, global);
goog.exportSymbol('proto.lnrpc.OpenChannelRequest', null, global);
goog.exportSymbol('proto.lnrpc.OpenStatusUpdate', null, global);
goog.exportSymbol('proto.lnrpc.PayReq', null, global);
goog.exportSymbol('proto.lnrpc.PayReqString', null, global);
goog.exportSymbol('proto.lnrpc.Payment', null, global);
goog.exportSymbol('proto.lnrpc.PaymentHash', null, global);
goog.exportSymbol('proto.lnrpc.Peer', null, global);
goog.exportSymbol('proto.lnrpc.PendingChannelRequest', null, global);
goog.exportSymbol('proto.lnrpc.PendingChannelResponse', null, global);
goog.exportSymbol('proto.lnrpc.PendingChannelResponse.ClosedChannel', null, global);
goog.exportSymbol('proto.lnrpc.PendingChannelResponse.ForceClosedChannel', null, global);
goog.exportSymbol('proto.lnrpc.PendingChannelResponse.PendingChannel', null, global);
goog.exportSymbol('proto.lnrpc.PendingChannelResponse.PendingOpenChannel', null, global);
goog.exportSymbol('proto.lnrpc.PendingUpdate', null, global);
goog.exportSymbol('proto.lnrpc.QueryRoutesRequest', null, global);
goog.exportSymbol('proto.lnrpc.QueryRoutesResponse', null, global);
goog.exportSymbol('proto.lnrpc.Route', null, global);
goog.exportSymbol('proto.lnrpc.RoutingPolicy', null, global);
goog.exportSymbol('proto.lnrpc.SendCoinsRequest', null, global);
goog.exportSymbol('proto.lnrpc.SendCoinsResponse', null, global);
goog.exportSymbol('proto.lnrpc.SendManyRequest', null, global);
goog.exportSymbol('proto.lnrpc.SendManyResponse', null, global);
goog.exportSymbol('proto.lnrpc.SendRequest', null, global);
goog.exportSymbol('proto.lnrpc.SendResponse', null, global);
goog.exportSymbol('proto.lnrpc.SetAliasRequest', null, global);
goog.exportSymbol('proto.lnrpc.SetAliasResponse', null, global);
goog.exportSymbol('proto.lnrpc.SignMessageRequest', null, global);
goog.exportSymbol('proto.lnrpc.SignMessageResponse', null, global);
goog.exportSymbol('proto.lnrpc.StopRequest', null, global);
goog.exportSymbol('proto.lnrpc.StopResponse', null, global);
goog.exportSymbol('proto.lnrpc.Transaction', null, global);
goog.exportSymbol('proto.lnrpc.TransactionDetails', null, global);
goog.exportSymbol('proto.lnrpc.VerifyMessageRequest', null, global);
goog.exportSymbol('proto.lnrpc.VerifyMessageResponse', null, global);
goog.exportSymbol('proto.lnrpc.WalletBalanceRequest', null, global);
goog.exportSymbol('proto.lnrpc.WalletBalanceResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.Transaction.displayName = 'proto.lnrpc.Transaction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.Transaction} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    txHash: msg.getTxHash(),
    amount: msg.getAmount(),
    numConfirmations: msg.getNumConfirmations(),
    blockHash: msg.getBlockHash(),
    blockHeight: msg.getBlockHeight(),
    timeStamp: msg.getTimeStamp(),
    totalFees: msg.getTotalFees()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.Transaction}
 */
proto.lnrpc.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.Transaction;
  return proto.lnrpc.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.Transaction}
 */
proto.lnrpc.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumConfirmations(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockHash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBlockHeight(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeStamp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalFees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Transaction.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Transaction.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTxHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getNumConfirmations();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getBlockHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getBlockHeight();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = this.getTimeStamp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = this.getTotalFees();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.Transaction} The clone.
 */
proto.lnrpc.Transaction.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.Transaction} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string tx_hash = 1;
 * @return {string}
 */
proto.lnrpc.Transaction.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.Transaction.prototype.setTxHash = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.lnrpc.Transaction.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.Transaction.prototype.setAmount = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 num_confirmations = 3;
 * @return {number}
 */
proto.lnrpc.Transaction.prototype.getNumConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.Transaction.prototype.setNumConfirmations = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string block_hash = 4;
 * @return {string}
 */
proto.lnrpc.Transaction.prototype.getBlockHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.lnrpc.Transaction.prototype.setBlockHash = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 block_height = 5;
 * @return {number}
 */
proto.lnrpc.Transaction.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.Transaction.prototype.setBlockHeight = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 time_stamp = 6;
 * @return {number}
 */
proto.lnrpc.Transaction.prototype.getTimeStamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.lnrpc.Transaction.prototype.setTimeStamp = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int64 total_fees = 7;
 * @return {number}
 */
proto.lnrpc.Transaction.prototype.getTotalFees = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.lnrpc.Transaction.prototype.setTotalFees = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.GetTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.GetTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.GetTransactionsRequest.displayName = 'proto.lnrpc.GetTransactionsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.GetTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.GetTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.GetTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.GetTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.GetTransactionsRequest}
 */
proto.lnrpc.GetTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.GetTransactionsRequest;
  return proto.lnrpc.GetTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.GetTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.GetTransactionsRequest}
 */
proto.lnrpc.GetTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.GetTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GetTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.GetTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GetTransactionsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.GetTransactionsRequest} The clone.
 */
proto.lnrpc.GetTransactionsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.GetTransactionsRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.TransactionDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.TransactionDetails.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.TransactionDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.TransactionDetails.displayName = 'proto.lnrpc.TransactionDetails';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.TransactionDetails.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.TransactionDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.TransactionDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.TransactionDetails} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.TransactionDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.lnrpc.Transaction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.TransactionDetails}
 */
proto.lnrpc.TransactionDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.TransactionDetails;
  return proto.lnrpc.TransactionDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.TransactionDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.TransactionDetails}
 */
proto.lnrpc.TransactionDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.Transaction;
      reader.readMessage(value,proto.lnrpc.Transaction.deserializeBinaryFromReader);
      msg.getTransactionsList().push(value);
      msg.setTransactionsList(msg.getTransactionsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.TransactionDetails} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.TransactionDetails.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.TransactionDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.TransactionDetails.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lnrpc.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.TransactionDetails} The clone.
 */
proto.lnrpc.TransactionDetails.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.TransactionDetails} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Transaction transactions = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.Transaction>}
 */
proto.lnrpc.TransactionDetails.prototype.getTransactionsList = function() {
  return /** @type{!Array.<!proto.lnrpc.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.Transaction, 1));
};


/** @param {Array.<!proto.lnrpc.Transaction>} value  */
proto.lnrpc.TransactionDetails.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.lnrpc.TransactionDetails.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SendRequest.displayName = 'proto.lnrpc.SendRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SendRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dest: msg.getDest_asB64(),
    destString: msg.getDestString(),
    amt: msg.getAmt(),
    paymentHash: msg.getPaymentHash_asB64(),
    paymentHashString: msg.getPaymentHashString(),
    paymentRequest: msg.getPaymentRequest()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SendRequest}
 */
proto.lnrpc.SendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SendRequest;
  return proto.lnrpc.SendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SendRequest}
 */
proto.lnrpc.SendRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestString(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmt(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPaymentHash(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentHashString(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SendRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getDestString();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getAmt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getPaymentHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = this.getPaymentHashString();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getPaymentRequest();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SendRequest} The clone.
 */
proto.lnrpc.SendRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SendRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dest = 1;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.SendRequest.prototype.getDest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dest = 1;
 * This is a type-conversion wrapper around `getDest()`
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getDest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDest()));
};


/**
 * optional bytes dest = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDest()`
 * @return {!Uint8Array}
 */
proto.lnrpc.SendRequest.prototype.getDest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDest()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.SendRequest.prototype.setDest = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string dest_string = 2;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getDestString = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.SendRequest.prototype.setDestString = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 amt = 3;
 * @return {number}
 */
proto.lnrpc.SendRequest.prototype.getAmt = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.SendRequest.prototype.setAmt = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bytes payment_hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.SendRequest.prototype.getPaymentHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/**
 * optional bytes payment_hash = 4;
 * This is a type-conversion wrapper around `getPaymentHash()`
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getPaymentHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPaymentHash()));
};


/**
 * optional bytes payment_hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentHash()`
 * @return {!Uint8Array}
 */
proto.lnrpc.SendRequest.prototype.getPaymentHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPaymentHash()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.SendRequest.prototype.setPaymentHash = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string payment_hash_string = 5;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getPaymentHashString = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.lnrpc.SendRequest.prototype.setPaymentHashString = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string payment_request = 6;
 * @return {string}
 */
proto.lnrpc.SendRequest.prototype.getPaymentRequest = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.lnrpc.SendRequest.prototype.setPaymentRequest = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SendResponse.displayName = 'proto.lnrpc.SendResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SendResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SendResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentError: msg.getPaymentError(),
    paymentPreimage: msg.getPaymentPreimage_asB64(),
    paymentRoute: (f = msg.getPaymentRoute()) && proto.lnrpc.Route.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SendResponse}
 */
proto.lnrpc.SendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SendResponse;
  return proto.lnrpc.SendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SendResponse}
 */
proto.lnrpc.SendResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentError(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPaymentPreimage(value);
      break;
    case 3:
      var value = new proto.lnrpc.Route;
      reader.readMessage(value,proto.lnrpc.Route.deserializeBinaryFromReader);
      msg.setPaymentRoute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SendResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPaymentError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPaymentPreimage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = this.getPaymentRoute();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lnrpc.Route.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SendResponse} The clone.
 */
proto.lnrpc.SendResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SendResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string payment_error = 1;
 * @return {string}
 */
proto.lnrpc.SendResponse.prototype.getPaymentError = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.SendResponse.prototype.setPaymentError = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes payment_preimage = 2;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.SendResponse.prototype.getPaymentPreimage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes payment_preimage = 2;
 * This is a type-conversion wrapper around `getPaymentPreimage()`
 * @return {string}
 */
proto.lnrpc.SendResponse.prototype.getPaymentPreimage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPaymentPreimage()));
};


/**
 * optional bytes payment_preimage = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPaymentPreimage()`
 * @return {!Uint8Array}
 */
proto.lnrpc.SendResponse.prototype.getPaymentPreimage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPaymentPreimage()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.SendResponse.prototype.setPaymentPreimage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Route payment_route = 3;
 * @return {proto.lnrpc.Route}
 */
proto.lnrpc.SendResponse.prototype.getPaymentRoute = function() {
  return /** @type{proto.lnrpc.Route} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.Route, 3));
};


/** @param {proto.lnrpc.Route|undefined} value  */
proto.lnrpc.SendResponse.prototype.setPaymentRoute = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.lnrpc.SendResponse.prototype.clearPaymentRoute = function() {
  this.setPaymentRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.SendResponse.prototype.hasPaymentRoute = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChannelPoint.displayName = 'proto.lnrpc.ChannelPoint';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelPoint} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChannelPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    fundingTxid: msg.getFundingTxid_asB64(),
    fundingTxidStr: msg.getFundingTxidStr(),
    outputIndex: msg.getOutputIndex()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.ChannelPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelPoint;
  return proto.lnrpc.ChannelPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.ChannelPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFundingTxid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFundingTxidStr(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutputIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelPoint} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelPoint.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelPoint.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFundingTxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getFundingTxidStr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getOutputIndex();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChannelPoint} The clone.
 */
proto.lnrpc.ChannelPoint.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChannelPoint} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes funding_txid = 1;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.ChannelPoint.prototype.getFundingTxid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes funding_txid = 1;
 * This is a type-conversion wrapper around `getFundingTxid()`
 * @return {string}
 */
proto.lnrpc.ChannelPoint.prototype.getFundingTxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFundingTxid()));
};


/**
 * optional bytes funding_txid = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFundingTxid()`
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelPoint.prototype.getFundingTxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFundingTxid()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.ChannelPoint.prototype.setFundingTxid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string funding_txid_str = 2;
 * @return {string}
 */
proto.lnrpc.ChannelPoint.prototype.getFundingTxidStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.ChannelPoint.prototype.setFundingTxidStr = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 output_index = 3;
 * @return {number}
 */
proto.lnrpc.ChannelPoint.prototype.getOutputIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.ChannelPoint.prototype.setOutputIndex = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.LightningAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.LightningAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.LightningAddress.displayName = 'proto.lnrpc.LightningAddress';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.LightningAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.LightningAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.LightningAddress} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.LightningAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubkey: msg.getPubkey(),
    host: msg.getHost()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.LightningAddress}
 */
proto.lnrpc.LightningAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.LightningAddress;
  return proto.lnrpc.LightningAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.LightningAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.LightningAddress}
 */
proto.lnrpc.LightningAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubkey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.LightningAddress} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.LightningAddress.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.LightningAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.LightningAddress.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPubkey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.LightningAddress} The clone.
 */
proto.lnrpc.LightningAddress.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.LightningAddress} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string pubkey = 1;
 * @return {string}
 */
proto.lnrpc.LightningAddress.prototype.getPubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.LightningAddress.prototype.setPubkey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.lnrpc.LightningAddress.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.LightningAddress.prototype.setHost = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SendManyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SendManyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SendManyRequest.displayName = 'proto.lnrpc.SendManyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SendManyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SendManyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SendManyRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SendManyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addrtoamountMap: (f = msg.getAddrtoamountMap(true)) ? f.toArray() : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SendManyRequest}
 */
proto.lnrpc.SendManyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SendManyRequest;
  return proto.lnrpc.SendManyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SendManyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SendManyRequest}
 */
proto.lnrpc.SendManyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getAddrtoamountMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SendManyRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendManyRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SendManyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendManyRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddrtoamountMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SendManyRequest} The clone.
 */
proto.lnrpc.SendManyRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SendManyRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * map<string, int64> AddrToAmount = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.lnrpc.SendManyRequest.prototype.getAddrtoamountMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SendManyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SendManyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SendManyResponse.displayName = 'proto.lnrpc.SendManyResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SendManyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SendManyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SendManyResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SendManyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: msg.getTxid()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SendManyResponse}
 */
proto.lnrpc.SendManyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SendManyResponse;
  return proto.lnrpc.SendManyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SendManyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SendManyResponse}
 */
proto.lnrpc.SendManyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SendManyResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendManyResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SendManyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendManyResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SendManyResponse} The clone.
 */
proto.lnrpc.SendManyResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SendManyResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string txid = 1;
 * @return {string}
 */
proto.lnrpc.SendManyResponse.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.SendManyResponse.prototype.setTxid = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SendCoinsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SendCoinsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SendCoinsRequest.displayName = 'proto.lnrpc.SendCoinsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SendCoinsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SendCoinsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SendCoinsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SendCoinsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: msg.getAddr(),
    amount: msg.getAmount()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SendCoinsRequest}
 */
proto.lnrpc.SendCoinsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SendCoinsRequest;
  return proto.lnrpc.SendCoinsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SendCoinsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SendCoinsRequest}
 */
proto.lnrpc.SendCoinsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SendCoinsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendCoinsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SendCoinsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendCoinsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SendCoinsRequest} The clone.
 */
proto.lnrpc.SendCoinsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SendCoinsRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string addr = 1;
 * @return {string}
 */
proto.lnrpc.SendCoinsRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.SendCoinsRequest.prototype.setAddr = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.lnrpc.SendCoinsRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.SendCoinsRequest.prototype.setAmount = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SendCoinsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SendCoinsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SendCoinsResponse.displayName = 'proto.lnrpc.SendCoinsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SendCoinsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SendCoinsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SendCoinsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SendCoinsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: msg.getTxid()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SendCoinsResponse}
 */
proto.lnrpc.SendCoinsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SendCoinsResponse;
  return proto.lnrpc.SendCoinsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SendCoinsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SendCoinsResponse}
 */
proto.lnrpc.SendCoinsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SendCoinsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendCoinsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SendCoinsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SendCoinsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SendCoinsResponse} The clone.
 */
proto.lnrpc.SendCoinsResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SendCoinsResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string txid = 1;
 * @return {string}
 */
proto.lnrpc.SendCoinsResponse.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.SendCoinsResponse.prototype.setTxid = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.NewAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.NewAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.NewAddressRequest.displayName = 'proto.lnrpc.NewAddressRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.NewAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.NewAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.NewAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.NewAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: msg.getType()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.NewAddressRequest}
 */
proto.lnrpc.NewAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.NewAddressRequest;
  return proto.lnrpc.NewAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.NewAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.NewAddressRequest}
 */
proto.lnrpc.NewAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.lnrpc.NewAddressRequest.AddressType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.NewAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NewAddressRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.NewAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NewAddressRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.NewAddressRequest} The clone.
 */
proto.lnrpc.NewAddressRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.NewAddressRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional AddressType type = 1;
 * @return {!proto.lnrpc.NewAddressRequest.AddressType}
 */
proto.lnrpc.NewAddressRequest.prototype.getType = function() {
  return /** @type {!proto.lnrpc.NewAddressRequest.AddressType} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {!proto.lnrpc.NewAddressRequest.AddressType} value  */
proto.lnrpc.NewAddressRequest.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.lnrpc.NewAddressRequest.AddressType = {
  WITNESS_PUBKEY_HASH: 0,
  NESTED_PUBKEY_HASH: 1,
  PUBKEY_HASH: 2
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.NewWitnessAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.NewWitnessAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.NewWitnessAddressRequest.displayName = 'proto.lnrpc.NewWitnessAddressRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.NewWitnessAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.NewWitnessAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.NewWitnessAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.NewWitnessAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.NewWitnessAddressRequest}
 */
proto.lnrpc.NewWitnessAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.NewWitnessAddressRequest;
  return proto.lnrpc.NewWitnessAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.NewWitnessAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.NewWitnessAddressRequest}
 */
proto.lnrpc.NewWitnessAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.NewWitnessAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NewWitnessAddressRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.NewWitnessAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NewWitnessAddressRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.NewWitnessAddressRequest} The clone.
 */
proto.lnrpc.NewWitnessAddressRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.NewWitnessAddressRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.NewAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.NewAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.NewAddressResponse.displayName = 'proto.lnrpc.NewAddressResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.NewAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.NewAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.NewAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.NewAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.NewAddressResponse}
 */
proto.lnrpc.NewAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.NewAddressResponse;
  return proto.lnrpc.NewAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.NewAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.NewAddressResponse}
 */
proto.lnrpc.NewAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.NewAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NewAddressResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.NewAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NewAddressResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.NewAddressResponse} The clone.
 */
proto.lnrpc.NewAddressResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.NewAddressResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.lnrpc.NewAddressResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.NewAddressResponse.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SignMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SignMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SignMessageRequest.displayName = 'proto.lnrpc.SignMessageRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SignMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SignMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SignMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SignMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: msg.getMsg_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SignMessageRequest}
 */
proto.lnrpc.SignMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SignMessageRequest;
  return proto.lnrpc.SignMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SignMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SignMessageRequest}
 */
proto.lnrpc.SignMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SignMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SignMessageRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SignMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SignMessageRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMsg_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SignMessageRequest} The clone.
 */
proto.lnrpc.SignMessageRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SignMessageRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes msg = 1;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.SignMessageRequest.prototype.getMsg = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes msg = 1;
 * This is a type-conversion wrapper around `getMsg()`
 * @return {string}
 */
proto.lnrpc.SignMessageRequest.prototype.getMsg_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMsg()));
};


/**
 * optional bytes msg = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMsg()`
 * @return {!Uint8Array}
 */
proto.lnrpc.SignMessageRequest.prototype.getMsg_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMsg()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.SignMessageRequest.prototype.setMsg = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SignMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SignMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SignMessageResponse.displayName = 'proto.lnrpc.SignMessageResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SignMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SignMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SignMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SignMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: msg.getSignature()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SignMessageResponse}
 */
proto.lnrpc.SignMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SignMessageResponse;
  return proto.lnrpc.SignMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SignMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SignMessageResponse}
 */
proto.lnrpc.SignMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SignMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SignMessageResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SignMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SignMessageResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSignature();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SignMessageResponse} The clone.
 */
proto.lnrpc.SignMessageResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SignMessageResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string signature = 1;
 * @return {string}
 */
proto.lnrpc.SignMessageResponse.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.SignMessageResponse.prototype.setSignature = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.VerifyMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.VerifyMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.VerifyMessageRequest.displayName = 'proto.lnrpc.VerifyMessageRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.VerifyMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.VerifyMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.VerifyMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.VerifyMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: msg.getMsg_asB64(),
    signature: msg.getSignature()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.VerifyMessageRequest}
 */
proto.lnrpc.VerifyMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.VerifyMessageRequest;
  return proto.lnrpc.VerifyMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.VerifyMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.VerifyMessageRequest}
 */
proto.lnrpc.VerifyMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.VerifyMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.VerifyMessageRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.VerifyMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.VerifyMessageRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMsg_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getSignature();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.VerifyMessageRequest} The clone.
 */
proto.lnrpc.VerifyMessageRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.VerifyMessageRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes msg = 1;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.VerifyMessageRequest.prototype.getMsg = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes msg = 1;
 * This is a type-conversion wrapper around `getMsg()`
 * @return {string}
 */
proto.lnrpc.VerifyMessageRequest.prototype.getMsg_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMsg()));
};


/**
 * optional bytes msg = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMsg()`
 * @return {!Uint8Array}
 */
proto.lnrpc.VerifyMessageRequest.prototype.getMsg_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMsg()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.VerifyMessageRequest.prototype.setMsg = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string signature = 2;
 * @return {string}
 */
proto.lnrpc.VerifyMessageRequest.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.VerifyMessageRequest.prototype.setSignature = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.VerifyMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.VerifyMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.VerifyMessageResponse.displayName = 'proto.lnrpc.VerifyMessageResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.VerifyMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.VerifyMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.VerifyMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.VerifyMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valid: msg.getValid(),
    pubkey: msg.getPubkey()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.VerifyMessageResponse}
 */
proto.lnrpc.VerifyMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.VerifyMessageResponse;
  return proto.lnrpc.VerifyMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.VerifyMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.VerifyMessageResponse}
 */
proto.lnrpc.VerifyMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.VerifyMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.VerifyMessageResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.VerifyMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.VerifyMessageResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValid();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = this.getPubkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.VerifyMessageResponse} The clone.
 */
proto.lnrpc.VerifyMessageResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.VerifyMessageResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool valid = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.VerifyMessageResponse.prototype.getValid = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.lnrpc.VerifyMessageResponse.prototype.setValid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string pubkey = 2;
 * @return {string}
 */
proto.lnrpc.VerifyMessageResponse.prototype.getPubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.VerifyMessageResponse.prototype.setPubkey = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ConnectPeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ConnectPeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ConnectPeerRequest.displayName = 'proto.lnrpc.ConnectPeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ConnectPeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ConnectPeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ConnectPeerRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ConnectPeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: (f = msg.getAddr()) && proto.lnrpc.LightningAddress.toObject(includeInstance, f),
    perm: msg.getPerm()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ConnectPeerRequest}
 */
proto.lnrpc.ConnectPeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ConnectPeerRequest;
  return proto.lnrpc.ConnectPeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ConnectPeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ConnectPeerRequest}
 */
proto.lnrpc.ConnectPeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.LightningAddress;
      reader.readMessage(value,proto.lnrpc.LightningAddress.deserializeBinaryFromReader);
      msg.setAddr(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPerm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ConnectPeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ConnectPeerRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ConnectPeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ConnectPeerRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.LightningAddress.serializeBinaryToWriter
    );
  }
  f = this.getPerm();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ConnectPeerRequest} The clone.
 */
proto.lnrpc.ConnectPeerRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ConnectPeerRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional LightningAddress addr = 1;
 * @return {proto.lnrpc.LightningAddress}
 */
proto.lnrpc.ConnectPeerRequest.prototype.getAddr = function() {
  return /** @type{proto.lnrpc.LightningAddress} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.LightningAddress, 1));
};


/** @param {proto.lnrpc.LightningAddress|undefined} value  */
proto.lnrpc.ConnectPeerRequest.prototype.setAddr = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lnrpc.ConnectPeerRequest.prototype.clearAddr = function() {
  this.setAddr(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.ConnectPeerRequest.prototype.hasAddr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool perm = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.ConnectPeerRequest.prototype.getPerm = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 2, false));
};


/** @param {boolean} value  */
proto.lnrpc.ConnectPeerRequest.prototype.setPerm = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ConnectPeerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ConnectPeerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ConnectPeerResponse.displayName = 'proto.lnrpc.ConnectPeerResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ConnectPeerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ConnectPeerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ConnectPeerResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ConnectPeerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerId: msg.getPeerId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ConnectPeerResponse}
 */
proto.lnrpc.ConnectPeerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ConnectPeerResponse;
  return proto.lnrpc.ConnectPeerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ConnectPeerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ConnectPeerResponse}
 */
proto.lnrpc.ConnectPeerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPeerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ConnectPeerResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ConnectPeerResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ConnectPeerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ConnectPeerResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPeerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ConnectPeerResponse} The clone.
 */
proto.lnrpc.ConnectPeerResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ConnectPeerResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 peer_id = 1;
 * @return {number}
 */
proto.lnrpc.ConnectPeerResponse.prototype.getPeerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.ConnectPeerResponse.prototype.setPeerId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.DisconnectPeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.DisconnectPeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.DisconnectPeerRequest.displayName = 'proto.lnrpc.DisconnectPeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.DisconnectPeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.DisconnectPeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.DisconnectPeerRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.DisconnectPeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: msg.getPubKey()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.DisconnectPeerRequest}
 */
proto.lnrpc.DisconnectPeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.DisconnectPeerRequest;
  return proto.lnrpc.DisconnectPeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.DisconnectPeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.DisconnectPeerRequest}
 */
proto.lnrpc.DisconnectPeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.DisconnectPeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DisconnectPeerRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.DisconnectPeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DisconnectPeerRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPubKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.DisconnectPeerRequest} The clone.
 */
proto.lnrpc.DisconnectPeerRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.DisconnectPeerRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string pub_key = 1;
 * @return {string}
 */
proto.lnrpc.DisconnectPeerRequest.prototype.getPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.DisconnectPeerRequest.prototype.setPubKey = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.DisconnectPeerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.DisconnectPeerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.DisconnectPeerResponse.displayName = 'proto.lnrpc.DisconnectPeerResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.DisconnectPeerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.DisconnectPeerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.DisconnectPeerResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.DisconnectPeerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.DisconnectPeerResponse}
 */
proto.lnrpc.DisconnectPeerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.DisconnectPeerResponse;
  return proto.lnrpc.DisconnectPeerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.DisconnectPeerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.DisconnectPeerResponse}
 */
proto.lnrpc.DisconnectPeerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.DisconnectPeerResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DisconnectPeerResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.DisconnectPeerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DisconnectPeerResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.DisconnectPeerResponse} The clone.
 */
proto.lnrpc.DisconnectPeerResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.DisconnectPeerResponse} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.HTLC = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.HTLC, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.HTLC.displayName = 'proto.lnrpc.HTLC';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.HTLC.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.HTLC.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.HTLC} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.HTLC.toObject = function(includeInstance, msg) {
  var f, obj = {
    incoming: msg.getIncoming(),
    amount: msg.getAmount(),
    hashLock: msg.getHashLock_asB64(),
    expirationHeight: msg.getExpirationHeight(),
    revocationDelay: msg.getRevocationDelay()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.HTLC}
 */
proto.lnrpc.HTLC.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.HTLC;
  return proto.lnrpc.HTLC.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.HTLC} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.HTLC}
 */
proto.lnrpc.HTLC.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncoming(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHashLock(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpirationHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRevocationDelay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.HTLC} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.HTLC.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.HTLC.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.HTLC.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIncoming();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = this.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getHashLock_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = this.getExpirationHeight();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getRevocationDelay();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.HTLC} The clone.
 */
proto.lnrpc.HTLC.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.HTLC} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool incoming = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.HTLC.prototype.getIncoming = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.lnrpc.HTLC.prototype.setIncoming = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.lnrpc.HTLC.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.HTLC.prototype.setAmount = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes hash_lock = 3;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.HTLC.prototype.getHashLock = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/**
 * optional bytes hash_lock = 3;
 * This is a type-conversion wrapper around `getHashLock()`
 * @return {string}
 */
proto.lnrpc.HTLC.prototype.getHashLock_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHashLock()));
};


/**
 * optional bytes hash_lock = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHashLock()`
 * @return {!Uint8Array}
 */
proto.lnrpc.HTLC.prototype.getHashLock_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHashLock()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.HTLC.prototype.setHashLock = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 expiration_height = 4;
 * @return {number}
 */
proto.lnrpc.HTLC.prototype.getExpirationHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.HTLC.prototype.setExpirationHeight = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 revocation_delay = 5;
 * @return {number}
 */
proto.lnrpc.HTLC.prototype.getRevocationDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.HTLC.prototype.setRevocationDelay = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ActiveChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.ActiveChannel.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.ActiveChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ActiveChannel.displayName = 'proto.lnrpc.ActiveChannel';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.ActiveChannel.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ActiveChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ActiveChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ActiveChannel} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ActiveChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: msg.getActive(),
    remotePubkey: msg.getRemotePubkey(),
    channelPoint: msg.getChannelPoint(),
    chanId: msg.getChanId(),
    capacity: msg.getCapacity(),
    localBalance: msg.getLocalBalance(),
    remoteBalance: msg.getRemoteBalance(),
    commitFee: msg.getCommitFee(),
    commitWeight: msg.getCommitWeight(),
    feePerKw: msg.getFeePerKw(),
    unsettledBalance: msg.getUnsettledBalance(),
    totalSatoshisSent: msg.getTotalSatoshisSent(),
    totalSatoshisReceived: msg.getTotalSatoshisReceived(),
    numUpdates: msg.getNumUpdates(),
    pendingHtlcsList: jspb.Message.toObjectList(msg.getPendingHtlcsList(),
    proto.lnrpc.HTLC.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ActiveChannel}
 */
proto.lnrpc.ActiveChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ActiveChannel;
  return proto.lnrpc.ActiveChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ActiveChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ActiveChannel}
 */
proto.lnrpc.ActiveChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemotePubkey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelPoint(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChanId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapacity(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLocalBalance(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRemoteBalance(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommitFee(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommitWeight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeePerKw(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnsettledBalance(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSatoshisSent(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSatoshisReceived(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumUpdates(value);
      break;
    case 15:
      var value = new proto.lnrpc.HTLC;
      reader.readMessage(value,proto.lnrpc.HTLC.deserializeBinaryFromReader);
      msg.getPendingHtlcsList().push(value);
      msg.setPendingHtlcsList(msg.getPendingHtlcsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ActiveChannel} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ActiveChannel.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ActiveChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ActiveChannel.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = this.getRemotePubkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getChannelPoint();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getChanId();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = this.getCapacity();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = this.getLocalBalance();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = this.getRemoteBalance();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = this.getCommitFee();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = this.getCommitWeight();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = this.getFeePerKw();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = this.getUnsettledBalance();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = this.getTotalSatoshisSent();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = this.getTotalSatoshisReceived();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = this.getNumUpdates();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = this.getPendingHtlcsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.lnrpc.HTLC.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ActiveChannel} The clone.
 */
proto.lnrpc.ActiveChannel.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ActiveChannel} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool active = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.ActiveChannel.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.lnrpc.ActiveChannel.prototype.setActive = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string remote_pubkey = 2;
 * @return {string}
 */
proto.lnrpc.ActiveChannel.prototype.getRemotePubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.ActiveChannel.prototype.setRemotePubkey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string channel_point = 3;
 * @return {string}
 */
proto.lnrpc.ActiveChannel.prototype.getChannelPoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.lnrpc.ActiveChannel.prototype.setChannelPoint = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 chan_id = 4;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getChanId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setChanId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 capacity = 5;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setCapacity = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 local_balance = 6;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getLocalBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setLocalBalance = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int64 remote_balance = 7;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getRemoteBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setRemoteBalance = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int64 commit_fee = 8;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getCommitFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 8, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setCommitFee = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional int64 commit_weight = 9;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getCommitWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 9, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setCommitWeight = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional int64 fee_per_kw = 10;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getFeePerKw = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setFeePerKw = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional int64 unsettled_balance = 11;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getUnsettledBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 11, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setUnsettledBalance = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional int64 total_satoshis_sent = 12;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getTotalSatoshisSent = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 12, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setTotalSatoshisSent = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional int64 total_satoshis_received = 13;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getTotalSatoshisReceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 13, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setTotalSatoshisReceived = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional uint64 num_updates = 14;
 * @return {number}
 */
proto.lnrpc.ActiveChannel.prototype.getNumUpdates = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 14, 0));
};


/** @param {number} value  */
proto.lnrpc.ActiveChannel.prototype.setNumUpdates = function(value) {
  jspb.Message.setField(this, 14, value);
};


/**
 * repeated HTLC pending_htlcs = 15;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.HTLC>}
 */
proto.lnrpc.ActiveChannel.prototype.getPendingHtlcsList = function() {
  return /** @type{!Array.<!proto.lnrpc.HTLC>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.HTLC, 15));
};


/** @param {Array.<!proto.lnrpc.HTLC>} value  */
proto.lnrpc.ActiveChannel.prototype.setPendingHtlcsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 15, value);
};


proto.lnrpc.ActiveChannel.prototype.clearPendingHtlcsList = function() {
  this.setPendingHtlcsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ListChannelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ListChannelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ListChannelsRequest.displayName = 'proto.lnrpc.ListChannelsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ListChannelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ListChannelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ListChannelsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ListChannelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ListChannelsRequest}
 */
proto.lnrpc.ListChannelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ListChannelsRequest;
  return proto.lnrpc.ListChannelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ListChannelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ListChannelsRequest}
 */
proto.lnrpc.ListChannelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ListChannelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListChannelsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ListChannelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListChannelsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ListChannelsRequest} The clone.
 */
proto.lnrpc.ListChannelsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ListChannelsRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ListChannelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.ListChannelsResponse.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.ListChannelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ListChannelsResponse.displayName = 'proto.lnrpc.ListChannelsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.ListChannelsResponse.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ListChannelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ListChannelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ListChannelsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ListChannelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelsList: jspb.Message.toObjectList(msg.getChannelsList(),
    proto.lnrpc.ActiveChannel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ListChannelsResponse}
 */
proto.lnrpc.ListChannelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ListChannelsResponse;
  return proto.lnrpc.ListChannelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ListChannelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ListChannelsResponse}
 */
proto.lnrpc.ListChannelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 11:
      var value = new proto.lnrpc.ActiveChannel;
      reader.readMessage(value,proto.lnrpc.ActiveChannel.deserializeBinaryFromReader);
      msg.getChannelsList().push(value);
      msg.setChannelsList(msg.getChannelsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ListChannelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListChannelsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ListChannelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListChannelsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.lnrpc.ActiveChannel.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ListChannelsResponse} The clone.
 */
proto.lnrpc.ListChannelsResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ListChannelsResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated ActiveChannel channels = 11;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.ActiveChannel>}
 */
proto.lnrpc.ListChannelsResponse.prototype.getChannelsList = function() {
  return /** @type{!Array.<!proto.lnrpc.ActiveChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.ActiveChannel, 11));
};


/** @param {Array.<!proto.lnrpc.ActiveChannel>} value  */
proto.lnrpc.ListChannelsResponse.prototype.setChannelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


proto.lnrpc.ListChannelsResponse.prototype.clearChannelsList = function() {
  this.setChannelsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.Peer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.Peer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.Peer.displayName = 'proto.lnrpc.Peer';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.Peer.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.Peer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.Peer} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.Peer.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: msg.getPubKey(),
    peerId: msg.getPeerId(),
    address: msg.getAddress(),
    bytesSent: msg.getBytesSent(),
    bytesRecv: msg.getBytesRecv(),
    satSent: msg.getSatSent(),
    satRecv: msg.getSatRecv(),
    inbound: msg.getInbound(),
    pingTime: msg.getPingTime()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.Peer}
 */
proto.lnrpc.Peer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.Peer;
  return proto.lnrpc.Peer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.Peer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.Peer}
 */
proto.lnrpc.Peer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPeerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBytesSent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBytesRecv(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSatSent(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSatRecv(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInbound(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPingTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.Peer} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Peer.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.Peer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Peer.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPubKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPeerId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getBytesSent();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = this.getBytesRecv();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = this.getSatSent();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = this.getSatRecv();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = this.getInbound();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = this.getPingTime();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.Peer} The clone.
 */
proto.lnrpc.Peer.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.Peer} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string pub_key = 1;
 * @return {string}
 */
proto.lnrpc.Peer.prototype.getPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.Peer.prototype.setPubKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 peer_id = 2;
 * @return {number}
 */
proto.lnrpc.Peer.prototype.getPeerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.Peer.prototype.setPeerId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.lnrpc.Peer.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.lnrpc.Peer.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 bytes_sent = 4;
 * @return {number}
 */
proto.lnrpc.Peer.prototype.getBytesSent = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.Peer.prototype.setBytesSent = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 bytes_recv = 5;
 * @return {number}
 */
proto.lnrpc.Peer.prototype.getBytesRecv = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.Peer.prototype.setBytesRecv = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 sat_sent = 6;
 * @return {number}
 */
proto.lnrpc.Peer.prototype.getSatSent = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.lnrpc.Peer.prototype.setSatSent = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int64 sat_recv = 7;
 * @return {number}
 */
proto.lnrpc.Peer.prototype.getSatRecv = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.lnrpc.Peer.prototype.setSatRecv = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool inbound = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.Peer.prototype.getInbound = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 8, false));
};


/** @param {boolean} value  */
proto.lnrpc.Peer.prototype.setInbound = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional int64 ping_time = 9;
 * @return {number}
 */
proto.lnrpc.Peer.prototype.getPingTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 9, 0));
};


/** @param {number} value  */
proto.lnrpc.Peer.prototype.setPingTime = function(value) {
  jspb.Message.setField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ListPeersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ListPeersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ListPeersRequest.displayName = 'proto.lnrpc.ListPeersRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ListPeersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ListPeersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ListPeersRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ListPeersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ListPeersRequest}
 */
proto.lnrpc.ListPeersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ListPeersRequest;
  return proto.lnrpc.ListPeersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ListPeersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ListPeersRequest}
 */
proto.lnrpc.ListPeersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ListPeersRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListPeersRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ListPeersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListPeersRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ListPeersRequest} The clone.
 */
proto.lnrpc.ListPeersRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ListPeersRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ListPeersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.ListPeersResponse.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.ListPeersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ListPeersResponse.displayName = 'proto.lnrpc.ListPeersResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.ListPeersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ListPeersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ListPeersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ListPeersResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ListPeersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peersList: jspb.Message.toObjectList(msg.getPeersList(),
    proto.lnrpc.Peer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ListPeersResponse}
 */
proto.lnrpc.ListPeersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ListPeersResponse;
  return proto.lnrpc.ListPeersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ListPeersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ListPeersResponse}
 */
proto.lnrpc.ListPeersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.Peer;
      reader.readMessage(value,proto.lnrpc.Peer.deserializeBinaryFromReader);
      msg.getPeersList().push(value);
      msg.setPeersList(msg.getPeersList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ListPeersResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListPeersResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ListPeersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListPeersResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPeersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lnrpc.Peer.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ListPeersResponse} The clone.
 */
proto.lnrpc.ListPeersResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ListPeersResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Peer peers = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.Peer>}
 */
proto.lnrpc.ListPeersResponse.prototype.getPeersList = function() {
  return /** @type{!Array.<!proto.lnrpc.Peer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.Peer, 1));
};


/** @param {Array.<!proto.lnrpc.Peer>} value  */
proto.lnrpc.ListPeersResponse.prototype.setPeersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.lnrpc.ListPeersResponse.prototype.clearPeersList = function() {
  this.setPeersList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.GetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.GetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.GetInfoRequest.displayName = 'proto.lnrpc.GetInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.GetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.GetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.GetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.GetInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.GetInfoRequest}
 */
proto.lnrpc.GetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.GetInfoRequest;
  return proto.lnrpc.GetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.GetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.GetInfoRequest}
 */
proto.lnrpc.GetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.GetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.GetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GetInfoRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.GetInfoRequest} The clone.
 */
proto.lnrpc.GetInfoRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.GetInfoRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.GetInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.GetInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.GetInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.GetInfoResponse.displayName = 'proto.lnrpc.GetInfoResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.GetInfoResponse.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.GetInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.GetInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.GetInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.GetInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityPubkey: msg.getIdentityPubkey(),
    alias: msg.getAlias(),
    numPendingChannels: msg.getNumPendingChannels(),
    numActiveChannels: msg.getNumActiveChannels(),
    numPeers: msg.getNumPeers(),
    blockHeight: msg.getBlockHeight(),
    blockHash: msg.getBlockHash(),
    syncedToChain: msg.getSyncedToChain(),
    testnet: msg.getTestnet(),
    chainsList: jspb.Message.getField(msg, 11)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.GetInfoResponse}
 */
proto.lnrpc.GetInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.GetInfoResponse;
  return proto.lnrpc.GetInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.GetInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.GetInfoResponse}
 */
proto.lnrpc.GetInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityPubkey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumPendingChannels(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumActiveChannels(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumPeers(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockHeight(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockHash(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSyncedToChain(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTestnet(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.getChainsList().push(value);
      msg.setChainsList(msg.getChainsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.GetInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GetInfoResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.GetInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GetInfoResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIdentityPubkey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getAlias();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getNumPendingChannels();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getNumActiveChannels();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getNumPeers();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getBlockHeight();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getBlockHash();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = this.getSyncedToChain();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = this.getTestnet();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = this.getChainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.GetInfoResponse} The clone.
 */
proto.lnrpc.GetInfoResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.GetInfoResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string identity_pubkey = 1;
 * @return {string}
 */
proto.lnrpc.GetInfoResponse.prototype.getIdentityPubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.GetInfoResponse.prototype.setIdentityPubkey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string alias = 2;
 * @return {string}
 */
proto.lnrpc.GetInfoResponse.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.GetInfoResponse.prototype.setAlias = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 num_pending_channels = 3;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getNumPendingChannels = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.GetInfoResponse.prototype.setNumPendingChannels = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 num_active_channels = 4;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getNumActiveChannels = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.GetInfoResponse.prototype.setNumActiveChannels = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 num_peers = 5;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getNumPeers = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.GetInfoResponse.prototype.setNumPeers = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 block_height = 6;
 * @return {number}
 */
proto.lnrpc.GetInfoResponse.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.lnrpc.GetInfoResponse.prototype.setBlockHeight = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string block_hash = 8;
 * @return {string}
 */
proto.lnrpc.GetInfoResponse.prototype.getBlockHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 8, ""));
};


/** @param {string} value  */
proto.lnrpc.GetInfoResponse.prototype.setBlockHash = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional bool synced_to_chain = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.GetInfoResponse.prototype.getSyncedToChain = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 9, false));
};


/** @param {boolean} value  */
proto.lnrpc.GetInfoResponse.prototype.setSyncedToChain = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional bool testnet = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.GetInfoResponse.prototype.getTestnet = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 10, false));
};


/** @param {boolean} value  */
proto.lnrpc.GetInfoResponse.prototype.setTestnet = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * repeated string chains = 11;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.lnrpc.GetInfoResponse.prototype.getChainsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 11));
};


/** @param {Array.<string>} value  */
proto.lnrpc.GetInfoResponse.prototype.setChainsList = function(value) {
  jspb.Message.setField(this, 11, value || []);
};


proto.lnrpc.GetInfoResponse.prototype.clearChainsList = function() {
  jspb.Message.setField(this, 11, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ConfirmationUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ConfirmationUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ConfirmationUpdate.displayName = 'proto.lnrpc.ConfirmationUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ConfirmationUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ConfirmationUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ConfirmationUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ConfirmationUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockSha: msg.getBlockSha_asB64(),
    blockHeight: msg.getBlockHeight(),
    numConfsLeft: msg.getNumConfsLeft()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ConfirmationUpdate}
 */
proto.lnrpc.ConfirmationUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ConfirmationUpdate;
  return proto.lnrpc.ConfirmationUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ConfirmationUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ConfirmationUpdate}
 */
proto.lnrpc.ConfirmationUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockSha(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBlockHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumConfsLeft(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ConfirmationUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ConfirmationUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ConfirmationUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ConfirmationUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBlockSha_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getBlockHeight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getNumConfsLeft();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ConfirmationUpdate} The clone.
 */
proto.lnrpc.ConfirmationUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ConfirmationUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes block_sha = 1;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getBlockSha = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes block_sha = 1;
 * This is a type-conversion wrapper around `getBlockSha()`
 * @return {string}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getBlockSha_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockSha()));
};


/**
 * optional bytes block_sha = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockSha()`
 * @return {!Uint8Array}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getBlockSha_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockSha()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.ConfirmationUpdate.prototype.setBlockSha = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 block_height = 2;
 * @return {number}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.ConfirmationUpdate.prototype.setBlockHeight = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 num_confs_left = 3;
 * @return {number}
 */
proto.lnrpc.ConfirmationUpdate.prototype.getNumConfsLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.ConfirmationUpdate.prototype.setNumConfsLeft = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelOpenUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelOpenUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChannelOpenUpdate.displayName = 'proto.lnrpc.ChannelOpenUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelOpenUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelOpenUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelOpenUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChannelOpenUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelPoint: (f = msg.getChannelPoint()) && proto.lnrpc.ChannelPoint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelOpenUpdate}
 */
proto.lnrpc.ChannelOpenUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelOpenUpdate;
  return proto.lnrpc.ChannelOpenUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelOpenUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelOpenUpdate}
 */
proto.lnrpc.ChannelOpenUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.ChannelPoint;
      reader.readMessage(value,proto.lnrpc.ChannelPoint.deserializeBinaryFromReader);
      msg.setChannelPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelOpenUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelOpenUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelOpenUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelOpenUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannelPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.ChannelPoint.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChannelOpenUpdate} The clone.
 */
proto.lnrpc.ChannelOpenUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChannelOpenUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ChannelPoint channel_point = 1;
 * @return {proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.ChannelOpenUpdate.prototype.getChannelPoint = function() {
  return /** @type{proto.lnrpc.ChannelPoint} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ChannelPoint, 1));
};


/** @param {proto.lnrpc.ChannelPoint|undefined} value  */
proto.lnrpc.ChannelOpenUpdate.prototype.setChannelPoint = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lnrpc.ChannelOpenUpdate.prototype.clearChannelPoint = function() {
  this.setChannelPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.ChannelOpenUpdate.prototype.hasChannelPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelCloseUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelCloseUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChannelCloseUpdate.displayName = 'proto.lnrpc.ChannelCloseUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelCloseUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelCloseUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelCloseUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChannelCloseUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    closingTxid: msg.getClosingTxid_asB64(),
    success: msg.getSuccess()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelCloseUpdate}
 */
proto.lnrpc.ChannelCloseUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelCloseUpdate;
  return proto.lnrpc.ChannelCloseUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelCloseUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelCloseUpdate}
 */
proto.lnrpc.ChannelCloseUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setClosingTxid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelCloseUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelCloseUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelCloseUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelCloseUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getClosingTxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChannelCloseUpdate} The clone.
 */
proto.lnrpc.ChannelCloseUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChannelCloseUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes closing_txid = 1;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.ChannelCloseUpdate.prototype.getClosingTxid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes closing_txid = 1;
 * This is a type-conversion wrapper around `getClosingTxid()`
 * @return {string}
 */
proto.lnrpc.ChannelCloseUpdate.prototype.getClosingTxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getClosingTxid()));
};


/**
 * optional bytes closing_txid = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getClosingTxid()`
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelCloseUpdate.prototype.getClosingTxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getClosingTxid()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.ChannelCloseUpdate.prototype.setClosingTxid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool success = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.ChannelCloseUpdate.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 2, false));
};


/** @param {boolean} value  */
proto.lnrpc.ChannelCloseUpdate.prototype.setSuccess = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.CloseChannelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.CloseChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.CloseChannelRequest.displayName = 'proto.lnrpc.CloseChannelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.CloseChannelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.CloseChannelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.CloseChannelRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.CloseChannelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelPoint: (f = msg.getChannelPoint()) && proto.lnrpc.ChannelPoint.toObject(includeInstance, f),
    timeLimit: msg.getTimeLimit(),
    force: msg.getForce()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.CloseChannelRequest}
 */
proto.lnrpc.CloseChannelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.CloseChannelRequest;
  return proto.lnrpc.CloseChannelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.CloseChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.CloseChannelRequest}
 */
proto.lnrpc.CloseChannelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.ChannelPoint;
      reader.readMessage(value,proto.lnrpc.ChannelPoint.deserializeBinaryFromReader);
      msg.setChannelPoint(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeLimit(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.CloseChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.CloseChannelRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.CloseChannelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.CloseChannelRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannelPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.ChannelPoint.serializeBinaryToWriter
    );
  }
  f = this.getTimeLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getForce();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.CloseChannelRequest} The clone.
 */
proto.lnrpc.CloseChannelRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.CloseChannelRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ChannelPoint channel_point = 1;
 * @return {proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.CloseChannelRequest.prototype.getChannelPoint = function() {
  return /** @type{proto.lnrpc.ChannelPoint} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ChannelPoint, 1));
};


/** @param {proto.lnrpc.ChannelPoint|undefined} value  */
proto.lnrpc.CloseChannelRequest.prototype.setChannelPoint = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lnrpc.CloseChannelRequest.prototype.clearChannelPoint = function() {
  this.setChannelPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.CloseChannelRequest.prototype.hasChannelPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 time_limit = 2;
 * @return {number}
 */
proto.lnrpc.CloseChannelRequest.prototype.getTimeLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.CloseChannelRequest.prototype.setTimeLimit = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool force = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.CloseChannelRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 3, false));
};


/** @param {boolean} value  */
proto.lnrpc.CloseChannelRequest.prototype.setForce = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.CloseStatusUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.lnrpc.CloseStatusUpdate.oneofGroups_);
};
goog.inherits(proto.lnrpc.CloseStatusUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.CloseStatusUpdate.displayName = 'proto.lnrpc.CloseStatusUpdate';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lnrpc.CloseStatusUpdate.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.lnrpc.CloseStatusUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  CLOSE_PENDING: 1,
  CONFIRMATION: 2,
  CHAN_CLOSE: 3
};

/**
 * @return {proto.lnrpc.CloseStatusUpdate.UpdateCase}
 */
proto.lnrpc.CloseStatusUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.lnrpc.CloseStatusUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.lnrpc.CloseStatusUpdate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.CloseStatusUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.CloseStatusUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.CloseStatusUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.CloseStatusUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    closePending: (f = msg.getClosePending()) && proto.lnrpc.PendingUpdate.toObject(includeInstance, f),
    confirmation: (f = msg.getConfirmation()) && proto.lnrpc.ConfirmationUpdate.toObject(includeInstance, f),
    chanClose: (f = msg.getChanClose()) && proto.lnrpc.ChannelCloseUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.CloseStatusUpdate}
 */
proto.lnrpc.CloseStatusUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.CloseStatusUpdate;
  return proto.lnrpc.CloseStatusUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.CloseStatusUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.CloseStatusUpdate}
 */
proto.lnrpc.CloseStatusUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.PendingUpdate;
      reader.readMessage(value,proto.lnrpc.PendingUpdate.deserializeBinaryFromReader);
      msg.setClosePending(value);
      break;
    case 2:
      var value = new proto.lnrpc.ConfirmationUpdate;
      reader.readMessage(value,proto.lnrpc.ConfirmationUpdate.deserializeBinaryFromReader);
      msg.setConfirmation(value);
      break;
    case 3:
      var value = new proto.lnrpc.ChannelCloseUpdate;
      reader.readMessage(value,proto.lnrpc.ChannelCloseUpdate.deserializeBinaryFromReader);
      msg.setChanClose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.CloseStatusUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.CloseStatusUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.CloseStatusUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.CloseStatusUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getClosePending();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.PendingUpdate.serializeBinaryToWriter
    );
  }
  f = this.getConfirmation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lnrpc.ConfirmationUpdate.serializeBinaryToWriter
    );
  }
  f = this.getChanClose();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lnrpc.ChannelCloseUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.CloseStatusUpdate} The clone.
 */
proto.lnrpc.CloseStatusUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.CloseStatusUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional PendingUpdate close_pending = 1;
 * @return {proto.lnrpc.PendingUpdate}
 */
proto.lnrpc.CloseStatusUpdate.prototype.getClosePending = function() {
  return /** @type{proto.lnrpc.PendingUpdate} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.PendingUpdate, 1));
};


/** @param {proto.lnrpc.PendingUpdate|undefined} value  */
proto.lnrpc.CloseStatusUpdate.prototype.setClosePending = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.lnrpc.CloseStatusUpdate.oneofGroups_[0], value);
};


proto.lnrpc.CloseStatusUpdate.prototype.clearClosePending = function() {
  this.setClosePending(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.CloseStatusUpdate.prototype.hasClosePending = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConfirmationUpdate confirmation = 2;
 * @return {proto.lnrpc.ConfirmationUpdate}
 */
proto.lnrpc.CloseStatusUpdate.prototype.getConfirmation = function() {
  return /** @type{proto.lnrpc.ConfirmationUpdate} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ConfirmationUpdate, 2));
};


/** @param {proto.lnrpc.ConfirmationUpdate|undefined} value  */
proto.lnrpc.CloseStatusUpdate.prototype.setConfirmation = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.lnrpc.CloseStatusUpdate.oneofGroups_[0], value);
};


proto.lnrpc.CloseStatusUpdate.prototype.clearConfirmation = function() {
  this.setConfirmation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.CloseStatusUpdate.prototype.hasConfirmation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ChannelCloseUpdate chan_close = 3;
 * @return {proto.lnrpc.ChannelCloseUpdate}
 */
proto.lnrpc.CloseStatusUpdate.prototype.getChanClose = function() {
  return /** @type{proto.lnrpc.ChannelCloseUpdate} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ChannelCloseUpdate, 3));
};


/** @param {proto.lnrpc.ChannelCloseUpdate|undefined} value  */
proto.lnrpc.CloseStatusUpdate.prototype.setChanClose = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.lnrpc.CloseStatusUpdate.oneofGroups_[0], value);
};


proto.lnrpc.CloseStatusUpdate.prototype.clearChanClose = function() {
  this.setChanClose(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.CloseStatusUpdate.prototype.hasChanClose = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PendingUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.PendingUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PendingUpdate.displayName = 'proto.lnrpc.PendingUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PendingUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PendingUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PendingUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PendingUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: msg.getTxid_asB64(),
    outputIndex: msg.getOutputIndex()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PendingUpdate}
 */
proto.lnrpc.PendingUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PendingUpdate;
  return proto.lnrpc.PendingUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PendingUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PendingUpdate}
 */
proto.lnrpc.PendingUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutputIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PendingUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PendingUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getOutputIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PendingUpdate} The clone.
 */
proto.lnrpc.PendingUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PendingUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes txid = 1;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.PendingUpdate.prototype.getTxid = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes txid = 1;
 * This is a type-conversion wrapper around `getTxid()`
 * @return {string}
 */
proto.lnrpc.PendingUpdate.prototype.getTxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxid()));
};


/**
 * optional bytes txid = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxid()`
 * @return {!Uint8Array}
 */
proto.lnrpc.PendingUpdate.prototype.getTxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxid()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.PendingUpdate.prototype.setTxid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 output_index = 2;
 * @return {number}
 */
proto.lnrpc.PendingUpdate.prototype.getOutputIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingUpdate.prototype.setOutputIndex = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.OpenChannelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.OpenChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.OpenChannelRequest.displayName = 'proto.lnrpc.OpenChannelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.OpenChannelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.OpenChannelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.OpenChannelRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.OpenChannelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetPeerId: msg.getTargetPeerId(),
    nodePubkey: msg.getNodePubkey_asB64(),
    nodePubkeyString: msg.getNodePubkeyString(),
    localFundingAmount: msg.getLocalFundingAmount(),
    pushSat: msg.getPushSat(),
    numConfs: msg.getNumConfs()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.OpenChannelRequest}
 */
proto.lnrpc.OpenChannelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.OpenChannelRequest;
  return proto.lnrpc.OpenChannelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.OpenChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.OpenChannelRequest}
 */
proto.lnrpc.OpenChannelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetPeerId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNodePubkey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePubkeyString(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLocalFundingAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPushSat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumConfs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.OpenChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.OpenChannelRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.OpenChannelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.OpenChannelRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTargetPeerId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getNodePubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = this.getNodePubkeyString();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getLocalFundingAmount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = this.getPushSat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = this.getNumConfs();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.OpenChannelRequest} The clone.
 */
proto.lnrpc.OpenChannelRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.OpenChannelRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 target_peer_id = 1;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getTargetPeerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.OpenChannelRequest.prototype.setTargetPeerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes node_pubkey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.OpenChannelRequest.prototype.getNodePubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes node_pubkey = 2;
 * This is a type-conversion wrapper around `getNodePubkey()`
 * @return {string}
 */
proto.lnrpc.OpenChannelRequest.prototype.getNodePubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNodePubkey()));
};


/**
 * optional bytes node_pubkey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNodePubkey()`
 * @return {!Uint8Array}
 */
proto.lnrpc.OpenChannelRequest.prototype.getNodePubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNodePubkey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.OpenChannelRequest.prototype.setNodePubkey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string node_pubkey_string = 3;
 * @return {string}
 */
proto.lnrpc.OpenChannelRequest.prototype.getNodePubkeyString = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.lnrpc.OpenChannelRequest.prototype.setNodePubkeyString = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 local_funding_amount = 4;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getLocalFundingAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.OpenChannelRequest.prototype.setLocalFundingAmount = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 push_sat = 5;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getPushSat = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.OpenChannelRequest.prototype.setPushSat = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 num_confs = 6;
 * @return {number}
 */
proto.lnrpc.OpenChannelRequest.prototype.getNumConfs = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.lnrpc.OpenChannelRequest.prototype.setNumConfs = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.OpenStatusUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.lnrpc.OpenStatusUpdate.oneofGroups_);
};
goog.inherits(proto.lnrpc.OpenStatusUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.OpenStatusUpdate.displayName = 'proto.lnrpc.OpenStatusUpdate';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lnrpc.OpenStatusUpdate.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.lnrpc.OpenStatusUpdate.UpdateCase = {
  UPDATE_NOT_SET: 0,
  CHAN_PENDING: 1,
  CONFIRMATION: 2,
  CHAN_OPEN: 3
};

/**
 * @return {proto.lnrpc.OpenStatusUpdate.UpdateCase}
 */
proto.lnrpc.OpenStatusUpdate.prototype.getUpdateCase = function() {
  return /** @type {proto.lnrpc.OpenStatusUpdate.UpdateCase} */(jspb.Message.computeOneofCase(this, proto.lnrpc.OpenStatusUpdate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.OpenStatusUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.OpenStatusUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.OpenStatusUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.OpenStatusUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    chanPending: (f = msg.getChanPending()) && proto.lnrpc.PendingUpdate.toObject(includeInstance, f),
    confirmation: (f = msg.getConfirmation()) && proto.lnrpc.ConfirmationUpdate.toObject(includeInstance, f),
    chanOpen: (f = msg.getChanOpen()) && proto.lnrpc.ChannelOpenUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.OpenStatusUpdate}
 */
proto.lnrpc.OpenStatusUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.OpenStatusUpdate;
  return proto.lnrpc.OpenStatusUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.OpenStatusUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.OpenStatusUpdate}
 */
proto.lnrpc.OpenStatusUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.PendingUpdate;
      reader.readMessage(value,proto.lnrpc.PendingUpdate.deserializeBinaryFromReader);
      msg.setChanPending(value);
      break;
    case 2:
      var value = new proto.lnrpc.ConfirmationUpdate;
      reader.readMessage(value,proto.lnrpc.ConfirmationUpdate.deserializeBinaryFromReader);
      msg.setConfirmation(value);
      break;
    case 3:
      var value = new proto.lnrpc.ChannelOpenUpdate;
      reader.readMessage(value,proto.lnrpc.ChannelOpenUpdate.deserializeBinaryFromReader);
      msg.setChanOpen(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.OpenStatusUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.OpenStatusUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.OpenStatusUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.OpenStatusUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChanPending();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.PendingUpdate.serializeBinaryToWriter
    );
  }
  f = this.getConfirmation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lnrpc.ConfirmationUpdate.serializeBinaryToWriter
    );
  }
  f = this.getChanOpen();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.lnrpc.ChannelOpenUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.OpenStatusUpdate} The clone.
 */
proto.lnrpc.OpenStatusUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.OpenStatusUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional PendingUpdate chan_pending = 1;
 * @return {proto.lnrpc.PendingUpdate}
 */
proto.lnrpc.OpenStatusUpdate.prototype.getChanPending = function() {
  return /** @type{proto.lnrpc.PendingUpdate} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.PendingUpdate, 1));
};


/** @param {proto.lnrpc.PendingUpdate|undefined} value  */
proto.lnrpc.OpenStatusUpdate.prototype.setChanPending = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.lnrpc.OpenStatusUpdate.oneofGroups_[0], value);
};


proto.lnrpc.OpenStatusUpdate.prototype.clearChanPending = function() {
  this.setChanPending(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.OpenStatusUpdate.prototype.hasChanPending = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConfirmationUpdate confirmation = 2;
 * @return {proto.lnrpc.ConfirmationUpdate}
 */
proto.lnrpc.OpenStatusUpdate.prototype.getConfirmation = function() {
  return /** @type{proto.lnrpc.ConfirmationUpdate} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ConfirmationUpdate, 2));
};


/** @param {proto.lnrpc.ConfirmationUpdate|undefined} value  */
proto.lnrpc.OpenStatusUpdate.prototype.setConfirmation = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.lnrpc.OpenStatusUpdate.oneofGroups_[0], value);
};


proto.lnrpc.OpenStatusUpdate.prototype.clearConfirmation = function() {
  this.setConfirmation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.OpenStatusUpdate.prototype.hasConfirmation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ChannelOpenUpdate chan_open = 3;
 * @return {proto.lnrpc.ChannelOpenUpdate}
 */
proto.lnrpc.OpenStatusUpdate.prototype.getChanOpen = function() {
  return /** @type{proto.lnrpc.ChannelOpenUpdate} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ChannelOpenUpdate, 3));
};


/** @param {proto.lnrpc.ChannelOpenUpdate|undefined} value  */
proto.lnrpc.OpenStatusUpdate.prototype.setChanOpen = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.lnrpc.OpenStatusUpdate.oneofGroups_[0], value);
};


proto.lnrpc.OpenStatusUpdate.prototype.clearChanOpen = function() {
  this.setChanOpen(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.OpenStatusUpdate.prototype.hasChanOpen = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PendingChannelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.PendingChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PendingChannelRequest.displayName = 'proto.lnrpc.PendingChannelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PendingChannelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PendingChannelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PendingChannelRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PendingChannelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PendingChannelRequest}
 */
proto.lnrpc.PendingChannelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PendingChannelRequest;
  return proto.lnrpc.PendingChannelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PendingChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PendingChannelRequest}
 */
proto.lnrpc.PendingChannelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PendingChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PendingChannelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PendingChannelRequest} The clone.
 */
proto.lnrpc.PendingChannelRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PendingChannelRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PendingChannelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.PendingChannelResponse.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.PendingChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PendingChannelResponse.displayName = 'proto.lnrpc.PendingChannelResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.PendingChannelResponse.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PendingChannelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PendingChannelResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalLimboBalance: msg.getTotalLimboBalance(),
    pendingOpenChannelsList: jspb.Message.toObjectList(msg.getPendingOpenChannelsList(),
    proto.lnrpc.PendingChannelResponse.PendingOpenChannel.toObject, includeInstance),
    pendingClosingChannelsList: jspb.Message.toObjectList(msg.getPendingClosingChannelsList(),
    proto.lnrpc.PendingChannelResponse.ClosedChannel.toObject, includeInstance),
    pendingForceClosingChannelsList: jspb.Message.toObjectList(msg.getPendingForceClosingChannelsList(),
    proto.lnrpc.PendingChannelResponse.ForceClosedChannel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PendingChannelResponse}
 */
proto.lnrpc.PendingChannelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PendingChannelResponse;
  return proto.lnrpc.PendingChannelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PendingChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PendingChannelResponse}
 */
proto.lnrpc.PendingChannelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalLimboBalance(value);
      break;
    case 2:
      var value = new proto.lnrpc.PendingChannelResponse.PendingOpenChannel;
      reader.readMessage(value,proto.lnrpc.PendingChannelResponse.PendingOpenChannel.deserializeBinaryFromReader);
      msg.getPendingOpenChannelsList().push(value);
      msg.setPendingOpenChannelsList(msg.getPendingOpenChannelsList());
      break;
    case 3:
      var value = new proto.lnrpc.PendingChannelResponse.ClosedChannel;
      reader.readMessage(value,proto.lnrpc.PendingChannelResponse.ClosedChannel.deserializeBinaryFromReader);
      msg.getPendingClosingChannelsList().push(value);
      msg.setPendingClosingChannelsList(msg.getPendingClosingChannelsList());
      break;
    case 4:
      var value = new proto.lnrpc.PendingChannelResponse.ForceClosedChannel;
      reader.readMessage(value,proto.lnrpc.PendingChannelResponse.ForceClosedChannel.deserializeBinaryFromReader);
      msg.getPendingForceClosingChannelsList().push(value);
      msg.setPendingForceClosingChannelsList(msg.getPendingForceClosingChannelsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PendingChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PendingChannelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTotalLimboBalance();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getPendingOpenChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.lnrpc.PendingChannelResponse.PendingOpenChannel.serializeBinaryToWriter
    );
  }
  f = this.getPendingClosingChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.lnrpc.PendingChannelResponse.ClosedChannel.serializeBinaryToWriter
    );
  }
  f = this.getPendingForceClosingChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.lnrpc.PendingChannelResponse.ForceClosedChannel.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PendingChannelResponse} The clone.
 */
proto.lnrpc.PendingChannelResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PendingChannelResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 total_limbo_balance = 1;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.prototype.getTotalLimboBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.prototype.setTotalLimboBalance = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated PendingOpenChannel pending_open_channels = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.PendingChannelResponse.PendingOpenChannel>}
 */
proto.lnrpc.PendingChannelResponse.prototype.getPendingOpenChannelsList = function() {
  return /** @type{!Array.<!proto.lnrpc.PendingChannelResponse.PendingOpenChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.PendingChannelResponse.PendingOpenChannel, 2));
};


/** @param {Array.<!proto.lnrpc.PendingChannelResponse.PendingOpenChannel>} value  */
proto.lnrpc.PendingChannelResponse.prototype.setPendingOpenChannelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.lnrpc.PendingChannelResponse.prototype.clearPendingOpenChannelsList = function() {
  this.setPendingOpenChannelsList([]);
};


/**
 * repeated ClosedChannel pending_closing_channels = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.PendingChannelResponse.ClosedChannel>}
 */
proto.lnrpc.PendingChannelResponse.prototype.getPendingClosingChannelsList = function() {
  return /** @type{!Array.<!proto.lnrpc.PendingChannelResponse.ClosedChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.PendingChannelResponse.ClosedChannel, 3));
};


/** @param {Array.<!proto.lnrpc.PendingChannelResponse.ClosedChannel>} value  */
proto.lnrpc.PendingChannelResponse.prototype.setPendingClosingChannelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.lnrpc.PendingChannelResponse.prototype.clearPendingClosingChannelsList = function() {
  this.setPendingClosingChannelsList([]);
};


/**
 * repeated ForceClosedChannel pending_force_closing_channels = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.PendingChannelResponse.ForceClosedChannel>}
 */
proto.lnrpc.PendingChannelResponse.prototype.getPendingForceClosingChannelsList = function() {
  return /** @type{!Array.<!proto.lnrpc.PendingChannelResponse.ForceClosedChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.PendingChannelResponse.ForceClosedChannel, 4));
};


/** @param {Array.<!proto.lnrpc.PendingChannelResponse.ForceClosedChannel>} value  */
proto.lnrpc.PendingChannelResponse.prototype.setPendingForceClosingChannelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.lnrpc.PendingChannelResponse.prototype.clearPendingForceClosingChannelsList = function() {
  this.setPendingForceClosingChannelsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PendingChannelResponse.PendingChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.PendingChannelResponse.PendingChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PendingChannelResponse.PendingChannel.displayName = 'proto.lnrpc.PendingChannelResponse.PendingChannel';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PendingChannelResponse.PendingChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PendingChannelResponse.PendingChannel} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    remoteNodePub: msg.getRemoteNodePub(),
    channelPoint: msg.getChannelPoint(),
    capacity: msg.getCapacity(),
    localBalance: msg.getLocalBalance(),
    remoteBalance: msg.getRemoteBalance()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PendingChannelResponse.PendingChannel}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PendingChannelResponse.PendingChannel;
  return proto.lnrpc.PendingChannelResponse.PendingChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PendingChannelResponse.PendingChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PendingChannelResponse.PendingChannel}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteNodePub(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelPoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapacity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLocalBalance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRemoteBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PendingChannelResponse.PendingChannel} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRemoteNodePub();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getChannelPoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getCapacity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getLocalBalance();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = this.getRemoteBalance();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PendingChannelResponse.PendingChannel} The clone.
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PendingChannelResponse.PendingChannel} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string remote_node_pub = 1;
 * @return {string}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.getRemoteNodePub = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.setRemoteNodePub = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string channel_point = 2;
 * @return {string}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.getChannelPoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.setChannelPoint = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 capacity = 3;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.setCapacity = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 local_balance = 4;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.getLocalBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.setLocalBalance = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 remote_balance = 5;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.getRemoteBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.PendingChannel.prototype.setRemoteBalance = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.PendingChannelResponse.PendingOpenChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PendingChannelResponse.PendingOpenChannel.displayName = 'proto.lnrpc.PendingChannelResponse.PendingOpenChannel';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PendingChannelResponse.PendingOpenChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PendingChannelResponse.PendingOpenChannel} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: (f = msg.getChannel()) && proto.lnrpc.PendingChannelResponse.PendingChannel.toObject(includeInstance, f),
    confirmationHeight: msg.getConfirmationHeight(),
    blocksTillOpen: msg.getBlocksTillOpen(),
    commitFee: msg.getCommitFee(),
    commitWeight: msg.getCommitWeight(),
    feePerKw: msg.getFeePerKw()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PendingChannelResponse.PendingOpenChannel}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PendingChannelResponse.PendingOpenChannel;
  return proto.lnrpc.PendingChannelResponse.PendingOpenChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PendingChannelResponse.PendingOpenChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PendingChannelResponse.PendingOpenChannel}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.PendingChannelResponse.PendingChannel;
      reader.readMessage(value,proto.lnrpc.PendingChannelResponse.PendingChannel.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfirmationHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlocksTillOpen(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommitFee(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommitWeight(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeePerKw(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PendingChannelResponse.PendingOpenChannel} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.PendingChannelResponse.PendingChannel.serializeBinaryToWriter
    );
  }
  f = this.getConfirmationHeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getBlocksTillOpen();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getCommitFee();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = this.getCommitWeight();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = this.getFeePerKw();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PendingChannelResponse.PendingOpenChannel} The clone.
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PendingChannelResponse.PendingOpenChannel} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional PendingChannel channel = 1;
 * @return {proto.lnrpc.PendingChannelResponse.PendingChannel}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.getChannel = function() {
  return /** @type{proto.lnrpc.PendingChannelResponse.PendingChannel} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.PendingChannelResponse.PendingChannel, 1));
};


/** @param {proto.lnrpc.PendingChannelResponse.PendingChannel|undefined} value  */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.setChannel = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.clearChannel = function() {
  this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 confirmation_height = 2;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.getConfirmationHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.setConfirmationHeight = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 blocks_till_open = 3;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.getBlocksTillOpen = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.setBlocksTillOpen = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 commit_fee = 4;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.getCommitFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.setCommitFee = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 commit_weight = 5;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.getCommitWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.setCommitWeight = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 fee_per_kw = 6;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.getFeePerKw = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.PendingOpenChannel.prototype.setFeePerKw = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.PendingChannelResponse.ClosedChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PendingChannelResponse.ClosedChannel.displayName = 'proto.lnrpc.PendingChannelResponse.ClosedChannel';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PendingChannelResponse.ClosedChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PendingChannelResponse.ClosedChannel} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: (f = msg.getChannel()) && proto.lnrpc.PendingChannelResponse.PendingChannel.toObject(includeInstance, f),
    closingTxid: msg.getClosingTxid()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PendingChannelResponse.ClosedChannel}
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PendingChannelResponse.ClosedChannel;
  return proto.lnrpc.PendingChannelResponse.ClosedChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PendingChannelResponse.ClosedChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PendingChannelResponse.ClosedChannel}
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.PendingChannelResponse.PendingChannel;
      reader.readMessage(value,proto.lnrpc.PendingChannelResponse.PendingChannel.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClosingTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PendingChannelResponse.ClosedChannel} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.PendingChannelResponse.PendingChannel.serializeBinaryToWriter
    );
  }
  f = this.getClosingTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PendingChannelResponse.ClosedChannel} The clone.
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PendingChannelResponse.ClosedChannel} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional PendingChannel channel = 1;
 * @return {proto.lnrpc.PendingChannelResponse.PendingChannel}
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.getChannel = function() {
  return /** @type{proto.lnrpc.PendingChannelResponse.PendingChannel} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.PendingChannelResponse.PendingChannel, 1));
};


/** @param {proto.lnrpc.PendingChannelResponse.PendingChannel|undefined} value  */
proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.setChannel = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.clearChannel = function() {
  this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string closing_txid = 2;
 * @return {string}
 */
proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.getClosingTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.PendingChannelResponse.ClosedChannel.prototype.setClosingTxid = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.PendingChannelResponse.ForceClosedChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PendingChannelResponse.ForceClosedChannel.displayName = 'proto.lnrpc.PendingChannelResponse.ForceClosedChannel';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PendingChannelResponse.ForceClosedChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PendingChannelResponse.ForceClosedChannel} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: (f = msg.getChannel()) && proto.lnrpc.PendingChannelResponse.PendingChannel.toObject(includeInstance, f),
    closingTxid: msg.getClosingTxid(),
    limboBalance: msg.getLimboBalance(),
    maturityHeight: msg.getMaturityHeight(),
    blocksTilMaturity: msg.getBlocksTilMaturity()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PendingChannelResponse.ForceClosedChannel}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PendingChannelResponse.ForceClosedChannel;
  return proto.lnrpc.PendingChannelResponse.ForceClosedChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PendingChannelResponse.ForceClosedChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PendingChannelResponse.ForceClosedChannel}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.PendingChannelResponse.PendingChannel;
      reader.readMessage(value,proto.lnrpc.PendingChannelResponse.PendingChannel.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClosingTxid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimboBalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaturityHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlocksTilMaturity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PendingChannelResponse.ForceClosedChannel} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.PendingChannelResponse.PendingChannel.serializeBinaryToWriter
    );
  }
  f = this.getClosingTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getLimboBalance();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getMaturityHeight();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getBlocksTilMaturity();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PendingChannelResponse.ForceClosedChannel} The clone.
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PendingChannelResponse.ForceClosedChannel} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional PendingChannel channel = 1;
 * @return {proto.lnrpc.PendingChannelResponse.PendingChannel}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.getChannel = function() {
  return /** @type{proto.lnrpc.PendingChannelResponse.PendingChannel} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.PendingChannelResponse.PendingChannel, 1));
};


/** @param {proto.lnrpc.PendingChannelResponse.PendingChannel|undefined} value  */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.setChannel = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.clearChannel = function() {
  this.setChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string closing_txid = 2;
 * @return {string}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.getClosingTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.setClosingTxid = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 limbo_balance = 3;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.getLimboBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.setLimboBalance = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 maturity_height = 4;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.getMaturityHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.setMaturityHeight = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 blocks_til_maturity = 5;
 * @return {number}
 */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.getBlocksTilMaturity = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.PendingChannelResponse.ForceClosedChannel.prototype.setBlocksTilMaturity = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.WalletBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.WalletBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.WalletBalanceRequest.displayName = 'proto.lnrpc.WalletBalanceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.WalletBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.WalletBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.WalletBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.WalletBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    witnessOnly: msg.getWitnessOnly()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.WalletBalanceRequest}
 */
proto.lnrpc.WalletBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.WalletBalanceRequest;
  return proto.lnrpc.WalletBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.WalletBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.WalletBalanceRequest}
 */
proto.lnrpc.WalletBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWitnessOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.WalletBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.WalletBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.WalletBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.WalletBalanceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getWitnessOnly();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.WalletBalanceRequest} The clone.
 */
proto.lnrpc.WalletBalanceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.WalletBalanceRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool witness_only = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.WalletBalanceRequest.prototype.getWitnessOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.lnrpc.WalletBalanceRequest.prototype.setWitnessOnly = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.WalletBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.WalletBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.WalletBalanceResponse.displayName = 'proto.lnrpc.WalletBalanceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.WalletBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.WalletBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.WalletBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.WalletBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: msg.getBalance()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.WalletBalanceResponse}
 */
proto.lnrpc.WalletBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.WalletBalanceResponse;
  return proto.lnrpc.WalletBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.WalletBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.WalletBalanceResponse}
 */
proto.lnrpc.WalletBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.WalletBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.WalletBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.WalletBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.WalletBalanceResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.WalletBalanceResponse} The clone.
 */
proto.lnrpc.WalletBalanceResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.WalletBalanceResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 balance = 1;
 * @return {number}
 */
proto.lnrpc.WalletBalanceResponse.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.WalletBalanceResponse.prototype.setBalance = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChannelBalanceRequest.displayName = 'proto.lnrpc.ChannelBalanceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChannelBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelBalanceRequest}
 */
proto.lnrpc.ChannelBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelBalanceRequest;
  return proto.lnrpc.ChannelBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelBalanceRequest}
 */
proto.lnrpc.ChannelBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelBalanceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChannelBalanceRequest} The clone.
 */
proto.lnrpc.ChannelBalanceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChannelBalanceRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChannelBalanceResponse.displayName = 'proto.lnrpc.ChannelBalanceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChannelBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: msg.getBalance()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelBalanceResponse}
 */
proto.lnrpc.ChannelBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelBalanceResponse;
  return proto.lnrpc.ChannelBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelBalanceResponse}
 */
proto.lnrpc.ChannelBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelBalanceResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChannelBalanceResponse} The clone.
 */
proto.lnrpc.ChannelBalanceResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChannelBalanceResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 balance = 1;
 * @return {number}
 */
proto.lnrpc.ChannelBalanceResponse.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.ChannelBalanceResponse.prototype.setBalance = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.QueryRoutesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.QueryRoutesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.QueryRoutesRequest.displayName = 'proto.lnrpc.QueryRoutesRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.QueryRoutesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.QueryRoutesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.QueryRoutesRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.QueryRoutesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: msg.getPubKey(),
    amt: msg.getAmt()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.QueryRoutesRequest}
 */
proto.lnrpc.QueryRoutesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.QueryRoutesRequest;
  return proto.lnrpc.QueryRoutesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.QueryRoutesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.QueryRoutesRequest}
 */
proto.lnrpc.QueryRoutesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.QueryRoutesRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.QueryRoutesRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.QueryRoutesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.QueryRoutesRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPubKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getAmt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.QueryRoutesRequest} The clone.
 */
proto.lnrpc.QueryRoutesRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.QueryRoutesRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string pub_key = 1;
 * @return {string}
 */
proto.lnrpc.QueryRoutesRequest.prototype.getPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.QueryRoutesRequest.prototype.setPubKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 amt = 2;
 * @return {number}
 */
proto.lnrpc.QueryRoutesRequest.prototype.getAmt = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.QueryRoutesRequest.prototype.setAmt = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.QueryRoutesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.QueryRoutesResponse.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.QueryRoutesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.QueryRoutesResponse.displayName = 'proto.lnrpc.QueryRoutesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.QueryRoutesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.QueryRoutesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.QueryRoutesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.QueryRoutesResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.QueryRoutesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    routesList: jspb.Message.toObjectList(msg.getRoutesList(),
    proto.lnrpc.Route.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.QueryRoutesResponse}
 */
proto.lnrpc.QueryRoutesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.QueryRoutesResponse;
  return proto.lnrpc.QueryRoutesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.QueryRoutesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.QueryRoutesResponse}
 */
proto.lnrpc.QueryRoutesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.Route;
      reader.readMessage(value,proto.lnrpc.Route.deserializeBinaryFromReader);
      msg.getRoutesList().push(value);
      msg.setRoutesList(msg.getRoutesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.QueryRoutesResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.QueryRoutesResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.QueryRoutesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.QueryRoutesResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoutesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lnrpc.Route.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.QueryRoutesResponse} The clone.
 */
proto.lnrpc.QueryRoutesResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.QueryRoutesResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Route routes = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.Route>}
 */
proto.lnrpc.QueryRoutesResponse.prototype.getRoutesList = function() {
  return /** @type{!Array.<!proto.lnrpc.Route>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.Route, 1));
};


/** @param {Array.<!proto.lnrpc.Route>} value  */
proto.lnrpc.QueryRoutesResponse.prototype.setRoutesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.lnrpc.QueryRoutesResponse.prototype.clearRoutesList = function() {
  this.setRoutesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.Hop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.Hop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.Hop.displayName = 'proto.lnrpc.Hop';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.Hop.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.Hop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.Hop} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.Hop.toObject = function(includeInstance, msg) {
  var f, obj = {
    chanId: msg.getChanId(),
    chanCapacity: msg.getChanCapacity(),
    amtToForward: msg.getAmtToForward(),
    fee: msg.getFee()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.Hop}
 */
proto.lnrpc.Hop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.Hop;
  return proto.lnrpc.Hop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.Hop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.Hop}
 */
proto.lnrpc.Hop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChanId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChanCapacity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmtToForward(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.Hop} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Hop.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.Hop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Hop.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChanId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getChanCapacity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getAmtToForward();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getFee();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.Hop} The clone.
 */
proto.lnrpc.Hop.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.Hop} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 chan_id = 1;
 * @return {number}
 */
proto.lnrpc.Hop.prototype.getChanId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.Hop.prototype.setChanId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 chan_capacity = 2;
 * @return {number}
 */
proto.lnrpc.Hop.prototype.getChanCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.Hop.prototype.setChanCapacity = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 amt_to_forward = 3;
 * @return {number}
 */
proto.lnrpc.Hop.prototype.getAmtToForward = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.Hop.prototype.setAmtToForward = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 fee = 4;
 * @return {number}
 */
proto.lnrpc.Hop.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.Hop.prototype.setFee = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.Route = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.Route.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.Route, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.Route.displayName = 'proto.lnrpc.Route';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.Route.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.Route.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.Route.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.Route} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.Route.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalTimeLock: msg.getTotalTimeLock(),
    totalFees: msg.getTotalFees(),
    totalAmt: msg.getTotalAmt(),
    hopsList: jspb.Message.toObjectList(msg.getHopsList(),
    proto.lnrpc.Hop.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.Route}
 */
proto.lnrpc.Route.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.Route;
  return proto.lnrpc.Route.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.Route} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.Route}
 */
proto.lnrpc.Route.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalTimeLock(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalFees(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalAmt(value);
      break;
    case 4:
      var value = new proto.lnrpc.Hop;
      reader.readMessage(value,proto.lnrpc.Hop.deserializeBinaryFromReader);
      msg.getHopsList().push(value);
      msg.setHopsList(msg.getHopsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.Route} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Route.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.Route.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Route.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTotalTimeLock();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getTotalFees();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getTotalAmt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getHopsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.lnrpc.Hop.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.Route} The clone.
 */
proto.lnrpc.Route.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.Route} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 total_time_lock = 1;
 * @return {number}
 */
proto.lnrpc.Route.prototype.getTotalTimeLock = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.Route.prototype.setTotalTimeLock = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 total_fees = 2;
 * @return {number}
 */
proto.lnrpc.Route.prototype.getTotalFees = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.Route.prototype.setTotalFees = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 total_amt = 3;
 * @return {number}
 */
proto.lnrpc.Route.prototype.getTotalAmt = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.Route.prototype.setTotalAmt = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated Hop hops = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.Hop>}
 */
proto.lnrpc.Route.prototype.getHopsList = function() {
  return /** @type{!Array.<!proto.lnrpc.Hop>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.Hop, 4));
};


/** @param {Array.<!proto.lnrpc.Hop>} value  */
proto.lnrpc.Route.prototype.setHopsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.lnrpc.Route.prototype.clearHopsList = function() {
  this.setHopsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.NodeInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.NodeInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.NodeInfoRequest.displayName = 'proto.lnrpc.NodeInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.NodeInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.NodeInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.NodeInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.NodeInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: msg.getPubKey()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.NodeInfoRequest}
 */
proto.lnrpc.NodeInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.NodeInfoRequest;
  return proto.lnrpc.NodeInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.NodeInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.NodeInfoRequest}
 */
proto.lnrpc.NodeInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.NodeInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NodeInfoRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.NodeInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NodeInfoRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPubKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.NodeInfoRequest} The clone.
 */
proto.lnrpc.NodeInfoRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.NodeInfoRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string pub_key = 1;
 * @return {string}
 */
proto.lnrpc.NodeInfoRequest.prototype.getPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.NodeInfoRequest.prototype.setPubKey = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.NodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.NodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.NodeInfo.displayName = 'proto.lnrpc.NodeInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.NodeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.NodeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.NodeInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.NodeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    node: (f = msg.getNode()) && proto.lnrpc.LightningNode.toObject(includeInstance, f),
    numChannels: msg.getNumChannels(),
    totalCapacity: msg.getTotalCapacity()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.NodeInfo}
 */
proto.lnrpc.NodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.NodeInfo;
  return proto.lnrpc.NodeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.NodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.NodeInfo}
 */
proto.lnrpc.NodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.LightningNode;
      reader.readMessage(value,proto.lnrpc.LightningNode.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumChannels(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCapacity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.NodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NodeInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.NodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NodeInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.lnrpc.LightningNode.serializeBinaryToWriter
    );
  }
  f = this.getNumChannels();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getTotalCapacity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.NodeInfo} The clone.
 */
proto.lnrpc.NodeInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.NodeInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional LightningNode node = 1;
 * @return {proto.lnrpc.LightningNode}
 */
proto.lnrpc.NodeInfo.prototype.getNode = function() {
  return /** @type{proto.lnrpc.LightningNode} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.LightningNode, 1));
};


/** @param {proto.lnrpc.LightningNode|undefined} value  */
proto.lnrpc.NodeInfo.prototype.setNode = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.lnrpc.NodeInfo.prototype.clearNode = function() {
  this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.NodeInfo.prototype.hasNode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 num_channels = 2;
 * @return {number}
 */
proto.lnrpc.NodeInfo.prototype.getNumChannels = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.NodeInfo.prototype.setNumChannels = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 total_capacity = 3;
 * @return {number}
 */
proto.lnrpc.NodeInfo.prototype.getTotalCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.NodeInfo.prototype.setTotalCapacity = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.LightningNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.LightningNode.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.LightningNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.LightningNode.displayName = 'proto.lnrpc.LightningNode';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.LightningNode.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.LightningNode.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.LightningNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.LightningNode} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.LightningNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastUpdate: msg.getLastUpdate(),
    pubKey: msg.getPubKey(),
    alias: msg.getAlias(),
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    proto.lnrpc.NodeAddress.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.LightningNode}
 */
proto.lnrpc.LightningNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.LightningNode;
  return proto.lnrpc.LightningNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.LightningNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.LightningNode}
 */
proto.lnrpc.LightningNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastUpdate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 4:
      var value = new proto.lnrpc.NodeAddress;
      reader.readMessage(value,proto.lnrpc.NodeAddress.deserializeBinaryFromReader);
      msg.getAddressesList().push(value);
      msg.setAddressesList(msg.getAddressesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.LightningNode} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.LightningNode.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.LightningNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.LightningNode.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLastUpdate();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPubKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getAlias();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.lnrpc.NodeAddress.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.LightningNode} The clone.
 */
proto.lnrpc.LightningNode.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.LightningNode} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 last_update = 1;
 * @return {number}
 */
proto.lnrpc.LightningNode.prototype.getLastUpdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.LightningNode.prototype.setLastUpdate = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string pub_key = 2;
 * @return {string}
 */
proto.lnrpc.LightningNode.prototype.getPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.LightningNode.prototype.setPubKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string alias = 3;
 * @return {string}
 */
proto.lnrpc.LightningNode.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.lnrpc.LightningNode.prototype.setAlias = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated NodeAddress addresses = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.NodeAddress>}
 */
proto.lnrpc.LightningNode.prototype.getAddressesList = function() {
  return /** @type{!Array.<!proto.lnrpc.NodeAddress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.NodeAddress, 4));
};


/** @param {Array.<!proto.lnrpc.NodeAddress>} value  */
proto.lnrpc.LightningNode.prototype.setAddressesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.lnrpc.LightningNode.prototype.clearAddressesList = function() {
  this.setAddressesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.NodeAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.NodeAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.NodeAddress.displayName = 'proto.lnrpc.NodeAddress';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.NodeAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.NodeAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.NodeAddress} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.NodeAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    network: msg.getNetwork(),
    addr: msg.getAddr()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.NodeAddress}
 */
proto.lnrpc.NodeAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.NodeAddress;
  return proto.lnrpc.NodeAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.NodeAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.NodeAddress}
 */
proto.lnrpc.NodeAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.NodeAddress} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NodeAddress.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.NodeAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NodeAddress.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.NodeAddress} The clone.
 */
proto.lnrpc.NodeAddress.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.NodeAddress} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string network = 1;
 * @return {string}
 */
proto.lnrpc.NodeAddress.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.NodeAddress.prototype.setNetwork = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string addr = 2;
 * @return {string}
 */
proto.lnrpc.NodeAddress.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.NodeAddress.prototype.setAddr = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.RoutingPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.RoutingPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.RoutingPolicy.displayName = 'proto.lnrpc.RoutingPolicy';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.RoutingPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.RoutingPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.RoutingPolicy} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.RoutingPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeLockDelta: msg.getTimeLockDelta(),
    minHtlc: msg.getMinHtlc(),
    feeBaseMsat: msg.getFeeBaseMsat(),
    feeRateMilliMsat: msg.getFeeRateMilliMsat()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.RoutingPolicy}
 */
proto.lnrpc.RoutingPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.RoutingPolicy;
  return proto.lnrpc.RoutingPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.RoutingPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.RoutingPolicy}
 */
proto.lnrpc.RoutingPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeLockDelta(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinHtlc(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeeBaseMsat(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeeRateMilliMsat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.RoutingPolicy} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.RoutingPolicy.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.RoutingPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.RoutingPolicy.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTimeLockDelta();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getMinHtlc();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getFeeBaseMsat();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getFeeRateMilliMsat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.RoutingPolicy} The clone.
 */
proto.lnrpc.RoutingPolicy.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.RoutingPolicy} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 time_lock_delta = 1;
 * @return {number}
 */
proto.lnrpc.RoutingPolicy.prototype.getTimeLockDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.RoutingPolicy.prototype.setTimeLockDelta = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 min_htlc = 2;
 * @return {number}
 */
proto.lnrpc.RoutingPolicy.prototype.getMinHtlc = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.RoutingPolicy.prototype.setMinHtlc = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 fee_base_msat = 3;
 * @return {number}
 */
proto.lnrpc.RoutingPolicy.prototype.getFeeBaseMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.RoutingPolicy.prototype.setFeeBaseMsat = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 fee_rate_milli_msat = 4;
 * @return {number}
 */
proto.lnrpc.RoutingPolicy.prototype.getFeeRateMilliMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.RoutingPolicy.prototype.setFeeRateMilliMsat = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelEdge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelEdge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChannelEdge.displayName = 'proto.lnrpc.ChannelEdge';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelEdge.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelEdge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelEdge} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChannelEdge.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelId: msg.getChannelId(),
    chanPoint: msg.getChanPoint(),
    lastUpdate: msg.getLastUpdate(),
    node1Pub: msg.getNode1Pub(),
    node2Pub: msg.getNode2Pub(),
    capacity: msg.getCapacity(),
    node1Policy: (f = msg.getNode1Policy()) && proto.lnrpc.RoutingPolicy.toObject(includeInstance, f),
    node2Policy: (f = msg.getNode2Policy()) && proto.lnrpc.RoutingPolicy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelEdge}
 */
proto.lnrpc.ChannelEdge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelEdge;
  return proto.lnrpc.ChannelEdge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelEdge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelEdge}
 */
proto.lnrpc.ChannelEdge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChannelId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChanPoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastUpdate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNode1Pub(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNode2Pub(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapacity(value);
      break;
    case 7:
      var value = new proto.lnrpc.RoutingPolicy;
      reader.readMessage(value,proto.lnrpc.RoutingPolicy.deserializeBinaryFromReader);
      msg.setNode1Policy(value);
      break;
    case 8:
      var value = new proto.lnrpc.RoutingPolicy;
      reader.readMessage(value,proto.lnrpc.RoutingPolicy.deserializeBinaryFromReader);
      msg.setNode2Policy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelEdge} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelEdge.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelEdge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelEdge.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannelId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getChanPoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getLastUpdate();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getNode1Pub();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getNode2Pub();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getCapacity();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = this.getNode1Policy();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.lnrpc.RoutingPolicy.serializeBinaryToWriter
    );
  }
  f = this.getNode2Policy();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.lnrpc.RoutingPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChannelEdge} The clone.
 */
proto.lnrpc.ChannelEdge.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChannelEdge} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 channel_id = 1;
 * @return {number}
 */
proto.lnrpc.ChannelEdge.prototype.getChannelId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.ChannelEdge.prototype.setChannelId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string chan_point = 2;
 * @return {string}
 */
proto.lnrpc.ChannelEdge.prototype.getChanPoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.ChannelEdge.prototype.setChanPoint = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 last_update = 3;
 * @return {number}
 */
proto.lnrpc.ChannelEdge.prototype.getLastUpdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.ChannelEdge.prototype.setLastUpdate = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string node1_pub = 4;
 * @return {string}
 */
proto.lnrpc.ChannelEdge.prototype.getNode1Pub = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.lnrpc.ChannelEdge.prototype.setNode1Pub = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string node2_pub = 5;
 * @return {string}
 */
proto.lnrpc.ChannelEdge.prototype.getNode2Pub = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.lnrpc.ChannelEdge.prototype.setNode2Pub = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 capacity = 6;
 * @return {number}
 */
proto.lnrpc.ChannelEdge.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.lnrpc.ChannelEdge.prototype.setCapacity = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional RoutingPolicy node1_policy = 7;
 * @return {proto.lnrpc.RoutingPolicy}
 */
proto.lnrpc.ChannelEdge.prototype.getNode1Policy = function() {
  return /** @type{proto.lnrpc.RoutingPolicy} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.RoutingPolicy, 7));
};


/** @param {proto.lnrpc.RoutingPolicy|undefined} value  */
proto.lnrpc.ChannelEdge.prototype.setNode1Policy = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.lnrpc.ChannelEdge.prototype.clearNode1Policy = function() {
  this.setNode1Policy(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.ChannelEdge.prototype.hasNode1Policy = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RoutingPolicy node2_policy = 8;
 * @return {proto.lnrpc.RoutingPolicy}
 */
proto.lnrpc.ChannelEdge.prototype.getNode2Policy = function() {
  return /** @type{proto.lnrpc.RoutingPolicy} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.RoutingPolicy, 8));
};


/** @param {proto.lnrpc.RoutingPolicy|undefined} value  */
proto.lnrpc.ChannelEdge.prototype.setNode2Policy = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.lnrpc.ChannelEdge.prototype.clearNode2Policy = function() {
  this.setNode2Policy(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.ChannelEdge.prototype.hasNode2Policy = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChannelGraphRequest.displayName = 'proto.lnrpc.ChannelGraphRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChannelGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelGraphRequest}
 */
proto.lnrpc.ChannelGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelGraphRequest;
  return proto.lnrpc.ChannelGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelGraphRequest}
 */
proto.lnrpc.ChannelGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelGraphRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelGraphRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChannelGraphRequest} The clone.
 */
proto.lnrpc.ChannelGraphRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChannelGraphRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelGraph = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.ChannelGraph.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.ChannelGraph, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChannelGraph.displayName = 'proto.lnrpc.ChannelGraph';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.ChannelGraph.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelGraph.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelGraph.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelGraph} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChannelGraph.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.lnrpc.LightningNode.toObject, includeInstance),
    edgesList: jspb.Message.toObjectList(msg.getEdgesList(),
    proto.lnrpc.ChannelEdge.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelGraph}
 */
proto.lnrpc.ChannelGraph.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelGraph;
  return proto.lnrpc.ChannelGraph.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelGraph} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelGraph}
 */
proto.lnrpc.ChannelGraph.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.LightningNode;
      reader.readMessage(value,proto.lnrpc.LightningNode.deserializeBinaryFromReader);
      msg.getNodesList().push(value);
      msg.setNodesList(msg.getNodesList());
      break;
    case 2:
      var value = new proto.lnrpc.ChannelEdge;
      reader.readMessage(value,proto.lnrpc.ChannelEdge.deserializeBinaryFromReader);
      msg.getEdgesList().push(value);
      msg.setEdgesList(msg.getEdgesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelGraph} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelGraph.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelGraph.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelGraph.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lnrpc.LightningNode.serializeBinaryToWriter
    );
  }
  f = this.getEdgesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.lnrpc.ChannelEdge.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChannelGraph} The clone.
 */
proto.lnrpc.ChannelGraph.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChannelGraph} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated LightningNode nodes = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.LightningNode>}
 */
proto.lnrpc.ChannelGraph.prototype.getNodesList = function() {
  return /** @type{!Array.<!proto.lnrpc.LightningNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.LightningNode, 1));
};


/** @param {Array.<!proto.lnrpc.LightningNode>} value  */
proto.lnrpc.ChannelGraph.prototype.setNodesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.lnrpc.ChannelGraph.prototype.clearNodesList = function() {
  this.setNodesList([]);
};


/**
 * repeated ChannelEdge edges = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.ChannelEdge>}
 */
proto.lnrpc.ChannelGraph.prototype.getEdgesList = function() {
  return /** @type{!Array.<!proto.lnrpc.ChannelEdge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.ChannelEdge, 2));
};


/** @param {Array.<!proto.lnrpc.ChannelEdge>} value  */
proto.lnrpc.ChannelGraph.prototype.setEdgesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.lnrpc.ChannelGraph.prototype.clearEdgesList = function() {
  this.setEdgesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChanInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChanInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChanInfoRequest.displayName = 'proto.lnrpc.ChanInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChanInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChanInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChanInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChanInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chanId: msg.getChanId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChanInfoRequest}
 */
proto.lnrpc.ChanInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChanInfoRequest;
  return proto.lnrpc.ChanInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChanInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChanInfoRequest}
 */
proto.lnrpc.ChanInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChanId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChanInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChanInfoRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChanInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChanInfoRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChanId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChanInfoRequest} The clone.
 */
proto.lnrpc.ChanInfoRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChanInfoRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 chan_id = 1;
 * @return {number}
 */
proto.lnrpc.ChanInfoRequest.prototype.getChanId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.ChanInfoRequest.prototype.setChanId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.NetworkInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.NetworkInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.NetworkInfoRequest.displayName = 'proto.lnrpc.NetworkInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.NetworkInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.NetworkInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.NetworkInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.NetworkInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.NetworkInfoRequest}
 */
proto.lnrpc.NetworkInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.NetworkInfoRequest;
  return proto.lnrpc.NetworkInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.NetworkInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.NetworkInfoRequest}
 */
proto.lnrpc.NetworkInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.NetworkInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NetworkInfoRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.NetworkInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NetworkInfoRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.NetworkInfoRequest} The clone.
 */
proto.lnrpc.NetworkInfoRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.NetworkInfoRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.NetworkInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.NetworkInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.NetworkInfo.displayName = 'proto.lnrpc.NetworkInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.NetworkInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.NetworkInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.NetworkInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.NetworkInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    graphDiameter: msg.getGraphDiameter(),
    avgOutDegree: msg.getAvgOutDegree(),
    maxOutDegree: msg.getMaxOutDegree(),
    numNodes: msg.getNumNodes(),
    numChannels: msg.getNumChannels(),
    totalNetworkCapacity: msg.getTotalNetworkCapacity(),
    avgChannelSize: msg.getAvgChannelSize(),
    minChannelSize: msg.getMinChannelSize(),
    maxChannelSize: msg.getMaxChannelSize()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.NetworkInfo}
 */
proto.lnrpc.NetworkInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.NetworkInfo;
  return proto.lnrpc.NetworkInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.NetworkInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.NetworkInfo}
 */
proto.lnrpc.NetworkInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGraphDiameter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgOutDegree(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxOutDegree(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumNodes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumChannels(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalNetworkCapacity(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgChannelSize(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinChannelSize(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxChannelSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.NetworkInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NetworkInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.NetworkInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NetworkInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGraphDiameter();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getAvgOutDegree();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = this.getMaxOutDegree();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getNumNodes();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getNumChannels();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getTotalNetworkCapacity();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = this.getAvgChannelSize();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = this.getMinChannelSize();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = this.getMaxChannelSize();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.NetworkInfo} The clone.
 */
proto.lnrpc.NetworkInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.NetworkInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 graph_diameter = 1;
 * @return {number}
 */
proto.lnrpc.NetworkInfo.prototype.getGraphDiameter = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.NetworkInfo.prototype.setGraphDiameter = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional double avg_out_degree = 2;
 * @return {number}
 */
proto.lnrpc.NetworkInfo.prototype.getAvgOutDegree = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.NetworkInfo.prototype.setAvgOutDegree = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 max_out_degree = 3;
 * @return {number}
 */
proto.lnrpc.NetworkInfo.prototype.getMaxOutDegree = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.NetworkInfo.prototype.setMaxOutDegree = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 num_nodes = 4;
 * @return {number}
 */
proto.lnrpc.NetworkInfo.prototype.getNumNodes = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.lnrpc.NetworkInfo.prototype.setNumNodes = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 num_channels = 5;
 * @return {number}
 */
proto.lnrpc.NetworkInfo.prototype.getNumChannels = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.NetworkInfo.prototype.setNumChannels = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 total_network_capacity = 6;
 * @return {number}
 */
proto.lnrpc.NetworkInfo.prototype.getTotalNetworkCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.lnrpc.NetworkInfo.prototype.setTotalNetworkCapacity = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional double avg_channel_size = 7;
 * @return {number}
 */
proto.lnrpc.NetworkInfo.prototype.getAvgChannelSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.lnrpc.NetworkInfo.prototype.setAvgChannelSize = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int64 min_channel_size = 8;
 * @return {number}
 */
proto.lnrpc.NetworkInfo.prototype.getMinChannelSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 8, 0));
};


/** @param {number} value  */
proto.lnrpc.NetworkInfo.prototype.setMinChannelSize = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional int64 max_channel_size = 9;
 * @return {number}
 */
proto.lnrpc.NetworkInfo.prototype.getMaxChannelSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 9, 0));
};


/** @param {number} value  */
proto.lnrpc.NetworkInfo.prototype.setMaxChannelSize = function(value) {
  jspb.Message.setField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.StopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.StopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.StopRequest.displayName = 'proto.lnrpc.StopRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.StopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.StopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.StopRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.StopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.StopRequest}
 */
proto.lnrpc.StopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.StopRequest;
  return proto.lnrpc.StopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.StopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.StopRequest}
 */
proto.lnrpc.StopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.StopRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.StopRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.StopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.StopRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.StopRequest} The clone.
 */
proto.lnrpc.StopRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.StopRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.StopResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.StopResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.StopResponse.displayName = 'proto.lnrpc.StopResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.StopResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.StopResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.StopResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.StopResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.StopResponse}
 */
proto.lnrpc.StopResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.StopResponse;
  return proto.lnrpc.StopResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.StopResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.StopResponse}
 */
proto.lnrpc.StopResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.StopResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.StopResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.StopResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.StopResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.StopResponse} The clone.
 */
proto.lnrpc.StopResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.StopResponse} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.GraphTopologySubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.GraphTopologySubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.GraphTopologySubscription.displayName = 'proto.lnrpc.GraphTopologySubscription';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.GraphTopologySubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.GraphTopologySubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.GraphTopologySubscription} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.GraphTopologySubscription.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.GraphTopologySubscription}
 */
proto.lnrpc.GraphTopologySubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.GraphTopologySubscription;
  return proto.lnrpc.GraphTopologySubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.GraphTopologySubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.GraphTopologySubscription}
 */
proto.lnrpc.GraphTopologySubscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.GraphTopologySubscription} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GraphTopologySubscription.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.GraphTopologySubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GraphTopologySubscription.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.GraphTopologySubscription} The clone.
 */
proto.lnrpc.GraphTopologySubscription.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.GraphTopologySubscription} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.GraphTopologyUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.GraphTopologyUpdate.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.GraphTopologyUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.GraphTopologyUpdate.displayName = 'proto.lnrpc.GraphTopologyUpdate';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.GraphTopologyUpdate.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.GraphTopologyUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.GraphTopologyUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.GraphTopologyUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.GraphTopologyUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeUpdatesList: jspb.Message.toObjectList(msg.getNodeUpdatesList(),
    proto.lnrpc.NodeUpdate.toObject, includeInstance),
    channelUpdatesList: jspb.Message.toObjectList(msg.getChannelUpdatesList(),
    proto.lnrpc.ChannelEdgeUpdate.toObject, includeInstance),
    closedChansList: jspb.Message.toObjectList(msg.getClosedChansList(),
    proto.lnrpc.ClosedChannelUpdate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.GraphTopologyUpdate}
 */
proto.lnrpc.GraphTopologyUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.GraphTopologyUpdate;
  return proto.lnrpc.GraphTopologyUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.GraphTopologyUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.GraphTopologyUpdate}
 */
proto.lnrpc.GraphTopologyUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.NodeUpdate;
      reader.readMessage(value,proto.lnrpc.NodeUpdate.deserializeBinaryFromReader);
      msg.getNodeUpdatesList().push(value);
      msg.setNodeUpdatesList(msg.getNodeUpdatesList());
      break;
    case 2:
      var value = new proto.lnrpc.ChannelEdgeUpdate;
      reader.readMessage(value,proto.lnrpc.ChannelEdgeUpdate.deserializeBinaryFromReader);
      msg.getChannelUpdatesList().push(value);
      msg.setChannelUpdatesList(msg.getChannelUpdatesList());
      break;
    case 3:
      var value = new proto.lnrpc.ClosedChannelUpdate;
      reader.readMessage(value,proto.lnrpc.ClosedChannelUpdate.deserializeBinaryFromReader);
      msg.getClosedChansList().push(value);
      msg.setClosedChansList(msg.getClosedChansList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.GraphTopologyUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GraphTopologyUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.GraphTopologyUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.GraphTopologyUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNodeUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lnrpc.NodeUpdate.serializeBinaryToWriter
    );
  }
  f = this.getChannelUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.lnrpc.ChannelEdgeUpdate.serializeBinaryToWriter
    );
  }
  f = this.getClosedChansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.lnrpc.ClosedChannelUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.GraphTopologyUpdate} The clone.
 */
proto.lnrpc.GraphTopologyUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.GraphTopologyUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated NodeUpdate node_updates = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.NodeUpdate>}
 */
proto.lnrpc.GraphTopologyUpdate.prototype.getNodeUpdatesList = function() {
  return /** @type{!Array.<!proto.lnrpc.NodeUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.NodeUpdate, 1));
};


/** @param {Array.<!proto.lnrpc.NodeUpdate>} value  */
proto.lnrpc.GraphTopologyUpdate.prototype.setNodeUpdatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.lnrpc.GraphTopologyUpdate.prototype.clearNodeUpdatesList = function() {
  this.setNodeUpdatesList([]);
};


/**
 * repeated ChannelEdgeUpdate channel_updates = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.ChannelEdgeUpdate>}
 */
proto.lnrpc.GraphTopologyUpdate.prototype.getChannelUpdatesList = function() {
  return /** @type{!Array.<!proto.lnrpc.ChannelEdgeUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.ChannelEdgeUpdate, 2));
};


/** @param {Array.<!proto.lnrpc.ChannelEdgeUpdate>} value  */
proto.lnrpc.GraphTopologyUpdate.prototype.setChannelUpdatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.lnrpc.GraphTopologyUpdate.prototype.clearChannelUpdatesList = function() {
  this.setChannelUpdatesList([]);
};


/**
 * repeated ClosedChannelUpdate closed_chans = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.ClosedChannelUpdate>}
 */
proto.lnrpc.GraphTopologyUpdate.prototype.getClosedChansList = function() {
  return /** @type{!Array.<!proto.lnrpc.ClosedChannelUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.ClosedChannelUpdate, 3));
};


/** @param {Array.<!proto.lnrpc.ClosedChannelUpdate>} value  */
proto.lnrpc.GraphTopologyUpdate.prototype.setClosedChansList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.lnrpc.GraphTopologyUpdate.prototype.clearClosedChansList = function() {
  this.setClosedChansList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.NodeUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.NodeUpdate.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.NodeUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.NodeUpdate.displayName = 'proto.lnrpc.NodeUpdate';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.NodeUpdate.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.NodeUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.NodeUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.NodeUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.NodeUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: jspb.Message.getField(msg, 1),
    identityKey: msg.getIdentityKey(),
    globalFeatures: msg.getGlobalFeatures_asB64(),
    alias: msg.getAlias()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.NodeUpdate}
 */
proto.lnrpc.NodeUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.NodeUpdate;
  return proto.lnrpc.NodeUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.NodeUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.NodeUpdate}
 */
proto.lnrpc.NodeUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.getAddressesList().push(value);
      msg.setAddressesList(msg.getAddressesList());
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setGlobalFeatures(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.NodeUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NodeUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.NodeUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.NodeUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = this.getIdentityKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getGlobalFeatures_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = this.getAlias();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.NodeUpdate} The clone.
 */
proto.lnrpc.NodeUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.NodeUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated string addresses = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.lnrpc.NodeUpdate.prototype.getAddressesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {Array.<string>} value  */
proto.lnrpc.NodeUpdate.prototype.setAddressesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


proto.lnrpc.NodeUpdate.prototype.clearAddressesList = function() {
  jspb.Message.setField(this, 1, []);
};


/**
 * optional string identity_key = 2;
 * @return {string}
 */
proto.lnrpc.NodeUpdate.prototype.getIdentityKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.NodeUpdate.prototype.setIdentityKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes global_features = 3;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.NodeUpdate.prototype.getGlobalFeatures = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/**
 * optional bytes global_features = 3;
 * This is a type-conversion wrapper around `getGlobalFeatures()`
 * @return {string}
 */
proto.lnrpc.NodeUpdate.prototype.getGlobalFeatures_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getGlobalFeatures()));
};


/**
 * optional bytes global_features = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGlobalFeatures()`
 * @return {!Uint8Array}
 */
proto.lnrpc.NodeUpdate.prototype.getGlobalFeatures_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getGlobalFeatures()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.NodeUpdate.prototype.setGlobalFeatures = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string alias = 4;
 * @return {string}
 */
proto.lnrpc.NodeUpdate.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.lnrpc.NodeUpdate.prototype.setAlias = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ChannelEdgeUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ChannelEdgeUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ChannelEdgeUpdate.displayName = 'proto.lnrpc.ChannelEdgeUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ChannelEdgeUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ChannelEdgeUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ChannelEdgeUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    chanId: msg.getChanId(),
    chanPoint: (f = msg.getChanPoint()) && proto.lnrpc.ChannelPoint.toObject(includeInstance, f),
    capacity: msg.getCapacity(),
    routingPolicy: (f = msg.getRoutingPolicy()) && proto.lnrpc.RoutingPolicy.toObject(includeInstance, f),
    advertisingNode: msg.getAdvertisingNode(),
    connectingNode: msg.getConnectingNode()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ChannelEdgeUpdate}
 */
proto.lnrpc.ChannelEdgeUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ChannelEdgeUpdate;
  return proto.lnrpc.ChannelEdgeUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ChannelEdgeUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ChannelEdgeUpdate}
 */
proto.lnrpc.ChannelEdgeUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChanId(value);
      break;
    case 2:
      var value = new proto.lnrpc.ChannelPoint;
      reader.readMessage(value,proto.lnrpc.ChannelPoint.deserializeBinaryFromReader);
      msg.setChanPoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapacity(value);
      break;
    case 4:
      var value = new proto.lnrpc.RoutingPolicy;
      reader.readMessage(value,proto.lnrpc.RoutingPolicy.deserializeBinaryFromReader);
      msg.setRoutingPolicy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdvertisingNode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectingNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ChannelEdgeUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelEdgeUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChanId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getChanPoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lnrpc.ChannelPoint.serializeBinaryToWriter
    );
  }
  f = this.getCapacity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getRoutingPolicy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.lnrpc.RoutingPolicy.serializeBinaryToWriter
    );
  }
  f = this.getAdvertisingNode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getConnectingNode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ChannelEdgeUpdate} The clone.
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ChannelEdgeUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 chan_id = 1;
 * @return {number}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.getChanId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.ChannelEdgeUpdate.prototype.setChanId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional ChannelPoint chan_point = 2;
 * @return {proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.getChanPoint = function() {
  return /** @type{proto.lnrpc.ChannelPoint} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ChannelPoint, 2));
};


/** @param {proto.lnrpc.ChannelPoint|undefined} value  */
proto.lnrpc.ChannelEdgeUpdate.prototype.setChanPoint = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.lnrpc.ChannelEdgeUpdate.prototype.clearChanPoint = function() {
  this.setChanPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.hasChanPoint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 capacity = 3;
 * @return {number}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.ChannelEdgeUpdate.prototype.setCapacity = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional RoutingPolicy routing_policy = 4;
 * @return {proto.lnrpc.RoutingPolicy}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.getRoutingPolicy = function() {
  return /** @type{proto.lnrpc.RoutingPolicy} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.RoutingPolicy, 4));
};


/** @param {proto.lnrpc.RoutingPolicy|undefined} value  */
proto.lnrpc.ChannelEdgeUpdate.prototype.setRoutingPolicy = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.lnrpc.ChannelEdgeUpdate.prototype.clearRoutingPolicy = function() {
  this.setRoutingPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.hasRoutingPolicy = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string advertising_node = 5;
 * @return {string}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.getAdvertisingNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.lnrpc.ChannelEdgeUpdate.prototype.setAdvertisingNode = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string connecting_node = 6;
 * @return {string}
 */
proto.lnrpc.ChannelEdgeUpdate.prototype.getConnectingNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.lnrpc.ChannelEdgeUpdate.prototype.setConnectingNode = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ClosedChannelUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ClosedChannelUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ClosedChannelUpdate.displayName = 'proto.lnrpc.ClosedChannelUpdate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ClosedChannelUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ClosedChannelUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ClosedChannelUpdate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ClosedChannelUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    chanId: msg.getChanId(),
    capacity: msg.getCapacity(),
    closedHeight: msg.getClosedHeight(),
    chanPoint: (f = msg.getChanPoint()) && proto.lnrpc.ChannelPoint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ClosedChannelUpdate}
 */
proto.lnrpc.ClosedChannelUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ClosedChannelUpdate;
  return proto.lnrpc.ClosedChannelUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ClosedChannelUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ClosedChannelUpdate}
 */
proto.lnrpc.ClosedChannelUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChanId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapacity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setClosedHeight(value);
      break;
    case 4:
      var value = new proto.lnrpc.ChannelPoint;
      reader.readMessage(value,proto.lnrpc.ChannelPoint.deserializeBinaryFromReader);
      msg.setChanPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ClosedChannelUpdate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ClosedChannelUpdate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ClosedChannelUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ClosedChannelUpdate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChanId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getCapacity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getClosedHeight();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getChanPoint();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.lnrpc.ChannelPoint.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ClosedChannelUpdate} The clone.
 */
proto.lnrpc.ClosedChannelUpdate.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ClosedChannelUpdate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 chan_id = 1;
 * @return {number}
 */
proto.lnrpc.ClosedChannelUpdate.prototype.getChanId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.lnrpc.ClosedChannelUpdate.prototype.setChanId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 capacity = 2;
 * @return {number}
 */
proto.lnrpc.ClosedChannelUpdate.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.ClosedChannelUpdate.prototype.setCapacity = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 closed_height = 3;
 * @return {number}
 */
proto.lnrpc.ClosedChannelUpdate.prototype.getClosedHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.ClosedChannelUpdate.prototype.setClosedHeight = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional ChannelPoint chan_point = 4;
 * @return {proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.ClosedChannelUpdate.prototype.getChanPoint = function() {
  return /** @type{proto.lnrpc.ChannelPoint} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ChannelPoint, 4));
};


/** @param {proto.lnrpc.ChannelPoint|undefined} value  */
proto.lnrpc.ClosedChannelUpdate.prototype.setChanPoint = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.lnrpc.ClosedChannelUpdate.prototype.clearChanPoint = function() {
  this.setChanPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.lnrpc.ClosedChannelUpdate.prototype.hasChanPoint = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SetAliasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SetAliasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SetAliasRequest.displayName = 'proto.lnrpc.SetAliasRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SetAliasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SetAliasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SetAliasRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SetAliasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    newAlias: msg.getNewAlias()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SetAliasRequest}
 */
proto.lnrpc.SetAliasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SetAliasRequest;
  return proto.lnrpc.SetAliasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SetAliasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SetAliasRequest}
 */
proto.lnrpc.SetAliasRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewAlias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SetAliasRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SetAliasRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SetAliasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SetAliasRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNewAlias();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SetAliasRequest} The clone.
 */
proto.lnrpc.SetAliasRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SetAliasRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string new_alias = 1;
 * @return {string}
 */
proto.lnrpc.SetAliasRequest.prototype.getNewAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.SetAliasRequest.prototype.setNewAlias = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.SetAliasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.SetAliasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.SetAliasResponse.displayName = 'proto.lnrpc.SetAliasResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.SetAliasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.SetAliasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.SetAliasResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.SetAliasResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.SetAliasResponse}
 */
proto.lnrpc.SetAliasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.SetAliasResponse;
  return proto.lnrpc.SetAliasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.SetAliasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.SetAliasResponse}
 */
proto.lnrpc.SetAliasResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.SetAliasResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SetAliasResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.SetAliasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.SetAliasResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.SetAliasResponse} The clone.
 */
proto.lnrpc.SetAliasResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.SetAliasResponse} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.Invoice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.Invoice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.Invoice.displayName = 'proto.lnrpc.Invoice';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.Invoice.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.Invoice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.Invoice} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.Invoice.toObject = function(includeInstance, msg) {
  var f, obj = {
    memo: msg.getMemo(),
    receipt: msg.getReceipt_asB64(),
    rPreimage: msg.getRPreimage_asB64(),
    rHash: msg.getRHash_asB64(),
    value: msg.getValue(),
    settled: msg.getSettled(),
    creationDate: msg.getCreationDate(),
    settleDate: msg.getSettleDate(),
    paymentRequest: msg.getPaymentRequest()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.Invoice}
 */
proto.lnrpc.Invoice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.Invoice;
  return proto.lnrpc.Invoice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.Invoice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.Invoice}
 */
proto.lnrpc.Invoice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReceipt(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRPreimage(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRHash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSettled(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreationDate(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSettleDate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.Invoice} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Invoice.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.Invoice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Invoice.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMemo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getReceipt_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = this.getRPreimage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = this.getRHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = this.getValue();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = this.getSettled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = this.getCreationDate();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = this.getSettleDate();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = this.getPaymentRequest();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.Invoice} The clone.
 */
proto.lnrpc.Invoice.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.Invoice} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string memo = 1;
 * @return {string}
 */
proto.lnrpc.Invoice.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.Invoice.prototype.setMemo = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes receipt = 2;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.Invoice.prototype.getReceipt = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes receipt = 2;
 * This is a type-conversion wrapper around `getReceipt()`
 * @return {string}
 */
proto.lnrpc.Invoice.prototype.getReceipt_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReceipt()));
};


/**
 * optional bytes receipt = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReceipt()`
 * @return {!Uint8Array}
 */
proto.lnrpc.Invoice.prototype.getReceipt_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReceipt()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.Invoice.prototype.setReceipt = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes r_preimage = 3;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.Invoice.prototype.getRPreimage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/**
 * optional bytes r_preimage = 3;
 * This is a type-conversion wrapper around `getRPreimage()`
 * @return {string}
 */
proto.lnrpc.Invoice.prototype.getRPreimage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRPreimage()));
};


/**
 * optional bytes r_preimage = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRPreimage()`
 * @return {!Uint8Array}
 */
proto.lnrpc.Invoice.prototype.getRPreimage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRPreimage()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.Invoice.prototype.setRPreimage = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bytes r_hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.Invoice.prototype.getRHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/**
 * optional bytes r_hash = 4;
 * This is a type-conversion wrapper around `getRHash()`
 * @return {string}
 */
proto.lnrpc.Invoice.prototype.getRHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRHash()));
};


/**
 * optional bytes r_hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRHash()`
 * @return {!Uint8Array}
 */
proto.lnrpc.Invoice.prototype.getRHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRHash()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.Invoice.prototype.setRHash = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 value = 5;
 * @return {number}
 */
proto.lnrpc.Invoice.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.Invoice.prototype.setValue = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional bool settled = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.Invoice.prototype.getSettled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 6, false));
};


/** @param {boolean} value  */
proto.lnrpc.Invoice.prototype.setSettled = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int64 creation_date = 7;
 * @return {number}
 */
proto.lnrpc.Invoice.prototype.getCreationDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.lnrpc.Invoice.prototype.setCreationDate = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int64 settle_date = 8;
 * @return {number}
 */
proto.lnrpc.Invoice.prototype.getSettleDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 8, 0));
};


/** @param {number} value  */
proto.lnrpc.Invoice.prototype.setSettleDate = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional string payment_request = 9;
 * @return {string}
 */
proto.lnrpc.Invoice.prototype.getPaymentRequest = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 9, ""));
};


/** @param {string} value  */
proto.lnrpc.Invoice.prototype.setPaymentRequest = function(value) {
  jspb.Message.setField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.AddInvoiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.AddInvoiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.AddInvoiceResponse.displayName = 'proto.lnrpc.AddInvoiceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.AddInvoiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.AddInvoiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.AddInvoiceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.AddInvoiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rHash: msg.getRHash_asB64(),
    paymentRequest: msg.getPaymentRequest()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.AddInvoiceResponse}
 */
proto.lnrpc.AddInvoiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.AddInvoiceResponse;
  return proto.lnrpc.AddInvoiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.AddInvoiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.AddInvoiceResponse}
 */
proto.lnrpc.AddInvoiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRHash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.AddInvoiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.AddInvoiceResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.AddInvoiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.AddInvoiceResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getPaymentRequest();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.AddInvoiceResponse} The clone.
 */
proto.lnrpc.AddInvoiceResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.AddInvoiceResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes r_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.AddInvoiceResponse.prototype.getRHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes r_hash = 1;
 * This is a type-conversion wrapper around `getRHash()`
 * @return {string}
 */
proto.lnrpc.AddInvoiceResponse.prototype.getRHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRHash()));
};


/**
 * optional bytes r_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRHash()`
 * @return {!Uint8Array}
 */
proto.lnrpc.AddInvoiceResponse.prototype.getRHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRHash()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.AddInvoiceResponse.prototype.setRHash = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string payment_request = 2;
 * @return {string}
 */
proto.lnrpc.AddInvoiceResponse.prototype.getPaymentRequest = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.AddInvoiceResponse.prototype.setPaymentRequest = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PaymentHash = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.PaymentHash, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PaymentHash.displayName = 'proto.lnrpc.PaymentHash';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PaymentHash.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PaymentHash.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PaymentHash} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PaymentHash.toObject = function(includeInstance, msg) {
  var f, obj = {
    rHashStr: msg.getRHashStr(),
    rHash: msg.getRHash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PaymentHash}
 */
proto.lnrpc.PaymentHash.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PaymentHash;
  return proto.lnrpc.PaymentHash.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PaymentHash} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PaymentHash}
 */
proto.lnrpc.PaymentHash.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRHashStr(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PaymentHash} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PaymentHash.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PaymentHash.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PaymentHash.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRHashStr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PaymentHash} The clone.
 */
proto.lnrpc.PaymentHash.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PaymentHash} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string r_hash_str = 1;
 * @return {string}
 */
proto.lnrpc.PaymentHash.prototype.getRHashStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.PaymentHash.prototype.setRHashStr = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes r_hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.lnrpc.PaymentHash.prototype.getRHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes r_hash = 2;
 * This is a type-conversion wrapper around `getRHash()`
 * @return {string}
 */
proto.lnrpc.PaymentHash.prototype.getRHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRHash()));
};


/**
 * optional bytes r_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRHash()`
 * @return {!Uint8Array}
 */
proto.lnrpc.PaymentHash.prototype.getRHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRHash()));
};


/** @param {!(string|Uint8Array)} value  */
proto.lnrpc.PaymentHash.prototype.setRHash = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ListInvoiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ListInvoiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ListInvoiceRequest.displayName = 'proto.lnrpc.ListInvoiceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ListInvoiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ListInvoiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ListInvoiceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ListInvoiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingOnly: msg.getPendingOnly()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ListInvoiceRequest}
 */
proto.lnrpc.ListInvoiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ListInvoiceRequest;
  return proto.lnrpc.ListInvoiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ListInvoiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ListInvoiceRequest}
 */
proto.lnrpc.ListInvoiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPendingOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ListInvoiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListInvoiceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ListInvoiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListInvoiceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPendingOnly();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ListInvoiceRequest} The clone.
 */
proto.lnrpc.ListInvoiceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ListInvoiceRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool pending_only = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.ListInvoiceRequest.prototype.getPendingOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.lnrpc.ListInvoiceRequest.prototype.setPendingOnly = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ListInvoiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.ListInvoiceResponse.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.ListInvoiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ListInvoiceResponse.displayName = 'proto.lnrpc.ListInvoiceResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.ListInvoiceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ListInvoiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ListInvoiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ListInvoiceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ListInvoiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invoicesList: jspb.Message.toObjectList(msg.getInvoicesList(),
    proto.lnrpc.Invoice.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ListInvoiceResponse}
 */
proto.lnrpc.ListInvoiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ListInvoiceResponse;
  return proto.lnrpc.ListInvoiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ListInvoiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ListInvoiceResponse}
 */
proto.lnrpc.ListInvoiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.Invoice;
      reader.readMessage(value,proto.lnrpc.Invoice.deserializeBinaryFromReader);
      msg.getInvoicesList().push(value);
      msg.setInvoicesList(msg.getInvoicesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ListInvoiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListInvoiceResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ListInvoiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListInvoiceResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getInvoicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lnrpc.Invoice.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ListInvoiceResponse} The clone.
 */
proto.lnrpc.ListInvoiceResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ListInvoiceResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Invoice invoices = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.Invoice>}
 */
proto.lnrpc.ListInvoiceResponse.prototype.getInvoicesList = function() {
  return /** @type{!Array.<!proto.lnrpc.Invoice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.Invoice, 1));
};


/** @param {Array.<!proto.lnrpc.Invoice>} value  */
proto.lnrpc.ListInvoiceResponse.prototype.setInvoicesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.lnrpc.ListInvoiceResponse.prototype.clearInvoicesList = function() {
  this.setInvoicesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.InvoiceSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.InvoiceSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.InvoiceSubscription.displayName = 'proto.lnrpc.InvoiceSubscription';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.InvoiceSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.InvoiceSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.InvoiceSubscription} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.InvoiceSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.InvoiceSubscription}
 */
proto.lnrpc.InvoiceSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.InvoiceSubscription;
  return proto.lnrpc.InvoiceSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.InvoiceSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.InvoiceSubscription}
 */
proto.lnrpc.InvoiceSubscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.InvoiceSubscription} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.InvoiceSubscription.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.InvoiceSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.InvoiceSubscription.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.InvoiceSubscription} The clone.
 */
proto.lnrpc.InvoiceSubscription.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.InvoiceSubscription} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.Payment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.Payment.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.Payment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.Payment.displayName = 'proto.lnrpc.Payment';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.Payment.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.Payment.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.Payment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.Payment} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.Payment.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentHash: msg.getPaymentHash(),
    value: msg.getValue(),
    creationDate: msg.getCreationDate(),
    pathList: jspb.Message.getField(msg, 4),
    fee: msg.getFee()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.Payment}
 */
proto.lnrpc.Payment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.Payment;
  return proto.lnrpc.Payment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.Payment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.Payment}
 */
proto.lnrpc.Payment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreationDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.getPathList().push(value);
      msg.setPathList(msg.getPathList());
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.Payment} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Payment.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.Payment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.Payment.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPaymentHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getValue();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getCreationDate();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = this.getFee();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.Payment} The clone.
 */
proto.lnrpc.Payment.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.Payment} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string payment_hash = 1;
 * @return {string}
 */
proto.lnrpc.Payment.prototype.getPaymentHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.Payment.prototype.setPaymentHash = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 value = 2;
 * @return {number}
 */
proto.lnrpc.Payment.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.lnrpc.Payment.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 creation_date = 3;
 * @return {number}
 */
proto.lnrpc.Payment.prototype.getCreationDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.Payment.prototype.setCreationDate = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated string path = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.lnrpc.Payment.prototype.getPathList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 4));
};


/** @param {Array.<string>} value  */
proto.lnrpc.Payment.prototype.setPathList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


proto.lnrpc.Payment.prototype.clearPathList = function() {
  jspb.Message.setField(this, 4, []);
};


/**
 * optional int64 fee = 5;
 * @return {number}
 */
proto.lnrpc.Payment.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.lnrpc.Payment.prototype.setFee = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ListPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.ListPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ListPaymentsRequest.displayName = 'proto.lnrpc.ListPaymentsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ListPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ListPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ListPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ListPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ListPaymentsRequest}
 */
proto.lnrpc.ListPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ListPaymentsRequest;
  return proto.lnrpc.ListPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ListPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ListPaymentsRequest}
 */
proto.lnrpc.ListPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ListPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ListPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListPaymentsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ListPaymentsRequest} The clone.
 */
proto.lnrpc.ListPaymentsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ListPaymentsRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.ListPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.ListPaymentsResponse.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.ListPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.ListPaymentsResponse.displayName = 'proto.lnrpc.ListPaymentsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.ListPaymentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.ListPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.ListPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.ListPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.ListPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentsList: jspb.Message.toObjectList(msg.getPaymentsList(),
    proto.lnrpc.Payment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.ListPaymentsResponse}
 */
proto.lnrpc.ListPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.ListPaymentsResponse;
  return proto.lnrpc.ListPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.ListPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.ListPaymentsResponse}
 */
proto.lnrpc.ListPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.lnrpc.Payment;
      reader.readMessage(value,proto.lnrpc.Payment.deserializeBinaryFromReader);
      msg.getPaymentsList().push(value);
      msg.setPaymentsList(msg.getPaymentsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.ListPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.ListPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.ListPaymentsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPaymentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.lnrpc.Payment.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.ListPaymentsResponse} The clone.
 */
proto.lnrpc.ListPaymentsResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.ListPaymentsResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Payment payments = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.lnrpc.Payment>}
 */
proto.lnrpc.ListPaymentsResponse.prototype.getPaymentsList = function() {
  return /** @type{!Array.<!proto.lnrpc.Payment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.Payment, 1));
};


/** @param {Array.<!proto.lnrpc.Payment>} value  */
proto.lnrpc.ListPaymentsResponse.prototype.setPaymentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.lnrpc.ListPaymentsResponse.prototype.clearPaymentsList = function() {
  this.setPaymentsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.DeleteAllPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.DeleteAllPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.DeleteAllPaymentsRequest.displayName = 'proto.lnrpc.DeleteAllPaymentsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.DeleteAllPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.DeleteAllPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.DeleteAllPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.DeleteAllPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.DeleteAllPaymentsRequest}
 */
proto.lnrpc.DeleteAllPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.DeleteAllPaymentsRequest;
  return proto.lnrpc.DeleteAllPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.DeleteAllPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.DeleteAllPaymentsRequest}
 */
proto.lnrpc.DeleteAllPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.DeleteAllPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DeleteAllPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.DeleteAllPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DeleteAllPaymentsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.DeleteAllPaymentsRequest} The clone.
 */
proto.lnrpc.DeleteAllPaymentsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.DeleteAllPaymentsRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.DeleteAllPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.DeleteAllPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.DeleteAllPaymentsResponse.displayName = 'proto.lnrpc.DeleteAllPaymentsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.DeleteAllPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.DeleteAllPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.DeleteAllPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.DeleteAllPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.DeleteAllPaymentsResponse}
 */
proto.lnrpc.DeleteAllPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.DeleteAllPaymentsResponse;
  return proto.lnrpc.DeleteAllPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.DeleteAllPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.DeleteAllPaymentsResponse}
 */
proto.lnrpc.DeleteAllPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.DeleteAllPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DeleteAllPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.DeleteAllPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DeleteAllPaymentsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.DeleteAllPaymentsResponse} The clone.
 */
proto.lnrpc.DeleteAllPaymentsResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.DeleteAllPaymentsResponse} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.DebugLevelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.DebugLevelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.DebugLevelRequest.displayName = 'proto.lnrpc.DebugLevelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.DebugLevelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.DebugLevelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.DebugLevelRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.DebugLevelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    show: msg.getShow(),
    levelSpec: msg.getLevelSpec()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.DebugLevelRequest}
 */
proto.lnrpc.DebugLevelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.DebugLevelRequest;
  return proto.lnrpc.DebugLevelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.DebugLevelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.DebugLevelRequest}
 */
proto.lnrpc.DebugLevelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShow(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.DebugLevelRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DebugLevelRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.DebugLevelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DebugLevelRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getShow();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = this.getLevelSpec();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.DebugLevelRequest} The clone.
 */
proto.lnrpc.DebugLevelRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.DebugLevelRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool show = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.lnrpc.DebugLevelRequest.prototype.getShow = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.lnrpc.DebugLevelRequest.prototype.setShow = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string level_spec = 2;
 * @return {string}
 */
proto.lnrpc.DebugLevelRequest.prototype.getLevelSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.DebugLevelRequest.prototype.setLevelSpec = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.DebugLevelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.DebugLevelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.DebugLevelResponse.displayName = 'proto.lnrpc.DebugLevelResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.DebugLevelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.DebugLevelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.DebugLevelResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.DebugLevelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    subSystems: msg.getSubSystems()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.DebugLevelResponse}
 */
proto.lnrpc.DebugLevelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.DebugLevelResponse;
  return proto.lnrpc.DebugLevelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.DebugLevelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.DebugLevelResponse}
 */
proto.lnrpc.DebugLevelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubSystems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.DebugLevelResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DebugLevelResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.DebugLevelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.DebugLevelResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSubSystems();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.DebugLevelResponse} The clone.
 */
proto.lnrpc.DebugLevelResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.DebugLevelResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string sub_systems = 1;
 * @return {string}
 */
proto.lnrpc.DebugLevelResponse.prototype.getSubSystems = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.DebugLevelResponse.prototype.setSubSystems = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PayReqString = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.PayReqString, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PayReqString.displayName = 'proto.lnrpc.PayReqString';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PayReqString.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PayReqString.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PayReqString} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PayReqString.toObject = function(includeInstance, msg) {
  var f, obj = {
    payReq: msg.getPayReq()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PayReqString}
 */
proto.lnrpc.PayReqString.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PayReqString;
  return proto.lnrpc.PayReqString.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PayReqString} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PayReqString}
 */
proto.lnrpc.PayReqString.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayReq(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PayReqString} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PayReqString.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PayReqString.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PayReqString.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPayReq();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PayReqString} The clone.
 */
proto.lnrpc.PayReqString.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PayReqString} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string pay_req = 1;
 * @return {string}
 */
proto.lnrpc.PayReqString.prototype.getPayReq = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.PayReqString.prototype.setPayReq = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.PayReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.PayReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.lnrpc.PayReq.displayName = 'proto.lnrpc.PayReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.PayReq.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PayReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PayReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.lnrpc.PayReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    destination: msg.getDestination(),
    paymentHash: msg.getPaymentHash(),
    numSatoshis: msg.getNumSatoshis()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.PayReq}
 */
proto.lnrpc.PayReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PayReq;
  return proto.lnrpc.PayReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PayReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PayReq}
 */
proto.lnrpc.PayReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumSatoshis(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PayReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PayReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.PayReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.lnrpc.PayReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDestination();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPaymentHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getNumSatoshis();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.lnrpc.PayReq} The clone.
 */
proto.lnrpc.PayReq.prototype.cloneMessage = function() {
  return /** @type {!proto.lnrpc.PayReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string destination = 1;
 * @return {string}
 */
proto.lnrpc.PayReq.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.lnrpc.PayReq.prototype.setDestination = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string payment_hash = 2;
 * @return {string}
 */
proto.lnrpc.PayReq.prototype.getPaymentHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.lnrpc.PayReq.prototype.setPaymentHash = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 num_satoshis = 3;
 * @return {number}
 */
proto.lnrpc.PayReq.prototype.getNumSatoshis = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.lnrpc.PayReq.prototype.setNumSatoshis = function(value) {
  jspb.Message.setField(this, 3, value);
};


goog.object.extend(exports, proto.lnrpc);
