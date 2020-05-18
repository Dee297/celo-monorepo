# ValidatorsWrapper

Contract for voting for validators and managing validator groups.

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹Validators›

  ↳ **ValidatorsWrapper**

## Index

### Constructors

* [constructor](_wrappers_validators_.validatorswrapper.md#constructor)

### Properties

* [affiliate](_wrappers_validators_.validatorswrapper.md#affiliate)
* [deaffiliate](_wrappers_validators_.validatorswrapper.md#deaffiliate)
* [events](_wrappers_validators_.validatorswrapper.md#events)
* [forceDeaffiliateIfValidator](_wrappers_validators_.validatorswrapper.md#forcedeaffiliateifvalidator)
* [getAccountLockedGoldRequirement](_wrappers_validators_.validatorswrapper.md#getaccountlockedgoldrequirement)
* [getEpochNumber](_wrappers_validators_.validatorswrapper.md#getepochnumber)
* [getEpochSize](_wrappers_validators_.validatorswrapper.md#getepochsize)
* [getRegisteredValidatorGroupsAddresses](_wrappers_validators_.validatorswrapper.md#getregisteredvalidatorgroupsaddresses)
* [getSlashingMultiplierResetPeriod](_wrappers_validators_.validatorswrapper.md#getslashingmultiplierresetperiod)
* [getValidatorGroupSize](_wrappers_validators_.validatorswrapper.md#getvalidatorgroupsize)
* [getValidatorMembershipHistory](_wrappers_validators_.validatorswrapper.md#getvalidatormembershiphistory)
* [getValidatorMembershipHistoryExtraData](_wrappers_validators_.validatorswrapper.md#getvalidatormembershiphistoryextradata)
* [isValidator](_wrappers_validators_.validatorswrapper.md#isvalidator)
* [isValidatorGroup](_wrappers_validators_.validatorswrapper.md#isvalidatorgroup)
* [registerValidator](_wrappers_validators_.validatorswrapper.md#registervalidator)
* [removeMember](_wrappers_validators_.validatorswrapper.md#removemember)
* [resetSlashingMultiplier](_wrappers_validators_.validatorswrapper.md#resetslashingmultiplier)
* [setNextCommissionUpdate](_wrappers_validators_.validatorswrapper.md#setnextcommissionupdate)
* [updateBlsPublicKey](_wrappers_validators_.validatorswrapper.md#updateblspublickey)
* [updateCommission](_wrappers_validators_.validatorswrapper.md#updatecommission)

### Accessors

* [address](_wrappers_validators_.validatorswrapper.md#address)

### Methods

* [addMember](_wrappers_validators_.validatorswrapper.md#addmember)
* [currentSignerSet](_wrappers_validators_.validatorswrapper.md#currentsignerset)
* [currentValidatorAccountsSet](_wrappers_validators_.validatorswrapper.md#currentvalidatoraccountsset)
* [deregisterValidator](_wrappers_validators_.validatorswrapper.md#deregistervalidator)
* [deregisterValidatorGroup](_wrappers_validators_.validatorswrapper.md#deregistervalidatorgroup)
* [findValidatorMembershipHistoryIndex](_wrappers_validators_.validatorswrapper.md#findvalidatormembershiphistoryindex)
* [getConfig](_wrappers_validators_.validatorswrapper.md#getconfig)
* [getGroupLockedGoldRequirements](_wrappers_validators_.validatorswrapper.md#getgrouplockedgoldrequirements)
* [getRegisteredValidatorGroups](_wrappers_validators_.validatorswrapper.md#getregisteredvalidatorgroups)
* [getRegisteredValidators](_wrappers_validators_.validatorswrapper.md#getregisteredvalidators)
* [getRegisteredValidatorsAddresses](_wrappers_validators_.validatorswrapper.md#getregisteredvalidatorsaddresses)
* [getValidator](_wrappers_validators_.validatorswrapper.md#getvalidator)
* [getValidatorFromSigner](_wrappers_validators_.validatorswrapper.md#getvalidatorfromsigner)
* [getValidatorGroup](_wrappers_validators_.validatorswrapper.md#getvalidatorgroup)
* [getValidatorLockedGoldRequirements](_wrappers_validators_.validatorswrapper.md#getvalidatorlockedgoldrequirements)
* [getValidatorMembershipHistoryIndex](_wrappers_validators_.validatorswrapper.md#getvalidatormembershiphistoryindex)
* [getValidatorRewards](_wrappers_validators_.validatorswrapper.md#getvalidatorrewards)
* [meetsValidatorBalanceRequirements](_wrappers_validators_.validatorswrapper.md#meetsvalidatorbalancerequirements)
* [meetsValidatorGroupBalanceRequirements](_wrappers_validators_.validatorswrapper.md#meetsvalidatorgroupbalancerequirements)
* [registerValidatorGroup](_wrappers_validators_.validatorswrapper.md#registervalidatorgroup)
* [reorderMember](_wrappers_validators_.validatorswrapper.md#reordermember)
* [signerToAccount](_wrappers_validators_.validatorswrapper.md#signertoaccount)
* [validatorSignerToAccount](_wrappers_validators_.validatorswrapper.md#validatorsignertoaccount)

## Constructors

### constructor

+ **new ValidatorsWrapper**\(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: Validators\): [_ValidatorsWrapper_](_wrappers_validators_.validatorswrapper.md)

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:19_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L19)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](_kit_.contractkit.md) |
| `contract` | Validators |

**Returns:** [_ValidatorsWrapper_](_wrappers_validators_.validatorswrapper.md)

## Properties

### affiliate

• **affiliate**: _function_ = proxySend\( this.kit, this.contract.methods.affiliate \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:441_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L441)

Affiliates a validator with a group, allowing it to be added as a member. De-affiliates with the previously affiliated group if present.

**`param`** The validator group with which to affiliate.

#### Type declaration:

▸ \(`group`: [Address](../external-modules/_base_.md#address)\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `group` | [Address](../external-modules/_base_.md#address) |

### deaffiliate

• **deaffiliate**: _function_ = proxySend\(this.kit, this.contract.methods.deaffiliate\)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:451_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L451)

De-affiliates a validator, removing it from the group for which it is a member. Fails if the account is not a validator with non-zero affiliation.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### events

• **events**: _any_ = this.contract.events

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_events_](_wrappers_basewrapper_.basewrapper.md#events)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:33_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L33)

### forceDeaffiliateIfValidator

• **forceDeaffiliateIfValidator**: _function_ = proxySend\( this.kit, this.contract.methods.forceDeaffiliateIfValidator \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:457_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L457)

Removes a validator from the group for which it is a member.

**`param`** The validator to deaffiliate from their affiliated validator group.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getAccountLockedGoldRequirement

• **getAccountLockedGoldRequirement**: _function_ = proxyCall\( this.contract.methods.getAccountLockedGoldRequirement, undefined, valueToBigNumber \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:129_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L129)

Returns the Locked Gold requirements for specific account.

**`returns`** The Locked Gold requirements for a specific account.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getEpochNumber

• **getEpochNumber**: _function_ = proxyCall\(this.contract.methods.getEpochNumber, undefined, valueToBigNumber\)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:380_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L380)

Registers a validator unaffiliated with any validator group.

Fails if the account is already a validator or validator group.

**`param`** The address that the validator is using for consensus, should match the validator signer.

**`param`** The ECDSA public key that the validator is using for consensus. 64 bytes.

**`param`** The BLS public key that the validator is using for consensus, should pass proof of possession. 48 bytes.

**`param`** The BLS public key proof-of-possession, which consists of a signature on the account address. 96 bytes.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getEpochSize

• **getEpochSize**: _function_ = proxyCall\(this.contract.methods.getEpochSize, undefined, valueToBigNumber\)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:382_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L382)

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getRegisteredValidatorGroupsAddresses

• **getRegisteredValidatorGroupsAddresses**: _function_ = proxyCall\( this.contract.methods.getRegisteredValidatorGroups \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:350_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L350)

Get list of registered validator group addresses

#### Type declaration:

▸ \(\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

### getSlashingMultiplierResetPeriod

• **getSlashingMultiplierResetPeriod**: _function_ = proxyCall\( this.contract.methods.slashingMultiplierResetPeriod, undefined, valueToBigNumber \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:138_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L138)

Returns the reset period for slashing multiplier.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getValidatorGroupSize

• **getValidatorGroupSize**: _function_ = proxyCall\( this.contract.methods.getGroupNumMembers, undefined, valueToInt \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:337_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L337)

Get the size \(amount of members\) of a ValidatorGroup

#### Type declaration:

▸ \(`group`: [Address](../external-modules/_base_.md#address)\): _Promise‹number›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `group` | [Address](../external-modules/_base_.md#address) |

### getValidatorMembershipHistory

• **getValidatorMembershipHistory**: _function_ = proxyCall\( this.contract.methods.getMembershipHistory, undefined, \(res\) =&gt; zip\(\(epoch, group\): GroupMembership =&gt; \({ epoch: valueToInt\(epoch\), group }\), res\[0\], res\[1\]\) \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:316_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L316)

Returns the Validator's group membership history

**`param`** The validator whose membership history to return.

**`returns`** The group membership history of a validator.

#### Type declaration:

▸ \(`validator`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_GroupMembership_](../interfaces/_wrappers_validators_.groupmembership.md)_\[\]›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `validator` | [Address](../external-modules/_base_.md#address) |

### getValidatorMembershipHistoryExtraData

• **getValidatorMembershipHistoryExtraData**: _function_ = proxyCall\( this.contract.methods.getMembershipHistory, undefined, \(res\) =&gt; \({ lastRemovedFromGroupTimestamp: valueToInt\(res\[2\]\), tail: valueToInt\(res\[3\]\) }\) \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:328_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L328)

Returns extra data from the Validator's group membership history

**`param`** The validator whose membership history to return.

**`returns`** The group membership history of a validator.

#### Type declaration:

▸ \(`validator`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_MembershipHistoryExtraData_](../interfaces/_wrappers_validators_.membershiphistoryextradata.md)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `validator` | [Address](../external-modules/_base_.md#address) |

### isValidator

• **isValidator**: _function_ = proxyCall\(this.contract.methods.isValidator\)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:208_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L208)

Returns whether a particular account has a registered validator.

**`param`** The account.

**`returns`** Whether a particular address is a registered validator.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isValidatorGroup

• **isValidatorGroup**: _function_ = proxyCall\(this.contract.methods.isValidatorGroup\)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:215_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L215)

Returns whether a particular account has a registered validator group.

**`param`** The account.

**`returns`** Whether a particular address is a registered validator group.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### registerValidator

• **registerValidator**: _function_ = proxySend\( this.kit, this.contract.methods.registerValidator, tupleParser\(stringToBytes, stringToBytes, stringToBytes\) \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:384_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L384)

#### Type declaration:

▸ \(`ecdsaPublicKey`: string, `blsPublicKey`: string, `blsPop`: string\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `ecdsaPublicKey` | string |
| `blsPublicKey` | string |
| `blsPop` | string |

### removeMember

• **removeMember**: _function_ = proxySend\(this.kit, this.contract.methods.removeMember\)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:495_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L495)

Removes a member from a ValidatorGroup The ValidatorGroup is specified by the `from` of the tx.

**`param`** The Validator to remove from the group

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### resetSlashingMultiplier

• **resetSlashingMultiplier**: _function_ = proxySend\(this.kit, this.contract.methods.resetSlashingMultiplier\)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:466_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L466)

Resets a group's slashing multiplier if it has been &gt;= the reset period since the last time the group was slashed.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### setNextCommissionUpdate

• **setNextCommissionUpdate**: _function_ = proxySend\( this.kit, this.contract.methods.setNextCommissionUpdate, tupleParser\(valueToFixidityString\) \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:86_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L86)

Queues an update to a validator group's commission.

**`param`** Fixidity representation of the commission this group receives on epoch payments made to its members. Must be in the range \[0, 1.0\].

#### Type declaration:

▸ \(`commission`: BigNumber.Value\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `commission` | BigNumber.Value |

### updateBlsPublicKey

• **updateBlsPublicKey**: _function_ = proxySend\( this.kit, this.contract.methods.updateBlsPublicKey, tupleParser\(stringToBytes, stringToBytes\) \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:194_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L194)

Updates a validator's BLS key.

**`param`** The BLS public key that the validator is using for consensus, should pass proof of possession. 48 bytes.

**`param`** The BLS public key proof-of-possession, which consists of a signature on the account address. 96 bytes.

**`returns`** True upon success.

#### Type declaration:

▸ \(`blsPublicKey`: string, `blsPop`: string\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blsPublicKey` | string |
| `blsPop` | string |

### updateCommission

• **updateCommission**: _function_ = proxySend\( this.kit, this.contract.methods.updateCommission \)

_Defined in_ [_contractkit/src/wrappers/Validators.ts:96_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L96)

Updates a validator group's commission based on the previously queued update

#### Type declaration:

▸ \(\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void›_

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_address_](_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_contractkit/src/wrappers/BaseWrapper.ts:23_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L23)

Contract address

**Returns:** _string_

## Methods

### addMember

▸ **addMember**\(`group`: [Address](../external-modules/_base_.md#address), `validator`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:473_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L473)

Adds a member to the end of a validator group's list of members. Fails if `validator` has not set their affiliation to this account.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `group` | [Address](../external-modules/_base_.md#address) | - |
| `validator` | [Address](../external-modules/_base_.md#address) | The validator to add to the group |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### currentSignerSet

▸ **currentSignerSet**\(\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:563_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L563)

Returns the current set of validator signer addresses

**Returns:** _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

### currentValidatorAccountsSet

▸ **currentValidatorAccountsSet**\(\): _Promise‹object\[\]›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:573_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L573)

Returns the current set of validator signer and account addresses

**Returns:** _Promise‹object\[\]›_

### deregisterValidator

▸ **deregisterValidator**\(`validatorAddress`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:398_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L398)

De-registers a validator, removing it from the group for which it is a member.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `validatorAddress` | [Address](../external-modules/_base_.md#address) | Address of the validator to deregister |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### deregisterValidatorGroup

▸ **deregisterValidatorGroup**\(`validatorGroupAddress`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:426_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L426)

De-registers a validator Group

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `validatorGroupAddress` | [Address](../external-modules/_base_.md#address) | Address of the validator group to deregister |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### findValidatorMembershipHistoryIndex

▸ **findValidatorMembershipHistoryIndex**\(`epoch`: number, `history`: [GroupMembership](../interfaces/_wrappers_validators_.groupmembership.md)\[\]\): _number_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:605_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L605)

Returns the index into `history` for `epoch`.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `epoch` | number | The needle. |
| `history` | [GroupMembership](../interfaces/_wrappers_validators_.groupmembership.md)\[\] | The haystack. |

**Returns:** _number_

Index for epoch or -1.

### getConfig

▸ **getConfig**\(\): _Promise‹_[_ValidatorsConfig_](../interfaces/_wrappers_validators_.validatorsconfig.md)_›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:147_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L147)

Returns current configuration parameters.

**Returns:** _Promise‹_[_ValidatorsConfig_](../interfaces/_wrappers_validators_.validatorsconfig.md)_›_

### getGroupLockedGoldRequirements

▸ **getGroupLockedGoldRequirements**\(\): _Promise‹_[_LockedGoldRequirements_](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)_›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:117_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L117)

Returns the Locked Gold requirements for validator groups.

**Returns:** _Promise‹_[_LockedGoldRequirements_](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)_›_

The Locked Gold requirements for validator groups.

### getRegisteredValidatorGroups

▸ **getRegisteredValidatorGroups**\(\): _Promise‹_[_ValidatorGroup_](../interfaces/_wrappers_validators_.validatorgroup.md)_\[\]›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:361_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L361)

Get list of registered validator groups

**Returns:** _Promise‹_[_ValidatorGroup_](../interfaces/_wrappers_validators_.validatorgroup.md)_\[\]›_

### getRegisteredValidators

▸ **getRegisteredValidators**\(`blockNumber?`: undefined \| number\): _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_\[\]›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:355_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L355)

Get list of registered validators

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_\[\]›_

### getRegisteredValidatorsAddresses

▸ **getRegisteredValidatorsAddresses**\(`blockNumber?`: undefined \| number\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:344_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L344)

Get list of registered validator addresses

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

### getValidator

▸ **getValidator**\(`address`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:243_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L243)

Get Validator information

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_›_

### getValidatorFromSigner

▸ **getValidatorFromSigner**\(`address`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:260_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L260)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_›_

### getValidatorGroup

▸ **getValidatorGroup**\(`address`: [Address](../external-modules/_base_.md#address), `getAffiliates`: boolean, `blockNumber?`: undefined \| number\): _Promise‹_[_ValidatorGroup_](../interfaces/_wrappers_validators_.validatorgroup.md)_›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:278_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L278)

Get ValidatorGroup information

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) | - |
| `getAffiliates` | boolean | true |
| `blockNumber?` | undefined \| number | - |

**Returns:** _Promise‹_[_ValidatorGroup_](../interfaces/_wrappers_validators_.validatorgroup.md)_›_

### getValidatorLockedGoldRequirements

▸ **getValidatorLockedGoldRequirements**\(\): _Promise‹_[_LockedGoldRequirements_](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)_›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:105_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L105)

Returns the Locked Gold requirements for validators.

**Returns:** _Promise‹_[_LockedGoldRequirements_](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)_›_

The Locked Gold requirements for validators.

### getValidatorMembershipHistoryIndex

▸ **getValidatorMembershipHistoryIndex**\(`validator`: [Validator](../interfaces/_wrappers_validators_.validator.md), `blockNumber?`: undefined \| number\): _Promise‹object›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:585_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L585)

Returns the group membership for `validator`.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `validator` | [Validator](../interfaces/_wrappers_validators_.validator.md) | Address of validator to retrieve group membership for. |
| `blockNumber?` | undefined \| number | Block number to retrieve group membership at. |

**Returns:** _Promise‹object›_

Group and membership history index for `validator`.

### getValidatorRewards

▸ **getValidatorRewards**\(`epochNumber`: number\): _Promise‹_[_ValidatorReward_](../interfaces/_wrappers_validators_.validatorreward.md)_\[\]›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:537_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L537)

Retrieves ValidatorRewards for epochNumber.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `epochNumber` | number | The epoch to retrieve ValidatorRewards at. |

**Returns:** _Promise‹_[_ValidatorReward_](../interfaces/_wrappers_validators_.validatorreward.md)_\[\]›_

### meetsValidatorBalanceRequirements

▸ **meetsValidatorBalanceRequirements**\(`address`: [Address](../external-modules/_base_.md#address)\): _Promise‹boolean›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:222_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L222)

Returns whether an account meets the requirements to register a validator.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |

**Returns:** _Promise‹boolean›_

Whether an account meets the requirements to register a validator.

### meetsValidatorGroupBalanceRequirements

▸ **meetsValidatorGroupBalanceRequirements**\(`address`: [Address](../external-modules/_base_.md#address)\): _Promise‹boolean›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:235_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L235)

Returns whether an account meets the requirements to register a group.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |

**Returns:** _Promise‹boolean›_

Whether an account meets the requirements to register a group.

### registerValidatorGroup

▸ **registerValidatorGroup**\(`commission`: BigNumber\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:415_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L415)

Registers a validator group with no member validators. Fails if the account is already a validator or validator group. Fails if the account does not have sufficient weight.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `commission` | BigNumber | the commission this group receives on epoch payments made to its members. |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### reorderMember

▸ **reorderMember**\(`groupAddr`: [Address](../external-modules/_base_.md#address), `validator`: [Address](../external-modules/_base_.md#address), `newIndex`: number\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:504_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L504)

Reorders a member within a validator group. Fails if `validator` is not a member of the account's validator group.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `groupAddr` | [Address](../external-modules/_base_.md#address) | The validator group |
| `validator` | [Address](../external-modules/_base_.md#address) | The validator to reorder. |
| `newIndex` | number | New position for the validator |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### signerToAccount

▸ **signerToAccount**\(`signerAddress`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹string›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:181_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L181)

Returns the account associated with `signer`.

**`dev`** Fails if the `signer` is not an account or previously authorized signer.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `signerAddress` | [Address](../external-modules/_base_.md#address) |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹string›_

The associated account.

### validatorSignerToAccount

▸ **validatorSignerToAccount**\(`signerAddress`: [Address](../external-modules/_base_.md#address)\): _Promise‹string›_

_Defined in_ [_contractkit/src/wrappers/Validators.ts:170_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L170)

Returns the account associated with `signer`.

**`dev`** Fails if the `signer` is not an account or currently authorized validator.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `signerAddress` | [Address](../external-modules/_base_.md#address) |

**Returns:** _Promise‹string›_

The associated account.
