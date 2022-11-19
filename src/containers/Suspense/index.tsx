import type { ComponentProps } from 'react';
import { Suspense } from 'react';

import useMount from '@/application/hooks/useMount';

const SSRSafeSuspense = (props: ComponentProps<typeof Suspense>) => {
  const isMounted = useMount();

  return isMounted ? <Suspense {...props} /> : <>{props.fallback}</>;
};

export default SSRSafeSuspense;
