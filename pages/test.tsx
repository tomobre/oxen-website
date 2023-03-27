// import _404 from '@/assets/svgs/404.svg';
import { METADATA, UI } from '@/constants';
import { ReactElement, useContext } from 'react';

import CustomHead from '@/components/CustomHead';
import { ScreenContext } from '@/contexts/screen';
import classNames from 'classnames';

export default function Custom404(): ReactElement {
  const { isMobile, isTablet, isDesktop, isHuge, isEnormous } = useContext(
    ScreenContext,
  );

  const wrapperStyles = {
    width: '100%',
    maxWidth: '760px',
    margin: isDesktop ? '50px auto 100px' : '-10px auto',
    paddingLeft:
      isHuge || isEnormous ? '0' : `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
    paddingRight:
      isHuge || isEnormous ? '0' : `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
    paddingBottom: !isDesktop ? '33px' : '0px',
  };

  const svgStyles = {
    top: isDesktop ? '125px' : isTablet ? '20px' : '85px',
    left: isDesktop ? '-50px' : isTablet ? '30vw' : '-65px',
    width: isDesktop ? '810px' : isTablet ? '833px' : '933px',
  };

  const _404SectionStyles = {
    top: isDesktop ? '45px' : isTablet ? '35px' : '25px',
  };

  const _404TitleStyles = {
    lineHeight: '0px',
    paddingTop: '2.3rem',
    paddingBottom: '3.3rem',
  };

  const _404TextStyles = {
    lineHeight: '1.15em',
  };

  const absoluteBoxStyles = {
    marginTop: isTablet ? '20px' : '0px',
    minHeight: isTablet ? '330px' : '450px',
  };

  return (
    <div className="flex items-center justify-center flex-grow h-full">
      <iframe src="https://staging.getsession.org/"></iframe>
    </div>
  );
}
