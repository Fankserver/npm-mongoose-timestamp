import * as mongoose from "mongoose";

declare function plugin(): plugin.Timestamp;
declare module plugin {
	interface Timestamp {
		(schema: mongoose.Schema, options?: Object): void;
	}
}

export = plugin;
