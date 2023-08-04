---
title: "Class: PriorityClasses"
linkTitle: "PriorityClasses"
slug: "lib_k8s_priorityClasses.PriorityClasses"
---

[lib/k8s/priorityClasses](../modules/lib_k8s_priorityClasses.md).PriorityClasses

## Hierarchy

- `any`

  ↳ **`PriorityClasses`**

## Constructors

### constructor

• **new PriorityClasses**(`json`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`KubePriorityClasses`](../interfaces/lib_k8s_priorityClasses.KubePriorityClasses.md) |

#### Inherited from

makeKubeObject<KubePriorityClasses\>('priorityClass').constructor

#### Defined in

[lib/k8s/cluster.ts:106](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/cluster.ts#L106)

## Properties

### apiEndpoint

▪ `Static` **apiEndpoint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`name`: `string`, `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<`any`\> |
| `get` | (`name`: `string`, `cb`: [`StreamResultsCb`](../modules/lib_k8s_apiProxy.md#streamresultscb), `errCb`: [`StreamErrCb`](../modules/lib_k8s_apiProxy.md#streamerrcb), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<() => `void`\> |
| `isNamespaced` | `boolean` |
| `list` | (`cb`: [`StreamResultsCb`](../modules/lib_k8s_apiProxy.md#streamresultscb), `errCb`: [`StreamErrCb`](../modules/lib_k8s_apiProxy.md#streamerrcb), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<() => `void`\> |
| `patch` | (`body`: `OpPatch`[], `name`: `string`, `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<`any`\> |
| `post` | (`body`: [`KubeObjectInterface`](../interfaces/lib_k8s_cluster.KubeObjectInterface.md), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<`any`\> |
| `put` | (`body`: [`KubeObjectInterface`](../interfaces/lib_k8s_cluster.KubeObjectInterface.md), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<`any`\> |

#### Defined in

[lib/k8s/priorityClasses.ts:12](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/priorityClasses.ts#L12)

___

### className

▪ `Static` **className**: `string`

#### Inherited from

makeKubeObject<KubePriorityClasses\>('priorityClass').className

#### Defined in

[lib/k8s/cluster.ts:107](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/cluster.ts#L107)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClasses.ts:30](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/priorityClasses.ts#L30)

___

### globalDefault

• `get` **globalDefault**(): ``null`` \| `boolean`

#### Returns

``null`` \| `boolean`

#### Defined in

[lib/k8s/priorityClasses.ts:26](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/priorityClasses.ts#L26)

___

### listRoute

• `get` **listRoute**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClasses.ts:18](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/priorityClasses.ts#L18)

___

### preemptionPolicy

• `get` **preemptionPolicy**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClasses.ts:34](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/priorityClasses.ts#L34)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClasses.ts:22](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/priorityClasses.ts#L22)

___

### pluralName

• `Static` `get` **pluralName**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClasses.ts:14](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/priorityClasses.ts#L14)

## Methods

### apiList

▸ `Static` **apiList**(`onList`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onList` | (`arg`: `any`[]) => `void` |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubePriorityClasses\>('priorityClass').apiList

#### Defined in

[lib/k8s/cluster.ts:86](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/cluster.ts#L86)

___

### getAuthorization

▸ `Static` `Optional` **getAuthorization**(`arg`, `resourceAttrs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` |
| `resourceAttrs?` | [`AuthRequestResourceAttrs`](../interfaces/lib_k8s_cluster.AuthRequestResourceAttrs.md) |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubePriorityClasses\>('priorityClass').getAuthorization

#### Defined in

[lib/k8s/cluster.ts:109](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/cluster.ts#L109)

___

### getErrorMessage

▸ `Static` **getErrorMessage**(`err?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md) |

#### Returns

``null`` \| `string`

#### Inherited from

makeKubeObject<KubePriorityClasses\>('priorityClass').getErrorMessage

#### Defined in

[lib/k8s/cluster.ts:105](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/cluster.ts#L105)

___

### useApiGet

▸ `Static` **useApiGet**(`onGet`, `name`, `namespace?`, `onError?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onGet` | (...`args`: `any`) => `void` |
| `name` | `string` |
| `namespace?` | `string` |
| `onError?` | (`err`: [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void` |

#### Returns

`void`

#### Inherited from

makeKubeObject<KubePriorityClasses\>('priorityClass').useApiGet

#### Defined in

[lib/k8s/cluster.ts:92](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/cluster.ts#L92)

___

### useApiList

▸ `Static` **useApiList**(`onList`, `onError?`, `opts?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onList` | (`arg`: `any`[]) => `void` |
| `onError?` | (`err`: [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void` |
| `opts?` | [`ApiListOptions`](../interfaces/lib_k8s_cluster.ApiListOptions.md) |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubePriorityClasses\>('priorityClass').useApiList

#### Defined in

[lib/k8s/cluster.ts:87](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/cluster.ts#L87)

___

### useGet

▸ `Static` **useGet**(`name`, `namespace?`): [`any`, ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`item`: `any`) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `namespace?` | `string` |

#### Returns

[`any`, ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`item`: `any`) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Inherited from

makeKubeObject<KubePriorityClasses\>('priorityClass').useGet

#### Defined in

[lib/k8s/cluster.ts:101](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/cluster.ts#L101)

___

### useList

▸ `Static` **useList**(`opts?`): [`any`[], ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`items`: `any`[]) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ApiListOptions`](../interfaces/lib_k8s_cluster.ApiListOptions.md) |

#### Returns

[`any`[], ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`items`: `any`[]) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Inherited from

makeKubeObject<KubePriorityClasses\>('priorityClass').useList

#### Defined in

[lib/k8s/cluster.ts:98](https://github.com/headlamp-k8s/headlamp/blob/1093c364/frontend/src/lib/k8s/cluster.ts#L98)