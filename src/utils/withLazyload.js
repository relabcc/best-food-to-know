import { AspectRatio } from '@chakra-ui/react';
import React, { createElement, useEffect, useState } from 'react'
import { useIntersection } from 'react-use';

const LayzLoadInjector = ({ Subcomp, ratio, ...props }) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0
  });
  const [isVisible, setIsVisible] = useState(intersection && intersection.isIntersecting)
  useEffect(() => {
    setIsVisible(alreadyVisible => alreadyVisible || (intersection && intersection.isIntersecting))
  }, [intersection])
  return ratio ? (
    <AspectRatio ratio={ratio} ref={intersectionRef}>
      {isVisible ? (
        <div>
          <Subcomp ratio={ratio} width="100%" {...props} />
        </div>
      ) : <div />}
    </AspectRatio>
  ) : (
    isVisible ? <Subcomp ref={intersectionRef} {...props} /> : (
      <div ref={intersectionRef} />
    )
  )
}

const withLazyload = (Subcomp) => props => createElement(LayzLoadInjector, { Subcomp, ...props })

export default withLazyload
