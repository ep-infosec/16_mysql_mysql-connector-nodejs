/*
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2.0, as
 * published by the Free Software Foundation.
 *
 * This program is also distributed with certain software (including
 * but not limited to OpenSSL) that is licensed under separate terms,
 * as designated in a particular file or component or in included license
 * documentation.  The authors of MySQL hereby grant you an
 * additional permission to link the program and your derivative works
 * with the separately licensed software that they have included with
 * MySQL.
 *
 * Without limiting anything contained in the foregoing, this file,
 * which is part of MySQL Connector/Node.js, is also subject to the
 * Universal FOSS Exception, version 1.0, a copy of which can be found at
 * http://oss.oracle.com/licenses/universal-foss-exception.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License, version 2.0, for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin St, Fifth Floor, Boston, MA 02110-1301  USA
 */

// source: mysqlx_prepare.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var mysqlx_pb = require('./mysqlx_pb.js');
goog.object.extend(proto, mysqlx_pb);
var mysqlx_sql_pb = require('./mysqlx_sql_pb.js');
goog.object.extend(proto, mysqlx_sql_pb);
var mysqlx_crud_pb = require('./mysqlx_crud_pb.js');
goog.object.extend(proto, mysqlx_crud_pb);
var mysqlx_datatypes_pb = require('./mysqlx_datatypes_pb.js');
goog.object.extend(proto, mysqlx_datatypes_pb);
goog.exportSymbol('proto.Mysqlx.Prepare.Deallocate', null, global);
goog.exportSymbol('proto.Mysqlx.Prepare.Execute', null, global);
goog.exportSymbol('proto.Mysqlx.Prepare.Prepare', null, global);
goog.exportSymbol('proto.Mysqlx.Prepare.Prepare.OneOfMessage', null, global);
goog.exportSymbol('proto.Mysqlx.Prepare.Prepare.OneOfMessage.Type', null, global);
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
proto.Mysqlx.Prepare.Prepare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Prepare.Prepare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mysqlx.Prepare.Prepare.displayName = 'proto.Mysqlx.Prepare.Prepare';
}
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
proto.Mysqlx.Prepare.Prepare.OneOfMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Prepare.Prepare.OneOfMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mysqlx.Prepare.Prepare.OneOfMessage.displayName = 'proto.Mysqlx.Prepare.Prepare.OneOfMessage';
}
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
proto.Mysqlx.Prepare.Execute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Mysqlx.Prepare.Execute.repeatedFields_, null);
};
goog.inherits(proto.Mysqlx.Prepare.Execute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mysqlx.Prepare.Execute.displayName = 'proto.Mysqlx.Prepare.Execute';
}
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
proto.Mysqlx.Prepare.Deallocate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mysqlx.Prepare.Deallocate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mysqlx.Prepare.Deallocate.displayName = 'proto.Mysqlx.Prepare.Deallocate';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Prepare.Prepare.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Prepare.Prepare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Prepare.Prepare} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Prepare.Prepare.toObject = function(includeInstance, msg) {
  var f, obj = {
    stmtId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    stmt: (f = msg.getStmt()) && proto.Mysqlx.Prepare.Prepare.OneOfMessage.toObject(includeInstance, f)
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
 * @return {!proto.Mysqlx.Prepare.Prepare}
 */
proto.Mysqlx.Prepare.Prepare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Prepare.Prepare;
  return proto.Mysqlx.Prepare.Prepare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Prepare.Prepare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Prepare.Prepare}
 */
proto.Mysqlx.Prepare.Prepare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStmtId(value);
      break;
    case 2:
      var value = new proto.Mysqlx.Prepare.Prepare.OneOfMessage;
      reader.readMessage(value,proto.Mysqlx.Prepare.Prepare.OneOfMessage.deserializeBinaryFromReader);
      msg.setStmt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Prepare.Prepare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Prepare.Prepare.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Prepare.Prepare} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Prepare.Prepare.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStmt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Mysqlx.Prepare.Prepare.OneOfMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Prepare.Prepare.OneOfMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    find: (f = msg.getFind()) && mysqlx_crud_pb.Find.toObject(includeInstance, f),
    insert: (f = msg.getInsert()) && mysqlx_crud_pb.Insert.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && mysqlx_crud_pb.Update.toObject(includeInstance, f),
    pb_delete: (f = msg.getDelete()) && mysqlx_crud_pb.Delete.toObject(includeInstance, f),
    stmtExecute: (f = msg.getStmtExecute()) && mysqlx_sql_pb.StmtExecute.toObject(includeInstance, f)
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
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Prepare.Prepare.OneOfMessage;
  return proto.Mysqlx.Prepare.Prepare.OneOfMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Mysqlx.Prepare.Prepare.OneOfMessage.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new mysqlx_crud_pb.Find;
      reader.readMessage(value,mysqlx_crud_pb.Find.deserializeBinaryFromReader);
      msg.setFind(value);
      break;
    case 3:
      var value = new mysqlx_crud_pb.Insert;
      reader.readMessage(value,mysqlx_crud_pb.Insert.deserializeBinaryFromReader);
      msg.setInsert(value);
      break;
    case 4:
      var value = new mysqlx_crud_pb.Update;
      reader.readMessage(value,mysqlx_crud_pb.Update.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    case 5:
      var value = new mysqlx_crud_pb.Delete;
      reader.readMessage(value,mysqlx_crud_pb.Delete.deserializeBinaryFromReader);
      msg.setDelete(value);
      break;
    case 6:
      var value = new mysqlx_sql_pb.StmtExecute;
      reader.readMessage(value,mysqlx_sql_pb.StmtExecute.deserializeBinaryFromReader);
      msg.setStmtExecute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Prepare.Prepare.OneOfMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.Mysqlx.Prepare.Prepare.OneOfMessage.Type} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFind();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mysqlx_crud_pb.Find.serializeBinaryToWriter
    );
  }
  f = message.getInsert();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      mysqlx_crud_pb.Insert.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      mysqlx_crud_pb.Update.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      mysqlx_crud_pb.Delete.serializeBinaryToWriter
    );
  }
  f = message.getStmtExecute();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      mysqlx_sql_pb.StmtExecute.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.Type = {
  FIND: 0,
  INSERT: 1,
  UPDATE: 2,
  DELETE: 4,
  STMT: 5
};

/**
 * required Type type = 1;
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage.Type}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.getType = function() {
  return /** @type {!proto.Mysqlx.Prepare.Prepare.OneOfMessage.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Mysqlx.Prepare.Prepare.OneOfMessage.Type} value
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Mysqlx.Crud.Find find = 2;
 * @return {?proto.Mysqlx.Crud.Find}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.getFind = function() {
  return /** @type{?proto.Mysqlx.Crud.Find} */ (
    jspb.Message.getWrapperField(this, mysqlx_crud_pb.Find, 2));
};


/**
 * @param {?proto.Mysqlx.Crud.Find|undefined} value
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
*/
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.setFind = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.clearFind = function() {
  return this.setFind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.hasFind = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mysqlx.Crud.Insert insert = 3;
 * @return {?proto.Mysqlx.Crud.Insert}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.getInsert = function() {
  return /** @type{?proto.Mysqlx.Crud.Insert} */ (
    jspb.Message.getWrapperField(this, mysqlx_crud_pb.Insert, 3));
};


/**
 * @param {?proto.Mysqlx.Crud.Insert|undefined} value
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
*/
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.setInsert = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.clearInsert = function() {
  return this.setInsert(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.hasInsert = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Mysqlx.Crud.Update update = 4;
 * @return {?proto.Mysqlx.Crud.Update}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.getUpdate = function() {
  return /** @type{?proto.Mysqlx.Crud.Update} */ (
    jspb.Message.getWrapperField(this, mysqlx_crud_pb.Update, 4));
};


/**
 * @param {?proto.Mysqlx.Crud.Update|undefined} value
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
*/
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Mysqlx.Crud.Delete delete = 5;
 * @return {?proto.Mysqlx.Crud.Delete}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.getDelete = function() {
  return /** @type{?proto.Mysqlx.Crud.Delete} */ (
    jspb.Message.getWrapperField(this, mysqlx_crud_pb.Delete, 5));
};


/**
 * @param {?proto.Mysqlx.Crud.Delete|undefined} value
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
*/
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.setDelete = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.clearDelete = function() {
  return this.setDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.hasDelete = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Mysqlx.Sql.StmtExecute stmt_execute = 6;
 * @return {?proto.Mysqlx.Sql.StmtExecute}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.getStmtExecute = function() {
  return /** @type{?proto.Mysqlx.Sql.StmtExecute} */ (
    jspb.Message.getWrapperField(this, mysqlx_sql_pb.StmtExecute, 6));
};


/**
 * @param {?proto.Mysqlx.Sql.StmtExecute|undefined} value
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
*/
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.setStmtExecute = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} returns this
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.clearStmtExecute = function() {
  return this.setStmtExecute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Prepare.OneOfMessage.prototype.hasStmtExecute = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required uint32 stmt_id = 1;
 * @return {number}
 */
proto.Mysqlx.Prepare.Prepare.prototype.getStmtId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Mysqlx.Prepare.Prepare} returns this
 */
proto.Mysqlx.Prepare.Prepare.prototype.setStmtId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Prepare} returns this
 */
proto.Mysqlx.Prepare.Prepare.prototype.clearStmtId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Prepare.prototype.hasStmtId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required OneOfMessage stmt = 2;
 * @return {!proto.Mysqlx.Prepare.Prepare.OneOfMessage}
 */
proto.Mysqlx.Prepare.Prepare.prototype.getStmt = function() {
  return /** @type{!proto.Mysqlx.Prepare.Prepare.OneOfMessage} */ (
    jspb.Message.getWrapperField(this, proto.Mysqlx.Prepare.Prepare.OneOfMessage, 2, 1));
};


/**
 * @param {!proto.Mysqlx.Prepare.Prepare.OneOfMessage} value
 * @return {!proto.Mysqlx.Prepare.Prepare} returns this
*/
proto.Mysqlx.Prepare.Prepare.prototype.setStmt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Prepare} returns this
 */
proto.Mysqlx.Prepare.Prepare.prototype.clearStmt = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Prepare.prototype.hasStmt = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Mysqlx.Prepare.Execute.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Prepare.Execute.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Prepare.Execute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Prepare.Execute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Prepare.Execute.toObject = function(includeInstance, msg) {
  var f, obj = {
    stmtId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    argsList: jspb.Message.toObjectList(msg.getArgsList(),
    mysqlx_datatypes_pb.Any.toObject, includeInstance),
    compactMetadata: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.Mysqlx.Prepare.Execute}
 */
proto.Mysqlx.Prepare.Execute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Prepare.Execute;
  return proto.Mysqlx.Prepare.Execute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Prepare.Execute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Prepare.Execute}
 */
proto.Mysqlx.Prepare.Execute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStmtId(value);
      break;
    case 2:
      var value = new mysqlx_datatypes_pb.Any;
      reader.readMessage(value,mysqlx_datatypes_pb.Any.deserializeBinaryFromReader);
      msg.addArgs(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCompactMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Prepare.Execute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Prepare.Execute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Prepare.Execute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Prepare.Execute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      mysqlx_datatypes_pb.Any.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * required uint32 stmt_id = 1;
 * @return {number}
 */
proto.Mysqlx.Prepare.Execute.prototype.getStmtId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Mysqlx.Prepare.Execute} returns this
 */
proto.Mysqlx.Prepare.Execute.prototype.setStmtId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Execute} returns this
 */
proto.Mysqlx.Prepare.Execute.prototype.clearStmtId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Execute.prototype.hasStmtId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Mysqlx.Datatypes.Any args = 2;
 * @return {!Array<!proto.Mysqlx.Datatypes.Any>}
 */
proto.Mysqlx.Prepare.Execute.prototype.getArgsList = function() {
  return /** @type{!Array<!proto.Mysqlx.Datatypes.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, mysqlx_datatypes_pb.Any, 2));
};


/**
 * @param {!Array<!proto.Mysqlx.Datatypes.Any>} value
 * @return {!proto.Mysqlx.Prepare.Execute} returns this
*/
proto.Mysqlx.Prepare.Execute.prototype.setArgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Mysqlx.Datatypes.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Mysqlx.Datatypes.Any}
 */
proto.Mysqlx.Prepare.Execute.prototype.addArgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Mysqlx.Datatypes.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Mysqlx.Prepare.Execute} returns this
 */
proto.Mysqlx.Prepare.Execute.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional bool compact_metadata = 3;
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Execute.prototype.getCompactMetadata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Mysqlx.Prepare.Execute} returns this
 */
proto.Mysqlx.Prepare.Execute.prototype.setCompactMetadata = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Execute} returns this
 */
proto.Mysqlx.Prepare.Execute.prototype.clearCompactMetadata = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Execute.prototype.hasCompactMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mysqlx.Prepare.Deallocate.prototype.toObject = function(opt_includeInstance) {
  return proto.Mysqlx.Prepare.Deallocate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mysqlx.Prepare.Deallocate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Prepare.Deallocate.toObject = function(includeInstance, msg) {
  var f, obj = {
    stmtId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.Mysqlx.Prepare.Deallocate}
 */
proto.Mysqlx.Prepare.Deallocate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mysqlx.Prepare.Deallocate;
  return proto.Mysqlx.Prepare.Deallocate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mysqlx.Prepare.Deallocate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mysqlx.Prepare.Deallocate}
 */
proto.Mysqlx.Prepare.Deallocate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStmtId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mysqlx.Prepare.Deallocate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mysqlx.Prepare.Deallocate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mysqlx.Prepare.Deallocate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mysqlx.Prepare.Deallocate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 stmt_id = 1;
 * @return {number}
 */
proto.Mysqlx.Prepare.Deallocate.prototype.getStmtId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Mysqlx.Prepare.Deallocate} returns this
 */
proto.Mysqlx.Prepare.Deallocate.prototype.setStmtId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Mysqlx.Prepare.Deallocate} returns this
 */
proto.Mysqlx.Prepare.Deallocate.prototype.clearStmtId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mysqlx.Prepare.Deallocate.prototype.hasStmtId = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.Mysqlx.Prepare);