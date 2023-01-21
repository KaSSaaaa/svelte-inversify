# Svelte-Inversify

This is a small library that wraps the container from Inversify using Svelte's context API. It is based on inversify-react which has the same concept but for React.

You simply initialize your container and use one of the two following methods to set your container to the context. For more information, you can check to the [Inversify](https://inversify.io/) documentation.

## ContainerContext

You can either use the ContainerContext component :

```svelte
<script lang="ts">
    import { ContainerContext } from 'svelte-inversify';
    import { Container } from 'inversify';

    const container = new Container();
    ...
</script>

<ContainerContext {container}>
    ...
</ContainerContext>
```

## setContainer

Or simply use the <code>setContainer</code> method like so :

```svelte
<script lang="ts">
    import { ContainerContext } from 'svelte-inversify';
    import { Container } from 'inversify';

    const container = new Container();
    ...
    setContainer(container);
</script>
...
```

The ContainerContext component is just a wrapper around the <code>setContainer</code> method.

## getContainer

To get an injectable, you can get the container directly using the <code>getContainer</code> function :

```svelte
<script lang="ts">
    import { getContainer } from 'svelte-inversify';
    import { Container } from 'inversify';

    const container: Container = getContainer();
    ...
</script>
...
```

## getInjection

To get a dependency from your container, simply use <code>getInjection\<T\></code> function like so :

```svelte
<script lang="ts">
    import { getInjection } from 'svelte-inversify';

    const foo = getInjection<Foo>('Foo');
    foo.bar();
</script>
...
```

The <b>key</b> property from the <code>getInjection</code> method takes the same types of arguments that the container would normally use.

## getAllInjections

You can also use the <code>getAllInjections</code> function to get a list of injectables :


```svelte
<script lang="ts">
    import { getAllInjections } from 'svelte-inversify';

    const foos = getAllInjections<Foo>('Foo');
    foos.forEach(foo => foo.bar());
</script>
...
```

## getOptionalInjection

You can also use the <code>getOptionalInjection</code> function to get an injectable or a default value if it hasn't been set :

```svelte
<script lang="ts">
    import { getOptionalInjection } from 'svelte-inversify';

    const foos = getOptionalInjection<Foo>('Foo', container => new Foo());
    foo.bar();
</script>
...
```
