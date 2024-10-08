import { ApplicationError, type Level } from './application.error';
import type { INode } from '../Interfaces';

interface TriggerCloseErrorOptions extends ErrorOptions {
	level: Level;
}

export class TriggerCloseError extends ApplicationError {
	constructor(
		readonly node: INode,
		{ cause, level }: TriggerCloseErrorOptions,
	) {
		super('Trigger Close Failed', { cause, extra: { nodeName: node.name } });
		this.level = level;
	}
}
