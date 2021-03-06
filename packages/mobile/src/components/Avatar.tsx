/**
 * Essentially the same as @celo/react-components/components/Avatar but
 * retrieves the defaultCountryCode from redux and a fallback to an unknown user
 * icon.  Must be in mobile since redux & images are in the mobile package.
 */

import { Avatar as BaseAvatar } from '@celo/react-components/components/Avatar'
import * as React from 'react'
import { WithTranslation } from 'react-i18next'
import { TextStyle } from 'react-native'
import { useSelector } from 'react-redux'
import { defaultCountryCodeSelector } from 'src/account/selectors'
import { Namespaces, withTranslation } from 'src/i18n'
import { getRecipientThumbnail, Recipient } from 'src/recipients/recipient'

const DEFAULT_ICON_SIZE = 40

interface OwnProps {
  recipient?: Recipient
  e164Number?: string
  name?: string
  address?: string
  iconSize?: number
  displayNameStyle?: TextStyle
}

type Props = OwnProps & WithTranslation

// When redesigning, consider using getDisplayName from recipient.ts
function getDisplayName({ name, recipient, e164Number, address, t }: Props) {
  if (name) {
    return name
  }
  if (recipient && recipient.displayName) {
    return recipient.displayName
  }
  if (getE164Number(e164Number, recipient)) {
    return t('mobileNumber')
  }
  if (address) {
    return t('walletAddress')
  }
  // Rare but possible, such as when a user skips onboarding flow (in dev mode) and then views their own avatar
  return t('global:unknown')
}

export function getE164Number(e164Number?: string, recipient?: Recipient) {
  return e164Number || (recipient && recipient.e164PhoneNumber)
}

export function Avatar(props: Props) {
  const defaultCountryCode = useSelector(defaultCountryCodeSelector)
  const { recipient, e164Number, iconSize = DEFAULT_ICON_SIZE, displayNameStyle } = props

  return (
    <BaseAvatar
      {...props}
      defaultCountryCode={defaultCountryCode ? defaultCountryCode : undefined}
      name={getDisplayName(props)}
      e164Number={getE164Number(e164Number, recipient)}
      iconSize={iconSize}
      thumbnailPath={getRecipientThumbnail(recipient)}
      displayNameStyle={displayNameStyle}
    />
  )
}

export default withTranslation<Props>(Namespaces.sendFlow7)(Avatar)
