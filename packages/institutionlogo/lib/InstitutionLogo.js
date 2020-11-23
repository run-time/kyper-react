import React from 'react'
import PropTypes from 'prop-types'
import { useTokens } from '@kyper/tokenprovider'

export const InstitutionLogo = ({
  alt = 'Institution logo image',
  institutionGuid,
  size = 32,
  style = {},
  ...rest
}) => {
  const tokens = useTokens()
  const backUpSrc =
    'http://content.moneydesktop.com/storage/MD_Assets/serenity/default_institution_logo.png'
  const src = `http://content.moneydesktop.com/storage/MD_Assets/Ipad%20Logos/100x100/${institutionGuid}_100x100.png`

  return (
    <img
      alt={alt}
      height={size}
      onError={e => (e.target.src = backUpSrc)}
      src={src}
      style={{ borderRadius: tokens.BorderRadius.Small, ...style }}
      width={size}
      {...rest}
    />
  )
}

InstitutionLogo.propTypes = {
  alt: PropTypes.string,
  institutionGuid: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
}

InstitutionLogo.displayName = 'InstitutionLogo'
