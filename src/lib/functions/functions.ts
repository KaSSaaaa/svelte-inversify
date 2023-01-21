import type { interfaces } from 'inversify/lib/interfaces/interfaces';
import { Container } from 'inversify';
import { getContext, setContext } from 'svelte';

export function getContainer(): Container {
	return getContext<Container>(Container);
}

export function setContainer(container: Container) {
	setContext(Container, container);
}

export function getInjection<T>(key: interfaces.ServiceIdentifier<T>): T {
	return getContainer().get<T>(key);
}

export function getAllInjections<T>(key: interfaces.ServiceIdentifier<T>): T[] {
	return getContainer().getAll(key);
}

export function getOptionalInjection<T>(
	key: interfaces.ServiceIdentifier<T>,
	resolveDefault: (container: Container) => T | undefined = () => undefined
): T | undefined {
	const container = getContainer();
	return container.isBound(key) ? container.get<T>(key) : resolveDefault(container);
}
